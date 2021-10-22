import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import Course from './courses.entity';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly coursesRepository: Repository<Course>,
  ) {}

  async findAll(): Promise<Course[]> {
    try {
      return this.coursesRepository.find();
    } catch (error) {
      console.log(error);
    }
  }

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    try {
      const newCourse = this.coursesRepository.save(createCourseDto);
      return newCourse;
    } catch (error) {
      console.log(error);
    }
  }
}
