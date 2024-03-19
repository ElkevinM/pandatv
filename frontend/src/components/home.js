// components/Home.js
import React from 'react';

function Home() {
  return (

    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
                rel="stylesheet"
            />
            <script src="./public/bundle.js" defer></script>
            <link rel="stylesheet" href="./public/bundle.css" />
            <title>App de peliculas</title>
        </head>
        <body>
            <div class="contenedor">
                <aside class="sidebar">
                    <div class="sidebar__logo">
                        <img class="sidebar__logo-imagen" src="./img/logo.png" alt="" />
                    </div>
    
                    <div class="sidebar__generos">
                        <h3 class="sidebar__titulo">Generos</h3>
                        <div class="sidebar__contenedor-generos" id="filtro-generos">
                            {/* <!-- <button class="btn">Acción</button>
                            <button class="btn">Aventuras</button>
                            <button class="btn">Sci-fi</button>
                            <button class="btn">Comedia</button>
                            <button class="btn">Fantasía</button>
                            <button class="btn">Musical</button> --> */}
                        </div>
                    </div>
    
                    <div class="sidebar__años">
                        <h3 class="sidebar__titulo">Años</h3>
                        <div class="sidebar__contenedor-inputs">
                            <input
                                class="sidebar__input"
                                id="años-min"
                                type="number"
                                min="1950"
                                max="2022"
                                maxlength="4"
                                placeholder="1950"
                            />
                            <span> - </span>
                            <input
                                class="sidebar__input"
                                id="años-max"
                                type="number"
                                min="1950"
                                max="2022"
                                value="2022"
                                maxlength="4"
                                placeholder="2022"
                            />
                        </div>
                    </div>
    
                    <div class="sidebar__buscar" id="btn-buscar">
                        <button class="btn btn--100 btn--rojo">Buscar</button>
                    </div>
                </aside>
    
                <main class="main">
                    <div class="main__filtros">
                        <button class="btn btn--active" id="movie">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="btn__icono"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"
                                />
                            </svg>
                            Peliculas
                        </button>
                        <button class="btn" id="tv">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="btn__icono"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"
                                />
                            </svg>
                            Series
                        </button>
                    </div>
    
                    <div class="main__populares" id="populares" data-pagina="1">
                        <h2 class="main__titulo">Peliculas Populares</h2>
                        <div class="main__grid">
                            {/* <!-- <div class="main__media">
                                <a href="#" class="main__media-thumb">
                                    <img class="main__media-img" src="./img/1.png" alt="" />
                                </a>
                                <p class="main__media-titulo">The boys</p>
                                <p class="main__media-fecha">2021</p>
                            </div> --> */}
                        </div>
                    </div>
    
                    <div class="main__paginacion">
                        <button class="btn" id="pagina-anterior">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="btn__icono"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                />
                            </svg>
                            Anterior
                        </button>
                        <button class="btn" id="pagina-siguiente">
                            Siguiente
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="btn__icono"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                />
                            </svg>
                        </button>
                    </div>
                </main>
            </div>
        </body>
    </html>
  );
}

export default Home;