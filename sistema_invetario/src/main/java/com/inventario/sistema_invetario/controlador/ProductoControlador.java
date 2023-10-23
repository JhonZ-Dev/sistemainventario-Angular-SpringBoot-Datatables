package com.inventario.sistema_invetario.controlador;

import com.inventario.sistema_invetario.excepcion.RecursoNoEncontradoExcepcion;
import com.inventario.sistema_invetario.modelo.ProductoModel;
import com.inventario.sistema_invetario.servicio.ProductoServicio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("inventario_app")
@CrossOrigin(value = "http://localhost:4200")
public class ProductoControlador {
    private static final Logger logger = LoggerFactory.getLogger(ProductoControlador.class);
    @Autowired
    private ProductoServicio servicio;

    @GetMapping("/productos")
    public List<ProductoModel> obtenerProdcutos() {

        List<ProductoModel> productos = this.servicio.productos();
        logger.info("Productos Obtenidos");
        productos.forEach(productoModel -> logger.info(productoModel.toString()));
        return productos;
    }

    @GetMapping("/obtenerPorId/{id_producto}")
    public ProductoModel buscarProductoPorId(@PathVariable Long id_producto) {
        return servicio.buscarProductoPorId(id_producto);
    }

    @PostMapping("/guardar")
    public ProductoModel guardarProducto(@RequestBody ProductoModel producto) {
        logger.info("Producto a agregar:" +producto);
        return servicio.guardarProducto(producto);

    }

    @GetMapping("/productos/{id_producto}")
    public ResponseEntity<ProductoModel>buscarProductoById(@PathVariable Long id_producto){
        logger.info("Id encontrado"+id_producto);
        ProductoModel productoModel = servicio.buscarProductoPorId(id_producto);
        if(productoModel !=null){
            return ResponseEntity.ok(productoModel);
        }else {
            throw  new RecursoNoEncontradoExcepcion("No se encontró el id" + id_producto);
        }
    }

    @PutMapping("/productos/{id_producto}")
    public ResponseEntity<ProductoModel>actualziarProductos(@PathVariable Long id_producto,
                                                            @RequestBody ProductoModel productoRecibido){
        //validar si existe el id
        ProductoModel producto = servicio.buscarProductoPorId(id_producto);
        producto.setDescripcion(productoRecibido.getDescripcion());
        producto.setPrecio(productoRecibido.getPrecio());
        producto.setExistencia(productoRecibido.getExistencia());
        servicio.guardarProducto(producto);
        return ResponseEntity.ok(producto);
    }

    @DeleteMapping("/productos/{id_producto}")
    public ResponseEntity<Map<String, Boolean>> eliminarProducto(@PathVariable Long id_producto){
        ProductoModel producto = servicio.buscarProductoPorId(id_producto);
        if(producto==null)
            throw new RecursoNoEncontradoExcepcion("No se encontró el id" + id_producto);
        this.servicio.eliminarProductoPorId(id_producto);
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminado",Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }

}
