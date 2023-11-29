export  class Shape {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }

  render(text, textColor) {
    throw new Error("render() method must be implemented in subclasses");
  }
}

export class Triangle extends Shape {
  constructor() {
    super()
  }
  render(text, textColor) {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      viewBox="0 0 300 200" width="300" height="200">
        <polygon style="fill:${shapeColor};" points="150,25 275,175 25,175"></polygon>
        <text x="150" y="120" text-anchor="middle" alignment-baseline="middle" stroke="${textColor}" stroke-width="2px" font-size="250%">${text}</text>
      </svg>
    `;
  }
}

export class Square extends Shape {
  constructor() {
    super()
  }
  render(text, textColor) {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      viewBox="0 0 300 200" width="300" height="200">
        <rect style="fill:${shapeColor};" width="300" height="200"></rect>
        <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" stroke="${textColor}" stroke-width="2px" font-size="250%">${text}</text>
      </svg>
    `;
  }
}

export class Circle extends Shape {
  constructor() {
    super()
  }
  render(text, textColor) {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      viewBox="0 0 300 200" width="300" height="200">
          <circle style="fill:${shapeColor};" cx="150" cy="100" r="75">
          </circle>
          <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" stroke="${textColor}" stroke-width="2px" font-size="250%">${text}</text>
      </svg>
    `;
  }
}
