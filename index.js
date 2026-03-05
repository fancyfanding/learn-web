/**
 * @param {number[]} height
 * @return {number}
 */

let s = "cbaebabacd", p = "abc";

var trap = function (s, p) {
    let ans = [], tp = new Array(26).fill(0), sp = new Array(26).fill(0);
    for (let i = 0; i < p.length; i++) {
        tp[charCodeAt(p[i]) - 97]++;
    }
    for (let i = 0; i < s.length - p.length; i++) {
        sp[charCodeAt(s[i]) - 97]++;
        if (sp == tp) {
            ans.push(i - p.length);
        }
        if (i >= p.length)
            sp[charCodeAt(s[i - p.length]) - 97]--;
    }
    return ans;
};
console.log(trap(s, p));