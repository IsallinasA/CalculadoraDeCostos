document.getElementById('cost-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const cost = parseFloat(document.getElementById('cost').value);
    const shipping = parseFloat(document.getElementById('shipping').value);
    const responseTime = parseFloat(document.getElementById('response-time').value);

    const totalCost = cost + shipping;
    const totalTime = responseTime + 1; 

    document.getElementById('result').innerHTML = `
        <p>${name}, el costo del producto es: ${cost.toFixed(2)}, el costo de envío es: ${shipping.toFixed(2)}, y tendrá un tiempo de respuesta de: ${responseTime} días. El valor total a pagar es de: ${totalCost.toFixed(2)} y se le informará al correo ${email} o teléfono ${phone} indicado, Gracias.</p>
    `;
});

