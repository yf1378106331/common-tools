const debounce = (fn, delay, immediate) => {
  let timeout = null;

  let result = function () {
    if (timeout) {
      clearTimeout(timeout); // 如果两次触发之间有事件，则清除定时任务，确保只执行最后一次
    } else {
      immediate && fn(arguments); // 执行立即执行
    }

    timeout = setTimeout(() => {
      fn.call(this, arguments);
    }, delay);
  };

  result.cancel = function(){
    clearTimeout(timeout)
    timeout = null
  }

  return result
};

export { debounce };
