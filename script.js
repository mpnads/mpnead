<script>
            document.querySelectorAll('.navbar-collapse .nav-link').forEach(function (navLink) {
                navLink.addEventListener('click', function () {
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        new bootstrap.Collapse(navbarCollapse).toggle();
                    }
                });
            });
             document.querySelectorAll('.footer-link, .nav-link').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    if (this.getAttribute('href') === '#home') {
                        e.preventDefault();
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    } else if (this.hash !== '') {
                        e.preventDefault();
                        const target = document.querySelector(this.hash);
                        if (target) {
                            target.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }
                });
            });
         </script>
        
         <script>
            function loadContent(url) {
                const contentDiv = document.getElementById('dynamic-content');
                if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
                    // If it's an image
                    contentDiv.innerHTML = `<img src="${url}" class="img-fluid" alt="Loaded Content">`;
                } else {
                    // If it's another HTML page or link
                    contentDiv.innerHTML = `<iframe src="${url}" width="100%" height="600px" frameborder="0"></iframe>`;
                }
            }
         </script>
