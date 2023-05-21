import React, { Component, useState } from "react";
import axios from "axios";

function Register(props) {
  const [formRegister, setFormRegister] = useState({
    name: "",
    username: "",
    password: "",
    valide: 0
  });

  const changerFormRegister = (e, champ) => {
    e.preventDefault();
    let temp = { ...formRegister };
    temp[champ] = e.target.value;
    setFormRegister(temp);
  };

  const [alert, setAlert] = useState({
    etat: 0,
    message: "",
    type: "",
  });

  const ajouterAdmin = (e) => {
    e.preventDefault();
    axios
      .post(`${props.APIUrl}/Admins/insert`, formRegister)
      .then((response) => {
        let alertTemp = { alert };
        alertTemp.etat = 1;
        alertTemp.message = "Un utilisateur a été inséré avec succès";
        alertTemp.type = "success";
        setAlert(alertTemp);
        window.location.href = '/?success=register';
      })
      .catch((e, response) => {
        // console.log(e);
        // console.log(e.response);
        let alertTemp = { alert };
        alertTemp.etat = 1;
        alertTemp.message = e.response.data;
        alertTemp.type = "error";
        setAlert(alertTemp);
      });
  };

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <a
                    href="index.html"
                    className="logo d-flex align-items-center w-auto"
                  >
                    <img
                      src="assets/img/baeloo.png"
                      alt=""
                      className="d-none d-lg-block"
                      style={{ maxHeight: "50px" }}
                    />
                  </a>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">
                        Create an Account
                      </h5>
                      <p className="text-center small">
                        Enter your personal details to create account
                      </p>
                    </div>

                    <form className="row g-3 needs-validation" onSubmit={(e)=>ajouterAdmin(e)}>
                      <div className="col-12">
                        <label htmlFor="yourName" className="form-label">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="yourName"
                          onChange={(e) => changerFormRegister(e, "name")}
                          value={formRegister.name}
                          required
                        />
                        <div className="invalid-feedback">
                          Please, enter your name!
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">
                          Username
                        </label>
                        <div className="input-group has-validation">
                          <input
                            type="text"
                            name="username"
                            className="form-control"
                            id="yourUsername"
                            onChange={(e) => changerFormRegister(e, "username")}
                            value={formRegister.username}
                            required
                          />
                          <div className="invalid-feedback">
                            Please choose a username.
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="yourPassword"
                          onChange={(e) => changerFormRegister(e, "password")}
                          value={formRegister.password}
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your password!
                        </div>
                      </div>
                      {alert.etat === 1 && alert.type === "success" ? (
                        <p style={{ color: "green" }}>{alert.message}</p>
                      ) : null}
                      {alert.etat === 1 && alert.type === "error" ? (
                        <p style={{ color: "red" }}>{alert.message}</p>
                      ) : null}

                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">
                          Create Account
                        </button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">
                          Already have an account? <a href="/">Log in</a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="credits">
                  Designed by{" "}
                  <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Register;
