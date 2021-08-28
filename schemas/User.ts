import { list } from '@keystone-next/keystone/schema';
import { text, password, relationship, integer, timestamp } from '@keystone-next/fields';
import { isSignedIn, permissions, rules } from '../access';
import { permissionFields } from './fields';

export const User = list({
  access: {
    // create: () => true,
    // read: isSignedIn,
    // update: isSignedIn,
    delete: isSignedIn,
    // delete: rules.canManageUsers,
    // update: rules.canManageUsers,
    // only people with the permission can delete themselves!
    // You can't delete yourself
  },
  ui: {
    // hide the backend UI from regular users
    hideCreate: (args) => !rules.canManageUsers(args),
    hideDelete: (args) => !rules.canManageUsers(args),
  },
  fields: {
    name: text({ isRequired: true, isIndexed: true }),
    preferredName: text(),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    taStudents: relationship({ ref: 'User.taTeacher', many: true }),
    taTeacher: relationship({ ref: 'User.taStudents', many: false }),
    parent: relationship({ ref: 'User.children', many: true }),
    children: relationship({ ref: 'User.parent', many: true }),
    ...permissionFields,
    // role: relationship({
    //   ref: 'Role.assignedTo',
    //   // many: true,
    //   // access: {
    //   //   create: permissions.canManageUsers,
    //   //   update: permissions.canManageUsers,
    //   // },
    // }),
    //classes
    block1Teacher: relationship({ ref: 'User.block1Students', many: false }),
    block1Students: relationship({ ref: 'User.block1Teacher', many: true }),
    block2Teacher: relationship({ ref: 'User.block2Students', many: false }),
    block2Students: relationship({ ref: 'User.block2Teacher', many: true }),
    block3Teacher: relationship({ ref: 'User.block3Students', many: false }),
    block3Students: relationship({ ref: 'User.block3Teacher', many: true }),
    block4Teacher: relationship({ ref: 'User.block4Students', many: false }),
    block4Students: relationship({ ref: 'User.block4Teacher', many: true }),
    block5Teacher: relationship({ ref: 'User.block5Students', many: false }),
    block5Students: relationship({ ref: 'User.block5Teacher', many: true }),

    //other relationships
    taTeam: relationship({ ref: 'PbisTeam.taTeacher' }),
    studentFocusTeacher: relationship({ ref: 'StudentFocus.teacher', many: true }),
    studentFocusStudent: relationship({ ref: 'StudentFocus.student', many: true }),
    studentCellPhoneViolation: relationship({ ref: 'CellPhoneViolation.student', many: true }),
    teacherCellPhoneViolation: relationship({ ref: 'CellPhoneViolation.teacher', many: true }),
    teacherPbisCards: relationship({ ref: 'PbisCard.teacher', many: true }),
    studentPbisCards: relationship({ ref: 'PbisCard.student', many: true }),
    teacherDiscipline: relationship({ ref: 'Discipline.teacher', many: true }),
    studentDiscipline: relationship({ ref: 'Discipline.student', many: true }),
    callbackItems: relationship({ ref: 'Callback.student', many: true }),
    callbackAssigned: relationship({ ref: 'Callback.teacher', many: true }),
    messageSender: relationship({ ref: 'Message.sender', many: true }),
    messageReceiver: relationship({ ref: 'Message.receiver', many: true }),

    //PBIS Collection Winners
    currentTaWinner: relationship({ ref: 'User.studentIsCurrentWinner', many: false }),
    previousTaWinner: relationship({ ref: 'User.studentIsPreviousWinner', many: false }),
    studentIsCurrentWinner: relationship({ ref: 'User.currentTaWinner', many: false }),
    studentIsPreviousWinner: relationship({ ref: 'User.previousTaWinner', many: false }),
    birthday: relationship({ ref: 'Birthday.student', many: false }),
    individualPbisLevel: integer({ defaultValue: 0 }),


    // Important Info
    callbackCount: integer({ defaultValue: 0 }),
    totalCallbackCount: integer({ defaultValue: 0 }),
    PbisCardCount: integer({ defaultValue: 0 }),
    YearPbisCount: integer({ defaultValue: 0 }),
    teacherSubject: text({ defaultValue: undefined, }),
    taPbisCardCount: integer({ defaultValue: 0 }),
    averageTimeToCompleteCallback: integer(),

    // assignments
    block1Assignment: text({ defaultValue: 'Current Assignment for Block 1 goes here' }),
    block1ClassName: text({ defaultValue: 'Class Name Goes Here' }),
    block1AssignmentLastUpdated: timestamp(),
    block2Assignment: text({ defaultValue: 'Current Assignment for Block 2 goes here' }),
    block2ClassName: text({ defaultValue: 'Class Name Goes Here' }),
    block2AssignmentLastUpdated: timestamp(),
    block3Assignment: text({ defaultValue: 'Current Assignment for Block 3 goes here' }),
    block3ClassName: text({ defaultValue: 'Class Name Goes Here' }),
    block3AssignmentLastUpdated: timestamp(),
    block4Assignment: text({ defaultValue: 'Current Assignment for Block 4 goes here' }),
    block4ClassName: text({ defaultValue: 'Class Name Goes Here' }),
    block4AssignmentLastUpdated: timestamp(),
    block5Assignment: text({ defaultValue: 'Current Assignment for Block 5 goes here' }),
    block5ClassName: text({ defaultValue: 'Class Name Goes Here' }),
    block5AssignmentLastUpdated: timestamp(),


  },
});
