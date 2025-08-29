class MyNavbar extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
    <nav>
        <ul>
          <li>
            <a href="./index.html"
              ><img
                class="logo"
                id="logo"
                src="/images/online-education.png"
                alt="two knife tilted towards each other and a cheif hat above them"
            /></a>
            <a class="recipe-hub" href="./index.html">Recipe <strong>hub</strong></a>
          </li>
          <li class="menu" id="menu">
            <div class="menu-list" id="menu-list">
            <a href="./index.html">Home</a>
              <a href="./add.html">Add Recipe</a>
              <a href="./view.html">View Recipes</a>
            </div>
          </li>
          <li class="search">
            <a href="#"
              ><img
                id="search-icon"
                class="icon"
                src="/images/search_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png"
                alt="magnifying glass (for searching)"
            /></a>
          </li>
        </ul>
      </nav>
    `
  }
}
customElements.define('my-navbar' , MyNavbar)