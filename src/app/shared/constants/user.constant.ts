import {User} from '@shared/interfaces/user.interface';
import {Permissions} from '@shared/enums/permissions.enum';

export const USER: User = {
  _id: '1',
  firstName: 'Harry Potter',
  lastName: 'Potter',
  email: 'harrypotter@gmila.com',
  permissions: [Permissions.READ, Permissions.WRITE, Permissions.BUY]
};
