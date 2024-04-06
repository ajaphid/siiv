// scripts.js

// Define PrintItem class
class PrintItem {
    constructor(image_src, title, size, price, description) {
      this.image_src = image_src;
      this.title = title;
      this.size = size;
      this.price = price;
      this.description = description;
    }
}

// Array of PrintItem objects
const printItems = [
    new PrintItem('static/5x7/img_5x7_1.png', 'The Swordsman', '5x7', '$20', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
    new PrintItem('static/5x7/img_5x7_2.png', 'Eclipse', '5x7', '$20', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
    new PrintItem('static/8x10/img_8x10_1.png', 'Oh Grieve', '8x10', '$25', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
    new PrintItem('static/8x10/img_8x10_2.png', 'Torr', '8x10', '$25', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
];

// Function to render print items using template
function renderPrintItems(filter) {
const container = document.getElementById('print-items-container');
container.innerHTML = '';

const template = document.getElementById('print-item-template').innerHTML;

// Loop through print items
printItems.forEach(printItem => {
    if (filter === 'all' || printItem.size === filter) {
    let html = template;

    // Replace placeholders with print item data
    html = html.replace(/{{image}}/g, printItem.image_src);
    html = html.replace(/{{title}}/g, printItem.title);
    html = html.replace(/{{size}}/g, printItem.size);
    html = html.replace(/{{description}}/g, printItem.description);
    html = html.replace(/{{price}}/g, printItem.price);

    // Append rendered template to container
    container.innerHTML += html;
    }
});
}

// Function to handle filter click
function handleFilterClick(event) {
const filterButtons = document.querySelectorAll('.filter');
filterButtons.forEach(button => button.classList.remove('active'));
event.target.classList.add('active');

const filter = event.target.getAttribute('data-filter');
renderPrintItems(filter);
}

// Add event listener to filter buttons
const filterButtons = document.querySelectorAll('.filter');
filterButtons.forEach(button => {
button.addEventListener('click', handleFilterClick);
});

// Select the 'all' filter button and add the 'active' class
const allFilterButton = document.querySelector('.filter[data-filter="all"]');
allFilterButton.classList.add('active');

// Call the function to render print items initially
renderPrintItems('all');
  