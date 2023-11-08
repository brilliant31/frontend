import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule}from '@angular/material/card';
import {MatTabsModule}from '@angular/material/tabs';
import {MatFormFieldModule}from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BlankComponent } from './blank/blank.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { NewnavbarComponent } from './newnavbar/newnavbar.component';
import { UserDoctorsComponent } from './user-doctors/user-doctors.component';
import { UserMedicalsComponent } from './user-medicals/user-medicals.component';
import { UserLabsComponent } from './user-labs/user-labs.component';
import { CardiologistComponentComponent } from './cardiologist-component/cardiologist-component.component';
import { GynaecologistComponentComponent } from './gynaecologist-component/gynaecologist-component.component';
import { GeneralpractitionerComponentComponent } from './generalpractitioner-component/generalpractitioner-component.component';
import { DermatologistComponentComponent } from './dermatologist-component/dermatologist-component.component';
import { PediatricianComponentComponent } from './pediatrician-component/pediatrician-component.component';
import { NeurologistComponentComponent } from './neurologist-component/neurologist-component.component';
import { CardiologistService } from './cardiologist.service';
import { AppointmentformComponent } from './appointmentform/appointmentform.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    BlankComponent,
    FooterComponent,
    AboutusComponent,
    UserPanelComponent,
    NewnavbarComponent,
    UserDoctorsComponent,
    UserMedicalsComponent,
    UserLabsComponent,
    CardiologistComponentComponent,
    GynaecologistComponentComponent,
    GeneralpractitionerComponentComponent,
    DermatologistComponentComponent,
    PediatricianComponentComponent,
    NeurologistComponentComponent,
    AppointmentformComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    HttpClientModule,
    MatToolbarModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
  ],
  providers: [CardiologistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
