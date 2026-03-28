// ==========================================
// APRENDIZ: Jean Ojeda Rangel
// DOMINIO: APP CONTABILIDAD PYMES
// ==========================================

"use strict"; // use strict activa el modo estricto de JavaScript, lo que ayuda a prevenir errores comunes 
// y mejora la seguridad del código al deshabilitar ciertas características problemáticas del lenguaje
// esto es especialmente importante en aplicaciones contables donde la precisión y la seguridad son importantes

// --- SECCIÓN 1: Datos del elemento (5 variables de dominio) ---

const empresaNombre = "Distribuidora de Café Bogotá"; // esta variable almacena el nombre de la pyme cliente en el sistema

//use el separador numérico (_) para que el valor de 35 millones sea fácil de leer en el código fuente
const ingresosMensuales = 35_000_000; // aca defini el valor numérico de los ingresos del mes para realizar los cálculos de clasificación   

const tipoRegimen = "Responsable de IVA"; // defini una cadena de texto para identificar la categoría tributaria de la empresa ante la DIAN
const auditoriaConfig = { 
    detalles: { 
        ultimaRevision: "2026-03-15" 
    } 
}; // defini un objeto anidado para practicar el acceso seguro a los datos de las revisiones contables
const observacionesEspeciales = null; // esta variable se inicializa en null para demostrar el uso del operador de nulidad en reportes vacíos


// --- SECCIÓN 2: Clasificación con if / else if / else ---

let categoriaPyme; // esta variable guardara el resultado de la clasificación por tamaño

// aca compruebo los ingresos usando los separadores numéricos para mantener la coherencia y legibilidad del código
if (ingresosMensuales < 10_000_000) {
    // Si los ingresos son menores a 10 millones, el sistema la etiqueta como Microempresa para aplicar beneficios de ley
    categoriaPyme = "Microempresa";
} else if (ingresosMensuales >= 10_000_000 && ingresosMensuales <= 50_000_000) {
    // Si los ingresos están en el rango de 10 a 50 millones, se clasifica como Pequeña Empresa según el estándar del software
    categoriaPyme = "Pequeña Empresa";
} else {
    // Si los ingresos superan los 50 millones, el sistema automáticamente la sube a la categoría de Mediana Empresa
    categoriaPyme = "Mediana Empresa";
}


// --- SECCIÓN 3: Estado con operador ternario ---

// Use el operador ternario para determinar de forma rápida si la empresa tiene movimiento financiero o no
// Si ingresosMensuales es mayor a cero, el estado es "Activo", de lo contrario se marca como "Sin Actividad"
const estadoOperativo = ingresosMensuales > 0 ? "Activo" : "Sin Actividad";


// --- SECCIÓN 4: Clasificación de prioridad con switch ---

let nivelPrioridad; // aca defino la variable para el nivel de atención que el contador debe darle a esta pyme

switch (tipoRegimen) {
    case "Responsable de IVA":
        // Para este régimen las obligaciones son constantes, por lo que el sistema asigna una prioridad de atención Alta
        nivelPrioridad = "Alta (Declaraciones Mensuales)";
        break;
    case "Régimen Simple":
        // Al ser un régimen simplificado, los reportes son menos frecuentes y la prioridad se establece como Media
        nivelPrioridad = "Media (Reportes Anuales)";
        break;
    default:
        // Si el régimen no coincide con los anteriores, se asigna una prioridad Estándar por seguridad del sistema
        nivelPrioridad = "Estándar (Revisión General)";
}


// --- SECCIÓN 5: Valor por defecto con Nullish Coalescing ( ?? ) ---

// Use el operador ?? para asegurar que el reporte no muestre un valor nulo si no hay observaciones
// Si observacionesEspeciales es null, el sistema imprimirá "Sin alertas pendientes" automáticamente
const alertaReporte = observacionesEspeciales ?? "Sin alertas pendientes de auditoría.";


// --- SECCIÓN 6: Acceso seguro con Optional Chaining ( ?. ) ---

// aca uso el acceso seguro para entrar a las propiedades del objeto auditoriaConfig
// esto evita que el programa se detenga si por alguna razón la propiedad 'detalles' no llegara a existir
const fechaRevision = auditoriaConfig?.detalles?.ultimaRevision;


// --- SECCIÓN 7: Ficha de salida con Template Literals y Formato de Moneda ---

const separador = "=".repeat(50); // use el método repeat para generar una línea visual que organice el reporte final

// converti el número a formato de moneda con puntos (ej: 35.000.000) usando toLocaleString
// el parámetro 'es-CO' asegura que use el formato específico de pesos colombianos
const ingresosFormateados = ingresosMensuales.toLocaleString('es-CO');

// generamos la ficha técnica utilizando plantillas de texto que permiten una presentación limpia y profesional del informe contable
console.log(`
${separador}
        INFORME DE CLASIFICACIÓN CONTABLE 2026
${separador}
>> EMPRESA: ${empresaNombre}
>> CONTADOR RESPONSABLE: Jean Ojeda Rangel
>> ÚLTIMA AUDITORÍA: ${fechaRevision}
--------------------------------------------------
>> INGRESOS BRUTOS: $${ingresosFormateados}
>> CLASIFICACIÓN TÉCNICA: ${categoriaPyme}
>> ESTADO DE OPERACIÓN: ${estadoOperativo}
>> NIVEL DE PRIORIDAD: ${nivelPrioridad}
-------------------------------------------
>> NOTAS DE CAMPO: ${alertaReporte}
${separador}
`);