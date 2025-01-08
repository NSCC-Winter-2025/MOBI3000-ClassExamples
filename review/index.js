function h1_onclick() {
  const div = document.getElementById('content');
  div.style.backgroundColor = 'lightblue';
}

function div_onclick() {
  const h1 = document.getElementById('title');
  h1.innerText = "Dynamic HTML";
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const e = React.createElement;
root.render(
  e(React.Fragment, null,
  e('h1', {onClick: h1_onclick, id:"title"}, "Basic HTML"),
  e('div', {id:"content", onClick: div_onclick, className: 'div'},
    e('p', null,
      e('strong', null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit."),
    "Aspernatur at consequuntur esse provident quae unde voluptates?",
     e('em', null, "Consequatur dolorum excepturi fugiat ipsum mollitia necessitatibus nisi, odio rem, sint soluta tempora veniam."),
     e('img', {src:"robot.png",width:"200",alt:"robot"})
    )
  )
  )
);
