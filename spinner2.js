const spinArray = ['|', '/', '-', '\\'];

const spinner = (array, totalTime) => {
  let time = 0;
  while (time < totalTime) {
    array.forEach(item => {
      setTimeout(() => {
        process.stdout.write(`\r ${item}`);
      }, time);
      time += 150;
    });
    
  }
};

spinner(spinArray, 3000);