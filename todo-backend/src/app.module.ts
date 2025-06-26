import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { Todo } from './todo/todo.entity';
@Module({
  imports: [TypeOrmModule.forRoot({type:'sqlite', database:'db.sqlite',entities:[__dirname+'/**/*.entity{.ts,.js}'],synchronize:true}),TodoModule]
})
export class AppModule {}
