const throttle = (fn, wait) => {
  let prev = 0;
  let timeout = null;

  let result = function () {
    var now = new Date();
    // 如果有定时任务，及时清除
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }

    // 时间间隔大于等待时间将执行
    if (now - prev - wait > 0) {
      fn.call(this, arguments);
      prev = now;
    } else if (!timeout) {
      // 定时任务用来控制最后一次执行
      timeout = setTimeout(() => {
        fn.call(this, arguments);
      }, wait);
    }
  };

  // 取消执行定时任务
  result.cancel = function () {
    clearTimeout(timeout);
    prev = 0;
    timeout = null;
  };

  return result;
};

export { throttle };
