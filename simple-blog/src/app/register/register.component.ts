import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { IUser, UserService } from '../services/user-service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  registerFormGroup: FormGroup

  constructor(private userService: UserService, private authenticationService: AuthenticationService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerFormGroup = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  async registerUser() {
    // check if the form is valid

    if (this.registerFormGroup.valid) {
      // send the request to the backend
      console.log(`this.registerFormGroup.value ==>`, this.registerFormGroup.value);



      const response: IUser = await this.userService.register(this.registerFormGroup.value).toPromise()

      const { jwt, user } = response

      this.authenticationService.addTokenToStore(jwt)
      this.authenticationService.addUserToStore(user)

      console.log(`response ==>`, response);

    } else {
      alert("Please fill all the details")
    }



  }

}
