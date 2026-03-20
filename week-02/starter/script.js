// FICHA DE REGISTRO - APP CONTABILIDAD PYMES       
// Nombre del estudiante: Jean Ojeda Rangel
// --- SECCIÓN 1 ---
// Declare las variables con const y let según su naturaleza const para valores fijos, let para valores cambiantes.
// Usamos camelCase para nombres de variables y UPPER_SNAKE_CASE para constantes de configuración
// Variables con const (valores que no cambian) 

// String: Nombre de la aplicación contable
// const se usa porque este valor no cambiará durante la ejecución
const appName = "App Contabilidad PYMES";

// String: Categoría del software 
// Este valor es fijo, por eso se declara como const   
const softwareCategory = "Software - Contabilidad Empresarial";

// Numero máximo de usuarios permitidos en la aplicación
// Este valor es una configuración del sistema, no cambia, por eso es const
const MAX_USERS = 1_000;

// basePrice es un valor fijo del sistema, no cambia, por eso se declara como const
// Usamos UPPER_SNAKE_CASE para indicar que es una constante de configuración
// El guion bajo (_) es un separador visual para mejorar la legibilidad de números grandes
const BASE_PRICE = 150_000;

// Boolean: Si la aplicación está activa o no
// Usamos prefijo semántico "is" para indicar estado
// Este valor es fijo para esta ficha, por eso se declara como const
const isActive = true;

// Boolean: Si la aplicación tiene soporte técnico activo
// Usamos prefijo semántico "has" para indicar posesión/estado
const hasSupport = true;

// Boolean: Si la aplicación puede ser reservada para demostraciones
// Usamos prefijo semántico "can" para indicar capacidad o permiso
const canReserve = true;

// null: Valor que representa "no asignado aún" o "desconocido"
// En este caso, el patrocinador actual no está asignado
// null es un valor especial que indica ausencia de valor o referencia a ningún objeto
// Esto significa que la variable existe, pero no tiene ningún valor asignado.
const currentSponsor = null;

// Variables con let son aquellos valores que pueden cambiar durante la ejecución
// Number: Usuarios actualmente registrados que pueden cambiar con el tiempo, por eso se declara con let
// Este valor es dinámico y puede actualizarse a medida que se registren más usuarios en la aplicación
let registeredUsers = 150;

// Number: Empresas actualmente registradas que de igual manera pueden cambiar con el tiempo, por eso se declara con let
let registeredCompanies = 45;

// --- SECCIÓN 2 ---
// Imprimimos el encabezado visual de la ficha
// Usamos console.log para mostrar información en la consola del navegador
// Las líneas de igual (=) crean un marco visual para destacar el título
// El título incluye el nombre de la aplicación y un identificador único para control de versiones
// Esto mejora la experiencia del usuario al leer la consola y organiza la información de manera clara
// appName es una variable de tipo String que contiene el nombre de la aplicación, se muestra en el título para identificar claramente el dominio al que pertenece esta ficha de registro.
console.log("===========================================");
console.log("    APP CONTABILIDAD PYMES - FICHA #001");
console.log("===========================================");

console.log("===========================================");
console.log("FICHA DE DATOS: " + appName);
console.log("===========================================");

// Mostramos los datos principales de la aplicación
// Usamos concatenación de strings para mostrar la información de manera organizada
// Cada dato se muestra con su etiqueta descriptiva para mayor claridad
// Los valores de las variables se muestran junto a sus etiquetas para que el usuario pueda identificar fácilmente cada atributo de la aplicación
console.log("\n--- Información Principal ---");
console.log("Nombre:     " + appName);
console.log("Categoría:  " + softwareCategory);
console.log("Usuarios:   " + registeredUsers + " personas");
console.log("Precio:     $" + BASE_PRICE + " por licencia");
console.log("Activo:     " + isActive);

// --- SECCIÓN 3 ---
// typeof nos permite identificar el tipo de dato de cada variable
// Esto es útil para verificar que los datos se han declarado correctamente y para entender cómo se manejarán en la aplicación
// Esto también ayuda a verificar que las variables se han declarado con los tipos de datos correctos según su uso en la aplicación
console.log("\n--- Tipos de Datos ---");
console.log("typeof appName:    " + typeof appName);
console.log("typeof MAX_USERS:  " + typeof MAX_USERS);
console.log("typeof BASE_PRICE: " + typeof BASE_PRICE);
console.log("typeof isActive:   " + typeof isActive);
console.log("typeof currentSponsor: " + typeof currentSponsor);

