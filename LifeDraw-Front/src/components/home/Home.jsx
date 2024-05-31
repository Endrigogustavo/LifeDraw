import HomeImg from '../../assets/Home/Hero.jpg'
import './Home.css'


function Home() {
    const navbarMenu = document.getElementById("menu");
    const burgerMenu = document.getElementById("burger");
    const headerMenu = document.getElementById("header");

    // Open Close Navbar Menu on Click Burger
    if (burgerMenu && navbarMenu) {
        burgerMenu.addEventListener("click", () => {
            burgerMenu.classList.toggle("is-active");
            navbarMenu.classList.toggle("is-active");
        });
    }

    // Close Navbar Menu on Click Menu Links
    document.querySelectorAll(".menu-link").forEach((link) => {
        link.addEventListener("click", () => {
            burgerMenu.classList.remove("is-active");
            navbarMenu.classList.remove("is-active");
        });
    });

    // Change Header Background on Scrolling
    window.addEventListener("scroll", () => {
        if (this.scrollY >= 85) {
            headerMenu.classList.add("on-scroll");
        } else {
            headerMenu.classList.remove("on-scroll");
        }
    });

    // Fixed Navbar Menu on Window Resize
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            if (navbarMenu.classList.contains("is-active")) {
                navbarMenu.classList.remove("is-active");
            }
        }
    });


    return (
        <>

            <header class="header" id="header">
                <nav class="navbar container">
                    <a href="#" class="brand">LifeDraw</a>
                    <div class="burger" id="burger">
                        <span class="burger-line"></span>
                        <span class="burger-line"></span>
                        <span class="burger-line"></span>
                    </div>
                    <div class="menu" id="menu">
                        <ul class="menu-inner">
                            <li class="menu-item"><a href="#" class="menu-link">Home</a></li>
                            <li class="menu-item"><a href="#" class="menu-link">Desenhos</a></li>
                            <li class="menu-item"><a href="#" class="menu-link">Sobre</a></li>
                            <li class="menu-item"><a href="#" class="menu-link">Outros</a></li>
                        </ul>
                    </div>
                </nav>
            </header>

            <section class="section banner banner-section">
                <div class="container banner-column">
                    <img class="banner-image" src={HomeImg} alt="banner" />
                    <div class="banner-inner">
                        <h1 class="heading-xl">A MELHOR PLATAFORMA DE DESENHOS</h1>
                        <p class="paragraph">
                            Venha conferir a maior plataforma de arte do Brasil!!!,
                            as novidades do mundo artisico direto na sua mão
                        </p>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Home
