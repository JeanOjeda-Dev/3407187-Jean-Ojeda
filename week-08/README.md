## 📊 APP CONTABILIDAD PYMEs - week-08

### Gestión de Inventario y Cartera de Clientes con Estructuras de Datos

Este proyecto constituye el **único entregable obligatorio de la Semana 08** del programa ADSO. Consiste en un sistema avanzado de gestión de colecciones (Arrays) ejecutado en consola, diseñado para manipular el inventario de facturas de una PYME mediante métodos de mutación, búsqueda, filtrado y transformación de **JavaScript ES2023**.

---

### 🛠️ Especificaciones de Desarrollo (Requisitos Cumplidos)

El sistema ha sido robustecido integrando los estándares de manejo de listas y persistencia lógica solicitados por el instructor:

* **Estructura de Datos Compleja:** Definición de una colección de objetos representativos del dominio contable, incluyendo propiedades críticas como `id`, `cliente`, `monto` (numérico) y `pagada` (booleano).
* **Snapshots Inmutables (Spread Operator):** Implementación de copias de seguridad del estado inicial del inventario mediante el operador `...`, garantizando la integridad de los datos originales frente a procesos de auditoría.
* **Gestión Dinámica (Mutación):** Uso de los métodos `push`, `pop`, `unshift` y `splice` para simular la entrada de facturas nuevas, registros prioritarios, anulaciones por error y cierres de mes.
* **Motores de Búsqueda y Filtrado:** Aplicación de `find` para localizar facturas específicas por cliente y `filter` para generar subconjuntos de datos (como el listado de facturas pendientes de cobro).
* **Transformación Masiva (Map):** Uso del método `map` para proyectar escenarios financieros, como el cálculo automático de recargos por mora o la extracción de listados de clientes.
* **Iteración de Reportes (forEach):** Recorrido sistemático del inventario para la generación de reportes visuales organizados y legibles en la terminal.

---

### 📈 Ficha Técnica del Dominio

| Característica | Detalle |
| :--- | :--- |
| **Dominio Asignado** | Contabilidad para PYMEs |
| **Entidad** | Gestión de Cartera y Facturación |
| **Lógica Aplicada** | Arrays y Métodos de Iteración |
| **Identificador** | ARRAY-PYME-2026 |
| **Tecnología** | JavaScript ES2023 (Node.js) |

---

### 🚀 Funcionalidades Evaluadas en el Script

1.  **Auditoría de Movimientos:** Registro y eliminación de facturas manteniendo la trazabilidad de los cambios en la consola.
2.  **Filtro de Cobranza:** Identificación instantánea de clientes con saldos pendientes para agilizar la gestión financiera.
3.  **Proyección de Recargos:** Cálculo masivo de intereses de mora sin alterar los registros originales de la base de datos.
4.  **Respaldo de Seguridad:** Verificación de que el "Snapshot" inicial se mantiene intacto tras realizar múltiples operaciones de mutación.

---

### 👤 Información del Aprendiz

* **Estudiante:** Jean Ojeda Rangel
* **Instructor:** Erick Granados Torres / Maria Juliana
* **Programa:** Análisis y Desarrollo de Software (ADSO)
* **Ficha:** 3407187
* **Sede:** SENA - Bogotá

