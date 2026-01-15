import React from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import "./App.css"


function RegistrationForm() {
    const {        //useForm hook manages  form state and yupsolver
        register,               //connects inputs 
        handleSubmit,        
        formState: { errors,isValid }

    } = useForm({
        resolver: yupResolver(registerSchema) ,   //connect yup schema
        mode:"onChange",        //instant validation while typing
    });


    const onSubmit = (data) => {
        console.log("Registration Data:", data);
        alert("Registration Sucessful!");
    };

    return(
        <div className="container">
            <h2>Registration Form</h2>

            <form onSubmit={handleSubmit(onSubmit)}>      {/**handlesubmit check validation before onSubmitn */}

                <div className="form-group">
                    <input type="text" placeholder="Enter Name" {...register("name")}/>
                    {errors.name && <p className="error">{errors.name.message}</p>}
                </div>

                <div className="form-group">
                    <input type="email" placeholder="Enter Email" {...register("email")}/>
                    {errors.email && <p className="error">{errors.email.message}</p>}
                </div>

                <div className="form-group">
                    <input type="password" placeholder="Enter Password" {...register("password")}/>
                    {errors.password && <p className="error">{errors.password.message}</p>}
                </div>

                <button type="submit" disabled={!isValid}>Register</button>
            </form>
        </div>
    )
}

export default RegistrationForm;