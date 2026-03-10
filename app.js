// ===== DATA =====

const issues = [
  {
    id: 1,
    scope: 'tulipan',
    title: 'Filtración de agua en el piso 5',
    desc: 'Humedad persistente en el techo del corredor del piso 5, evidenciando filtración desde la terraza. Pintura deteriorada y riesgo de daño estructural.',
    fullDesc: `Se ha detectado una filtración de agua en el techo del corredor del quinto piso de la Torre Tulipán. La humedad proviene posiblemente de grietas en la impermeabilización de la terraza superior o de una falla en las tuberías de desagüe pluvial.\n\nLa filtración ha generado manchas de humedad, desprendimiento de pintura y en algunos puntos se observa aparición de hongos. De no atenderse oportunamente puede comprometer la estructura del edificio y afectar la salud de los residentes por la presencia de moho.`,
    severity: 'alta',
    date: '2025-11-20',
    location: 'Corredor piso 5',
    reported: 'Junta de administración',
    status: 'En revisión',
    icon: '💧',
    gallery: ['💧','🏚️','🔩']
  },
  {
    id: 2,
    scope: 'tulipan',
    title: 'Ascensor con falla intermitente',
    desc: 'El ascensor se detiene entre pisos de forma aleatoria y las puertas no cierran correctamente. Riesgo para los residentes.',
    fullDesc: `El ascensor de la Torre Tulipán presenta fallas recurrentes desde hace aproximadamente tres meses. El sistema de cierre de puertas falla intermitentemente, lo que obliga al ascensor a detenerse entre pisos. En varias ocasiones los residentes han quedado atrapados brevemente.\n\nLa empresa de mantenimiento fue contactada y realizó una revisión superficial, pero la falla persiste. Se requiere con urgencia una revisión técnica completa del sistema eléctrico y mecánico del ascensor.`,
    severity: 'alta',
    date: '2025-10-05',
    location: 'Torre Tulipán - Ascensor',
    reported: 'Varios residentes',
    status: 'Urgente',
    icon: '🛗',
    gallery: ['🛗','⚠️','🔧']
  },
  {
    id: 3,
    scope: 'tulipan',
    title: 'Iluminación deficiente en parqueadero',
    desc: 'Varias luminarias del parqueadero subterráneo están fundidas. Zona oscura representa riesgo de seguridad para vehículos y personas.',
    fullDesc: `El parqueadero subterráneo de la Torre Tulipán cuenta con zonas completamente a oscuras debido a luminarias fundidas que no han sido reemplazadas. Esto representa un riesgo de seguridad importante, ya que favorece situaciones de inseguridad y aumenta el riesgo de accidentes entre vehículos y peatones.\n\nSe requiere reemplazar al menos 8 luminarias LED y revisar el cableado del sector norte del parqueadero donde la situación es más crítica.`,
    severity: 'media',
    date: '2025-09-12',
    location: 'Parqueadero subterráneo',
    reported: 'Residente apto 202',
    status: 'Pendiente presupuesto',
    icon: '💡',
    gallery: ['💡','🚗','🌑']
  },
  {
    id: 4,
    scope: 'flores',
    title: 'Zona verde descuidada - parque central',
    desc: 'El parque central del conjunto lleva más de 6 semanas sin mantenimiento. Césped alto, basuras y juegos infantiles deteriorados.',
    fullDesc: `El parque central del Conjunto Las Flores, espacio compartido por las torres Tulipán, Amapola y Gardenia, se encuentra en un estado deplorable de abandono. El corte de césped no se ha realizado en más de seis semanas, las canecas de basura están desbordadas y los juegos infantiles presentan deterioro con bordes metálicos oxidados que representan un peligro para los niños.\n\nLa empresa de jardinería contratada no ha cumplido con el cronograma establecido. Se solicita a la administración del conjunto tomar medidas inmediatas y aplicar las penalizaciones correspondientes al contratista.`,
    severity: 'media',
    date: '2025-11-01',
    location: 'Parque central - Conjunto Las Flores',
    reported: 'Comité de convivencia',
    status: 'En gestión',
    icon: '🌿',
    gallery: ['🌿','🛝','🌳']
  },
  {
    id: 5,
    scope: 'flores',
    title: 'Portería sin personal en horario nocturno',
    desc: 'La portería del conjunto queda sin vigilante entre las 12am y 5am, dejando el acceso desprotegido y exponiendo a los residentes a riesgos de seguridad.',
    fullDesc: `Se ha verificado que la empresa de vigilancia contratada por el Conjunto Las Flores no está cumpliendo con el horario de 24 horas establecido en el contrato. En el horario comprendido entre las 12:00 am y las 5:00 am no hay personal en la portería, la barrera de acceso vehicular permanece abierta y las cámaras de seguridad no tienen supervisión en tiempo real.\n\nEsta situación pone en riesgo la seguridad de todos los residentes de las torres Tulipán, Amapola y Gardenia. Se han registrado al menos dos incidentes de personas ajenas al conjunto ingresando sin autorización en estas horas.`,
    severity: 'alta',
    date: '2025-10-28',
    location: 'Portería principal - Las Flores',
    reported: 'Junta directiva',
    status: 'En negociación',
    icon: '🔐',
    gallery: ['🔐','🌃','📹']
  },
  {
    id: 6,
    scope: 'flores',
    title: 'Daño en tubería principal de acueducto',
    desc: 'Ruptura parcial en la tubería de distribución de agua afecta la presión en las tres torres. Se presentan cortes de agua no programados.',
    fullDesc: `La tubería principal de distribución de agua del Conjunto Las Flores presenta una ruptura parcial en el tramo subterráneo que va desde el medidor principal hacia las tres torres residenciales. Esta situación causa pérdidas de agua constantes, baja presión en los pisos superiores (especialmente pisos 8 al 12) y cortes de agua inesperados.\n\nLa empresa de acueducto fue notificada pero la reparación definitiva está pendiente de aprobación de presupuesto por parte de la administración del conjunto.`,
    severity: 'alta',
    date: '2025-11-15',
    location: 'Red hidráulica - Las Flores',
    reported: 'Administración Las Flores',
    status: 'Urgente',
    icon: '🚿',
    gallery: ['🚿','💧','🔧']
  },
  {
    id: 7,
    scope: 'brisas',
    title: 'Muro perimetral compartido en mal estado',
    desc: 'El muro divisorio entre Las Flores y Las Brisas presenta grietas estructurales y secciones con riesgo de colapso.',
    fullDesc: `El muro perimetral que divide los conjuntos Las Flores y Las Brisas se encuentra en un estado crítico de deterioro. Se han identificado al menos tres secciones con grietas profundas de origen estructural, una sección donde el muro ya cedió parcialmente y está apoyado provisionalmente, y presencia generalizada de humedad y vegetación invasiva que acelera el deterioro.\n\nAmbas administraciones han sido notificadas y existe un desacuerdo sobre el porcentaje de responsabilidad en la reparación. Se requiere una interventoría técnica imparcial para determinar las causas y la distribución de costos.`,
    severity: 'alta',
    date: '2025-10-10',
    location: 'Muro divisorio Las Flores - Las Brisas',
    reported: 'Ambas administraciones',
    status: 'En disputa',
    icon: '🧱',
    gallery: ['🧱','⚠️','🏗️']
  },
  {
    id: 8,
    scope: 'brisas',
    title: 'Conflicto por uso de parqueaderos visitantes',
    desc: 'Residentes de Las Brisas usan los parqueaderos de visitantes de Las Flores de forma permanente, impidiendo el acceso a visitantes legítimos.',
    fullDesc: `Desde hace varios meses se registra el uso sistemático e indebido de los parqueaderos de visitantes del Conjunto Las Flores por parte de residentes del Conjunto Las Brisas. Esto ha generado conflictos entre residentes, quejas frecuentes ante la administración y situaciones de convivencia difíciles.\n\nSe han realizado reuniones entre las dos administraciones sin llegar a un acuerdo. Se propone instalar cámaras con registro de placas y un sistema de tiquetes para visitantes, además de establecer acuerdos formales entre ambos conjuntos sobre el uso compartido de zonas comunes.`,
    severity: 'media',
    date: '2025-09-30',
    location: 'Parqueaderos visitantes - Las Flores',
    reported: 'Múltiples residentes',
    status: 'En mediación',
    icon: '🚗',
    gallery: ['🚗','🅿️','📋']
  }
];

