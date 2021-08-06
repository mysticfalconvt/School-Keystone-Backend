import { text, relationship, timestamp, checkbox, } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { rules, isSignedIn } from '../access';

export const Birthday = list({
    access: {
        create: isSignedIn,
        read: isSignedIn,
        update: isSignedIn,
        delete: isSignedIn,
    },
    fields: {
        cakeType: text(),
        date: timestamp({
            isRequired: true,
        }),
        hasChosen: checkbox({
            defaultValue: () => false,
            label: 'Teachers can view',
        }),
        hasDelivered: checkbox({
            defaultValue: false,
            label: 'Students can view',
        }),

        student: relationship({
            ref: 'User.birthday',
        }),


    },
});
