import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-appointmentform',
  templateUrl: './appointmentform.component.html',
  styleUrls: ['./appointmentform.component.css']
})
export class AppointmentformComponent {
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      // Retrieve route parameters and set them in the form data
      this.formData.name = params['name'];
      this.formData.email = params['email'];
      this.formData.specialisation = params['specialisation'];
    });
  }
 

  formData: any = {};

  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted:', this.formData);
    // You can send the form data to a backend API for further processing
  }

 
}
