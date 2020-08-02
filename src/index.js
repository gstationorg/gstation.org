import anime from "animejs/lib/anime.es.js"

import "./app/scss/index.scss"

anime({
    targets: "#company-name",
    translateY: 150,
    duration: 1000,
})

anime({
    targets: ".site-main__section",
    translateY: 150,
    duration: 1000,
})