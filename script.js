function tipCalc() {
    let billTotal = parseFloat(document.getElementById('billTotal').value);
    let tipAmount = billTotal * 0.15;
    let totalAmount = billTotal + tipAmount;

    document.getElementById('tipAmount').textContent = tipAmount.toFixed(2);
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}

function coatFunc() {
    let temperature = parseFloat(document.getElementById('coat_temp').value);

    if (temperature <= 50 && temperature >= 1) {
      alert("You will need a coat if you are going out")
    }

    if (temperature <= 0) {
      alert("Stay inside")
    }
    else if (temperature <= 30) {
      alert("Wear a coat and hat")
    }
    else if (temperature <= 50) {
      alert("Put on a coat")
    }
    else {
      alert("Pants and Vest is fine")
    }
  }

  function percentageCalculator () {
    const number = parseFloat(document.getElementById('calcNumber').value);
    const percentage = parseFloat(document.getElementById('calcPercentage').value);
    function Calculator(number, percentage) {       
      return number * percentage / 100;
    }
    alert(`${percentage}% of ${number} = ${Calculator(number, percentage)}`);
  }
