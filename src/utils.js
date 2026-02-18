import { MATCHES, getPlacementPoints } from './constants';

export const calculateMatchPoints = ({ kills, placement }) => Number(kills) + getPlacementPoints(Number(placement));

export const calculateTeamTotals = (team) => {
  const matchPoints = MATCHES.reduce((acc, matchId) => {
    acc[matchId] = calculateMatchPoints(team.matches[matchId]);
    return acc;
  }, {});

  const totalPoints = Object.values(matchPoints).reduce((sum, pts) => sum + pts, 0);
  const totalKills = MATCHES.reduce((sum, matchId) => sum + Number(team.matches[matchId].kills), 0);

  return { matchPoints, totalPoints, totalKills };
};

export const getRankedTeams = (teams) => {
  const ranked = teams.map((team) => {
    const totals = calculateTeamTotals(team);
    return { ...team, ...totals };
  });

  ranked.sort((a, b) => {
    if (b.totalPoints !== a.totalPoints) return b.totalPoints - a.totalPoints;
    if (b.totalKills !== a.totalKills) return b.totalKills - a.totalKills;
    return a.id - b.id;
  });

  return ranked.map((team, index) => ({ ...team, rank: index + 1 }));
};
