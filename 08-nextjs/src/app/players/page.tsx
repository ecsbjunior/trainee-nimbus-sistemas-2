'use client';

import { FormEvent, useState } from 'react';

export default function PlayersPage() {
  const [name, setName] = useState('');
  const [level, setLevel] = useState(1);
  const [username, setUsername] = useState('');

  const [players, setPlayers] = useState<Player[]>([
    {
      name: 'Evandor Junior',
      level: 1,
      username: 'evandro',
    },
    {
      name: 'Matheus Seco',
      level: 1,
      username: 'math',
    },
    {
      name: 'Gabriel Lucas',
      level: 1,
      username: 'gabs',
    },
    {
      name: 'Lucas',
      level: 1,
      username: 'lucas',
    },
    {
      name: 'Leonidas',
      level: 1,
      username: 'leo',
    },
  ]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const player: Player = {
      name: name,
      level: level,
      username: username,
    };

    setPlayers([...players, player]);

    setName('');
    setLevel(1);
    setUsername('');

    // console.log(players);
  }

  return (
    <div>
      <ul>
        {players.map((player) => (
          <li key={player.username}>
            {player.name} | {player.username} | {player.level}
          </li>
        ))}
      </ul>
      <form className="flex flex-col max-w-96 mt-8" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            id="name"
            className="border border-zinc-500 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            className="border border-zinc-500 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="level">Level:</label>
          <input
            type="number"
            name="level"
            id="level"
            className="border border-zinc-500 rounded"
            value={level}
            onChange={(e) => setLevel(Number(e.target.value))}
          />
        </div>

        <button type="submit" className="bg-violet-600 text-zinc-50 h-10 rounded mt-4">
          Criar Player
        </button>
      </form>
    </div>
  );
}

type Player = {
  name: string;
  level: number;
  username: string;
};
