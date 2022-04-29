import logo from "./logo.svg";
import "./App.css";

import React from "react";
import ReactDOM from "react-dom";
import { createP5Sketch } from "react-generative-tools";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";

function sketch(p5, props, wrapperEl) {
  let pause = true;
  //let x, y;

  p5.setup = function () {
    p5.createCanvas(1000, 2000);
  };

  p5.mousePressed = function () {
    pause = !pause;
  };

  p5.draw = function () {
    if (!pause) {
      p5.fill(280);
    } else {
      p5.fill(0);
    }

    p5.ellipse(p5.mouseX, p5.mouseY, 100, 100);
  };
}

const Shapes = createP5Sketch(sketch);

function App() {
  return (
    <div>
      <Shapes id="Shapes" />
    </div>
  );
}

export default App;
