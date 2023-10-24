import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private urlBase = "http://localhost:8081/inventario_app/productos"
  private urlBase2 = "http://localhost:8081/inventario_app/guardar"

  constructor(private clienteHttp: HttpClient) { }

  obtenerProductosLista():Observable<Producto[]>{
    return this.clienteHttp.get<Producto[]>(this.urlBase);
  }

  //agregarProducto(Producto)
  agregarProducto(producto:Producto):Observable<Object>{
    return this.clienteHttp.post(this.urlBase2,producto);

  }

  obtenerProductoPorId(id_producto:number){
    return this.clienteHttp.get<Producto>(`${this.urlBase}/${id_producto}`);
    
  }

  actualizarProducto(id_producto:number, producto:Producto):Observable<Object>{
    return this.clienteHttp.put(`${this.urlBase}/${id_producto}`,producto);
  }

  eliminarProducto(id_producto:number):Observable<Object>{
    return this.clienteHttp.delete(`${this.urlBase}/${id_producto}`);
  }
}
