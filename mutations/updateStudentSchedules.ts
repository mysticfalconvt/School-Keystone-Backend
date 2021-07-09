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


    //check if the student has a teacher for block 1
    if (student.block1) {
      const block1Teacher = await context.lists.User.findMany({
        where: { email: student.block1 }, resolveFields: graphql`
      id
    email
    ` });

      //if the student has a teacher for block 1 set the teacher to that teacher
      if (block1Teacher.length > 0) {
        studentUpdateResults.block1Teacher = { connect: { id: block1Teacher[0].id } };
      }
    }
    if (student.block2) {
      const block2Teacher = await context.lists.User.findMany({
        where: { email: student.block2 }, resolveFields: graphql`
      id
    email
    ` });
      if (block2Teacher.length > 0) {
        studentUpdateResults.block2Teacher = { connect: { id: block2Teacher[0].id } };
      }
    }
    if (student.block3) {
      const block3Teacher = await context.lists.User.findMany({
        where: { email: student.block3 }, resolveFields: graphql`
      id
    email
    ` });
      if (block3Teacher.length > 0) {
        studentUpdateResults.block3Teacher = { connect: { id: block3Teacher[0].id } };
      }
    }
    if (student.block4) {
      const block4Teacher = await context.lists.User.findMany({
        where: { email: student.block4 }, resolveFields: graphql`
      id
    email
    ` });
      if (block4Teacher.length > 0) {
        studentUpdateResults.block4Teacher = { connect: { id: block4Teacher[0].id } };
      }
    }
    if (student.block5) {
      const block5Teacher = await context.lists.User.findMany({
        where: { email: student.block5 }, resolveFields: graphql`
      id
    email
    ` });
      if (block5Teacher.length > 0) {
        studentUpdateResults.block5Teacher = { connect: { id: block5Teacher[0].id } };
      }
    }
    if (student.ta) {
      const taTeacher = await context.lists.User.findMany({
        where: { email: student.ta }, resolveFields: graphql`
      id
    email
    ` });
      if (taTeacher.length > 0) {
        studentUpdateResults.taTeacher = { connect: { id: taTeacher[0].id } };
      }
    }

    //if user is new create new user
    if (!studentInfo[0]?.id) {
      console.log(`Creating new user ${student.email}`);
      //get name as a string from email separated by . 
      const nameArray = student.email.split('@')[0].split('.');
      //join the names together
      studentUpdateResults.name = nameArray.join(' ');
      studentUpdateResults.isStudent = true;
      studentUpdateResults.password = "password"
      const createdStudent = await context.lists.User.createOne({
        data: {
          ...studentUpdateResults
        },
        resolveFields: 'id'
      })
    }

    //if user exists update their schedule
    if (studentInfo[0]?.id) {
      console.log(`Updating user ${student.email}`);
      const updatedStudent = await context.lists.User.updateOne({
        id: studentInfo[0].id,
        data: {
          ...studentUpdateResults
        }
      });
    }
    // save if student is new or updated and add data to array
    studentUpdateResults.existed = !!studentInfo[0];
    allStudentUpdateResults.push(studentUpdateResults);
  }))

  const name = JSON.stringify(allStudentUpdateResults);
  return { name }
}

export default updateStudentSchedules;