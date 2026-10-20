export const cleancodeparcial2  = [
    {
        enunciado: `En un módulo de autenticación, se refactoriza una validación cambiando <span style="color:darkorange">if intentos != 0:</span> por <span style="color:darkorange">if intentos:</span>.<br>
        Si la variable <span style="color:darkblue">intentos</span> (un entero) llega con valor <span style="color:darkorange">0</span>, <b>¿cómo afecta esto al flujo del programa?</b>`,
        opciones: [
            "La condición se evalúa como verdadera porque la variable existe en memoria.",
            "El flujo ignora el bloque de validación y salta directamente a la instrucción else.",
            "El programa lanza un error de tipo al intentar evaluar el entero."
        ],
        correcta: "b"
    },
    {
        enunciado: `Una función que procesa reportes masivos inicia con la instrucción <span style="color:darkorange">if not datos: return "Error"</span>.<br>
        El código restante contiene 50 líneas de cálculos.<br>
        Si se invoca la función con una lista vacía, <b>¿qué consecuencia directa tiene esta cláusula de guarda?</b>`,
        opciones: [
            "Las 50 líneas se ejecutan, pero devuelven 0 por defecto.",
            "Se lanza un error de tipo por intentar evaluar una lista sin elementos.",
            "Las 50 líneas no se ejecutan, evitando cálculos innecesarios y saliendo de inmediato."
        ],
        correcta: "c"
    },
    {
        enunciado: `Dos funciones independientes (para ventas online y físicas) aplican la misma fórmula de descuento de forma manual.<br>
        Si la gerencia decide cambiar el porcentaje de descuento, <b>¿qué problema operativo refleja la falta de refactorización (principio DRY)?</b>`,
        opciones: [
            "Se debe modificar la fórmula en múltiples ubicaciones, aumentando el riesgo de inconsistencias.",
            "El intérprete arrojará un error de colisión de variables en tiempo de ejecución.",
            "Ambas funciones se ejecutarán más lentamente debido a la redundancia de código."
        ],
        correcta: "a"
    },
    {
        enunciado: `Un script valida el nombre de un usuario con <span style="color:darkorange">if nombre != "":</span>.<br>
        Se refactoriza a <span style="color:darkorange">if nombre:</span>.<br>
        Si el usuario envía una cadena vacía (<span style="color:darkorange">""</span>), <b>¿cuál es el resultado operativo?</b>`,
        opciones: [
            "La condición evalúa como False, entrando al bloque de rechazo.",
            "El programa requiere convertir la cadena a booleano explícitamente o fallará.",
            "Se lanza una excepción por no comparar explícitamente con comillas vacías."
        ],
        correcta: "a"
    },
    {
        enunciado: `Se analiza un bloque con múltiples niveles de anidación (<span style="color:darkorange">if A: if B: if C:</span>).<br>
        Tras aplicar refactorización, se aplanan las condiciones usando retornos tempranos.<br>
        <b>¿Qué cambio se observa en el comportamiento del programa?</b>`,
        opciones: [
            "Las condiciones ahora son mutuamente excluyentes y ya no evalúan todas.",
            "El resultado final se mantiene idéntico, pero el flujo se lee de arriba hacia abajo.",
            "El intérprete procesa las condiciones en orden inverso, cambiando la salida."
        ],
        correcta: "b"
    },
    {
        enunciado: `Un desarrollador reemplaza el bloque <span style="color:darkorange">if total > 500: return True else: return False</span> por la instrucción <span style="color:darkorange">return total > 500</span>.<br>
        Si se invoca la función con un valor de <span style="color:darkblue">total</span> de <span style="color:darkorange">500</span>, <b>¿qué valor retorna?</b>`,
        opciones: [
            "None",
            "False",
            "500"
        ],
        correcta: "b"
    },
    {
        enunciado: `En una función de nómina, existe la variable <span style="color:darkblue">bono_extra</span> que nunca se utiliza en el retorno.<br>
        Si se elimina esa línea durante la refactorización, <b>¿qué sucede al ejecutar la función?</b>`,
        opciones: [
            "Se lanza un error de variable no declarada en el retorno.",
            "El salario final se reduce en un 10% automáticamente.",
            "El resultado de retorno de la función es exactamente el mismo."
        ],
        correcta: "c"
    },
    {
        enunciado: `En un controlador de inventario, una función de validación retorna el número <span style="color:darkorange">0</span> si el stock es válido, pero retorna el texto <span style="color:darkorange">"Dato inválido"</span> si no lo es.<br>
        Si otra función intenta sumar ese resultado directamente a un entero, <b>¿qué ocurre con el código?</b>`,
        opciones: [
            "El intérprete fuerza la conversión del texto a 0 para no romper la suma.",
            "La suma se ejecuta normalmente devolviendo NaN (Not a Number).",
            "Se lanza un TypeError al intentar sumar un entero con un string."
        ],
        correcta: "c"
    },
    {
        enunciado: `En el código de facturación, el bloque <span style="color:darkorange">if tipo_cliente == "VIP":</span> y el bloque <span style="color:darkorange">else:</span> contienen exactamente la misma instrucción de cálculo.<br>
        <b>¿Cuál es la refactorización más adecuada para este escenario?</b>`,
        opciones: [
            "Convertir la estructura en un bucle while infinito.",
            "Eliminar la condición if-else y dejar solo la instrucción de cálculo.",
            "Invertir la condición a if tipo_cliente != VIP para balancear el código."
        ],
        correcta: "b"
    },
    {
        enunciado: `Un estudiante refactoriza un bucle for que sumaba elementos de una lista, reemplazándolo por la función nativa <span style="color:darkorange">sum([15, 25, "30"])</span>.<br>
        <b>¿Cuál es la consecuencia de esta refactorización al ejecutar el código?</b>`,
        opciones: [
            "Se lanza un TypeError porque la función no puede operar con strings.",
            "El string se ignora y la función retorna 40.",
            "El string se concatena al resultado final como texto."
        ],
        correcta: "a"
    }
];