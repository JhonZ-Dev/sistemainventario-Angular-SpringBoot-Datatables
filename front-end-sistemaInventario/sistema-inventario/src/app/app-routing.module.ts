import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';

const routes: Routes = [{path:'productos', component:ProductoListaComponent},
{path:'',redirectTo:'productos',pathMatch:'full'},
{path:'agregar-producto',component:AgregarProductoComponent, pathMatch:'full'},
{path:'editar-producto/:id_producto',component:EditarProductoComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
