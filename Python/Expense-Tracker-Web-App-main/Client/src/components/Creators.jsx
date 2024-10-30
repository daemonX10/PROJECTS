import "../css/creators.css";

export default function Creators() {
  return (
    <div class="row mt-2 text-center">
      <div class="row justify-content-center">
        <div class="col-sm-8">
          <div
            class="crea1 section_heading text-center wow fadeInUp next"
            data-wow-delay="0.2s"
          >
            
            <div class="line"></div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center flex lg:flex-row flex-col items-center gap-10 justify-center pt-6">
        <div class="crea2 col-sm-2">
          <div
            class="crea3 single_advisor_profile wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div class="crea4 advisor_thumb alston">
              <div class="social-info">
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div class="single_advisor_details_info">
              <h6>Ruma Yadav</h6>
              <p class="designation">Full Stack Developer</p>
            </div>
          </div>
        </div>
        {/* <div class="crea2 col-sm-2">
          <div
            class="crea1 single_advisor_profile wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div class="crea4 advisor_thumb alvin">
              <div class="social-info">
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div class="single_advisor_details_info">
              <h6>Alvin D'Souza</h6>
              <p class="designation">Frontend Developer</p>
            </div>
          </div>
        </div> */}
        {/* <div class="crea2 col-sm-2">
          <div
            class="crea5 single_advisor_profile wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div class="crea4 advisor_thumb joy">
              <div class="social-info">
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>
            </div>

            <div class="single_advisor_details_info">
              <h6>Alric D'Souza</h6>
              <p class="designation">Data Scientist</p>
            </div>
          </div>
        </div> */}
      </div>
      <h1 className="text-3xl mb-2">Behind the Code - Creators of <span className="text-[#00b386]">Financify</span></h1>
    </div>
  );
}
