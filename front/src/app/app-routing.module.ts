import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalleCoreComponent} from './components/detalle-core/detalle-core.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  {path: 'productos', component: DetalleCoreComponent},
  {path: 'producto/:id', component: DetalleCoreComponent},
  {path:'',}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

