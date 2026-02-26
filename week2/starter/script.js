// ARRAY PRINCIPAL
let items = [];
// ID para saber si estamos editando
let editId = null;
// CARGAR DESDE LOCALSTORAGE
const loadItems = () => {
return JSON.parse(
localStorage.getItem("contable") ?? "[]"
);
};
// GUARDAR EN LOCALSTORAGE
const saveItems = (data) => {
localStorage.setItem(
"contable",
JSON.stringify(data)
);
};
// CREAR O EDITAR ITEM
const createItem = (data) => {
if(editId !== null){
items = items.map(item =>
item.id === editId
? { ...item, ...data }
: item
);
editId = null;
saveItems(items);
return items;
}
// CREAR NUEVO
const newItem = {
id: Date.now(),
name: data.name,
description: data.description,
category: data.category,
priority: data.priority,
active: true
};
const newArray = [
...items,
newItem
];
saveItems(newArray);
return newArray;
};
// EDITAR
const editItem = (id) => {
const item = items.find(i => i.id === id);
document.getElementById("item-name").value = item.name;
document.getElementById("item-description").value = item.description;
document.getElementById("item-category").value = item.category;
document.getElementById("item-priority").value = item.priority;
editId = id;
};
// ACTIVAR / DESACTIVAR
const toggleActive = (id) => {
items = items.map(item =>
item.id === id
? { ...item, active: !item.active }
: item
);
saveItems(items);
render();
};
// ELIMINAR
const deleteItem = (id) => {
items = items.filter(item => item.id !== id);
saveItems(items);
render();
};
// MOSTRAR
const render = () => {
const container = document.getElementById("item-list");
container.innerHTML = items.map(item => `



<div class="task-item">

<h3>${item.name}</h3>

<p>${item.description}</p>

<p>${item.category}</p>

<p>${item.priority}</p>

<p>${item.active ? "Activo" : "Inactivo"}</p>



<button onclick="toggleActive(${item.id})" class="activate">

Cambiar estado

</button>



<button onclick="editItem(${item.id})" class="edit">

Editar

</button>



<button onclick="deleteItem(${item.id})" class="delete">

Eliminar

</button>



</div> 



`).join("");
// ESTADISTICAS
document.getElementById("stat-total").textContent = items.length;
document.getElementById("stat-active").textContent =
items.filter(i => i.active).length;
document.getElementById("stat-inactive").textContent =
items.filter(i => !i.active).length;
};
// EVENTO FORMULARIO
document
.getElementById("item-form")
.addEventListener("submit", function(e){
e.preventDefault();
const data = {
name: document.getElementById("item-name").value,
description: document.getElementById("item-description").value,
category: document.getElementById("item-category").value,
priority: document.getElementById("item-priority").value
};
items = createItem(data);
render();
});
// CAMBIAR TEMA
const toggleTheme = () => {
document.body.classList.toggle("dark");
};
// INICIAR APP
const init = () => {
items = loadItems();
render();
};
// EJECUTAR
init();