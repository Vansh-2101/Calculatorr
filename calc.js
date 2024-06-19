let currentResult = '';

function appendToResult(value) {
  currentResult += value;
  document.getElementById('result').value = currentResult;
}

function clearResult() {
  currentResult = '';
  document.getElementById('result').value = '';
}

function calculate() {
  let previousCalculation = currentResult + ' = ';
  try {
    currentResult = eval(currentResult);
    previousCalculation += currentResult;
    document.getElementById('result').value = currentResult;
    document.getElementById('previous').textContent = previousCalculation;
  } catch (error) {
    currentResult = '';
    document.getElementById('result').value = 'Error';
    document.getElementById('previous').textContent = '';
  }
}