const morosos = [
  { apto: '101', torre: 'tulipan', meses: 4, valor: '$480.000', estado: 'moroso' },
  { apto: '204', torre: 'tulipan', meses: 7, valor: '$840.000', estado: 'moroso' },
  { apto: '312', torre: 'tulipan', meses: 2, valor: '$240.000', estado: 'acuerdo' },
  { apto: '508', torre: 'amapola', meses: 10, valor: '$1.200.000', estado: 'moroso' },
  { apto: '603', torre: 'amapola', meses: 1, valor: '$120.000', estado: 'reciente' },
  { apto: '405', torre: 'gardenia', meses: 5, valor: '$600.000', estado: 'moroso' },
  { apto: '702', torre: 'gardenia', meses: 3, valor: '$360.000', estado: 'acuerdo' },
  { apto: '210', torre: 'tulipan', meses: 8, valor: '$960.000', estado: 'moroso' },
];

const proyectos = [
  {
    icon: '☀️',
    title: 'Paneles solares en terrazas',
    desc: 'Instalación de paneles fotovoltaicos en las terrazas de las tres torres para reducir el costo de energía de zonas comunes hasta en un 60%.',
    tags: ['Energía', 'Las Flores', 'Sostenible'],
    cost: '~$45M COP',
    prioridad: 'alta',
    avance: 15,
    etapa: 'Estudio de viabilidad'
  },
  {
    icon: '📹',
    title: 'Sistema CCTV integral',
    desc: 'Renovación y ampliación del sistema de cámaras de seguridad con cobertura 24/7, almacenamiento en nube y acceso remoto para la administración.',
    tags: ['Seguridad', 'Las Flores'],
    cost: '~$12M COP',
    prioridad: 'alta',
    avance: 40,
    etapa: 'Cotización proveedores'
  },
  {
    icon: '🌳',
    title: 'Revitalización zonas verdes',
    desc: 'Rediseño del parque central con nuevo mobiliario urbano, iluminación LED, senderos peatonales y jardines temáticos para todas las edades.',
    tags: ['Bienestar', 'Las Flores', 'Comunidad'],
    cost: '~$18M COP',
    prioridad: 'media',
    avance: 25,
    etapa: 'Diseño arquitectónico'
  },
  {
    icon: '♻️',
    title: 'Punto limpio de reciclaje',
    desc: 'Construcción de una estación de clasificación de residuos con contenedores diferenciados, compactadora y programa de educación ambiental.',
    tags: ['Ambiente', 'Las Flores + Las Brisas'],
    cost: '~$8M COP',
    prioridad: 'media',
    avance: 60,
    etapa: 'Aprobación consejo'
  },
  {
    icon: '🏋️',
    title: 'Gimnasio al aire libre',
    desc: 'Dotación de zona de ejercicio al aire libre con 12 estaciones de aparatos para adultos, área de estiramiento y zona de yoga.',
    tags: ['Salud', 'Las Flores'],
    cost: '~$6M COP',
    prioridad: 'baja',
    avance: 10,
    etapa: 'Propuesta inicial'
  },
  {
    icon: '🤝',
    title: 'Muro divisorio compartido',
    desc: 'Reparación estructural del muro perimetral entre Las Flores y Las Brisas con distribución equitativa de costos entre los dos conjuntos.',
    tags: ['Infraestructura', 'Las Flores + Las Brisas', 'Urgente'],
    cost: '~$22M COP',
    prioridad: 'alta',
    avance: 5,
    etapa: 'Negociación conjuntos'
  }
];

