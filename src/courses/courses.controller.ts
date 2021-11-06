import { Body, Controller, Get, HttpException, Post, HttpStatus, Param } from '@nestjs/common';

import { CourseService } from './courses.service'
import { CreateCourseDto } from './dto/create-course.dto';

import Review from './rewiew.entity';
import Course from './courses.entity'

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

  @Get(':courseId/reviews')
  async findAllReview(@Param('courseId') courseId:string): Promise<Review[]>{
    return this.coursesService.findAllReview(courseId);
  }
}