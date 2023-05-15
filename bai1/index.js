function isPrime(number) {
    if (number < 2) {
      return number === 1;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function calculatePrimeSum() {
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);
  
    if (isNaN(number1) || isNaN(number2)) {
      alert('Vui lòng nhập vào hai số a và b.');
      return;
    }
  
    if (number1 >= number2) {
      alert('Số a phải nhỏ hơn số b.');
      return;
    }
  
    let sum = 0;
    for (let i = number1; i <= number2; i++) {
      if (isPrime(i)) {
        sum += i;
      }
    }
  
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Tổng các số nguyên tố trong khoảng từ ${number1} đến ${number2} là: ${sum}`;
  }
  
  
 