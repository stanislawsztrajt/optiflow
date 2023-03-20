"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePrivateLessonDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_private_lesson_dto_1 = require("./create-private-lesson.dto");
class UpdatePrivateLessonDto extends (0, mapped_types_1.PartialType)(create_private_lesson_dto_1.CreatePrivateLessonDto) {
}
exports.UpdatePrivateLessonDto = UpdatePrivateLessonDto;
//# sourceMappingURL=update-private-lesson.dto.js.map