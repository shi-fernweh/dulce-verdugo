// --- BASE DE DATOS DE MISIONES (15 NIVELES) ---
const MISSIONS = [
    {
        id: 1,
        title: "EXPEDIENTE 01: EL OBJETIVO",
        hint: "Cap 3: Marca del reloj que intentaron robarle a Zane.",
        password: "patek",
        content: `
            <h2>> FICHA DE OBJETIVO: ZANE T.</h2>
            <img src="images/sample.jpg" class="evidence-img" alt="Foto de Zane">
            <div class="chat-container">
                <div class="chat-right">
                    <strong>NOAH:</strong> "Contacto visual establecido. Se aferra a ese reloj Patek Philippe como si fuera su única dignidad."
                </div>
                <div class="chat-left">
                    <strong>LANDON (ENCRIPTADO):</strong> "No te confíes. Los animales asustados muerden."
                </div>
            </div>
        `
    },
    {
        id: 2,
        title: "EXPEDIENTE 02: LAVADO DE DINERO",
        hint: "Cap 5: Nombre del archivo encriptado en el servidor.",
        password: "rojo",
        content: `
            <h2>> DOCUMENTO INTERCEPTADO</h2>
            <img src="images/sample.jpg" class="evidence-img" alt="Documento Lavado">
            <div class="doc-paper">
                <div class="red-stamp">CONFIDENCIAL</div>
                <p><strong>DE:</strong> ZANDER TUMBLER<br><strong>PARA:</strong> KIEV_HOLDINGS_LLC</p>
                <p>La transferencia de 50 Millones en diamantes sintéticos está programada. Si la auditoría ve esto, caeremos todos.</p>
            </div>
        `
    },
    {
        id: 3,
        title: "EXPEDIENTE 03: LA CULPA",
        hint: "Cap 9: ¿Qué bebían cuando Zane confesó sobre Elaine?",
        password: "whiskey",
        content: `
            <h2>> EVIDENCIA VISUAL: HOTEL PALACE</h2>
            <img src="images/sample.jpg" class="evidence-img" alt="Vasos Whiskey">
            <p><strong>ZANE:</strong> "Yo la maté... no con mis manos, pero la maté. Zander la destruyó y yo miré hacia otro lado."</p>
            <p><strong>NOTA DE NOAH:</strong> El alcohol le suelta la lengua. Su culpa es mi mejor arma.</p>
        `
    },
    {
        id: 4,
        title: "EXPEDIENTE 04: EL VOYEUR",
        hint: "Cap 12: ¿Qué le pidió Noah a Catherine a cambio de 'más'?",
        password: "combinacion",
        content: `
            <h2>> CÁMARA DE SEGURIDAD: ARCHIVO</h2>
            <p style="background:red; color:white; display:inline-block; padding:2px;">REC ●</p>
            <img src="images/sample.jpg" class="evidence-img" alt="Cámara Seguridad">
            <p><strong>CATHERINE:</strong> "¡La combinación es 88-12-90! ¡Ahora tócamé!"</p>
            <p class="text-neon">>> ACCESO A CAJA FUERTE OBTENIDO.</p>
        `
    },
    {
        id: 5,
        title: "EXPEDIENTE 05: LA TRAMPA",
        hint: "Cap 14: ¿A nombre de quién subió Noah los videos?",
        password: "vance",
        content: `
            <h2>> LOG DEL SERVIDOR</h2>
            <img src="images/sample.jpg" class="evidence-img" alt="Pantalla Hackeo">
            <p><strong>USUARIO:</strong> AGENTE_VANCE (CLONADO)</p>
            <p><strong>ACCIÓN:</strong> UPLOAD_LEAK_ZANDER.MP4</p>
            <hr>
            <p class="text-neon">>> TRAMPA EJECUTADA. El sabueso ha sido inculpado.</p>
        `
    },
    {
        id: 6,
        title: "EXPEDIENTE 06: EJECUCIÓN",
        hint: "Cap 20: Maniobra para sacar a Zander de la carretera.",
        password: "pit",
        content: `
            <h2>> REPORTE DE INCIDENTE</h2>
            <img src="images/sample.jpg" class="evidence-img" alt="Auto Destrozado">
            <p><strong>VÍCTIMA:</strong> ZANDER TUMBLER</p>
            <p><strong>CAUSA:</strong> ACCIDENTE VEHICULAR</p>
            <p class="text-danger">EL REY HA MUERTO. Sus últimas palabras fueron una advertencia para Zane.</p>
        `
    },
    {
        id: 7,
        title: "EXPEDIENTE 07: HIBRISTOFILIA",
        hint: "Cap 22: Objeto que Catherine lanzó por la ventana.",
        password: "piedra",
        content: `
            <h2>> FOTO DE LA ESCENA</h2>
            <img src="images/sample.jpg" class="evidence-img" alt="Ventana Rota">
            <div class="doc-paper" style="transform:rotate(1deg);">
                <p>El miedo lo excita. Cuando la piedra rompió el cristal, Zane no corrió. Se aferró a mí. Lo hice mío contra la pared, sobre los cristales rotos.</p>
            </div>
        `
    },
    {
        id: 8,
        title: "EXPEDIENTE 08: PODER ECONÓMICO",
        hint: "Cap 25: Color de la tarjeta de Noah.",
        password: "negra",
        content: `
            <h2>> ESTADO DE CUENTA: SWISS BANK</h2>
            <img src="images/sample.jpg" class="evidence-img" alt="Tarjeta Black">
            <p><strong>TARJETA:</strong> CENTURION BLACK</p>
            <p><strong>LÍMITE:</strong> SIN LÍMITE</p>
            <p><strong>NOTA:</strong> Zane ni siquiera preguntó de dónde saqué el dinero.</p>
        `
    },
    {
        id: 9,
        title: "EXPEDIENTE 09: LA CARNADA",
        hint: "Cap 27: Lugar de la supuesta cuenta falsa.",
        password: "caiman",
        content: `
            <h2>> EVIDENCIA RECUPERADA (VANCE)</h2>
            <p>Estas son las fotos que Vance tomó antes de que lo elimináramos.</p>
            <img src="images/sample.jpg" class="evidence-img" alt="Foto Paparazzi">
            <p>Creyó que la cuenta en <strong>ISLAS CAIMÁN</strong> era real. Pobre aficionado.</p>
        `
    },
    {
        id: 10,
        title: "EXPEDIENTE 10: AUTOPSIA FALSA",
        hint: "Cap 28: Causa de muerte oficial de Catherine.",
        password: "arritmia",
        content: `
            <h2>> INFORME FORENSE FINAL</h2>
            <img src="images/sample.jpg" class="evidence-img" alt="Informe Forense">
            <div class="doc-paper">
                <div class="red-stamp">CASO CERRADO</div>
                <p><strong>NOMBRE:</strong> CATHERINE DENSON</p>
                <p><strong>CAUSA:</strong> MUERTE NATURAL (ARRITMIA CONGÉNITA)</p>
            </div>
            <p class="text-neon">>> COSTE DEL SOBORNO: $500,000.</p>
        `
    },
    {
        id: 11,
        title: "EXPEDIENTE 11: EL JEFE",
        hint: "Cap 34: Años de auditoría que ordenó Landon.",
        password: "diez",
        content: `
            <h2>> PERFIL: LANDON SWANSON</h2>
            <img src="images/sample.jpg" class="evidence-img" alt="Silueta Landon">
            <p><strong>ESTADO:</strong> OPERATIVO</p>
            <p>Nadie reconoció su cara. Las cicatrices y la testosterona hicieron un buen trabajo.</p>
        `
    },
    {
        id: 12,
        title: "EXPEDIENTE 12: EL ASESINATO",
        hint: "Cap 35: Lugar donde planearon la muerte de Landon.",
        password: "baño",
        content: `
            <h2>> GRABACIÓN DE VOZ: #FINAL_PROOF</h2>
            <img src="images/sample.jpg" class="evidence-img" alt="Baño Lujoso">
            <div class="chat-container">
                <div class="chat-left">
                    <strong>ZANE:</strong> "Hazlo. Por favor. Hazle lo mismo que a Zander. Mátalo."
                </div>
            </div>
            <p class="text-danger">>> EVIDENCIA INCRIMINATORIA GUARDADA.</p>
        `
    },
    {
        id: 13,
        title: "EXPEDIENTE 13: LA VERDAD",
        hint: "Cap 39: Nombre verdadero de Noah.",
        password: "landon",
        content: `
            <h2>> ERROR DE SISTEMA: IDENTIDAD</h2>
            <img src="images/sample.jpg" class="evidence-img" alt="Glitch Identidad">
            <p>BUSCANDO "NOAH SALLOW"... <span class="text-danger">0 RESULTADOS.</span></p>
            <p>BUSCANDO "LANDON SWANSON"... <span class="text-neon">100% COINCIDENCIA.</span></p>
            <p>Mi esposo se llama <strong>Landon Swanson</strong>. Y yo soy su espada.</p>
        `
    },
    {
        id: 14,
        title: "EXPEDIENTE 14: DAREY",
        hint: "Cap 51: Apodo secreto de Elaine.",
        password: "darey",
        content: `
            <h2>> FLASHBACK: EL NOMBRE</h2>
            <img src="images/sample.jpg" class="evidence-img" alt="Nota Darey">
            <div class="doc-paper">
                <p>"Te llamaré Darey. Porque eres valiente. Porque te atreves."</p>
            </div>
            <p>Usar ese nombre contra él fue el golpe de gracia. Cuando Landon lo gritó, la mente de Zane se rompía.</p>
        `
    },
    {
        id: 15,
        title: "EXPEDIENTE 15: FINAL",
        hint: "Epílogo: Costa donde viven al final.",
        password: "amalfitana",
        content: `
            <h2>> UBICACIÓN: POSITANO</h2>
            <img src="images/sample.jpg" class="evidence-img" alt="Costa Amalfitana">
            <p><strong>ESTADO:</strong> LIBRES</p>
            <p>El sol calienta las cicatrices de Landon. Zane es solo un mal recuerdo enterrado bajo concreto.</p>
            <div style="text-align:center; margin-top:30px;">
                <h1 style="font-family:'Special Elite'; color:var(--neon);">FIN DEL JUEGO</h1>
                <p>GRACIAS POR JUGAR, AGENTE.</p>
            </div>
        `
    }
];

