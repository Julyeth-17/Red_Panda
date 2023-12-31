import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetalleCoreComponent } from './components/detalle-core/detalle-core.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { GrillaDetallesComponent } from './components/grilla-detalles/grilla-detalles.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/admin/productos/productos.component';
import { UsuariosComponent } from './components/admin/usuarios/usuarios.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

@NgModule({
    declarations: [
        AppComponent,
        RegistroComponent,
        LoginComponent,
        CheckoutComponent,
        Pagina404Component,
        NavbarComponent,
        DetalleCoreComponent,
        ContactoComponent,
        GrillaDetallesComponent,
        HomeComponent,
        ProductosComponent,
        UsuariosComponent,
        NosotrosComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
