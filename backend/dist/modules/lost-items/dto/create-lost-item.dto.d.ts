import { LostItemFoundEnum } from '../types/lost-items.type';
export declare class CreateLostItemDto {
    name: string;
    description: string;
    foundLocation?: string;
    date: Date;
    images: string[];
    type: LostItemFoundEnum;
}
