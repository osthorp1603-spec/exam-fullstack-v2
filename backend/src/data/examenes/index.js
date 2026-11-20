import { desarrolloWebParcial1 } from "./desarrolloweb/parcial1.js";
import { desarrolloWebParcial2 } from "./desarrolloweb/parcial2.js";
import { desarrolloWebParcial3 } from "./desarrolloweb/parcial3.js";
/////////////////////////////////////////////////////////////////////////
import { fundamentosProgramacionParcial1 } from "./fundamentosprogramacion/parcial1.js";
import { fundamentosProgramacionParcial2 } from "./fundamentosprogramacion/parcial2.js";

//faltas producto1 parcial 1
import { producto2Pacial2 } from "./producto2/parcial2.js";
import { producto2Pacial3 } from "./producto2/parcial3.js";
//////////////////////////////////////////////////////////////////////////////////
import {cleancodeparcial2} from "./cleancode/parcial2.js";
import {cleancodeparcial3 } from "./cleancode/parcial3.js";
/////////////////////////////////////////////////////////////////////////////////////
import { estructuradatosparcial2 } from "./estructuradatos/parcial2.js";
import { estructuradatosparcial3 } from "./estructuradatos/parcial3.js";
///////////////////////////////////////////////////////////////////////////////////////
import { diagnosticoyredesparcial2 } from "./diagnosticoyredes/parcial2.js";

import { patronesparcial2 } from "./patrones/parcial2.js";

import { modelamientoparcial2 } from "./modelamiento/parcial2.js";

import { programacionparcial2 } from "./programacionI/parcial2.js";

import { logicaparcial2 } from "./logica/parcial2.js";


export const examenes = {
    "Desarrollo web": {
        "Parcial I": desarrolloWebParcial1,
        "Parcial II": desarrolloWebParcial2,
        "Parcial III": desarrolloWebParcial3
    },

    "Fundamentos programacion": {
        "Parcial I": fundamentosProgramacionParcial1,
        "Parcial II": fundamentosProgramacionParcial2
    },

    "Producto II": {
        "Parcial II": producto2Pacial2,
        "Parcial III": producto2Pacial3        
    },
    
    "clean code": {
        "Parcial II": cleancodeparcial2,
        "Parcial III": cleancodeparcial3
    },

    "Estructura de datos":{
        "Parcial II": estructuradatosparcial2,
        "Parcial III": estructuradatosparcial3
    },

    "Diagnostico y redes":{
        "Parcial II": diagnosticoyredesparcial2
    },
    
    "Patrones de diseño":{
        "Parcial II": patronesparcial2
    },

    "Modelamiento base de datos":{
        "Parcial II": modelamientoparcial2
    },

    "Programacion I": {
        "Parcial II": programacionparcial2
    },

    "Logica matematicas":{
        "Parcial II": logicaparcial2
    }

};

