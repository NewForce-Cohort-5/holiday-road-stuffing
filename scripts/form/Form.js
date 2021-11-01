const contentTarget = document.querySelector('.form-container');

export const Form = () => {
    contentTarget.innerHTML = `
    <form class="form">
    <div class="form-row">
      <h2>Start Exploring</h2>
    </div>
    <div class="form-row">
      <div class="form-group col-md-10">
        <label for="">National Parks</label>
        <select id="" class="form-control">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-10">
        <label for="">Bizarraries</label>
        <select id="" class="form-control">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-10">
        <label for="">Eateries</label>
        <select id="" class="form-control">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-4">
        <button type="submit" class="btn btn-outline-dark">
          <i class="bi bi-search"></i>Search
        </button>
      </div>
    </div>
  </form>
    `
}