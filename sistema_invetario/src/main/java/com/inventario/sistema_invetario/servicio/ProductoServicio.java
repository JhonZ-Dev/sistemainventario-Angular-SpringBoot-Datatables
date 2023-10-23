package com.inventario.sistema_invetario.servicio;

import com.inventario.sistema_invetario.modelo.ProductoModel;
import com.inventario.sistema_invetario.repositorio.ProductoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoServicio implements IProductoServicio{
    @Autowired
    private ProductoRepositorio repositorio;


    @Override
    public List<ProductoModel> productos() {
        return repositorio.findAll();
    }

    @Override
    public ProductoModel buscarProductoPorId(Long id_producto) {
       ProductoModel producto= this.repositorio.findById(id_producto).orElse(null);
        return producto;
    }

    @Override
    public ProductoModel guardarProducto(ProductoModel producto) {
         return this.repositorio.save(producto);

    }

    @Override
    public void eliminarProductoPorId(Long id_producto) {
        this.repositorio.deleteById(id_producto);

    }
}
