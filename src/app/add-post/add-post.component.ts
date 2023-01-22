import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {

  form: FormGroup;

  constructor() {
    let formControls = {
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      date: new FormControl(""),
      sport: new FormControl(""),
      location: new FormControl(""),
      gender: new FormControl(""),
      skillLevel: new FormControl(""),
      position: new FormControl("")
    }

    this.form = new FormGroup(formControls)
  }


}
