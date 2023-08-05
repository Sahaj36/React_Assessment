import React, { useState } from "react";
import useValidation from "./useValidation"; 

const RegistrationForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [phoneNumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");
  const [town, setTown] = useState("");
  const [region, setRegion] = useState("");
  const [postcode, setPostcode] = useState("");

  const { validateEmail, validateUsername } = useValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail(email);
    const isUsernameValid = validateUsername(name);

    if (isEmailValid && isUsernameValid) {
      console.log("Form submitted successfully");
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-md-8 offset-md-2 bg-body-secondary">
          <h5>Register Here :</h5>
          <h2 className="py-3">USER REGISTRATION :</h2>
          <p>
            Fields marked <span className="text-danger">*</span> are required.
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Email <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                value={email}
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="mt-3">
                Password<span className="text-danger">*</span>
              </label>
              <input
                type="password"
                value={password}
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="mt-3">
                Retype Password<span className="text-danger">*</span>
              </label>
              <input
                type="password"
                value={password}
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="mt-3">
                First Name<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                value={firstName}
                className="form-control"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div>
              <label className="mt-3">
                Last Name<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                value={lastName}
                className="form-control"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div>
              <label className="mt-3">
                Phone Number<span className="text-danger">*</span>
              </label>
              <input
                type="number"
                value={phoneNumber}
                className="form-control"
                onChange={(e) => setPhonenumber(e.target.value)}
              />
            </div>
            <div>
              <label className="mt-3">
                Address<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                value={address}
                className="form-control"
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                type="text"
                value={address}
                className="form-control mt-2"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <label className="mt-3">Town</label>
              <input
                type="text"
                value={town}
                className="form-control"
                onChange={(e) => setTown(e.target.value)}
              />
            </div>
            <div>
              <label className="mt-3">
                Region<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                value={region}
                className="form-control"
                onChange={(e) => setRegion(e.target.value)}
              />
            </div>
            <div>
              <label className="mt-3">
                Postcode / Zip<span className="text-danger">*</span>
              </label>
              <input
                type="number"
                value={postcode}
                className="form-control"
                onChange={(e) => setPostcode(e.target.value)}
              />
            </div>
            <label for="country" className="mt-3 py-1">Country<span className="text-danger">*</span></label>
            <br/>
            <select id="country" name="country" className="rounded-3" style={{height:"35px", width:"735px"}}>
              <option value="USA">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
            </select>
            <div className="py-4">
              <button
                type="submit"
                className="btn btn-success mt-3 form-control"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
