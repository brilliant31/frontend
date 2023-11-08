import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-doctors',
  templateUrl: './user-doctors.component.html',
  styleUrls: ['./user-doctors.component.css']
})
export class UserDoctorsComponent {
  doctorTypes = [
    { name: 'Cardiologist', route: 'cardiologist', imageUrl:'https://img.freepik.com/premium-vector/cardiologist-concept-illustration-cartoon-style_277904-10117.jpg' },
    { name: 'Gynaecologist', route: 'gynaecologist', imageUrl: 'https://img.freepik.com/free-vector/gynecology-consultation-illustration_23-2148671930.jpg' },
    { name: 'Dermatologist', route: 'dermatologist', imageUrl:'https://img.freepik.com/free-vector/dermatologist-concept-dermatology-specialist-face-skin-acne-treatment-idea-beauty-health-skin-epidermis-scheme-vector-illustration-cartoon-style_613284-1152.jpg' },
    { name: 'GeneralPractitioner', route: 'generalpractitioner', imageUrl:'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg' },
    { name: 'Neurologist', route: 'neurologist', imageUrl:'https://img.freepik.com/free-vector/neurologist-concept-doctor-examine-human-brain-idea-doctor-caring-about-patient-health-medical-mri-diagnosis-consultation-vector-illustration-cartoon-style_613284-2765.jpg' },
    { name: 'Pediatrician', route: 'pediatrician', imageUrl:'https://img.freepik.com/free-vector/woman-with-kid-consulting-doctor_74855-4587.jpg' },
  ];

  constructor(private router: Router) {}

  redirectToDoctor(doctorRoute: string): void {
    this.router.navigate([doctorRoute]);
  }

}
