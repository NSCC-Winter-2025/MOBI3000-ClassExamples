import { createRoot } from "react-dom/client";
import './site.css';
import robot from './robot.png';

function h1_onclick() {
  const div = document.getElementById('content');
  div.style.backgroundColor = 'lightblue';
}

function div_onclick() {
  const h1 = document.getElementById('title');
  h1.innerText = "Dynamic HTML";
}

const root = createRoot(document.getElementById('root'));
root.render(
  <>
  <h1 onClick={h1_onclick} id="title">Basic HTML</h1>
  <div id="content" onClick={div_onclick}>
    <p><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong>
      Aspernatur at consequuntur esse provident quae unde voluptates?
      <em>Consequatur dolorum excepturi fugiat ipsum mollitia necessitatibus nisi,
        odio rem, sint soluta tempora veniam.</em></p>
    <img src={robot} width="200" alt="robot"/>
  </div>
  </>
);