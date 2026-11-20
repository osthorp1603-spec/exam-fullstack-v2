export const programacionparcial2 = [
    {
        enunciado: `En el desarrollo de una aplicación web, el equipo de trabajo decide separar el proyecto en dos grandes partes.<br><br>
        <b>¿Cuál es la diferencia fundamental entre el Frontend y el Backend?</b>`,
        opciones: [
            "El Frontend se programa solo en Python y el Backend solo en HTML.",
            "El Frontend maneja la base de datos y el Backend se encarga de los estilos CSS.",
            "El Frontend es todo lo que el usuario ve e interactúa en el navegador, mientras que el Backend es la lógica del servidor, el procesamiento y la persistencia de datos."
        ],
        correcta: "c"
    },
    {
        enunciado: `Analiza este fragmento de código en <span style="color:darkorange">app.py</span>:<br><br>
        <span style="color:darkorange">app = Flask(__name__, template_folder="../frontend")</span><br><br>
        <b>¿Por qué el estudiante tuvo que usar el parámetro template_folder?</b>`,
        opciones: [
            "Porque Flask busca por defecto una carpeta llamada 'templates', así que le indicó la ruta correcta hacia 'frontend'.",
            "Porque Flask no es capaz de leer archivos HTML si no están en la misma carpeta que el archivo .py.",
            "Para obligar al navegador a descargar el archivo index.html en lugar de abrirlo."
        ],
        correcta: "a"
    },
    {
        enunciado: `Un estudiante crea un formulario en <span style="color:darkorange">index.html</span> con los campos 'nombre' y 'correo'. Al enviarlo, el servidor lanza un error <b>Bad Request</b> (400).<br><br>
        Revisando el HTML, el estudiante olvidó poner el atributo <span style="color:darkblue">name</span> en los inputs.<br><br>
        <b>¿Por qué ocurre este error?</b>`,
        opciones: [
            "Porque el archivo HTML no tenía la etiqueta <form> cerrada correctamente.",
            "Porque Flask requiere obligatoriamente que los formularios usen el método GET.",
            "Porque el servidor usa request.form['nombre'] para buscar la llave, y sin el atributo name, el navegador no envía ese dato."
        ],
        correcta: "c"
    },
    {
        enunciado: `Un estudiante quiere guardar los datos del formulario en un archivo de texto para que no se pierdan al apagar el servidor.<br><br>
        Escribe el siguiente código:<br><br>
        <span style="color:darkorange">archivo = open("datos.txt", "a")<br>
        archivo.write(f"Nombre: {nombre}\n")<br>
        archivo.close()</span><br><br>
        <b>¿Qué significa el parámetro "a" en la función open?</b>`,
        opciones: [
            "Que el archivo se abre en modo 'address', para guardar la dirección IP del usuario.",
            "Que el archivo se abre en modo 'append' (añadir), para no borrar los datos anteriores cada vez que alguien envía el formulario.",
            "Que el archivo se abre en modo 'automático', guardando los datos en la nube."
        ],
        correcta: "b"
    },
    {
        enunciado: `Analiza el siguiente fragmento de código:<br><br>
        <span style="color:darkorange">@app.route("/recibir", methods=["POST"])<br>
        def recibir():<br>
        &nbsp;&nbsp;&nbsp;&nbsp;...<br>
        &nbsp;&nbsp;&nbsp;&nbsp;return f"tu nombre {nombre}"<br><br>
        # Persistencia<br>
        &nbsp;&nbsp;&nbsp;&nbsp;archivo = open(...)</span><br><br>
        <b>¿Qué error lógico tiene este código?</b>`,
        opciones: [
            "El return está antes de la persistencia, por lo que la función termina y nunca guarda los datos en el archivo.",
            "Falta importar la librería os para poder abrir el archivo.",
            "El método POST no permite retornar texto plano, solo archivos HTML."
        ],
        correcta: "a"
    },
    {
        enunciado: `En el backend, un estudiante necesita capturar lo que el usuario escribió en el campo de texto llamado "correo" dentro de un formulario que se envía por método POST.<br><br>
        <b>¿Qué instrucción de Flask permite obtener ese dato?</b>`,
        opciones: [
            "request.form['correo']",
            "request.get_data('correo')",
            "request.arguments['correo']"
        ],
        correcta: "a"
    },
    {
        enunciado: `El estudiante calcula el promedio de dos notas y quiere mostrar el resultado en una página diferente, no solo como texto plano.<br><br>
        Para ello utiliza:<br><br>
        <span style="color:darkorange">return render_template("resultado.html", promedio=resultado, estado=estado)</span><br><br>
        <b>¿Cómo se visualizan esas variables en el archivo HTML?</b>`,
        opciones: [
            "Usando etiquetas de Python directamente: <py>promedio</py>.",
            "Llamando a la función print(promedio) dentro del HTML.",
            "Usando la sintaxis de plantillas de Jinja2, encerrando las variables entre llaves dobles: {{ promedio }}."
        ],
        correcta: "c"
    },
    {
        enunciado: `Analiza la estructura de carpetas:<br><br>
        <span style="color:darkblue">ejemplo/</span><br>
        &nbsp;&nbsp;├── <span style="color:darkblue">backend/</span> (app.py)<br>
        &nbsp;&nbsp;└── <span style="color:darkblue">frontend/</span> (index.html, resultado.html)<br><br>
        Si el estudiante intenta abrir <span style="color:darkorange">index.html</span> haciendo doble clic directamente en su computador, <b>¿qué pasa con el formulario?</b>`,
        opciones: [
            "El HTML se ve, pero al enviar el formulario dará error, porque no hay un servidor Flask escuchando las peticiones en una URL local.",
            "El formulario funciona perfectamente porque el navegador ejecuta el backend de Python automáticamente.",
            "El archivo se borra porque no está en la carpeta correcta."
        ],
        correcta: "a"
    },
    {
        enunciado: `En el código del formulario de notas, el estudiante puso:<br><br>
        <span style="color:darkorange">@app.route("/promedio", methods=["POST"])</span><br><br>
        <b>¿Cuál es la diferencia principal entre usar el método GET y el método POST al enviar un formulario?</b>`,
        opciones: [
            "No hay ninguna diferencia técnica, solo son nombres distintos que se le dan al formulario en HTML.",
            "GET envía los datos visibles en la URL (ideal para búsquedas), mientras que POST envía los datos dentro del cuerpo del envío (ideal para contraseñas o información sensible).",
            "GET es más seguro que POST porque encripta los datos automáticamente, mientras que POST los deja expuestos."
        ],
        correcta: "b"
    },
    {
         enunciado: `Un estudiante está guardando los datos en un archivo <span style="color:darkorange">datos.txt</span> usando la función <span style="color:darkorange">open()</span>.<br><br>
        <b>¿Qué debe hacer el estudiante siempre al terminar de escribir en el archivo con Python?</b>`,
        opciones: [
            "Usar el comando print(archivo) para asegurar que los datos se guarden en el disco duro.",
            "Cerrar el archivo usando archivo.close(), para asegurar que los datos se guarden correctamente y liberar el archivo.",
            "No hace falta hacer nada, Python guarda los datos en el archivo automáticamente apenas se ejecuta el código."
        ],
        correcta: "b"
    }
];