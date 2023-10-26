import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { autorizacionGuard } from "./guards/autorizacion.guard";
import { CheckoutComponent } from './components/checkout/checkout.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { DetalleCoreComponent } from './components/detalle-core/detalle-core.component';
import { ProductosComponent } from './components/admin/productos/productos.component';
import { UsuariosComponent } from './components/admin/usuarios/usuarios.component';
import { GrillaDetallesComponent } from './components/grilla-detalles/grilla-detalles.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { RegistroProductosComponent } from './components/admin/registro-productos/registro-productos.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'usuario', component: RegistroComponent },
    { path: 'inicio-sesion', component: LoginComponent },
    { path: 'carrito', component: CheckoutComponent },
    { path: 'productos', component: DetalleCoreComponent },
    { path: 'admin-users', canMatch: [autorizacionGuard], component: UsuariosComponent},
    { path: 'registro-productos', canMatch: [autorizacionGuard], component: RegistroProductosComponent},
    { path: 'actualizar-productos/:id', component: RegistroProductosComponent},
    { path: 'admin-products', canMatch: [autorizacionGuard], component: ProductosComponent},
    { path: 'actualizar-usuarios/:id', component: RegistroComponent},
    { path: 'producto/:id', component: GrillaDetallesComponent },
    { path: 'producto/:id', component: DetalleCoreComponent },
    { path: '404', component: Pagina404Component },
    { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

