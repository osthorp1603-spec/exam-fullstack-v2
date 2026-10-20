export const estructuradatosparcial2 = [
    {
        enunciado: `Al intentar insertar un nodo en la posición 0 de una <span style="color:darkblue">lista circular</span> con varios elementos, se actualiza la cabeza al nuevo nodo, pero luego se usa un ciclo para buscar el final: <span style="color:darkorange">while actual.siguiente != self.head:</span>.<br><br>
        El programa se congela.<br><br>
        <b>¿Qué es más probable?</b>`,
        opciones: [
            { texto: "El ciclo se detiene prematuramente porque el nuevo nodo apunta a sí mismo.", valor: "a" },
            { texto: "El puntero del antiguo último nodo sigue apuntando al antiguo head; al no coincidir con el nuevo head, el ciclo nunca termina.", valor: "b" },
            { texto: "Las listas circulares no permiten inserciones en la posición 0.", valor: "c" }
        ],
        nombreCampo: "p1",
        respuestaCorrecta: "b"
    },
    {
        enunciado: `En el método <span style="color:darkorange">agregar</span> de una <span style="color:darkblue">lista doblemente enlazada</span>, se enlaza el siguiente del último nodo hacia el nuevo, pero se omite la línea <span style="color:darkorange">nuevo_nodo.anterior = self.cola</span>.<br><br>
        Si el usuario intenta retroceder usando <span style="color:darkorange">anterior()</span> desde esta nueva canción, <b>¿qué ocurre?</b>`,
        opciones: [
            { texto: "Retrocede a la primera canción sin problemas.", valor: "a" },
            { texto: "Se produce un ciclo infinito entre la primera y la última canción.", valor: "b" },
            { texto: "Se pierde la referencia hacia atrás; el puntero anterior queda en None y lanza un error al intentar leerlo.", valor: "c" }
        ],
        nombreCampo: "p2",
        respuestaCorrecta: "c"
    },
    {
        enunciado: `Se ejecuta el método <span style="color:darkorange">imprimir</span> de una <span style="color:darkblue">lista circular</span> que utiliza <span style="color:darkorange">while True:</span> y evalúa <span style="color:darkorange">if actual == self.head: break</span>.<br><br>
        Si por un error de código el último nodo de la lista apunta a <span style="color:darkorange">None</span> en lugar de a la cabeza, <b>¿qué sucede?</b>`,
        opciones: [
            { texto: "Se lanza un AttributeError al intentar leer el atributo siguiente de un valor None, rompiendo el programa.", valor: "a" },
            { texto: "El bucle while simplemente termina de forma limpia al llegar al final.", valor: "b" },
            { texto: "La lista se convierte automáticamente en una lista simple.", valor: "c" }
        ],
        nombreCampo: "p3",
        respuestaCorrecta: "a"
    },
    {
        enunciado: `En la playlist (lista doble), el método <span style="color:darkorange">agregar</span> evalúa <span style="color:darkorange">if not self.cabeza:</span>.<br><br>
        Si se agrega la primera canción y el programador olvida asignar <span style="color:darkorange">self.cola = nuevo_nodo</span> dentro de ese bloque, <b>¿qué pasa al intentar agregar la segunda canción?</b>`,
        opciones: [
            { texto: "Se lanza un error de tipo NoneType al intentar acceder a self.cola.siguiente porque la cola sigue vacía.", valor: "a" },
            { texto: "La segunda canción se convierte en la nueva cabeza por defecto.", valor: "b" },
            { texto: "La playlist sobrescribe la primera canción sin lanzar error.", valor: "c" }
        ],
        nombreCampo: "p4",
        respuestaCorrecta: "a"
    },
    {
        enunciado: `Un usuario se encuentra escuchando la primera canción de la playlist y presiona el botón de retroceder, ejecutando el método <span style="color:darkorange">anterior()</span>.<br><br>
        El código evalúa <span style="color:darkorange">if self.actual and self.actual.anterior:</span>. <b>¿Cómo se comporta el programa?</b>`,
        opciones: [
            { texto: "Lanza un IndexError por intentar retroceder fuera de los límites.", valor: "a" },
            { texto: "La condición evalúa como False, por lo que salta al else e imprime que ya está en la primera canción, manteniendo el puntero actual intacto.", valor: "b" },
            { texto: "El puntero actual se vuelve None, perdiendo la canción actual.", valor: "c" }
        ],
        nombreCampo: "p5",
        respuestaCorrecta: "b"
    },
    {
        enunciado: `Un usuario se encuentra en la última canción de la lista doble y ejecuta <span style="color:darkorange">siguiente()</span>.<br><br>
        El método evalúa <span style="color:darkorange">if self.actual and self.actual.siguiente:</span>.<br><br>
        <b>¿Cuál es la consecuencia operativa de ejecutar esta función en este estado?</b>`,
        opciones: [
            { texto: "El programa se bloquea porque no hay validación para el final de la lista.", valor: "a" },
            { texto: "Se ejecuta el bloque else, mostrando el mensaje de última canción, y el puntero actual no se modifica.", valor: "b" },
            { texto: "El puntero actual salta automáticamente a la primera canción creando un comportamiento circular.", valor: "c" }
        ],
        nombreCampo: "p6",
        respuestaCorrecta: "b"
    },
    {
        enunciado: `Se crea una <span style="color:darkblue">lista circular</span> vacía y se agrega un solo elemento usando <span style="color:darkorange">append</span>.<br><br>
        El método crea el nodo y ejecuta <span style="color:darkorange">nuevo_nodo.siguiente = self.head</span>.<br><br>
        <b>¿Qué valor contiene <span style="color:darkorange">self.head.siguiente.siguiente</span>?</b>`,
        opciones: [
            { texto: "None, porque al ser el único elemento, no hay un segundo nodo al cual apuntar.", valor: "a" },
            { texto: "Un error de referencia, ya que la lista no está cerrada correctamente.", valor: "b" },
            { texto: "El mismo nodo cabeza, porque el nodo se apunta a sí mismo al ser el único en la lista.", valor: "c" }
        ],
        nombreCampo: "p7",
        respuestaCorrecta: "c"
    },
    {
        enunciado: `En la clase <span style="color:darkblue">Nodo</span>, el constructor <span style="color:darkorange">__init__</span> recibe el parámetro <span style="color:darkblue">dato</span> y lo asigna, pero olvida definir <span style="color:darkorange">self.siguiente = None</span>.<br><br>
        Si se instancia un nodo y se intenta ejecutar <span style="color:darkorange">print(nodo.siguiente)</span> inmediatamente, <b>¿qué ocurre?</b>`,
        opciones: [
            { texto: "Imprime None por defecto, ya que Python inicializa las variables vacías así.", valor: "a" },
            { texto: "Imprime False debido a la naturaleza booleana de los punteros.", valor: "b" },
            { texto: "Lanza un AttributeError porque el atributo siguiente no existe en la instancia hasta que se defina explícitamente.", valor: "c" }
        ],
        nombreCampo: "p8",
        respuestaCorrecta: "c"
    },
    {
        enunciado: `Al insertar una canción entre la canción A y la canción B en la playlist, se actualizan los punteros para que A apunte a la nueva y la nueva a B.<br><br>
        Si se omite actualizar el puntero <span style="color:darkorange">anterior</span> de la canción B, <b>¿qué falla en el sistema?</b>`,
        opciones: [
            { texto: "El método siguiente() lanzará un error al llegar a la nueva canción.", valor: "a" },
            { texto: "El método anterior() fallará al intentar retroceder desde la canción B, ya que su puntero hacia atrás seguiría apuntando a A.", valor: "b" },
            { texto: "La lista se rompe y se convierte en circular automáticamente.", valor: "c" }
        ],
        nombreCampo: "p9",
        respuestaCorrecta: "b"
    },
    {
        enunciado: `Se intenta buscar un valor inexistente en una lista circular correctamente cerrada, usando un bucle <span style="color:darkorange">while actual.dato != objetivo: actual = actual.siguiente</span> sin ninguna otra validación.<br><br>
        <b>¿Cuál es el comportamiento del programa?</b>`,
        opciones: [
            { texto: "Se produce un bucle infinito porque el puntero actual dará vueltas indefinidamente al nunca encontrar el valor.", valor: "a" },
            { texto: "Retorna None automáticamente al dar la primera vuelta a la lista.", valor: "b" },
            { texto: "El programa lanza un IndexError al llegar al final de la lista.", valor: "c" }
        ],
        nombreCampo: "p10",
        respuestaCorrecta: "a"
    }
];