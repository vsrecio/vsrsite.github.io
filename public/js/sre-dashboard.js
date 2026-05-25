/* ==========================================================================
   ENTERPRISE ARCHITECTURE & PORTFOLIO LOGIC
   Designed with Premium Dark/Light Glassmorphism Aesthetic
   ========================================================================== */

/* STATE Variables */
let isDark = true;
let currentUser = null;
let chatHistory = [];
let ovChartInst = null;

/* ==========================================
   1. THEME SWITCHER
   ========================================== */
function toggleTheme() {
    isDark = !isDark;
    const root = document.getElementById('htmlRoot');
    if (root) {
        root.classList.toggle('lm', !isDark);
    }
    
    // Update navbar icons
    const si = document.getElementById('suni');
    const mi = document.getElementById('mooni');
    if (si && mi) {
        si.style.display = isDark ? 'none' : 'inline-block';
        mi.style.display = isDark ? 'inline-block' : 'none';
    }
    
    // Sync settings in dashboard settings tab
    const dmtog = document.getElementById('darkModeToggle');
    if (dmtog) dmtog.checked = isDark;
    
    // Sync charts colors
    updateChartColors();
}

// Add event listener once DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    const thBtn = document.getElementById('thbtn');
    if (thBtn) thBtn.addEventListener('click', toggleTheme);
    
    // Navbar Scroll class
    window.addEventListener('scroll', () => {
        const nbar = document.getElementById('nbar');
        if (nbar) {
            nbar.classList.toggle('scr', window.scrollY > 40);
        }
    });

    // Mobile Navbar Toggler
    const mbTog = document.getElementById('mbtog');
    const mbMenu = document.getElementById('mbmenu');
    const barIcon = document.getElementById('barIcon');
    const xIcon = document.getElementById('xIcon');
    
    if (mbTog && mbMenu) {
        mbTog.addEventListener('click', () => {
            const isOpen = mbMenu.classList.toggle('open');
            if (barIcon && xIcon) {
                barIcon.style.display = isOpen ? 'none' : 'inline-block';
                xIcon.style.display = isOpen ? 'inline-block' : 'none';
            }
        });
    }

    // Scroll Reveal Intersection Observer
    const rvObs = new IntersectionObserver(
        entries => entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('in');
        }), {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        }
    );
    document.querySelectorAll('.rv').forEach(el => rvObs.observe(el));
    
    // Initialize Dashboard Live Activity Ticker if element is present
    initActivityLogs();
    
    // Profile Dropdown close on outside click
    document.addEventListener('click', (e) => {
        const pd = document.getElementById('profileDropdown');
        const pw = document.getElementById('profileWrap');
        if (pd && pw && !pw.contains(e.target)) {
            pd.style.display = 'none';
            const ch = document.getElementById('profileChevron');
            if (ch) ch.style.transform = 'rotate(0deg)';
        }
    });
});

/* ==========================================
   2. AUTH SIMULATOR
   ========================================== */
function swTab(t) {
    const isL = t === 'login';
    const fl = document.getElementById('fLogin');
    const fs = document.getElementById('fSignup');
    const tl = document.getElementById('tabLogin');
    const ts = document.getElementById('tabSignup');
    
    if (fl && fs) {
        fl.style.display = isL ? 'block' : 'none';
        fs.style.display = isL ? 'none' : 'block';
    }
    if (tl && ts) {
        tl.classList.toggle('on', isL);
        ts.classList.toggle('on', !isL);
    }
    const le = document.getElementById('loginErr');
    const se = document.getElementById('signupErr');
    if (le) le.style.display = 'none';
    if (se) se.style.display = 'none';
}

function showErrLogin(msg) {
    const el = document.getElementById('loginErr');
    const txt = document.getElementById('loginErrMsg');
    if (el && txt) {
        txt.textContent = msg;
        el.style.display = 'block';
    }
}

function showErrSignup(msg) {
    const el = document.getElementById('signupErr');
    const txt = document.getElementById('signupErrMsg');
    if (el && txt) {
        txt.textContent = msg;
        el.style.display = 'block';
    }
}

function doLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const pass = document.getElementById('loginPass').value;
    
    if (!email) return showErrLogin('Por favor introduce tu dirección de email.');
    if (!pass) return showErrLogin('Por favor introduce tu contraseña.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showErrLogin('Por favor introduce un email válido.');
    if (pass.length < 6) return showErrLogin('La contraseña debe tener al menos 6 caracteres.');
    
    const btn = document.getElementById('loginBtn');
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Conectando con ArchStudio...';
    
    setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = 'Entrar al ArchStudio <i class="fa-solid fa-arrow-right ms-1 fa-sm"></i>';
        const name = email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        loginSuccess({
            name: name,
            email: email,
            role: 'Enterprise Architect'
        });
    }, 900);
}

