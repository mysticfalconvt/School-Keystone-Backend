import { integer, select, text, relationship, timestamp, checkbox, } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { rules, isSignedIn } from '../access';

export const Callback = list({
    access: {
        create: isSignedIn,
        read: isSignedIn,
        update: isSignedIn,
        delete: isSignedIn,
    },
    fields: {
        title: text(),
        description: text({
            ui: {
                displayMode: 'textarea',
            },
        }),
        // category: text(),
        student: relationship({
            ref: 'User.callbackItems',
        }),
        teacher: relationship({
            ref: 'User.callbackAssigned',
        }),

        dateAssigned: timestamp({
            isRequired: true,
            defaultValue: () => {
                const date = new Date();
                return date.toISOString();
            }
        }),
        dateCompleted: timestamp({
            defaultValue: null,
        }),
        link: text(),
        messageFromTeacher: text(),
        messageFromStudent: text(),
        daysLate: integer(),

    },
});
