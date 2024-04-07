function Greeting() {
    const name = "Miriam";
    const greeting = `Hello, my name is ${name}!`;
  
    const root = document.getElementById('root');
    const paragraph = document.createElement('p');
    paragraph.textContent = greeting;
    root.appendChild(paragraph);
  }
  
  Greeting();
  