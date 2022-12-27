import { User } from 'src/modules/users/schemas/users.schema';
import { Message } from '../schemas/messages.schema';

export interface Chat {
  user: User;
  latestMessage: Message;
}
