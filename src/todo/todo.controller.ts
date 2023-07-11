import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Put } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { CreateTodoDto } from "./dto/create-todo.dto";

@Controller("todo")
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Put()
    async create(@Body() body: CreateTodoDto) {
        console.log(body);
        return await this.todoService.create(body);
    }

    @Delete(":id")
    async remove(@Param("id") id: string) {
        const todo = await this.todoService.remove(id);
        if (todo) return todo;
        throw new HttpException("Todo not found", HttpStatus.NOT_FOUND);
    }

    @Get()
    findAll() {
        return this.todoService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.todoService.findOne(id);
    }
}
