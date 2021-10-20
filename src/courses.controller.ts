import { Controller, Get } from '@nestjs/common';
import { Course } from './interfaces/courses.interface';
import { CourseService } from './courses.service'


@Controller("/courses")
export class CoursesController {
  constructor(private coursesService: CourseService) {}

  @Get()
  async findAll(): Promise<Course[]> {
    return this.coursesService.findAll()
  }
}