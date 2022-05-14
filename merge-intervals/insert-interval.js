class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

// completed 05-14-2022
// time: O(N); space: O(N)
// refactor: try to complete merge as you insert (remember the inputs are already sorted AND merged)
const insert1 = function(intervals, new_interval) {
  let merged = [];
  
  for (let i = 0; i < intervals.length; i++) {
    if (new_interval.start <= intervals[i].start) {
      intervals.splice(i, 0, new_interval);
      break;
    }
    if (i === intervals.length - 1) intervals.push(new_interval);
  }

  let mergedInterval = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    if (currentInterval.start > mergedInterval.end) {
      merged.push(mergedInterval);
      mergedInterval = currentInterval;
      continue;
    }
    mergedInterval.end = Math.max(currentInterval.end, mergedInterval.end);
  }
  merged.push(mergedInterval);

  return merged;
};


// --------------TESTING
process.stdout.write('Intervals after inserting the new interval: ');
let result = insert1([
  new Interval(1, 3),
  new Interval(5, 7),
  new Interval(8, 12),
], new Interval(4, 6));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert1([
  new Interval(1, 3),
  new Interval(5, 7),
  new Interval(8, 12),
], new Interval(4, 10));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert1([new Interval(2, 3),
  new Interval(5, 7),
], new Interval(1, 4));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();