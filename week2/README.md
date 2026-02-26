📦 Proyecto week2 : Sistema Contable para PYMEs Jean Ojeda

🎯 ÚNICO ENTREGABLE: Este proyecto es el único entregable obligatorio para aprobar la semana.

---

🏛️ Política de Dominios Únicos

Mi dominio asignado por el instructor es: App de contabilidad para PYMEs

🧾 Sistema Contable para PYMEs

Este proyecto fue implementado completamente dentro de este contexto.

---

¿Por qué dominios únicos?

Previene copia entre compañeros  
Fomenta implementaciones originales  
Desarrolla capacidad de abstracción  
Aplica conceptos generales a contextos específicos  

---

🎯 Objetivos del Proyecto

Construir una aplicación completa de gestión contable que consolide todos los conceptos aprendidos en Week-02:

✅ Spread & Rest operators  
✅ Default parameters  
✅ Array methods (map, filter, reduce, find)  
✅ Object enhancements  
✅ Manipulación del DOM  
✅ LocalStorage para persistencia  
✅ Inmutabilidad y programación funcional  

---

📋 Descripción

Aplicación web para gestionar registros contables de una pequeña o mediana empresa (PYME).

Permite registrar:

💰 Ingresos  
💸 Gastos  
📄 Facturas  
🏛️ Impuestos  

---

Funcionalidades Principales

✔ Crear registros contables  
✔ Listar registros  
✔ Editar registros  
✔ Eliminar registros  
✔ Marcar como activo/inactivo  
✔ Filtrar por categoría  
✔ Filtrar por prioridad  
✔ Buscar registros  
✔ Ver estadísticas  
✔ Guardar datos en LocalStorage  

---

Características Técnicas

✔ JavaScript puro (ES2023)  
✔ No se usaron frameworks  
✔ Uso de programación funcional  
✔ Uso de inmutabilidad  
✔ Uso de métodos de arrays  
✔ Uso de Spread Operator  

---

💡 Adaptación al Dominio Contable

Concepto Genérico → Adaptación Contable

Elemento → Movimiento Contable  

Propiedades:

name → Nombre del movimiento  
description → Descripción  
category → Tipo (Ingreso, Gasto, Factura, Impuesto)  
priority → Prioridad  
active → Activo / Inactivo  
createdAt → Fecha  

---

🏗️ Estructura del Proyecto


3-proyecto/
│
├── README.md
│
├── index.html
│
├── styles.css
│
└── script.js


---

📝 Modelo de Datos

Ejemplo de un registro contable:

```js

{

id: 173445353535,

name: "Pago de cliente",

description: "Pago por servicio web",

active: true,

priority: "high",

category: "income",

createdAt: "2026-02-17",

updatedAt: null

}


🔧 Funciones Implementadas

Persistencia

loadItems() → Carga datos

saveItems() → Guarda datos

CRUD

createItem() → Crear

updateItem() → Actualizar

deleteItem() → Eliminar

toggleItemActive() → Activar / Desactivar

Filtros

filterByStatus()

filterByCategory()

filterByPriority()

searchItems()

Estadísticas

getStats()

renderStats()

🎨 Interfaz de Usuario

La aplicación tiene:

Header:

Título
Estadísticas

Formulario:

Crear registros

Lista:

Mostrar registros

Estadísticas:

Total
Activos
Inactivos

Estados Visuales

Activo → Normal

Inactivo → Opacidad reducida

Categorías:

💰 Ingreso

💸 Gasto

📄 Factura

🏛️ Impuesto

✅ Criterios Cumplidos

Funcionalidad

✔ Crear registros

✔ Editar

✔ Eliminar

✔ Activar / Desactivar

✔ Filtrar

✔ Buscar

Código

✔ Spread Operator

✔ Map

✔ Filter

✔ Reduce

✔ Inmutabilidad

Persistencia

✔ LocalStorage

✔ Estadísticas

✔ Interfaz funcional

🚀 Cómo Funciona

El usuario:

Ingresa datos

Se crea un objeto

Se guarda en LocalStorage

Se muestra en pantalla

Se actualizan estadísticas