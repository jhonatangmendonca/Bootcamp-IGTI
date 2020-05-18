const people = require("./download.json");

function doMap() {
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });
  // console.log(nameEmailArray);
  return nameEmailArray;
}
// doMap()

function doFilter() {
  const olderThan50 = people.results.filter((person) => {
    return person.dob.age > 50;
  });
  console.log(olderThan50);
}
// doFilter();

function doForEach() {
  const mappedPeople = doMap();

  mappedPeople.forEach((person) => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });
  console.log(mappedPeople);
  return mappedPeople;
}

// doForEach()

function doReduce() {
  const totalAges = people.results.reduce((acc, cur) => {
    return acc + cur.dob.age;
  }, 0);
  console.log(totalAges);
  return totalAges;
}

// doReduce()

function doFind() {
  const found = people.results.find((person) => {
    return person.location.state === "Minas Gerais";
  });
  console.log(found);
  return found;
}

// doFind ()

function doSome() {
  const found = people.results.some((person) => {
    return person.location.state === "Amazonas";
  });
  console.log(found);
  return found;
}

// doSome()

function doSort() {
  const mappedPeople = people.results
    .map((person) => {
      return {
        name: person.name.first,
      };
    })
    .filter((person) => {
      return person.name.startsWith("A");
    })
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  console.log(mappedPeople);
}

doSort();
