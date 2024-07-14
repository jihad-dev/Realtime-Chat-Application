import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const userName = form.userName.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const checkboxMale = form.checkboxMale.value;
    const checkboxFemale = form.checkboxFemale.value;
    const data = {
      name,
      userName,
      password,
      confirmPassword,
      checkboxFemale,
      checkboxMale,
    };

    console.log(data);
  };
  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-center">Register</h1>
        <form onSubmit={handleRegister}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              //   value={user.fullName}
              //   onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              className="w-full input input-bordered h-10"
              type="text"
              name="name"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              //   value={user.username}
              //   onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="w-full input input-bordered h-10"
              type="text"
              name="userName"
              placeholder="Username"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              //   value={user.password}
              //   onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full input input-bordered h-10"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              //   value={user.confirmPassword}
              //   onChange={(e) =>
              //     setUser({ ...user, confirmPassword: e.target.value })
              //   }
              className="w-full input input-bordered h-10"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
          <div className="flex items-center my-4">
            <div className="flex items-center">
              <p>Male</p>
              <input
                type="checkbox"
                name="checkboxMale"
                // checked={user.gender === "male"}
                // onChange={() => handleCheckbox("male")}
                defaultChecked
                className="checkbox mx-2"
              />
            </div>
            <div className="flex items-center">
              <p>Female</p>
              <input
                type="checkbox"
                name="checkboxFemale"
                // checked={user.gender === "female"}
                // onChange={() => handleCheckbox("female")}
                defaultChecked
                className="checkbox mx-2"
              />
            </div>
          </div>
          <p className="text-center my-2">
            Already have an account? <Link to="/login"> login </Link>
          </p>
          <div>
            <button
              type="submit"
              className="btn btn-block btn-sm mt-2 border border-slate-700"
            >
              Singup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
