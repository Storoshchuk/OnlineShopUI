import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/tasks.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private taskService: TaskService){}
  
  ngOnInit(){
    }

}
