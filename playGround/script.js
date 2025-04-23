// const ul = document.querySelector(".items");

// // child methods

// const li = document.createElement('li');
// ul.appendChild(li);
// li.className = "item";
// li.textContent = "Item 6";

// // Append new HTML content to the existing content using innerHTML
// ul.innerHTML += '<div style="background-color: blueviolet;" >New content added using innerHTML</div>';

// // parentNode

// console.log(ul.parentNode);
// ul.parentNode.style.backgroundColor = "black";

// // childNode(children(It needs indexing))

// console.log(ul.children[0]);
// console.log(ul.children[1]);
// console.log(ul.children[2]);

// ul.children[0].style.color = "red";
// ul.children[1].style.color = "lime";
// ul.children[2].style.color = "blue";

// // childNode(last&first)

// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);
// ul.firstElementChild.style.color = "blue";
// ul.lastElementChild.style.color = "lime";

// //childNode(next&previous)

// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

// ul.previousElementSibling.style.color = "blue";
// ul.nextElementSibling.style.color = "red";

// console.log(ul.className);
// ul.className = "hello";
// console.log(ul.className);

// console.log(Math.ceil(Math.random() * 6))

// ul.replaceChild(ul.children[1], ul.children[2])

class Product{
    static sum = []
    constructor(name, price){
        this.name = name;
        this.price = price;
        Product.sum.push(this.price);
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }

    static productSum(){
        const total = Product.sum.reduce((acc, val) => acc + val, 0);
        console.log(`Total sum of all products: $${total.toFixed(2)}`);
        return total;
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.00);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total = product3.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);

Product.productSum();