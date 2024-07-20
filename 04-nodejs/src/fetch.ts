type Npc = {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
  location: string;
};

type NpcResponse = {
  success: boolean;
  count: number;
  total: number;
  data: Npc[];
};

const BASE_URL = 'https://eldenring.fanapis.com/api';

async function main() {
  const response = await fetch(`${BASE_URL}/npcs?limit=55`);
  const data = await response.json() as NpcResponse; //javascript object notation
  const index = randomNumber(data.data.length);
  const npc = data.data[index];
  console.log(npc);
}

function randomNumber(length: number) {
  const random = Math.random();
  const randomNumber = random * length;
  const randomNumberFloored = Math.floor(randomNumber);

  return randomNumberFloored;
}

main();
