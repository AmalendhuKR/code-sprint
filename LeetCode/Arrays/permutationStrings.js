/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// need to improve this by a sliding window
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  let s1Map = {};
  s1.split("").forEach((item) => {
    if (s1Map[item]) {
      ++s1Map[item];
    } else {
      s1Map[item] = 1;
    }
  });

  const s1MapKeys = Object.keys(s1Map);

  for (let i = 0; i <= s2.length - s1.length; i++) {
    let s2MapLoopBreaker = 0;
    let keyCheckBreaker = 0;

    const sub = s2.slice(i, i + s1.length);
    let s2Map = {};

    for (let j = 0; j < s1.length; j++) {
      if (s2Map[sub[j]]) {
        ++s2Map[sub[j]];
      } else {
        s2Map[sub[j]] = 1;
      }
      // inner for-loop breaker
      if (s1Map[sub[j]] && s2Map[sub[j]] > s1Map[sub[j]]) {
        s2MapLoopBreaker = 1;
        break;
      }
    }

    // keys checks
    if (!s2MapLoopBreaker) {
      for (let k = 0; k < s1MapKeys.length; k++) {
        if (s1Map[s1MapKeys[k]] !== s2Map[s1MapKeys[k]]) {
          keyCheckBreaker = 1;
        }
      }
      if (!keyCheckBreaker) return true;
    }
  }
  return false;
};