// ===== RENDER ISSUES =====
function scopeLabel(scope) {
  return { tulipan: 'Torre Tulipán', flores: 'Conjunto Las Flores', brisas: 'Con Las Brisas' }[scope] || scope;
}
function severityLabel(s) {
  return { alta: 'Alta', media: 'Media', baja: 'Baja' }[s] || s;
}

function renderIssues() {
  const grid = document.getElementById('issuesGrid');
  grid.innerHTML = issues.map(issue => `
    <article class="issue-card fade-up" data-scope="${issue.scope}" data-id="${issue.id}">
      <div class="issue-img placeholder">${issue.icon}</div>
      <div class="issue-body">
        <span class="issue-scope scope-${issue.scope}">${scopeLabel(issue.scope)}</span>
        <h3 class="issue-title">${issue.title}</h3>
        <p class="issue-desc">${issue.desc}</p>
        <div class="issue-footer">
          <span class="issue-severity severity-${issue.severity}">
            ● Severidad ${severityLabel(issue.severity)}
          </span>
          <span class="issue-date">${formatDate(issue.date)}</span>
        </div>
        <button class="issue-btn" style="margin-top:.8rem" onclick="openIssueModal(${issue.id})">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          Ver detalles
        </button>
      </div>
    </article>
  `).join('');
  document.getElementById('countIssues').textContent = issues.length;
}

