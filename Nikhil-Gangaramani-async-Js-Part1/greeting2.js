function makeGreeting(name) {
    return `Hello, my name is ${name}!`;
  }
  
  const name = "Miriam Rashid";
  const greeting = makeGreeting(name);
  const root = document.getElementById('root');
  const paragraph = document.createElement('p');
  paragraph.textContent = greeting;
  root.appendChild(paragraph);

  makeGreeting();