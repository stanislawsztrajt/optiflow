"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const books_module_1 = require("./modules/books/books.module");
const events_module_1 = require("./modules/events/events.module");
const lost_items_module_1 = require("./modules/lost-items/lost-items.module");
const users_module_1 = require("./modules/users/users.module");
const private_lessons_module_1 = require("./modules/private-lessons/private-lessons.module");
const set_user_id_middleware_1 = require("./core/middlewares/set-user-id.middleware");
const auth_module_1 = require("./modules/auth/auth.module");
const chat_gateway_1 = require("./websockets/chat.gateway");
const messages_module_1 = require("./modules/messages/messages.module");
const throttler_1 = require("@nestjs/throttler");
const core_1 = require("@nestjs/core");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(set_user_id_middleware_1.SetUserIdMiddleware)
            .forRoutes({ path: 'books', method: common_1.RequestMethod.POST }, { path: 'events', method: common_1.RequestMethod.POST }, { path: 'lost-items', method: common_1.RequestMethod.POST }, { path: 'private-lessons', method: common_1.RequestMethod.POST }, { path: 'messages', method: common_1.RequestMethod.POST });
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            throttler_1.ThrottlerModule.forRoot({
                ttl: 60,
                limit: 60,
            }),
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URI),
            auth_module_1.AuthModule,
            books_module_1.BooksModule,
            events_module_1.EventsModule,
            lost_items_module_1.LostItemsModule,
            users_module_1.UsersModule,
            private_lessons_module_1.PrivateLessonsModule,
            messages_module_1.MessagesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            chat_gateway_1.ChatGateway,
            {
                provide: core_1.APP_GUARD,
                useClass: throttler_1.ThrottlerGuard
            }
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map