import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiUrl: string = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task:Task): Observable<Task> {
    return this.http.delete<Task>(`${this.apiUrl}/${task.id}`)
  }
}
