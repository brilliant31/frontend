import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './blank/blank.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserDoctorsComponent } from './user-doctors/user-doctors.component';
import { UserLabsComponent } from './user-labs/user-labs.component';
import { UserMedicalsComponent } from './user-medicals/user-medicals.component';
import { CardiologistComponentComponent } from './cardiologist-component/cardiologist-component.component';
import { GynaecologistComponentComponent } from './gynaecologist-component/gynaecologist-component.component';
import { DermatologistComponentComponent } from './dermatologist-component/dermatologist-component.component';
import { GeneralpractitionerComponentComponent } from './generalpractitioner-component/generalpractitioner-component.component';
import { NeurologistComponentComponent } from './neurologist-component/neurologist-component.component';
import { PediatricianComponentComponent } from './pediatrician-component/pediatrician-component.component';
import { AppointmentformComponent } from './appointmentform/appointmentform.component';

const routes: Routes = [
  { path: "", component: BlankComponent },
  { path: "Login", component: RegisterComponent },
  { path: "AboutUs", component: AboutusComponent },
  { path: "Our-Services", component: BlankComponent },
  { path: "logout", component: RegisterComponent },
  { path: "home", component: UserPanelComponent },
  { path: "doctors", component: UserDoctorsComponent },
  { path: "labs", component: UserLabsComponent },
  { path: "medicals", component: UserMedicalsComponent },
  { path: "cardiologist", component: CardiologistComponentComponent},
  { path: "gynaecologist", component: GynaecologistComponentComponent},
  { path: "dermatologist" , component: DermatologistComponentComponent},
  { path: "generalpractitioner", component: GeneralpractitionerComponentComponent},
  { path: "neurologist", component: NeurologistComponentComponent},
  { path: "pediatrician", component: PediatricianComponentComponent},
  { path: "book-appointment/:name/:email/:specialisation", component: AppointmentformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
