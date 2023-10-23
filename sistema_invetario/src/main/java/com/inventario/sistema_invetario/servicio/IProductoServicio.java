package com.inventario.sistema_invetario.servicio;

import com.inventario.sistema_invetario.modelo.ProductoModel;

import java.util.List;

public interface IProductoServicio {

    //METODOS PARA CRUD
     List<ProductoModel> productos();

     ProductoModel buscarProductoPorId(Long id_producto);

     ProductoModel guardarProducto(ProductoModel producto);
     void eliminarProductoPorId(Long id_producto);

}
