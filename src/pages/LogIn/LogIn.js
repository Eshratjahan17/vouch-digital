import React from 'react';
import { useForm } from 'react-hook-form';
import img1 from '../../images/img1.png';
import './LogIn.css';

const LogIn = () => {
   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm();
   const onSubmit = (data) => {
    //  signInWithEmailAndPassword(data.email, data.password);
    //  console.log(data);
    //  setEmail(data.email);
   };
  return (
    <div>
      <div className="flex">
        <div className="bg-white w-3/5 flex justify-center items-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control  ">
              <input
                type="email"
                placeholder=""
                class="input input-bordered  w-96 "
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is reqiured",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              <label class="label">
                {errors.email?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span class="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control ">
              <input
                type="password"
                placeholder="password here"
                class="input input-bordered w-full "
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is reqiured",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be more than 6 charecters",
                  },
                })}
              />
              <label class="label">
                {errors.password?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span class="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
              <a
                // onClick={async () => {
                //   await sendPasswordResetEmail(email);
                //   alert("Sent email");
                // }}
                href=""
                class="label-text-alt  font-bold text-center text-sm"
              >
                Forget Password?
              </a>
            </div>

            <input
              type="submit"
              value="Log in"
              className="btn bg-primary  
                  mt-5 text-white text-center w-full"
            />
          </form>
        </div>
        <div className="bg-primary h-full">
          <img className="px-36  " src={img1} alt="" />
          <div className="px-12 py-12 font">
            <h1 className="text-white font-extrabold text-2xl text-center  pb-2">
              360° Solution for Asset Management
            </h1>
            <p className="text-white text-xs text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos consequatur fugiat sit quis quisquam architecto odio
              aspernatur, eligendi in labore ab aperiam saepe soluta tempora.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;