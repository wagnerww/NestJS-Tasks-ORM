import { TasksStatus } from '../task-status.enum';
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class GetTasksFilterDto {
  @IsOptional()
  @IsIn([TasksStatus.DONE, TasksStatus.IN_PROGRESS, TasksStatus.OPEN])
  status: TasksStatus;

  @IsOptional()
  @IsNotEmpty({ message: 'searh not empty!' })
  search: string;
}
