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
        "enable": true,
        "mode": "bubble"
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
          "opacity": .5
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
    "value": 6,
    "random": true,
    "anim": {
      "enable": false,
      "speed": 1,
      "size_min": 3,
      "sync": false
    }
  }
}

particlesJS("particle-1", {
  "particles": {
    "number": {
      // Density
      "value": 13,
      "density": {
        "enable": true,
        "value_area": 200
      }
    },
    "color": {
      "value": [config.green, config.grey, config.drkBlue, config.purple]
    },
    "shape": config.shape,
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 1,
        "sync": false
      }
    },
    // Balls
    "size": {
      "value": 8,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "size_min": 6,
        "sync": false
      }
    },
    // Links
    "line_linked": {
      "enable": true,
      "distance": 500,
      "color": config.links,
      "opacity": .7,
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
      "value": [config.grey, config.purple, config.lightBlue]
    },
    "shape": config.shape,
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 1,
        "sync": false
      }
    },
    // Balls
    "size": config.size,
    // Links
    "line_linked": {
      "enable": true,
      "distance": 500,
      "color": config.links,
      "opacity": .7,
      "width": 1
    },
    "move": config.move,
  },
  "interactivity": config.interactivity,
  "retina_detect": true
});

particlesJS("particle-3", {
  "particles": {
    "number": {
      // Density
      "value": 20,
      "density": {
        "enable": true,
        "value_area": 200
      }
    },
    "color": {
      "value": [config.green, config.purple, config.lightBlue]
    },
    "shape": config.shape,
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 1,
        "sync": false
      }
    },
    "size": config.size,
    // Links
    "line_linked": {
      "enable": true,
      "distance": 500,
      "color": config.links,
      "opacity": .7,
      "width": 1
    },
    "move": config.move
  },
  "interactivity": config.interactivity,
  "retina_detect": true
});

/*

// Particle js
particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#556881", "#32a598", "#4ba7bd"]
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
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
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 0,
          "opacity_min": 0.03248308849205381,
          "sync": false
        }
      },
      "size": {
        // Size of balls
        "value": 9,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 30,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 160.3412060865523,
        "color": "#ffffff",
        "opacity": 0.2,
        "width": 0
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "bounce",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 80.17060304327615
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

);

*/