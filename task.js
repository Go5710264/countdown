let timer = document.getElementById('timer');


//Решение
// timer.textContent = 59;
// let timerId = setInterval(timeReduction, 500);

// function timeReduction() {
//     if(timer.textContent > 0) {
//         return timer.textContent -= 1;
//     } else {
//         clearInterval(timerId);
//         return alert('Вы победили в конкурсе!');
//     };
// }


//Выводит дату в нужном формате, но не работает
// в коде ниже +3 часа, поэтому пришлось вычитать 10кк. Разница в часовом поясе?
// timer.textContent = new Date(+new Date() + 59000 - +new Date() - 10800000).toLocaleTimeString("ru-Ru", {
//   hour: "2-digit", 
//   minute: "2-digit",
//   second: "2-digit"
// });

// let timerId = setInterval(timeReduction, 500);

// function timeReduction() {
//     let oneSec = new Date(+new Date() + 1000 - +new Date() - 10800000).toLocaleTimeString("ru-Ru", {
//         hour: "2-digit", 
//         minute: "2-digit",
//         second: "2-digit"
//       });

//     if(timer.textContent > 0) {
//         return timer.textContent -= oneSec;
//     } else {
//         clearInterval(timerId);
//         return alert('Вы победили в конкурсе!');
//     };
// }



//Работает, но не выводит дату в нужном формате
// timer.textContent = 59;
// let timerId = setInterval(timeReduction, 500);
  
//   function timeReduction() { 
//       if(timer.textContent > 0) {
//           let sec = new Date(+new Date(timer.textContent -= 1) * 1000 - +new Date() - 10800000).toLocaleTimeString("ru-Ru", {
//             hour: "2-digit", 
//             minute: "2-digit",
//             second: "2-digit"
//           });
//           return sec;
//       } else {
//           clearInterval(timerId);
//           return alert('Вы победили в конкурсе!');
//       };
//   }