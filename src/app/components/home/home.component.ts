import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotedataComponent } from '../notedata/notedata.component';
import { NoteService } from '../core/services/note.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog, private _NoteService: NoteService,private _Router:Router) {}
  searchword: string = "";
  @ViewChild('deleteSwal')
  public readonly deleteSwal!: SwalComponent;
  allnotes: any[]=[];

  openDialog() {
    const dialogRef = this.dialog.open(NotedataComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result == "add" || result == "update") {
        this.displaynote();
      }
    });
  }

  ngOnInit(): void {
    this.displaynote();
  }

  displaynote() {
    if (localStorage.getItem('etoken')) {
      this._NoteService.getnotes().subscribe({
        next: (res) => {
          this.allnotes = res.notes;
        },
        error: (err) => {
          console.error("Error fetching notes:", err);
        }
      });
    }
  }

  deletenote(id: string | undefined) {
    this._NoteService.deletenote(id).subscribe({
      next: (res) => {
        this.displaynote();
      },
      error: (err) => {
        console.error("Error deleting note:", err);
      }
    });
  }

  updateNote(note: any) {
    const dialogRef = this.dialog.open(NotedataComponent, { data: note });
    dialogRef.afterClosed().subscribe(result => {
      if (result == "update") {
        this.displaynote();
      }
    });
  }
  logout(){
    localStorage.removeItem('etoken')
   this._Router.navigate(['/login'])
  }
}
