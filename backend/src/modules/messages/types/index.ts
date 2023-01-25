import { User } from '../../../modules/users/schemas/users.schema';
import { Message } from '../schemas/messages.schema';

export interface Chat {
  user: User;
  latestMessage: Message;
}
