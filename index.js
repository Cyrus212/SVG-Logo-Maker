import inquirer from "inquirer";
import fs from "fs";

// Inquirer prompts
const questions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "text",
        message:
          "Please provide up to 3 characters for your logo. **Capitalization Sensitive**",
        validate: (input) => {
          if (input.length > 3) {
            return "Invalid logo text length, please choose a length of only 3 characters.";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "textColor",
        message:
          "Please provide a color keyword / hexadecimal number for your text characters.",
      },
      {
        type: "list",
        name: "shape",
        message:
          "Please choose one of the pre-defined shapes from the list provided.",
        choices: ["circle", "triangle", "square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message:
          "Please provide a color keyword / hexadecimal number for your chosen shape.",
      },
    ])
    .then((answers) => {
      const questionInputs = generateSVG(answers);

      fs.writeFile("logo.svg", questionInputs, (err) => {
        err ? console.error(err) : console.log("Generated logo.svg");
      });
    })
    .catch((error) => {
      console.error("An error ocurred. Error: ", error)
    });
};

const generateSVG = ({ text, textColor, shape, shapeColor }) => {
  const triangle = `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
    viewBox="0 0 300 200" width="300" height="200">
      <polygon style="fill:${shapeColor};" points="150,25 275,175 25,175"></polygon>
      <text x="150" y="120" text-anchor="middle" alignment-baseline="middle" stroke="${textColor}" stroke-width="2px" font-size="250%">${text}</text>
    </svg>
  `;
  const square = `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
    viewBox="0 0 300 200" width="300" height="200">
      <rect style="fill:${shapeColor};" width="300" height="200"></rect>
      <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" stroke="${textColor}" stroke-width="2px" font-size="250%">${text}</text>
    </svg>
  `;
  const circle = `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
    viewBox="0 0 300 200" width="300" height="200">
        <circle style="fill:${shapeColor};" cx="150" cy="100" r="75">
        </circle>
        <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" stroke="${textColor}" stroke-width="2px" font-size="250%">${text}</text>
    </svg>
  `;

  if (shape === "triangle") {
    return triangle;
  } else if (shape === "square") {
    return square;
  } else {
    return circle;
  }
};


questions();

