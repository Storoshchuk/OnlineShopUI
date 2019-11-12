import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks-board',
  templateUrl: './tasks-board.component.html',
  styleUrls: ['./tasks-board.component.css']
})
export class TasksBoardComponent implements OnInit {
  tasks = [];
  searchStr = '';

  constructor(private taskService: TaskService){}
  
  ngOnInit(){
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks
    })
  }
}
