import { desarrolloWebParcial1 } from "./desarrolloweb/parcial1.js";
import { desarrolloWebParcial2 } from "./desarrolloweb/parcial2.js";
import { desarrolloWebParcial3 } from "./desarrolloweb/parcial3.js";
import { fundamentosProgramacionParcial1 } from "./fundamentosprogramacion/parcial1.js";

//Espacia para parcial 2 y 3 fundamentos
//faltas producto1 parcial 1
import { producto2Pacial2 } from "./producto2/parcial2.js";
//Espacia para parcial final producto 2
import {cleancodeparcial2} from "./cleancode/parcial2.js"

import { estructuradatosparcial2 } from "./estructuradatos/parcial2.js";

export const examenes = {
    "Desarrollo web": {
        "Parcial I": desarrolloWebParcial1,
        "Parcial II": desarrolloWebParcial2,
        "Parcial III": desarrolloWebParcial3
    },

    "Fundamentos programacion": {
        "Parcial I": fundamentosProgramacionParcial1
    },

    "Producto II": {
        "Parcial II": producto2Pacial2        
    },
    
    "clean code": {
        "Parcial II": cleancodeparcial2 
    },

    "Estructura de datos":{
        "Parcial II": estructuradatosparcial2
    }

};

