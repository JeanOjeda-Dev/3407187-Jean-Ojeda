
// ==========================================
// APRENDIZ: Jean Ojeda Rangel
// DOMINIO: APP CONTABILIDAD PYMES
// ==========================================

"use strict";// use strict activa el modo estricto de JavaScript, lo que ayuda a prevenir errores comunes 
// y mejora la seguridad del código al deshabilitar ciertas características problemáticas del lenguaje. 
// Esto es especialmente importante en aplicaciones contables donde la precisión y la seguridad son importantes.


const monthlySales = 5_500_000;//aca defini la variable monthlySales lo que significa ventas mensuales, 
// y se refiere a que es un número que representa el total de ingresos generados por la aplicación en un mes.
const operatingCosts = 1_200_000;//aca defini la variable operatingCosts lo que significa costos operativos,
// y se refiere a que es un número que representa el total de gastos relacionados con el funcionamiento de la aplicación en un mes, 
// incluyendo costos como salarios, infraestructura, licencias, etc.
const taxRate = 0.19;//aca defini la variable taxRate lo que significa tasa de impuestos,
// y se refiere a que es un número decimal que representa el porcentaje de impuestos que se aplican a las ganancias de la aplicación, 
// en este caso, el 19% es una tasa común de impuestos para empresas en muchos países.

const netProfit = (monthlySales - operatingCosts) * (1 - taxRate);// La fórmula calcula la utilidad neta al primero obtener la utilidad bruta ventas menos costos
// y luego aplica el impuesto para obtener la cantidad final que representa las ganancias netas de la aplicación.


const projectedSales = monthlySales * (1.10 ** 2);//aca se calcula la proyección de ventas a 2 meses utilizando la fórmula de crecimiento compuesto, 
// donde se multiplica las ventas mensuales por el factor de crecimiento 1.10 elevado al número de períodos osea 2 meses.


const isEvenSales = monthlySales % 2 === 0;//aca se determina si las ventas mensuales son un número par utilizando el operador módulo (%), 
// que devuelve el residuo de la división de monthlySales entre 2. Si el resultado es 0, entonces las ventas son pares, y la variable isEvenSales se establece en true y si no dira false.


const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',//style: 'currency' esto es mas que todo para que aparezca el simbolo peso
    currency: 'COP',//currency: 'COP' esto es para especificar que la moneda a utilizar es el peso colombiano (COP)
    minimumFractionDigits: 0//minimumFractionDigits: 0 esto es para indicar que no se deben mostrar decimales en el formato de moneda, lo que es común en la presentación de montos en pesos colombianos.
});

console.log("\n==========================================");
console.log("--- RESUMEN CONTABLE ---");
console.log("===========================================");
console.log("Utilidad Neta Actual: " + formatter.format(netProfit));//aca se muestra en la consola el resultado de la utilidad neta actual formateada como moneda colombiana utilizando el formatter definido anteriormente.
console.log("Proyección a 2 meses: " + formatter.format(projectedSales));//aca se muestra en la consola el resultado de la proyección de ventas a 2 meses 
console.log("¿Ventas totales son número par?:", isEvenSales);//aca se muestra en la consola si las ventas mensuales son un número par o no, utilizando el valor booleano almacenado en isEvenSales.



let accountBalance = 10_000_000;//aca se define la variable accountBalance lo que significa saldo de cuenta, y se refiere a que es un número que representa el monto total de dinero disponible en la cuenta bancaria de la aplicación contable,
// y se inicializa con un valor de 10 millones, lo que indica el saldo inicial antes de realizar cualquier movimiento financiero.

accountBalance += 1_500_000;// Ingreso (+=)
accountBalance -= 500_000; // Gasto (-=)
accountBalance *= 1.02;// Interés ganado 2% (*=)
accountBalance /= 2;// Dividir saldo para reserva legal (/=)

console.log("\n--- MOVIMIENTOS DE CAJA ---");
console.log("Saldo final tras reserva: " + formatter.format(accountBalance));//aca se muestra en la consola el saldo final de la cuenta después de realizar los movimientos financieros, 
// de igual manera formateado como moneda colombiana utilizando el formatter definido anteriormente.


