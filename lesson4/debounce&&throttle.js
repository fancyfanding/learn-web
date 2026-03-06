/**
 * 函数防抖（支持立即执行）
 * @param {Function} fn - 目标函数
 * @param {number} delay - 延迟时间
 * @param {boolean} immediate - 是否立即执行
 * @returns {Function}
 */
function debounce(fn, delay, immediate = false) {
  let timer = null;
  
  return function(...args) {
    console.log({args})
    // 清除之前的定时器
    if (timer) clearTimeout(timer);
    
    // 立即执行逻辑：第一次触发时直接执行
    if (immediate && !timer) {
      fn.apply(this, args);
    }
    
    // 重置定时器：非立即执行 / 后续触发防抖
    timer = setTimeout(() => {
      if (!immediate) {
        fn.apply(this, args);
      }
      timer = null;
    }, delay);
  };
}
//创建并挂载input元素
const input = document.createElement('input');
input.type = 'text';
input.placeholder = '请输入关键字';
document.body.appendChild(input);

// 模拟输入框搜索
const input1 = document.querySelector('input');
function search(keyword) {
  console.log('搜索：', keyword);
}

// 防抖处理：输入停止 500ms 后执行搜索
input1.addEventListener('input', debounce(function(e) {
  search(e.target.value);
}, 500));

/**
 * 函数节流（最优版：立即执行 + 最后一次触发也执行）
 * @param {Function} fn - 目标函数
 * @param {number} interval - 节流间隔
 * @returns {Function}
 */
function throttle(fn, interval) {
  let lastTime = 0;
  let timer = null;
  
  return function(...args) {
    const now = Date.now();
    // 计算剩余时间：距离下次可执行的时间
    const remaining = interval - (now - lastTime);
    
    // 1. 立即执行：剩余时间 <= 0（到了执行时间）
    if (remaining <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      fn.apply(this, args);
      lastTime = now;
    } 
    // 2. 延迟执行：保证最后一次触发也能执行
    else if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        lastTime = Date.now();
        timer = null;
      }, remaining);
    }
  };
}