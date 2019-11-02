import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { TasksStatus } from './task-status.enum';
import { User } from '../auth/user.entity';

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TasksStatus;

  @ManyToOne(type => User, user => user.tasks, { eager: false })
  user: User;

  // O typeorm gera essa coluna automáticamente, então é necessário declara-la manualmente
  @Column()
  userId: number;
}
