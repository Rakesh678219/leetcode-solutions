/**
 * @format
 * @param {number[]} arr
 * @return {number}
 */

var longestMountain = function (arr) {
  const n = arr.length;
  let ans = 0;
  for (let i = 1; i <= n - 2; ) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      // greater than both neighbours
      //is peak point
      //traverse and find length
      let j = i;
      let points = 1;
      while (j > 0 && arr[j] > arr[j - 1]) {
        j--;
        points++;
      }
      while (i < n - 1 && arr[i] > arr[i + 1]) {
        i++;
        points++;
      }
      ans = Math.max(points, ans);
    } else {
      i++;
    }
  }
  return ans;
};

console.log(longestMountain([2, 1, 4, 7, 3, 2, 5]));
