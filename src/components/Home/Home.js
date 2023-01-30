import students from "./students.jpg";

function Home() {
  return (
    <div>
      <img src={students} className="img-fluid" alt="students in a classroom" />
    </div>
  );
}

export default Home;
