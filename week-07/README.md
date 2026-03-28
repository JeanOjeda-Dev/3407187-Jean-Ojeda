## 📊 APP CONTABILIDAD PYMEs - week-07

### Librería de Funciones Reutilizables y Lógica Modular

Este proyecto representa el **único entregable obligatorio de la Semana 07** del programa ADSO. Consiste en el desarrollo de una arquitectura de software basada en **Funciones (Declarativas y Arrow Functions)**, diseñada para estandarizar el cálculo de impuestos, la validación de registros y el formateo de reportes financieros en pequeñas y medianas empresas.

---

### 🛠️ Especificaciones de Desarrollo (Requisitos Cumplidos)

El sistema ha sido evolucionado integrando los conceptos de programación modular y funcional solicitados por el instructor:

* **Arquitectura de Funciones Puras:** Implementación de la función `calcularIVA` como una función pura, garantizando que el cálculo de impuestos sea predecible y no dependa de estados externos globales.
* **Sintaxis Moderna (Arrow Functions):** Uso de funciones de flecha (`=>`) para el formateo de datos y validaciones, optimizando la legibilidad del código y siguiendo los estándares de **ES2023**.
* **Parámetros por Defecto:** Incorporación de valores predeterminados en funciones críticas (como tasas impositivas y etiquetas de reporte) para prevenir errores cuando la base de datos entrega información parcial.
* **Validación Lógica de Negocio:** Creación de una función de verificación que actúa como filtro de integridad, permitiendo procesar únicamente facturas en estado "Activo" para los cierres contables.
* **Funciones como Valor (Callbacks):** Integración de funciones de formato dentro de los ciclos de reporte, permitiendo una separación clara entre la lógica de procesamiento y la lógica de presentación.
* **Retorno de Datos Estricto:** Todas las funciones de la librería implementan la sentencia `return`, asegurando que la información fluya correctamente hacia las variables de reporte final.

---

### 📈 Ficha Técnica del Dominio

| Característica | Detalle |
| :--- | :--- |
| **Dominio Asignado** | Contabilidad para PYMEs |
| **Entidad** | Librería de Utilidades Contables |
| **Lógica Aplicada** | Programación Funcional y Modular |
| **Identificador** | FUNC-PYME-2026 |
| **Tecnología** | JavaScript ES2023 (Node.js) |

---

### 🚀 Funcionalidades Evaluadas en el Script

1.  **Calculadora de Impuestos Automatizada:** Función especializada en procesar el IVA (19%) sobre montos base de manera precisa.
2.  **Formateador de Registros Financieros:** Generador de cadenas de texto profesionales que organizan la información de clientes e identificadores únicos.
3.  **Filtro de Integridad Contable:** Sistema que valida la vigencia de las facturas antes de incluirlas en la sumatoria de activos.
4.  **Generador de Resumen Ejecutivo:** Función versátil que construye las líneas finales del reporte integrando moneda local y etiquetas dinámicas.

---

### 👤 Información del Aprendiz

* **Estudiante:** Jean Ojeda Rangel
* **Instructor:** Erick Granados Torres 
* **Programa:** Análisis y Desarrollo de Software (ADSO)
* **Ficha:** 3407187
* **Sede:** SENA - Bogotá

