const dataArray = []

const container = document.getElementById('productContainer');
productsAPI.forEach(product => {
  const card = document.createElement('div');
  card.classList.add('product-card');
  const title = document.createElement('h4');
  title.textContent = product.name;
  const image = document.createElement('img');
  image.src = product.img;
  image.alt = product.name;
  const price = document.createElement('p');
  price.textContent = `RS-${product.price}`;
  const BuyButton = document.createElement("button")
  BuyButton.classList.add('buy-Button')
  BuyButton.textContent = "Add to Cart"
  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(price);
  card.appendChild(BuyButton)
  container.appendChild(card);
  BuyButton.addEventListener('click', () => {
    // console.log(product)
    var jsonData = JSON.parse(JSON.stringify(product));
    dataArray.push(jsonData);
    alert('item added to cart')
    var jsonDataArray = JSON.stringify(dataArray);
    // console.log(jsonDataArray);
    localStorage.setItem('myData', jsonDataArray);
    // var storedData = localStorage.getItem('myData');
    // var retrievedDataArray = JSON.parse(storedData);
    // console.log(retrievedDataArray);
  })

});


