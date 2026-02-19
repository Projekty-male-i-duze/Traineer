export function calculateGoalProgress(
  start: number,
  current: number,
  end: number,
) {
  const totalDifference = Math.abs(start - end);
  const currentDifference = Math.abs(start - current);
  const percentage =
    totalDifference === 0 ? 0 : (currentDifference / totalDifference) * 100;
  const remaining = Math.abs(current - end);

  return {
    percentage,
    remaining,
  };
}
