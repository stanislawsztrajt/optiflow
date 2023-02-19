"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors({
        origin: process.env.CLIENT_URL,
        methods: ['GET', 'POST', 'PATCH', 'DELETE'],
        credentials: true,
    });
    await app.listen(1337);
}
bootstrap();
//# sourceMappingURL=main.js.map