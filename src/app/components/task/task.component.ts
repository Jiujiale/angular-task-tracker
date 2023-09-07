import { Component, inject } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks'
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  tasks: Task[] = [];
  taskService: TaskService = inject(TaskService)

  constructor() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks
    })
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    })
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder
    this.taskService.toggleReminder(task).subscribe()
  }
}
