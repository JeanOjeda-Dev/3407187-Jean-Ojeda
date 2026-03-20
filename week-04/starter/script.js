// ==========================================
// APRENDIZ: Jean Ojeda Rangel
// DOMINIO: APP CONTABILIDAD PYMES
// ==========================================

"use strict"; // use strict activa el modo estricto de JavaScript, lo que ayuda a prevenir errores comunes 
// y mejora la seguridad del código al deshabilitar ciertas características problemáticas del lenguaje. 
// Esto es especialmente importante en aplicaciones contables donde la precisión y la seguridad son importantes.


// --- SECCIÓN 1: Datos del dominio usando diferentes strings ---

const mainEntity = "   sistema de contabilidad pymes   "; // esta variable almacena el nombre del sistema contable 
// que ademas tiene una cadena de texto que incluye espacios al inicio y al final para luego usar el metodo trim y limpiar esos espacios.
const softwareCategory = "Gestión Financiera y Contable"; // aca defini la categoria del software como una cadena de texto para describir el tipo de aplicación que es
const softwareCode = "ACC-PYME-2026"; // aca se define un código único para el software contable

//aca estamos dando la descripción del software utilizando una plantilla de texto template literal que permite incluir saltos de línea 
// y formato para describir las funcionalidades y características del sistema contable de manera clara y estructurada.
const softwareDescription = `Este sistema es una unidad integral de gestion financiera para empresas.
Comienza con el registro de ingresos y termina con reportes fiscales detallados.
Cada modulo trata sobre una idea central de la economia de la pyme.
La primera seccion suele explicitar cual es el punto principal de la auditoria.`;

const isAvailable = "Sí"; // esta variable nos va a indicar si esta disponible el sistema para su uso
//  y se define como una cadena de texto con el valor "Sí" para indicar que el sistema está disponible.


// --- SECCIÓN 2: 5 Métodos de String --- 


const entityClean = mainEntity.trim(); // 1. Metodo trim este sirve para eliminar los espacios en blanco al inicio y al final de la cadena de texto almacenada en mainEntity
//  lo que facilita por decirlo asi la limpieza del nombre del sistema contable sin espacios adicionales.
const entityUpper = entityClean.toUpperCase(); // 2. Metodo toUpperCase este metodo convierte toda la cadena de texto almacenada en entityClean a mayúsculas
//  lo que puede ser útil para resaltar el nombre del sistema contable en la ficha técnica o para estandarizar su presentación.
const releaseYear = softwareCode.slice(-4); // 3. Metodo slice este metodo extrae los últimos 4 caracteres de la cadena de texto almacenada en softwareCode, lo que nos da el año de lanzamiento del software contable,
//  en este caso, "2026", lo que puede ser útil para mostrar información relevante sobre la versión del software en la ficha técnica.
const modernDescription = softwareDescription.replace("Plataforma", "Ecosistema"); // 4. Metodo replacen este metodo reemplaza la palabra "Plataforma" por "Ecosistema" en la cadena de texto almacenada en softwareDescription,
//  lo que puede ser útil para actualizar la descripción del software contable y darle un tono más moderno o innovador.
const decorator = "=".repeat(60); // 5. Metodo repeat (genera la linea decorativa)


// --- 3: Validaciones ---

const checkCode = softwareCode.startsWith("ACC"); //metodo startsWith este metodo verifica si la cadena de texto almacenada en softwareCode comienza con "ACC"
//  y devuelve true si es asi, lo que puede ser útil para verificar si el código del software es correcto.
const checkDescription = softwareDescription.includes("reportes"); // metodo includes este metodo verifica si la cadena de texto almacenada en softwareDescription contiene "reportes"
//  y devuelve true si es asi, lo que puede ser útil para verificar si la descripción del software es correcta.


// --- SECCIÓN 4: Construcción de Salida (Template Literals) ---


//aca estamos construyendo la ficha técnica del software contable utilizando template literals
const accountingCard = `
${decorator}
  ${entityUpper} — FICHA TÉCNICA
${decorator}
Entidad:     ${entityUpper}
Categoría:   ${softwareCategory}
Código:      ${softwareCode}
Descripción: ${modernDescription}
Disponible:  ${isAvailable}

--- Validaciones ---
¿Código empieza con ACC?: ${checkCode}
¿Descripción contiene 'reportes'?: ${checkDescription}

--- Mensaje de notificación ---
 Nueva herramienta disponible: ${entityClean} (${softwareCode})
${decorator}`;

//const accountingCard = ` //esto es para probar el template literal
//${decorator}  //aca se define la linea decorativa
// ${entityUpper} — FICHA TÉCNICA //aca se define el titulo de la ficha tecnica
//${decorator} //aca se define la linea decorativa
//Entidad:     ${entityClean} //aca se define la entidad
//Categoría:   ${softwareCategory} //aca se define la categoria
//Código:      ${softwareCode} //aca se define el codigo
//Descripción: ${modernDescription} //aca se define la descripcion
//Disponible:  ${isAvailable} //aca se define si esta disponible
//¿Código empieza con ACC?: ${checkCode} //aca se define si el codigo empieza con ACC
//¿Descripción contiene 'reportes'?: ${checkDescription} //aca se define si la descripcion contiene 'reportes'
// Nueva herramienta disponible: ${entityClean} (${softwareCode})  //aca se define el mensaje de notificación
//${decorator}`;//aca se define la linea decorativa



// --- SECCIÓN 5: Impresión en Consola ---


console.log(accountingCard); //aca se imprime la ficha técnica

// Cierre de ficha con los metodos requeridos
console.log(`\n${"=".repeat(60)}`); //aca se imprime la linea decorativa


