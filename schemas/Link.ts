import { integer, select, text, relationship, timestamp, checkbox, } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { rules, isSignedIn } from '../access';
import { CalendarDay } from '@keystonejs/fields'

export const Link = list({
    access: {
        create: isSignedIn,
        read: isSignedIn,
        update: isSignedIn,
        delete: isSignedIn,
    },
    fields: {
        name: text({ isRequired: true }),
        description: text({
            ui: {
                displayMode: 'textarea',
            },

        }),

        forTeachers: checkbox({
            defaultValue: () => false,
            label: 'Teachers can view',
        }),
        forStudents: checkbox({
            defaultValue: false,
            label: 'Students can view',
        }),
        forParents: checkbox({
            defaultValue: false,
            label: 'Parents can view',
        }),
        onHomePage: checkbox({
            defaultValue: false,
            label: 'Display on the home page'
        }),
        forPbis: checkbox({
            defaultValue: false,
            label: 'Display on the PBIS page'
        }),

        modifiedBy: relationship({
            ref: 'User',
        }),
        modified: timestamp({
            isRequired: true,
            defaultValue: () => {
                const date = new Date();
                return date.toISOString();
            }
        }),
        link: text(),

    },
});
