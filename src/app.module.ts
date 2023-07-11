import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { TodoModule } from "./todo/todo.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeormConfig } from "./config/typeorm.config";

@Module({
    imports: [TypeOrmModule.forRoot(TypeormConfig), TodoModule],
    controllers: [AppController]
})
export class AppModule {}
