export const patronesparcial2 = [
    {
        enunciado: `Un estudiante repite el mismo bloque de validación en varios archivos del proyecto.<br><br>
        El docente recomienda aplicar el principio <span style="color:darkblue">DRY</span>.<br><br>
        <b>¿Cuál es la idea principal de este principio?</b>`,
        opciones: [
            "Evitar duplicar lógica reutilizando el mismo código.",
            "Crear más funciones aunque hagan lo mismo.",
            "Separar el proyecto en carpetas obligatorias."
        ],
        correcta: "a"
    },
    {
        enunciado: `Un programa tiene muchas clases pequeñas y complejas aunque el problema es simple.<br><br>
        El docente menciona el principio <span style="color:darkblue">KISS</span>.<br><br>
        <b>¿Qué busca este principio?</b>`,
        opciones: [
            "Agregar más capas para hacerlo profesional.",
            "Mantener soluciones simples y fáciles de entender.",
            "Evitar dividir el sistema en módulos."
        ],
        correcta: "b"
    },
    {
        enunciado: `El conjunto de principios <span style="color:darkblue">SOLID</span> se menciona al diseñar software mantenible.<br><br>
        <b>¿Cuál es su objetivo general?</b>`,
        opciones: [
            "Obligar a usar programación funcional.",
            "Evitar el uso de funciones.",
            "Mejorar organización, mantenimiento y escalabilidad del código."
        ],
        correcta: "c"
    },
    {
        enunciado: `En <span style="color:darkblue">arquitectura de software</span>, se decide separar la lógica del sistema en diferentes partes.<br><br>
        <b>¿Cuál es el propósito principal de esta separación?</b>`,
        opciones: [
            "Aumentar la cantidad de archivos obligatoriamente.",
            "Evitar el uso de funciones.",
            "Asignar responsabilidades claras a cada componente."
        ],
        correcta: "c"
    },
    {
        enunciado: `En el nuevo enfoque de <span style="color:darkblue">MVC</span>, el <span style="color:darkblue">Model</span> no se comunica directamente con la <span style="color:darkblue">View</span>.<br><br>
        <b>¿Qué implica esta idea?</b>`,
        opciones: [
            "La View controla toda la lógica.",
            "El Model actualiza la interfaz gráfica directamente.",
            "La comunicación pasa por un componente intermediario."
        ],
        correcta: "c"
    },
    {
        enunciado: `En la arquitectura <span style="color:darkblue">MVP</span>, el <span style="color:darkblue">Presenter</span> cumple un papel central.<br><br>
        <b>¿Cuál es su función principal?</b>`,
        opciones: [
            "Guardar datos permanentemente.",
            "Coordinar la lógica entre Model y View.",
            "Dibujar directamente la interfaz."
        ],
        correcta: "b"
    },
        {
        enunciado: `El patrón <span style="color:darkblue">Factory</span> se utiliza cuando el código principal tiene demasiados condicionales para decidir qué objeto crear.<br><br>
        Observa el ejemplo en Python:<br><br>
        <span style="color:darkorange">
        class FabricaNotificaciones:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;@staticmethod<br>
        &nbsp;&nbsp;&nbsp;&nbsp;def crear(tipo):<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if tipo == "correo": return Correo()<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if tipo == "sms": return SMS()<br><br>
        # El código principal solo hace esto:<br>
        notificacion = FabricaNotificaciones.crear("sms")
        </span><br><br>
        <b>¿Qué característica del patrón Factory se observa en este código?</b>`,
        opciones: [
            "Centralizar la lógica de creación en una fábrica, para que el código principal no dependa de los condicionales.",
            "Eliminar completamente las clases y usar solo funciones sueltas.",
            "Obligar al código principal a instanciar cada clase directamente usando if/else."
        ],
        correcta: "a"
    },
    {
        enunciado: `El patrón <span style="color:darkblue">Observer</span> se usa cuando varios elementos deben reaccionar a un cambio.<br><br>
        <b>¿Cuál situación representa mejor este patrón?</b>`,
        opciones: [
            "Un cambio en un objeto notifica automáticamente a otros interesados.",
            "Un objeto trabaja completamente aislado.",
            "Las funciones se ejecutan solo manualmente."
        ],
        correcta: "a"
    },
    {
        enunciado: `En arquitecturas modernas como <span style="color:darkblue">MVC</span> o <span style="color:darkblue">MVP</span>, separar responsabilidades facilita el mantenimiento.<br><br>
        <b>¿Cuál beneficio directo se obtiene?</b>`,
        opciones: [
            "Modificar una parte sin afectar todo el sistema.",
            "Evitar crear módulos independientes.",
            "Eliminar completamente la lógica de negocio."
        ],
        correcta: "a"
    },
    {
        enunciado: `Un proyecto mezcla interfaz, lógica y datos en un solo archivo.<br><br>
        El docente recomienda aplicar <span style="color:darkblue">separación de responsabilidades</span>.<br><br>
        <b>¿Qué problema intenta evitar?</b>`,
        opciones: [
            "El uso de funciones reutilizables.",
            "El acoplamiento excesivo entre partes del sistema.",
            "La existencia de múltiples archivos."
        ],
        correcta: "b"
    }
];