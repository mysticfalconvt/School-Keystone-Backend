import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { User } from './schemas/User';
import { Calendar } from './schemas/Calendar'
import { Link } from './schemas/Link'
import { Message } from './schemas/Message'
import { PbisCard } from './schemas/PbisCard'
import { PbisTeam } from './schemas/PbisTeam'
import { StudentFocus } from './schemas/StudentFocus'
import { CellPhoneViolation } from './schemas/CellPhoneViolation'
import { Callback } from './schemas/Callback'
import { Discipline } from './schemas/Discipline'
import { PbisCollection } from './schemas/PbisCollection'
import { SchoolPbisInfo } from './schemas/SchoolPbisInfo'
import { Birthday } from './schemas/Birthday'
import { BugReport } from './schemas/BugReport'
import { Bullying } from './schemas/Bullying'

import { extendGraphqlSchema } from './mutations';
import 'dotenv/config';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { sendPasswordResetEmail } from './lib/mail';

const databaseURL =
  process.env.DATABASE_URL;

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO: Add in inital roles here
  },
  passwordResetLink: {
    async sendToken(args) {
      // send the email
      await sendPasswordResetEmail(args.token, args.identity);
    },
  },
});

export default withAuth(
  config({
    // @ts-ignore
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
      // TODO: Add data seeding here
    },
    lists: createSchema({
      // Schema items go in here
      User,
      Calendar,
      // Role,
      Link,
      PbisCard,
      PbisTeam,
      StudentFocus,
      CellPhoneViolation,
      Callback,
      Discipline,
      Message,
      PbisCollection,
      SchoolPbisInfo,
      Birthday,
      BugReport,
      Bullying,
    }),
    extendGraphqlSchema,
    ui: {
      // Show the UI only for poeple who pass this test
      isAccessAllowed: ({ session }) => {
        console.log(session?.data);
        return !!session?.data?.isSuperAdmin
      },
    },
    session: withItemData(statelessSessions(sessionConfig), {
      // GraphQL Query
      User: 'id name email canManageUsers canManageCalendar isSuperAdmin',
    }),
  })
);