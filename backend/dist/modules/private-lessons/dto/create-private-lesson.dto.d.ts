import { PrivateLessonsCategoryType, PrivateLessonsOfferTypeType } from '../types/private-lessons.type';
export declare class CreatePrivateLessonDto {
    title: string;
    description: string;
    category: PrivateLessonsCategoryType;
    offerType: PrivateLessonsOfferTypeType;
    price: number;
}
