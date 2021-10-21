import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses.controller';
import { CourseService } from './courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Course from './entities/courses.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'test2',
      entities: [Course],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Course]),
  ],
  controllers: [AppController, CoursesController],
  providers: [AppService, CourseService],
})
export class AppModule {}
