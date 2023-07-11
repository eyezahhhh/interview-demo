import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import Config from "./config/config";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        disableErrorMessages: false,
        validateCustomDecorators: true
    }));

    await app.listen(Config.get().port);
}
bootstrap();