// ===== FILTER =====
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.issue-card').forEach(card => {
        const show = filter === 'all' || card.dataset.scope === filter;
        card.classList.toggle('hidden', !show);
      });
    });
  });
}

// ===== RENDER MOROSOS =====
function towerClass(t) {
  return { tulipan: 'tower-tulipan', amapola: 'tower-amapola', gardenia: 'tower-gardenia' }[t] || '';
}
function towerLabel(t) {
  return { tulipan: 'Tulipán', amapola: 'Amapola', gardenia: 'Gardenia' }[t] || t;
}
function estadoClass(e) {
  return { moroso: 'estado-moroso', acuerdo: 'estado-acuerdo', reciente: 'estado-reciente' }[e] || '';
}
function estadoLabel(e) {
  return { moroso: 'Moroso', acuerdo: 'Acuerdo de pago', reciente: 'Reciente' }[e] || e;
}

function renderMorosos() {
  const tbody = document.getElementById('morososBody');
  tbody.innerHTML = morosos.map(m => `
    <tr>
      <td><strong>Apto ${m.apto}</strong></td>
      <td><span class="tower-pill ${towerClass(m.torre)}">${towerLabel(m.torre)}</span></td>
      <td>${m.meses} ${m.meses === 1 ? 'mes' : 'meses'}</td>
      <td><strong>${m.valor}</strong></td>
      <td><span class="estado-pill ${estadoClass(m.estado)}">${estadoLabel(m.estado)}</span></td>
    </tr>
  `).join('');
  document.getElementById('countMorosos').textContent = morosos.length;
}

// ===== RENDER PROYECTOS =====
function renderProyectos() {
  const grid = document.getElementById('proyectosGrid');
  grid.innerHTML = proyectos.map(p => `
    <div class="proyecto-card prio-${p.prioridad} fade-up">
      <div class="proyecto-icon">${p.icon}</div>
      <h3 class="proyecto-title">${p.title}</h3>
      <p class="proyecto-desc">${p.desc}</p>
      <div class="proyecto-meta">
        ${p.tags.map(t => `<span class="meta-tag">${t}</span>`).join('')}
        <span class="meta-cost">${p.cost}</span>
      </div>
      <div class="proyecto-progress">
        <div class="progress-label">
          <span>${p.etapa}</span>
          <span>${p.avance}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width:${p.avance}%"></div>
        </div>
      </div>
    </div>
  `).join('');
  document.getElementById('countProyectos').textContent = proyectos.length;
}

