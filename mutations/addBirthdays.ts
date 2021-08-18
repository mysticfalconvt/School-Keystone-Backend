import { KeystoneContext, SessionStore } from '@keystone-next/types';
import { Session } from '../types';
import { BirthdayCreateInput } from '../.keystone/schema-types';
import { Birthday } from '../schemas/Birthday'
import { User } from '../schemas/User'


const graphql = String.raw;

async function addBirthdays(root: any,
    { birthdayData }: { birthdayData: string },

    context: KeystoneContext
): Promise<BirthdayCreateInput> {

    // get JSON array of students and updated schedules
    console.log('Adding Birthdays');
    const birthdayUpdateResults = [];
    const birthdayList = JSON.parse(birthdayData);
    // console.log(birthdayList);
    //go through each student and update their schedule or create a new student
    await Promise.all(birthdayList.map(async singleBirthday => {
        const student = await context.lists.User.findMany({
            where: { email: singleBirthday.email.toLowerCase() }, resolveFields: graphql`
      id
    email
    birthday{
        id
    }
    ` });
        // console.log(student);
        if (student.length > 0 && !student[0].birthday) {

            const createdBirthday = await context.lists.Birthday.createOne({
                data: {
                    date: singleBirthday.date,
                    student: { connect: { id: student[0].id } }
                },
                resolveFields: 'id'
            })

            birthdayUpdateResults.push(createdBirthday);
        }
    }))

    const cakeType = JSON.stringify(birthdayUpdateResults);
    return { cakeType }
}

export default addBirthdays;