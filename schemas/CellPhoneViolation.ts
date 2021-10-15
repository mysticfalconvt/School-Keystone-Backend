import { integer, select, text, relationship, timestamp, checkbox, } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { rules, isSignedIn } from '../access';

export const CellPhoneViolation = list({
    access: {
        create: isSignedIn,
        read: isSignedIn,
        update: isSignedIn,
        delete: isSignedIn,
    },
    fields: {

        description: text({
            ui: {
                displayMode: 'textarea',
            },
        }),

        student: relationship({
            ref: 'User.studentCellPhoneViolation',
        }),
        teacher: relationship({
            ref: 'User.teacherCellPhoneViolation',
        }),
        dateGiven: timestamp({
            isRequired: true,
            defaultValue: () => {
                const date = new Date();
                return date.toISOString();
            }
        }),

    },
});
