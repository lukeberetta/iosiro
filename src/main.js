// Scroll reveal

window.sr = ScrollReveal({
  reset: true
});

sr.reveal('.fade', {
  duration: 1500,
  delay: 50,
  scale: 1,
  easing: "ease",
  distance: "15px",
});

sr.reveal('.fade-2', {
  duration: 1500,
  delay: 100,
  scale: 1,
  easing: "ease",
  distance: "0",
});

// Particle JS

let config = {
  drkBlue: "#072044",
  red: "#f66363",
  blue: "#4a6ea0",
  lightBlue: "#55a0eb",
  purple: "#623CEA",
  green: "#17BEBB",
  grey: "#556984",
  white: "#fff",
  links: "#556984",
  interactivity: {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 500,
        "line_linked": {
          "opacity": .8
        }
      },
      "bubble": {
        "distance": 50,
        "size": 9,
        "duration": 1,
        "opacity": 0.6,
        "speed": 0
      },
      "repulse": {
        "distance": 10,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 4
      }
    }
  },
  shape: {
    "type": "circle",
    "stroke": {
      "width": 0,
      "color": "#009688"
    },
    "polygon": {
      "nb_sides": 5
    },
    "image": {
      "src": "img/github.svg",
      "width": 100,
      "height": 100
    }
  },
  move: {
    "enable": true,
    // Speed
    "speed": .7,
    "direction": "none",
    "random": true,
    "straight": false,
    "out_mode": "bounce",
    "bounce": false,
    "attract": {
      "enable": false,
      "rotateX": 4498.141557303954,
      "rotateY": 5602.948255589136
    }
  },
  size: {
    "value": 5,
    "random": true,
    "anim": {
      "enable": false,
      "speed": 1,
      "size_min": 4,
      "sync": false
    }
  },
  opacity: {
    "value": 1,
    "random": false,
    "anim": {
      "enable": true,
      "speed": 1,
      "opacity_min": 1,
      "sync": false
    }
  }
}

particlesJS("particle-1", {
  "particles": {
    "number": {
      // Density
      "value": 35,
      "density": {
        "enable": true,
        "value_area": 300
      }
    },
    "color": {
      "value": [config.white, config.grey, config.lightBlue, config.grey, config.grey, config.grey, config.green]
    },
    "shape": config.shape,
    "opacity": config.opacity,
    "size": config.size,
    // Links
    "line_linked": {
      "enable": true,
      "distance": 280,
      "color": config.links,
      "opacity": .4,
      "width": 1
    },
    "move": config.move
  },
  "interactivity": config.interactivity,
  "retina_detect": true
});

particlesJS("particle-2", {
  "particles": {
    "number": {
      // Density
      "value": 22,
      "density": {
        "enable": true,
        "value_area": 200
      }
    },
    "color": {
      "value": [config.grey, config.red, config.lightBlue]
    },
    "shape": config.shape,
    "opacity": config.opacity,
    "size": config.size,
    // Links
    "line_linked": {
      "enable": true,
      "distance": 300,
      "color": config.links,
      "opacity": .4,
      "width": 1
    },
    "move": config.move
  },
  "interactivity": config.interactivity,
  "retina_detect": true
});

particlesJS("particle-3", {
  "particles": {
    "number": {
      // Density
      "value": 18,
      "density": {
        "enable": true,
        "value_area": 200
      }
    },
    "color": {
      "value": [config.green, config.grey, config.lightBlue]
    },
    "shape": config.shape,
    "opacity": config.opacity,
    "size": config.size,
    // Links
    "line_linked": {
      "enable": true,
      "distance": 300,
      "color": config.links,
      "opacity": .4,
      "width": 1
    },
    "move": config.move
  },
  "interactivity": config.interactivity,
  "retina_detect": true
});