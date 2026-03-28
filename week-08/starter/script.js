// ==========================================
// APRENDIZ: Jean Ojeda Rangel
// DOMINIO: APP CONTABILIDAD PYMES
// ==========================================

"use strict"; // use strict activa el modo estricto de JavaScript, lo que ayuda a prevenir errores comunes 
// y mejora la seguridad del código al deshabilitar ciertas características problemáticas del lenguaje
// esto es especialmente importante en aplicaciones contables donde la precisión y la seguridad son importantes


// --- SECCIÓN 1: Constantes y datos del dominio ---


const DOMAIN_NAME = "Sistema Contable PYME - Módulo de Auditoría"; // esta constante almacena el nombre principal de nuestro dominio para los encabezados
const TAX_RATE = 0.19; // aca defini la tasa del IVA del 19% como una constante global para cálculos impositivos
const CURRENCY = "COP"; // aca estableci el código de la moneda local para formatear los resultados económicos

// aca cree un array de objetos con montos usando separadores numéricos (_) para mayor legibilidad en el código
const facturasPyme = [
    { id: 101, cliente: "TecnoMundo", categoria: "Servicios", monto: 1_500_000, activo: true }, // factura de ingreso por servicios tecnológicos
    { id: 102, cliente: "Papelería Central", categoria: "Suministros", monto: 450_000, activo: false }, // registro anulado o inactivo por error de digitación
    { id: 103, cliente: "Constructora Capital", categoria: "Honorarios", monto: 5_000_000, activo: true }, // contrato de consultoría de alto valor
    { id: 104, cliente: "Arriendos S.A.", categoria: "Infraestructura", monto: 1_200_000, activo: true }, // pago de arrendamiento mensual
    { id: 105, cliente: "Suministros Bogotá", categoria: "Insumos", monto: 2_800_000, activo: true } // venta de licencias y suministros
];


// --- SECCIÓN 2: Función de formato (Arrow Function) ---

// aca implemente una arrow function que recibe un objeto factura y devuelve un string formateado con puntos de miles
// aca eliminé los emojis para mantener un estilo de reporte estrictamente profesional
const formatFactura = (factura) => 
    `[ID:${factura.id}] ${factura.cliente.padEnd(20)} | Categoría: ${factura.categoria.padEnd(15)} | Monto: $${factura.monto.toLocaleString('es-CO')}`;


// SECCIÓN 3: Función de cálculo 

// aca implemente una función pura que calcula el valor del IVA a partir de un monto base y una tasa opcional
const calcularIVA = (montoBase, tasa = TAX_RATE) => {
    // multiplique el monto por la tasa para obtener el valor del impuesto
    return montoBase * tasa;
};


// --- SECCIÓN 4: Función de validación ---

// aca implemente una función que verifica si una factura es válida para el cierre contable basándose en su propiedad 'activo'
const esFacturaValida = (factura) => {
    // evaluamos si el estado de la factura es verdadero para proceder con su registro
    return factura.activo === true;
};


// --- SECCIÓN 5: Función con parámetro por defecto ---

// aca implemente una función para formatear el resumen de totales con etiquetas personalizables y formato de moneda local
const formatResumen = (valor, etiqueta = "TOTAL", moneda = CURRENCY) => {
    // aca retornamos el string combinado usando toLocaleString para mostrar los puntos separadores de miles
    return `${etiqueta}: ${moneda} $${valor.toLocaleString('es-CO')}`;
};


// --- SECCIÓN 6: Reporte usando funciones como Callbacks ---

// aca iniciamos la generación del reporte visual en la consola utilizando los decoradores de línea
console.log(`\n${"═".repeat(65)}`); // línea decorativa superior
console.log(`   REPORTE TÉCNICO — ${DOMAIN_NAME}`); // título centrado del reporte
console.log(`${"═".repeat(65)}`); // línea decorativa de separación

// aca verifique si el array tiene datos para procesar antes de iniciar los bucles
if (facturasPyme.length === 0) {
    // si no hay datos, enviamos una notificación de sistema al usuario
    console.log("\nAVISO: No se encontraron registros contables en la base de datos.");
} else {
    // --- Listado General ---
    console.log("\nLISTADO DE REGISTROS:"); // Encabezado de la lista
    let contadorLineas = 1; // Inicializamos un contador para numerar las líneas del reporte
    
    for (const item of facturasPyme) {
        // recorri las facturas y usamos nuestra arrow function 'formatFactura' como callback de formato
        console.log(`  ${contadorLineas}. ${formatFactura(item)}`);
        // incremente el contador en cada iteración
        contadorLineas++;
    }

    // --- Procesamiento de Datos Válidos ---
    let sumaSubtotal = 0; // acumulador para los montos netos de las facturas
    let facturasProcesadas = 0; // contador para las facturas que pasaron la validación

    for (const factura of facturasPyme) {
        // aplique la función de validación 'esFacturaValida' para filtrar registros inactivos
        if (esFacturaValida(factura)) {
            // si es válida, sume su monto al acumulador general
            sumaSubtotal += factura.monto;
            // aumente el conteo de registros efectivos
            facturasProcesadas++;
        }
    }

    // calcule el IVA total de todas las facturas válidas usando nuestra función pura
    const ivaTotalCalculado = calcularIVA(sumaSubtotal);
    // sume el subtotal y el IVA para obtener el gran total financiero
    const granTotalFinal = sumaSubtotal + ivaTotalCalculado;

    // --- Resumen de Resultados ---
    console.log(`\n${"-".repeat(65)}`); // divisor para la sección de resultados
    console.log(`Registros válidos analizados: ${facturasProcesadas} de ${facturasPyme.length}`);
    
    // mostre los resultados finales usando nuestra función formatResumen que ya incluye toLocaleString
    console.log(`  > ${formatResumen(sumaSubtotal, "SUBTOTAL NETO")}`);
    console.log(`  > ${formatResumen(ivaTotalCalculado, "IMPUESTOS (IVA)")}`);
    console.log(`  > ${formatResumen(granTotalFinal, "TOTAL GENERAL")}`);
}

console.log(`\n${"═".repeat(65)}\n`); // línea decorativa final para cerrar el reporte contable