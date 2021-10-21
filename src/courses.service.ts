import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import Course from './entities/courses.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly coursesRepository: Repository<Course>,
  ) {}

  async findAll(): Promise<Course[]> {
    try {
      return  this.coursesRepository.find();
    } catch (error) {
      console.log(error)
    }
   
  }
}
