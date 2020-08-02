// import * as THREE from 'vendor/three';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

class MainIndexScreen {
  constructor() {
    this.body = document.querySelector('body');

    this._setup();
  }

  _setup() {

  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('body') !== null) {
    new MainIndexScreen();
  }
});
