import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import {CoursesController} from './courses.controller'
import { CourseService } from './courses.service'
import Course from './courses.entity'

@Module({
    imports: [ TypeOrmModule.forFeature([Course]),],
    controllers: [ CoursesController],
    providers: [CourseService]
})
export class CoursesModule{}