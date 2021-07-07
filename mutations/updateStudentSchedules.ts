import { KeystoneContext, SessionStore } from '@keystone-next/types';
import { Session } from '../types';
import { UserUpdateInput } from '../.keystone/schema-types';
import { User } from '../schemas/User'



const graphql = String.raw;

async function updateStudentSchedules(root: any,
  { studentScheduleData }: { studentScheduleData: string },

  context: KeystoneContext
): Promise<UserUpdateInput> {

  // get JSON array of students and updated schedules
  console.log('Updating Student Schedules');
  const allStudentUpdateResults = [];
  const studentDataList = JSON.parse(studentScheduleData);

  //go through each student and update their schedule or create a new student
  await Promise.all(studentDataList.map(async student => {
    const studentUpdateResults = {};
    const studentInfo = await context.lists.User.findMany({
      where: { email: student.email },
      resolveFields: graphql`
              id
              email
              name
          `,
    });

    studentUpdateResults.email = student.email;
    if (studentInfo.length > 0) {
      studentUpdateResults.id = studentInfo[0].id;
    }
    studentUpdateResults.existed = !!studentInfo[0];
    //check if the student has a teacher for block 1
    if (student.block1) {
      const block1Teacher = await context.lists.User.findMany({
        where: { email: student.block1 }, resolveFields: graphql`
      id
    email
    ` });
      //if the student has a teacher for block 1 set the teacher to that teacher
      if (block1Teacher.length > 0) {
        studentUpdateResults.block1Teacher = block1Teacher[0].id;
      }
    }
    if (student.block2) {
      const block2Teacher = await context.lists.User.findMany({
        where: { email: student.block2 }, resolveFields: graphql`
      id
    email
    ` });
      if (block2Teacher.length > 0) {
        studentUpdateResults.block2Teacher = block2Teacher[0].id;
      }
    }
    if (student.block3) {
      const block3Teacher = await context.lists.User.findMany({
        where: { email: student.block3 }, resolveFields: graphql`
      id
    email
    ` });
      if (block3Teacher.length > 0) {
        studentUpdateResults.block3Teacher = block3Teacher[0].id;
      }
    }
    if (student.block4) {
      const block4Teacher = await context.lists.User.findMany({
        where: { email: student.block4 }, resolveFields: graphql`
      id
    email
    ` });
      if (block4Teacher.length > 0) {
        studentUpdateResults.block4Teacher = block4Teacher[0].id;
      }
    }
    if (student.block5) {
      const block5Teacher = await context.lists.User.findMany({
        where: { email: student.block5 }, resolveFields: graphql`
      id
    email
    ` });
      if (block5Teacher.length > 0) {
        studentUpdateResults.block5Teacher = block5Teacher[0].id;
      }
    }


    // console.log(student);
    // console.log(block1Teacher);
    // console.log(studentUpdateResults);
    allStudentUpdateResults.push(studentUpdateResults);
  }))

  console.log(allStudentUpdateResults);
  const name = JSON.stringify(allStudentUpdateResults);
  return { name }
}

export default updateStudentSchedules;