import students from "./students.jpg";

function Home() {
  return (
    <div>
      <div class="card">
        <img
          class="card-img-top"
          src={students}
          alt="Students in a classroom."
        />
        <div class="card-img-overlay card-inverse bg-secondary opacity-50">
          <h4 class="text-stroke text-white pb-2 pt-2x text-center position-relative opacity-100 top-50">
            Train Your Brain at ArmBrain!
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
