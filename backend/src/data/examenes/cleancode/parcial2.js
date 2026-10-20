export const cleancodeparcial2 = [
    {
        enunciado: `Un estudiante cambia la condición <span style="color:darkorange">if cantidad != 0:</span> por simplemente <span style="color:darkorange">if cantidad:</span>.<br>
        Si la variable <span style="color:darkblue">cantidad</span> vale exactamente <span style="color:darkorange">0</span>, <b>¿qué hace el programa?</b>`,
        opciones: [
            "Entra al if porque la variable existe en la memoria.",
            "Salta directo al else porque evalúa como falso.",
            "Da un error porque no se puede comparar un cero."
        ],
        correcta: "b"
    },
    {
        enunciado: `Una función empieza con la instrucción <span style="color:darkorange">if not lista: return "Vacío"</span>.<br>
        Si se manda una lista vacía a esa función, <b>¿qué pasa con el resto del código?</b>`,
        opciones: [
            "Se ejecuta todo el código, pero no muestra nada.",
            "El programa da un error por recibir una lista vacía.",
            "Se sale de la función de inmediato y se ahorra hacer los cálculos."
        ],
        correcta: "c"
    },
    {
        enunciado: `Tienes dos funciones diferentes y en ambas está escrita la misma fórmula para calcular un descuento.<br>
        Si mañana el descuento cambia, <b>¿qué problema hay con tener el código así?</b>`,
        opciones: [
            "Hay que cambiarlo en varios lados y es muy fácil olvidar uno.",
            "El programa se vuelve más lento por tener código repetido.",
            "Las variables de las dos funciones chocan entre sí."
        ],
        correcta: "a"
    },
    {
        enunciado: `Cambias la condición <span style="color:darkorange">if nombre != "":</span> por <span style="color:darkorange">if nombre:</span>.<br>
        Si el usuario no escribe nada (deja el campo vacío), <b>¿qué resultado da esa condición?</b>`,
        opciones: [
            "Es falsa, así que el programa entra al else (rechazo).",
            "Es verdadera, porque el campo de texto sí existe.",
            "El programa se cae porque faltan las comillas vacías."
        ],
        correcta: "a"
    },
    {
        enunciado: `Tienes un código con muchos <span style="color:darkorange">if</span> metidos uno dentro de otro.<br>
        Lo arreglas usando retornos tempranos (<span style="color:darkorange">return</span>). <b>¿Qué logras con esto?</b>`,
        opciones: [
            "Que el programa evalúe las condiciones en orden diferente.",
            "Que el código se lea de arriba a abajo sin tanta sangría, dando el mismo resultado.",
            "Que el programa se ejecute más rápido en la computadora."
        ],
        correcta: "b"
    },
    {
        enunciado: `Cambias el bloque <span style="color:darkorange">if total > 500: return True</span> (y su else) por <span style="color:darkorange">return total > 500</span>.<br>
        Si el valor de <span style="color:darkblue">total</span> es exactamente <span style="color:darkorange">500</span>, <b>¿qué devuelve la función?</b>`,
        opciones: [
            "Nada (None)",
            "False",
            "500"
        ],
        correcta: "b"
    },
    {
        enunciado: `En una función creas la variable <span style="color:darkblue">bono_extra</span> pero luego nunca la usas para nada.<br>
        Si borras esa línea de código, <b>¿qué pasa al ejecutar el programa?</b>`,
        opciones: [
            "Da error porque falta esa variable en el retorno.",
            "El resultado final cambia porque falta ese cálculo.",
            "Todo funciona exactamente igual que antes."
        ],
        correcta: "c"
    },
    {
        enunciado: `Una función devuelve el número <span style="color:darkorange">0</span> si todo está bien, pero devuelve el texto <span style="color:darkorange">"Error"</span> si algo falla.<br>
        Si otra parte del código intenta sumar ese resultado, <b>¿qué ocurre?</b>`,
        opciones: [
            "El texto se convierte en 0 automáticamente para poder sumar.",
            "La suma se hace normal pero da como resultado un error de texto.",
            "El programa da un error porque no se puede sumar un texto con un número."
        ],
        correcta: "c"
    },
    {
        enunciado: `Tienes un <span style="color:darkorange">if</span> y un <span style="color:darkorange">else</span> que hacen exactamente el mismo cálculo, solo cambia la condición.<br>
        <b>¿Qué deberías hacer para limpiar ese código?</b>`,
        opciones: [
            "Cambiar la estructura por un bucle while.",
            "Quitar el if y el else, y dejar el cálculo escrito una sola vez.",
            "Invertir la condición para que quede al revés."
        ],
        correcta: "b"
    },
    {
        enunciado: `Reemplazas un bucle for que sumaba números por la función nativa <span style="color:darkorange">sum([15, 25, "30"])</span>.<br>
        Al ejecutar el código, <b>¿qué pasa?</b>`,
        opciones: [
            "Da error porque no se pueden sumar textos con números.",
            "Ignora el texto y suma solo los números dando 40.",
            "Pega el texto al final del resultado de la suma."
        ],
        correcta: "a"
    }
];