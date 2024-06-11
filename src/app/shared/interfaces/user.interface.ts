import {Permissions} from '../enums/permissions.enum';

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  wishlist?: string[];
  permissions: Permissions[];
}
