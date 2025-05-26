export const sum = (...numbers: number[]): number => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};
