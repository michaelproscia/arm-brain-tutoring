function Contact() {
  return (
    <div>
      <form>
        <div className="form-group mx-3">
          <label for="inputFirstName" className="fs-5">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputFirstName"
            placeholder="Enter first name"
            required
          />
        </div>
        <div className="form-group mx-3">
          <label for="inputLastName" className="fs-5">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputLastName"
            placeholder="Enter last name"
            required
          />
        </div>
        <div className="form-group mx-3">
          <label for="InputEmail1" className="fs-5">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="InputEmail1"
            placeholder="Enter email"
            required
          />
          <small id="emailHelp" className="form-text text-muted text-center">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group mx-3">
          <label for="exampleFormControlTextarea1" className="fs-5">
            Message
          </label>
          <textarea
            class="form-control"
            id="contactMessage"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button type="submit" class="btn btn-primary px-4 py-2 mx-auto fs-3">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
