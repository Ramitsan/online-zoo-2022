// генерация случайного числа в заданном интервале, включительно
const getRandomInteger = (a = 0, b = 1) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
  
    return Math.floor(lower + Math.random() * (upper - lower + 1));
  };
  
// генерация случайного элемента из массива
const generateRandomElement = (arr) => {
    const index = getRandomInteger(0, arr.length - 1);
    return arr[index];
  };

  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const swap = arr[j];
      arr[j] = arr[i];
      arr[i] = swap;
    }
    return arr;
  };
  
  // генерация массива случайных элементов из другого массива
  const getRandomArray = (arr) => {
    const newArray = arr.slice();
    return shuffle(newArray).splice(0, getRandomInteger(1, newArray.length + 1));
  };

  //функция для генерации айдишников
  const initUid = (prefix) => {
    let count = 0;
    return () => {
      count++;
      return prefix + count;
    };
  }

  export {generateRandomElement, getRandomArray, initUid};
  