// ===== MODAL =====
function openIssueModal(id) {
  const issue = issues.find(i => i.id === id);
  if (!issue) return;

  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <div class="modal-hero-img">${issue.icon}</div>
    <div class="modal-scope">
      <span class="issue-scope scope-${issue.scope}">${scopeLabel(issue.scope)}</span>
    </div>
    <h2 class="modal-title">${issue.title}</h2>
    <div class="modal-details">
      <div class="detail-item"><label>Severidad</label><span class="issue-severity severity-${issue.severity}">● ${severityLabel(issue.severity)}</span></div>
      <div class="detail-item"><label>Estado</label><span>${issue.status}</span></div>
      <div class="detail-item"><label>Ubicación</label><span>${issue.location}</span></div>
      <div class="detail-item"><label>Reportado por</label><span>${issue.reported}</span></div>
      <div class="detail-item"><label>Fecha reporte</label><span>${formatDate(issue.date)}</span></div>
    </div>
    <div class="modal-body">
      ${issue.fullDesc.split('\n\n').map(p => `<p>${p}</p>`).join('')}
    </div>
    <h4 style="font-size:.85rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--neutral-300);margin-top:1.5rem;margin-bottom:.6rem;">Evidencia fotográfica</h4>
    <div class="modal-gallery">
      ${issue.gallery.map(img => `
        <div class="modal-gallery-item" style="font-size:2.5rem;background:var(--neutral-100);">${img}</div>
      `).join('')}
      <div class="modal-gallery-item" style="background:var(--neutral-100);font-size:.72rem;color:var(--neutral-300);text-align:center;padding:.5rem;">
        Agrega fotos<br>reales aquí
      </div>
    </div>
  `;

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ===== UTILS =====
function formatDate(str) {
  const d = new Date(str + 'T00:00:00');
  return d.toLocaleDateString('es-CO', { year:'numeric', month:'long', day:'numeric' });
}

function showToast(msg, type = '') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast'; toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = `toast ${type}`;
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ===== NAV SCROLL =====
function initNavScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

// ===== MOBILE NAV TOGGLE =====
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });
}

// ===== INTERSECTION OBSERVER (fade-up) =====
function initFadeUp() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// ===== COUNTER ANIMATION =====
function animateCounter(el, target, duration = 1200) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { el.textContent = target; clearInterval(timer); return; }
    el.textContent = Math.floor(start);
  }, 16);
}

function initCounters() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        observer.unobserve(e.target);
        animateCounter(document.getElementById('countIssues'), issues.length);
        animateCounter(document.getElementById('countMorosos'), morosos.length);
        animateCounter(document.getElementById('countProyectos'), proyectos.length);
      }
    });
  }, { threshold: 0.5 });
  const bar = document.querySelector('.stats-bar');
  if (bar) observer.observe(bar);
}

// ===== CONTACT FORM =====
function initContactForm() {
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const titulo = document.getElementById('fTitulo').value.trim();
    if (!titulo) { showToast('Por favor completa el título del reporte.'); return; }
    showToast('Reporte enviado correctamente. La administración lo revisará pronto.', 'success');
    e.target.reset();
  });
}

// ===== MODAL EVENTS =====
function initModal() {
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// ===== YEAR =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderIssues();
  renderMorosos();
  renderProyectos();
  initFilters();
  initNavScroll();
  initMobileNav();
  initModal();
  initContactForm();
  initCounters();
  // Fade-up on dynamic content needs delay
  setTimeout(initFadeUp, 100);
});
