import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from './../Context/AuthProvider';
const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const {createUser, updateUser} = useContext(AuthContext)
  const [signError, setSignError] = useState('')
  const handleSignUp = data => {
    setSignError('')
    createUser(data.email, data.password)
    .then (result => {
      const user = result.user;
      console.log(user);
      toast('Sign Up Success')
      const userInfo = {
        displayName: data.name
      }
      updateUser(userInfo)
      .then(()=>{})
      .catch (error => console.error(error))
    })
    .catch(error => {
      setSignError(error.message)
    })
  };
  return (
    <div className="h-[800px] flex justify-center items-center ">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.password?.message}
              </p>
            )}

           
          </div>

          <input
            type="submit"
            value="Sign Up"
            className="btn btn-black w-full max-w-xs mt-3"
          />
        </form>
        {signError && <p className="text-red-500">{signError}</p>}

        <p className="mt-2">
          Have an Account?
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </p>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
        </div>
        <Link className="btn btn-outline w-full">CONTINUE WITH GOOGLE</Link>
      </div>
    </div>
  );
};

export default SignUp;
