export const diagnosticoyredesparcial2 = [
    {
        enunciado: `Un técnico ejecuta el comando:<br><br>
        <span style="color:darkorange">nslookup google.com</span><br><br>
        El equipo tiene red, pero el comando devuelve <b>"No se puede encontrar"</b>.<br><br>
        <b>¿Qué problema indica esto?</b>`,
        opciones: [
            "Un problema de DNS: el equipo no logra traducir el nombre a una dirección IP.",
            "Un problema de latencia: el paquete tarda demasiado en ir y volver.",
            "Una IP duplicada en la red local."
        ],
        correcta: "a"
    },
    {
        enunciado: `Un técnico ejecuta:<br><br>
        <span style="color:darkorange">ping 8.8.8.8</span><br><br>
        Y obtiene tiempos de respuesta que varían mucho entre paquete y paquete (ej. 25ms, 300ms, 27ms).<br><br>
        <b>¿Qué está evaluando el comando ping en este caso?</b>`,
        opciones: [
            "La latencia, es decir, el tiempo que tarda un paquete en ir y volver.",
            "La dirección IP asignada por el servidor DHCP.",
            "El nombre del dominio al que pertenece la IP."
        ],
        correcta: "a"
    },
    {
        enunciado: `Un computador no abre páginas web. Se aplica la secuencia:<br><br>
        <span style="color:darkorange">ipconfig /all</span> → configuración coherente<br>
        <span style="color:darkorange">ping 8.8.8.8</span> → responde sin pérdida<br>
        <span style="color:darkorange">nslookup google.com</span> → "No se puede encontrar"<br><br>
        <b>¿Qué permite concluir esta secuencia de diagnóstico?</b>`,
        opciones: [
            "Hay un problema de DNS, y el análisis se detiene en el paso que falla sin revisar ruta ni latencia.",
            "Hay un problema de IP duplicada, y por eso el ping responde lento.",
            "El equipo no tiene red, por eso falla en todos los pasos."
        ],
        correcta: "a"
    },
    {
        enunciado: `Un técnico necesita conocer la ruta (los saltos o routers) que sigue un paquete desde su equipo hasta un destino en Internet.<br><br>
        <b>¿Qué comando de red debe utilizar?</b>`,
        opciones: [
            "tracert",
            "ipconfig",
            "nslookup"
        ],
        correcta: "a"
    },
    {
        enunciado: `Un computador tiene la IP <span style="color:darkblue">192.168.1.25</span> con máscara <span style="color:darkblue">255.255.255.0</span>.<br><br>
        <b>¿Cuál es la dirección de red?</b>`,
        opciones: [
            "192.168.1.255",
            "192.168.1.0",
            "192.168.1.1"
        ],
        correcta: "b"
    },
    {
        enunciado: `Una red usa la notación <span style="color:darkblue">/24</span>.<br><br>
        <b>¿Cuál es la máscara correcta?</b>`,
        opciones: [
            "255.0.0.0",
            "255.255.255.0",
            "255.255.0.0"
        ],
        correcta: "b"
    },
    {
        enunciado: `Una empresa necesita <span style="color:darkblue">5 subredes</span>.<br><br>
        <b>¿Qué potencia cubre correctamente esa cantidad?</b>`,
        opciones: [
            "2^1",
            "2^2",
            "2^3"
        ],
        correcta: "c"
    },
    {
        enunciado: `Una empresa necesita <span style="color:darkblue">8 subredes</span>.<br><br>
        <b>¿Qué potencia cubre correctamente esa cantidad?</b>`,
        opciones: [
            "2^2",
            "2^1",
            "2^3"
        ],
        correcta: "c"
    },
    {
        enunciado: `Un estudiante desea verificar si un computador tiene conexión con otro equipo.<br><br>
        <b>¿Qué comando debe usar?</b><br><br>
        <span style="color:darkorange">?</span>`,
        opciones: [
            "ping",
            "ipconfig",
            "format"
        ],
        correcta: "a"
    },
    {
        enunciado: `Un estudiante quiere comprobar si dos computadores tienen conexión en la red.<br><br>
        <b>¿Cuál comando debe escribir?</b>`,
        opciones: [
            "format",
            "shutdown",
            "ping"
        ],
        correcta: "c"
    }
];