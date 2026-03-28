## 📊 APP CONTABILIDAD PYMEs - week-06

### Sistema de Procesamiento de Datos y Reportes Automatizados

Este proyecto representa el **único entregable obligatorio de la Semana 06** del programa ADSO. Consiste en un motor de auditoría ejecutado en consola, diseñado para procesar colecciones de facturas y movimientos financieros de pequeñas y medianas empresas mediante el uso experto de **Bucles e Iteradores en JavaScript (ES2023)**.

---

### 🛠️ Especificaciones de Desarrollo (Requisitos Cumplidos)

El sistema ha sido actualizado integrando los conceptos técnicos de procesamiento masivo de datos solicitados por el instructor:

* **Iteración Moderna (for...of):** Implementación de bucles `for...of` para recorrer la colección de facturas de forma limpia, facilitando la lectura de objetos contables.
* **Filtros de Auditoría (continue):** Uso del salto de iteración `continue` para omitir registros con monto cero, asegurando que el reporte final solo contenga transacciones reales y válidas.
* **Detección de Transacciones Críticas (break):** Aplicación de la sentencia `break` para detener el escaneo del sistema apenas se encuentre el primer movimiento que supere los topes de auditoría predefinidos (4 millones de pesos).
* **Control de Flujo Tradicional (while):** Uso del bucle `while` con acumuladores para calcular la sumatoria total del flujo de caja de la pyme de manera secuencial.
* **Métricas y Estadísticas (for clásico):** Implementación de un `for` clásico para generar un reporte numerado de auditoría, comparando cada transacción contra el promedio general del periodo.
* **Análisis de Máximos y Mínimos:** Algoritmo de comparación para identificar automáticamente al cliente con la mayor y menor facturación dentro del ciclo contable.

---

### 📈 Ficha Técnica del Dominio

| Característica | Detalle |
| :--- | :--- |
| **Dominio Asignado** | Contabilidad para PYMEs |
| **Entidad** | Motor de Auditoría de Facturación |
| **Lógica Aplicada** | Bucles (for, while, for...of) y Saltos |
| **Identificador** | LOOP-PYME-2026 |
| **Tecnología** | JavaScript ES2023 (Node.js) |

---

### 🚀 Funcionalidades Evaluadas en el Script

1.  **Listado General de Movimientos:** Visualización organizada de clientes, tipos de movimiento (Ingreso/Egreso) y montos.
2.  **Contadores de Categorías:** Sistema que suma cuántas transacciones corresponden a ingresos y cuántas a gastos operativos.
3.  **Cálculo de Promedios Financieros:** Generación automática del promedio de ventas para evaluar el rendimiento de la pyme.
4.  **Reporte de Estado de Auditoría:** Clasificación de cada factura indicando si está por encima o por debajo de la media institucional.

---

### 👤 Información del Aprendiz

* **Estudiante:** Jean Ojeda Rangel
* **Instructor:** Erick Granados Torres 
* **Programa:** Análisis y Desarrollo de Software (ADSO)
* **Ficha:** 3407187
* **Sede:** SENA - Bogotá
