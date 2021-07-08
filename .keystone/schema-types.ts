type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type UserRelateToManyInput = {
  readonly create?: ReadonlyArray<UserCreateInput | null> | null;
  readonly connect?: ReadonlyArray<UserWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<UserWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type UserRelateToOneInput = {
  readonly create?: UserCreateInput | null;
  readonly connect?: UserWhereUniqueInput | null;
  readonly disconnect?: UserWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type RoleRelateToOneInput = {
  readonly create?: RoleCreateInput | null;
  readonly connect?: RoleWhereUniqueInput | null;
  readonly disconnect?: RoleWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type PbisTeamRelateToOneInput = {
  readonly create?: PbisTeamCreateInput | null;
  readonly connect?: PbisTeamWhereUniqueInput | null;
  readonly disconnect?: PbisTeamWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type StudentFocusRelateToManyInput = {
  readonly create?: ReadonlyArray<StudentFocusCreateInput | null> | null;
  readonly connect?: ReadonlyArray<StudentFocusWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<StudentFocusWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CellPhoneViolationRelateToManyInput = {
  readonly create?: ReadonlyArray<CellPhoneViolationCreateInput | null> | null;
  readonly connect?: ReadonlyArray<CellPhoneViolationWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<CellPhoneViolationWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type PbisCardRelateToManyInput = {
  readonly create?: ReadonlyArray<PbisCardCreateInput | null> | null;
  readonly connect?: ReadonlyArray<PbisCardWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<PbisCardWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type DisciplineRelateToManyInput = {
  readonly create?: ReadonlyArray<DisciplineCreateInput | null> | null;
  readonly connect?: ReadonlyArray<DisciplineWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<DisciplineWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CallbackRelateToManyInput = {
  readonly create?: ReadonlyArray<CallbackCreateInput | null> | null;
  readonly connect?: ReadonlyArray<CallbackWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<CallbackWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type MessageRelateToManyInput = {
  readonly create?: ReadonlyArray<MessageCreateInput | null> | null;
  readonly connect?: ReadonlyArray<MessageWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<MessageWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly taStudents_every?: UserWhereInput | null;
  readonly taStudents_some?: UserWhereInput | null;
  readonly taStudents_none?: UserWhereInput | null;
  readonly taTeacher?: UserWhereInput | null;
  readonly taTeacher_is_null?: Scalars['Boolean'] | null;
  readonly parent_every?: UserWhereInput | null;
  readonly parent_some?: UserWhereInput | null;
  readonly parent_none?: UserWhereInput | null;
  readonly children_every?: UserWhereInput | null;
  readonly children_some?: UserWhereInput | null;
  readonly children_none?: UserWhereInput | null;
  readonly canManageCalendar?: Scalars['Boolean'] | null;
  readonly canManageCalendar_not?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers_not?: Scalars['Boolean'] | null;
  readonly canManageUsers?: Scalars['Boolean'] | null;
  readonly canManageUsers_not?: Scalars['Boolean'] | null;
  readonly canManageRoles?: Scalars['Boolean'] | null;
  readonly canManageRoles_not?: Scalars['Boolean'] | null;
  readonly canManageLinks?: Scalars['Boolean'] | null;
  readonly canManageLinks_not?: Scalars['Boolean'] | null;
  readonly canManageDiscipline?: Scalars['Boolean'] | null;
  readonly canManageDiscipline_not?: Scalars['Boolean'] | null;
  readonly canSeeAllDiscipline?: Scalars['Boolean'] | null;
  readonly canSeeAllDiscipline_not?: Scalars['Boolean'] | null;
  readonly canSeeAllTeacherEvents?: Scalars['Boolean'] | null;
  readonly canSeeAllTeacherEvents_not?: Scalars['Boolean'] | null;
  readonly canSeeStudentEvents?: Scalars['Boolean'] | null;
  readonly canSeeStudentEvents_not?: Scalars['Boolean'] | null;
  readonly canSeeOwnCallback?: Scalars['Boolean'] | null;
  readonly canSeeOwnCallback_not?: Scalars['Boolean'] | null;
  readonly canSeeAllCallback?: Scalars['Boolean'] | null;
  readonly canSeeAllCallback_not?: Scalars['Boolean'] | null;
  readonly hasTA?: Scalars['Boolean'] | null;
  readonly hasTA_not?: Scalars['Boolean'] | null;
  readonly hasClasses?: Scalars['Boolean'] | null;
  readonly hasClasses_not?: Scalars['Boolean'] | null;
  readonly isStudent?: Scalars['Boolean'] | null;
  readonly isStudent_not?: Scalars['Boolean'] | null;
  readonly isParent?: Scalars['Boolean'] | null;
  readonly isParent_not?: Scalars['Boolean'] | null;
  readonly isStaff?: Scalars['Boolean'] | null;
  readonly isStaff_not?: Scalars['Boolean'] | null;
  readonly isTeacher?: Scalars['Boolean'] | null;
  readonly isTeacher_not?: Scalars['Boolean'] | null;
  readonly isSuperAdmin?: Scalars['Boolean'] | null;
  readonly isSuperAdmin_not?: Scalars['Boolean'] | null;
  readonly role?: RoleWhereInput | null;
  readonly role_is_null?: Scalars['Boolean'] | null;
  readonly block1Teacher?: UserWhereInput | null;
  readonly block1Teacher_is_null?: Scalars['Boolean'] | null;
  readonly block1Students_every?: UserWhereInput | null;
  readonly block1Students_some?: UserWhereInput | null;
  readonly block1Students_none?: UserWhereInput | null;
  readonly block2Teacher?: UserWhereInput | null;
  readonly block2Teacher_is_null?: Scalars['Boolean'] | null;
  readonly block2Students_every?: UserWhereInput | null;
  readonly block2Students_some?: UserWhereInput | null;
  readonly block2Students_none?: UserWhereInput | null;
  readonly block3Teacher?: UserWhereInput | null;
  readonly block3Teacher_is_null?: Scalars['Boolean'] | null;
  readonly block3Students_every?: UserWhereInput | null;
  readonly block3Students_some?: UserWhereInput | null;
  readonly block3Students_none?: UserWhereInput | null;
  readonly block4Teacher?: UserWhereInput | null;
  readonly block4Teacher_is_null?: Scalars['Boolean'] | null;
  readonly block4Students_every?: UserWhereInput | null;
  readonly block4Students_some?: UserWhereInput | null;
  readonly block4Students_none?: UserWhereInput | null;
  readonly block5Teacher?: UserWhereInput | null;
  readonly block5Teacher_is_null?: Scalars['Boolean'] | null;
  readonly block5Students_every?: UserWhereInput | null;
  readonly block5Students_some?: UserWhereInput | null;
  readonly block5Students_none?: UserWhereInput | null;
  readonly taTeam?: PbisTeamWhereInput | null;
  readonly taTeam_is_null?: Scalars['Boolean'] | null;
  readonly studentFocusTeacher_every?: StudentFocusWhereInput | null;
  readonly studentFocusTeacher_some?: StudentFocusWhereInput | null;
  readonly studentFocusTeacher_none?: StudentFocusWhereInput | null;
  readonly studentFocusStudent_every?: StudentFocusWhereInput | null;
  readonly studentFocusStudent_some?: StudentFocusWhereInput | null;
  readonly studentFocusStudent_none?: StudentFocusWhereInput | null;
  readonly studentCellPhoneViolation_every?: CellPhoneViolationWhereInput | null;
  readonly studentCellPhoneViolation_some?: CellPhoneViolationWhereInput | null;
  readonly studentCellPhoneViolation_none?: CellPhoneViolationWhereInput | null;
  readonly teacherCellPhoneViolation_every?: CellPhoneViolationWhereInput | null;
  readonly teacherCellPhoneViolation_some?: CellPhoneViolationWhereInput | null;
  readonly teacherCellPhoneViolation_none?: CellPhoneViolationWhereInput | null;
  readonly teacherPbisCards_every?: PbisCardWhereInput | null;
  readonly teacherPbisCards_some?: PbisCardWhereInput | null;
  readonly teacherPbisCards_none?: PbisCardWhereInput | null;
  readonly studentPbisCards_every?: PbisCardWhereInput | null;
  readonly studentPbisCards_some?: PbisCardWhereInput | null;
  readonly studentPbisCards_none?: PbisCardWhereInput | null;
  readonly teacherDiscipline_every?: DisciplineWhereInput | null;
  readonly teacherDiscipline_some?: DisciplineWhereInput | null;
  readonly teacherDiscipline_none?: DisciplineWhereInput | null;
  readonly studentDiscipline_every?: DisciplineWhereInput | null;
  readonly studentDiscipline_some?: DisciplineWhereInput | null;
  readonly studentDiscipline_none?: DisciplineWhereInput | null;
  readonly callbackItems_every?: CallbackWhereInput | null;
  readonly callbackItems_some?: CallbackWhereInput | null;
  readonly callbackItems_none?: CallbackWhereInput | null;
  readonly callbackAssigned_every?: CallbackWhereInput | null;
  readonly callbackAssigned_some?: CallbackWhereInput | null;
  readonly callbackAssigned_none?: CallbackWhereInput | null;
  readonly messageSender_every?: MessageWhereInput | null;
  readonly messageSender_some?: MessageWhereInput | null;
  readonly messageSender_none?: MessageWhereInput | null;
  readonly messageReceiver_every?: MessageWhereInput | null;
  readonly messageReceiver_some?: MessageWhereInput | null;
  readonly messageReceiver_none?: MessageWhereInput | null;
  readonly callbackCount?: Scalars['Int'] | null;
  readonly callbackCount_not?: Scalars['Int'] | null;
  readonly callbackCount_lt?: Scalars['Int'] | null;
  readonly callbackCount_lte?: Scalars['Int'] | null;
  readonly callbackCount_gt?: Scalars['Int'] | null;
  readonly callbackCount_gte?: Scalars['Int'] | null;
  readonly callbackCount_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly callbackCount_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly totalCallbackCount?: Scalars['Int'] | null;
  readonly totalCallbackCount_not?: Scalars['Int'] | null;
  readonly totalCallbackCount_lt?: Scalars['Int'] | null;
  readonly totalCallbackCount_lte?: Scalars['Int'] | null;
  readonly totalCallbackCount_gt?: Scalars['Int'] | null;
  readonly totalCallbackCount_gte?: Scalars['Int'] | null;
  readonly totalCallbackCount_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly totalCallbackCount_not_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly PbisCardCount?: Scalars['Int'] | null;
  readonly PbisCardCount_not?: Scalars['Int'] | null;
  readonly PbisCardCount_lt?: Scalars['Int'] | null;
  readonly PbisCardCount_lte?: Scalars['Int'] | null;
  readonly PbisCardCount_gt?: Scalars['Int'] | null;
  readonly PbisCardCount_gte?: Scalars['Int'] | null;
  readonly PbisCardCount_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly PbisCardCount_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly YearPbisCount?: Scalars['Int'] | null;
  readonly YearPbisCount_not?: Scalars['Int'] | null;
  readonly YearPbisCount_lt?: Scalars['Int'] | null;
  readonly YearPbisCount_lte?: Scalars['Int'] | null;
  readonly YearPbisCount_gt?: Scalars['Int'] | null;
  readonly YearPbisCount_gte?: Scalars['Int'] | null;
  readonly YearPbisCount_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly YearPbisCount_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly teacherSubject?: Scalars['String'] | null;
  readonly teacherSubject_not?: Scalars['String'] | null;
  readonly teacherSubject_contains?: Scalars['String'] | null;
  readonly teacherSubject_not_contains?: Scalars['String'] | null;
  readonly teacherSubject_starts_with?: Scalars['String'] | null;
  readonly teacherSubject_not_starts_with?: Scalars['String'] | null;
  readonly teacherSubject_ends_with?: Scalars['String'] | null;
  readonly teacherSubject_not_ends_with?: Scalars['String'] | null;
  readonly teacherSubject_i?: Scalars['String'] | null;
  readonly teacherSubject_not_i?: Scalars['String'] | null;
  readonly teacherSubject_contains_i?: Scalars['String'] | null;
  readonly teacherSubject_not_contains_i?: Scalars['String'] | null;
  readonly teacherSubject_starts_with_i?: Scalars['String'] | null;
  readonly teacherSubject_not_starts_with_i?: Scalars['String'] | null;
  readonly teacherSubject_ends_with_i?: Scalars['String'] | null;
  readonly teacherSubject_not_ends_with_i?: Scalars['String'] | null;
  readonly teacherSubject_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly teacherSubject_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly taPbisCardCount?: Scalars['Int'] | null;
  readonly taPbisCardCount_not?: Scalars['Int'] | null;
  readonly taPbisCardCount_lt?: Scalars['Int'] | null;
  readonly taPbisCardCount_lte?: Scalars['Int'] | null;
  readonly taPbisCardCount_gt?: Scalars['Int'] | null;
  readonly taPbisCardCount_gte?: Scalars['Int'] | null;
  readonly taPbisCardCount_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly taPbisCardCount_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly averageTimeToCompleteCallback?: Scalars['Int'] | null;
  readonly averageTimeToCompleteCallback_not?: Scalars['Int'] | null;
  readonly averageTimeToCompleteCallback_lt?: Scalars['Int'] | null;
  readonly averageTimeToCompleteCallback_lte?: Scalars['Int'] | null;
  readonly averageTimeToCompleteCallback_gt?: Scalars['Int'] | null;
  readonly averageTimeToCompleteCallback_gte?: Scalars['Int'] | null;
  readonly averageTimeToCompleteCallback_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly averageTimeToCompleteCallback_not_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly block1Assignment?: Scalars['String'] | null;
  readonly block1Assignment_not?: Scalars['String'] | null;
  readonly block1Assignment_contains?: Scalars['String'] | null;
  readonly block1Assignment_not_contains?: Scalars['String'] | null;
  readonly block1Assignment_starts_with?: Scalars['String'] | null;
  readonly block1Assignment_not_starts_with?: Scalars['String'] | null;
  readonly block1Assignment_ends_with?: Scalars['String'] | null;
  readonly block1Assignment_not_ends_with?: Scalars['String'] | null;
  readonly block1Assignment_i?: Scalars['String'] | null;
  readonly block1Assignment_not_i?: Scalars['String'] | null;
  readonly block1Assignment_contains_i?: Scalars['String'] | null;
  readonly block1Assignment_not_contains_i?: Scalars['String'] | null;
  readonly block1Assignment_starts_with_i?: Scalars['String'] | null;
  readonly block1Assignment_not_starts_with_i?: Scalars['String'] | null;
  readonly block1Assignment_ends_with_i?: Scalars['String'] | null;
  readonly block1Assignment_not_ends_with_i?: Scalars['String'] | null;
  readonly block1Assignment_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly block1Assignment_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly block1ClassName?: Scalars['String'] | null;
  readonly block1ClassName_not?: Scalars['String'] | null;
  readonly block1ClassName_contains?: Scalars['String'] | null;
  readonly block1ClassName_not_contains?: Scalars['String'] | null;
  readonly block1ClassName_starts_with?: Scalars['String'] | null;
  readonly block1ClassName_not_starts_with?: Scalars['String'] | null;
  readonly block1ClassName_ends_with?: Scalars['String'] | null;
  readonly block1ClassName_not_ends_with?: Scalars['String'] | null;
  readonly block1ClassName_i?: Scalars['String'] | null;
  readonly block1ClassName_not_i?: Scalars['String'] | null;
  readonly block1ClassName_contains_i?: Scalars['String'] | null;
  readonly block1ClassName_not_contains_i?: Scalars['String'] | null;
  readonly block1ClassName_starts_with_i?: Scalars['String'] | null;
  readonly block1ClassName_not_starts_with_i?: Scalars['String'] | null;
  readonly block1ClassName_ends_with_i?: Scalars['String'] | null;
  readonly block1ClassName_not_ends_with_i?: Scalars['String'] | null;
  readonly block1ClassName_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly block1ClassName_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly block1AssignmentLastUpdated?: Scalars['String'] | null;
  readonly block1AssignmentLastUpdated_not?: Scalars['String'] | null;
  readonly block1AssignmentLastUpdated_lt?: Scalars['String'] | null;
  readonly block1AssignmentLastUpdated_lte?: Scalars['String'] | null;
  readonly block1AssignmentLastUpdated_gt?: Scalars['String'] | null;
  readonly block1AssignmentLastUpdated_gte?: Scalars['String'] | null;
  readonly block1AssignmentLastUpdated_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly block1AssignmentLastUpdated_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly block2Assignment?: Scalars['String'] | null;
  readonly block2Assignment_not?: Scalars['String'] | null;
  readonly block2Assignment_contains?: Scalars['String'] | null;
  readonly block2Assignment_not_contains?: Scalars['String'] | null;
  readonly block2Assignment_starts_with?: Scalars['String'] | null;
  readonly block2Assignment_not_starts_with?: Scalars['String'] | null;
  readonly block2Assignment_ends_with?: Scalars['String'] | null;
  readonly block2Assignment_not_ends_with?: Scalars['String'] | null;
  readonly block2Assignment_i?: Scalars['String'] | null;
  readonly block2Assignment_not_i?: Scalars['String'] | null;
  readonly block2Assignment_contains_i?: Scalars['String'] | null;
  readonly block2Assignment_not_contains_i?: Scalars['String'] | null;
  readonly block2Assignment_starts_with_i?: Scalars['String'] | null;
  readonly block2Assignment_not_starts_with_i?: Scalars['String'] | null;
  readonly block2Assignment_ends_with_i?: Scalars['String'] | null;
  readonly block2Assignment_not_ends_with_i?: Scalars['String'] | null;
  readonly block2Assignment_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly block2Assignment_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly block2ClassName?: Scalars['String'] | null;
  readonly block2ClassName_not?: Scalars['String'] | null;
  readonly block2ClassName_contains?: Scalars['String'] | null;
  readonly block2ClassName_not_contains?: Scalars['String'] | null;
  readonly block2ClassName_starts_with?: Scalars['String'] | null;
  readonly block2ClassName_not_starts_with?: Scalars['String'] | null;
  readonly block2ClassName_ends_with?: Scalars['String'] | null;
  readonly block2ClassName_not_ends_with?: Scalars['String'] | null;
  readonly block2ClassName_i?: Scalars['String'] | null;
  readonly block2ClassName_not_i?: Scalars['String'] | null;
  readonly block2ClassName_contains_i?: Scalars['String'] | null;
  readonly block2ClassName_not_contains_i?: Scalars['String'] | null;
  readonly block2ClassName_starts_with_i?: Scalars['String'] | null;
  readonly block2ClassName_not_starts_with_i?: Scalars['String'] | null;
  readonly block2ClassName_ends_with_i?: Scalars['String'] | null;
  readonly block2ClassName_not_ends_with_i?: Scalars['String'] | null;
  readonly block2ClassName_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly block2ClassName_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly block2AssignmentLastUpdated?: Scalars['String'] | null;
  readonly block2AssignmentLastUpdated_not?: Scalars['String'] | null;
  readonly block2AssignmentLastUpdated_lt?: Scalars['String'] | null;
  readonly block2AssignmentLastUpdated_lte?: Scalars['String'] | null;
  readonly block2AssignmentLastUpdated_gt?: Scalars['String'] | null;
  readonly block2AssignmentLastUpdated_gte?: Scalars['String'] | null;
  readonly block2AssignmentLastUpdated_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly block2AssignmentLastUpdated_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly block3Assignment?: Scalars['String'] | null;
  readonly block3Assignment_not?: Scalars['String'] | null;
  readonly block3Assignment_contains?: Scalars['String'] | null;
  readonly block3Assignment_not_contains?: Scalars['String'] | null;
  readonly block3Assignment_starts_with?: Scalars['String'] | null;
  readonly block3Assignment_not_starts_with?: Scalars['String'] | null;
  readonly block3Assignment_ends_with?: Scalars['String'] | null;
  readonly block3Assignment_not_ends_with?: Scalars['String'] | null;
  readonly block3Assignment_i?: Scalars['String'] | null;
  readonly block3Assignment_not_i?: Scalars['String'] | null;
  readonly block3Assignment_contains_i?: Scalars['String'] | null;
  readonly block3Assignment_not_contains_i?: Scalars['String'] | null;
  readonly block3Assignment_starts_with_i?: Scalars['String'] | null;
  readonly block3Assignment_not_starts_with_i?: Scalars['String'] | null;
  readonly block3Assignment_ends_with_i?: Scalars['String'] | null;
  readonly block3Assignment_not_ends_with_i?: Scalars['String'] | null;
  readonly block3Assignment_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly block3Assignment_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly block3ClassName?: Scalars['String'] | null;
  readonly block3ClassName_not?: Scalars['String'] | null;
  readonly block3ClassName_contains?: Scalars['String'] | null;
  readonly block3ClassName_not_contains?: Scalars['String'] | null;
  readonly block3ClassName_starts_with?: Scalars['String'] | null;
  readonly block3ClassName_not_starts_with?: Scalars['String'] | null;
  readonly block3ClassName_ends_with?: Scalars['String'] | null;
  readonly block3ClassName_not_ends_with?: Scalars['String'] | null;
  readonly block3ClassName_i?: Scalars['String'] | null;
  readonly block3ClassName_not_i?: Scalars['String'] | null;
  readonly block3ClassName_contains_i?: Scalars['String'] | null;
  readonly block3ClassName_not_contains_i?: Scalars['String'] | null;
  readonly block3ClassName_starts_with_i?: Scalars['String'] | null;
  readonly block3ClassName_not_starts_with_i?: Scalars['String'] | null;
  readonly block3ClassName_ends_with_i?: Scalars['String'] | null;
  readonly block3ClassName_not_ends_with_i?: Scalars['String'] | null;
  readonly block3ClassName_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly block3ClassName_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly block3AssignmentLastUpdated?: Scalars['String'] | null;
  readonly block3AssignmentLastUpdated_not?: Scalars['String'] | null;
  readonly block3AssignmentLastUpdated_lt?: Scalars['String'] | null;
  readonly block3AssignmentLastUpdated_lte?: Scalars['String'] | null;
  readonly block3AssignmentLastUpdated_gt?: Scalars['String'] | null;
  readonly block3AssignmentLastUpdated_gte?: Scalars['String'] | null;
  readonly block3AssignmentLastUpdated_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly block3AssignmentLastUpdated_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly block4Assignment?: Scalars['String'] | null;
  readonly block4Assignment_not?: Scalars['String'] | null;
  readonly block4Assignment_contains?: Scalars['String'] | null;
  readonly block4Assignment_not_contains?: Scalars['String'] | null;
  readonly block4Assignment_starts_with?: Scalars['String'] | null;
  readonly block4Assignment_not_starts_with?: Scalars['String'] | null;
  readonly block4Assignment_ends_with?: Scalars['String'] | null;
  readonly block4Assignment_not_ends_with?: Scalars['String'] | null;
  readonly block4Assignment_i?: Scalars['String'] | null;
  readonly block4Assignment_not_i?: Scalars['String'] | null;
  readonly block4Assignment_contains_i?: Scalars['String'] | null;
  readonly block4Assignment_not_contains_i?: Scalars['String'] | null;
  readonly block4Assignment_starts_with_i?: Scalars['String'] | null;
  readonly block4Assignment_not_starts_with_i?: Scalars['String'] | null;
  readonly block4Assignment_ends_with_i?: Scalars['String'] | null;
  readonly block4Assignment_not_ends_with_i?: Scalars['String'] | null;
  readonly block4Assignment_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly block4Assignment_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly block4ClassName?: Scalars['String'] | null;
  readonly block4ClassName_not?: Scalars['String'] | null;
  readonly block4ClassName_contains?: Scalars['String'] | null;
  readonly block4ClassName_not_contains?: Scalars['String'] | null;
  readonly block4ClassName_starts_with?: Scalars['String'] | null;
  readonly block4ClassName_not_starts_with?: Scalars['String'] | null;
  readonly block4ClassName_ends_with?: Scalars['String'] | null;
  readonly block4ClassName_not_ends_with?: Scalars['String'] | null;
  readonly block4ClassName_i?: Scalars['String'] | null;
  readonly block4ClassName_not_i?: Scalars['String'] | null;
  readonly block4ClassName_contains_i?: Scalars['String'] | null;
  readonly block4ClassName_not_contains_i?: Scalars['String'] | null;
  readonly block4ClassName_starts_with_i?: Scalars['String'] | null;
  readonly block4ClassName_not_starts_with_i?: Scalars['String'] | null;
  readonly block4ClassName_ends_with_i?: Scalars['String'] | null;
  readonly block4ClassName_not_ends_with_i?: Scalars['String'] | null;
  readonly block4ClassName_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly block4ClassName_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly block4AssignmentLastUpdated?: Scalars['String'] | null;
  readonly block4AssignmentLastUpdated_not?: Scalars['String'] | null;
  readonly block4AssignmentLastUpdated_lt?: Scalars['String'] | null;
  readonly block4AssignmentLastUpdated_lte?: Scalars['String'] | null;
  readonly block4AssignmentLastUpdated_gt?: Scalars['String'] | null;
  readonly block4AssignmentLastUpdated_gte?: Scalars['String'] | null;
  readonly block4AssignmentLastUpdated_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly block4AssignmentLastUpdated_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly block5Assignment?: Scalars['String'] | null;
  readonly block5Assignment_not?: Scalars['String'] | null;
  readonly block5Assignment_contains?: Scalars['String'] | null;
  readonly block5Assignment_not_contains?: Scalars['String'] | null;
  readonly block5Assignment_starts_with?: Scalars['String'] | null;
  readonly block5Assignment_not_starts_with?: Scalars['String'] | null;
  readonly block5Assignment_ends_with?: Scalars['String'] | null;
  readonly block5Assignment_not_ends_with?: Scalars['String'] | null;
  readonly block5Assignment_i?: Scalars['String'] | null;
  readonly block5Assignment_not_i?: Scalars['String'] | null;
  readonly block5Assignment_contains_i?: Scalars['String'] | null;
  readonly block5Assignment_not_contains_i?: Scalars['String'] | null;
  readonly block5Assignment_starts_with_i?: Scalars['String'] | null;
  readonly block5Assignment_not_starts_with_i?: Scalars['String'] | null;
  readonly block5Assignment_ends_with_i?: Scalars['String'] | null;
  readonly block5Assignment_not_ends_with_i?: Scalars['String'] | null;
  readonly block5Assignment_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly block5Assignment_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly block5ClassName?: Scalars['String'] | null;
  readonly block5ClassName_not?: Scalars['String'] | null;
  readonly block5ClassName_contains?: Scalars['String'] | null;
  readonly block5ClassName_not_contains?: Scalars['String'] | null;
  readonly block5ClassName_starts_with?: Scalars['String'] | null;
  readonly block5ClassName_not_starts_with?: Scalars['String'] | null;
  readonly block5ClassName_ends_with?: Scalars['String'] | null;
  readonly block5ClassName_not_ends_with?: Scalars['String'] | null;
  readonly block5ClassName_i?: Scalars['String'] | null;
  readonly block5ClassName_not_i?: Scalars['String'] | null;
  readonly block5ClassName_contains_i?: Scalars['String'] | null;
  readonly block5ClassName_not_contains_i?: Scalars['String'] | null;
  readonly block5ClassName_starts_with_i?: Scalars['String'] | null;
  readonly block5ClassName_not_starts_with_i?: Scalars['String'] | null;
  readonly block5ClassName_ends_with_i?: Scalars['String'] | null;
  readonly block5ClassName_not_ends_with_i?: Scalars['String'] | null;
  readonly block5ClassName_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly block5ClassName_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly block5AssignmentLastUpdated?: Scalars['String'] | null;
  readonly block5AssignmentLastUpdated_not?: Scalars['String'] | null;
  readonly block5AssignmentLastUpdated_lt?: Scalars['String'] | null;
  readonly block5AssignmentLastUpdated_lte?: Scalars['String'] | null;
  readonly block5AssignmentLastUpdated_gt?: Scalars['String'] | null;
  readonly block5AssignmentLastUpdated_gte?: Scalars['String'] | null;
  readonly block5AssignmentLastUpdated_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly block5AssignmentLastUpdated_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetToken_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_not?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_not?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthToken_is_set?: Scalars['Boolean'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_not?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_not?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'taStudents_ASC'
  | 'taStudents_DESC'
  | 'taTeacher_ASC'
  | 'taTeacher_DESC'
  | 'parent_ASC'
  | 'parent_DESC'
  | 'children_ASC'
  | 'children_DESC'
  | 'canManageCalendar_ASC'
  | 'canManageCalendar_DESC'
  | 'canSeeOtherUsers_ASC'
  | 'canSeeOtherUsers_DESC'
  | 'canManageUsers_ASC'
  | 'canManageUsers_DESC'
  | 'canManageRoles_ASC'
  | 'canManageRoles_DESC'
  | 'canManageLinks_ASC'
  | 'canManageLinks_DESC'
  | 'canManageDiscipline_ASC'
  | 'canManageDiscipline_DESC'
  | 'canSeeAllDiscipline_ASC'
  | 'canSeeAllDiscipline_DESC'
  | 'canSeeAllTeacherEvents_ASC'
  | 'canSeeAllTeacherEvents_DESC'
  | 'canSeeStudentEvents_ASC'
  | 'canSeeStudentEvents_DESC'
  | 'canSeeOwnCallback_ASC'
  | 'canSeeOwnCallback_DESC'
  | 'canSeeAllCallback_ASC'
  | 'canSeeAllCallback_DESC'
  | 'hasTA_ASC'
  | 'hasTA_DESC'
  | 'hasClasses_ASC'
  | 'hasClasses_DESC'
  | 'isStudent_ASC'
  | 'isStudent_DESC'
  | 'isParent_ASC'
  | 'isParent_DESC'
  | 'isStaff_ASC'
  | 'isStaff_DESC'
  | 'isTeacher_ASC'
  | 'isTeacher_DESC'
  | 'isSuperAdmin_ASC'
  | 'isSuperAdmin_DESC'
  | 'role_ASC'
  | 'role_DESC'
  | 'block1Teacher_ASC'
  | 'block1Teacher_DESC'
  | 'block1Students_ASC'
  | 'block1Students_DESC'
  | 'block2Teacher_ASC'
  | 'block2Teacher_DESC'
  | 'block2Students_ASC'
  | 'block2Students_DESC'
  | 'block3Teacher_ASC'
  | 'block3Teacher_DESC'
  | 'block3Students_ASC'
  | 'block3Students_DESC'
  | 'block4Teacher_ASC'
  | 'block4Teacher_DESC'
  | 'block4Students_ASC'
  | 'block4Students_DESC'
  | 'block5Teacher_ASC'
  | 'block5Teacher_DESC'
  | 'block5Students_ASC'
  | 'block5Students_DESC'
  | 'taTeam_ASC'
  | 'taTeam_DESC'
  | 'studentFocusTeacher_ASC'
  | 'studentFocusTeacher_DESC'
  | 'studentFocusStudent_ASC'
  | 'studentFocusStudent_DESC'
  | 'studentCellPhoneViolation_ASC'
  | 'studentCellPhoneViolation_DESC'
  | 'teacherCellPhoneViolation_ASC'
  | 'teacherCellPhoneViolation_DESC'
  | 'teacherPbisCards_ASC'
  | 'teacherPbisCards_DESC'
  | 'studentPbisCards_ASC'
  | 'studentPbisCards_DESC'
  | 'teacherDiscipline_ASC'
  | 'teacherDiscipline_DESC'
  | 'studentDiscipline_ASC'
  | 'studentDiscipline_DESC'
  | 'callbackItems_ASC'
  | 'callbackItems_DESC'
  | 'callbackAssigned_ASC'
  | 'callbackAssigned_DESC'
  | 'messageSender_ASC'
  | 'messageSender_DESC'
  | 'messageReceiver_ASC'
  | 'messageReceiver_DESC'
  | 'callbackCount_ASC'
  | 'callbackCount_DESC'
  | 'totalCallbackCount_ASC'
  | 'totalCallbackCount_DESC'
  | 'PbisCardCount_ASC'
  | 'PbisCardCount_DESC'
  | 'YearPbisCount_ASC'
  | 'YearPbisCount_DESC'
  | 'teacherSubject_ASC'
  | 'teacherSubject_DESC'
  | 'taPbisCardCount_ASC'
  | 'taPbisCardCount_DESC'
  | 'averageTimeToCompleteCallback_ASC'
  | 'averageTimeToCompleteCallback_DESC'
  | 'block1Assignment_ASC'
  | 'block1Assignment_DESC'
  | 'block1ClassName_ASC'
  | 'block1ClassName_DESC'
  | 'block1AssignmentLastUpdated_ASC'
  | 'block1AssignmentLastUpdated_DESC'
  | 'block2Assignment_ASC'
  | 'block2Assignment_DESC'
  | 'block2ClassName_ASC'
  | 'block2ClassName_DESC'
  | 'block2AssignmentLastUpdated_ASC'
  | 'block2AssignmentLastUpdated_DESC'
  | 'block3Assignment_ASC'
  | 'block3Assignment_DESC'
  | 'block3ClassName_ASC'
  | 'block3ClassName_DESC'
  | 'block3AssignmentLastUpdated_ASC'
  | 'block3AssignmentLastUpdated_DESC'
  | 'block4Assignment_ASC'
  | 'block4Assignment_DESC'
  | 'block4ClassName_ASC'
  | 'block4ClassName_DESC'
  | 'block4AssignmentLastUpdated_ASC'
  | 'block4AssignmentLastUpdated_DESC'
  | 'block5Assignment_ASC'
  | 'block5Assignment_DESC'
  | 'block5ClassName_ASC'
  | 'block5ClassName_DESC'
  | 'block5AssignmentLastUpdated_ASC'
  | 'block5AssignmentLastUpdated_DESC'
  | 'passwordResetIssuedAt_ASC'
  | 'passwordResetIssuedAt_DESC'
  | 'passwordResetRedeemedAt_ASC'
  | 'passwordResetRedeemedAt_DESC'
  | 'magicAuthIssuedAt_ASC'
  | 'magicAuthIssuedAt_DESC'
  | 'magicAuthRedeemedAt_ASC'
  | 'magicAuthRedeemedAt_DESC';

export type UserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly taStudents?: UserRelateToManyInput | null;
  readonly taTeacher?: UserRelateToOneInput | null;
  readonly parent?: UserRelateToManyInput | null;
  readonly children?: UserRelateToManyInput | null;
  readonly canManageCalendar?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers?: Scalars['Boolean'] | null;
  readonly canManageUsers?: Scalars['Boolean'] | null;
  readonly canManageRoles?: Scalars['Boolean'] | null;
  readonly canManageLinks?: Scalars['Boolean'] | null;
  readonly canManageDiscipline?: Scalars['Boolean'] | null;
  readonly canSeeAllDiscipline?: Scalars['Boolean'] | null;
  readonly canSeeAllTeacherEvents?: Scalars['Boolean'] | null;
  readonly canSeeStudentEvents?: Scalars['Boolean'] | null;
  readonly canSeeOwnCallback?: Scalars['Boolean'] | null;
  readonly canSeeAllCallback?: Scalars['Boolean'] | null;
  readonly hasTA?: Scalars['Boolean'] | null;
  readonly hasClasses?: Scalars['Boolean'] | null;
  readonly isStudent?: Scalars['Boolean'] | null;
  readonly isParent?: Scalars['Boolean'] | null;
  readonly isStaff?: Scalars['Boolean'] | null;
  readonly isTeacher?: Scalars['Boolean'] | null;
  readonly isSuperAdmin?: Scalars['Boolean'] | null;
  readonly role?: RoleRelateToOneInput | null;
  readonly block1Teacher?: UserRelateToOneInput | null;
  readonly block1Students?: UserRelateToManyInput | null;
  readonly block2Teacher?: UserRelateToOneInput | null;
  readonly block2Students?: UserRelateToManyInput | null;
  readonly block3Teacher?: UserRelateToOneInput | null;
  readonly block3Students?: UserRelateToManyInput | null;
  readonly block4Teacher?: UserRelateToOneInput | null;
  readonly block4Students?: UserRelateToManyInput | null;
  readonly block5Teacher?: UserRelateToOneInput | null;
  readonly block5Students?: UserRelateToManyInput | null;
  readonly taTeam?: PbisTeamRelateToOneInput | null;
  readonly studentFocusTeacher?: StudentFocusRelateToManyInput | null;
  readonly studentFocusStudent?: StudentFocusRelateToManyInput | null;
  readonly studentCellPhoneViolation?: CellPhoneViolationRelateToManyInput | null;
  readonly teacherCellPhoneViolation?: CellPhoneViolationRelateToManyInput | null;
  readonly teacherPbisCards?: PbisCardRelateToManyInput | null;
  readonly studentPbisCards?: PbisCardRelateToManyInput | null;
  readonly teacherDiscipline?: DisciplineRelateToManyInput | null;
  readonly studentDiscipline?: DisciplineRelateToManyInput | null;
  readonly callbackItems?: CallbackRelateToManyInput | null;
  readonly callbackAssigned?: CallbackRelateToManyInput | null;
  readonly messageSender?: MessageRelateToManyInput | null;
  readonly messageReceiver?: MessageRelateToManyInput | null;
  readonly callbackCount?: Scalars['Int'] | null;
  readonly totalCallbackCount?: Scalars['Int'] | null;
  readonly PbisCardCount?: Scalars['Int'] | null;
  readonly YearPbisCount?: Scalars['Int'] | null;
  readonly teacherSubject?: Scalars['String'] | null;
  readonly taPbisCardCount?: Scalars['Int'] | null;
  readonly averageTimeToCompleteCallback?: Scalars['Int'] | null;
  readonly block1Assignment?: Scalars['String'] | null;
  readonly block1ClassName?: Scalars['String'] | null;
  readonly block1AssignmentLastUpdated?: Scalars['String'] | null;
  readonly block2Assignment?: Scalars['String'] | null;
  readonly block2ClassName?: Scalars['String'] | null;
  readonly block2AssignmentLastUpdated?: Scalars['String'] | null;
  readonly block3Assignment?: Scalars['String'] | null;
  readonly block3ClassName?: Scalars['String'] | null;
  readonly block3AssignmentLastUpdated?: Scalars['String'] | null;
  readonly block4Assignment?: Scalars['String'] | null;
  readonly block4ClassName?: Scalars['String'] | null;
  readonly block4AssignmentLastUpdated?: Scalars['String'] | null;
  readonly block5Assignment?: Scalars['String'] | null;
  readonly block5ClassName?: Scalars['String'] | null;
  readonly block5AssignmentLastUpdated?: Scalars['String'] | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly taStudents?: UserRelateToManyInput | null;
  readonly taTeacher?: UserRelateToOneInput | null;
  readonly parent?: UserRelateToManyInput | null;
  readonly children?: UserRelateToManyInput | null;
  readonly canManageCalendar?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers?: Scalars['Boolean'] | null;
  readonly canManageUsers?: Scalars['Boolean'] | null;
  readonly canManageRoles?: Scalars['Boolean'] | null;
  readonly canManageLinks?: Scalars['Boolean'] | null;
  readonly canManageDiscipline?: Scalars['Boolean'] | null;
  readonly canSeeAllDiscipline?: Scalars['Boolean'] | null;
  readonly canSeeAllTeacherEvents?: Scalars['Boolean'] | null;
  readonly canSeeStudentEvents?: Scalars['Boolean'] | null;
  readonly canSeeOwnCallback?: Scalars['Boolean'] | null;
  readonly canSeeAllCallback?: Scalars['Boolean'] | null;
  readonly hasTA?: Scalars['Boolean'] | null;
  readonly hasClasses?: Scalars['Boolean'] | null;
  readonly isStudent?: Scalars['Boolean'] | null;
  readonly isParent?: Scalars['Boolean'] | null;
  readonly isStaff?: Scalars['Boolean'] | null;
  readonly isTeacher?: Scalars['Boolean'] | null;
  readonly isSuperAdmin?: Scalars['Boolean'] | null;
  readonly role?: RoleRelateToOneInput | null;
  readonly block1Teacher?: UserRelateToOneInput | null;
  readonly block1Students?: UserRelateToManyInput | null;
  readonly block2Teacher?: UserRelateToOneInput | null;
  readonly block2Students?: UserRelateToManyInput | null;
  readonly block3Teacher?: UserRelateToOneInput | null;
  readonly block3Students?: UserRelateToManyInput | null;
  readonly block4Teacher?: UserRelateToOneInput | null;
  readonly block4Students?: UserRelateToManyInput | null;
  readonly block5Teacher?: UserRelateToOneInput | null;
  readonly block5Students?: UserRelateToManyInput | null;
  readonly taTeam?: PbisTeamRelateToOneInput | null;
  readonly studentFocusTeacher?: StudentFocusRelateToManyInput | null;
  readonly studentFocusStudent?: StudentFocusRelateToManyInput | null;
  readonly studentCellPhoneViolation?: CellPhoneViolationRelateToManyInput | null;
  readonly teacherCellPhoneViolation?: CellPhoneViolationRelateToManyInput | null;
  readonly teacherPbisCards?: PbisCardRelateToManyInput | null;
  readonly studentPbisCards?: PbisCardRelateToManyInput | null;
  readonly teacherDiscipline?: DisciplineRelateToManyInput | null;
  readonly studentDiscipline?: DisciplineRelateToManyInput | null;
  readonly callbackItems?: CallbackRelateToManyInput | null;
  readonly callbackAssigned?: CallbackRelateToManyInput | null;
  readonly messageSender?: MessageRelateToManyInput | null;
  readonly messageReceiver?: MessageRelateToManyInput | null;
  readonly callbackCount?: Scalars['Int'] | null;
  readonly totalCallbackCount?: Scalars['Int'] | null;
  readonly PbisCardCount?: Scalars['Int'] | null;
  readonly YearPbisCount?: Scalars['Int'] | null;
  readonly teacherSubject?: Scalars['String'] | null;
  readonly taPbisCardCount?: Scalars['Int'] | null;
  readonly averageTimeToCompleteCallback?: Scalars['Int'] | null;
  readonly block1Assignment?: Scalars['String'] | null;
  readonly block1ClassName?: Scalars['String'] | null;
  readonly block1AssignmentLastUpdated?: Scalars['String'] | null;
  readonly block2Assignment?: Scalars['String'] | null;
  readonly block2ClassName?: Scalars['String'] | null;
  readonly block2AssignmentLastUpdated?: Scalars['String'] | null;
  readonly block3Assignment?: Scalars['String'] | null;
  readonly block3ClassName?: Scalars['String'] | null;
  readonly block3AssignmentLastUpdated?: Scalars['String'] | null;
  readonly block4Assignment?: Scalars['String'] | null;
  readonly block4ClassName?: Scalars['String'] | null;
  readonly block4AssignmentLastUpdated?: Scalars['String'] | null;
  readonly block5Assignment?: Scalars['String'] | null;
  readonly block5ClassName?: Scalars['String'] | null;
  readonly block5AssignmentLastUpdated?: Scalars['String'] | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type CalendarWhereInput = {
  readonly AND?: ReadonlyArray<CalendarWhereInput | null> | null;
  readonly OR?: ReadonlyArray<CalendarWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly status?: Scalars['String'] | null;
  readonly status_not?: Scalars['String'] | null;
  readonly status_contains?: Scalars['String'] | null;
  readonly status_not_contains?: Scalars['String'] | null;
  readonly status_starts_with?: Scalars['String'] | null;
  readonly status_not_starts_with?: Scalars['String'] | null;
  readonly status_ends_with?: Scalars['String'] | null;
  readonly status_not_ends_with?: Scalars['String'] | null;
  readonly status_i?: Scalars['String'] | null;
  readonly status_not_i?: Scalars['String'] | null;
  readonly status_contains_i?: Scalars['String'] | null;
  readonly status_not_contains_i?: Scalars['String'] | null;
  readonly status_starts_with_i?: Scalars['String'] | null;
  readonly status_not_starts_with_i?: Scalars['String'] | null;
  readonly status_ends_with_i?: Scalars['String'] | null;
  readonly status_not_ends_with_i?: Scalars['String'] | null;
  readonly status_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly status_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly date?: Scalars['String'] | null;
  readonly date_not?: Scalars['String'] | null;
  readonly date_lt?: Scalars['String'] | null;
  readonly date_lte?: Scalars['String'] | null;
  readonly date_gt?: Scalars['String'] | null;
  readonly date_gte?: Scalars['String'] | null;
  readonly date_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly date_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly author?: UserWhereInput | null;
  readonly author_is_null?: Scalars['Boolean'] | null;
  readonly dateCreated?: Scalars['String'] | null;
  readonly dateCreated_not?: Scalars['String'] | null;
  readonly dateCreated_lt?: Scalars['String'] | null;
  readonly dateCreated_lte?: Scalars['String'] | null;
  readonly dateCreated_gt?: Scalars['String'] | null;
  readonly dateCreated_gte?: Scalars['String'] | null;
  readonly dateCreated_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly dateCreated_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly link?: Scalars['String'] | null;
  readonly link_not?: Scalars['String'] | null;
  readonly link_contains?: Scalars['String'] | null;
  readonly link_not_contains?: Scalars['String'] | null;
  readonly link_starts_with?: Scalars['String'] | null;
  readonly link_not_starts_with?: Scalars['String'] | null;
  readonly link_ends_with?: Scalars['String'] | null;
  readonly link_not_ends_with?: Scalars['String'] | null;
  readonly link_i?: Scalars['String'] | null;
  readonly link_not_i?: Scalars['String'] | null;
  readonly link_contains_i?: Scalars['String'] | null;
  readonly link_not_contains_i?: Scalars['String'] | null;
  readonly link_starts_with_i?: Scalars['String'] | null;
  readonly link_not_starts_with_i?: Scalars['String'] | null;
  readonly link_ends_with_i?: Scalars['String'] | null;
  readonly link_not_ends_with_i?: Scalars['String'] | null;
  readonly link_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly link_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly linkTitle?: Scalars['String'] | null;
  readonly linkTitle_not?: Scalars['String'] | null;
  readonly linkTitle_contains?: Scalars['String'] | null;
  readonly linkTitle_not_contains?: Scalars['String'] | null;
  readonly linkTitle_starts_with?: Scalars['String'] | null;
  readonly linkTitle_not_starts_with?: Scalars['String'] | null;
  readonly linkTitle_ends_with?: Scalars['String'] | null;
  readonly linkTitle_not_ends_with?: Scalars['String'] | null;
  readonly linkTitle_i?: Scalars['String'] | null;
  readonly linkTitle_not_i?: Scalars['String'] | null;
  readonly linkTitle_contains_i?: Scalars['String'] | null;
  readonly linkTitle_not_contains_i?: Scalars['String'] | null;
  readonly linkTitle_starts_with_i?: Scalars['String'] | null;
  readonly linkTitle_not_starts_with_i?: Scalars['String'] | null;
  readonly linkTitle_ends_with_i?: Scalars['String'] | null;
  readonly linkTitle_not_ends_with_i?: Scalars['String'] | null;
  readonly linkTitle_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly linkTitle_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type CalendarWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortCalendarsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'status_ASC'
  | 'status_DESC'
  | 'date_ASC'
  | 'date_DESC'
  | 'author_ASC'
  | 'author_DESC'
  | 'dateCreated_ASC'
  | 'dateCreated_DESC'
  | 'link_ASC'
  | 'link_DESC'
  | 'linkTitle_ASC'
  | 'linkTitle_DESC';

export type CalendarUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly status?: Scalars['String'] | null;
  readonly date?: Scalars['String'] | null;
  readonly author?: UserRelateToOneInput | null;
  readonly dateCreated?: Scalars['String'] | null;
  readonly link?: Scalars['String'] | null;
  readonly linkTitle?: Scalars['String'] | null;
};

export type CalendarsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: CalendarUpdateInput | null;
};

export type CalendarCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly status?: Scalars['String'] | null;
  readonly date?: Scalars['String'] | null;
  readonly author?: UserRelateToOneInput | null;
  readonly dateCreated?: Scalars['String'] | null;
  readonly link?: Scalars['String'] | null;
  readonly linkTitle?: Scalars['String'] | null;
};

export type CalendarsCreateInput = {
  readonly data?: CalendarCreateInput | null;
};

export type RoleWhereInput = {
  readonly AND?: ReadonlyArray<RoleWhereInput | null> | null;
  readonly OR?: ReadonlyArray<RoleWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly canManageCalendar?: Scalars['Boolean'] | null;
  readonly canManageCalendar_not?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers_not?: Scalars['Boolean'] | null;
  readonly canManageUsers?: Scalars['Boolean'] | null;
  readonly canManageUsers_not?: Scalars['Boolean'] | null;
  readonly canManageRoles?: Scalars['Boolean'] | null;
  readonly canManageRoles_not?: Scalars['Boolean'] | null;
  readonly canManageLinks?: Scalars['Boolean'] | null;
  readonly canManageLinks_not?: Scalars['Boolean'] | null;
  readonly canManageDiscipline?: Scalars['Boolean'] | null;
  readonly canManageDiscipline_not?: Scalars['Boolean'] | null;
  readonly canSeeAllDiscipline?: Scalars['Boolean'] | null;
  readonly canSeeAllDiscipline_not?: Scalars['Boolean'] | null;
  readonly canSeeAllTeacherEvents?: Scalars['Boolean'] | null;
  readonly canSeeAllTeacherEvents_not?: Scalars['Boolean'] | null;
  readonly canSeeStudentEvents?: Scalars['Boolean'] | null;
  readonly canSeeStudentEvents_not?: Scalars['Boolean'] | null;
  readonly canSeeOwnCallback?: Scalars['Boolean'] | null;
  readonly canSeeOwnCallback_not?: Scalars['Boolean'] | null;
  readonly canSeeAllCallback?: Scalars['Boolean'] | null;
  readonly canSeeAllCallback_not?: Scalars['Boolean'] | null;
  readonly hasTA?: Scalars['Boolean'] | null;
  readonly hasTA_not?: Scalars['Boolean'] | null;
  readonly hasClasses?: Scalars['Boolean'] | null;
  readonly hasClasses_not?: Scalars['Boolean'] | null;
  readonly isStudent?: Scalars['Boolean'] | null;
  readonly isStudent_not?: Scalars['Boolean'] | null;
  readonly isParent?: Scalars['Boolean'] | null;
  readonly isParent_not?: Scalars['Boolean'] | null;
  readonly isStaff?: Scalars['Boolean'] | null;
  readonly isStaff_not?: Scalars['Boolean'] | null;
  readonly isTeacher?: Scalars['Boolean'] | null;
  readonly isTeacher_not?: Scalars['Boolean'] | null;
  readonly isSuperAdmin?: Scalars['Boolean'] | null;
  readonly isSuperAdmin_not?: Scalars['Boolean'] | null;
  readonly assignedTo_every?: UserWhereInput | null;
  readonly assignedTo_some?: UserWhereInput | null;
  readonly assignedTo_none?: UserWhereInput | null;
};

export type RoleWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortRolesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'canManageCalendar_ASC'
  | 'canManageCalendar_DESC'
  | 'canSeeOtherUsers_ASC'
  | 'canSeeOtherUsers_DESC'
  | 'canManageUsers_ASC'
  | 'canManageUsers_DESC'
  | 'canManageRoles_ASC'
  | 'canManageRoles_DESC'
  | 'canManageLinks_ASC'
  | 'canManageLinks_DESC'
  | 'canManageDiscipline_ASC'
  | 'canManageDiscipline_DESC'
  | 'canSeeAllDiscipline_ASC'
  | 'canSeeAllDiscipline_DESC'
  | 'canSeeAllTeacherEvents_ASC'
  | 'canSeeAllTeacherEvents_DESC'
  | 'canSeeStudentEvents_ASC'
  | 'canSeeStudentEvents_DESC'
  | 'canSeeOwnCallback_ASC'
  | 'canSeeOwnCallback_DESC'
  | 'canSeeAllCallback_ASC'
  | 'canSeeAllCallback_DESC'
  | 'hasTA_ASC'
  | 'hasTA_DESC'
  | 'hasClasses_ASC'
  | 'hasClasses_DESC'
  | 'isStudent_ASC'
  | 'isStudent_DESC'
  | 'isParent_ASC'
  | 'isParent_DESC'
  | 'isStaff_ASC'
  | 'isStaff_DESC'
  | 'isTeacher_ASC'
  | 'isTeacher_DESC'
  | 'isSuperAdmin_ASC'
  | 'isSuperAdmin_DESC'
  | 'assignedTo_ASC'
  | 'assignedTo_DESC';

export type RoleUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly canManageCalendar?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers?: Scalars['Boolean'] | null;
  readonly canManageUsers?: Scalars['Boolean'] | null;
  readonly canManageRoles?: Scalars['Boolean'] | null;
  readonly canManageLinks?: Scalars['Boolean'] | null;
  readonly canManageDiscipline?: Scalars['Boolean'] | null;
  readonly canSeeAllDiscipline?: Scalars['Boolean'] | null;
  readonly canSeeAllTeacherEvents?: Scalars['Boolean'] | null;
  readonly canSeeStudentEvents?: Scalars['Boolean'] | null;
  readonly canSeeOwnCallback?: Scalars['Boolean'] | null;
  readonly canSeeAllCallback?: Scalars['Boolean'] | null;
  readonly hasTA?: Scalars['Boolean'] | null;
  readonly hasClasses?: Scalars['Boolean'] | null;
  readonly isStudent?: Scalars['Boolean'] | null;
  readonly isParent?: Scalars['Boolean'] | null;
  readonly isStaff?: Scalars['Boolean'] | null;
  readonly isTeacher?: Scalars['Boolean'] | null;
  readonly isSuperAdmin?: Scalars['Boolean'] | null;
  readonly assignedTo?: UserRelateToManyInput | null;
};

export type RolesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: RoleUpdateInput | null;
};

export type RoleCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly canManageCalendar?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers?: Scalars['Boolean'] | null;
  readonly canManageUsers?: Scalars['Boolean'] | null;
  readonly canManageRoles?: Scalars['Boolean'] | null;
  readonly canManageLinks?: Scalars['Boolean'] | null;
  readonly canManageDiscipline?: Scalars['Boolean'] | null;
  readonly canSeeAllDiscipline?: Scalars['Boolean'] | null;
  readonly canSeeAllTeacherEvents?: Scalars['Boolean'] | null;
  readonly canSeeStudentEvents?: Scalars['Boolean'] | null;
  readonly canSeeOwnCallback?: Scalars['Boolean'] | null;
  readonly canSeeAllCallback?: Scalars['Boolean'] | null;
  readonly hasTA?: Scalars['Boolean'] | null;
  readonly hasClasses?: Scalars['Boolean'] | null;
  readonly isStudent?: Scalars['Boolean'] | null;
  readonly isParent?: Scalars['Boolean'] | null;
  readonly isStaff?: Scalars['Boolean'] | null;
  readonly isTeacher?: Scalars['Boolean'] | null;
  readonly isSuperAdmin?: Scalars['Boolean'] | null;
  readonly assignedTo?: UserRelateToManyInput | null;
};

export type RolesCreateInput = {
  readonly data?: RoleCreateInput | null;
};

export type LinkWhereInput = {
  readonly AND?: ReadonlyArray<LinkWhereInput | null> | null;
  readonly OR?: ReadonlyArray<LinkWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly forTeachers?: Scalars['Boolean'] | null;
  readonly forTeachers_not?: Scalars['Boolean'] | null;
  readonly forStudents?: Scalars['Boolean'] | null;
  readonly forStudents_not?: Scalars['Boolean'] | null;
  readonly forParents?: Scalars['Boolean'] | null;
  readonly forParents_not?: Scalars['Boolean'] | null;
  readonly onHomePage?: Scalars['Boolean'] | null;
  readonly onHomePage_not?: Scalars['Boolean'] | null;
  readonly modifiedBy?: UserWhereInput | null;
  readonly modifiedBy_is_null?: Scalars['Boolean'] | null;
  readonly modified?: Scalars['String'] | null;
  readonly modified_not?: Scalars['String'] | null;
  readonly modified_lt?: Scalars['String'] | null;
  readonly modified_lte?: Scalars['String'] | null;
  readonly modified_gt?: Scalars['String'] | null;
  readonly modified_gte?: Scalars['String'] | null;
  readonly modified_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly modified_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly link?: Scalars['String'] | null;
  readonly link_not?: Scalars['String'] | null;
  readonly link_contains?: Scalars['String'] | null;
  readonly link_not_contains?: Scalars['String'] | null;
  readonly link_starts_with?: Scalars['String'] | null;
  readonly link_not_starts_with?: Scalars['String'] | null;
  readonly link_ends_with?: Scalars['String'] | null;
  readonly link_not_ends_with?: Scalars['String'] | null;
  readonly link_i?: Scalars['String'] | null;
  readonly link_not_i?: Scalars['String'] | null;
  readonly link_contains_i?: Scalars['String'] | null;
  readonly link_not_contains_i?: Scalars['String'] | null;
  readonly link_starts_with_i?: Scalars['String'] | null;
  readonly link_not_starts_with_i?: Scalars['String'] | null;
  readonly link_ends_with_i?: Scalars['String'] | null;
  readonly link_not_ends_with_i?: Scalars['String'] | null;
  readonly link_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly link_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type LinkWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortLinksBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'forTeachers_ASC'
  | 'forTeachers_DESC'
  | 'forStudents_ASC'
  | 'forStudents_DESC'
  | 'forParents_ASC'
  | 'forParents_DESC'
  | 'onHomePage_ASC'
  | 'onHomePage_DESC'
  | 'modifiedBy_ASC'
  | 'modifiedBy_DESC'
  | 'modified_ASC'
  | 'modified_DESC'
  | 'link_ASC'
  | 'link_DESC';

export type LinkUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly forTeachers?: Scalars['Boolean'] | null;
  readonly forStudents?: Scalars['Boolean'] | null;
  readonly forParents?: Scalars['Boolean'] | null;
  readonly onHomePage?: Scalars['Boolean'] | null;
  readonly modifiedBy?: UserRelateToOneInput | null;
  readonly modified?: Scalars['String'] | null;
  readonly link?: Scalars['String'] | null;
};

export type LinksUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: LinkUpdateInput | null;
};

export type LinkCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly forTeachers?: Scalars['Boolean'] | null;
  readonly forStudents?: Scalars['Boolean'] | null;
  readonly forParents?: Scalars['Boolean'] | null;
  readonly onHomePage?: Scalars['Boolean'] | null;
  readonly modifiedBy?: UserRelateToOneInput | null;
  readonly modified?: Scalars['String'] | null;
  readonly link?: Scalars['String'] | null;
};

export type LinksCreateInput = {
  readonly data?: LinkCreateInput | null;
};

export type PbisCardWhereInput = {
  readonly AND?: ReadonlyArray<PbisCardWhereInput | null> | null;
  readonly OR?: ReadonlyArray<PbisCardWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly category?: Scalars['String'] | null;
  readonly category_not?: Scalars['String'] | null;
  readonly category_contains?: Scalars['String'] | null;
  readonly category_not_contains?: Scalars['String'] | null;
  readonly category_starts_with?: Scalars['String'] | null;
  readonly category_not_starts_with?: Scalars['String'] | null;
  readonly category_ends_with?: Scalars['String'] | null;
  readonly category_not_ends_with?: Scalars['String'] | null;
  readonly category_i?: Scalars['String'] | null;
  readonly category_not_i?: Scalars['String'] | null;
  readonly category_contains_i?: Scalars['String'] | null;
  readonly category_not_contains_i?: Scalars['String'] | null;
  readonly category_starts_with_i?: Scalars['String'] | null;
  readonly category_not_starts_with_i?: Scalars['String'] | null;
  readonly category_ends_with_i?: Scalars['String'] | null;
  readonly category_not_ends_with_i?: Scalars['String'] | null;
  readonly category_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly category_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly cardMessage?: Scalars['String'] | null;
  readonly cardMessage_not?: Scalars['String'] | null;
  readonly cardMessage_contains?: Scalars['String'] | null;
  readonly cardMessage_not_contains?: Scalars['String'] | null;
  readonly cardMessage_starts_with?: Scalars['String'] | null;
  readonly cardMessage_not_starts_with?: Scalars['String'] | null;
  readonly cardMessage_ends_with?: Scalars['String'] | null;
  readonly cardMessage_not_ends_with?: Scalars['String'] | null;
  readonly cardMessage_i?: Scalars['String'] | null;
  readonly cardMessage_not_i?: Scalars['String'] | null;
  readonly cardMessage_contains_i?: Scalars['String'] | null;
  readonly cardMessage_not_contains_i?: Scalars['String'] | null;
  readonly cardMessage_starts_with_i?: Scalars['String'] | null;
  readonly cardMessage_not_starts_with_i?: Scalars['String'] | null;
  readonly cardMessage_ends_with_i?: Scalars['String'] | null;
  readonly cardMessage_not_ends_with_i?: Scalars['String'] | null;
  readonly cardMessage_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly cardMessage_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly student?: UserWhereInput | null;
  readonly student_is_null?: Scalars['Boolean'] | null;
  readonly teacher?: UserWhereInput | null;
  readonly teacher_is_null?: Scalars['Boolean'] | null;
  readonly dateGiven?: Scalars['String'] | null;
  readonly dateGiven_not?: Scalars['String'] | null;
  readonly dateGiven_lt?: Scalars['String'] | null;
  readonly dateGiven_lte?: Scalars['String'] | null;
  readonly dateGiven_gt?: Scalars['String'] | null;
  readonly dateGiven_gte?: Scalars['String'] | null;
  readonly dateGiven_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly dateGiven_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly counted?: Scalars['Boolean'] | null;
  readonly counted_not?: Scalars['Boolean'] | null;
};

export type PbisCardWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortPbisCardsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'category_ASC'
  | 'category_DESC'
  | 'cardMessage_ASC'
  | 'cardMessage_DESC'
  | 'student_ASC'
  | 'student_DESC'
  | 'teacher_ASC'
  | 'teacher_DESC'
  | 'dateGiven_ASC'
  | 'dateGiven_DESC'
  | 'counted_ASC'
  | 'counted_DESC';

export type PbisCardUpdateInput = {
  readonly category?: Scalars['String'] | null;
  readonly cardMessage?: Scalars['String'] | null;
  readonly student?: UserRelateToOneInput | null;
  readonly teacher?: UserRelateToOneInput | null;
  readonly dateGiven?: Scalars['String'] | null;
  readonly counted?: Scalars['Boolean'] | null;
};

export type PbisCardsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: PbisCardUpdateInput | null;
};

export type PbisCardCreateInput = {
  readonly category?: Scalars['String'] | null;
  readonly cardMessage?: Scalars['String'] | null;
  readonly student?: UserRelateToOneInput | null;
  readonly teacher?: UserRelateToOneInput | null;
  readonly dateGiven?: Scalars['String'] | null;
  readonly counted?: Scalars['Boolean'] | null;
};

export type PbisCardsCreateInput = {
  readonly data?: PbisCardCreateInput | null;
};

export type PbisTeamWhereInput = {
  readonly AND?: ReadonlyArray<PbisTeamWhereInput | null> | null;
  readonly OR?: ReadonlyArray<PbisTeamWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly teamName?: Scalars['String'] | null;
  readonly teamName_not?: Scalars['String'] | null;
  readonly teamName_contains?: Scalars['String'] | null;
  readonly teamName_not_contains?: Scalars['String'] | null;
  readonly teamName_starts_with?: Scalars['String'] | null;
  readonly teamName_not_starts_with?: Scalars['String'] | null;
  readonly teamName_ends_with?: Scalars['String'] | null;
  readonly teamName_not_ends_with?: Scalars['String'] | null;
  readonly teamName_i?: Scalars['String'] | null;
  readonly teamName_not_i?: Scalars['String'] | null;
  readonly teamName_contains_i?: Scalars['String'] | null;
  readonly teamName_not_contains_i?: Scalars['String'] | null;
  readonly teamName_starts_with_i?: Scalars['String'] | null;
  readonly teamName_not_starts_with_i?: Scalars['String'] | null;
  readonly teamName_ends_with_i?: Scalars['String'] | null;
  readonly teamName_not_ends_with_i?: Scalars['String'] | null;
  readonly teamName_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly teamName_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly taTeacher_every?: UserWhereInput | null;
  readonly taTeacher_some?: UserWhereInput | null;
  readonly taTeacher_none?: UserWhereInput | null;
  readonly uncountedCards?: Scalars['Int'] | null;
  readonly uncountedCards_not?: Scalars['Int'] | null;
  readonly uncountedCards_lt?: Scalars['Int'] | null;
  readonly uncountedCards_lte?: Scalars['Int'] | null;
  readonly uncountedCards_gt?: Scalars['Int'] | null;
  readonly uncountedCards_gte?: Scalars['Int'] | null;
  readonly uncountedCards_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly uncountedCards_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly countedCards?: Scalars['Int'] | null;
  readonly countedCards_not?: Scalars['Int'] | null;
  readonly countedCards_lt?: Scalars['Int'] | null;
  readonly countedCards_lte?: Scalars['Int'] | null;
  readonly countedCards_gt?: Scalars['Int'] | null;
  readonly countedCards_gte?: Scalars['Int'] | null;
  readonly countedCards_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly countedCards_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly currentLevel?: Scalars['Int'] | null;
  readonly currentLevel_not?: Scalars['Int'] | null;
  readonly currentLevel_lt?: Scalars['Int'] | null;
  readonly currentLevel_lte?: Scalars['Int'] | null;
  readonly currentLevel_gt?: Scalars['Int'] | null;
  readonly currentLevel_gte?: Scalars['Int'] | null;
  readonly currentLevel_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly currentLevel_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly numberOfStudents?: Scalars['Int'] | null;
  readonly numberOfStudents_not?: Scalars['Int'] | null;
  readonly numberOfStudents_lt?: Scalars['Int'] | null;
  readonly numberOfStudents_lte?: Scalars['Int'] | null;
  readonly numberOfStudents_gt?: Scalars['Int'] | null;
  readonly numberOfStudents_gte?: Scalars['Int'] | null;
  readonly numberOfStudents_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly numberOfStudents_not_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly averageCardsPerStudent?: Scalars['Int'] | null;
  readonly averageCardsPerStudent_not?: Scalars['Int'] | null;
  readonly averageCardsPerStudent_lt?: Scalars['Int'] | null;
  readonly averageCardsPerStudent_lte?: Scalars['Int'] | null;
  readonly averageCardsPerStudent_gt?: Scalars['Int'] | null;
  readonly averageCardsPerStudent_gte?: Scalars['Int'] | null;
  readonly averageCardsPerStudent_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly averageCardsPerStudent_not_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly dateModified?: Scalars['String'] | null;
  readonly dateModified_not?: Scalars['String'] | null;
  readonly dateModified_lt?: Scalars['String'] | null;
  readonly dateModified_lte?: Scalars['String'] | null;
  readonly dateModified_gt?: Scalars['String'] | null;
  readonly dateModified_gte?: Scalars['String'] | null;
  readonly dateModified_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly dateModified_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly lastModifiedBy?: UserWhereInput | null;
  readonly lastModifiedBy_is_null?: Scalars['Boolean'] | null;
};

export type PbisTeamWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortPbisTeamsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'teamName_ASC'
  | 'teamName_DESC'
  | 'taTeacher_ASC'
  | 'taTeacher_DESC'
  | 'uncountedCards_ASC'
  | 'uncountedCards_DESC'
  | 'countedCards_ASC'
  | 'countedCards_DESC'
  | 'currentLevel_ASC'
  | 'currentLevel_DESC'
  | 'numberOfStudents_ASC'
  | 'numberOfStudents_DESC'
  | 'averageCardsPerStudent_ASC'
  | 'averageCardsPerStudent_DESC'
  | 'dateModified_ASC'
  | 'dateModified_DESC'
  | 'lastModifiedBy_ASC'
  | 'lastModifiedBy_DESC';

export type PbisTeamUpdateInput = {
  readonly teamName?: Scalars['String'] | null;
  readonly taTeacher?: UserRelateToManyInput | null;
  readonly uncountedCards?: Scalars['Int'] | null;
  readonly countedCards?: Scalars['Int'] | null;
  readonly currentLevel?: Scalars['Int'] | null;
  readonly numberOfStudents?: Scalars['Int'] | null;
  readonly averageCardsPerStudent?: Scalars['Int'] | null;
  readonly dateModified?: Scalars['String'] | null;
  readonly lastModifiedBy?: UserRelateToOneInput | null;
};

export type PbisTeamsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: PbisTeamUpdateInput | null;
};

export type PbisTeamCreateInput = {
  readonly teamName?: Scalars['String'] | null;
  readonly taTeacher?: UserRelateToManyInput | null;
  readonly uncountedCards?: Scalars['Int'] | null;
  readonly countedCards?: Scalars['Int'] | null;
  readonly currentLevel?: Scalars['Int'] | null;
  readonly numberOfStudents?: Scalars['Int'] | null;
  readonly averageCardsPerStudent?: Scalars['Int'] | null;
  readonly dateModified?: Scalars['String'] | null;
  readonly lastModifiedBy?: UserRelateToOneInput | null;
};

export type PbisTeamsCreateInput = {
  readonly data?: PbisTeamCreateInput | null;
};

export type StudentFocusWhereInput = {
  readonly AND?: ReadonlyArray<StudentFocusWhereInput | null> | null;
  readonly OR?: ReadonlyArray<StudentFocusWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly comments?: Scalars['String'] | null;
  readonly comments_not?: Scalars['String'] | null;
  readonly comments_contains?: Scalars['String'] | null;
  readonly comments_not_contains?: Scalars['String'] | null;
  readonly comments_starts_with?: Scalars['String'] | null;
  readonly comments_not_starts_with?: Scalars['String'] | null;
  readonly comments_ends_with?: Scalars['String'] | null;
  readonly comments_not_ends_with?: Scalars['String'] | null;
  readonly comments_i?: Scalars['String'] | null;
  readonly comments_not_i?: Scalars['String'] | null;
  readonly comments_contains_i?: Scalars['String'] | null;
  readonly comments_not_contains_i?: Scalars['String'] | null;
  readonly comments_starts_with_i?: Scalars['String'] | null;
  readonly comments_not_starts_with_i?: Scalars['String'] | null;
  readonly comments_ends_with_i?: Scalars['String'] | null;
  readonly comments_not_ends_with_i?: Scalars['String'] | null;
  readonly comments_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly comments_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly category?: Scalars['String'] | null;
  readonly category_not?: Scalars['String'] | null;
  readonly category_contains?: Scalars['String'] | null;
  readonly category_not_contains?: Scalars['String'] | null;
  readonly category_starts_with?: Scalars['String'] | null;
  readonly category_not_starts_with?: Scalars['String'] | null;
  readonly category_ends_with?: Scalars['String'] | null;
  readonly category_not_ends_with?: Scalars['String'] | null;
  readonly category_i?: Scalars['String'] | null;
  readonly category_not_i?: Scalars['String'] | null;
  readonly category_contains_i?: Scalars['String'] | null;
  readonly category_not_contains_i?: Scalars['String'] | null;
  readonly category_starts_with_i?: Scalars['String'] | null;
  readonly category_not_starts_with_i?: Scalars['String'] | null;
  readonly category_ends_with_i?: Scalars['String'] | null;
  readonly category_not_ends_with_i?: Scalars['String'] | null;
  readonly category_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly category_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly student?: UserWhereInput | null;
  readonly student_is_null?: Scalars['Boolean'] | null;
  readonly teacher?: UserWhereInput | null;
  readonly teacher_is_null?: Scalars['Boolean'] | null;
  readonly dateCreated?: Scalars['String'] | null;
  readonly dateCreated_not?: Scalars['String'] | null;
  readonly dateCreated_lt?: Scalars['String'] | null;
  readonly dateCreated_lte?: Scalars['String'] | null;
  readonly dateCreated_gt?: Scalars['String'] | null;
  readonly dateCreated_gte?: Scalars['String'] | null;
  readonly dateCreated_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly dateCreated_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type StudentFocusWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortStudentFociBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'comments_ASC'
  | 'comments_DESC'
  | 'category_ASC'
  | 'category_DESC'
  | 'student_ASC'
  | 'student_DESC'
  | 'teacher_ASC'
  | 'teacher_DESC'
  | 'dateCreated_ASC'
  | 'dateCreated_DESC';

export type StudentFocusUpdateInput = {
  readonly comments?: Scalars['String'] | null;
  readonly category?: Scalars['String'] | null;
  readonly student?: UserRelateToOneInput | null;
  readonly teacher?: UserRelateToOneInput | null;
  readonly dateCreated?: Scalars['String'] | null;
};

export type StudentFociUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: StudentFocusUpdateInput | null;
};

export type StudentFocusCreateInput = {
  readonly comments?: Scalars['String'] | null;
  readonly category?: Scalars['String'] | null;
  readonly student?: UserRelateToOneInput | null;
  readonly teacher?: UserRelateToOneInput | null;
  readonly dateCreated?: Scalars['String'] | null;
};

export type StudentFociCreateInput = {
  readonly data?: StudentFocusCreateInput | null;
};

export type CellPhoneViolationWhereInput = {
  readonly AND?: ReadonlyArray<CellPhoneViolationWhereInput | null> | null;
  readonly OR?: ReadonlyArray<CellPhoneViolationWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly student?: UserWhereInput | null;
  readonly student_is_null?: Scalars['Boolean'] | null;
  readonly teacher?: UserWhereInput | null;
  readonly teacher_is_null?: Scalars['Boolean'] | null;
  readonly dateGiven?: Scalars['String'] | null;
  readonly dateGiven_not?: Scalars['String'] | null;
  readonly dateGiven_lt?: Scalars['String'] | null;
  readonly dateGiven_lte?: Scalars['String'] | null;
  readonly dateGiven_gt?: Scalars['String'] | null;
  readonly dateGiven_gte?: Scalars['String'] | null;
  readonly dateGiven_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly dateGiven_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type CellPhoneViolationWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortCellPhoneViolationsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'student_ASC'
  | 'student_DESC'
  | 'teacher_ASC'
  | 'teacher_DESC'
  | 'dateGiven_ASC'
  | 'dateGiven_DESC';

export type CellPhoneViolationUpdateInput = {
  readonly description?: Scalars['String'] | null;
  readonly student?: UserRelateToOneInput | null;
  readonly teacher?: UserRelateToOneInput | null;
  readonly dateGiven?: Scalars['String'] | null;
};

export type CellPhoneViolationsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: CellPhoneViolationUpdateInput | null;
};

export type CellPhoneViolationCreateInput = {
  readonly description?: Scalars['String'] | null;
  readonly student?: UserRelateToOneInput | null;
  readonly teacher?: UserRelateToOneInput | null;
  readonly dateGiven?: Scalars['String'] | null;
};

export type CellPhoneViolationsCreateInput = {
  readonly data?: CellPhoneViolationCreateInput | null;
};

export type CallbackWhereInput = {
  readonly AND?: ReadonlyArray<CallbackWhereInput | null> | null;
  readonly OR?: ReadonlyArray<CallbackWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly title?: Scalars['String'] | null;
  readonly title_not?: Scalars['String'] | null;
  readonly title_contains?: Scalars['String'] | null;
  readonly title_not_contains?: Scalars['String'] | null;
  readonly title_starts_with?: Scalars['String'] | null;
  readonly title_not_starts_with?: Scalars['String'] | null;
  readonly title_ends_with?: Scalars['String'] | null;
  readonly title_not_ends_with?: Scalars['String'] | null;
  readonly title_i?: Scalars['String'] | null;
  readonly title_not_i?: Scalars['String'] | null;
  readonly title_contains_i?: Scalars['String'] | null;
  readonly title_not_contains_i?: Scalars['String'] | null;
  readonly title_starts_with_i?: Scalars['String'] | null;
  readonly title_not_starts_with_i?: Scalars['String'] | null;
  readonly title_ends_with_i?: Scalars['String'] | null;
  readonly title_not_ends_with_i?: Scalars['String'] | null;
  readonly title_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly title_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly student?: UserWhereInput | null;
  readonly student_is_null?: Scalars['Boolean'] | null;
  readonly teacher?: UserWhereInput | null;
  readonly teacher_is_null?: Scalars['Boolean'] | null;
  readonly dateAssigned?: Scalars['String'] | null;
  readonly dateAssigned_not?: Scalars['String'] | null;
  readonly dateAssigned_lt?: Scalars['String'] | null;
  readonly dateAssigned_lte?: Scalars['String'] | null;
  readonly dateAssigned_gt?: Scalars['String'] | null;
  readonly dateAssigned_gte?: Scalars['String'] | null;
  readonly dateAssigned_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly dateAssigned_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly dateCompleted?: Scalars['String'] | null;
  readonly dateCompleted_not?: Scalars['String'] | null;
  readonly dateCompleted_lt?: Scalars['String'] | null;
  readonly dateCompleted_lte?: Scalars['String'] | null;
  readonly dateCompleted_gt?: Scalars['String'] | null;
  readonly dateCompleted_gte?: Scalars['String'] | null;
  readonly dateCompleted_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly dateCompleted_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly link?: Scalars['String'] | null;
  readonly link_not?: Scalars['String'] | null;
  readonly link_contains?: Scalars['String'] | null;
  readonly link_not_contains?: Scalars['String'] | null;
  readonly link_starts_with?: Scalars['String'] | null;
  readonly link_not_starts_with?: Scalars['String'] | null;
  readonly link_ends_with?: Scalars['String'] | null;
  readonly link_not_ends_with?: Scalars['String'] | null;
  readonly link_i?: Scalars['String'] | null;
  readonly link_not_i?: Scalars['String'] | null;
  readonly link_contains_i?: Scalars['String'] | null;
  readonly link_not_contains_i?: Scalars['String'] | null;
  readonly link_starts_with_i?: Scalars['String'] | null;
  readonly link_not_starts_with_i?: Scalars['String'] | null;
  readonly link_ends_with_i?: Scalars['String'] | null;
  readonly link_not_ends_with_i?: Scalars['String'] | null;
  readonly link_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly link_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly messageFromTeacher?: Scalars['String'] | null;
  readonly messageFromTeacher_not?: Scalars['String'] | null;
  readonly messageFromTeacher_contains?: Scalars['String'] | null;
  readonly messageFromTeacher_not_contains?: Scalars['String'] | null;
  readonly messageFromTeacher_starts_with?: Scalars['String'] | null;
  readonly messageFromTeacher_not_starts_with?: Scalars['String'] | null;
  readonly messageFromTeacher_ends_with?: Scalars['String'] | null;
  readonly messageFromTeacher_not_ends_with?: Scalars['String'] | null;
  readonly messageFromTeacher_i?: Scalars['String'] | null;
  readonly messageFromTeacher_not_i?: Scalars['String'] | null;
  readonly messageFromTeacher_contains_i?: Scalars['String'] | null;
  readonly messageFromTeacher_not_contains_i?: Scalars['String'] | null;
  readonly messageFromTeacher_starts_with_i?: Scalars['String'] | null;
  readonly messageFromTeacher_not_starts_with_i?: Scalars['String'] | null;
  readonly messageFromTeacher_ends_with_i?: Scalars['String'] | null;
  readonly messageFromTeacher_not_ends_with_i?: Scalars['String'] | null;
  readonly messageFromTeacher_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly messageFromTeacher_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly messageFromStudent?: Scalars['String'] | null;
  readonly messageFromStudent_not?: Scalars['String'] | null;
  readonly messageFromStudent_contains?: Scalars['String'] | null;
  readonly messageFromStudent_not_contains?: Scalars['String'] | null;
  readonly messageFromStudent_starts_with?: Scalars['String'] | null;
  readonly messageFromStudent_not_starts_with?: Scalars['String'] | null;
  readonly messageFromStudent_ends_with?: Scalars['String'] | null;
  readonly messageFromStudent_not_ends_with?: Scalars['String'] | null;
  readonly messageFromStudent_i?: Scalars['String'] | null;
  readonly messageFromStudent_not_i?: Scalars['String'] | null;
  readonly messageFromStudent_contains_i?: Scalars['String'] | null;
  readonly messageFromStudent_not_contains_i?: Scalars['String'] | null;
  readonly messageFromStudent_starts_with_i?: Scalars['String'] | null;
  readonly messageFromStudent_not_starts_with_i?: Scalars['String'] | null;
  readonly messageFromStudent_ends_with_i?: Scalars['String'] | null;
  readonly messageFromStudent_not_ends_with_i?: Scalars['String'] | null;
  readonly messageFromStudent_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly messageFromStudent_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly daysLate?: Scalars['Int'] | null;
  readonly daysLate_not?: Scalars['Int'] | null;
  readonly daysLate_lt?: Scalars['Int'] | null;
  readonly daysLate_lte?: Scalars['Int'] | null;
  readonly daysLate_gt?: Scalars['Int'] | null;
  readonly daysLate_gte?: Scalars['Int'] | null;
  readonly daysLate_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly daysLate_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
};

export type CallbackWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortCallbacksBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'student_ASC'
  | 'student_DESC'
  | 'teacher_ASC'
  | 'teacher_DESC'
  | 'dateAssigned_ASC'
  | 'dateAssigned_DESC'
  | 'dateCompleted_ASC'
  | 'dateCompleted_DESC'
  | 'link_ASC'
  | 'link_DESC'
  | 'messageFromTeacher_ASC'
  | 'messageFromTeacher_DESC'
  | 'messageFromStudent_ASC'
  | 'messageFromStudent_DESC'
  | 'daysLate_ASC'
  | 'daysLate_DESC';

export type CallbackUpdateInput = {
  readonly title?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly student?: UserRelateToOneInput | null;
  readonly teacher?: UserRelateToOneInput | null;
  readonly dateAssigned?: Scalars['String'] | null;
  readonly dateCompleted?: Scalars['String'] | null;
  readonly link?: Scalars['String'] | null;
  readonly messageFromTeacher?: Scalars['String'] | null;
  readonly messageFromStudent?: Scalars['String'] | null;
  readonly daysLate?: Scalars['Int'] | null;
};

export type CallbacksUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: CallbackUpdateInput | null;
};

export type CallbackCreateInput = {
  readonly title?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly student?: UserRelateToOneInput | null;
  readonly teacher?: UserRelateToOneInput | null;
  readonly dateAssigned?: Scalars['String'] | null;
  readonly dateCompleted?: Scalars['String'] | null;
  readonly link?: Scalars['String'] | null;
  readonly messageFromTeacher?: Scalars['String'] | null;
  readonly messageFromStudent?: Scalars['String'] | null;
  readonly daysLate?: Scalars['Int'] | null;
};

export type CallbacksCreateInput = {
  readonly data?: CallbackCreateInput | null;
};

export type DisciplineWhereInput = {
  readonly AND?: ReadonlyArray<DisciplineWhereInput | null> | null;
  readonly OR?: ReadonlyArray<DisciplineWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly teacherComments?: Scalars['String'] | null;
  readonly teacherComments_not?: Scalars['String'] | null;
  readonly teacherComments_contains?: Scalars['String'] | null;
  readonly teacherComments_not_contains?: Scalars['String'] | null;
  readonly teacherComments_starts_with?: Scalars['String'] | null;
  readonly teacherComments_not_starts_with?: Scalars['String'] | null;
  readonly teacherComments_ends_with?: Scalars['String'] | null;
  readonly teacherComments_not_ends_with?: Scalars['String'] | null;
  readonly teacherComments_i?: Scalars['String'] | null;
  readonly teacherComments_not_i?: Scalars['String'] | null;
  readonly teacherComments_contains_i?: Scalars['String'] | null;
  readonly teacherComments_not_contains_i?: Scalars['String'] | null;
  readonly teacherComments_starts_with_i?: Scalars['String'] | null;
  readonly teacherComments_not_starts_with_i?: Scalars['String'] | null;
  readonly teacherComments_ends_with_i?: Scalars['String'] | null;
  readonly teacherComments_not_ends_with_i?: Scalars['String'] | null;
  readonly teacherComments_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly teacherComments_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly adminComments?: Scalars['String'] | null;
  readonly adminComments_not?: Scalars['String'] | null;
  readonly adminComments_contains?: Scalars['String'] | null;
  readonly adminComments_not_contains?: Scalars['String'] | null;
  readonly adminComments_starts_with?: Scalars['String'] | null;
  readonly adminComments_not_starts_with?: Scalars['String'] | null;
  readonly adminComments_ends_with?: Scalars['String'] | null;
  readonly adminComments_not_ends_with?: Scalars['String'] | null;
  readonly adminComments_i?: Scalars['String'] | null;
  readonly adminComments_not_i?: Scalars['String'] | null;
  readonly adminComments_contains_i?: Scalars['String'] | null;
  readonly adminComments_not_contains_i?: Scalars['String'] | null;
  readonly adminComments_starts_with_i?: Scalars['String'] | null;
  readonly adminComments_not_starts_with_i?: Scalars['String'] | null;
  readonly adminComments_ends_with_i?: Scalars['String'] | null;
  readonly adminComments_not_ends_with_i?: Scalars['String'] | null;
  readonly adminComments_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly adminComments_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly classType?: Scalars['String'] | null;
  readonly classType_not?: Scalars['String'] | null;
  readonly classType_contains?: Scalars['String'] | null;
  readonly classType_not_contains?: Scalars['String'] | null;
  readonly classType_starts_with?: Scalars['String'] | null;
  readonly classType_not_starts_with?: Scalars['String'] | null;
  readonly classType_ends_with?: Scalars['String'] | null;
  readonly classType_not_ends_with?: Scalars['String'] | null;
  readonly classType_i?: Scalars['String'] | null;
  readonly classType_not_i?: Scalars['String'] | null;
  readonly classType_contains_i?: Scalars['String'] | null;
  readonly classType_not_contains_i?: Scalars['String'] | null;
  readonly classType_starts_with_i?: Scalars['String'] | null;
  readonly classType_not_starts_with_i?: Scalars['String'] | null;
  readonly classType_ends_with_i?: Scalars['String'] | null;
  readonly classType_not_ends_with_i?: Scalars['String'] | null;
  readonly classType_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly classType_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly location?: Scalars['String'] | null;
  readonly location_not?: Scalars['String'] | null;
  readonly location_contains?: Scalars['String'] | null;
  readonly location_not_contains?: Scalars['String'] | null;
  readonly location_starts_with?: Scalars['String'] | null;
  readonly location_not_starts_with?: Scalars['String'] | null;
  readonly location_ends_with?: Scalars['String'] | null;
  readonly location_not_ends_with?: Scalars['String'] | null;
  readonly location_i?: Scalars['String'] | null;
  readonly location_not_i?: Scalars['String'] | null;
  readonly location_contains_i?: Scalars['String'] | null;
  readonly location_not_contains_i?: Scalars['String'] | null;
  readonly location_starts_with_i?: Scalars['String'] | null;
  readonly location_not_starts_with_i?: Scalars['String'] | null;
  readonly location_ends_with_i?: Scalars['String'] | null;
  readonly location_not_ends_with_i?: Scalars['String'] | null;
  readonly location_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly location_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly timeOfDay?: Scalars['String'] | null;
  readonly timeOfDay_not?: Scalars['String'] | null;
  readonly timeOfDay_contains?: Scalars['String'] | null;
  readonly timeOfDay_not_contains?: Scalars['String'] | null;
  readonly timeOfDay_starts_with?: Scalars['String'] | null;
  readonly timeOfDay_not_starts_with?: Scalars['String'] | null;
  readonly timeOfDay_ends_with?: Scalars['String'] | null;
  readonly timeOfDay_not_ends_with?: Scalars['String'] | null;
  readonly timeOfDay_i?: Scalars['String'] | null;
  readonly timeOfDay_not_i?: Scalars['String'] | null;
  readonly timeOfDay_contains_i?: Scalars['String'] | null;
  readonly timeOfDay_not_contains_i?: Scalars['String'] | null;
  readonly timeOfDay_starts_with_i?: Scalars['String'] | null;
  readonly timeOfDay_not_starts_with_i?: Scalars['String'] | null;
  readonly timeOfDay_ends_with_i?: Scalars['String'] | null;
  readonly timeOfDay_not_ends_with_i?: Scalars['String'] | null;
  readonly timeOfDay_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly timeOfDay_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly student?: UserWhereInput | null;
  readonly student_is_null?: Scalars['Boolean'] | null;
  readonly teacher?: UserWhereInput | null;
  readonly teacher_is_null?: Scalars['Boolean'] | null;
  readonly date?: Scalars['String'] | null;
  readonly date_not?: Scalars['String'] | null;
  readonly date_lt?: Scalars['String'] | null;
  readonly date_lte?: Scalars['String'] | null;
  readonly date_gt?: Scalars['String'] | null;
  readonly date_gte?: Scalars['String'] | null;
  readonly date_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly date_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly addressed?: Scalars['String'] | null;
  readonly addressed_not?: Scalars['String'] | null;
  readonly addressed_lt?: Scalars['String'] | null;
  readonly addressed_lte?: Scalars['String'] | null;
  readonly addressed_gt?: Scalars['String'] | null;
  readonly addressed_gte?: Scalars['String'] | null;
  readonly addressed_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly addressed_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly inappropriateLanguage?: Scalars['Boolean'] | null;
  readonly inappropriateLanguage_not?: Scalars['Boolean'] | null;
  readonly physicalConduct?: Scalars['Boolean'] | null;
  readonly physicalConduct_not?: Scalars['Boolean'] | null;
  readonly nonCompliance?: Scalars['Boolean'] | null;
  readonly nonCompliance_not?: Scalars['Boolean'] | null;
  readonly disruption?: Scalars['Boolean'] | null;
  readonly disruption_not?: Scalars['Boolean'] | null;
  readonly propertyMisuse?: Scalars['Boolean'] | null;
  readonly propertyMisuse_not?: Scalars['Boolean'] | null;
  readonly otherConduct?: Scalars['Boolean'] | null;
  readonly otherConduct_not?: Scalars['Boolean'] | null;
  readonly VerbalWarning?: Scalars['Boolean'] | null;
  readonly VerbalWarning_not?: Scalars['Boolean'] | null;
  readonly buddyRoom?: Scalars['Boolean'] | null;
  readonly buddyRoom_not?: Scalars['Boolean'] | null;
  readonly conferenceWithStudent?: Scalars['Boolean'] | null;
  readonly conferenceWithStudent_not?: Scalars['Boolean'] | null;
  readonly ParentContact?: Scalars['Boolean'] | null;
  readonly ParentContact_not?: Scalars['Boolean'] | null;
  readonly PlanningRoomReferral?: Scalars['Boolean'] | null;
  readonly PlanningRoomReferral_not?: Scalars['Boolean'] | null;
  readonly FollowupPlan?: Scalars['Boolean'] | null;
  readonly FollowupPlan_not?: Scalars['Boolean'] | null;
  readonly LossOfPrivilege?: Scalars['Boolean'] | null;
  readonly LossOfPrivilege_not?: Scalars['Boolean'] | null;
  readonly DetentionWithTeacher?: Scalars['Boolean'] | null;
  readonly DetentionWithTeacher_not?: Scalars['Boolean'] | null;
  readonly IndividualizedInstruction?: Scalars['Boolean'] | null;
  readonly IndividualizedInstruction_not?: Scalars['Boolean'] | null;
  readonly GuidanceReferral?: Scalars['Boolean'] | null;
  readonly GuidanceReferral_not?: Scalars['Boolean'] | null;
  readonly ReferToAdministrator?: Scalars['Boolean'] | null;
  readonly ReferToAdministrator_not?: Scalars['Boolean'] | null;
  readonly OtherAction?: Scalars['Boolean'] | null;
  readonly OtherAction_not?: Scalars['Boolean'] | null;
  readonly none?: Scalars['Boolean'] | null;
  readonly none_not?: Scalars['Boolean'] | null;
  readonly peers?: Scalars['Boolean'] | null;
  readonly peers_not?: Scalars['Boolean'] | null;
  readonly teacherInvolved?: Scalars['Boolean'] | null;
  readonly teacherInvolved_not?: Scalars['Boolean'] | null;
  readonly substitute?: Scalars['Boolean'] | null;
  readonly substitute_not?: Scalars['Boolean'] | null;
  readonly unknown?: Scalars['Boolean'] | null;
  readonly unknown_not?: Scalars['Boolean'] | null;
  readonly othersInvolved?: Scalars['Boolean'] | null;
  readonly othersInvolved_not?: Scalars['Boolean'] | null;
};

export type DisciplineWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortDisciplinesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'teacherComments_ASC'
  | 'teacherComments_DESC'
  | 'adminComments_ASC'
  | 'adminComments_DESC'
  | 'classType_ASC'
  | 'classType_DESC'
  | 'location_ASC'
  | 'location_DESC'
  | 'timeOfDay_ASC'
  | 'timeOfDay_DESC'
  | 'student_ASC'
  | 'student_DESC'
  | 'teacher_ASC'
  | 'teacher_DESC'
  | 'date_ASC'
  | 'date_DESC'
  | 'addressed_ASC'
  | 'addressed_DESC'
  | 'inappropriateLanguage_ASC'
  | 'inappropriateLanguage_DESC'
  | 'physicalConduct_ASC'
  | 'physicalConduct_DESC'
  | 'nonCompliance_ASC'
  | 'nonCompliance_DESC'
  | 'disruption_ASC'
  | 'disruption_DESC'
  | 'propertyMisuse_ASC'
  | 'propertyMisuse_DESC'
  | 'otherConduct_ASC'
  | 'otherConduct_DESC'
  | 'VerbalWarning_ASC'
  | 'VerbalWarning_DESC'
  | 'buddyRoom_ASC'
  | 'buddyRoom_DESC'
  | 'conferenceWithStudent_ASC'
  | 'conferenceWithStudent_DESC'
  | 'ParentContact_ASC'
  | 'ParentContact_DESC'
  | 'PlanningRoomReferral_ASC'
  | 'PlanningRoomReferral_DESC'
  | 'FollowupPlan_ASC'
  | 'FollowupPlan_DESC'
  | 'LossOfPrivilege_ASC'
  | 'LossOfPrivilege_DESC'
  | 'DetentionWithTeacher_ASC'
  | 'DetentionWithTeacher_DESC'
  | 'IndividualizedInstruction_ASC'
  | 'IndividualizedInstruction_DESC'
  | 'GuidanceReferral_ASC'
  | 'GuidanceReferral_DESC'
  | 'ReferToAdministrator_ASC'
  | 'ReferToAdministrator_DESC'
  | 'OtherAction_ASC'
  | 'OtherAction_DESC'
  | 'none_ASC'
  | 'none_DESC'
  | 'peers_ASC'
  | 'peers_DESC'
  | 'teacherInvolved_ASC'
  | 'teacherInvolved_DESC'
  | 'substitute_ASC'
  | 'substitute_DESC'
  | 'unknown_ASC'
  | 'unknown_DESC'
  | 'othersInvolved_ASC'
  | 'othersInvolved_DESC';

export type DisciplineUpdateInput = {
  readonly teacherComments?: Scalars['String'] | null;
  readonly adminComments?: Scalars['String'] | null;
  readonly classType?: Scalars['String'] | null;
  readonly location?: Scalars['String'] | null;
  readonly timeOfDay?: Scalars['String'] | null;
  readonly student?: UserRelateToOneInput | null;
  readonly teacher?: UserRelateToOneInput | null;
  readonly date?: Scalars['String'] | null;
  readonly addressed?: Scalars['String'] | null;
  readonly inappropriateLanguage?: Scalars['Boolean'] | null;
  readonly physicalConduct?: Scalars['Boolean'] | null;
  readonly nonCompliance?: Scalars['Boolean'] | null;
  readonly disruption?: Scalars['Boolean'] | null;
  readonly propertyMisuse?: Scalars['Boolean'] | null;
  readonly otherConduct?: Scalars['Boolean'] | null;
  readonly VerbalWarning?: Scalars['Boolean'] | null;
  readonly buddyRoom?: Scalars['Boolean'] | null;
  readonly conferenceWithStudent?: Scalars['Boolean'] | null;
  readonly ParentContact?: Scalars['Boolean'] | null;
  readonly PlanningRoomReferral?: Scalars['Boolean'] | null;
  readonly FollowupPlan?: Scalars['Boolean'] | null;
  readonly LossOfPrivilege?: Scalars['Boolean'] | null;
  readonly DetentionWithTeacher?: Scalars['Boolean'] | null;
  readonly IndividualizedInstruction?: Scalars['Boolean'] | null;
  readonly GuidanceReferral?: Scalars['Boolean'] | null;
  readonly ReferToAdministrator?: Scalars['Boolean'] | null;
  readonly OtherAction?: Scalars['Boolean'] | null;
  readonly none?: Scalars['Boolean'] | null;
  readonly peers?: Scalars['Boolean'] | null;
  readonly teacherInvolved?: Scalars['Boolean'] | null;
  readonly substitute?: Scalars['Boolean'] | null;
  readonly unknown?: Scalars['Boolean'] | null;
  readonly othersInvolved?: Scalars['Boolean'] | null;
};

export type DisciplinesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: DisciplineUpdateInput | null;
};

