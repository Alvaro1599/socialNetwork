import React from 'react';
import GoogleLogin from 'react-google-login';
export default function(props) {
    function Onsuccess(response) {
        console.log(response);
    }
    return (
        <div className='w-full flex justify-center '>
            <GoogleLogin
                clientId='801898969582-be8pcktnh2plj4qp13cu1qmq5nc83tuk.apps.googleusercontent.com'
                buttonText={props.text}
                onSuccess={Onsuccess}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
}
