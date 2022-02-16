import React from 'react';
import Profile from './Profile';
import ProfileMain from './ProfileMain';

export default function DetailChannel(props) {
    return (
        <div className='flex p-2 mob:w-10/12 mob:absolute z-30 mob:p-0  flex-col h-full bg-secondary-light w-2/12'>
            <div className='mob:pl-4 basis-1/12 flex items-center'>
                <span
                    class='material-icons'
                    onClick={() => {
                        props.setState(!props.state);
                        console.log(props.state);
                    }}
                >
                    keyboard_arrow_left
                </span>
                <h1 className='font-bold'>Todos los canales</h1>
            </div>
            <div className='basis-2/12 mob:pl-4'>
                <h1 className='font-bold mb-2'>Nombre del canal</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, vero!</p>
            </div>
            <h1 className='font-bold mob:pl-4'>Miembros</h1>
            <div className='basis-8/12 mob:flex mob:flex-col overflow-y-auto mob:pl-4'>
                <Profile />
                <Profile />
                <Profile />
                <Profile />
                <Profile />
                <Profile />
                <Profile />
                <Profile />
                <Profile />
            </div>
            <ProfileMain />
        </div>
    );
}