function doSignup() {
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const pass = document.getElementById('signupPass').value;
    
    if (!name) return showErrSignup('Por favor introduce tu nombre completo.');
    if (!email) return showErrSignup('Por favor introduce tu email corporativo.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showErrSignup('Por favor introduce un email válido.');
    if (pass.length < 8) return showErrSignup('La contraseña debe tener al menos 8 caracteres.');
    
    const btn = document.getElementById('signupBtn');
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Creando espacio de Arquitectura...';
    
    setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = 'Crear Cuenta ArchStudio <i class="fa-solid fa-arrow-right ms-1 fa-sm"></i>';
        loginSuccess({
            name: name,
            email: email,
            role: 'Arquitecto de Software'
        });
    }, 1000);
}

function quickLogin(provider) {
    const names = { google: 'Alex Johnson (EA)', github: 'Enterprise Architect' };
    const emails = { google: 'alex@architect.com', github: 'operator@github.com' };
    
    const offCanvasEl = document.getElementById('lofc');
    const oc = bootstrap.Offcanvas.getInstance(offCanvasEl);
    if (oc) oc.hide();
    
    setTimeout(() => {
        loginSuccess({
            name: names[provider],
            email: emails[provider],
            role: 'Arquitecto Invitado'
        });
    }, 300);
}

function loginSuccess(user) {
    currentUser = user;
    chatHistory = [];
    
    const offCanvasEl = document.getElementById('lofc');
    const oc = bootstrap.Offcanvas.getInstance(offCanvasEl);
    if (oc) oc.hide();
    
    const initials = user.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    
    // Topbar Profile
    document.getElementById('userAvatar').textContent = initials;
    document.getElementById('userName').textContent = user.name;
    document.getElementById('userPlan').textContent = user.role;
    
    // Profile Dropdown
    document.getElementById('pdName').textContent = user.name;
    document.getElementById('pdEmail').textContent = user.email;
    
    // Switch views
    document.getElementById('landing').style.display = 'none';
    document.getElementById('nbar').style.display = 'none'; // Hide landing main header
    document.getElementById('dashboard').style.display = 'block';
    
    window.scrollTo(0, 0);
    
    setTimeout(() => {
        initOverviewChart();
    }, 200);
}

function doLogout() {
    currentUser = null;
    chatHistory = [];
    
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('landing').style.display = 'block';
    document.getElementById('nbar').style.display = 'flex'; // Restore landing header
    
    window.scrollTo(0, 0);
    clearChat();
}

/* ==========================================
   3. DASHBOARD INTERNAL ROUTING
   ========================================== */
function dbNav(section, btn) {
    document.querySelectorAll('.db-nl').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.db-section').forEach(s => s.classList.remove('active'));
    
    if (btn) btn.classList.add('active');
    
    const sec = document.getElementById('sec-' + section);
    if (sec) {
        sec.classList.add('active');
        sec.style.animation = 'fadeIn .4s ease';
    }
    
    const pd = document.getElementById('profileDropdown');
    if (pd) pd.style.display = 'none';
    
    if (section === 'overview') {
        setTimeout(initOverviewChart, 100);
    }
}

function toggleProfile(e) {
    if (e) e.stopPropagation();
    const pd = document.getElementById('profileDropdown');
    const ch = document.getElementById('profileChevron');
    if (pd) {
        const isShown = pd.style.display === 'block';
        pd.style.display = isShown ? 'none' : 'block';
        if (ch) ch.style.transform = isShown ? 'rotate(0deg)' : 'rotate(180deg)';
    }
}

function toggleDbSidebar() {
    const sb = document.getElementById('dbSidebar');
    if (sb) {
        sb.classList.toggle('mob-open');
    }
}

/* ==========================================
   4. CHARTING & MONITORING
   ========================================== */
function getChartConfigColors() {
    return {
        grid: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.06)',
        ticks: isDark ? '#6b6b8a' : '#7878a0'
    };
}

