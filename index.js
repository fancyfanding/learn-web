/**
 * @param {number[]} height
 * @return {number}
 */

let e = "pwwkew";

var trap = function (e) {
    let a=[];
    for(let i=0;i<e.length;i++){
        for(let j=i+1;j<=e.length;j++){
            if(e[i]===e[j]) a[i]=j-i;
            if(j===e.length) a[i]=5e4;
        }
    }
    let now=1;
    for(let i=0;i<e.length;i++){
        if(a[i]){
            
        }
    }
};
console.log(trap(e));