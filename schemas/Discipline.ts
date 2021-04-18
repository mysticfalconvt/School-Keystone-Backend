import { integer, select, text, relationship, timestamp, checkbox, } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { check } from 'prettier';
import { rules, isSignedIn } from '../access';

export const Discipline = list({
    access: {
        create: isSignedIn,
        read: () => true,
        // update: rules.canManageCalendar,
        // delete: rules.canManageCalendar,
    },
    fields: {

        teacherComments: text({
            ui: {
                displayMode: 'textarea',
            },
        }),
        adminComments: text({
            ui: {
                displayMode: 'textarea',
            },
        }),
        classType: select({
            options: [
                { label: 'Math', value: 'Math' },
                { label: 'Language Arts', value: 'Language Arts' },
                { label: 'Science', value: 'Science' },
                { label: 'Social Studies', value: 'Social Studies' },
                { label: 'Trimester', value: 'Trimester' },
                { label: 'TA', value: 'TA' },
                { label: 'Lunch', value: 'Lunch' },
                { label: 'Other', value: 'Other' },
            ],
            ui: {
                displayMode: 'segmented-control',
                // createView: { fieldMode: 'hidden' },
            },
        }),
        location: select({
            options: [
                { label: 'Classroom', value: 'Classroom' },
                { label: 'Gym', value: 'Gym' },
                { label: 'Library', value: 'Library' },
                { label: 'Cafeteria', value: 'Cafeteria' },
                { label: 'Hallway', value: 'Hallway' },
                { label: 'Bus', value: 'Bus' },
                { label: 'Outdoor Classroom', value: 'Outdoor Classroom' },
                { label: 'Other Location', value: 'Other Location' },

            ],
            ui: {
                displayMode: 'segmented-control',
                // createView: { fieldMode: 'hidden' },
            },
        }),
        timeOfDay: select({
            options: [
                { label: 'Morning', value: 'Morning' },
                { label: 'Block 1', value: 'Block 1' },
                { label: 'Block 2', value: 'Block 2' },
                { label: 'Lunch', value: 'Lunch' },
                { label: 'Block 3', value: 'Block 3' },
                { label: 'Block 4', value: 'Block 4' },
                { label: 'End of Day', value: 'End of Day' },

            ],
            ui: {
                displayMode: 'select',
                // createView: { fieldMode: 'hidden' },
            },
        }),
        student: relationship({
            ref: 'User.studentDiscipline',
        }),
        teacher: relationship({
            ref: 'User.teacherDiscipline',
        }),

        date: timestamp({
            isRequired: true,
            defaultValue: () => {
                const date = new Date();
                return date.toISOString();
            }
        }),
        addressed: timestamp({
            isRequired: true,
            defaultValue: () => {
                const date = new Date();
                return date.toISOString();
            }
        }),
        inappropriateLanguage: checkbox(),
        physicalConduct: checkbox(),
        nonCompliance: checkbox(),
        disruption: checkbox(),
        propertyMisuse: checkbox(),
        otherConduct: checkbox(),
        // Teacher Actions
        VerbalWarning: checkbox(),
        buddyRoom: checkbox(),
        conferenceWithStudent: checkbox(),
        ParentContact: checkbox(),
        PlanningRoomReferral: checkbox(),
        FollowupPlan: checkbox(),
        LossOfPrivilege: checkbox(),
        DetentionWithTeacher: checkbox(),
        IndividualizedInstruction: checkbox(),
        GuidanceReferral: checkbox(),
        ReferToAdministrator: checkbox(),
        OtherAction: checkbox(),
        // Others Involved
        none: checkbox(),
        peers: checkbox(),
        teacherInvolved: checkbox(),
        substitute: checkbox(),
        unknown: checkbox(),
        othersInvolved: checkbox(),

    }, ui: {
        listView: {
            initialColumns: ['student', 'teacher', 'date'],
            initialSort: { field: 'date', direction: "ASC" },
        }
    }
});
