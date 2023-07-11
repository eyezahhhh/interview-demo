import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateTodoDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(1000)
    message: string
}