export type DisciplineCreateInput = {
  readonly teacherComments?: Scalars['String'] | null;
  readonly adminComments?: Scalars['String'] | null;
  readonly classType?: Scalars['String'] | null;
  readonly location?: Scalars['String'] | null;
  readonly timeOfDay?: Scalars['String'] | null;
  readonly student?: UserRelateToOneInput | null;
  readonly teacher?: UserRelateToOneInput | null;
  readonly date?: Scalars['String'] | null;
  readonly addressed?: Scalars['String'] | null;
  readonly inappropriateLanguage?: Scalars['Boolean'] | null;
  readonly physicalConduct?: Scalars['Boolean'] | null;
  readonly nonCompliance?: Scalars['Boolean'] | null;
  readonly disruption?: Scalars['Boolean'] | null;
  readonly propertyMisuse?: Scalars['Boolean'] | null;
  readonly otherConduct?: Scalars['Boolean'] | null;
  readonly VerbalWarning?: Scalars['Boolean'] | null;
  readonly buddyRoom?: Scalars['Boolean'] | null;
  readonly conferenceWithStudent?: Scalars['Boolean'] | null;
  readonly ParentContact?: Scalars['Boolean'] | null;
  readonly PlanningRoomReferral?: Scalars['Boolean'] | null;
  readonly FollowupPlan?: Scalars['Boolean'] | null;
  readonly LossOfPrivilege?: Scalars['Boolean'] | null;
  readonly DetentionWithTeacher?: Scalars['Boolean'] | null;
  readonly IndividualizedInstruction?: Scalars['Boolean'] | null;
  readonly GuidanceReferral?: Scalars['Boolean'] | null;
  readonly ReferToAdministrator?: Scalars['Boolean'] | null;
  readonly OtherAction?: Scalars['Boolean'] | null;
  readonly none?: Scalars['Boolean'] | null;
  readonly peers?: Scalars['Boolean'] | null;
  readonly teacherInvolved?: Scalars['Boolean'] | null;
  readonly substitute?: Scalars['Boolean'] | null;
  readonly unknown?: Scalars['Boolean'] | null;
  readonly othersInvolved?: Scalars['Boolean'] | null;
};

