import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ListingService } from '../service/listing.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {

  form: FormGroup;

  constructor(private ls:ListingService) {
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

  onSubmit(values:any) {
    let listing = {
      firstName: values.firstName,
      lastName: values.lastName,
      date: values.date,
      sport: values.sport,
      location: values.location,
      gender: values.gender,
      skillLevel: values.skillLevel,
      position: values.position
    }
    console.log("adding",listing)
    this.ls.addListing(listing)
  }
}
