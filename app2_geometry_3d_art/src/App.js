import logo from "./logo.svg";
import "./App.css";

import React from "react";
import ReactDOM from "react-dom";
import { createP5Sketch } from "react-generative-tools";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";

function sketch(p5, props, wrapperEl) {
  let img;
  let vid;
  let theta = 0;

  function preload() {
    //img = p5.loadImage("./me.jpg");

    img.text("hello!", 0, 100);
  }

  p5.setup = function () {
    p5.createCanvas(1600, 1600, p5.WEBGL);

    // img = "./assets/hello.jpg";
    // p5.loadImage(img);
    // vid = ["assets/me.mp4"];
    // p5.createVideo(vid);
    // vid.elt.muted = true;
    // vid.loop();
    // vid.hide();
  };

  p5.draw = function () {
    p5.background(250);
    p5.translate(-220, 0, 0);
    p5.push();
    p5.rotateZ(theta * p5.mouseX * 0.0001);
    p5.rotateX(theta * p5.mouseX * 0.0001);
    p5.rotateY(theta * p5.mouseX * 0.0001);
    //pass image as texture
    //p5.texture(img);
    p5.background(100);
    p5.sphere(200);
    p5.pop();

    p5.translate(440, 0, 0);
    p5.push();
    p5.rotateZ(theta * 0.1);
    p5.rotateX(theta * 0.1);
    p5.rotateY(theta * 0.1);
    //p5.texture(vid);
    p5.box(100, 100, 100);
    p5.pop();
    theta += 0.05;

    p5.translate(250, 0, 0);
    p5.push();
    p5.rotateZ(theta * p5.mouseX * 0.001);
    p5.rotateX(theta * p5.mouseX * 0.001);
    p5.rotateY(theta * p5.mouseX * 0.001);
    p5.torus(70, 20);
    p5.normalMaterial();
    p5.pop();
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
