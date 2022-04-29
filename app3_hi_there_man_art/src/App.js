import logo from "./logo.svg";
import "./App.css";

import React from "react";
import ReactDOM from "react-dom";
import { createP5Sketch } from "react-generative-tools";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";

function sketch(p5, props, wrapperEl) {
  let x, y;
  let angle1 = 0.0;
  let angle2 = 0.0;
  let segLength = 100;

  p5.setup = function () {
    p5.createCanvas(1720, 1400);

    p5.strokeWeight(30);

    p5.stroke(255, 160);

    //p5.stroke("rgb(0,255,0)");

    x = p5.width * 0.5;
    y = p5.height * 0.5;
  };

  p5.draw = function () {
    p5.background(0);

    //Change the angle of the segments according to the mouse positions
    angle1 = (p5.mouseX / p5.float(p5.width) - 0.5) * -p5.TWO_PI;
    angle2 = (p5.mouseY / p5.float(p5.height) - 0.5) * p5.PI;

    //arm
    p5.push();
    segment(x, y, angle1);
    segment(segLength, 0, angle2);
    p5.pop();

    //text
    p5.text("Hi there !!!", 550, 380);
    p5.textAlign(p5.CENTER);

    p5.textSize(20);
    //car
    p5.translate(100, 400);
    //p5.triangle(200, 200, 500, 200, 700, 90);
    p5.ellipse(700, 20, 260, 20);
    p5.ellipse(700, 60, 60, 100);

    //body
    p5.rect(650, 100, 100, 350);

    //right hand
    p5.line(650, 200, 500, 15);

    p5.rect(650, 400, 10, 200);
    p5.rect(750, 400, 10, 200);
  };

  function segment(x, y, a) {
    p5.translate(x, y);
    p5.rotate(a);
    p5.line(0, 0, segLength, 0);
  }
}

const Shapes = createP5Sketch(sketch);

function App() {
  return (
    <div>
      <Shapes id="Shapes1" />
    </div>
  );
}

export default App;
