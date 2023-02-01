import { useNavigate } from "react-router-dom";

function Pricing({ setBooking }) {
  const navigate = useNavigate();

  function handleBooking(e) {
    navigate("/contact");
    setBooking(e.target.dataset.key);
  }

  return (
    <div>
      <div className="card">
        <h5 className="card-header">1-on-1 Tutoring</h5>
        <div className="card-body">
          <h5 className="card-title">$59.99 per Session</h5>
          <ul className="card-text">
            <li>Any subject</li>
            <li>Customized learning plan</li>
          </ul>
          <button
            className="btn btn-primary"
            data-key="1-on-1 Tutoring $59.99 per Session"
            onClick={(e) => handleBooking(e)}
          >
            Book Now
          </button>
        </div>
      </div>
      <div className="card">
        <h5 className="card-header">Small Group</h5>
        <div className="card-body">
          <h5 className="card-title">$39.99 per Session</h5>
          <ul className="card-text">
            <li>Any subject</li>
            <li>Group sizes from 3 to 6 students</li>
            <li>Friends can register together!</li>
          </ul>
          <button
            className="btn btn-primary"
            data-key="Small Group $39.99 per Session"
            onClick={(e) => handleBooking(e)}
          >
            Book Now
          </button>
        </div>
      </div>
      <div className="card">
        <h5 className="card-header">Classroom Tutoring</h5>
        <div className="card-body">
          <h5 className="card-title">$24.99 per Session</h5>
          <ul className="card-text">
            <li>Classes of up to 20 students</li>
            <li>Scheduled based on demand</li>
            <li>
              Classes focus on specific subject areas or major standardized
              tests
            </li>
          </ul>
          <button
            className="btn btn-primary"
            data-key="Classroom Tutoring $24.99 per Session"
            onClick={(e) => handleBooking(e)}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
