import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Login(props) {
  const [formLogin, setFormLogin] = useState({
    username: "",
    password: "",
  });

  const changerFormLogin = (e, champ) => {
    e.preventDefault();
    let temp = { ...formLogin };
    temp[champ] = e.target.value;
    setFormLogin(temp);
  };

  const [alert, setAlert] = useState({
    etat: 0,
    message: "",
    type: "",
  });

  const login = (e) => {
    e.preventDefault();
    axios
      .post(`${props.APIUrl}/Admins/login`, formLogin)
      .then((response) => {
        console.log(response.data);
        let alertTemp = { alert };
        alertTemp.etat = 1;
        alertTemp.message = "Login successfully";
        alertTemp.type = "success";
        setAlert(alertTemp);

        let temp = {};
        temp.username = response.data[0].username;
        temp.valide = response.data[0].valide;
        props.setAdmin(temp);
        window.location.href="/dashboard";
      })
      .catch((e) => {
        console.log(e);
        let alertTemp = { alert };
        alertTemp.etat = 1;
        alertTemp.message = "Wrong username or password";
        alertTemp.type = "error";
        setAlert(alertTemp);
      });
  };

  // Equivalent de componentdidmount
  useEffect(() => {
    if(Object.keys(props.Admin).length!==0)
    {
      window.location.href="/dashboard";
    }


    const parameters = new URLSearchParams(window.location.search);
    const success = parameters.get("success");
    const error = parameters.get("error");
    if (success == "register") {
      let alertTemp = { alert };
      alertTemp.etat = 1;
      alertTemp.message = "Admin user successfully added";
      alertTemp.type = "success";
      setAlert(alertTemp);
    }
    if (error == "login") {
      let alertTemp = { alert };
      alertTemp.etat = 1;
      alertTemp.message = "Please login";
      alertTemp.type = "error";
      setAlert(alertTemp);
    }
  }, [setAlert]);

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
                        Login to Your Account
                      </h5>
                      <p className="text-center small">
                        Enter your username & password to login
                      </p>
                    </div>

                    <form
                      className="row g-3 needs-validation"
                      onSubmit={(e) => login(e)}
                    >
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
                            onChange={(e) => changerFormLogin(e, "username")}
                            value={changerFormLogin.username}
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter your username.
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
                          onChange={(e) => changerFormLogin(e, "password")}
                          value={changerFormLogin.password}
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
                          Login
                        </button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">
                          Dont have account?{" "}
                          <a href="/register">Create an account</a>
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
