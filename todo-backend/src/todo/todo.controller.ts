import { Controller,Get,Post,Body,Param,Delete,Put } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {

    constructor(private readonly todoService: TodoService){}
    @Get()
    findAll(){
        return this.todoService.findAll()
    }
  
    @Post()
    create(@Body('title')title:string){
        return this.todoService.create(title)
    }
    @Put(':id')
    update(@Param('id') id: number,@Body('isCompleted') isCompleted:boolean){
        return this.todoService.update(id,isCompleted)
    }
    @Delete(':id')
     delete(@Param('id') id: number){
        return this.todoService.delete(id)
     }
}
