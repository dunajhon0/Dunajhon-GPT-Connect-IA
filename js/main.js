document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }

                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact Form Obfuscation logic
    const contactForm = document.getElementById('secure-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Por favor, completa todos los campos.');
                return;
            }

            // Using FormSubmit with a dynamically constructed email to avoid spam bots scraping the HTML
            // Note: In a real production environment, a backend proxy is much safer.
            const user = 'dunajhon0';
            const domain = 'gmail.com';
            const actionUrl = `https://formsubmit.co/${user}@${domain}`;
            
            this.action = actionUrl;
            
            // Add next redirect
            const nextInput = document.createElement('input');
            nextInput.type = 'hidden';
            nextInput.name = '_next';
            nextInput.value = window.location.origin + '/contacto.html?success=true';
            this.appendChild(nextInput);
            
            // Add autoresponse
            const autoresponseInput = document.createElement('input');
            autoresponseInput.type = 'hidden';
            autoresponseInput.name = '_autoresponse';
            autoresponseInput.value = 'Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.';
            this.appendChild(autoresponseInput);

            // Hide captchas from formsubmit to use our own or just invisble
            const captchaInput = document.createElement('input');
            captchaInput.type = 'hidden';
            captchaInput.name = '_captcha';
            captchaInput.value = 'false';
            this.appendChild(captchaInput);

            this.submit();
        });
        
        // Show success message if present in URL
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('success') === 'true') {
            const successMsg = document.createElement('div');
            successMsg.style.background = 'rgba(0, 255, 136, 0.2)';
            successMsg.style.color = 'var(--neon-green)';
            successMsg.style.padding = '15px';
            successMsg.style.borderRadius = '10px';
            successMsg.style.marginBottom = '20px';
            successMsg.style.textAlign = 'center';
            successMsg.style.border = '1px solid var(--neon-green)';
            successMsg.innerText = '¡Mensaje enviado con éxito! Te responderemos a la brevedad.';
            contactForm.prepend(successMsg);
        }
    }

    // Consent Mode v2 Banner Logic
    const consentKey = 'dunajhon_cookie_consent';
    const consentStatus = localStorage.getItem(consentKey);

    function loadTrackers() {
        console.log('Consent granted: Loading AdSense and Analytics trackers (Consent Mode v2)...');
        // Simulated tracking injection:
        // window.dataLayer = window.dataLayer || [];
        // function gtag(){dataLayer.push(arguments);}
        // gtag('consent', 'update', { 'ad_storage': 'granted', 'analytics_storage': 'granted' });
    }

    if (consentStatus === 'granted') {
        loadTrackers();
    } else if (!consentStatus) {
        // Build dynamic banner
        const banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 15px;">
                <p style="margin: 0; font-size: 0.95rem; line-height: 1.5; color: var(--text-primary);">
                    Utilizamos cookies propias y de terceros (incluyendo socios publicitarios como Google AdSense) para fines analíticos y para mostrarte publicidad personalizada en base a un perfil elaborado a partir de tus hábitos de navegación. <a href="cookies.html" style="color: var(--cyan); text-decoration: underline;">Más información</a>.
                </p>
                <div style="display: flex; gap: 10px; justify-content: flex-end;">
                    <button id="btn-reject-cookies" class="btn btn-secondary" style="padding: 10px 20px; font-size: 0.85rem;">Rechazar</button>
                    <button id="btn-accept-cookies" class="btn btn-primary" style="padding: 10px 20px; font-size: 0.85rem;">Aceptar Todas</button>
                </div>
            </div>
        `;
        
        banner.style.position = 'fixed';
        banner.style.bottom = '20px';
        banner.style.left = '50%';
        banner.style.transform = 'translateX(-50%)';
        banner.style.width = '90%';
        banner.style.maxWidth = '700px';
        banner.style.background = 'var(--surface-color)';
        banner.style.border = '1px solid var(--border-color)';
        banner.style.borderRadius = '12px';
        banner.style.padding = '25px';
        banner.style.boxShadow = '0 10px 30px rgba(0,0,0,0.8)';
        banner.style.zIndex = '9999';

        document.body.appendChild(banner);

        document.getElementById('btn-accept-cookies').addEventListener('click', () => {
            localStorage.setItem(consentKey, 'granted');
            banner.remove();
            loadTrackers();
        });

        document.getElementById('btn-reject-cookies').addEventListener('click', () => {
            localStorage.setItem(consentKey, 'denied');
            banner.remove();
            console.log('Consent denied: Trackers explicitly blocked.');
        });
    }
});
