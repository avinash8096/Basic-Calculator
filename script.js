document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const keys = document.querySelector('.keys');
  
    keys.addEventListener('click', (event) => {
      if (event.target.matches('button')) {
        const key = event.target;
        const keyValue = key.value;
        const displayValue = display.value;
  
        if (keyValue === 'clear') {
          display.value = '';
        } else if (keyValue === 'backspace') {
          display.value = displayValue.slice(0, -1);
        } else if (keyValue === '=') {
          try {
            display.value = eval(displayValue);
          } catch (error) {
            display.value = 'Error';
          }
        } else {
          display.value += keyValue;
        }
      }
    });
  });