import { Component, OnInit } from '@angular/core';
import { ITusers, users } from 'src/model';
import { IForm } from '../model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  isEdit:boolean=false;
  user:IForm =  new users();
  formData:any[]=[];
  id: any;
   show:boolean = false;
   buttonName:any = 'Show';
  ngOnInit(): void {
    this.formData = JSON.parse(localStorage.getItem('form')|| '[]');
  }
name:boolean=false
test:any
  togle(){
  this.name =! this.name
  this.name ? this.test='Mudassir' : this.test='Rizwan'
  }
  
  ngOnChanges(){
    console.log(this.formData);
  }

  onSubmit(formValues:any){

    if(this.isEdit)
    {
      this.formData = this.formData.map((data:any,index)=>{
        if(this.id == index){
            data = formValues.value;
        }
        return data;
      })
    }
    else
    {
      this.formData.push(formValues.value);
    }

  localStorage.setItem('form',JSON.stringify(this.formData));
  console.log(this.formData);
  formValues.reset();
  }
  fetchForEdit(value:any){
    this.id = value.id;
    console.log('in form Data ',value);
    delete value.id;
   this.isEdit = true;
    this.user = value;
  }
}
