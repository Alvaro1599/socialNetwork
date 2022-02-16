import React, { useState } from 'react';
import Channel from '../../components/Channel/Channel';
import Nav from '../../components/NavBar/Nav';

export default function Home(props) {
    const [ nav, setNav ] = useState(false);

    return (
        <div
            className={`w-full mob:relative transition ease-in-out delay-75 ${props.modal
                ? 'blur-sm'
                : ''} flex mob:p-0 p-4 h-full`}
        >
            {nav ? (
                <Nav setModal={props.setModal} modal={props.modal} />
            ) : (
                <span className='material-icons absolute z-50  pt-4 pl-2 ' onClick={() => setNav(true)}>
                    menu
                </span>
            )}
            <Channel />

            <div
                className={`mob:visible ${nav
                    ? 'mob:visible'
                    : 'mob:invisible'}   invisible mob:absolute mob:right-0 mob:p-0 flex justify-center items-center w-8 text-center h-8 m-2 bg-primary rounded-xl font-bold`}
                onClick={() => {
                    console.log('asdasdasd');
                    setNav(false);
                }}
            >
                X
            </div>
        </div>
    );
}
