import { integer, select, text, relationship, timestamp, checkbox, } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { rules, isSignedIn } from '../access';
import { CalendarDay } from '@keystonejs/fields'

export const Message = list({
    access: {
        create: isSignedIn,
        read: () => true,
        // update: rules.canManageCalendar,
        // delete: rules.canManageCalendar,
    },
    fields: {
        subject: text(),
        message: text({
            ui: {
                displayMode: 'textarea',
            },
        }),

        sender: relationship({
            ref: 'User.messageSender',
        }),
        receiver: relationship({
            ref: 'User.messageReceiver',
        }),
        sent: timestamp({
            isRequired: true,
            defaultValue: () => {
                const date = new Date();
                return date.toISOString();
            }
        }),
        read: checkbox({ defaultValue: false, isRequired: true, label: 'Read' }),
        link: text(),
    },
});
