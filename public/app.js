// fetch and display people from the database
fetch('/api/people')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('people-container');

    data.forEach(person => {
      // build the container for each person in the databse
      const card = document.createElement('div');
      card.className = 'person-card';
      
      const avatar = document.createElement('img');
      avatar.src = '/default-avatar.jpg';
      card.appendChild(avatar);

      const name = document.createElement('h3');
      name.textContent = `${person.fname} ${person.lname}`;
      card.appendChild(name);

      const dob = document.createElement('p');
      const personDOB = new Date(person.date_of_birth);
      dob.textContent = `${personDOB.toDateString()}`;
      card.appendChild(dob);

      const age = document.createElement('p');
      const personAge = Math.round((new Date() - personDOB)/31556952000);
      age.textContent = `(age ${personAge})`;
      card.appendChild(age);


      container.appendChild(card);
    });
  });

// add a person to the database
document.getElementById('add-person-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const personData = {
    fname: document.getElementById('fname').value,
    lname: document.getElementById('lname').value,
    date_of_birth: document.getElementById('dob').value,
    sex: document.getElementById('sex').value
  };

  fetch('/api/people', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(personData)
  })
  .then(response => response.json())
  .then(result => {
    console.log('Person added:', result);
    alert('Person added successfully!');
    location.reload();
  })
  .catch(error => {
    console.error('Error adding person:', error);
  });
});

