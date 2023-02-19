"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLostItemDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_lost_item_dto_1 = require("./create-lost-item.dto");
class UpdateLostItemDto extends (0, mapped_types_1.PartialType)(create_lost_item_dto_1.CreateLostItemDto) {
}
exports.UpdateLostItemDto = UpdateLostItemDto;
//# sourceMappingURL=update-lost-item.dto.js.map