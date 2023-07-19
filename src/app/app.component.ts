import { Component } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  names:any[] = [
    { name: 'Rizwan', age: 24 },
    { name: 'Mudassir', age: 22 },
    { name: 'Usman', age: 21 },
  ];
  array = {
    name: 'Waqas',
    age: 27,
  };

  constructor() {
    // console.log(this.names);
    // this.names=this.names.push(this.array)
    // console.log('names121: ',this.names);
  }

  ngOnInit() {
    // this.getData();
   
    //  this.names = this.names.filter((value:any)=>{
    //     if(value.name==='Mudassir'){
    //     return value
    //     }
    //   })
    // this.names = this.names.map((value: any) => {
    //   if (value.name === 'Mudassir') {
    //     value.age = 20;
    //   }
    //   return this.names;
    // });
    const name = this.names.map(x=>x.age).indexOf(22);
    const id = this.names.findIndex(x=> x.name == 'Mudassir')
    console.log('id: ', id);
    console.log('indexOf: ', name);

  }

  arr = [1, 2, 3, 4, 5];
  
  test = '';

  // if else statement
  // age=10
  // getData(){
  //   if(this.age==19){
  //   console.log("This boy can ride");

  //   }
  //   else{
  //     console.log("this boy can't ride");

  //   }
  // }

  // for loop
  // getData() {
  //   for (let i = 0; i <= 4; i++) {
  //     console.log(this.arr[i]);
  //   }
  // }

  // getData(){
  //   this.arr.forEach(value => {
  //     console.log('element: ', value);

  //   });
  // }

  // Array Method
  getData() {
    this.arr.push(20);
    this.arr.unshift(0);
    this.arr.splice(2, 1, 12);
    this.arr.map((value: any) => {
      console.log('value12: ', value * 10);
    });

    console.log('arr: ', this.arr);
  }
 
}
