const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);
const currentYear = now.getFullYear();
const currentDay = now.getDay();
const author = "Aaron Bechtel";
const locationOfAuthor = "Oklahoma";
const headerTextContent = `${fullDate}`
const footerTextContent = `${currentYear} Great Plains C.O.C. | ${author} | ${locationOfAuthor}`;

let headerDateTextElement = document.querySelector("#header-date");
headerDateTextElement.append(headerTextContent);

let bannerElem = document.querySelector('#banner');

if (currentDay === 1 || currentDay === 2) {
    // const dayOfWeek = 'Monday'
    bannerElem.stlye = 'display: block;';
    bannerElem.style.height = '20px';
    bannerElem.style.backgroundColor = 'burlywood';
} else {
    bannerElem.style = 'display: none;'
}

let footerTextElement = document.querySelector("#footer-text");
footerTextElement.append(footerTextContent);

let date = document.lastModified;
let updateElement = document.querySelector("#last-update");
updateElement.append(date);