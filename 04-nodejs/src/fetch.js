function main() {
  const endpoint = `https://eldenring.fanapis.com/api/npcs?limit=55`;

  //callback
  fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const index = randomNumber(data.data.length);
      const npc = data.data[index];
      console.log(npc);
    });

  //async/await
  // const response = await fetch(endpoint);
  // const data = await response.json();
  // const index = randomNumber(data.data.length);
  // const npc = data.data[index];
  // console.log(npc);
}

function randomNumber(length) {
  const random = Math.random();
  const randomNumber = random * length;
  const randomNumberFloored = Math.floor(randomNumber);

  return randomNumberFloored;
}

main();
