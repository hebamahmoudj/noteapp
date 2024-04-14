import { Component, Inject, inject } from '@angular/core';
import { NoteService } from '../core/services/note.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-notedata',
  templateUrl: './notedata.component.html',
  styleUrls: ['./notedata.component.css']
})
export class NotedataComponent {
constructor(private _NoteService:NoteService,private _DialogRef: MatDialogRef<NotedataComponent>,
  @Inject (MAT_DIALOG_DATA)  public data:any
){}
form:FormGroup=new FormGroup(
  {title:new FormControl(this.data?this.data.title:" ",[Validators.required])
,content:new FormControl(this.data?this.data.content:" ",[Validators.required])
})
senddata(){
  if(this.data==null){
  this._NoteService.addnote(this.form.value).subscribe({next:(res)=>{console.log(res);
    this._DialogRef.close('add');
  }})}
  else{
    console.log("update");
    this._NoteService.updatenote(this.data._id,this.form.value).subscribe({next:(res)=>{ 
      console.log(this.form.value);
      this._DialogRef.close('update');

    }})

  }
  

}
}
