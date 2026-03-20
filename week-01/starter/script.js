// FICHA DE REGISTRO - APP CONTABILIDAD PYMES       
// Nombre del estudiante: Jean Ojeda Rangel
// --- SECCIÓN 1 ---
// Utilize una cadena de caracteres (String) para crear un marco visual
// Esto mejora la experiencia del usuario al leer la consola del navegador
console.log("=========================================");

// El titulo tambien lo hice de tipo String.
// Tambien inclui un identificador único para el control de versiones del registro.
console.log("    APP CONTABILIDAD PYMES - FICHA #001");

console.log("=========================================");

// --- SECCIÓN 2 ---
// El uso de '\n' es un salto de línea 
// Es como un espaciado para que el codigo se vea más organizado.
console.log("\nINFORMACIÓN GENERAL");
console.log("--------------------");

// Definición de atributos principales de la aplicación.
// Todos estos valores se manejan como Strings osea cadenas de texto.
console.log("Nombre:          App Contabilidad PYMES");
console.log("Código:          ACC-PYME-2024");
console.log("Categoría:       Software - Contabilidad Empresarial");

// Estado operativo del sistema:
// Lo representé con un valor Booleano lo que significa true/false.
// Al enviarlo como segundo argumento en console.log despues de la coma, 
// el motor de JS lo toma como un valor lógico real, no como texto.
console.log("Estado:          ", true);// Esto indica que la aplicación está operativa (true) o no (false).

// --- SECCIÓN 3 ---
// En esta sección gestionamos datos de tipo Number y operaciones lógicas.
console.log("\nDETALLES TÉCNICOS Y COSTOS");
console.log("--------------------");

// Representación de cantidades enteras para usuarios y empresas.
// Estos valores son de tipo Number, lo que permite realizar cálculos futuros si es necesario.
console.log("Usuarios:        ", 150);
console.log("Empresas:        ", 45);

// Valor monetario de la suscripción (Number). 
// JavaScript no requiere declarar si es float o int, ambos son Number.
console.log("Precio Mensual:  ", 150000);

/**
 * En lugar de imprimir un valor estático, realizamos un cálculo en tiempo de ejecución.
 * Multiplicamos el precio base por 0.8 para obtener el 80% aplicando un 20% de descuento.
 * El resultado sigue siendo un dato de tipo Number.
 */
console.log("Con Descuento:   ", 150000 * 0.8);

// Flags de configuración del sistema (Booleanos).
// flags son indicadores que pueden activar o desactivar ciertas funcionalidades dentro de la aplicación.
// Permiten controlar flujos condicionales (if/else) en el despliegue de la App.
console.log("Disponible:      ", true);
console.log("Soporte Activo:  ", true);

// --- SECCIÓN 4 ---
// Información específica sobre el alcance del proyecto dentro del entorno académico.
console.log("\nRESUMEN DEL ALCANCE");
console.log("--------------------");

// El dominio define el área de negocio que el software busca solucionar.
// En este caso, es una aplicación de contabilidad dirigida a pequeñas y medianas empresas (PYMES).
console.log("Dominio:         APP CONTABILIDAD PYMES");

// La entidad se refiere al tipo de sistema o producto que se está desarrollando.
// En este caso, es una aplicación de software, lo que implica que se trata de un producto digital con funcionalidades específicas para la gestión contable.
console.log("Entidad:         Aplicación de Software");

// El número de módulos es un dato de tipo Number que indica la cantidad de componentes o funcionalidades principales que se han planificado para la aplicación.
console.log("Total módulos:   ", 8);

// --- SECCIÓN 5: ---
// Línea de cierre que delimita el fin de la ejecución del script de la ficha.
console.log("=========================================");
console.log("  Ficha generada con JavaScript ES2023");
console.log("=========================================");
