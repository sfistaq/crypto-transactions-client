export enum SortDirection {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

export const sortArrayObObj = <T>(
  arr: T[],
  sortBy: keyof T,
  direction: SortDirection
) => {
  const sorted = [...arr].sort((a: T, b: T) =>
    a[sortBy] > b[sortBy] ? 1 : -1
  );
  return direction === SortDirection.ASCENDING ? sorted : sorted.reverse();
};
