
 // ============================
 // H4X ENGINE SCRIPT
 // ============================


// ============================
// GLOBAL ELEMENTS
// ============================

const menuButtons = document.querySelectorAll(".menu-btn");
const configPanel = document.querySelector(".config-panel");
const gameCards = document.querySelectorAll(".game-card");
const message = document.getElementById("message");
const applyButton = document.getElementById("applyButton");


// ============================
// PROFILES
// ============================

const profiles = {
    "FREE FIRE": ["SMOOTH", "90", "1080P", "OFF"],
    "BLOOD STRIKE": ["BALANCED", "120", "1080P", "LOW"],
    "PUBG MOBILE": ["SMOOTH", "90", "1080P", "OFF"],
    "OTHER": ["BALANCED", "60", "720P", "OFF"]
};


// ============================
// MONITOR TIMER
// ============================

let monitorInterval = null;


// ============================
// OPTION BUTTON EVENTS
// ============================

function addOptionEvents() {
    const optionButtons = document.querySelectorAll(".option");

    optionButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const parent = button.parentElement;

            parent.querySelectorAll(".option").forEach(function(item) {
                item.classList.remove("active");
            });

            button.classList.add("active");

            if (message) {
                message.textContent =
                    "EL NINJA EFX • " +
                    button.textContent.trim() +
                    " SELECTED";

                message.style.color = "#00ff66";
            }
        });
    });
}


// ============================
// STOP MONITOR
// ============================

function stopMonitor() {
    if (monitorInterval !== null) {
        clearInterval(monitorInterval);
        monitorInterval = null;
    }
}


// ============================
// START MONITOR
// ============================

function startMonitor() {
    stopMonitor();

    function updateMonitor() {
        const fps = Math.floor(Math.random() * 8) + 85;
        const ping = Math.floor(Math.random() * 12) + 35;
        const temp = Math.floor(Math.random() * 4) + 35;
        const gpu = Math.floor(Math.random() * 15) + 42;

        const fpsElement = document.getElementById("monitorFPS");
        const pingElement = document.getElementById("monitorPing");
        const tempElement = document.getElementById("monitorTemp");
        const gpuElement = document.getElementById("monitorGPU");

        if (fpsElement) {
            fpsElement.textContent = fps + " FPS";
        }

        if (pingElement) {
            pingElement.textContent = ping + " MS";
        }

        if (tempElement) {
            tempElement.textContent = temp + "°C";
        }

        if (gpuElement) {
            gpuElement.textContent = gpu + "%";
        }
    }

    updateMonitor();
    monitorInterval = setInterval(updateMonitor, 1500);
}


// ============================
// MENU BUTTONS
// ============================

menuButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        stopMonitor();

        menuButtons.forEach(function(item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        const tab = button.textContent.trim();

        // CONFIG
        if (tab === "CONFIG") {
            configPanel.innerHTML = `
                <div class="panel-title">
                    <div>
                        <span>01</span>
                        <h2>CONFIGURATION</h2>
                    </div>
                    <p>EFX PROFILE</p>
                </div>

                <div class="setting-row">
                    <div class="setting-name">
                        <span>GRAPHICS</span>
                        <small>Visual quality</small>
                    </div>
                    <div class="options">
                        <button class="option active">SMOOTH</button>
                        <button class="option">BALANCED</button>
                        <button class="option">HD</button>
                    </div>
                </div>

                <div class="setting-row">
                    <div class="setting-name">
                        <span>FRAME RATE</span>
                        <small>Maximum FPS</small>
                    </div>
                    <div class="options">
                        <button class="option">60</button>
                        <button class="option active">90</button>
                        <button class="option">120</button>
                    </div>
                </div>

                <div class="setting-row">
                    <div class="setting-name">
                        <span>RESOLUTION</span>
                        <small>Display resolution</small>
                    </div>
                    <div class="options">
                        <button class="option">720P</button>
                        <button class="option active">1080P</button>
                        <button class="option">2K</button>
                    </div>
                </div>

                <div class="setting-row">
                    <div class="setting-name">
                        <span>SHADOW</span>
                        <small>Rendering quality</small>
                    </div>
                    <div class="options">
                        <button class="option active">OFF</button>
                        <button class="option">LOW</button>
                        <button class="option">HIGH</button>
                    </div>
                </div>
            `;

            addOptionEvents();
        }

        // PERFORMANCE
        else if (tab === "PERFORMANCE") {
            configPanel.innerHTML = `
                <div class="panel-title">
                    <div>
                        <span>02</span>
                        <h2>PERFORMANCE</h2>
                    </div>
                    <p>EFX ENGINE</p>
                </div>

                <div class="setting-row">
                    <div class="setting-name">
                        <span>FPS MODE</span>
                        <small>Frame stability</small>
                    </div>
                    <div class="setting-name">
                        <span style="color:#00ff66;">
                            HIGH PERFORMANCE
                        </span>
                    </div>
                </div>

                <div class="setting-row">
                    <div class="setting-name">
                        <span>RENDER MODE</span>
                        <small>Graphics processing</small>
                    </div>
                    <div class="setting-name">
                        <span style="color:#00ff66;">OPTIMIZED</span>
                    </div>
                </div>

                <div class="setting-row">
                    <div class="setting-name">
                        <span>LATENCY</span>
                        <small>Input response</small>
                    </div>
                    <div class="setting-name">
                        <span style="color:#00ff66;">LOW</span>
                    </div>
                </div>
            `;
        }

        // MONITOR
        else if (tab === "MONITOR") {
            configPanel.innerHTML = `
                <div class="panel-title">
                    <div>
                        <span>03</span>
                        <h2>SYSTEM MONITOR</h2>
                    </div>
                    <p>
                        <span class="live-dot"></span>
                        LIVE STATUS
                    </p>
                </div>

                <div class="setting-row">
                    <div class="setting-name">
                        <span>FPS</span>
                        <small>Current frame rate</small>
                    </div>
                    <div class="setting-name">
                        <span id="monitorFPS" style="color:#00ff66;">
                            90 FPS
                        </span>
                    </div>
                </div>

                <div class="setting-row">
                    <div class="setting-name">
                        <span>PING</span>
                        <small>Network latency</small>
                    </div>
                    <div class="setting-name">
                        <span id="monitorPing" style="color:#00ff66;">
                            42 MS
                        </span>
                    </div>
                </div>

                <div class="setting-row">
                    <div class="setting-name">
                        <span>TEMPERATURE</span>
                        <small>Device temperature</small>
                    </div>
                    <div class="setting-name">
                        <span id="monitorTemp" style="color:#00ff66;">
                            36°C
                        </span>
                    </div>
                </div>

                <div class="setting-row">
                    <div class="setting-name">
                        <span>GPU LOAD</span>
                        <small>Graphics processor load</small>
                    </div>
                    <div class="setting-name">
                        <span id="monitorGPU" style="color:#00ff66;">
                            48%
                        </span>
                    </div>
                </div>
            `;

            startMonitor();
        }

        // SYSTEM
        else if (tab === "SYSTEM") {
            configPanel.innerHTML = `
                <div class="panel-title">
                    <div>
                        <span>04</span>
                        <h2>SYSTEM</h2>
                    </div>
                    <p>DEVICE INFO</p>
                </div>

                <div class="setting-row">
                    <div class="setting-name">
                        <span>DEVICE STATUS</span>
                        <small>System availability</small>
                    </div>
                    <div class="setting-name">
                        <span style="color:#00ff66;">ONLINE</span>
                    </div>
                </div>

                <div class="setting-row">
                    <div class="setting-name">
                        <span>EFX ENGINE</span>
                        <small>Performance engine</small>
                    </div>
                    <div class="setting-name">
                        <span style="color:#00ff66;">READY</span>
                    </div>
                </div>

                <div class="setting-row">
                    <div class="setting-name">
                        <span>PROFILE</span>
                        <small>Current configuration</small>
                    </div>
                    <div class="setting-name">
                        <span style="color:#00ff66;">ACTIVE</span>
                    </div>
                </div>
            `;
        }
    });
});


