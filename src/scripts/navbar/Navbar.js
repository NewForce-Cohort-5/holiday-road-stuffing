export const Navbar = () => {
    const header = document.querySelector('header');
    header.innerHTML += `
    <nav class="navbar navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" onclick="location.reload();" href="#">
        <img
          src="imgs/nav-logo.png"
          alt=""
          width="100"
          height="100"
          class="d-inline-block align-text-top"
        />
        Team Stuffing
      </a>
    </div>
  </nav>
    `
}