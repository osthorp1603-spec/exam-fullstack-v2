export const cleancodeparcial3 = [
    {
        enunciado: `Un estudiante crea un proyecto y coloca todo el código en un solo archivo:
<span style="color:darkorange">conexion</span>,
<span style="color:darkorange">CREATE TABLE</span> e
<span style="color:darkorange">INSERT</span>.<br><br>
El programa funciona correctamente.<br><br>
<b>¿Qué es más probable?</b>`,
        opciones: [
            "El código funciona, pero no está organizado profesionalmente porque mezcla todas las responsabilidades en un solo archivo.",
            "El problema es usar SQLite; debería cambiar de base de datos.",
            "El programa está mal porque siempre se deben usar varias tablas."
        ],
        correcta: "a"
    },
    {
        enunciado: `Un estudiante pregunta cuál archivo debe controlar la ejecución del sistema
dentro de un proyecto con patrón <span style="color:darkblue">DAO</span>.<br><br>
<b>¿Qué es más probable?</b>`,
        opciones: [
            "main.py es el punto de inicio y coordina todo el programa.",
            "El archivo DAO debe iniciar el programa automáticamente.",
            "La carpeta database debe ejecutar el sistema."
        ],
        correcta: "a"
    },
    {
        enunciado: `Un estudiante crea la carpeta
<span style="color:darkblue">database</span>
y escribe funciones Python dentro
de ella para insertar datos.<br><br>
<b>¿Qué es más probable?</b>`,
        opciones: [
            "Está bien porque database maneja todo lo relacionado con datos.",
            "Es incorrecto; database solo guarda el archivo .db y no debe contener código.",
            "El problema es que debería crear más tablas."
        ],
        correcta: "b"
    },
    {
        enunciado: `Un estudiante crea la clase
<span style="color:darkorange">class Cliente</span>
dentro de
<span style="color:darkblue">modelo/</span>
y escribe consultas SQL dentro del constructor.<br><br>
<b>¿Qué es más probable?</b>`,
        opciones: [
            "El modelo debe ejecutar SQL para ser funcional.",
            "El problema es que falta crear más atributos.",
            "El modelo solo representa datos; el SQL pertenece al DAO."
        ],
        correcta: "c"
    },
    {
        enunciado: `Un estudiante crea varias funciones SQL directamente en
<span style="color:darkorange">main.py</span>
en lugar de usar la carpeta
<span style="color:darkblue">dao/</span>.<br><br>
<b>¿Qué es más probable?</b>`,
        opciones: [
            "Es correcto porque main.py puede hacer cualquier tarea.",
            "El problema es usar funciones en lugar de clases.",
            "No sigue el patrón DAO; las consultas SQL deberían estar en dao/."
        ],
        correcta: "c"
    },
    {
        enunciado: `Un estudiante crea conexiones SQLite distintas en cada archivo
del proyecto usando varias veces:<br><br>
<span style="color:darkorange">sqlite3.connect()</span><br><br>
<b>¿Qué es más probable?</b>`,
        opciones: [
            "Es obligatorio crear conexiones nuevas siempre.",
            "La conexión debería centralizarse en conexion/ para evitar repetir código.",
            "El problema es que falta usar claves foráneas."
        ],
        correcta: "b"
    },
    {
        enunciado: `Un estudiante usa solamente:<br><br>
<span style="color:darkorange">CREATE TABLE clientes(...)</span><br><br>
y al ejecutar varias veces el programa aparece un error de tabla existente.<br><br>
<b>¿Qué es más probable?</b>`,
        opciones: [
            "El error ocurre porque SQLite no permite crear tablas.",
            "Debería usar CREATE TABLE IF NOT EXISTS para evitar errores al repetir ejecuciones.",
            "Debe borrar la base de datos cada vez que ejecute."
        ],
        correcta: "b"
    },
    {
        enunciado: `Un estudiante observa la función:<br><br>
<span style="color:darkorange">def crear_conexion()</span><br><br>
dentro de
<span style="color:darkblue">conexion/conexion.py</span>.<br><br>
<b>¿Qué es más probable?</b>`,
        opciones: [
            "Su objetivo es permitir que cualquier archivo obtenga conexión sin duplicar código.",
            "Debe usarse únicamente desde main.py.",
            "Solo sirve para crear tablas automáticamente."
        ],
        correcta: "a"
    },
    {
        enunciado: `Un estudiante organiza su proyecto así:<br><br>
<span style="color:darkblue">conexion</span> → conexión<br>
<span style="color:darkblue">dao</span> → consultas SQL<br>
<span style="color:darkblue">modelo</span> → clases de datos<br>
<span style="color:darkblue">database</span> → archivo .db<br><br>
<b>¿Qué es más probable?</b>`,
        opciones: [
            "La estructura sigue correctamente la idea del patrón DAO.",
            "La carpeta modelo debería eliminarse.",
            "Todo debería estar dentro de dao."
        ],
        correcta: "a"
    },
    {
        enunciado: `Un estudiante afirma que al usar
<span style="color:darkblue">DAO</span>
aprendió SQL nuevo, aunque las consultas
<span style="color:darkorange">INSERT</span>
siguen iguales.<br><br>
<b>¿Qué es más probable?</b>`,
        opciones: [
            "DAO cambia completamente el lenguaje SQL.",
            "DAO no enseña SQL nuevo; enseña a organizar profesionalmente el programa.",
            "DAO solo sirve cuando existen múltiples tablas."
        ],
        correcta: "b"
    }
];