// ============================
// GAME SELECTOR
// ============================

gameCards.forEach(function(card) {
    card.addEventListener("click", function() {
        const gameName = card.querySelector("strong")
            ?.textContent.trim();

        const profile = profiles[gameName];

        if (!profile) {
            if (message) {
                message.textContent = "PROFILE NOT FOUND";
                message.style.color = "#ff1744";
            }
            return;
        }

        gameCards.forEach(function(item) {
            item.classList.remove("active");
        });

        card.classList.add("active");

        const configButton = Array.from(menuButtons)
            .find(function(button) {
                return button.textContent.trim() === "CONFIG";
            });

        if (configButton) {
            configButton.click();
        }

        const rows = configPanel.querySelectorAll(".setting-row");

        rows.forEach(function(row, index) {
            const options = row.querySelectorAll(".option");
            const target = profile[index];

            options.forEach(function(option) {
                option.classList.toggle(
                    "active",
                    option.textContent.trim() === target
                );
            });
        });

        if (message) {
            message.textContent =
                gameName + " • EFX PROFILE LOADED";
            message.style.color = "#00ff66";
        }
    });
});


// ============================
// APPLY H4X PROFILE
// ============================

const activationOverlay = document.getElementById("activationOverlay");
const activationBox = document.getElementById("activationBox");

if (applyButton && activationOverlay && activationBox) {
    applyButton.addEventListener("click", function() {
        if (applyButton.disabled) return;

        applyButton.disabled = true;

        activationOverlay.classList.add("show");
        document.body.classList.add("activation-active");
        activationBox.classList.remove("success");

        document.getElementById("activationIcon").textContent = "⚡";
        document.getElementById("activationLoader").style.display = "block";
        document.getElementById("activationTitle").textContent =
            "ACTIVATING H4X PROFILE";
        document.getElementById("activationText").textContent =
            "Applying your selected profile...";
        document.getElementById("activationStatus").textContent =
            "INITIALIZING SYSTEM";

        if (message) {
            message.textContent = "EL NINJA H4X • ACTIVATING...";
        }

        setTimeout(function() {
            activationBox.classList.add("success");

            document.getElementById("activationIcon").textContent = "✓";
            document.getElementById("activationLoader").style.display = "none";
            document.getElementById("activationTitle").textContent =
                "ACTIVATION SUCCESSFUL!";
            document.getElementById("activationText").textContent =
                "Your profile is ready.";
            document.getElementById("activationStatus").textContent =
                "✓ PROFILE READY";

            if (message) {
                message.textContent =
                    "EL NINJA H4X • PROFILE APPLIED SUCCESSFULLY";
            }

            applyButton.innerHTML = "<span>✓</span> PROFILE READY";
        }, 1800);

        setTimeout(function() {
            activationOverlay.classList.remove("show");
            document.body.classList.remove("activation-active");

            applyButton.disabled = false;
            applyButton.innerHTML =
                "<span>⚡</span> APPLY H4X PROFILE";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, 4000);
    });
}


// ============================
// INITIAL OPTION EVENTS
// ============================

addOptionEvents();
