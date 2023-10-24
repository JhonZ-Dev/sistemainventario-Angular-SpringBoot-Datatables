import { Component, OnDestroy, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
//import 'rxjs/add/operator/map'
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.css']
})
export class ProductoListaComponent implements OnInit,OnDestroy{
  dtOptions: DataTables.Settings = {}; // Debe estar declarado en tu componente
  data:any = [];

  dtTrigger:Subject<any> = new Subject<any>();

  productos:Producto[];
  constructor(private productoService:ProductoService, private enrutador:Router,private HttpClient:HttpClient){}
 

  ngOnInit(){
    //cargar todos los produvtos
    this.dtOptions = {
    
      language: {
        url: "//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json" // Usar 'Spanish.json' en lugar de 'es-ES.json'
      }
    };
    // this.HttpClient.get('http://localhost:8081/inventario_app/productos')
    // .subscribe((data) =>{this.data=data;
    //   //console.log(data);
    // this.dtTrigger.next(data)})


    //this.obtenerProductos();
    this.obtenerPorductos2();

    // $(() => {
    //   $('#datatable-example').DataTable(this.dtOptions);
    // });
    
  }
  private obtenerPorductos2(){
    this.productoService.obtenerProductosLista()
    .subscribe((data)=>{this.data=data;
    console.log(data);
    this.dtTrigger.next(data)})
  }

  private obtenerProductos(){
    this.productoService.obtenerProductosLista().subscribe(
      (datos =>{
        console.log("Mostrando los productos" + datos)
        this.productos= datos;
        //this.dtTrigger.next(this.data)
      })
    );
  }

  editarProducto(id_producto:number){
    this.enrutador.navigate(['editar-producto',id_producto])
  }

  eliminarProducto(id_producto:number){
    this.productoService.eliminarProducto(id_producto).subscribe(
      {
      next:(datos) =>this.obtenerProductos(),
      error:(errores:any) => console.log(errores)
    }
    );
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
