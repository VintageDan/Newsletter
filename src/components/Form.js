import React from 'react'
import bgimg from '../assets/newsletter.jpg';
import {useForm} from 'react-hook-form';

export default function Form() {

    const {resgister, handleSubmit, watch, formState:{errors}} =useForm()
    const onSubmit=data =>console.log(data);

    console.log(watch('username'))

  return (
    <section>
        <div className="register">
            <div className="col-1"></div>
                <h2>Sign Up</h2>
                <span>Register for updates</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")}placeholder="username" />
                    <input type="text" {...register("password")}placeholder="password" />
                    <input type="text" {...register("confirmpwd")}placeholder="confirm password" />
                    <input type="text"{...register("mobile",{ required:true, maxLength: 10 })}placeholder="mobile number" />
                    {errors.mobile?.type ==="required" && "Mobile Number Required"}
                    {errors.mobile?.type ==="maxLength" && "Max Number Exceeded"}
                    
                    <button className='btn'>Sign Up</button>
                </form>

            <div className="col-2">
                <img src=(bgimg) alt="" />
            </div>
        </div>
    </section>
  )
}

