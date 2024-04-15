// Напишите функцию createProductCard, которая принимает следующие параметры:
// ● productName: строка, название товара.
// ● price: строка, цена товара.
// ● imageUrl: строка, URL изображения товара.
// Функция должна создать карточку товара, содержащую изображение товара, название
// и цену, и возвратить эту карточку в виде DOM-элемента.

// function createProductCard(productName, price, productImg) {
//   const card = document.createElement("div");
//   card.classList.add("card");

//   const image = document.createElement("img");
//   image.src = productImg;
//   image.alt = productName;
//   image.classList.add("product-image");

//   const cardName = document.createElement("h2");
//   cardName.textContent = productName;
//   cardName.classList.add("product-name");

//   const cardPrice = document.createElement("span");
//   cardPrice.textContent = price;
//   cardPrice.classList.add("product-price");

//   cardPrice.style.fontSize='20px'

//   card.style.backgroundColor = "teal";
//   card.style.width = "200px";
//   card.style.padding = "10px";

//   card.append(image);
//   card.append(cardName);
//   card.append(cardPrice);
//   return card;
// }

// const cardElement = createProductCard("Book", "33$", "https://picsum.photos/200/300");

// document.body.appendChild(cardElement);

// Напишите функцию createCommentMessage, которая принимает следующие
// параметры:
// ● author: строка, имя автора комментария.
// ● message: строка, текст комментария.
// ● timestamp: строка, временная метка комментария.
// Функция должна создать сообщение комментария, содержащее имя автора, текст
// комментария и временную метку, и возвратить это сообщение в виде DOM-элемента.

// function createCommentMessage(author, message, timestamp) {
//   const commentDiv = document.createElement("div");
//   commentDiv.classList.add("comment");

//   const authorElement = document.createElement("p");
//   authorElement.textContent = `Author: ${author}`;

//   const messageElement = document.createElement("p");
//   messageElement.textContent = `Message: ${message}`;

//   const timestampElement = document.createElement("p");
//   timestampElement.textContent = `Timestamp: ${timestamp}`;

//   commentDiv.appendChild(authorElement);
//   commentDiv.appendChild(messageElement);
//   commentDiv.appendChild(timestampElement);

//   return commentDiv;
// }

// const commentElement = createCommentMessage("John", "Hello", "12:00");

// document.body.appendChild(commentElement);

// Напишите функцию createMenuItem, которая принимает следующие параметры:
// ● name: строка, название блюда в меню.
// ● price: строка, цена блюда.
// ● description: строка, описание блюда.
// Функция должна создать элемент меню, содержащий название блюда, цену и
// описание, и возвратить этот элемент в виде DOM-элемента.

function createMenuItem(name, price, description) {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-element");

  const nameElement = document.createElement("p");
  nameElement.textContent = `Name: ${name}`;

  const priceElement = document.createElement("p");
  priceElement.textContent = `Price: ${price}`;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = `Description: ${description}`;

  menuDiv.appendChild(nameElement);
  menuDiv.appendChild(priceElement);
  menuDiv.appendChild(descriptionElement);

  return menuDiv;
}

const menuItem = createMenuItem(
  "Spaghetti Carbonara",
  "$12.99",
  "Classic Italian pasta with bacon, eggs, and Parmesan cheese."
);

document.body.appendChild(menuItem)
