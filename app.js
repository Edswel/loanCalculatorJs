// Listen for submit event
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculate result
function calculateResults(e) {
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
  } else {
    showError('An error occurred. Kindly check your numbers and try again.');
  }

  e.preventDefault();
}

function showError(error) {
  // Create div
  const errorBox = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  errorBox.className = 'alert alert-danger';

  // Create textNode and append to div
  errorBox.appendChild(document.createTextNode(error));

  // Insert error message
  card.insertBefore(errorBox, heading);
}