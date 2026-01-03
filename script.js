      // Mobile Menu Toggle
      document
        .getElementById("mobile-menu-btn")
        .addEventListener("click", () => {
          document.getElementById("mobile-menu").classList.toggle("hidden");
        });

      // Floating animation for hero image
      const style = document.createElement("style");
      style.innerHTML = `
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
    `;
      document.head.appendChild(style);

      // Scroll reveal animation
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
      });