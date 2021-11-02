export const Footer = () => {
    const footer = document.querySelector('footer');
    footer.innerHTML += `
    <footer class="">
    <div class="footer-github">
      <button type="button" class="btn btn-light btn-outline-dark btn-github">
        
          <i class="bi bi-github github-logo"></i>
        
        Github
      </button>
    </div>
    <div class="footer-copyright">Team Stuffing &copy;2021</div>
  </footer>
    `
    document.querySelector('.btn-github').addEventListener("click", () => {
      window.open('https://github.com/NewForce-Cohort-5/holiday-road-stuffing','_blank')
    })
}