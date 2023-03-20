import { Message } from '../../modules/messages/schemas/messages.schema';
export declare const parseJwt: (jwt: string) => string;
export declare const groupBy: <T, K extends string | number | symbol>(list: T[], getKey: (item: T) => K) => Record<K, T[]>;
export declare const findLatestMessage: (messages: Message[]) => Message;
