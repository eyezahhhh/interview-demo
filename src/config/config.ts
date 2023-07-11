import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import * as FS from "fs";
import { ConfigDto } from "./dto/config.dto";

const CONFIG_FILE_NAME = "Config.json";

const DEFAULT_CONFIG_FILE: ConfigDto = {
    port: 3000,
    databaseAddress: "127.0.0.1",
    databasePort: 3306,
    databaseName: "todo",
    databaseUsername: "root",
    databasePassword: ""
}

let config: ConfigDto | null;


if (FS.existsSync(CONFIG_FILE_NAME)) {
    const rawData = FS.readFileSync(CONFIG_FILE_NAME).toString();
    try {
        var jsonObject = JSON.parse(rawData);
    } catch (e) {
        console.error("***\n\nDetected issues while trying to parse config file as JSON!");
        console.error(e);
        process.exit(1);
    }

    config = plainToInstance(ConfigDto, jsonObject);
    validate(config)
    .then(errors => {
        if (errors.length) {
            console.error("***\n\nDetected issues with config file!");
            for (let error of errors) {
                for (let constraintMessage of Object.values(error.constraints || {})) {
                    console.error(`"${error.property}":`, constraintMessage);
                }
                console.log(`Default value of "${error.property}": "${(DEFAULT_CONFIG_FILE as any)[error.property]}"`);
            }
            
            process.exit(1);
        }
    });
} else {
    console.log(`Creating ${CONFIG_FILE_NAME}...`);
    FS.writeFileSync(CONFIG_FILE_NAME, JSON.stringify(DEFAULT_CONFIG_FILE, null, 2));
    console.log("***\n\nCreated config file! Update the contents and restart the server.");
    process.exit(1);
}

export default abstract class Config {
    static get(): ConfigDto {
        return Object.assign(Object.create(Object.getPrototypeOf(config)), config); // duplicate config dto to prevent modification
    }

    static hasLoaded() {
        return !!config;
    }
}