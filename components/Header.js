// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const headerContainer = document.querySelector('.header-container')

    const header = document.createElement.add('div')
    const date = document.createElement.add('span')
    const title = document.createElement.add('h1')
    const temp = document.createElement.add('span')

    header.appendChild(date)
    header.appendChild(title)
    header.appendChild(temp)

    header.classList.add('header')

    headerContainer.appendChild(header)
}

