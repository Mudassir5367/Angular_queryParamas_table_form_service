import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() getFormData:any;
  @Output() sendToForm = new EventEmitter();
  constructor() {}
  ngOnChanges(){
    console.log("OnChange",this.getFormData);
    
  }

  ngOnInit(): void {
    console.log(this.getFormData,'get');
  }
  
  edit(user:any, id:any)
  {
    console.log('userrrr',user);
    
    this.sendToForm.emit({...user,id});
  }
  del(id:any){
    console.log('del',id);
    this.getFormData.splice(id,1);
    localStorage.setItem('form',JSON.stringify(this.getFormData));
  }
}