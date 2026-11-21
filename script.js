// Joyy-dev Portfolio Navigation & Interactivity
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.topnav');
    const toggleBtn = document.querySelector('.topnav__toggle');
    const navMenu = document.getElementById('primary-nav');
    const backdrop = document.querySelector('.topnav__backdrop');
    const navLinks = document.querySelectorAll('.topnav__link');

    if (!toggleBtn || !navMenu) return;

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
    const handleViewportChange = (e) => {
        if (e.matches) {
            setMenuState(false);
        }
    };
    desktopMediaQuery.addEventListener('change', handleViewportChange);

    // Optional scroll enhancement: subtle border & depth when page is scrolled
    const handleScroll = () => {
        if (window.scrollY > 20) {
            header?.classList.add('topnav--scrolled');
        } else {
            header?.classList.remove('topnav--scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    console.log('Joyy-dev responsive navigation initialized successfully.');
});
