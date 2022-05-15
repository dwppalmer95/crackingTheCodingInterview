class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

// completed 05-15-2022
// time: O(N); space: O(N)
const merge = function(intervals_a, intervals_b) {
  let result = [];
  let intervalAIdx = 0; intervalA = intervals_a[intervalAIdx];
  let intervalBIdx = 0, intervalB = intervals_b[intervalBIdx];
  while(intervalAIdx < intervals_a.length && intervalBIdx < intervals_b.length) {
    const intersectionExists = doesIntersect(intervalA, intervalB);
    if (intersectionExists) {
      const intersectStart = Math.max(intervalA.start, intervalB.start);
      const intersectEnd = Math.min(intervalA.end, intervalB.end);
      const intersection = new Interval(intersectStart, intersectEnd);
      result.push(intersection);
    }
    if (result.length === 0 || intersectionExists) intervalA = intervals_a[++intervalAIdx];
    if (result.length > 0 && !intersectionExists) intervalB = intervals_b[++intervalBIdx];
  }

  return result;
};

const doesIntersect = (intervalA, intervalB) => {
  const bStartInA = intervalB.start >= intervalA.start && intervalB.start <= intervalA.end;
  const bEndInA = intervalB.end >= intervalA.start && intervalB.end <= intervalA.end;
  return bStartInA || bEndInA;
}

process.stdout.write('Intervals Intersection: ');
let result = merge([new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)], [new Interval(2, 3), new Interval(5, 7)]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Intervals Intersection: ');
result = merge([new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)], [new Interval(5, 10)]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();