const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// let navColor = document.getElementsByTagName('nav');
// navColor.style.color = "green";

let newNavHeader = document.querySelector('nav');

let navBar = document.querySelectorAll('header nav a');

// navBar.style.color = 'green';
navBar[0].textContent = "Services";
navBar[0].style.color = "green";
navBar[1].textContent = "Product";
navBar[1].style.color = "green";
navBar[2].textContent = "Vision";
navBar[2].style.color = "green";
navBar[3].textContent = "Features";
navBar[3].style.color = "green";
navBar[4].textContent = "About";
navBar[4].style.color = "green";
navBar[5].textContent = "Contact";
navBar[5].style.color = "green";


let codePic = document.getElementById("middle-img");
codePic.setAttribute('src', siteContent['main-content']["middle-img-src"]);

let circleCode = document.getElementById("cta-img");
circleCode.setAttribute('src', siteContent['cta']["img-src"])

let domTitle = document.querySelector('h1');
domTitle.textContent = "Dom is Awesome!";

let buttonEl = document.querySelector("button");
buttonEl.textContent = "Get Started";

let contentTitle = document.querySelectorAll('h4');
contentTitle[0].textContent = "Features";
contentTitle[1].textContent = "About";
contentTitle[2].textContent = "Services";
contentTitle[3].textContent = "Product";
contentTitle[4].textContent = "Vision";
contentTitle[5].textContent = "Contact";

let contentEl = document.querySelectorAll('p');
contentEl[0].textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum sapiente voluptates illo delectus ex eveniet, ea quos, ipsa suscipit quae earum ducimus obcaecati, commodi minus! Officiis magnam aliquid natus!";
contentEl[1].textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum sapiente voluptates illo delectus ex eveniet, ea quos, ipsa suscipit quae earum ducimus obcaecati, commodi minus! Officiis magnam aliquid natus!";
contentEl[2].textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum sapiente voluptates illo delectus ex eveniet, ea quos, ipsa suscipit quae earum ducimus obcaecati, commodi minus! Officiis magnam aliquid natus!";
contentEl[3].textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum sapiente voluptates illo delectus ex eveniet, ea quos, ipsa suscipit quae earum ducimus obcaecati, commodi minus! Officiis magnam aliquid natus!";
contentEl[4].textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum sapiente voluptates illo delectus ex eveniet, ea quos, ipsa suscipit quae earum ducimus obcaecati, commodi minus! Officiis magnam aliquid natus!";
contentEl[5].textContent = "123 Way 456 Street";
contentEl[6].textContent = "1 (888) 888-8888";
contentEl[7].textContent = "sales@greatidea.io";
contentEl[8].textContent = "Copyright Great Idea! 2018";

const newNav1 = document.createElement('a');
newNav1.textContent = "Stuff";
newNav1.style.fontSize = "16px";
newNav1.style.color = "green";
newNavHeader.appendChild(newNav1);

const newNav2 = document.createElement('a');
newNav2.textContent = "Things";
newNav2.style.color = "green";
newNavHeader.appendChild(newNav2);


