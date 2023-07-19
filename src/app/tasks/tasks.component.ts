import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  post:any[]=[];
  frindName:any;
  constructor(private tasksService : TasksService) {}

  ngOnInit(): void {
    this.tasksService.getData().subscribe((data:any)=>{
      console.log('Get: ', data);
      this.post = data;
    })
  }
  name: boolean = true;
  togle() {
    this.name = !this.name;
  }

  friendEmail(arr:any){
    console.log('arr: ', arr);
     this.post.map((data:any)=>{
      if(data.name == arr.name){
        return this.frindName= data.friends
      }
    })
    console.log(this.frindName);
    

  }

 
}
