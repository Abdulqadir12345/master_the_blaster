document.addEventListener('DOMContentLoaded', () => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const totalPrice = localStorage.getItem('totalPrice') || '0.00';

  const orderSummaryTable = document.getElementById('order-summary-table').querySelector('tbody');
  const totalPriceElement = document.getElementById('total-price');

  function updateOrderSummaryTable(items) {
      orderSummaryTable.innerHTML = '';

      items.forEach(item => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${item.name}</td>
              <td>${item.quantity}</td>
              <td>$${item.pricePerUnit.toFixed(2)}</td>
              <td>$${item.totalItemPrice.toFixed(2)}</td>
          `;
          orderSummaryTable.appendChild(row);
      });
  }

  updateOrderSummaryTable(cartItems);
  totalPriceElement.textContent = totalPrice;



  document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const payment = document.getElementById('payment').value;
    
    if (name && address && email && phone && payment) {
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + 1);
      
      alert(`Thank you for your order! Your delivery is scheduled for ${deliveryDate.toDateString()}.`);
    } else {
      alert('Please fill in all the required fields.');
    }
  });
  
  document.getElementById('payment').addEventListener('change', function() {
    const creditCardInfo = document.getElementById('credit-card-info');
    if (this.value === 'credit-card') {
      creditCardInfo.style.display = 'block';
    } else {
      creditCardInfo.style.display = 'none';
    }
  });
});
