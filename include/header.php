<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.13.0/css/all.css">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&family=Roboto:wght@400;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    
    <link rel="stylesheet" href="/test/assets/scss/style.css">
    <title>Fenom TEST</title>
</head>

<body>

    <header class="f-header js-f-header position-relative">
        <div class="f-header__mobile-content container max-width-lg">
            <button class="reset anim-menu-btn js-anim-menu-btn f-header__nav-control js-tab-focus" aria-label="Toggle menu">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                    <g>
                        <line x1="8" y1="12" x2="32" y2="12" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.6" />
                        <line x1="8" y1="20" x2="32" y2="20" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.6" />
                        <line x1="8" y1="28" x2="20.8" y2="28" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.6" />
                    </g>
                </svg>
            </button>

            <a href="#0" class="f-header__logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 33.53">
                    <g>
                        <path d="M59.32,18.14,51.39,0H46.57v33.5H52V15.14l8,18.39h4.7V0H59.32Z" />
                        <path d="M115,0l-5,9.92L105,0H99.83v33.5h5.47V12.92l3.33,6.61h2.64L114.53,13V33.53H120V0Z" />
                        <path d="M88.17,0H76.46L74,2.45V31l2.54,2.54H88.09L90.62,31,90.56,2.42Zm-8.66,28V5.49H85.1l.05,22.57Z" />
                        <path d="M28.66,28.06V19.53h6.59V14.06H28.66V5.49h8.55V0H25.73L23.2,2.56V31.05l2.47,2.48h11.6V28.06Z" />
                        <g>
                            <rect x="5.47" y="14.06" width="6.61" height="5.47" />
                            <rect y="19.53" width="5.47" height="14" />
                            <path d="M14,5.47V0H2.52L0,2.52V14.06H5.47V5.47Z" />
                        </g>
                    </g>
                </svg>
            </a>

            <div class=" col-2 item-icons">
                <div>
                    <a href="#0" class="">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" >
                            <title>interface-search</title>
                            <g>
                                <circle cx="18.96" cy="18.96" r="6.96" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.6" />
                                <line x1="23.88" y1="23.88" x2="28" y2="28" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.6" />
                            </g>
                        </svg>
                    </a>
                </div>


                <div class="">
                    <a href="#0" aria-label="Follow us on Facebook">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" >
                            <title>interface-shopping-cart</title>
                            <rect x=" 9.71" y="14.71" width="20.57" height="16.29" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.6" />
                        <path d="M15.71,18.14V11.29a4.29,4.29,0,0,1,8.58,0v6.85" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.6" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div class="menu-mobile grid gap-xs">
            <div class="f-header__nav" role="navigation">
                <nav class="subnav__nav justify-center bg-contrast-lower" style="height: 3rem;">
                    <p class="subnav__item ">Livraison Gratuite en France sur toutes vos commandes</p>
                </nav>

                <nav class="subnav__nav justify-end" style="height: 1rem;">
                    <p class="subnav__item-two"><span class="subnav__item-span">en</span>&nbsp; fr &nbsp; &nbsp;</p>
                </nav>

                <div class="f-header__nav-grid justify-between@md container max-width-lg">
                    <div class="f-header__nav-logo-wrapper flex-grow flex-basis-0 col-2">
                        <a href="#0" class="f-header__logo">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -5 140 43.53" class="axsvgicon axsvgicon-logo" aria-hidden="true">
                                <g id="f">
                                    <rect x="5.47" y="14.06" width="6.61" height="5.47" />
                                    <rect y="19.53" width="5.47" height="14" />
                                    <path d="M14,5.47V0H2.52L0,2.52V14.06H5.47V5.47Z" />
                                </g>
                                <path id="e" d="M28.66,28.06V19.53h6.59V14.06H28.66V5.49h8.55V0H25.73L23.2,2.56V31.05l2.47,2.48h11.6V28.06Z" />
                                <path id="n" d="M59.32,18.14,51.39,0H46.57v33.5H52V15.14l8,18.39h4.7V0H59.32Z" />
                                <path id="o" d="M88.17,0H76.46L74,2.45V31l2.54,2.54H88.09L90.62,31,90.56,2.42Zm-8.66,28V5.49H85.1l.05,22.57Z" />
                                <path id="m" d="M115,0l-5,9.92L105,0H99.83v33.5h5.47V12.92l3.33,6.61h2.64L114.53,13V33.53H120V0Z" />
                            </svg>
                        </a>
                    </div>

                    <ul class="f-header__list flex-grow flex-basis-0 justify-center@md col-8">
                        <li class="f-header__item">
                            <a href="#0" class="f-header__link js-tab-focus">Nouveautés</a>
                        </li>

                        <li class="f-header__item">
                            <a href="#0" class="f-header__link">Homme</a>
                        </li>

                        <li class="f-header__item">
                            <a href="#0" class="f-header__link">Femme</a>
                        </li>

                        <li class="f-header__item">
                            <a href="#0" class="f-header__link">Lifestyle</a>
                        </li>

                        <li class="f-header__item">
                            <a href="#0" class="f-header__link">Skate</a>
                        </li>

                        <li class="f-header__item">
                            <a href="#0" class="f-header__link">Marques</a>
                        </li>

                        <li class="f-header__item">
                            <a href="#0" class="f-header__link">Outlet</a>
                        </li>

                        <li class="f-header__item">
                            <a href="#0" class="">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 35">
                                    <title>interface-search</title>
                                    <g>
                                        <circle cx="18.96" cy="18.96" r="6.96" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.6" />
                                        <line x1="23.88" y1="23.88" x2="28" y2="28" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.6" />
                                    </g>
                                </svg>
                            </a>
                        </li>
                    </ul>


                    <div class=" col-2 item-icons margin-right-lg ">


                        <div class="">
                            <a href="#0" class=" ">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" >
                                    <g>
                                        <path d="M26,15.31c0,4-2.27,8.12-6,8.12s-6-4.09-6-8.12S14.27,8,20,8,26,11.27,26,15.31Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.6" />
                                        <path d="M9.71,32c0-4.26.32-5.14,6.86-5.14h6.86c6.54,0,6.86.88,6.86,5.14" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.6" />
                                    </g>
                                </svg>
                            </a>
                        </div>

                        <div class="">
                            <a href="#0" aria-label="Follow us on Facebook">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" >
                                    <title>interface-shopping-cart</title>
                                    <rect x="9.71" y="14.71" width="20.57" height="16.29" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.6" />
                                    <path d="M15.71,18.14V11.29a4.29,4.29,0,0,1,8.58,0v6.85" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.6" />
                                </svg>
                            </a>
                        </div>

                        <div class="">
                            <a href="#0" class="f-header__link f-header__link--icon" aria-label="Follow us on Youtube">panier(3)</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </header>