const userRole = "admin";//aca se define la variable userRole lo que significa rol de usuario, y se refiere a que es una cadena de texto que representa el nivel de acceso o permisos que tiene un usuario dentro de la aplicación contable,
// en este caso, se asigna el valor "admin", lo que indica que el usuario tiene privilegios administrativos y puede acceder a funciones avanzadas o configuraciones de la aplicación.
const invoiceStatus = "active";//aca se define la variable invoiceStatus lo que significa estado de la factura, y se refiere a que es una cadena de texto que representa el estado actual de una factura dentro de la aplicación contable,
// en este caso, se asigna el valor "active", lo que indica que la factura está vigente y puede ser procesada o cobrada, a diferencia de estados como "cancelled" o "pending" que podrían indicar restricciones en su manejo.


const isAdmin = userRole === "admin";//aca se valida si el rol de usuario es "admin" utilizando el operador de igualdad estricta (===), lo que asegura que el tipo de dato también sea el mismo, 
// y si la condición se cumple, la variable isAdmin se establece en true, indicando que el usuario tiene privilegios administrativos, de lo contrario, se establecerá en false.

const isValidInvoice = invoiceStatus !== "cancelled";//aca se valida si el estado de la factura no es "cancelled" utilizando el operador de desigualdad estricta (!==), lo que asegura que el tipo de dato también sea el mismo, 
// y si la condición se cumple, la variable isValidInvoice se establece en true, indicando que la factura es válida para ser procesada, de lo contrario, se establecerá en false.


console.log("--- SEGURIDAD Y VALIDACIÓN ---");
console.log("¿Acceso concedido?:", isAdmin);//aca se muestra en la consola si el acceso está concedido o no, 
// utilizando el valor booleano almacenado en isAdmin, lo que indica si el usuario tiene privilegios administrativos para acceder a funciones avanzadas de la aplicación contable.
console.log("¿Factura apta para cobro?:", isValidInvoice);//aca se muestra en la consola si la factura es apta para cobro o no, utilizando el valor booleano almacenado en isValidInvoice,
// lo que indica si el estado de la factura permite que sea procesada o cobrada dentro de la aplicación contable.



const hasBalance = accountBalance > 0;//aca se valida si el saldo de la cuenta es mayor que cero utilizando el operador de comparación mayor que (>), 
// lo que indica que hay fondos disponibles para realizar operaciones financieras, y si la condición se cumple, la variable hasBalance se establece en true, 
// indicando que hay saldo positivo en la cuenta, de lo contrario, se establecerá en false.
const isVipClient = true;//aca se define la variable isVipClient lo que significa cliente VIP, y se refiere a que es un valor booleano que indica si el cliente es considerado VIP (Very Important Person) dentro de la aplicación contable,
// lo que podría otorgarle beneficios especiales, descuentos o acceso a servicios exclusivos, y en este caso se establece en true, indicando que el cliente es VIP.

// Ejemplo de || (OR): Si hay saldo o es cliente VIP, se puede procesar la acción
const canProcessAction = hasBalance || isVipClient;

// Ejemplo de ! (NOT): Si NO hay error
const hasError = false;//aca se define la variable hasError lo que significa hay error, 
// y se refiere a que es un valor booleano que indica si hay un error presente en el sistema contable,
//  lo que podría afectar la capacidad de procesar operaciones o generar informes precisos, 
// y en este caso se establece en false, indicando que no hay errores en el sistema.
const systemReady = !hasError;

console.log("\n--- ESTADO DEL SISTEMA ---");
console.log("¿Puede procesar operación?:", canProcessAction);
console.log("¿Sistema listo?:", systemReady);

// Evitamos: monthlySales + "100" -> Daría 5500000100 ya que se concatenaría el número con la cadena de texto, 
// lo que no es correcto para cálculos financieros.
const safeTotal = monthlySales + Number("100"); // Conversión explícita correcta

console.log("\n===========================================");
console.log("FIN DE FICHA - JavaScript ES2023");
console.log("===========================================");