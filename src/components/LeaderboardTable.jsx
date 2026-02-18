import { MATCHES } from '../constants';

const LeaderboardTable = ({ rankedTeams }) => {
  return (
    <section className="panel leaderboard-panel">
      <h2>BGMI Tournament Leaderboard</h2>
      <p className="subtitle">Live standings after M1, M2, and M3</p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team</th>
              {MATCHES.map((matchId) => (
                <th key={`${matchId}-points`}>{matchId} Points</th>
              ))}
              <th>Total Kills</th>
              <th>Total Points</th>
            </tr>
          </thead>
          <tbody>
            {rankedTeams.map((team) => (
              <tr key={team.id}>
                <td className="rank">#{team.rank}</td>
                <td className="team-name">{team.name}</td>
                {MATCHES.map((matchId) => (
                  <td key={`${team.id}-${matchId}-points`}>{team.matchPoints[matchId]}</td>
                ))}
                <td>{team.totalKills}</td>
                <td className="total-points">{team.totalPoints}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default LeaderboardTable;
