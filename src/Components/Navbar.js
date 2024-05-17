import "./Nav.css"

const Navbar =()=>{
    return (
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid  bg-black bg-subtle">
    <img className="home-img ms-5 mt-2 mb-2" src="/images/logo2.jfif" alt="" />

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse mx-5" id="navbarNav">
      <ul class="navbar-nav mx-5">
        <li class="nav-item">
          <a class="nav-link active ms-5 fw-bold text-white" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active ms-3 fw-bold text-white" aria-current="page" href="#">Popular</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active  text-white ms-3 fw-bold" aria-current="page" href="#">Top-Rated</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white ms-3 fw-bold" aria-current="page" href="#">Upcomings</a>
        </li>
        
       
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar