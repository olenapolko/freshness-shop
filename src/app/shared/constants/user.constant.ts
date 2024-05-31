import {User} from '../interfaces/user.interface';
import {Permissions} from '../enums/permissions.enum';

export const USER: User = {
  id: 1,
  name: 'Harry Potter',
  permissions: [Permissions.READ, Permissions.WRITE, Permissions.BUY]
};
