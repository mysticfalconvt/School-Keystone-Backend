import { KeystoneContext, SessionStore } from '@keystone-next/types';
import { Session } from '../types';
import { CalendarUpdateInput } from '../.keystone/schema-types';
import { Birthday } from '../schemas/Birthday'
import { User } from '../schemas/User'


const graphql = String.raw;

async function addBirthdays(root: any,
    { birthdayData }: { birthdayData: string },

    context: KeystoneContext
): Promise<CalendarUpdateInput> {

    // get JSON array of students and updated schedules
    console.log('Adding Birthdays');
    const birthdayUpdateResults = [];
    const birthdayList = JSON.parse(birthdayData);
    //go through each student and update their schedule or create a new student
    await Promise.all(birthdayList.map(async singleBirthday => {
        const student = await context.lists.User.findMany({
            where: { email: singleBirthday.student }, resolveFields: graphql`
      id
    email
    ` });

        const createdBirthday = await context.lists.Birthday.createOne({
            data: {
                date: singleBirthday.date,
                student: { connect: { id: student[0].id } }
            },
            resolveFields: 'id'
        })

        birthdayUpdateResults.push(createdBirthday);
    }))

    const name = JSON.stringify(birthdayUpdateResults);
    return { name }
}

export default addBirthdays;