import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { autorizacionGuard } from "./guards/autorizacion.guard";
import { CheckoutComponent } from './components/checkout/checkout.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { ProductosComponent } from './components/admin/productos/productos.component';
import { UsuariosComponent } from './components/admin/usuarios/usuarios.component';
import { GrillaDetallesComponent } from './components/grilla-detalles/grilla-detalles.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { RegistroProductosComponent } from './components/admin/registro-productos/registro-productos.component';
import { ClienteComponent } from './components/cliente/cliente.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'checkout', component: RegistroComponent },
    { path: 'inicio-sesion', component: LoginComponent },
    { path: 'registro-usuario', component: ClienteComponent},
    { path: 'carrito', component: CheckoutComponent },
    { path: 'admin-users', canMatch: [autorizacionGuard], component: UsuariosComponent},
    { path: 'registro-productos', canMatch: [autorizacionGuard], component: RegistroProductosComponent},
    { path: 'actualizar-productos/:id', component: RegistroProductosComponent},
    { path: 'admin-products', canMatch: [autorizacionGuard], component: ProductosComponent},
    { path: 'finalizar-compra', component: RegistroComponent},
    { path: 'actualizar-usuarios/:id', component: ClienteComponent},
    { path: 'producto/:id', component: GrillaDetallesComponent },
    { path: '404', component: Pagina404Component },
    { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
