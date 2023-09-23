

fetch('quotes.json')
  .then(response => response.json())
  .then(data => {
    
    const names = data.names;

   
    function fetchRandomName() {
      
      const randomIndex = Math.floor(Math.random() * names.length);

      
      const randomName = names[randomIndex];

      
      document.getElementById('dJoke').textContent = randomName;
    }

    
    fetchRandomName();
  })
  .catch(error => console.error(error));
});
