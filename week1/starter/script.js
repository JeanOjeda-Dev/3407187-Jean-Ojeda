/* ============================================
   PROYECTO SEMANA 01 - APP CONTABILIDAD PYMEs
   Erick Santiago
============================================ */

// ============================================
// 1️⃣ Datos del dominio
// ============================================

const entityData = {
  name: "ContaPyme Pro",
  description: "Aplicación web de contabilidad diseñada para pequeñas y medianas empresas que necesitan control financiero, facturación electrónica y reportes en tiempo real.",
  identifier: "CP-2026-APP",
  contact: {
    email: "soporte@contapymepro.com",
    phone: "+57 300 123 4567",
    location: "Colombia"
  },
  items: [
    { name: "Facturación Electrónica", level: 95, category: "Finanzas" },
    { name: "Control de Inventarios", level: 88, category: "Gestión" },
    { name: "Reportes Financieros", level: 92, category: "Análisis" },
    { name: "Gestión de Nómina", level: 85, category: "RRHH" },
    { name: "Control de Gastos", level: 90, category: "Finanzas" },
    { name: "Dashboard en Tiempo Real", level: 94, category: "Visualización" }
  ],
  links: [
    { platform: "Sitio Web", url: "https://contapymepro.com", icon: "🌐" },
    { platform: "Soporte", url: "mailto:soporte@contapymepro.com", icon: "📧" }
  ],
  stats: {
    totalClients: 320,
    activeSubscriptions: 290,
    monthlyTransactions: 15000,
    rating: 4.8
  }
};

// ============================================
// 2️⃣ Referencias DOM
// ============================================

const userName = document.getElementById("userName");
const userTitle = document.getElementById("userTitle");
const userLocation = document.getElementById("userLocation");
const userBio = document.getElementById("userBio");
const userEmail = document.getElementById("userEmail");
const userPhone = document.getElementById("userPhone");

const skillsList = document.getElementById("skillsList");
const socialLinks = document.getElementById("socialLinks");
const statsContainer = document.getElementById("stats");

const themeToggle = document.getElementById("themeToggle");
const copyBtn = document.getElementById("copyEmailBtn");
const toggleSkillsBtn = document.getElementById("toggleSkills");

const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

// ============================================
// 3️⃣ Render información básica
// ============================================

const renderBasicInfo = () => {
  const {
    name,
    description,
    identifier,
    contact: { email, phone, location }
  } = entityData;

  userName.textContent = name;
  userTitle.textContent = `Software de Contabilidad para PYMEs | ID: ${identifier}`;
  userLocation.textContent = `📍 ${location}`;
  userBio.textContent = description;
  userEmail.textContent = email ?? "No disponible";
  userPhone.textContent = phone ?? "No disponible";
};

// ============================================
// 4️⃣ Render módulos (skills)
// ============================================

const renderItems = (showAll = false) => {
  const { items } = entityData;

  const itemsToShow = showAll ? items : items.slice(0, 4);

  const itemsHtml = itemsToShow.map(({ name, level }) => `
      <div class="skill-item">
        <div class="skill-name">${name}</div>
        <div class="skill-level">
          <span>${level}%</span>
          <div class="skill-bar">
            <div class="skill-bar-fill" style="width:${level}%"></div>
          </div>
        </div>
      </div>
  `).join("");

  skillsList.innerHTML = itemsHtml;
};

// ============================================
// 5️⃣ Render enlaces
// ============================================

const renderLinks = () => {
  const { links } = entityData;

  const linksHtml = links.map(({ platform, url, icon }) => `
      <a href="${url}" target="_blank" class="social-link">
        <span>${icon}</span> ${platform}
      </a>
  `).join("");

  socialLinks.innerHTML = linksHtml;
};

// ============================================
// 6️⃣ Render estadísticas
// ============================================

const renderStats = () => {
  const { stats, items } = entityData;
  const { totalClients, activeSubscriptions, monthlyTransactions, rating } = stats;

  const avgLevel = items.reduce((acc, item) => acc + item.level, 0) / items.length;

  const statsArray = [
    { label: "Clientes Totales", value: totalClients },
    { label: "Suscripciones Activas", value: activeSubscriptions },
    { label: "Transacciones Mensuales", value: monthlyTransactions },
    { label: "Rating", value: rating },
    { label: "Promedio Eficiencia", value: `${avgLevel.toFixed(1)}%` }
  ];

  const statsHtml = statsArray.map(({ label, value }) => `
      <div class="stat-item">
        <span class="stat-value">${value}</span>
        <span class="stat-label">${label}</span>
      </div>
  `).join("");

  statsContainer.innerHTML = statsHtml;
};

// ============================================
// 7️⃣ Toggle Theme
// ============================================

const toggleTheme = () => {
  const currentTheme = document.documentElement.dataset.theme ?? "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.dataset.theme = newTheme;
  themeToggle.textContent = newTheme === "dark" ? "☀️" : "🌙";

  localStorage.setItem("theme", newTheme);
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem("theme") ?? "light";
  document.documentElement.dataset.theme = savedTheme;
  themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
};

// ============================================
// 8️⃣ Copiar información
// ============================================

const copyInfo = () => {
  const { name, description, contact } = entityData;

  const infoText = `
${name}
${description}
Contacto: ${contact?.email ?? "No disponible"}
  `.trim();

  navigator.clipboard.writeText(infoText);
  showToast("¡Información copiada correctamente!");
};

const showToast = message => {
  toastMessage.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
};

// ============================================
// 9️⃣ Mostrar / Ocultar módulos
// ============================================

let showingAllItems = false;

const handleToggleItems = () => {
  showingAllItems = !showingAllItems;
  renderItems(showingAllItems);
  toggleSkillsBtn.textContent = showingAllItems ? "Mostrar menos" : "Mostrar más";
};

// ============================================
// 🔟 Event Listeners
// ============================================

themeToggle.addEventListener("click", toggleTheme);
copyBtn.addEventListener("click", copyInfo);
toggleSkillsBtn.addEventListener("click", handleToggleItems);

// ============================================
// 1️⃣1️⃣ Inicialización
// ============================================

const init = () => {
  loadTheme();
  renderBasicInfo();
  renderItems();
  renderLinks();
  renderStats();
  console.log("✅ Aplicación ContaPyme Pro inicializada correctamente");
};

init();
