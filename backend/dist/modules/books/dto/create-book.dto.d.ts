import { ValidatorConstraintInterface } from 'class-validator';
import { BookCategoryType, BookLookType, BookTypeType } from '../types/books.type';
export declare class MaxLengthOfArrayStrings implements ValidatorConstraintInterface {
    validate(images: string[]): Promise<boolean>;
}
export declare class CreateBookDto {
    title: string;
    description: string;
    category: BookCategoryType;
    type: BookTypeType;
    publishingHouse: string;
    part: string;
    images: string[];
    price: number;
    look: BookLookType;
}
