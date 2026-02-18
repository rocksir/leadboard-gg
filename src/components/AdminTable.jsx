import { MATCHES } from '../constants';

const AdminTable = ({ teams, onUpdateCell }) => {
  return (
    <section className="panel">
      <h2>Admin Panel</h2>
      <p className="subtitle">Update kills and placement for each team in M1–M3.</p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Team</th>
              {MATCHES.map((matchId) => (
                <th key={`${matchId}-kills`}>{matchId} Kills</th>
              ))}
              {MATCHES.map((matchId) => (
                <th key={`${matchId}-place`}>{matchId} Placement</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team.id}>
                <td className="team-name">{team.name}</td>
                {MATCHES.map((matchId) => (
                  <td key={`${team.id}-${matchId}-kills`}>
                    <input
                      type="number"
                      min="0"
                      value={team.matches[matchId].kills}
                      onChange={(event) =>
                        onUpdateCell(team.id, matchId, 'kills', Number(event.target.value))
                      }
                    />
                  </td>
                ))}
                {MATCHES.map((matchId) => (
                  <td key={`${team.id}-${matchId}-placement`}>
                    <input
                      type="number"
                      min="1"
                      max="16"
                      value={team.matches[matchId].placement}
                      onChange={(event) =>
                        onUpdateCell(team.id, matchId, 'placement', Number(event.target.value))
                      }
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminTable;
