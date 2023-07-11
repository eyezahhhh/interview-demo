import { IsInt, IsString, IsNotEmpty } from "class-validator"

export class ConfigDto {
    @IsInt()
    readonly port: number

    @IsString()
    @IsNotEmpty()
    readonly databaseAddress: string

    @IsInt()
    @IsNotEmpty()
    readonly databasePort: number

    @IsString()
    @IsNotEmpty()
    readonly databaseName: string

    @IsString()
    @IsNotEmpty()
    readonly databaseUsername: string

    @IsString()
    readonly databasePassword: string
}