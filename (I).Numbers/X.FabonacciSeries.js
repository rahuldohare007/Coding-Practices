//1. Iterative Approach
function FabonacciSeries(number) {
  if (number <= 0) return [];
  if (number === 1) return [0];
  const series = [0, 1];

  for (let i = 2; i < number; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }

  return series;
}
console.log(FabonacciSeries(10));

// 2. Recursive Approach
function FabonacciSeries(number) {
  if (number <= 0) return [];
  if (number === 1) return [0];
  if (number === 2) return [0, 1];

  const series = FabonacciSeries(number - 1);
  series.push(series[series.length - 1] + series[series.length - 2]);

  return series;
}
console.log(FabonacciSeries(10));
