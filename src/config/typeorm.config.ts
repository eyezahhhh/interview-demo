import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import Config from "./config"

const config = Config.get();

export const TypeormConfig: TypeOrmModuleOptions = {
    type: "postgres",
    host: config.databaseAddress,
    port: config.databasePort,
    username: config.databaseUsername,
    password: config.databasePassword,
    database: config.databaseName,
    synchronize: true,
    entities: [__dirname + "/../**/*.entity{.ts,.js}"]
}