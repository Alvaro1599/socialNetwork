import React from 'react';
import Canal from './Canal';
import DetailChannel from './DetailChannel';
import ProfileMain from './ProfileMain';
export default function Nav(props) {
    const [ state, setState ] = React.useState(true);
    console.log(state, 'state');
    return !state ? (
        <div
            className={`w-2/12 mob:w-10/12 mob:absolute  mob:p-0 flex z-30 transition ease-in-out delay-400  p-2   flex-col  h-full bg-secondary-light`}
        >
            <div className=' w-full mob:pl-2 flex justify-between basis-1/12 border-b-2 border-primary mb-4 items-center'>
                <h1>Canales</h1>
                <span
                    onClick={() => {
                        props.setModal(!props.modal);
                    }}
                    className=' rounded-lg border-2 border-primary-light text-sm p-2 bg-primary'
                >
                    +
                </span>
            </div>
            <div className='mob:pl-2 relative'>
                <span class='material-icons basis-1/12 absolute z-10 m-2  text-white '>search</span>
                <input
                    type='text'
                    className='py-2 rounded-lg w-full bg-primary pl-10 placeholder:pl-2 placeholder:text-white outline-none'
                    placeholder='Search'
                />
            </div>
            <div className='mob:pl-2 mt-6 flex flex-col  basis-9/12'>
                <Canal />
                <Canal />
                <Canal />
                <Canal />
                <Canal />
            </div>
            <ProfileMain />
        </div>
    ) : (
        <DetailChannel state={state} setState={setState} />
    );
}
