import checkForTouchDevice from './utils/checkForTouchDevice';

export default class dragSlider {
  constructor() {
    this.isTouchDevice = checkForTouchDevice();

    this.html = document.querySelector('html');

    this.mouse = {};
    this.mouse.x = window.innerWidth / 2;
    this.mouse.y = window.innerHeight / 2;
    this.mouse.isPressed = false;
    this.mouse.isDragging = false;

    this.dom = {};
    this.dom.sliderTrack = document.querySelector('.slider__wrapper__inner');

    this.initEventListeners();

    console.log(this.isTouchDevice);
  }

  setCursorStyle(cursorStyle) {
    this.html.style.cursor = cursorStyle;
  }

  handleMouseMove(e) {
    e.preventDefault();
    if (this.isTouchDevice) return;

    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }

  handleMouseDown(e) {
    e.preventDefault();
    if (this.isTouchDevice) return;

    this.setCursorStyle('grabbing');
    console.log(this.html.style.cursor);
  }

  handleMouseUp(e) {
    e.preventDefault();
    if (this.isTouchDevice) return;

    this.setCursorStyle('default');

    console.log(this.html.style.cursor);
  }

  /**
   * Events
   */
  initEventListeners() {
    window.addEventListener('mousemove', this.handleMouseMove.bind(this));
    window.addEventListener('mousedown', this.handleMouseDown.bind(this));
    window.addEventListener('mousedown', this.handleMouseUp.bind(this));
  }
}
