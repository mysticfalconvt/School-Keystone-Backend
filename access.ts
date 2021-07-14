import { permissionsList } from './schemas/fields';
import { ListAccessArgs } from './types';
// At it's simplest, the access control returns a yes or no value depending on the users session

export function isSignedIn({ session }: ListAccessArgs) {
  return !!session;
}

const generatedPermissions = Object.fromEntries(
  permissionsList.map((permission) => [
    permission,
    function ({ session }: ListAccessArgs) {
      return !!session?.data[permission];
    },
  ]),
);
// Permissions check if someone meets a criteria - yes or no.
export const permissions = {
  ...generatedPermissions,
  isAwesome({ session }: ListAccessArgs): boolean {
    return session?.data.name.includes('wes');
  },
};

// Rule based function
// Rules can return a boolean - yes or no - or a filter which limits which products they can CRUD.
export const rules = {
  canManageCalendar({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }
    // 1. Do they have the permission of canManageProducts
    if (permissions.canManageCalendar({ session })) {
      return true;
    }
    // 2. If not, do they own this item?
    return false;
  },
  canViewCalendar({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }
    // 1. Do they have the permission of canManageProducts
    if (permissions.canManageCalendar({ session })) {
      return true;
    }
    // 2. If not, do they own this item?
    return false;
  },
  canSeeLinks( { session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }

    if(permissions.isStaff({session})){
      return { forTeachers: true }
    }
  },
  canManageLinks({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }
    // 1. Do they have the permission of canManageProducts
    if (permissions.canManageLinks({ session })) {
      return true;
    }
    // 2. If not, do they own this item?
    return false;
  },
  canManageUsers({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }

    // Otherwise they may only update themselves!
    return { id: session.itemId };
  },
};
