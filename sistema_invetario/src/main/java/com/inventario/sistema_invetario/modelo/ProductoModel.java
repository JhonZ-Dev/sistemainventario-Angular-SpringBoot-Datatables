package com.inventario.sistema_invetario.modelo;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "tbl_productos")
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class ProductoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_producto;
    private String descripcion;
    private Double precio;
    private Integer existencia;

}
