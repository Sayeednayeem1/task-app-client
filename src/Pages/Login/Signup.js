import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const Signup = () => {

    const { createUser, updateUser } = useContext(AuthContext);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signupError, setSignupError] = useState('');

    const handleSignUp = (data) => {
        console.log(data);
        setSignupError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast("User created successfully");
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error.message);
                setSignupError(error.message);
            });
    };


    return (
        <div className='bg-white dark:bg-gray-900 animate__animated animate__pulse flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
            <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 p-6 space-y-4 md:space-y-6 sm:p-8'>
                <h1 className="text-xl font-bold leading-tight tracking-tight lg:p-5 text-gray-900 md:text-2xl dark:text-white">
                    Please Register
                </h1>
                <form className='space-y-4 md:space-y-6 sm:p-5' onSubmit={handleSubmit(handleSignUp)}>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                        <input type="text" {...register("name", {
                            required: "name is required"
                        })}
                            name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your name" required="" />
                        {errors.name && <p role="alert" className='text-orange-600'>{errors.name?.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" {...register("email", {
                            required: "email is required"
                        })}
                            name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your email" required="" />
                        {errors.email && <p role="alert" className='text-orange-600'>{errors.email?.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" {...register("password", {
                            required: "password is required",
                            minLength: { value: 6, message: "password must be at least 6 characters" }
                        })}
                            name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="****" required="" />
                        {errors.password && <p role="alert" className='text-orange-600'>{errors.password?.message}</p>}
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">SignUp</button>
                    <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <Link to='/login' className="font-medium text-orange-600 hover:underline dark:text-orange-500">Login</Link>
                    </p>
                    <div className="divider text-center">OR</div>
                    { signupError && <p className='text-orange-700'>{signupError}</p>}
                </form>
                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">SignUp with Google</button>
            </div>
        </div>
    );
};

export default Signup;