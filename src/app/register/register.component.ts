import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent 
{
selectedUserType: string="";
username: string ="";
email:string = "";
password:string="";
repassword:string="";
Specialization:string="";
contact:string="";
description:string="";



specializationOptions: string[] = ['Cardiologist', 'Dermatologist', 'General Physician', 'Gynaecologist','Neurologist'];


constructor(private http:HttpClient,private router:Router)
{

}


register() {

  if (this.selectedUserType == "Patient") 
  {
    let bodyData = {
      selectedUserType:this.selectedUserType,
      username: this.username,
      email: this.email,
      password: this.password,
      confirm: this.repassword,
      
    };

    this.http.post("http://localhost:8081/create/register", bodyData, { responseType: 'text' }).subscribe(
    (resultData: any) => {
      console.log(resultData);
      alert("Registered Successfully");

      this.username = '';
      this.email = '';
      this.password = '';
      this.repassword = '';
      
    },
    (error) => {
      console.error(error);
      alert("Registration failed");
    }
  );
  } 
  else {
    let bodyData = {
      selectedUserType:this.selectedUserType,
      username: this.username,
      email: this.email,
      specialization: this.Specialization,
      contact:this.contact,
      description :this.description,
      password: this.password,
      confirm: this.repassword,
    }; 

    this.http.post("http://localhost:8081/create/register", bodyData, { responseType: 'text' }).subscribe(
    (resultData: any) => {
      console.log(resultData);
      alert("Registered Successfully");

      this.username = '';
      this.email = '';
      this.Specialization = '';
      this.contact='';
      this.description='';
      this.password = '';
      this.repassword = '';
    },
    (error) => {
      console.error(error);
      alert("Registration failed");
    }
  );
  }
}




login(){
  let bodyData={
     "email" :this.email,
     "password":this.password,
  };
  this.http.post("http://localhost:8081/login",bodyData,{responseType:'text'}).subscribe((resultData:any)=>{
        console.log(resultData);
       alert("login successful");
       this.router.navigate(['/home']);
  },
  (error)=>{
    console.error(error);
    alert("invalid");

  }
  );
}
}