import { KeystoneContext, SessionStore } from '@keystone-next/types';
import { Session } from '../types';
import { UserUpdateInput, PbisTeamUpdateInput } from '../.keystone/schema-types';
import { User } from '../schemas/User'
import { Callback } from '../schemas/Callback';
import { sendAnEmail } from '../lib/mail';



const graphql = String.raw;

async function sendEmail(root: any,
    { emailData }: { emailData: string },


    context: KeystoneContext
): Promise<UserUpdateInput> {
    //console log all the inputs
    console.log('Sending an Email');
    const email = JSON.parse(emailData)
    // console.log('to', email);
    const to = email.toAddress;
    const from = email.fromAddress;
    const subject = email.subject || "Email from NCUJHS.Tech"
    const body = email.body;
    await sendAnEmail(to, from, subject, body)

    return { id: "yes" }
}

export default sendEmail;