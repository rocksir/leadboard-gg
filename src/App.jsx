import { useMemo, useState } from 'react';
import AdminTable from './components/AdminTable';
import LeaderboardTable from './components/LeaderboardTable';
import ViewSwitcher from './components/ViewSwitcher';
import { createInitialTeams } from './constants';
import { getRankedTeams } from './utils';

const clampByField = (field, value) => {
  if (field === 'kills') {
    if (Number.isNaN(value) || value < 0) return 0;
    return value;
  }

  if (Number.isNaN(value) || value < 1) return 1;
  if (value > 16) return 16;
  return value;
};

function App() {
  const [view, setView] = useState('admin');
  const [teams, setTeams] = useState(createInitialTeams);

  const handleUpdateCell = (teamId, matchId, field, value) => {
    const sanitizedValue = clampByField(field, value);

    setTeams((currentTeams) =>
      currentTeams.map((team) => {
        if (team.id !== teamId) return team;

        return {
          ...team,
          matches: {
            ...team.matches,
            [matchId]: {
              ...team.matches[matchId],
              [field]: sanitizedValue,
            },
          },
        };
      })
    );
  };

  const rankedTeams = useMemo(() => getRankedTeams(teams), [teams]);

  return (
    <main className="app-shell">
      <header className="header">
        <h1>BGMI Esports Leaderboard System</h1>
      </header>

      <ViewSwitcher view={view} onChange={setView} />

      {view === 'admin' ? (
        <AdminTable teams={teams} onUpdateCell={handleUpdateCell} />
      ) : (
        <LeaderboardTable rankedTeams={rankedTeams} />
      )}
    </main>
  );
}

export default App;
