import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from './../Context/AuthProvider';
const Login = () => {
  const {signIn, google, reset} = useContext(AuthContext)
  const { register,formState: { errors }, handleSubmit } = useForm();
  const [loginError, setLoginError] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/';
  const handleLogin = data => {
    setLoginError('')
    signIn(data.email, data.password)
    .then(result => {
      const user = result.user;
      toast.success('Login Success')
      navigate(from, {replace: true})
      console.log(user);

    })
    .catch(error => {
      setLoginError(error.message)
    })
  }
  const handleGoogle = () => {
    google()
    .then(() => {})
    .catch(error => console.error(error))
  }
  const handleReset = () =>{
    reset()
    .then(() => {})
    .catch(error => console.error(error))
  }
  return (
    <div className="h-[800px] flex justify-center items-center ">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", {required: "Email is required"})}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
           {errors.email && <p className='text-red-600 mt-1' role="alert">{errors.email?.message}</p>}

          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {required: 'Password is required'})}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
                       {errors.password && <p className='text-red-600 mt-1' role="alert">{errors.password?.message}</p>}

            <label className="label">
              <Link onClick={handleReset} className="label-text">Forget Password?</Link>
            </label>
          </div>

          <input
            type="submit"
            value="Login"
            className="btn btn-black w-full max-w-xs"
          />
        </form>
      {loginError && <p className="text-red-500">{loginError}</p>}
        <p className="mt-2">
          New to Doctors Portal?
          <Link to="/signup" className="text-primary">
           
            Create new account
          </Link>
        </p>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
        </div>
        <Link className="btn btn-outline w-full" onClick={handleGoogle}>CONTINUE WITH GOOGLE</Link>
      </div>
    </div>
  );
};

export default Login;
