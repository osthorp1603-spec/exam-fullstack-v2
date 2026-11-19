export const fundamentosProgramacionParcial2 = [
    {
        enunciado: `En C++, un <span style="color:darkblue">if</span> se utiliza cuando:<br><br>
        <b>¿Qué permite hacer?</b>`,
        opciones: [
            "Ejecutar instrucciones solo si se cumple una condición.",
            "Repetir instrucciones varias veces.",
            "Crear funciones automáticamente."
        ],
        correcta: "a"
    },
    {
        enunciado: `Observa:<br><br>
        <span style="color:darkorange">if(edad >= 18)</span><br><br>
        <b>¿Qué verifica esta condición?</b>`,
        opciones: [
            "Si la edad es mayor o igual a 18.",
            "Si la edad es menor que 18.",
            "Si la edad siempre es válida."
        ],
        correcta: "a"
    },
    {
        enunciado: `En una estructura <span style="color:darkblue">else if</span>:<br><br>
        <b>¿Cuál es su función principal?</b>`,
        opciones: [
            "Evaluar otra condición cuando la anterior no se cumple.",
            "Finalizar el programa.",
            "Repetir instrucciones automáticamente."
        ],
        correcta: "a"
    },
    {
        enunciado: `Analiza:<br><br>
        <span style="color:darkorange">if(usuario=="admin"){<br>
        if(clave=="1234"){<br>
        cout<<"Acceso";<br>
        }<br>
        }</span><br><br>
        <b>¿Qué tipo de estructura se observa?</b>`,
        opciones: [
            "Condicional simple.",
            "Bucle repetitivo.",
            "Condicional anidado."
        ],
        correcta: "c"
    },
    {
        enunciado: `Un <span style="color:darkblue">if anidado</span> se usa cuando:<br><br>
        <b>¿Cuál situación lo describe mejor?</b>`,
        opciones: [
            "Se repite código muchas veces.",
            "Una condición depende del resultado de otra.",
            "Se crean varias variables."
        ],
        correcta: "b"
    },
    {
        enunciado: `Observa:<br><br>
        <span style="color:darkorange">if(edad>=18 && pago==true)</span><br><br>
        <b>¿Qué significa el operador <span style="color:darkblue">&&</span>?</b>`,
        opciones: [
            "Que una sola condición debe cumplirse.",
            "Que ambas condiciones deben cumplirse.",
            "Que ninguna condición importa."
        ],
        correcta: "b"
    },
    {
        enunciado: `Observa:<br><br>
        <span style="color:darkorange">if(opcion==1 || opcion==2)</span><br><br>
        <b>¿Qué indica el operador <span style="color:darkblue">||</span>?</b>`,
        opciones: [
            "Ambas condiciones deben cumplirse.",
            "El programa se repite.",
            "Basta con que una condición sea verdadera."
        ],
        correcta: "c"
    },
    {
        enunciado: `Analiza este código:<br><br>
        <span style="color:darkorange">if(nota >= 60)<br>
        if(asistencia >= 80)<br>
        cout << "Aprobado";</span><br><br>
        <b>¿Qué fallo de lógica tiene este código?</b>`,
        opciones: [
            "No hay fallo: el if anidado garantiza que ambas condiciones se cumplan para mostrar el mensaje.",
            "Falla porque un if no puede ir dentro de otro sin llaves.",
            "Falla porque la segunda condición se evalúa aunque el estudiante no haya aprobado la primera."
        ],
        correcta: "a"
    },
    {
        enunciado: `Analiza este código:<br><br>
        <span style="color:darkorange">if(edad < 18)<br>
        cout << "Menor";<br>
        else if(edad < 18)<br>
        cout << "Adolescente";</span><br><br>
        <b>¿Qué error se detecta en esta estructura?</b>`,
        opciones: [
            "El else if repite la misma condición del if, por lo que nunca se ejecutará.",
            "Falta un else final para cerrar la estructura.",
            "El else if debe ir siempre antes del if."
        ],
        correcta: "a"
    },
    {
        enunciado: `Analiza este código:<br><br>
        <span style="color:darkorange">if(usuario=="admin" || clave=="1234"){<br>
        cout << "Acceso permitido";<br>
        }</span><br><br>
        <b>¿Qué fallo de seguridad presenta esta condición?</b>`,
        opciones: [
            "Ninguno: el operador || es el correcto para validar usuario y contraseña.",
            "Con || basta con que una sola condición sea verdadera, así que un usuario incorrecto podría entrar solo con la clave correcta.",
            "El operador || no existe en C++ para condiciones."
        ],
        correcta: "b"
    }
];