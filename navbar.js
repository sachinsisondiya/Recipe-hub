class MyNavbar extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
    <nav>
        <ul>
          <li>
            <a href="#"
              ><img
                class="logo"
                id="logo"
                src="/images/online-education.png"
                alt="two knife tilted towards each other and a cheif hat above them"
            /></a>
            <a class="recipe-hub" href="#">Recipe <strong>hub</strong></a>
          </li>
          <li class="menu">
            <a href="#"
              ><img
                id="menu-icon"
                class="icon"
                src="/images/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png"
                alt="three horizantal line (for menu)"
            /></a>
            <div class="menu-list" id="menu-list">
              <a href="add.html">Add Recipe</a>
              <a href="view.html">View Recipes</a>
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