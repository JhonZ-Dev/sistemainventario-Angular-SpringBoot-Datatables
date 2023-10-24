import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent {

  producto:Producto = new Producto();
  id_producto:number;


  constructor(private productoService:ProductoService, private ruta:ActivatedRoute, private enrutador:Router){}

  ngOnInit(){
    this.id_producto= this.ruta.snapshot.params['id_producto'];
    this.productoService.obtenerProductoPorId(this.id_producto).subscribe(
      {
        next:(datos)=>this.producto=datos
        ,
        error:(errores:any) => console.log(errores)
      }
    );
  }

  onSubmit(){
    this.editarProducto();

  }
  editarProducto(){
    this.productoService.actualizarProducto(this.id_producto,this.producto).subscribe(
      {
        next:(datos)=>this.irProductoLista(),
        error:(errores:any) => console.log(errores)
      }
    );
  }

  irProductoLista(){
    this.enrutador.navigate(['/productos'])
  }


}
