import React, { useEffect, useState } from 'react';
import { validate } from './validate';

const SignUp = () => {
    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccepted:false
    })
const [errors,setErrors]=useState({});
const [touched,setTouched]=useState({});
useEffect(()=>{
    setErrors(validate(data));
   
},[data,touched])

    const changeHandler =event=>{
        if(event.target.name==="isAccepted")
            setData({...data,[event.target.name]:event.target.checked})
        setData({...data,[event.target.name]:event.target.value});
        console.log(data)
    }
    return (
        
        <div>
            <form>
                <h2>SignUp</h2>
                <div>
                    <label>Name</label>
                    <input type="text" name='name' value={data.name} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name='email' value={data.email} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name='password' value={data.password} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" name='confirmPassword' value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div>
                    <label>I accept terms of privacy policy</label>
                    <input type="checkbox" name='isAccepted' value={data.isAccepted} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div>
                    <a href='#'>Login</a>
                    <button type='submit'>Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;