export type DisciplinesCreateInput = {
  readonly data?: DisciplineCreateInput | null;
};

export type MessageWhereInput = {
  readonly AND?: ReadonlyArray<MessageWhereInput | null> | null;
  readonly OR?: ReadonlyArray<MessageWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly subject?: Scalars['String'] | null;
  readonly subject_not?: Scalars['String'] | null;
  readonly subject_contains?: Scalars['String'] | null;
  readonly subject_not_contains?: Scalars['String'] | null;
  readonly subject_starts_with?: Scalars['String'] | null;
  readonly subject_not_starts_with?: Scalars['String'] | null;
  readonly subject_ends_with?: Scalars['String'] | null;
  readonly subject_not_ends_with?: Scalars['String'] | null;
  readonly subject_i?: Scalars['String'] | null;
  readonly subject_not_i?: Scalars['String'] | null;
  readonly subject_contains_i?: Scalars['String'] | null;
  readonly subject_not_contains_i?: Scalars['String'] | null;
  readonly subject_starts_with_i?: Scalars['String'] | null;
  readonly subject_not_starts_with_i?: Scalars['String'] | null;
  readonly subject_ends_with_i?: Scalars['String'] | null;
  readonly subject_not_ends_with_i?: Scalars['String'] | null;
  readonly subject_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly subject_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly message?: Scalars['String'] | null;
  readonly message_not?: Scalars['String'] | null;
  readonly message_contains?: Scalars['String'] | null;
  readonly message_not_contains?: Scalars['String'] | null;
  readonly message_starts_with?: Scalars['String'] | null;
  readonly message_not_starts_with?: Scalars['String'] | null;
  readonly message_ends_with?: Scalars['String'] | null;
  readonly message_not_ends_with?: Scalars['String'] | null;
  readonly message_i?: Scalars['String'] | null;
  readonly message_not_i?: Scalars['String'] | null;
  readonly message_contains_i?: Scalars['String'] | null;
  readonly message_not_contains_i?: Scalars['String'] | null;
  readonly message_starts_with_i?: Scalars['String'] | null;
  readonly message_not_starts_with_i?: Scalars['String'] | null;
  readonly message_ends_with_i?: Scalars['String'] | null;
  readonly message_not_ends_with_i?: Scalars['String'] | null;
  readonly message_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly message_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly sender?: UserWhereInput | null;
  readonly sender_is_null?: Scalars['Boolean'] | null;
  readonly receiver?: UserWhereInput | null;
  readonly receiver_is_null?: Scalars['Boolean'] | null;
  readonly sent?: Scalars['String'] | null;
  readonly sent_not?: Scalars['String'] | null;
  readonly sent_lt?: Scalars['String'] | null;
  readonly sent_lte?: Scalars['String'] | null;
  readonly sent_gt?: Scalars['String'] | null;
  readonly sent_gte?: Scalars['String'] | null;
  readonly sent_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly sent_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly read?: Scalars['Boolean'] | null;
  readonly read_not?: Scalars['Boolean'] | null;
  readonly link?: Scalars['String'] | null;
  readonly link_not?: Scalars['String'] | null;
  readonly link_contains?: Scalars['String'] | null;
  readonly link_not_contains?: Scalars['String'] | null;
  readonly link_starts_with?: Scalars['String'] | null;
  readonly link_not_starts_with?: Scalars['String'] | null;
  readonly link_ends_with?: Scalars['String'] | null;
  readonly link_not_ends_with?: Scalars['String'] | null;
  readonly link_i?: Scalars['String'] | null;
  readonly link_not_i?: Scalars['String'] | null;
  readonly link_contains_i?: Scalars['String'] | null;
  readonly link_not_contains_i?: Scalars['String'] | null;
  readonly link_starts_with_i?: Scalars['String'] | null;
  readonly link_not_starts_with_i?: Scalars['String'] | null;
  readonly link_ends_with_i?: Scalars['String'] | null;
  readonly link_not_ends_with_i?: Scalars['String'] | null;
  readonly link_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly link_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type MessageWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortMessagesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'subject_ASC'
  | 'subject_DESC'
  | 'message_ASC'
  | 'message_DESC'
  | 'sender_ASC'
  | 'sender_DESC'
  | 'receiver_ASC'
  | 'receiver_DESC'
  | 'sent_ASC'
  | 'sent_DESC'
  | 'read_ASC'
  | 'read_DESC'
  | 'link_ASC'
  | 'link_DESC';

export type MessageUpdateInput = {
  readonly subject?: Scalars['String'] | null;
  readonly message?: Scalars['String'] | null;
  readonly sender?: UserRelateToOneInput | null;
  readonly receiver?: UserRelateToOneInput | null;
  readonly sent?: Scalars['String'] | null;
  readonly read?: Scalars['Boolean'] | null;
  readonly link?: Scalars['String'] | null;
};

export type MessagesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: MessageUpdateInput | null;
};

