import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any

  constructor(private fireauth : AngularFireAuth, private router : Router,
    private us: UserService) {}

  //login method
  login(email :  string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( () => {
      this.fireauth.authState.subscribe((user) => {
        if (user) {
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user')!);
        } else {
          localStorage.setItem('user', 'null');
          JSON.parse(localStorage.getItem('user')!)
        }
      })
      localStorage.setItem('token','true');
      this.router.navigate(['dashboard']);
    }, err => {
      alert('Please try again');
      this.router.navigate(['/login']);
    })
  }
  
  register(email : string, password : string) {
    this.fireauth.createUserWithEmailAndPassword(email,password).then( () => {
      this.fireauth.authState.subscribe((user) => {
        if (user) {
          this.userData = user;
          this.us.addUser({UID: this.userData.uid})
        }
      })
      alert('Registration successful!')
      this.router.navigate(['/login']);

    }, err => {
      alert('Something went wrong...');
      this.router.navigate(['/register']);

    })
  }

  logout(){
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    }, err => {
      alert('Cannot sign out');
    })
  }
}

