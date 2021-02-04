// !MENU W/FILTERS
const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
// * Display elements
const sectionCenterMenu = document.querySelector('.section-center-menu');
// Use the function declared below and pass in the menu array as a pharameter
window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu)
});
// Resuable function structure
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(menuitem => {
        return  `   <article class="menu-item">
                        <div class="item-img">
                            <img src="${menuitem.img}" class="photo" alt="${menuitem.title}">
                        </div>
                        <div class="item-info">
                        <div class="header-menu">
                            <h4>${menuitem.title}</h4>
                            <h4 class="price">${menuitem.price}</h4>
                        </div>
                            <p class="item-text">
                                ${menuitem.desc}
                            </p>
                            </div>
                    </article>    `
    });
    displayMenu = displayMenu.join('');
    sectionCenterMenu.innerHTML = displayMenu;
}
// *Filter elements
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const category = e .currentTarget.dataset.id;
        const menuCategory = menu.filter(menuItem => {
            if(menuItem.category === category) {
                return menuItem;
            }
        });
        if(category === 'all') {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        }
    })
})

// !REVIEWS
// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
// vars from html
const img = document.querySelector('#avatar');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
// Set starting item 
let currentItem = 0;
// Set a function that takes data from each item in the array
function showPerson(person) {
    // Items by index in my array
    const item = reviews[person];
    // Connect to my item properties
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
// Set what i want to see when the document load initially (the first item)
window.addEventListener('DOMContentLoaded', () => {
    showPerson(currentItem)
})
// Show next item
nextBtn.addEventListener('click', () => {
    currentItem++;
    if(currentItem > reviews.length -1) {
        currentItem = 0;
    } showPerson(currentItem);
});
// Show previous item
prevBtn.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    } showPerson(currentItem);
});
  
// !FAQ
// Plus icon buttons to show the text
const questionBtns = document.querySelectorAll('.question-btn')
// Loop over the three buttons
questionBtns.forEach(btn => {
    // e for targetizing the exact button clicked between the 3
    btn.addEventListener('click', (e) => {
        // Traversing the dom from the button to the entire selected question section (there are more methods to do that)
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    })
})