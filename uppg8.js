function uppg8() {
  // skapa en array med fem person obkjet
  // varje person objekt ska ha två properties, name och age

  // skapa en fuktion som tar in en array som argument
  // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
  //  över 30 år som skrivs ut i konsolen

  // anropa funktionen och skicka med arrayen som argument

  const people = [
    {
      name: "Gordon",
      age: 23,
    },
    {
      name: "Eli",
      age: 38,
    },
    {
      name: "Alyx",
      age: 21,
    },
  ];

  const showOlderPeople = (people) => {
    people.forEach((person) => {
      if (person.age > 30) {
        console.log(person.name);
      }
    });
  };

  return showOlderPeople(people);
}

module.exports = { uppg8 };
