import './assets/main.css'
import * as THREE from 'three';
import { World } from "./World/world.js";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

function main() {
    // Get a reference to the container element
    const container = document.querySelector("#scene-container");
    
    // Create an instance of the World app
    const world = new World(container);
    
    // Start the loop (produce a stream of frames)
    world.start();
   }
    
  // main();

app.use(router, THREE);

app.mount('#app')
