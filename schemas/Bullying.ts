import { integer, select, text, relationship, timestamp, checkbox, } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { check } from 'prettier';
import { rules, isSignedIn } from '../access';

export const Bullying = list({
    access: {
        create: isSignedIn,
        read: isSignedIn,
        update: isSignedIn,
        delete: isSignedIn,
    },
    fields: {

        studentOffender: relationship({
            ref: 'User',
        }),
        teacherAuthor: relationship({
            ref: 'User',
        }),

        dateReported: timestamp({
            isRequired: true,
            defaultValue: () => {
                const date = new Date();
                return date.toISOString();
            }
        }),
        investigationDate: timestamp({
            isRequired: true,
            defaultValue: () => {
                const date = new Date();
                return date.toISOString();
            }
        }),

        studentReporter: text(),
        employeeWitness: text(),
        studentsInterviewed: text(),
        initialActions: text(),
        nextSteps: text(),
        reporter: text(),
        determination: select({
            options: [
                { value: 'No', label: 'No' },
                { value: 'Yes', label: 'Yes' },
            ],
        }),
        determinationDate: timestamp({
            isRequired: true,
            defaultValue: () => {
                const date = new Date();
                return date.toISOString();
            }
        }),
        determinationExplanation: text(),
        assignmentInvestigator: text(),



    }, ui: {
        listView: {
            initialColumns: ['studentOffender', 'teacherAuthor', 'dateReported'],
            initialSort: { field: 'dateReported', direction: "ASC" },
        }
    }
});
