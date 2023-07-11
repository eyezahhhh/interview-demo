import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Todo } from "./entities/todo.entity";
import { Repository } from "typeorm";
import { CreateTodoDto } from "./dto/create-todo.dto";

@Injectable()
export class TodoService {
    constructor(@InjectRepository(Todo) private readonly todoRepository: Repository<Todo>) {}

    async create(createTodoDto: CreateTodoDto) {
        const todo = this.todoRepository.create(createTodoDto);
        await this.todoRepository.insert(todo);
        return todo;
    }

    async findAll() {
        return await this.todoRepository.find();
    }

    async findOne(id: string) {
        return await this.todoRepository.findOneBy({id});
    }

    async remove(id: string) {
        try {
            const todo = await this.findOne(id);
            if (!todo) return null;
            await this.todoRepository.remove(todo);
            todo.id = id;
            return todo;
        } catch {
            return null;
        }
    }
}
