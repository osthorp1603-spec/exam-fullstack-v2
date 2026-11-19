export const modelamientoparcial2 = [
    {
        enunciado: `Un estudiante necesita visualizar todos los registros almacenados en la tabla <span style="color:darkblue">clientes</span> después de crearla e insertar los datos.<br><br>
        <b>¿Qué consulta permite ver todos los registros?</b>`,
        opciones: [
            "SELECT nombre FROM clientes;",
            "SELECT * FROM clientes;",
            "SHOW clientes;"
        ],
        correcta: "b"
    },
    {
        enunciado: `El estudiante desea listar únicamente los clientes cuya ciudad sea <span style="color:darkblue">Cali</span>.<br><br>
        <b>¿Qué consulta realiza correctamente el filtrado?</b>`,
        opciones: [
            "SELECT * FROM clientes WHERE ciudad = 'Cali';",
            "SELECT * FROM clientes ORDER BY ciudad='Cali';",
            "SELECT * FROM clientes WHERE ciudad LIKE Cali;"
        ],
        correcta: "a"
    },
    {
        enunciado: `Después de insertar los datos, el estudiante quiere ver los pedidos cuyo total esté entre <span style="color:darkblue">100000</span> y <span style="color:darkblue">700000</span>.<br><br>
        <b>¿Qué consulta utiliza correctamente el operador de rango?</b>`,
        opciones: [
            "SELECT * FROM pedidos WHERE total BETWEEN 100000 AND 700000;",
            "SELECT * FROM pedidos WHERE total > 100000 OR 700000;",
            "SELECT * FROM pedidos WHERE total RANGE 100000,700000;"
        ],
        correcta: "a"
    },
    {
        enunciado: `El estudiante necesita listar los clientes que <b>no</b> pertenecen a la ciudad de Cali.<br><br>
        <b>¿Qué consulta expresa correctamente esta exclusión?</b>`,
        opciones: [
            "SELECT * FROM clientes WHERE ciudad <> 'Cali';",
            "SELECT * FROM clientes WHERE ciudad NOT Cali;",
            "SELECT * FROM clientes WHERE ciudad != NULL;"
        ],
        correcta: "a"
    },
    {
        enunciado: `El estudiante quiere ordenar los pedidos desde el valor más alto hasta el más bajo para identificar la compra más costosa.<br><br>
        <b>¿Qué consulta realiza correctamente este ordenamiento?</b>`,
        opciones: [
            "SELECT * FROM pedidos ORDER BY total DESC;",
            "SELECT * FROM pedidos SORT BY total;",
            "SELECT * FROM pedidos ORDER total;"
        ],
        correcta: "a"
    },
    {
        enunciado: `Un estudiante desea mostrar el nombre del cliente con el encabezado <span style="color:darkblue">cliente</span> y la ciudad como <span style="color:darkblue">ubicacion</span> sin modificar la tabla.<br><br>
        <b>¿Qué consulta usa correctamente alias?</b>`,
        opciones: [
            "SELECT nombre AS cliente, ciudad AS ubicacion FROM clientes;",
            "ALTER TABLE clientes RENAME nombre cliente;",
            "UPDATE clientes SET nombre='cliente';"
        ],
        correcta: "a"
    },
    {
        enunciado: `El estudiante necesita listar los pedidos cuyo total sea mayor a 100000 y menor a 1000000 al mismo tiempo.<br><br>
        <b>¿Qué operador lógico permite combinar ambas condiciones?</b>`,
        opciones: [
            "AND",
            "OR",
            "NOT"
        ],
        correcta: "a"
    },
    {
        enunciado: `Al revisar la tabla clientes, el estudiante quiere encontrar registros donde la ciudad no fue registrada.<br><br>
        <b>¿Qué consulta identifica correctamente valores nulos?</b>`,
        opciones: [
            "SELECT * FROM clientes WHERE ciudad = NULL;",
            "SELECT * FROM clientes WHERE ciudad IS NULL;",
            "SELECT * FROM clientes WHERE ciudad <> NULL;"
        ],
        correcta: "b"
    },
    {
        enunciado: `El estudiante desea visualizar todos los clientes aunque algunos no tengan pedidos asociados, mostrando igualmente los registros sin coincidencia.<br><br>
        <b>¿Qué tipo de JOIN permite ver ambas tablas incluyendo valores NULL?</b>`,
        opciones: [
            "INNER JOIN",
            "LEFT JOIN",
            "CROSS JOIN"
        ],
        correcta: "b"
    },
    {
        enunciado: `Ahora el estudiante necesita ver únicamente los registros donde exista coincidencia entre clientes y pedidos, excluyendo aquellos sin relación.<br><br>
        <b>¿Qué tipo de JOIN produce este resultado?</b>`,
        opciones: [
            "LEFT JOIN",
            "INNER JOIN",
            "FULL JOIN"
        ],
        correcta: "b"
    }
];