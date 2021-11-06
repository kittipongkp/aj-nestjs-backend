import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import {CoursesController} from './courses.controller'
import { CourseService } from './courses.service'
import Course from './courses.entity'
import Review from './rewiew.entity'

@Module({
    imports: [ TypeOrmModule.forFeature([Course, Review]),],
    controllers: [ CoursesController],
    providers: [CourseService]
})
export class CoursesModule{}