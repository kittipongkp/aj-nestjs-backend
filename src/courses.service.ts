import {Injectable} from '@nestjs/common';
import {Course} from './interfaces/courses.interface';

@Injectable()
export class CourseService {
    async findAll(): Promise<Course[]> {
        return [
            { 
                id: '100', 
                number: '01204111', 
                title: 'Compurt and Programming'
              },
              { 
                id: '213fds', 
                number: '01204211', 
                title: 'Discrete mathematics and linear algebra'
              },
              { 
                id: 'fjdksjfoiwr', 
                number: '01204313', 
                title: 'Design andanalysis of algorihms'
            }
        ]
    }
}