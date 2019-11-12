import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/tasks.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

  taskDescription;
  taskToEditId;

  constructor(private taskService:TaskService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.taskToEditId = +params['id']
   });

   if(this.taskToEditId){
     this.taskService.getTaskById(this.taskToEditId)
      .subscribe(res => this.taskDescription = res.description);
   }
  }

  onClick(){

    if(this.taskToEditId){
      this.taskService.updateTask(this.taskToEditId, this.taskDescription).subscribe();
    }
    else{
      this.taskService.postTask(this.taskDescription).subscribe();
    }

    this.taskDescription = "";
  }

}
