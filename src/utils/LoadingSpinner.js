import React from 'react';
import { Puff, ThreeDots } from 'react-loader-spinner'

const LoadingSpinner = () => {
    return (
        <div className="flex items-center backdrop-blur-sm justify-center w-full h-full fixed top-0 left-0">
            {/* <div className="spinner-border animate-spin inline-block w-10 h-10 border-l-2 border-primary rounded-full" role="status">

            </div> */}
            {/* <Puff
                height="80"
                width="80"
                radius={1}
                color="#4fa94d"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            /> */}
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#F4900C"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    );
};

export default LoadingSpinner;