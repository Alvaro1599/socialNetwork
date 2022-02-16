import React from 'react';

export default function ProfileMain() {
    const [ state, setState ] = React.useState(false);

    return (
        <div className='flex justify-between bg-primary-strong items-center  w-full self-end p-2'>
            <div className='w-[42px] h-[42px] bg-white' />
            <div className=''>Profile</div>
            <div className='w-2/6 flex justify-center relative'>
                <span
                    onClick={() => setState(!state)}
                    class='transition ease-in-out delay-75 material-icons cursor-pointer z-10'
                >
                    keyboard_arrow_down
                </span>
                <div
                    className={`absolute right-0 -top-32 bg-secondary rounded-3xl w-40 transition  ease-in-out delay-100  ${state
                        ? 'scale-100'
                        : 'scale-0'} `}
                >
                    <div className='flex justify-around p-4 rounded-xl hover:bg-primary-light'>
                        <span class='material-icons'>account_circle</span>
                        <h1>Mi Perfil</h1>
                    </div>

                    <div className='flex justify-around p-4 rounded-xl hover:bg-primary-light'>
                        <span class='material-icons'>logout</span>
                        <h1>Logout</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