function initOverviewChart() {
    const ctx = document.getElementById('ovChart');
    if (!ctx) return;
    
    if (ovChartInst) {
        ovChartInst.destroy();
        ovChartInst = null;
    }
    
    const c = ctx.getContext('2d');
    const g = c.createLinearGradient(0, 0, 0, 200);
    g.addColorStop(0, 'rgba(139, 92, 246, 0.3)');
    g.addColorStop(1, 'rgba(59, 130, 246, 0.01)');
    
    const labels = ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', 'Ahora'];
    const data = [120, 95, 240, 310, 480, 520, 460];
    const { grid, ticks } = getChartConfigColors();
    
    ovChartInst = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [{
                label: 'Requests/sec',
                data,
                fill: true,
                backgroundColor: g,
                borderColor: '#8b5cf6',
                borderWidth: 2.5,
                tension: 0.4,
                pointRadius: 3,
                pointBackgroundColor: '#8b5cf6'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    grid: { color: grid },
                    ticks: { color: ticks, font: { family: 'Space Grotesk' } }
                },
                y: {
                    grid: { color: grid },
                    ticks: { color: ticks, font: { family: 'Space Grotesk' } }
                }
            }
        }
    });
}

function updateChartColors() {
    if (ovChartInst) {
        const { grid, ticks } = getChartConfigColors();
        ovChartInst.options.scales.x.grid.color = grid;
        ovChartInst.options.scales.x.ticks.color = ticks;
        ovChartInst.options.scales.y.grid.color = grid;
        ovChartInst.options.scales.y.ticks.color = ticks;
        ovChartInst.update();
    }
}

/* ==========================================
   5. SIMULATED KUBERNETES TERMINAL
   ========================================== */
function terminalCommand(cmd) {
    const term = document.getElementById('terminalBody');
    if (!term) return;
    
    term.innerHTML = `<div style="color: var(--tx3);">$ ${cmd}</div><div style="color: #60a5fa;"><i class="fa-solid fa-spinner fa-spin me-2"></i>Compilando modelo C4 en tiempo real...</div>`;
    
    setTimeout(() => {
        let output = '';
        if (cmd.includes('c4-context-banking')) {
            output = `
SYSTEM CONTAINER                         TECHNOLOGY     C4 ALIGNED   TOGAF PHASE
api-gateway-service                      FastAPI        YES          Fase C / G
identity-provider-auth                   Go             YES          Fase C / G
transaction-cqrs-engine                  Django/FastAPI YES          Fase C / G
event-streaming-kafka                    Scala/JVM      YES          Fase C / G
postgresql-db-primary                    C++/ACID       YES          Fase C / G
redis-distributed-cache                  C/In-Memory    YES          Fase C / G`;
        } else if (cmd.includes('c4-containers-gateway')) {
            output = `
C4 CONTAINER            DSL DEFINED   VERSION   GARD/SECURITY   HEALTH
api-gateway-service     YES           v2.4.1    Zero-Trust OK   PASS (100%)
identity-auth-service   YES           v1.9.0    mTLS Active     PASS (100%)
transaction-cqrs-engine YES           v3.1.2    Data Encryp.    PASS (100%)`;
        } else {
            output = `
DEPLOYMENT SANDBOX   HOSTING PROVIDER   C4 LOCATION   HEALTH
sandbox-local-01     Bare-metal / K3s   Local Lab     ONLINE
core-production-us   AWS / Multi-Region US-East-1     ONLINE
gateway-staging-eu   Azure / AKS        West-Europe   ONLINE`;
        }
        
        term.innerHTML = `<div style="color: var(--tx3); margin-bottom:6px;">$ ${cmd}</div><pre style="color: #34d399; margin: 0; line-height: 1.4; font-size: .8rem;">${output}</pre>`;
    }, 800);
}

function clearTerminal() {
    const term = document.getElementById('terminalBody');
    if (term) term.innerHTML = `<div>$ selecciona un diagrama C4 para previsualizar...</div>`;
}

/* ==========================================
   6. LIVE EVENT LOG STREAMER
   ========================================== */
const dbLogs = [
    ['#34d399', 'TOGAF: Auditoría de cumplimiento de Core Banking completada (Fase G).'],
    ['#8b5cf6', 'AaC: Structurizr DSL compilado. Generado SVG de Contexto.'],
    ['#34d399', 'BIAN: Mapeo de dominios de servicios financieros actualizado.'],
    ['#fbbf24', 'WARNING: Desviación menor detectada en arquitectura de contenedores.'],
    ['#60a5fa', 'ATAM: Escenario de resiliencia mitigado en base de datos PostgreSQL.'],
    ['#34d399', 'AaC: Cambios de diseño en API Gateway publicados.'],
    ['#8b5cf6', 'TOGAF: Plan de arquitectura del bloque transaccional publicado.'],
    ['#34d399', 'BIAN: Dominios de cobros y facturación integrados.']
];
let logIdx = 0;

