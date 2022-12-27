import { UnauthorizedException } from '@nestjs/common';
import { Message } from 'src/modules/messages/schemas/messages.schema';

export const parseJwt: (jwt: string) => string = (jwt) => {
  try {
    return jwt.split(' ')[1];
  } catch {
    throw new UnauthorizedException();
  }
};

export const groupBy = <T, K extends keyof any>(list: T[], getKey: (item: T) => K) =>
  list.reduce((previous, currentItem) => {
    const group = getKey(currentItem);
    if (!previous[group]) previous[group] = [];
    previous[group].push(currentItem);
    return previous;
  }, {} as Record<K, T[]>);

export const findLatestMessage = (messages: Message[]): Message => {
  let latestMessage = messages[0];

  messages.forEach((message) => {
    if (Date.parse(message.createdAt) > Date.parse(latestMessage.createdAt)) {
      latestMessage = message;
    }
  });

  return latestMessage;
};
