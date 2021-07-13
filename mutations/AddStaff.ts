import { KeystoneContext, SessionStore } from '@keystone-next/types';
import { Session } from '../types';
import { UserUpdateInput } from '../.keystone/schema-types';
import { User } from '../schemas/User'



const graphql = String.raw;

async function addStaff(root: any,
  { staffData }: { staffData: string },

  context: KeystoneContext
): Promise<UserUpdateInput> {

  // get JSON array of students and updated schedules
  console.log('Adding Staff');
  const allStudentUpdateResults = [];
  const studentDataList = JSON.parse(staffData);
  //go through each student and update their schedule or create a new student
  await Promise.all(studentDataList.map(async student => {
    const studentUpdateResults = {};
    const studentInfo = await context.lists.User.findMany({
      where: { email: student.email.toLowerCase() },
      resolveFields: graphql`
              id
              email
              name
          `,
    });

    studentUpdateResults.email = student.email.toLowerCase();




    //if user is new create new user
    if (!studentInfo[0]?.id) {
      console.log(`Creating new user ${student.email}`);
      //get name as a string from email separated by . 
      const nameArray = student.email.split('@')[0].split('.');
      //join the names together
      studentUpdateResults.name = nameArray.join(' ');
      studentUpdateResults.isStudent = false;

      studentUpdateResults.canManageCalendar = true;
      studentUpdateResults.canSeeOtherUsers = true;
      studentUpdateResults.canManageUsers = true;
      studentUpdateResults.canManageRoles = true;
      studentUpdateResults.canManageLinks = true;
      studentUpdateResults.canManageDiscipline = false;
      studentUpdateResults.canSeeAllDiscipline = false;
      studentUpdateResults.canSeeAllTeacherEvents = true;
      studentUpdateResults.canSeeStudentEvents = false;
      studentUpdateResults.canSeeOwnCallback = true;
      studentUpdateResults.canSeeAllCallback = true;
      studentUpdateResults.hasTA = student.hasta ? true : false;
      studentUpdateResults.hasClasses = student.hasclasses ? true : false;
      studentUpdateResults.isStaff = true;
      studentUpdateResults.isTeacher = student.isteacher ? true : false;

      studentUpdateResults.password = "password"
      const createdStudent = await context.lists.User.createOne({
        data: {
          ...studentUpdateResults
        },
        resolveFields: 'id'
      })
    }

    //if user exists update their schedule
    // if (studentInfo[0]?.id) {
    //   console.log(`Updating user ${student.email}`);
    //   const updatedStudent = await context.lists.User.updateOne({
    //     id: studentInfo[0].id,
    //     data: {
    //       ...studentUpdateResults
    //     }
    //   });
    // }
    // save if student is new or updated and add data to array
    studentUpdateResults.existed = !!studentInfo[0];
    allStudentUpdateResults.push(studentUpdateResults);
  }))

  const name = JSON.stringify(allStudentUpdateResults);
  return { name }
}

export default addStaff;