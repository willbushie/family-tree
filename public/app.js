fetch('/api/people')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('people-container');
    data.forEach(person => {
      const div = document.createElement('div');
      div.textContent = `${person.fname}
            ${person.lname}`;
      container.appendChild(div);
    });
  });

