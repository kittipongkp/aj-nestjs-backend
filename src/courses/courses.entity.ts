import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
class Course {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  number: string;

  @Column()
  title: string;
}

export default Course;
