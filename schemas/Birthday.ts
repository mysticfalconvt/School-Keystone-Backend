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
            label: 'Has Chosen a Cake',
        }),
        hasDelivered: checkbox({
            defaultValue: false,
            label: 'Has gotten their cake',
        }),

        student: relationship({
            ref: 'User.birthday',
        }),


    },
});
