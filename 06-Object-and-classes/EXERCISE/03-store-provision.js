function storeProvision(currStock, orderedProducts) {
    let products = {};

    for(let i = 0; i < currStock.length; i += 2) {
        let productName = currStock[i];
        let qty = Number(currStock[i + 1]);

        products[productName] = qty;
    }

    for(let i = 0; i < orderedProducts.length; i += 2) {
        let productName = orderedProducts[i];
        let qty = Number(orderedProducts[i + 1]);

        if(productName in products) {
            products[productName] += qty;
        } else {
            products[productName] = qty;
        }
    }

    let entries = Object.entries(products);

    for(let entry of entries) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}

storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ]);