import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
class Review {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  comment: string;

  @Column()
  score: number;

  @Column()
  courseId: ObjectId;
}

export default Review;
