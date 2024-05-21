import { sliders, populars } from "../data"

const Home = () => {
    return (
        <>

            <div className="container-fluid ">
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>

                    </div>



                    <div class="carousel-inner">
                        {
                            sliders.map((slide) => (
                                <div class="carousel-item active ">
                                    <img  src={slide.img} class="d-block w-100" style={{ height: "700px" }} alt="..." />






                                </div>
                            ))
                        }
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="container">
                <div>
                <h2 className="text-center fw-bold mt-4 mb-5">POPULAR</h2>
                </div>
               <div className="col-12 col-sm-12  pop-child">
                <div className="row ">{
                    populars.map((popular) =>(
                      <>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 ">
                        <img className="mt-4" src={popular.img}class="d-block w-360" style={{ height: "360px" }}  alt="" />
                        <h3 className="mt-4">{popular.name}</h3>
                        <div className="row">
                            < div className="col-6">
                        <p>{popular.description} <br />{popular.heading}</p>
                        </div>
                        </div>
                      </div>
                      </>  
                    )
                )
                }

                </div>

               </div>
            </div>






























        </>
    );
};
export default Home;