import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardiologistService } from '../cardiologist.service';
@Component({
  selector: 'app-cardiologist-component',
  templateUrl: './cardiologist-component.component.html',
  styleUrls: ['./cardiologist-component.component.css']
})
export class CardiologistComponentComponent implements OnInit {

   
    cardiologist:any[]=[];
     constructor(private cardiologistService:CardiologistService, private router: Router){

     }
     ngOnInit(): void {
         this.fetchCardiologist();
     }
     fetchCardiologist(){
        this.cardiologistService.getCardiologist().subscribe((data:any[])=>{
               console.log(data);
               this.cardiologist=data;
        });
     }

     navigateToAppointmentForm(selectedCardiologist: any) {
     
      this.router.navigate(['/book-appointment', selectedCardiologist.username, selectedCardiologist.email,selectedCardiologist.specialisation]);
    }
  

}

