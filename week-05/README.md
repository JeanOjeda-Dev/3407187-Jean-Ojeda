## 📊 APP CONTABILIDAD PYMEs - week-05

### Sistema de Clasificación y Control de Flujo para el Sector Empresarial

Este proyecto constituye el **único entregable obligatorio de la Semana 05** del programa ADSO. Consiste en un motor de toma de decisiones ejecutado en consola, diseñado para categorizar automáticamente la salud financiera y el estado tributario de pequeñas y medianas empresas mediante el uso avanzado de **Estructuras de Control y Operadores de ES2020+**.

---

### 🛠️ Especificaciones de Desarrollo (Requisitos Cumplidos)

El sistema ha sido actualizado integrando los conceptos técnicos de lógica de programación solicitados por el instructor:

* **Categorización Dinámica:** Implementación de estructuras `if / else if / else` para clasificar el tamaño de las empresas (Micro, Pequeña o Mediana) basándose en rangos reales de ingresos mensuales.
* **Evaluación de Estado Binario:** Uso del **Operador Ternario (`? :`)** para determinar de forma inmediata si una entidad contable se encuentra en estado "Activa" o "Sin Actividad" sin necesidad de bloques extensos de código.
* **Segmentación de Prioridad:** Aplicación de la sentencia `switch` para asignar niveles de atención contable (Alta, Media, Estándar) según el régimen tributario registrado en el sistema.
* **Seguridad de Datos (Nullish Coalescing):** Integración del operador `??` para garantizar que el reporte final nunca muestre valores nulos o indefinidos en las notas de auditoría, asignando mensajes por defecto.
* **Navegación Segura de Objetos:** Implementación de **Optional Chaining (`?.`)** para acceder a la información de los contadores responsables y fechas de revisión, evitando errores de ejecución si los datos no han sido cargados.
* **Reporte Estructurado:** Generación de la ficha técnica final mediante **Template Literals**, eliminando la concatenación con `+` y organizando la información con métodos estéticos como `repeat()`.

---

### 📈 Ficha Técnica del Dominio

| Característica | Detalle |
| :--- | :--- |
| **Dominio Asignado** | Contabilidad para PYMEs |
| **Entidad** | Clasificador de Salud Financiera |
| **Lógica Aplicada** | Condicionales y Operadores Modernos |
| **Identificador** | CLASIF-PYME-2026 |
| **Tecnología** | JavaScript ES2020+ (Node.js) |

---

### 🚀 Funcionalidades Evaluadas en el Script

1.  **Motor de Clasificación de Ingresos:** Algoritmo que analiza el flujo de caja para etiquetar la capacidad operativa de la empresa.
2.  **Selector de Carga Tributaria:** Sistema inteligente que identifica la prioridad de las declaraciones según el tipo de contribuyente.
3.  **Gestión de Errores Silenciosos:** Uso de operadores modernos para manejar bases de datos incompletas sin interrumpir el flujo del programa.
4.  **Interfaz de Auditoría en Consola:** Generación de un resumen ejecutivo visualmente organizado que facilita la lectura de los resultados contables.

---

### 👤 Información del Aprendiz

* **Estudiante:** Jean Ojeda Rangel
* **Instructor:** Erick Granados Torres / Maria Juliana
* **Programa:** Análisis y Desarrollo de Software (ADSO)
* **Ficha:** 3407187
* **Sede:** SENA - Bogotá