function initActivityLogs() {
    const box = document.getElementById('liveActivity');
    if (!box) return;
    
    // Inject initial items
    box.innerHTML = '';
    for (let i = 0; i < 4; i++) {
        const [color, text] = dbLogs[i];
        const item = document.createElement('div');
        item.style.cssText = 'display:flex;gap:10px;padding:10px;background:var(--bg3);border-radius:10px;font-size:.74rem; border:1px solid var(--bd);';
        item.innerHTML = `<span style="width:7px;height:7px;border-radius:50%;background:${color};margin-top:4px;flex-shrink:0"></span><span style="color:var(--tx2); flex:1;">${text}</span><span style="color:var(--tx3);white-space:nowrap">${(i+1)*12}s ago</span>`;
        box.appendChild(item);
    }
    
    // Live Ticker Interval
    setInterval(() => {
        const currentSec = document.getElementById('sec-overview');
        if (!currentSec || !currentSec.classList.contains('active')) return;
        
        const [color, text] = dbLogs[logIdx % dbLogs.length];
        logIdx++;
        
        const item = document.createElement('div');
        item.style.cssText = 'display:flex;gap:10px;padding:10px;background:var(--bg3);border-radius:10px;font-size:.74rem; border: 1px solid var(--bd); animation:fadeIn .4s ease';
        item.innerHTML = `<span style="width:7px;height:7px;border-radius:50%;background:${color};margin-top:4px;flex-shrink:0"></span><span style="color:var(--tx2); flex:1;">${text}</span><span style="color:var(--tx3);white-space:nowrap">just now</span>`;
        
        box.insertBefore(item, box.firstChild);
        if (box.children.length > 4) {
            box.removeChild(box.lastChild);
        }
    }, 6000);
}

/* ==========================================
   7. SRE COPILOT CHATBOT (INTELLIGENT LOCAL RESPONDER)
   ========================================== */
function sendChat() {
    const inp = document.getElementById('chatInp');
    if (!inp) return;
    
    const msg = inp.value.trim();
    if (!msg) return;
    
    inp.value = '';
    appendMsg(msg, 'user');
    
    const sendBtn = document.getElementById('chatSendBtn');
    if (sendBtn) sendBtn.disabled = true;
    
    const typingId = appendTyping();
    
    // Process local response with realistic delay
    setTimeout(() => {
        removeTyping(typingId);
        const reply = getSreCopilotResponse(msg);
        appendMsg(reply, 'ai');
        if (sendBtn) sendBtn.disabled = false;
    }, 1200);
}

function appendMsg(text, role) {
    const body = document.getElementById('chatBody');
    if (!body) return;
    
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const wrap = document.createElement('div');
    wrap.className = 'd-flex flex-column gap-1';
    
    if (role === 'ai') {
        wrap.innerHTML = `
        <div class="msg msg-ai" style="padding:10px 14px; border-radius:12px; font-size:.85rem; line-height:1.5; background:rgba(139,92,246,0.14); border:1px solid rgba(139,92,246,0.2); color:var(--tx2); align-self: flex-start; max-width:85%; animation:fadeIn .3s ease">
            ${text}
        </div>
        <div class="msg-time" style="align-self:flex-start; padding-left:4px; font-size:.68rem; color:var(--tx3);">Architecture Copilot · ${time}</div>`;
    } else {
        wrap.innerHTML = `
        <div class="msg msg-user" style="padding:10px 14px; border-radius:12px; font-size:.85rem; line-height:1.5; background:var(--grad); color:#fff; align-self: flex-end; max-width:85%; animation:fadeIn .3s ease">
            ${text}
        </div>
        <div class="msg-time" style="align-self:flex-end; padding-right:4px; font-size:.68rem; color:var(--tx3);">Tú · ${time}</div>`;
    }
    
    body.appendChild(wrap);
    body.scrollTop = body.scrollHeight;
}

