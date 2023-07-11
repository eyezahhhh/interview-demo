import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("todos")
export class Todo {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({
        type: "text"
    })
    message: string

    @CreateDateColumn({
        type: "timestamp"
    })
    timestamp: string
}
