import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import Course from './courses.entity';
import { CreateCourseDto } from './dto/create-course.dto';
import Review from './rewiew.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly coursesRepository: Repository<Course>,
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
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

  async findAllReview(courseId: string): Promise<Review[]>{
    try {
      //console.log("CourseId:", courseId);
      const rewiew = await this.reviewRepository.find({where : {courseId: courseId}});
      return rewiew
    } catch (error) {
      console.log(error)
    }
  }
}
