export declare enum BookCategoryEnum {
    MATH = "Matematyka",
    POL = "J\u0119zyk polski",
    ENG = "J\u0119zyk angielski",
    ESP = "J\u0119zyk hiszpa\u0144ski",
    GER = "J\u0119zyk niemiecki",
    HIST = "Historia",
    PHYS = "Fizyka",
    BIOL = "Biologia",
    CHEM = "Chemia",
    INF = "Informatyka",
    OTHER = "Inne",
    PROFESSION_WOOD_TECHNOLOGY = "Zawodowe: technologia drewna",
    PROFESSION_PROGRAMMER = "Zawodowe: programista",
    PROFESSION_IT = "Zawodowe: informatyk",
    PROFESSION_PHOTOGRAPHY_AND_MULTIMEDIA = "Zawodowe: fotografia i multimedia",
    PROFESSION_MECHATRONICS = "Zawodowe: mechatronik",
    PROFESSION_ROBOTICIST = "Zawodowe: robotyk"
}
export type BookCategoryType = `${BookCategoryEnum}`;
export declare const BookCategories: BookCategoryEnum[];
export declare enum BookLookEnum {
    NEW = "Nowy",
    VERY_GOOD = "Bardzo dobry",
    GOOD = "Dobry",
    AVG = "Przeci\u0119tny",
    WEAK = "S\u0142aby"
}
export type BookLookType = `${BookLookEnum}`;
export declare const BookLooks: BookLookEnum[];
export declare enum BookTypeEnum {
    BUY = "Kupi\u0119",
    SELL = "Sprzedam"
}
export type BookTypeType = `${BookTypeEnum}`;
export declare const BookTypes: BookTypeEnum[];
