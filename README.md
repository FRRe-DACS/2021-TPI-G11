# 2021-TPI-G11

2021-TPI-G11

// Empresa

{
    cuil: integer,
    nombre: string,
    email: string,
    telefono: string,
    sitioWeb: string,
    contraseña: string
}

// Producto

{
    idProducto: integer,
    denominacion: string,
    cod_ean:integer,
    precio_unidad: integer,
    unidad_medida: string,
    cantida_prod: integer,
    cantidad_ven: integer
}

// Informes

{
    cuit: integer,
    rason_social: string,
    fecha_emision: date,
    productos: [producto]
}

// Notificaciones

{
    idNotificacion: integer,
    titulo: string,
    descripcion: string,
    fechaEmision: date,
    fechaRecepcion: date
}
