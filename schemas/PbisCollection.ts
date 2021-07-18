import { integer, select, text, relationship, timestamp, checkbox, } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { rules, isSignedIn } from '../access';
import { CalendarDay } from '@keystonejs/fields'

export const PbisCollection = list({
    access: {
        create: isSignedIn,
        read: isSignedIn,
        // update: rules.canManageCalendar,
        // delete: rules.canManageCalendar,
    },
    fields: {
        name: text(),

        collectionDate: timestamp({
            isRequired: true,
            defaultValue: () => {
                const date = new Date();
                return date.toISOString();
            }
        }),
        personalLevelWinners: text(),
        randomDrawingWinners: text(),
        taTeamsLevels: text(),
        taTeamNewLevelWinners: text(),



        dateModified: timestamp({
            isRequired: true,
            defaultValue: () => {
                const date = new Date();
                return date.toISOString();
            }
        }),
        lastModifiedBy: relationship({ ref: 'User' })

    },
});
