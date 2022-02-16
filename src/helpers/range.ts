export function range(from: number, to: number): number[] {
  const result: number[] = [];

  let n = from;

  while (n < to) {
    result.push(n);
    n++;
  }

  return result;
}
