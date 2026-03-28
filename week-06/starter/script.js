// ==========================================
// APRENDIZ: Jean Ojeda Rangel
// DOMINIO: APP CONTABILIDAD PYMES
// ==========================================

"use strict"; // use strict activa el modo estricto de JavaScript, lo que ayuda a prevenir errores comunes 
// y mejora la seguridad del código al deshabilitar ciertas características problemáticas del lenguaje
// esto es especialmente importante en aplicaciones contables donde la precisión y la seguridad son importantes

// --- SECCIÓN 1: Datos del dominio ---

//use el separador (_) en los montos para que sean legibles en el código (1_500_000)
const facturasPyme = [
    { cliente: "TecnoMundo", categoria: "Ingreso", monto: 1_500_000 }, // Factura 1: Venta de servicios tecnológicos
    { cliente: "Papelería Central", categoria: "Egreso", monto: 450_000 }, // Factura 2: Gasto en suministros de oficina
    { cliente: "Dato Invalido", categoria: "Egreso", monto: 0 }, // Factura 3: Registro de prueba con monto cero para usar CONTINUE
    { cliente: "Constructora Capital", categoria: "Ingreso", monto: 5_000_000 }, // Factura 4: Contrato de consultoría contable
    { cliente: "Arriendos S.A.", categoria: "Egreso", monto: 1_200_000 }, // Factura 5: Pago mensual del local comercial
    { cliente: "Energía S.A.", categoria: "Egreso", monto: 300_000 } // Factura 6: Pago de servicios públicos
];

const decoradorLineas = "=".repeat(60); // Genere una línea decorativa para separar visualmente las secciones del reporte


// --- SECCIÓN 2: Listar elementos con for...of y uso de CONTINUE ---

console.log(`\n${decoradorLineas}`); // aca coloque el decorador inicial para el listado
console.log("LISTADO DE MOVIMIENTOS (OMITIENDO REGISTROS EN CERO)"); // esta es el encabezado de la sección de listado
console.log(decoradorLineas); // y esta es la linea de separación estética

for (const factura of facturasPyme) {
    // Use el bucle for...of para recorrer cada objeto factura del array
    if (factura.monto === 0) {
        //Si el monto es cero, use CONTINUE para saltar esta iteración        continue; 
    }
    // Use toLocaleString para que el monto en consola muestre los puntos de miles (1.500.000)
    console.log(`Cliente: ${factura.cliente.padEnd(20)} | Tipo: ${factura.categoria} | Monto: $${factura.monto.toLocaleString('es-CO')}`); 
}


// --- SECCIÓN 3: Contar por categoría con for...of y contadores ---

let contadorIngresos = 0; // Inicie un contador en cero para registrar la cantidad de ingresos encontrados
let contadorEgresos = 0; // Inicie otro contador en cero para los movimientos que restan saldo (egresos)

for (const item of facturasPyme) {
    if (item.monto === 0) continue; // aca use CONTINUE para saltar los registros en cero para que no afecten el conteo
    
    if (item.categoria === "Ingreso") {
        contadorIngresos++;
    } else {
        contadorEgresos++;
    }
}


// --- SECCIÓN 4: Búsqueda de factura crítica con BREAK ---

console.log(`\n${decoradorLineas}`); // Espaciado para la nueva sección de búsqueda
console.log("BÚSQUEDA DE TRANSACCIÓN CRÍTICA (MÁS DE 4 MILLONES)"); // Título de la búsqueda

for (let x = 0; x < facturasPyme.length; x++) {
    // use el separador (_) para identificar visualmente los 4 millones en el código
    if (facturasPyme[x].monto > 4_000_000) {
        // Cuando encontramos la factura crítica, usamos BREAK para detener el bucle
        console.log(`ALERTA: Se encontró factura crítica de ${facturasPyme[x].cliente} por $${facturasPyme[x].monto.toLocaleString('es-CO')}. Deteniendo búsqueda.`);
        break; 
    }
}


// --- SECCIÓN 5: Calcular totales y promedio con acumulador y while ---

let sumaTotal = 0; // use un acumulador para guardar la suma de todos los montos de las facturas validas
let i = 0; // use una variable de control para manejar el índice dentro del bucle while

while (i < facturasPyme.length) {
    sumaTotal += facturasPyme[i].monto; // sume el monto de la factura actual al acumulador general
    i++; // incremente el índice en 1 para evitar un bucle infinito
}

const promedioVenta = sumaTotal / facturasPyme.length; // calcule el promedio financiero del periodo


// --- SECCIÓN 6: Reporte detallado con for clásico ---

console.log(`\n${decoradorLineas}`); // espaciado y decorador para el informe técnico final
console.log("REPORTE TÉCNICO DE AUDITORÍA FINANCIERA"); // título del reporte final de la pyme
console.log(decoradorLineas); // línea divisoria para organizar el informe

for (let k = 0; k < facturasPyme.length; k++) {
    const itemActual = facturasPyme[k]; 
    let estadoRespectoPromedio = itemActual.monto > promedioVenta ? "[POR ENCIMA DEL PROMEDIO]" : "[POR DEBAJO DEL PROMEDIO]";

    // formatee el monto con puntos en cada línea del listado final
    console.log(`${k + 1}. Cliente: ${itemActual.cliente.padEnd(18)} | Monto: $${itemActual.monto.toLocaleString('es-CO').padEnd(10)} | ${estadoRespectoPromedio}`);
}

// --- RESUMEN FINAL ---
console.log(decoradorLineas); // línea final decorativa
// aplique el formato con puntos al total y al promedio para un cierre profesional
console.log(`- Sumatoria Total: $${sumaTotal.toLocaleString('es-CO')}`); 
console.log(`- Promedio de Transacción: $${promedioVenta.toLocaleString('es-CO', { minimumFractionDigits: 2 })}`); 
console.log(decoradorLineas); // cierre final del sistema de reporte contable