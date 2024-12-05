// Selecting all menu items
const menuItems = document.querySelectorAll('.menu-card-container ul li');

// Add click event listeners to menu items
menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
        // Confirm order
        const confirmed = confirm("Are you sure you want to order " + menuItem.textContent);
        
        if (confirmed) {
            // Extract data from the clicked item
            const itemName = menuItem.getAttribute('data-item');
            const itemPrice = menuItem.getAttribute('data-price');
            const itemImage = menuItem.getAttribute('data-image');

            // Generate random order ID
            const orderId = Math.floor(Math.random() * 1000000) + 1;

            // Open new window for the receipt
            const receiptWindow = window.open("", "_blank", "width=800, height=600");

            // Write the receipt content into the new window
            receiptWindow.document.write(`
                <html>
                    <head>
                        <title>Receipt</title>
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                background-color: #f9f9f9;
                                padding: 20px;
                            }
                            .receipt-container {
                                border: 1px solid #ddd;
                                padding: 20px;
                                max-width: 600px;
                                margin: auto;
                                background-color: #fff;
                                border-radius: 10px;
                                box-shadow: 0 0 10px rgba(0,0,0,0.1);
                            }
                            h1, h2 {
                                text-align: center;
                                margin-bottom: 20px;
                            }
                            .receipt-details {
                                font-size: 18px;
                                margin-bottom: 15px;
                            }
                            .receipt-footer {
                                text-align: center;
                                font-size: 16px;
                                margin-top: 20px;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="receipt-container">
                            <h1>Coffee Card</h1>
                            <h2>Order Receipt</h2>
                            <div class="receipt-details">
                                <p><strong>Order ID:</strong> ${orderId}</p>
                                <p><strong>Item:</strong> ${itemName}</p>
                                <p><strong>Price:</strong> ${itemPrice} Rs</p>
                            </div>
                            <div class="text-center">
                                <img src="${itemImage}" alt="Item Image" style="max-width: 150px;">
                            </div>
                            <div class="receipt-footer">
                                <p>Thank you for your order!</p>
                                <button class="btn btn-primary" onclick="window.print()">Print Receipt</button>
                            </div>
                        </div>
                    </body>
                </html>
            `);

            receiptWindow.document.close(); // Close the document to finish rendering
        }
    });
});
