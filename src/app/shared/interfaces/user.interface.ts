import {Permissions} from '../enums/permissions.enum';

export interface User {
  id: number;
  name: string;
  permissions: Permissions[];
}