export type MessageCreateInput = {
  readonly subject?: Scalars['String'] | null;
  readonly message?: Scalars['String'] | null;
  readonly sender?: UserRelateToOneInput | null;
  readonly receiver?: UserRelateToOneInput | null;
  readonly sent?: Scalars['String'] | null;
  readonly read?: Scalars['Boolean'] | null;
  readonly link?: Scalars['String'] | null;
};

export type MessagesCreateInput = {
  readonly data?: MessageCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type UserListTypeInfo = {
  key: 'User';
  fields:
    | 'id'
    | 'name'
    | 'email'
    | 'password'
    | 'taStudents'
    | 'taTeacher'
    | 'parent'
    | 'children'
    | 'canManageCalendar'
    | 'canSeeOtherUsers'
    | 'canManageUsers'
    | 'canManageRoles'
    | 'canManageLinks'
    | 'canManageDiscipline'
    | 'canSeeAllDiscipline'
    | 'canSeeAllTeacherEvents'
    | 'canSeeStudentEvents'
    | 'canSeeOwnCallback'
    | 'canSeeAllCallback'
    | 'hasTA'
    | 'hasClasses'
    | 'isStudent'
    | 'isParent'
    | 'isStaff'
    | 'isTeacher'
    | 'isSuperAdmin'
    | 'role'
    | 'block1Teacher'
    | 'block1Students'
    | 'block2Teacher'
    | 'block2Students'
    | 'block3Teacher'
    | 'block3Students'
    | 'block4Teacher'
    | 'block4Students'
    | 'block5Teacher'
    | 'block5Students'
    | 'taTeam'
    | 'studentFocusTeacher'
    | 'studentFocusStudent'
    | 'studentCellPhoneViolation'
    | 'teacherCellPhoneViolation'
    | 'teacherPbisCards'
    | 'studentPbisCards'
    | 'teacherDiscipline'
    | 'studentDiscipline'
    | 'callbackItems'
    | 'callbackAssigned'
    | 'messageSender'
    | 'messageReceiver'
    | 'callbackCount'
    | 'totalCallbackCount'
    | 'PbisCardCount'
    | 'YearPbisCount'
    | 'teacherSubject'
    | 'taPbisCardCount'
    | 'averageTimeToCompleteCallback'
    | 'block1Assignment'
    | 'block1ClassName'
    | 'block1AssignmentLastUpdated'
    | 'block2Assignment'
    | 'block2ClassName'
    | 'block2AssignmentLastUpdated'
    | 'block3Assignment'
    | 'block3ClassName'
    | 'block3AssignmentLastUpdated'
    | 'block4Assignment'
    | 'block4ClassName'
    | 'block4AssignmentLastUpdated'
    | 'block5Assignment'
    | 'block5ClassName'
    | 'block5AssignmentLastUpdated'
    | 'passwordResetToken'
    | 'passwordResetIssuedAt'
    | 'passwordResetRedeemedAt'
    | 'magicAuthToken'
    | 'magicAuthIssuedAt'
    | 'magicAuthRedeemedAt';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly taStudents?: string | null;
    readonly taTeacher?: string | null;
    readonly parent?: string | null;
    readonly children?: string | null;
    readonly canManageCalendar?: boolean | null;
    readonly canSeeOtherUsers?: boolean | null;
    readonly canManageUsers?: boolean | null;
    readonly canManageRoles?: boolean | null;
    readonly canManageLinks?: boolean | null;
    readonly canManageDiscipline?: boolean | null;
    readonly canSeeAllDiscipline?: boolean | null;
    readonly canSeeAllTeacherEvents?: boolean | null;
    readonly canSeeStudentEvents?: boolean | null;
    readonly canSeeOwnCallback?: boolean | null;
    readonly canSeeAllCallback?: boolean | null;
    readonly hasTA?: boolean | null;
    readonly hasClasses?: boolean | null;
    readonly isStudent?: boolean | null;
    readonly isParent?: boolean | null;
    readonly isStaff?: boolean | null;
    readonly isTeacher?: boolean | null;
    readonly isSuperAdmin?: boolean | null;
    readonly role?: string | null;
    readonly block1Teacher?: string | null;
    readonly block1Students?: string | null;
    readonly block2Teacher?: string | null;
    readonly block2Students?: string | null;
    readonly block3Teacher?: string | null;
    readonly block3Students?: string | null;
    readonly block4Teacher?: string | null;
    readonly block4Students?: string | null;
    readonly block5Teacher?: string | null;
    readonly block5Students?: string | null;
    readonly taTeam?: string | null;
    readonly studentFocusTeacher?: string | null;
    readonly studentFocusStudent?: string | null;
    readonly studentCellPhoneViolation?: string | null;
    readonly teacherCellPhoneViolation?: string | null;
    readonly teacherPbisCards?: string | null;
    readonly studentPbisCards?: string | null;
    readonly teacherDiscipline?: string | null;
    readonly studentDiscipline?: string | null;
    readonly callbackItems?: string | null;
    readonly callbackAssigned?: string | null;
    readonly messageSender?: string | null;
    readonly messageReceiver?: string | null;
    readonly callbackCount?: number | null;
    readonly totalCallbackCount?: number | null;
    readonly PbisCardCount?: number | null;
    readonly YearPbisCount?: number | null;
    readonly teacherSubject?: string | null;
    readonly taPbisCardCount?: number | null;
    readonly averageTimeToCompleteCallback?: number | null;
    readonly block1Assignment?: string | null;
    readonly block1ClassName?: string | null;
    readonly block1AssignmentLastUpdated?: Date | null;
    readonly block2Assignment?: string | null;
    readonly block2ClassName?: string | null;
    readonly block2AssignmentLastUpdated?: Date | null;
    readonly block3Assignment?: string | null;
    readonly block3ClassName?: string | null;
    readonly block3AssignmentLastUpdated?: Date | null;
    readonly block4Assignment?: string | null;
    readonly block4ClassName?: string | null;
    readonly block4AssignmentLastUpdated?: Date | null;
    readonly block5Assignment?: string | null;
    readonly block5ClassName?: string | null;
    readonly block5AssignmentLastUpdated?: Date | null;
    readonly passwordResetToken?: string | null;
    readonly passwordResetIssuedAt?: Date | null;
    readonly passwordResetRedeemedAt?: Date | null;
    readonly magicAuthToken?: string | null;
    readonly magicAuthIssuedAt?: Date | null;
    readonly magicAuthRedeemedAt?: Date | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type CalendarListTypeInfo = {
  key: 'Calendar';
  fields:
    | 'id'
    | 'name'
    | 'description'
    | 'status'
    | 'date'
    | 'author'
    | 'dateCreated'
    | 'link'
    | 'linkTitle';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly description?: string | null;
    readonly status?: string | null;
    readonly date?: Date | null;
    readonly author?: string | null;
    readonly dateCreated?: Date | null;
    readonly link?: string | null;
    readonly linkTitle?: string | null;
  };
  inputs: {
    where: CalendarWhereInput;
    create: CalendarCreateInput;
    update: CalendarUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: CalendarWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortCalendarsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type CalendarListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    CalendarListTypeInfo,
    CalendarListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  CalendarListTypeInfo,
  CalendarListTypeInfo['fields']
>;

export type RoleListTypeInfo = {
  key: 'Role';
  fields:
    | 'id'
    | 'name'
    | 'canManageCalendar'
    | 'canSeeOtherUsers'
    | 'canManageUsers'
    | 'canManageRoles'
    | 'canManageLinks'
    | 'canManageDiscipline'
    | 'canSeeAllDiscipline'
    | 'canSeeAllTeacherEvents'
    | 'canSeeStudentEvents'
    | 'canSeeOwnCallback'
    | 'canSeeAllCallback'
    | 'hasTA'
    | 'hasClasses'
    | 'isStudent'
    | 'isParent'
    | 'isStaff'
    | 'isTeacher'
    | 'isSuperAdmin'
    | 'assignedTo';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly canManageCalendar?: boolean | null;
    readonly canSeeOtherUsers?: boolean | null;
    readonly canManageUsers?: boolean | null;
    readonly canManageRoles?: boolean | null;
    readonly canManageLinks?: boolean | null;
    readonly canManageDiscipline?: boolean | null;
    readonly canSeeAllDiscipline?: boolean | null;
    readonly canSeeAllTeacherEvents?: boolean | null;
    readonly canSeeStudentEvents?: boolean | null;
    readonly canSeeOwnCallback?: boolean | null;
    readonly canSeeAllCallback?: boolean | null;
    readonly hasTA?: boolean | null;
    readonly hasClasses?: boolean | null;
    readonly isStudent?: boolean | null;
    readonly isParent?: boolean | null;
    readonly isStaff?: boolean | null;
    readonly isTeacher?: boolean | null;
    readonly isSuperAdmin?: boolean | null;
    readonly assignedTo?: string | null;
  };
  inputs: {
    where: RoleWhereInput;
    create: RoleCreateInput;
    update: RoleUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: RoleWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortRolesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type RoleListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    RoleListTypeInfo,
    RoleListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  RoleListTypeInfo,
  RoleListTypeInfo['fields']
>;

export type LinkListTypeInfo = {
  key: 'Link';
  fields:
    | 'id'
    | 'name'
    | 'description'
    | 'forTeachers'
    | 'forStudents'
    | 'forParents'
    | 'onHomePage'
    | 'modifiedBy'
    | 'modified'
    | 'link';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly description?: string | null;
    readonly forTeachers?: boolean | null;
    readonly forStudents?: boolean | null;
    readonly forParents?: boolean | null;
    readonly onHomePage?: boolean | null;
    readonly modifiedBy?: string | null;
    readonly modified?: Date | null;
    readonly link?: string | null;
  };
  inputs: {
    where: LinkWhereInput;
    create: LinkCreateInput;
    update: LinkUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: LinkWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortLinksBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type LinkListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    LinkListTypeInfo,
    LinkListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  LinkListTypeInfo,
  LinkListTypeInfo['fields']
>;

export type PbisCardListTypeInfo = {
  key: 'PbisCard';
  fields:
    | 'id'
    | 'category'
    | 'cardMessage'
    | 'student'
    | 'teacher'
    | 'dateGiven'
    | 'counted';
  backing: {
    readonly id: string;
    readonly category?: string | null;
    readonly cardMessage?: string | null;
    readonly student?: string | null;
    readonly teacher?: string | null;
    readonly dateGiven?: Date | null;
    readonly counted?: boolean | null;
  };
  inputs: {
    where: PbisCardWhereInput;
    create: PbisCardCreateInput;
    update: PbisCardUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: PbisCardWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortPbisCardsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type PbisCardListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    PbisCardListTypeInfo,
    PbisCardListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  PbisCardListTypeInfo,
  PbisCardListTypeInfo['fields']
>;

export type PbisTeamListTypeInfo = {
  key: 'PbisTeam';
  fields:
    | 'id'
    | 'teamName'
    | 'taTeacher'
    | 'uncountedCards'
    | 'countedCards'
    | 'currentLevel'
    | 'numberOfStudents'
    | 'averageCardsPerStudent'
    | 'dateModified'
    | 'lastModifiedBy';
  backing: {
    readonly id: string;
    readonly teamName?: string | null;
    readonly taTeacher?: string | null;
    readonly uncountedCards?: number | null;
    readonly countedCards?: number | null;
    readonly currentLevel?: number | null;
    readonly numberOfStudents?: number | null;
    readonly averageCardsPerStudent?: number | null;
    readonly dateModified?: Date | null;
    readonly lastModifiedBy?: string | null;
  };
  inputs: {
    where: PbisTeamWhereInput;
    create: PbisTeamCreateInput;
    update: PbisTeamUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: PbisTeamWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortPbisTeamsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type PbisTeamListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    PbisTeamListTypeInfo,
    PbisTeamListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  PbisTeamListTypeInfo,
  PbisTeamListTypeInfo['fields']
>;

export type StudentFocusListTypeInfo = {
  key: 'StudentFocus';
  fields:
    | 'id'
    | 'comments'
    | 'category'
    | 'student'
    | 'teacher'
    | 'dateCreated';
  backing: {
    readonly id: string;
    readonly comments?: string | null;
    readonly category?: string | null;
    readonly student?: string | null;
    readonly teacher?: string | null;
    readonly dateCreated?: Date | null;
  };
  inputs: {
    where: StudentFocusWhereInput;
    create: StudentFocusCreateInput;
    update: StudentFocusUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: StudentFocusWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortStudentFociBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type StudentFocusListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    StudentFocusListTypeInfo,
    StudentFocusListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  StudentFocusListTypeInfo,
  StudentFocusListTypeInfo['fields']
>;

export type CellPhoneViolationListTypeInfo = {
  key: 'CellPhoneViolation';
  fields: 'id' | 'description' | 'student' | 'teacher' | 'dateGiven';
  backing: {
    readonly id: string;
    readonly description?: string | null;
    readonly student?: string | null;
    readonly teacher?: string | null;
    readonly dateGiven?: Date | null;
  };
  inputs: {
    where: CellPhoneViolationWhereInput;
    create: CellPhoneViolationCreateInput;
    update: CellPhoneViolationUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: CellPhoneViolationWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortCellPhoneViolationsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type CellPhoneViolationListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    CellPhoneViolationListTypeInfo,
    CellPhoneViolationListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  CellPhoneViolationListTypeInfo,
  CellPhoneViolationListTypeInfo['fields']
>;

export type CallbackListTypeInfo = {
  key: 'Callback';
  fields:
    | 'id'
    | 'title'
    | 'description'
    | 'student'
    | 'teacher'
    | 'dateAssigned'
    | 'dateCompleted'
    | 'link'
    | 'messageFromTeacher'
    | 'messageFromStudent'
    | 'daysLate';
  backing: {
    readonly id: string;
    readonly title?: string | null;
    readonly description?: string | null;
    readonly student?: string | null;
    readonly teacher?: string | null;
    readonly dateAssigned?: Date | null;
    readonly dateCompleted?: Date | null;
    readonly link?: string | null;
    readonly messageFromTeacher?: string | null;
    readonly messageFromStudent?: string | null;
    readonly daysLate?: number | null;
  };
  inputs: {
    where: CallbackWhereInput;
    create: CallbackCreateInput;
    update: CallbackUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: CallbackWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortCallbacksBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type CallbackListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    CallbackListTypeInfo,
    CallbackListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  CallbackListTypeInfo,
  CallbackListTypeInfo['fields']
>;

export type DisciplineListTypeInfo = {
  key: 'Discipline';
  fields:
    | 'id'
    | 'teacherComments'
    | 'adminComments'
    | 'classType'
    | 'location'
    | 'timeOfDay'
    | 'student'
    | 'teacher'
    | 'date'
    | 'addressed'
    | 'inappropriateLanguage'
    | 'physicalConduct'
    | 'nonCompliance'
    | 'disruption'
    | 'propertyMisuse'
    | 'otherConduct'
    | 'VerbalWarning'
    | 'buddyRoom'
    | 'conferenceWithStudent'
    | 'ParentContact'
    | 'PlanningRoomReferral'
    | 'FollowupPlan'
    | 'LossOfPrivilege'
    | 'DetentionWithTeacher'
    | 'IndividualizedInstruction'
    | 'GuidanceReferral'
    | 'ReferToAdministrator'
    | 'OtherAction'
    | 'none'
    | 'peers'
    | 'teacherInvolved'
    | 'substitute'
    | 'unknown'
    | 'othersInvolved';
  backing: {
    readonly id: string;
    readonly teacherComments?: string | null;
    readonly adminComments?: string | null;
    readonly classType?: string | null;
    readonly location?: string | null;
    readonly timeOfDay?: string | null;
    readonly student?: string | null;
    readonly teacher?: string | null;
    readonly date?: Date | null;
    readonly addressed?: Date | null;
    readonly inappropriateLanguage?: boolean | null;
    readonly physicalConduct?: boolean | null;
    readonly nonCompliance?: boolean | null;
    readonly disruption?: boolean | null;
    readonly propertyMisuse?: boolean | null;
    readonly otherConduct?: boolean | null;
    readonly VerbalWarning?: boolean | null;
    readonly buddyRoom?: boolean | null;
    readonly conferenceWithStudent?: boolean | null;
    readonly ParentContact?: boolean | null;
    readonly PlanningRoomReferral?: boolean | null;
    readonly FollowupPlan?: boolean | null;
    readonly LossOfPrivilege?: boolean | null;
    readonly DetentionWithTeacher?: boolean | null;
    readonly IndividualizedInstruction?: boolean | null;
    readonly GuidanceReferral?: boolean | null;
    readonly ReferToAdministrator?: boolean | null;
    readonly OtherAction?: boolean | null;
    readonly none?: boolean | null;
    readonly peers?: boolean | null;
    readonly teacherInvolved?: boolean | null;
    readonly substitute?: boolean | null;
    readonly unknown?: boolean | null;
    readonly othersInvolved?: boolean | null;
  };
  inputs: {
    where: DisciplineWhereInput;
    create: DisciplineCreateInput;
    update: DisciplineUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: DisciplineWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortDisciplinesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type DisciplineListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    DisciplineListTypeInfo,
    DisciplineListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  DisciplineListTypeInfo,
  DisciplineListTypeInfo['fields']
>;

export type MessageListTypeInfo = {
  key: 'Message';
  fields:
    | 'id'
    | 'subject'
    | 'message'
    | 'sender'
    | 'receiver'
    | 'sent'
    | 'read'
    | 'link';
  backing: {
    readonly id: string;
    readonly subject?: string | null;
    readonly message?: string | null;
    readonly sender?: string | null;
    readonly receiver?: string | null;
    readonly sent?: Date | null;
    readonly read?: boolean | null;
    readonly link?: string | null;
  };
  inputs: {
    where: MessageWhereInput;
    create: MessageCreateInput;
    update: MessageUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: MessageWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortMessagesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type MessageListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    MessageListTypeInfo,
    MessageListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  MessageListTypeInfo,
  MessageListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly User: UserListTypeInfo;
  readonly Calendar: CalendarListTypeInfo;
  readonly Role: RoleListTypeInfo;
  readonly Link: LinkListTypeInfo;
  readonly PbisCard: PbisCardListTypeInfo;
  readonly PbisTeam: PbisTeamListTypeInfo;
  readonly StudentFocus: StudentFocusListTypeInfo;
  readonly CellPhoneViolation: CellPhoneViolationListTypeInfo;
  readonly Callback: CallbackListTypeInfo;
  readonly Discipline: DisciplineListTypeInfo;
  readonly Message: MessageListTypeInfo;
};
