"use strict";

/* ========================================
SME ACCOUNTING SYSTEM - FINAL FIXED
======================================== */

class BaseItem {
    #id; #name; #location;
    constructor(name, location) {
        if (this.constructor === BaseItem) throw new Error("Clase abstracta");
        this.#id = crypto.randomUUID();
        this.#name = name;
        this.#location = location;
    }
    get id() { return this.#id; }
    get name() { return this.#name; }
    set name(value) { this.#name = value; }
    get location() { return this.#location; }
    set location(value) { this.#location = value; }
}

class Invoice extends BaseItem {
    #amount;
    constructor(name, location, amount) {
        super(name, location);
        this.#amount = amount;
    }
    get amount() { return this.#amount; }
    set amount(value) { this.#amount = value; }
}

class AccountingSystem {
    #items = [];
    #transactions = [];

    constructor() { this.load(); }

    addItem(item) {
        this.#items.push(item);
        this.#transactions.push(`Log: ${new Date().toLocaleTimeString()}`);
        this.save();
    }

    deleteItem(id) {
        this.#items = this.#items.filter(item => item.id !== id);
        this.save();
    }

    updateItem(id, name, location, amount) {
        const item = this.#items.find(i => i.id === id);
        if (item) {
            item.name = name;
            item.location = location;
            item.amount = amount;
            this.save();
        }
    }

    searchByName(query) {
        return this.#items.filter(item => 
            item.name.toLowerCase().includes(query.toLowerCase())
        );
    }

    save() {
        localStorage.setItem("data", JSON.stringify(this.#items.map(i => ({
            id: i.id, name: i.name, location: i.location, amount: i.amount
        }))));
    }

    load() {
        const data = JSON.parse(localStorage.getItem("data")) || [];
        this.#items = data.map(i => {
            const inv = new Invoice(i.name, i.location, i.amount);
            Object.defineProperty(inv, 'id', { value: i.id }); 
            return inv;
        });
    }

    get items() { return this.#items; }
    get transCount() { return this.#transactions.length; }
}

const system = new AccountingSystem();

const recordContainer = document.getElementById("record-container");
const nameInput = document.getElementById("nameInput");
const locationInput = document.getElementById("locationInput");
const amountInput = document.getElementById("amountInput");
const mainButton = document.getElementById("createRecordButton");
const themeButton = document.getElementById("themeButton");
const searchInput = document.getElementById("searchInput");

let editId = null;

themeButton.onclick = () => {
    document.body.classList.toggle("light");
    themeButton.innerText = document.body.classList.contains("light") ? "☀" : "🌙";
};

// Lógica del buscador
if (searchInput) {
    searchInput.oninput = () => {
        render(system.searchByName(searchInput.value));
    };
}

mainButton.onclick = () => {
    const name = nameInput.value;
    const loc = locationInput.value;
    const amo = amountInput.value;

    if (!name || !loc || !amo) return alert("Completa todos los campos");

    if (editId) {
        system.updateItem(editId, name, loc, amo);
        editId = null;
        mainButton.innerText = "Guardar";
        mainButton.style.background = "#22c55e"; 
    } else {
        system.addItem(new Invoice(name, loc, amo));
    }

    nameInput.value = ""; locationInput.value = ""; amountInput.value = "";
    render();
};

window.editItem = (id) => {
    const item = system.items.find(i => i.id === id);
    if (item) {
        nameInput.value = item.name;
        locationInput.value = item.location;
        amountInput.value = item.amount;
        editId = id;
        mainButton.innerText = "Actualizar Registro";
        mainButton.style.background = "#3b82f6";
        nameInput.focus();
    }
};

window.deleteItem = (id) => {
    if (confirm("¿Eliminar este registro?")) {
        system.deleteItem(id);
        render();
    }
};

function render(data = system.items) {
    recordContainer.innerHTML = "";
    data.forEach(item => {
        recordContainer.innerHTML += `
        <div class="record fade-in" style="display: flex; justify-content: space-between; align-items: center; background: #020617; padding: 15px; margin-bottom: 10px; border-radius: 10px; border: 1px solid #1e293b;">
            <div class="record-info">
                <b style="color: #22c55e; font-size: 1.1rem;">${item.name}</b><br>
                <span style="color: #94a3b8;">${item.location}</span><br>
                <b style="color: #22c55e;">$${item.amount}</b>
            </div>
            <div class="actions" style="display: flex; gap: 8px;">
                <button onclick="editItem('${item.id}')" style="background: #3b82f6; color: white; border: none; padding: 8px 15px; border-radius: 6px; cursor: pointer;">Editar</button>
                <button onclick="deleteItem('${item.id}')" style="background: #ef4444; color: white; border: none; padding: 8px 15px; border-radius: 6px; cursor: pointer;">Eliminar</button>
            </div>
        </div>
        `;
    });
    
    document.getElementById("total-records").innerText = system.items.length;
    document.getElementById("total-transactions").innerText = system.transCount;
}

render();