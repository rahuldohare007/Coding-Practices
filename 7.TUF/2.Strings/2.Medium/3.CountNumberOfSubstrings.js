function substrCount(S, k) {
  function atMostK(S, k) {
    let freq = new Array(26).fill(0);
    let start = 0,
      count = 0,
      distinct = 0;

    for (let i = 0; i < S.length; i++) {
      if (freq[S[i].charCodeAt() - "a".charCodeAt()] === 0) {
        distinct++;
      }
      freq[S[i].charCodeAt() - "a".charCodeAt()]++;

      while (distinct > k) {
        freq[S[start].charCodeAt() - "a".charCodeAt()]--;
        if (freq[S[start].charCodeAt() - "a".charCodeAt()] === 0) {
          distinct--;
        }
        start++;
      }
      count += i - start + 1;
    }

    return count;
  }

  return atMostK(S, k) - atMostK(S, k - 1);
}

const S = "aba",
  k = 2; //3
// Explanation:The substrings are: "ab", "ba" and "aba".

// const S = "abaaca", K = 1 //7
//Explanation: The substrings are: "a", "b", "a", "aa", "a", "c", "a".

console.log(substrCount(S, k));

// Time Complexity = O(n)
// Space Complexity = O(1)
