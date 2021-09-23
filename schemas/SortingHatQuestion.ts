import { integer, select, text, relationship, timestamp, checkbox, } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { rules, isSignedIn } from '../access';

export const SortingHatQuestion = list({
    access: {
        create: isSignedIn,
        read: () => true,
        // update: rules.canManageCalendar,
        // delete: rules.canManageCalendar,
    },
    fields: {

        question: text({
            ui: {
                displayMode: 'textarea',
            },
        }),
        gryffindorChoice: text(),
        hufflepuffChoice: text(),
        ravenclawChoice: text(),
        slytherinChoice: text(),

        createdBy: relationship({
            ref: 'User',
        }),

    },
    ui: {
        listView: {
            initialColumns: ['question'],
        },
    },
});
