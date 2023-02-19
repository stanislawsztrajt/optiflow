"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findLatestMessage = exports.groupBy = exports.parseJwt = void 0;
const common_1 = require("@nestjs/common");
const parseJwt = (jwt) => {
    try {
        return jwt.split(' ')[1];
    }
    catch (_a) {
        throw new common_1.UnauthorizedException();
    }
};
exports.parseJwt = parseJwt;
const groupBy = (list, getKey) => list.reduce((previous, currentItem) => {
    const group = getKey(currentItem);
    if (!previous[group])
        previous[group] = [];
    previous[group].push(currentItem);
    return previous;
}, {});
exports.groupBy = groupBy;
const findLatestMessage = (messages) => {
    let latestMessage = messages[0];
    messages.forEach((message) => {
        if (Date.parse(message.createdAt) > Date.parse(latestMessage.createdAt)) {
            latestMessage = message;
        }
    });
    return latestMessage;
};
exports.findLatestMessage = findLatestMessage;
//# sourceMappingURL=index.js.map