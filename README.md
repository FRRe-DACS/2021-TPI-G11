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

// Ventas

{
    denominacion: {
        type: String,
        require: true,
        trim: true,
    },
    codigoEAN: { type: Number, require: true, trim: true },
    precioUnidad: { type: Number, require: true, trim: true },
    unidadMedida: {
        type: String,
        require: true,
        trim: true,
    },
    cantidaProd: { type: Number, require: true, trim: true },
    cantidadVen: { type: Number, require: true, trim: true },
}

// Informes / Declaracion jurada

{
"cuit": integer,
"year": interger,
"month": integer,
"ventas": [ventas]
}

// Notificaciones

{
idNotificacion: integer,
titulo: string,
descripcion: string,
fechaEmision: date,
fechaRecepcion: date
}