let typingCounter = 0;
function appendTyping() {
    const id = 'typ-' + (++typingCounter);
    const body = document.getElementById('chatBody');
    if (!body) return;
    
    const el = document.createElement('div');
    el.id = id;
    el.className = 'typing-ind';
    el.style.cssText = 'display:flex; gap:4px; padding:12px; align-self: flex-start;';
    el.innerHTML = '<div class="tdot" style="width:6px;height:6px;border-radius:50%;background:var(--pur);animation:tbounce 0.9s infinite;"></div><div class="tdot" style="width:6px;height:6px;border-radius:50%;background:var(--pur);animation:tbounce 0.9s infinite;animation-delay:0.15s"></div><div class="tdot" style="width:6px;height:6px;border-radius:50%;background:var(--pur);animation:tbounce 0.9s infinite;animation-delay:0.3s"></div>';
    
    body.appendChild(el);
    body.scrollTop = body.scrollHeight;
    return id;
}

function removeTyping(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
}

function clearChat() {
    const body = document.getElementById('chatBody');
    if (body) {
        body.innerHTML = `
        <div class="d-flex flex-column gap-1">
           <div class="msg msg-ai" style="padding:10px 14px; border-radius:12px; font-size:.85rem; line-height:1.5; background:rgba(139,92,246,0.14); border:1px solid rgba(139,92,246,0.2); color:var(--tx2); align-self: flex-start; max-width:85%;">
              ¡Hola! Soy el Architecture Copilot de Víctor. Puedo responder todas tus dudas sobre su perfil profesional, su experiencia con Kubernetes, su curso "Kubernetes Total", sus certificaciones o cómo contactarlo. ¿En qué te puedo ayudar hoy?
           </div>
           <div class="msg-time" style="align-self:flex-start; padding-left:4px; font-size:.68rem; color:var(--tx3);">Architecture Copilot · Justo ahora</div>
        </div>`;
    }
}

function quickMsg(msg) {
    const inp = document.getElementById('chatInp');
    if (inp) {
        inp.value = msg;
        sendChat();
    }
}

