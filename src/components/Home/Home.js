import students from "./students.jpg";

const backgroundColor = "rgba(128, 128, 128, 0.6)";
const textColor = ""

function Home() {
  return (
    <div>
      <div className="card">
        <img
          className="card-img-top"
          src={students}
          alt="Students in a classroom."
        />
        <div
          className="card-img-overlay card-inverse"
          style={{ background: backgroundColor }}
        >
          <h1
            className="text-stroke text-white pb-2 pt-2x text-center position-relative top-50"
            style={{ opacity: 100 }}
          >
            Train Your Brain at ArmBrain!
          </h1>
        </div>
      </div>
      <div className="card">
        <h2 className="text-center card-header">About Us</h2>
        <p className="card-body fs-4 px-4">
          ArmBrain is more than a tutoring center. ArmBrain offers each student
          an individualized learning experience. Our world-class instructors
          will take the time to get to know you and your strengths and
          weaknesses, and develop a perfect plan to strengthen your brain. Come
          join the ArmBrain family, and grow with us today!
        </p>
      </div>

      {/*Carousel*/}
      <div className="card">
        <h2 className="card-header text-center bg-primary">Testimonials</h2>
        <div id="carousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#carousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carousel" data-slide-to="1"></li>
            <li data-target="#carousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner bg-primary">
            <div className="carousel-item active">
              <div className="card d-block w-100 p-3 bg-primary">
                <p className="card-text fs-4 ml-2 px-5 text-center">
                  I recently tried ArmBrain for online tutoring and was
                  extremely impressed with the quality of service. The tutors
                  are knowledgeable and patient, and they provide clear and
                  effective explanations. The platform is user-friendly and the
                  scheduling process is seamless. I also appreciate the
                  flexibility of being able to have sessions from the comfort of
                  my own home. Overall, I highly recommend ArmBrain for anyone
                  in need of online tutoring
                </p>
                <h3 className="card-title text-right mr-2 pb-3">
                  - The Stevenson Family <br />
                  (Jeremy, 11th Grade)
                </h3>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card d-block w-100 p-3 bg-primary">
                <p className="card-text fs-4 ml-2 px-5 text-center">
                  I highly recommend ArmBrain to anyone looking for top-notch
                  academic support. Their experienced tutors are knowledgeable
                  and patient, providing personalized lessons that cater to each
                  student's individual needs and learning style. My child has
                  seen significant improvement in their grades and confidence
                  since starting with this company. The online platform is
                  user-friendly and the scheduling process is hassle-free.
                  Overall, a fantastic investment in my child's education.
                </p>
                <h3 className="card-title text-right mr-2 pb-3">
                  - The Proscia Family <br />
                  (Michael, Grade 6)
                </h3>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card d-block w-100 p-3 bg-primary">
                <p className="card-text fs-4 ml-2 px-5 text-center">
                  ArmBrain Tutoring is an absolute gem! Their tutors are
                  knowledgeable, patient, and truly care about their students'
                  success. I was struggling with Math, but after just a few
                  sessions with one of their tutors, I felt confident and
                  capable in the subject. Not only did they help me understand
                  the material, but they also taught me effective study skills
                  that I still use today. I highly recommend ArmBrain Tutoring
                  to anyone who wants to excel in their studies and reach their
                  full potential.
                </p>
                <h3 className="card-title text-right mr-2 pb-3">
                  - The O'Keefe Family <br />
                  (Joey, Grade 7)
                </h3>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
