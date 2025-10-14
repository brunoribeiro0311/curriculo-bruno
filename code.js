// Navbar scroll effect
        const nav = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
                nav.classList.remove('navbar-dark');
                nav.classList.add('navbar-light');
                nav.classList.remove('bg-transparent');
            } else {
                nav.classList.remove('scrolled');
                nav.classList.add('navbar-dark');
                nav.classList.remove('navbar-light');
                nav.classList.add('bg-transparent');
            }
        });

        // Scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        const animatedElements = document.querySelectorAll('.fade-in');
        animatedElements.forEach(el => observer.observe(el));
