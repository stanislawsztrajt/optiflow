"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookTypes = exports.BookTypeEnum = exports.BookLooks = exports.BookLookEnum = exports.BookCategories = exports.BookCategoryEnum = void 0;
var BookCategoryEnum;
(function (BookCategoryEnum) {
    BookCategoryEnum["MATH"] = "Matematyka";
    BookCategoryEnum["POL"] = "J\u0119zyk polski";
    BookCategoryEnum["ENG"] = "J\u0119zyk angielski";
    BookCategoryEnum["ESP"] = "J\u0119zyk hiszpa\u0144ski";
    BookCategoryEnum["GER"] = "J\u0119zyk niemiecki";
    BookCategoryEnum["HIST"] = "Historia";
    BookCategoryEnum["PHYS"] = "Fizyka";
    BookCategoryEnum["BIOL"] = "Biologia";
    BookCategoryEnum["CHEM"] = "Chemia";
    BookCategoryEnum["INF"] = "Informatyka";
    BookCategoryEnum["OTHER"] = "Inne";
    BookCategoryEnum["PROFESSION_WOOD_TECHNOLOGY"] = "Zawodowe technologia drewna";
    BookCategoryEnum["PROFESSION_PROGRAMMER"] = "Zawodowe programista";
    BookCategoryEnum["PROFESSION_IT"] = "Zawodowe informatyk";
    BookCategoryEnum["PROFESSION_PHOTOGRAPHY_AND_MULTIMEDIA"] = "Zawodowe fotografia i multimedia";
    BookCategoryEnum["PROFESSION_MECHATRONICS"] = "Zawodowe mechatronik";
    BookCategoryEnum["PROFESSION_ROBOTICIST"] = "Zawodowe robotyk";
})(BookCategoryEnum = exports.BookCategoryEnum || (exports.BookCategoryEnum = {}));
exports.BookCategories = Object.values(BookCategoryEnum);
var BookLookEnum;
(function (BookLookEnum) {
    BookLookEnum["NEW"] = "Nowy";
    BookLookEnum["VERY_GOOD"] = "Bardzo dobry";
    BookLookEnum["GOOD"] = "Dobry";
    BookLookEnum["AVG"] = "Przeci\u0119tny";
    BookLookEnum["WEAK"] = "S\u0142aby";
})(BookLookEnum = exports.BookLookEnum || (exports.BookLookEnum = {}));
exports.BookLooks = Object.values(BookLookEnum);
var BookTypeEnum;
(function (BookTypeEnum) {
    BookTypeEnum["BUY"] = "Kupi\u0119";
    BookTypeEnum["SELL"] = "Sprzedam";
})(BookTypeEnum = exports.BookTypeEnum || (exports.BookTypeEnum = {}));
exports.BookTypes = Object.values(BookTypeEnum);
//# sourceMappingURL=books.type.js.map