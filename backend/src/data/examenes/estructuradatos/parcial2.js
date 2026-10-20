export const estructuradatosparcial2 = [
    {
        enunciado: `Un desarrollador inserta un nodo al inicio de una <span style="color:darkblue">lista circular</span> y actualiza el puntero de la cabeza al nuevo nodo. Sin embargo, olvida modificar el puntero del último nodo.<br><br><b>¿Qué es más probable?</b>`,
        opciones: [
            "El programa funciona igual porque la cabeza ya apunta al nuevo nodo.",
            "Se rompe el ciclo, ya que el último nodo sigue apuntando a la antigua cabeza, perdiendo la conexión correcta.",
            "El último nodo se convierte automáticamente en la nueva cabeza."
        ],
        correcta: "b"
    },
    {
        enunciado: `En el método <span style="color:darkorange">agregar</span> de una <span style="color:darkblue">lista doblemente enlazada</span>, se enlaza el siguiente del último nodo hacia el nuevo, pero se omite la línea <span style="color:darkorange">nuevo_nodo.anterior = self.cola</span>.<br><br>Si el usuario intenta retroceder usando <span style="color:darkorange">anterior()</span> desde esta nueva canción, <b>¿qué ocurre?</b>`,
        opciones: [
            "Retrocede a la primera canción sin problemas.",
            "Se produce un ciclo infinito entre la primera y la última canción.",
            "Se pierde la referencia hacia atrás; el puntero anterior queda en None y lanza un error al intentar leerlo."
        ],
        correcta: "c"
    },
    {
        enunciado: `Un estudiante intenta buscar un elemento que no existe en una <span style="color:darkblue">lista circular</span>. Para ello, usa un ciclo que se detiene cuando el puntero actual es <span style="color:darkorange">None</span>.<br><br><b>¿Qué ocurre al ejecutar el programa?</b>`,
        opciones: [
            "Se produce un bucle infinito porque en una lista circular el último nodo apunta a la cabeza y nunca es None.",
            "El programa se detiene correctamente al no encontrar el elemento.",
            "La lista lanza un error de desbordamiento de memoria."
        ],
        correcta: "a"
    },
    {
        enunciado: `En la playlist (lista doble), el método <span style="color:darkorange">agregar</span> evalúa <span style="color:darkorange">if not self.cabeza:</span>.<br><br>Si se agrega la primera canción y el programador olvida asignar <span style="color:darkorange">self.cola = nuevo_nodo</span> dentro de ese bloque, <b>¿qué pasa al intentar agregar la segunda canción?</b>`,
        opciones: [
            "Se lanza un error de tipo NoneType al intentar acceder a self.cola.siguiente porque la cola sigue vacía.",
            "La segunda canción se convierte en la nueva cabeza por defecto.",
            "La playlist sobrescribe la primera canción sin lanzar error."
        ],
        correcta: "a"
    },
    {
        enunciado: `Un usuario se encuentra escuchando la primera canción de la playlist y presiona el botón de retroceder, ejecutando el método <span style="color:darkorange">anterior()</span>.<br><br>El código evalúa <span style="color:darkorange">if self.actual and self.actual.anterior:</span>.<br><b>¿Cómo se comporta el programa?</b>`,
        opciones: [
            "Lanza un IndexError por intentar retroceder fuera de los límites.",
            "La condición evalúa como False, por lo que salta al else e imprime que ya está en la primera canción, manteniendo el puntero actual intacto.",
            "El puntero actual se vuelve None, perdiendo la canción actual."
        ],
        correcta: "b"
    },
    {
        enunciado: `Un usuario se encuentra en la última canción de la lista doble y ejecuta <span style="color:darkorange">siguiente()</span>.<br><br>El método evalúa <span style="color:darkorange">if self.actual and self.actual.siguiente:</span>.<br><br><b>¿Cuál es la consecuencia operativa de ejecutar esta función en este estado?</b>`,
        opciones: [
            "El programa se bloquea porque no hay validación para el final de la lista.",
            "Se ejecuta el bloque else, mostrando el mensaje de última canción, y el puntero actual no se modifica.",
            "El puntero actual salta automáticamente a la primera canción creando un comportamiento circular."
        ],
        correcta: "b"
    },
    {
        enunciado: `Al crear una <span style="color:darkblue">lista circular</span> con un solo elemento, un estudiante decide apuntar su atributo siguiente a <span style="color:darkorange">None</span>.<br><br><b>¿Qué pasa si otro módulo intenta recorrerla asumiendo su naturaleza circular?</b>`,
        opciones: [
            "El recorrido funciona normalmente porque es el único elemento.",
            "El programa lanza un error de referencia circular.",
            "La lista pierde su propiedad circular y el recorrido se detiene en el primer nodo al encontrar el None."
        ],
        correcta: "c"
    },
    {
        enunciado: `En la clase <span style="color:darkblue">Nodo</span>, el constructor <span style="color:darkorange">__init__</span> recibe el parámetro <span style="color:darkblue">dato</span> y lo asigna, pero olvida definir <span style="color:darkorange">self.siguiente = None</span>.<br><br>Si se instancia un nodo y se intenta ejecutar <span style="color:darkorange">print(nodo.siguiente)</span> inmediatamente, <b>¿qué ocurre?</b>`,
        opciones: [
            "Imprime None por defecto, ya que Python inicializa las variables vacías así.",
            "Imprime False debido a la naturaleza booleana de los punteros.",
            "Lanza un AttributeError porque el atributo siguiente no existe en la instancia hasta que se defina explícitamente."
        ],
        correcta: "c"
    },
    {
        enunciado: `Al insertar una canción entre la canción A y la canción B en la playlist, se actualizan los punteros para que A apunte a la nueva y la nueva a B.<br><br>Si se omite actualizar el puntero <span style="color:darkorange">anterior</span> de la canción B, <b>¿qué falla en el sistema?</b>`,
        opciones: [
            "El método siguiente() lanzará un error al llegar a la nueva canción.",
            "El método anterior() fallará al intentar retroceder desde la canción B, ya que su puntero hacia atrás seguiría apuntando a A.",
            "La lista se rompe y se convierte en circular automáticamente."
        ],
        correcta: "b"
    },
    {
        enunciado: `En una <span style="color:darkblue">lista circular</span>, un estudiante intenta eliminar un nodo intermedio modificando solo el puntero del nodo actual, pero olvidando actualizar el enlace del nodo anterior.<br><br><b>¿Qué consecuencia tiene esto?</b>`,
        opciones: [
            "El nodo eliminado sigue siendo parte del ciclo porque el nodo anterior aún lo referencia, por lo que se seguirá imprimiendo.",
            "La lista se vacía por completo.",
            "El nodo eliminado se borra de la memoria automáticamente."
        ],
        correcta: "a"
    }
];