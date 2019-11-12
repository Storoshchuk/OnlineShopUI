import { Component, Input } from '@angular/core'
import { TaskService } from '../../services/tasks.service';

@Component ({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css'],
})
export class TaskComponent {

    @Input() task

    constructor(private taskService:TaskService) { }

    isDeleted = false;

    onDelete(){
        this.isDeleted = true;
        this.taskService.deleteTask(this.task)
        .subscribe();
    }
}