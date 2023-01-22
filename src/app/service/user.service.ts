import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  addUser(uid:any) {
    this.httpClient.post(`${this.url}/api/addUser`, uid).subscribe(data => {
      console.log(data)
    })
  }

  updateUser(uid:string, profile:any) {
    this.httpClient.put(`${this.url}/api/updateUser`, {uid:uid, profile:profile}).subscribe(data => {
      console.log(data)
    })
  }
}
