
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from './user.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  errorMsg: any;


  flag = true;
  User = [];    
  type = "text";
  match: string;
  formData: any;
  firstName:string;
  middleName: any;
  lastName: any;
  user_Name: string;
  role_Id: any;
  // dep: any;
  // Reference_Name: any;
  email: any;
  personal_Contact_Number: any;
  work_Contact_Number: any;
  password: any;
  confirm_password: any;
  hint_question_1: any;
  hint_answer_1: any;
  
  constructor(private fb: FormBuilder, private _http: UserService, private router: Router,private toastr: ToastrService) {

  }
  
  ngOnInit() {
    this.getUserId()
  }

  errors:string
  onSubmit(input: any) {
    // alert("User created sucessfully");
    let data = input.value;
    this.formData = input.value;

    let param = {

      // "user_Id": data.user_Id,
      "firstName": data.firstName,
      "middleName": data.middleName,
      "lastName": data.lastName,
      "userName": data.userName,
      "roleName": data.role_Id,
      // "department":this.dep,
      // "refName": this.Reference_Name,
      // "location": this.location,
      "email": data.email,

      "personalContactNumber": data.personal_Contact_Number,
      "workContactNumber": data.work_Contact_Number,
       "description": data.description,
      "passwordStuff": {
        "password": data.password,
        "confirmPassword": data.confirm_password,
         "hintQuestion1": data.hint_question_1,
         "hintAnswer1": data.hint_answer_1,
         "hintQuestion2": data.hint_question_2,
         "hintAnswer2": data.hint_answer_2,

      },
      // "doctorDetails":
      // {
      //   "specilization":data.qual
      // }
    }
     console.log(data.hint_answer1),
      this._http.postCreate(param)
        .subscribe(
          data => {
          
      
 
            console.log("data**" + JSON.stringify(data));
          
          },
      
        
       
          );
           this.router.navigate(['/userreg'])
         this.toastr.success("user created sucessfully ")
 location.reload()
  }



   hideAnswer() {
     if (this.flag === true) {
       this.type = "password";
       this.flag = false;
     }
     else {
      this.type = "text";
       this.flag = true;
     }
  }
  checkConfirmPass(pass) {
    this.match = pass;
  }
  getUserId() {
    this._http.getUserId()
      .subscribe(
        response => {

          this.User = response;
          console.log("user" + JSON.stringify(response));
          console.log(this.User[2].nextUserId);
        });
  }
 userForm=[FormGroup]

   reset() {
    this.reset();
  }
//   refresh() {
//      location.reload();
//  }
}






