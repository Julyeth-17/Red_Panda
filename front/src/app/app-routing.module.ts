import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { autorizacionGuard } from "./guards/autorizacion.guard";
import { NavbarComponent } from "./components/navbar/navbar.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path : 'usuario', component: RegistroComponent},
  { path : 'inicio-sesion', component: LoginComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
