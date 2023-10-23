package com.inventario.sistema_invetario.repositorio;

import com.inventario.sistema_invetario.modelo.ProductoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepositorio extends JpaRepository<ProductoModel, Long> {

}
