import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses.controller';
import { CourseService } from './courses.service'

@Module({
  imports: [],
  controllers: [AppController, CoursesController],
  providers: [AppService, CourseService],
})
export class AppModule {}
