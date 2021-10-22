import { Body, Controller, Get, HttpException, Post, HttpStatus } from '@nestjs/common';
import { Course } from '../interfaces/courses.interface';
import { CourseService } from './courses.service'
import { CreateCourseDto } from './dto/create-course.dto';


@Controller("/courses")
export class CoursesController {
  constructor(private coursesService: CourseService) {}

  @Get()
  async findAll(): Promise<Course[]> {
    return this.coursesService.findAll()
  }

  @Post()
  async create(@Body() createCourseDto: CreateCourseDto):Promise<Course>{
    if(createCourseDto.number !== undefined && createCourseDto.title !== undefined) {
      const newCourse = this.coursesService.create(createCourseDto)
      return newCourse
    }else{
      throw new HttpException('Bad request', HttpStatus.BAD_REQUEST)
    }
   
  }
}