// --- LÓGICA DE LA APP (SISTEMA MULTI-USUARIO REAL) ---
const app = {
    user: null,         
    userId: null,       // Esta será la clave única en el navegador
    currentMission: null,

    init: () => {
        // Al abrir, miramos si alguien dejó la sesión abierta
        const savedUser = localStorage.getItem('dv_active_session_name');
        if (savedUser) {
            app.setUser(savedUser);
            app.showDashboard();
        }
    },

    // Configura el usuario actual y crea su ID única
    setUser: (name) => {
        app.user = name.trim();
        // Convertimos a minúsculas y quitamos espacios para crear una ID única
        // Ejemplo: "Noah Sallow" -> "dv_data_noahsallow"
        app.userId = 'dv_data_' + app.user.toLowerCase().replace(/\s+/g, '');
        
        // Guardamos que hay una sesión activa
        localStorage.setItem('dv_active_session_name', app.user);
    },

    login: () => {
        const input = document.getElementById('agent-name');
        if (!input.value.trim()) return alert("IDENTIFICACIÓN REQUERIDA");
        
        app.setUser(input.value);
        app.showDashboard();
    },

    logout: () => {
        // Borramos SOLO el indicador de sesión activa, NO los datos del usuario
        localStorage.removeItem('dv_active_session_name');
        
        app.user = null;
        app.userId = null;
        document.getElementById('agent-name').value = "";
        
        // Volvemos a la pantalla de inicio
        app.switchView('view-login');
    },

    // RECUPERAR: Busca los datos usando la ID única del usuario actual
    getUserProgress: () => {
        if (!app.userId) return [];
        const data = localStorage.getItem(app.userId);
        return data ? JSON.parse(data) : []; // Si no hay datos, devuelve lista vacía
    },

    // GUARDAR: Guarda los datos en la caja específica del usuario actual
    saveUserProgress: (missionId) => {
        if (!app.userId) return;
        
        let unlockedMissions = app.getUserProgress();
        if (!unlockedMissions.includes(missionId)) {
            unlockedMissions.push(missionId);
            // Guardamos usando la ID única como llave
            localStorage.setItem(app.userId, JSON.stringify(unlockedMissions));
        }
    },

    showDashboard: () => {
        app.switchView('view-dashboard');
        document.getElementById('display-agent').innerText = app.user.toUpperCase();
        app.renderMissions();
    },

    renderMissions: () => {
        const list = document.getElementById('missions-list');
        list.innerHTML = "";
        
        // Obtenemos SOLO las misiones de este usuario
        const unlockedIds = app.getUserProgress(); 
        
        let unlockedCount = 0;

        MISSIONS.forEach(mission => {
            const isUnlocked = unlockedIds.includes(mission.id);
            if (isUnlocked) unlockedCount++;

            const card = document.createElement('div');
            card.className = `mission-card ${isUnlocked ? 'unlocked' : 'locked'}`;
            card.innerHTML = `
                <div>
                    <strong>${mission.title}</strong>
                    <div style="font-size:0.8rem; color:#888; margin-top:5px;">${isUnlocked ? 'ACCESO CONCEDIDO' : 'ENCRIPTADO'}</div>
                </div>
                <div>${isUnlocked ? '🔓' : '🔒'}</div>
            `;
            
            card.onclick = () => { isUnlocked ? app.openFile(mission) : app.openTerminal(mission); };
            list.appendChild(card);
        });

        // Actualizar estadísticas
        document.getElementById('completed-count').innerText = unlockedCount;
        const percent = (unlockedCount / MISSIONS.length) * 100;
        document.getElementById('progress-fill').style.width = `${percent}%`;
        
        // Rango
        const rank = document.getElementById('agent-rank');
        if(percent < 30) rank.innerText = "INICIADO";
        else if(percent < 60) rank.innerText = "HACKER";
        else if(percent < 100) rank.innerText = "VERDUGO";
        else rank.innerText = "DIOS DEL CAOS";
    },

    openTerminal: (mission) => {
        app.currentMission = mission;
        app.switchView('view-terminal');
        // Usa padStart para que salga "MSN-01" en vez de "MSN-1"
        document.getElementById('terminal-id').innerText = `MSN-${String(mission.id).padStart(2,'0')}`;
        document.getElementById('mission-target').innerText = mission.title; // Usamos title como target visual
        document.getElementById('mission-hint').innerText = mission.hint;
        document.getElementById('mission-password').value = "";
        document.getElementById('error-msg').classList.add('hidden');
    },

    checkCode: () => {
        const input = document.getElementById('mission-password').value.toLowerCase().trim();
        // Normalizamos para quitar acentos si la usuaria los pone
        const normalize = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        if (normalize(input) === normalize(app.currentMission.password)) {
            // ¡IMPORTANTE! Aquí guardamos el progreso para este usuario
            app.saveUserProgress(app.currentMission.id);
            app.openFile(app.currentMission);
        } else {
            const err = document.getElementById('error-msg');
            err.classList.remove('hidden');
            setTimeout(() => err.classList.add('hidden'), 2000);
        }
    },

    openFile: (mission) => {
        app.switchView('view-file');
        document.getElementById('file-display').innerHTML = mission.content;
    },

    switchView: (id) => {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
        const view = document.getElementById(id);
        view.classList.remove('hidden');
        setTimeout(() => view.classList.add('active'), 10);
    }
};

// --- SEGURIDAD (ANTI-COPIA) ---
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
    // Bloquea F12, Ctrl+I, Ctrl+U
    if(e.keyCode == 123) return false;
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
}

// Iniciar app
document.addEventListener('DOMContentLoaded', app.init);
