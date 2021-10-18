import { Controller, Get } from '@nestjs/common';

@Controller("/courses")
export class CoursesController {
  constructor() {}

  @Get()
  getHello(): Object {
    return {message: "Good morning"}
  }
}