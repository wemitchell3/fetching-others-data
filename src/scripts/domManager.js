//Create a function which returns a string template. The template is the HTML representation for a food item.
const buildElement = (elementType, elementId, elementTextContent) => {
    let htmlElement = document.createElement(elementType);
    if (elementId) {
      htmlElement.setAttribute("id", elementId);
    }
    htmlElement.textContent = elementTextContent;
    return htmlElement;
  };

const displayContainer = document.querySelector("#display-container");
displayContainer.appendChild(buildElement("section", "food"));