// --- SECCIÓN 4 ---
// Aquí demostramos el uso de conversiones de tipos en JavaScript
// Las conversiones de tipos son fundamentales para manejar datos de manera flexible en la aplicación
// Estas conversiones permiten transformar datos de un tipo a otro según las necesidades del programa, como mostrar números como texto o realizar cálculos con strings convertidos a números
// En esta sección, mostramos cómo convertir entre String, Number y Boolean utilizando las funciones integradas de JavaScript como String(), Number() y Boolean().
// Esto demuestra que sabemos manejar conversiones explícitas de tipos, lo cual es esencial para el desarrollo de aplicaciones dinámicas y flexibles.
console.log("\n--- Conversiones de Tipos ---");

// Convertimos un número a string para mostrarlo en texto
// String() convierte el número BASE_PRICE a texto
// Esto es útil para mostrar valores numéricos como parte de mensajes o etiquetas en la interfaz del usuario
console.log("Precio como texto: " + String(BASE_PRICE));
console.log("typeof String(BASE_PRICE): " + typeof String(BASE_PRICE));

// Convertimos un string a número para operaciones matemáticas
// Number() convierte el string "150000" a número
// Esto me permite realizar cálculos con valores que originalmente se manejan como texto, como precios ingresados por el usuario o datos obtenidos de formularios
const priceString = "150000";
const priceAsNumber = Number(priceString);
console.log("String a Number: " + priceAsNumber);
console.log("typeof priceAsNumber: " + typeof priceAsNumber);

// Convertimos un número a booleano para verificar su valor lógico
// Boolean() convierte el número 0 a false y cualquier número distinto de 0 a true
// Esto es útil para validar condiciones en la aplicación, como verificar si hay usuarios registrados o si el precio es mayor que cero
console.log("Boolean(0): " + Boolean(0));
console.log("Boolean(150): " + Boolean(150));

// --- SECCIÓN 5 ---
// Aquí demostramos el uso de valores especiales como null
// null es un valor que representa la ausencia de valor o referencia a ningún objeto
// Es útil para indicar que una variable existe pero no tiene un valor asignado, como en el caso del patrocinador actual que aún no se ha definido
// Esto permite manejar situaciones donde se espera que un valor pueda ser desconocido o no aplicable
console.log("\n--- Valor Nulo ---");
console.log("Patrocinador actual: " + currentSponsor);
console.log("¿Es null?: " + (currentSponsor === null));
console.log("typeof currentSponsor: " + typeof currentSponsor);

// --- SECCIÓN 6 ---
// Aquí demostramos el uso de variables con let, que pueden cambiar durante la ejecución del programa
// Esto es útil para manejar datos dinámicos que pueden actualizarse a medida que la aplicación se utiliza, como el número de usuarios registrados o empresas asociadas
// En esta sección, mostramos cómo actualizar los valores de registeredUsers y registeredCompanies para reflejar cambios en el sistema, como nuevos registros o actualizaciones de datos
console.log("\n--- Actualización de Variables (let) ---");
console.log("Usuarios antes: " + registeredUsers);

// Actualizamos el valor de registeredUsers
// Esto simula el registro de nuevos usuarios en la aplicación, aumentando el número total de usuarios registrados
// Al sumar 50 a registeredUsers, estamos reflejando un crecimiento en la base de usuarios de la aplicación
registeredUsers = registeredUsers + 50;
console.log("Usuarios después: " + registeredUsers);
// De igual manera, actualizamos el número de empresas registradas para mostrar cómo se pueden manejar cambios en los datos dinámicos de la aplicación
console.log("Empresas antes: " + registeredCompanies);
registeredCompanies = registeredCompanies + 10;
console.log("Empresas después: " + registeredCompanies);

// --- SECCIÓN 7 ---
// Mostramos información final sobre el dominio asignado

console.log("\n--- Resumen del Dominio ---");
console.log("Dominio:         APP CONTABILIDAD PYMES");
console.log("Entidad:         Aplicación de Software");
console.log("Total módulos:   8");
console.log("Versión:         1.0.0");

console.log("\n===========================================");
console.log("FIN DE FICHA - JavaScript ES2023");
console.log("===========================================");