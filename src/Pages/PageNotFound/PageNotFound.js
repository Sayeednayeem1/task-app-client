import React from 'react';
import Image from "../../assets/images/Page-404.jpg";

const PageNotFound = () => {
    return (
        <div className='grid h-screen place-items-center'>
            <div className="flex flex-col items-center p-4 bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg sm:p-2"  src={Image} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-600 dark:text-orange-600"> 404! page not found!</h5>
                        <p className="mb-3 font-normal text-orange-600 dark:text-orange-600">Please try again providing a better route. Thank You!</p>
                    </div>
            </div>
        </div>
    );
};

export default PageNotFound;