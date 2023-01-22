import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'app/service/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  form: FormGroup
  constructor(private us: UserService, private router: Router) {
      let formControls = {
        firstName: new FormControl(""),
        lastName: new FormControl(""),
        gender: new FormControl(""),
        sports: new FormControl(""),
        rating: new FormControl("")
      }
      this.form = new FormGroup(formControls)
    }

    onSubmit(values:any) {
      let user = localStorage.getItem('user')
      let uid = JSON.parse(`${user}`)
      let profile = {
        firstName: values.firstName,
        lastName: values.lastName,
        gender: values.gender,
        sport: values.sport,
      }
      console.log("updating",uid.uid, profile)
      this.us.updateUser(uid.uid, profile)
      this.router.navigate(['/dashboard'])
    }
  
    onCancel() {
      this.router.navigate(['dashboard'])
    }
}

