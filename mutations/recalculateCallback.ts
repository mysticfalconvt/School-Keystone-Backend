import { KeystoneContext, SessionStore } from '@keystone-next/types';
import { Session } from '../types';
import { UserUpdateInput, PbisTeamUpdateInput } from '../.keystone/schema-types';
import { User } from '../schemas/User'
import { Callback } from '../schemas/Callback';



const graphql = String.raw;

async function recalculateCallback(root: any,
  { callbackID }: { callbackID: string },

  context: KeystoneContext
): Promise<UserUpdateInput> {
  console.log('Updating Callback Count');
  console.log(`callback: ${callbackID}`)
  const callback = await context.lists.Callback.findOne({
    where: { id: callbackID }, resolveFields: graphql`
  id
  teacher{
    id
  }
  student{
    id
    taTeacher{
      id
    }
  }
  
  `})
  // console.log(callback)
  const studentId = callback.student.id
  const teacherId = callback.teacher.id
  const taTeacherId = callback.student.taTeacher.id

  //get student callback totals
  const student = await context.lists.User.findOne({
    where: { id: studentId },
    resolveFields: graphql`
            id
             callbackTotal: _callbackItemsMeta{
             count
            }
             callbackToDo: _callbackItemsMeta(where:{dateCompleted:null}){
             count
            }
          
        `,
  });
  // console.log(student)

  //get teacher callback totals
  const teacher = await context.lists.User.findOne({
    where: { id: teacherId },
    resolveFields: graphql`
            id
             callbackTotal: _callbackAssignedMeta{
             count
            }
             callbackToDo: _callbackAssignedMeta(where:{dateCompleted:null}){
             count
            }
          
        `,
  });

  const updateStudentCallbacks = await context.lists.User.updateOne({
    id: studentId,
    data: {
      callbackCount: student.callbackToDo.count,
      totalCallbackCount: student.callbackTotal.count
    },
    resolveFields: false,
  });
  const updateTeacherCallbacks = await context.lists.User.updateOne({
    id: teacherId,
    data: {
      callbackCount: teacher.callbackToDo.count,
      totalCallbackCount: teacher.callbackTotal.count
    },
    resolveFields: false,
  });


}

export default recalculateCallback;