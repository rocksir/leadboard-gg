export const MATCHES = ['M1', 'M2', 'M3'];

export const TEAM_COUNT = 16;

export const PLACEMENT_POINTS = {
  1: 15,
  2: 12,
  3: 10,
  4: 8,
  5: 6,
  6: 4,
  7: 2,
};

export const getPlacementPoints = (placement) => PLACEMENT_POINTS[placement] ?? 0;

export const createInitialTeams = () =>
  Array.from({ length: TEAM_COUNT }, (_, index) => ({
    id: index + 1,
    name: `Team ${index + 1}`,
    matches: MATCHES.reduce((acc, matchId) => {
      acc[matchId] = { kills: 0, placement: 16 };
      return acc;
    }, {}),
  }));
