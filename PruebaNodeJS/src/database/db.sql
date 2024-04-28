create database pruebaNode;

create table empleado(
    id number,
    fecha_ingreso date,
    nombre varchar(50),
    salario number
)

create table solicitud(
    id number,
    codigo varchar(50),
    descripcion varchar(50),
    resumen varchar(50),
    id_empleado number FOREIGN KEY REFERENCES empleado(id)
)