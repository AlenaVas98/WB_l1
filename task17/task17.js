const debounce = (callback, delay) => {
  let prevTimeoutId;
  return (...args) => {
    clearTimeout(prevTimeoutId);
    prevTimeoutId = setTimeout(() => {
      callback(args);
    }, delay);
  };
};
const getDebounce = debounce((suggestion) => {
  console.log(suggestion);
}, 5000);

$("#address").suggestions({
  token: "eec78ff368b284ab14e3e32cd32f1a5c23656446",
  type: "ADDRESS",
  /* Вызывается когда пользователь выбирает одну из подсказок */
  onSelect: getDebounce,
});
// const throttle = (callback, delay) => {
//   let waiting = false;
//   return (...args) => {
//     if (waiting) {
//       return;
//     }
//     callback(args);
//     waiting = true;
//     setTimeout(() => {
//       waiting = false;
//     }, delay);
//   };
// };
// const getThrottle = throttle((suggestion) => {
//   console.log(suggestion);
// }, 5000);

// $("#address").suggestions({
//   token: "eec78ff368b284ab14e3e32cd32f1a5c23656446",
//   type: "ADDRESS",
//   /* Вызывается когда пользователь выбирает одну из подсказок */
//   onSelect: getThrottle,
// });