/* Intelligent Local Chat Bot Responses Mapping */
function getSreCopilotResponse(query) {
    const q = query.toLowerCase();
    
    if (q.includes('togaf') || q.includes('framework') || q.includes('gobernanza') || q.includes('governance')) {
        return `Víctor utiliza **TOGAF (The Open Group Architecture Framework)** como su estándar base de gobernanza y alineación. Domina el **método de desarrollo de arquitectura (ADM)** para estructurar sistemas complejos en fases claras:<br><br>• **Fases A-D**: Arquitectura de Negocio, Sistemas de Información y Tecnología.<br>• **Fase G (Gobernanza de la Implementación)**: Asegura que el desarrollo real cumpla estrictamente con las directrices de diseño.<br>• **Architecture as Code (AaC)**: Codifica especificaciones técnicas directamente en repositorios Git.`;
    }
    
    if (q.includes('bian') || q.includes('banca') || q.includes('financiero') || q.includes('banking')) {
        return `Para el sector financiero, Víctor aplica las directrices de **BIAN (Banking Industry Architecture Network)**. Esto le permite definir la semántica de servicios bancarios estándar, facilitando la creación de arquitecturas limpias y desacopladas:<br><br>• Definición exacta de **Service Domains** bancarios.<br>• Interoperabilidad garantizada entre microservicios core.<br>• Mapeo robusto alineado a regulaciones internacionales y diseño de APIs orientadas a la banca abierta (Open Banking).`;
    }
    
    if (q.includes('c4') || q.includes('modelo c4') || q.includes('diagrama') || q.includes('modelado')) {
        return `Víctor es un firme defensor de la documentación clara e intuitiva usando **C4 Model** (Contexto, Contenedores, Componentes y Código). Utiliza herramientas de **Architecture as Code (AaC)** como Structurizr, PlantUML, Diagrams (Python), y D2 para automatizar la generación de diagramas consistentes directamente desde repositorios de código.`;
    }
    
    if (q.includes('atam') || q.includes('atributos de calidad') || q.includes('riesgo') || q.includes('resiliencia') || q.includes('escalabilidad')) {
        return `Para evaluar la viabilidad de un diseño técnico antes de escribir código, Víctor aplica la metodología **ATAM (Architecture Tradeoff Analysis Method)**. Esto permite identificar y mitigar riesgos técnicos ponderando atributos de calidad (Disponibilidad, Seguridad, Rendimiento, Modificabilidad) alineados con los objetivos de negocio corporativos.`;
    }
    
    
    if (q.includes('experiencia') || q.includes('trayectoria') || q.includes('curriculum') || q.includes('cv') || q.includes('trabajado') || q.includes('perfil')) {
        return `Víctor S. Recio es un **Arquitecto Cloud Native & Kubernetes Specialist** con más de **10 años de experiencia** diseñando sistemas distribuidos, optimizando rendimiento e integrando prácticas DevOps y SRE.<br><br>Ha liderado la automatización de infraestructura en nubes complejas y es un apasionado de la fiabilidad y el escalado seguro.`;
    }
    
    if (q.includes('kubernetes') || q.includes('k8s') || q.includes('eks') || q.includes('aks') || q.includes('orquestar')) {
        return `Víctor es especialista de élite en **Kubernetes**. Su experiencia incluye:<br>• Diseño de clústeres Multi-AZ tolerantes a fallos en AWS (EKS) y Azure (AKS).<br>• Implementación de Service Meshes (mTLS, control de tráfico con Istio/Linkerd).<br>• Automatización basada en GitOps moderno con **ArgoCD**.<br>• Creación de operadores y gestión avanzada de Helm charts.`;
    }
    
    if (q.includes('curso') || q.includes('cursos') || q.includes('total') || q.includes('aprender') || q.includes('formacion') || q.includes('taller')) {
        return `Víctor cuenta con dos cursos estelares muy demandados:<br><br>1. **Kubernetes Total: De Cero a Héroe**: La formación en español definitiva que enseña desde los fundamentos de contenedores hasta configuraciones complejas en producción y desarrollo de operadores.<br>2. **Arquitectura de Nube Multi-Cloud**: Principios de diseño para crear soluciones tolerantes a fallos y rentables en AWS, Azure y GCP.<br><br>Puedes explorar más detalles y unirte en la sección "Formación" de la página de inicio o escribiendo a su correo corporativo.`;
    }
    
    if (q.includes('certificacion') || q.includes('certificaciones') || q.includes('cka') || q.includes('certificado')) {
        return `Víctor cuenta con prestigiosas certificaciones de la industria Cloud Native, destacando la de **CKA (Certified Kubernetes Administrator)** de la Cloud Native Computing Foundation (CNCF), que avala sus amplios conocimientos en la instalación, configuración y operación de clústeres de Kubernetes en producción.`;
    }
    
    if (q.includes('contacto') || q.includes('contactar') || q.includes('email') || q.includes('correo') || q.includes('linkedin') || q.includes('escribir')) {
        return `Puedes ponerte en contacto con Víctor de forma directa a través de:<br>• **Correo Electrónico**: <a href="mailto:vsrecio@nixversity.com" style="color:var(--pur); font-weight:600;">vsrecio@nixversity.com</a><br>• **LinkedIn**: <a href="https://www.linkedin.com/in/vsrecio/" target="_blank" style="color:var(--pur); font-weight:600;">Víctor S. Recio en LinkedIn</a><br><br>Escríbele y te responderá con gusto a la brevedad.`;
    }
    
    if (q.includes('tarifa') || q.includes('precio') || q.includes('costo') || q.includes('coste') || q.includes('contratar') || q.includes('plan')) {
        return `Víctor ofrece tres planes de colaboración y formación adaptados a tus objetivos:<br><br>• **Autoaprendizaje ($19/mes)**: Acceso ilimitado a todos los cursos online pregrabados (Kubernetes Total, Multi-cloud) y comunidad en Discord.<br>• **Mentoría Elite ($199/mes)**: Sesiones 1:1 semanales directas con él, soporte a incidencias en producción y revisión de tus manifiestos IaC.<br>• **Talleres y Consultoría (Custom)**: Talleres corporativos in-house, auditoría profunda de tus clústeres y arquitectura personalizada.`;
    }
    
    if (q.includes('metodologia') || q.includes('proceso') || q.includes('fases') || q.includes('trabajar')) {
        return `El proceso de Víctor consta de 3 fases sólidas:<br><br>1. **Auditoría & Diagnóstico**: Análisis exhaustivo de los costes de nube, seguridad e ineficiencias.<br>2. **Automatización**: Despliegue de Infraestructura como Código (Terraform) y pipelines de automatización con GitOps.<br>3. **Observabilidad & Traspaso**: Configuración de dashboards Prometheus/Grafana y capacitación técnica completa de tu equipo.`;
    }
    
    return `Entendido. Te comento que Víctor S. Recio es un apasionado de la fiabilidad, la automatización y Kubernetes. Puedes preguntarme más sobre:<br><br>• Su **trayectoria profesional** o **experiencia**.<br>• Su especialización en **Kubernetes**.<br>• Sus **cursos** y programas de **formación**.<br>• Sus **certificaciones**.<br>• Las **tarifas** de sus servicios.<br>• O **cómo contactarlo** directamente.`;
}
