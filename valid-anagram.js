/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const tHash = {}
  const sHash = {}
  
  if (s.length !== t.length) {
      return false;
  }

  for (let i = 0; i < s.length; i++) {
      sHash[s[i]] = (sHash[s[i]] ?? 0) + 1
      tHash[t[i]] = (tHash[t[i]] ?? 0) + 1
  }

  for (let key in sHash) {
      if (sHash[key] !== tHash[key]) {
          return false;
      }
  }

  return true;
}