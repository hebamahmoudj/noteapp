import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(private _HttpClient: HttpClient) { }

  addnote(form: object): Observable<any> {
    const token = localStorage.getItem('etoken');
    const headers = token ? new HttpHeaders({ 'token': `3b8ny__${token}` }) : new HttpHeaders();
    const options: any = { headers: headers };
    return this._HttpClient.post('https://note-sigma-black.vercel.app/api/v1/notes', form, options);
  }

  getnotes(): Observable<any> {
    const token = localStorage.getItem('etoken');
    const headers = token ? new HttpHeaders({ 'token': `3b8ny__${token}` }) : new HttpHeaders();
    const options: any = { headers: headers };
    return this._HttpClient.get('https://note-sigma-black.vercel.app/api/v1/notes', options);
  }

  deletenote(id: string | undefined): Observable<any> {
    const token = localStorage.getItem('etoken');
    const headers = token ? new HttpHeaders({ 'token': `3b8ny__${token}` }) : new HttpHeaders();
    const options: any = { headers: headers };
    return this._HttpClient.delete(`https://note-sigma-black.vercel.app/api/v1/notes/${id}`, options);
  }

  updatenote(id: string, form: any): Observable<any> {
    const token = localStorage.getItem('etoken');
    const headers = token ? new HttpHeaders({ 'token': `3b8ny__${token}` }) : new HttpHeaders();
    const options: any = { headers: headers };
    return this._HttpClient.put(`https://note-sigma-black.vercel.app/api/v1/notes/${id}`, form, options);
  }
}
