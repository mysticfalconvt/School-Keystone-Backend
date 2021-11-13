import { text, relationship, timestamp, checkbox, select, } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { rules, isSignedIn } from '../access';

export const TrimesterAward = list({
    access: {
        create: isSignedIn,
        read: isSignedIn,
        update: isSignedIn,
        delete: isSignedIn,
    },
    fields: {
        howl: select({
            options: [
                { value: 'Respect', label: 'Respect' },
                { value: 'Responsibility', label: 'Responsibility' },
                { value: 'Perseverance', label: 'Perseverance' },
            ],

            isRequired: true,
        }),
        trimester: select({
            options: [
                { value: '1', label: '1' },
                { value: '2', label: '2' },
                { value: '3', label: '3' },
            ],
        }),

        date: timestamp({
            isRequired: true,
        }),

        student: relationship({
            ref: 'User',
        }),
        teacher: relationship({
            ref: 'User',
        }),


    },
});
