class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}

// completed 05-12-2022
// time: O(Nlog(N)) space: O(N)
const merge = function(intervals) {
  merged = []
  intervals.sort((a, b) => b.start < a.start ? 1 : 0);
  console.log(intervals);
  let mergedInterval = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    if (mergedInterval.end < currentInterval.start) {
      merged.push(mergedInterval);
      mergedInterval = currentInterval;
      continue;
    }
    mergedInterval.end = Math.max(mergedInterval.end, currentInterval.end);
  }
  merged.push(mergedInterval);
  return merged;
};


// ------------------TESTING
merged_intervals = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)
