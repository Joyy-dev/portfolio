// Joyy-dev Portfolio Navigation & Interactivity
document.addEventListener('DOMContentLoaded', () => {
    /* ==========================================================================
       Header Navigation (Mobile Drawer & Scroll Effects)
       ========================================================================== */
    const header = document.querySelector('.topnav');
    const toggleBtn = document.querySelector('.topnav__toggle');
    const navMenu = document.getElementById('primary-nav');
    const backdrop = document.querySelector('.topnav__backdrop');
    const navLinks = document.querySelectorAll('.topnav__link');

    if (toggleBtn && navMenu) {
        /**
         * Open or close mobile navigation drawer
         * @param {boolean} shouldOpen
         */
        const setMenuState = (shouldOpen) => {
            toggleBtn.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
            toggleBtn.setAttribute(
                'aria-label',
                shouldOpen ? 'Close navigation menu' : 'Open navigation menu'
            );

            if (shouldOpen) {
                navMenu.classList.add('is-open');
                backdrop?.classList.add('is-visible');
                document.body.classList.add('menu-open');
            } else {
                navMenu.classList.remove('is-open');
                backdrop?.classList.remove('is-visible');
                document.body.classList.remove('menu-open');
            }
        };

        // Toggle menu on button click
        toggleBtn.addEventListener('click', () => {
            const isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
            setMenuState(!isOpen);
        });

        // Close menu when clicking outside on the backdrop
        backdrop?.addEventListener('click', () => {
            setMenuState(false);
        });

        // Close menu when pressing Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
                setMenuState(false);
                toggleBtn.focus();
            }
        });

        // Close menu and update active link when clicking any nav link
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                setMenuState(false);

                navLinks.forEach((l) => {
                    l.classList.remove('topnav__link--active');
                    l.removeAttribute('aria-current');
                });
                link.classList.add('topnav__link--active');
                link.setAttribute('aria-current', 'page');
            });
        });

        // Close mobile drawer automatically if window is resized to desktop width
        const desktopMediaQuery = window.matchMedia('(min-width: 768px)');
        desktopMediaQuery.addEventListener('change', (e) => {
            if (e.matches) {
                setMenuState(false);
            }
        });
    }

    // Header scroll depth effect
    const handleScroll = () => {
        if (window.scrollY > 20) {
            header?.classList.add('topnav--scrolled');
        } else {
            header?.classList.remove('topnav--scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    /* ==========================================================================
       Hero Interactive 3D Phone Mockup & Micro-Interactions
       ========================================================================== */
    const heroVisual = document.getElementById('heroVisual');
    const phoneMockup = document.getElementById('phoneMockup');
    const goalProgressRing = document.getElementById('goalProgressRing');
    const goalProgressText = document.getElementById('goalProgressText');
    const taskItems = document.querySelectorAll('.mockup-task-item');
    const mockupNavItems = document.querySelectorAll('.mockup-nav__item');

    // 1. Mouse-Tracking 3D Tilt Effect on Desktop
    if (heroVisual && phoneMockup && window.matchMedia('(hover: hover)').matches) {
        let isHovered = false;

        heroVisual.addEventListener('mouseenter', () => {
            isHovered = true;
            // Temporarily pause CSS keyframe float so mouse tilt takes over seamlessly
            phoneMockup.style.animationPlayState = 'paused';
        });

        heroVisual.addEventListener('mousemove', (e) => {
            if (!isHovered) return;
            const rect = heroVisual.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Normalized coordinates (-1 to 1)
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const normX = (x - centerX) / centerX;
            const normY = (y - centerY) / centerY;

            // Smooth 3D tilt angles
            const tiltY = normX * 12 - 4; // slight default left tilt
            const tiltX = -normY * 10 + 3;

            phoneMockup.style.transform = `perspective(1200px) rotateY(${tiltY}deg) rotateX(${tiltX}deg) translateY(-6px)`;
        });

        heroVisual.addEventListener('mouseleave', () => {
            isHovered = false;
            phoneMockup.style.transform = '';
            phoneMockup.style.animationPlayState = 'running';
        });
    }

    // 2. Interactive Task List with Live Progress Ring Update
    const updateProgressRing = () => {
        if (!goalProgressRing || !goalProgressText || taskItems.length === 0) return;

        const totalTasks = taskItems.length;
        const checkedTasks = document.querySelectorAll('.mockup-task-item.is-checked').length;
        const percent = Math.round((checkedTasks / totalTasks) * 100);

        // Circumference for r=23 is 2 * PI * 23 ≈ 144.51
        const circumference = 2 * Math.PI * 23;
        const offset = circumference - (percent / 100) * circumference;

        goalProgressRing.style.strokeDashoffset = offset;
        goalProgressText.textContent = `${percent}%`;
    };

    taskItems.forEach((item) => {
        // Toggle on click
        item.addEventListener('click', () => {
            const isChecked = item.classList.toggle('is-checked');
            item.setAttribute('aria-checked', isChecked ? 'true' : 'false');
            updateProgressRing();
        });

        // Keyboard accessibility (Space or Enter to toggle)
        item.addEventListener('keydown', (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                item.click();
            }
        });
    });

    // Initialize initial progress calculation
    updateProgressRing();

    // 3. Interactive In-Phone Bottom Navigation
    mockupNavItems.forEach((tab) => {
        tab.addEventListener('click', () => {
            mockupNavItems.forEach((t) => t.classList.remove('is-active'));
            tab.classList.add('is-active');
        });
    });

    console.log('Joyy-dev responsive navigation and hero interactions ready.');
});
