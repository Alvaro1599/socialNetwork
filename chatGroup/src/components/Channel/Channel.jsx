import React from 'react';
import Message from './Message';

export default function Channel() {
    return (
        <div className='w-10/12 mob:w-full flex flex-col   bg-secondary px-10 mob:px-2 py-4'>
            <h1 className='w-full mob:w-full basis-1/12 mob:pl-10 drop-shadow-2xl'>Name Channel</h1>
            <div className='w-full flex flex-col basis-10/12 overflow-y-auto overflow-x-hidden '>
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
            <div className='basis-1/12 flex p-2 relative   '>
                <input
                    type='text'
                    id='inputMessage'
                    className='w-full rounded-lg pl-4 outline-none bg-primary-light '
                    placeholder='Escriba un mensaje aquí'
                />
                <span
                    class='material-icons absolute cursor-pointer right-6 top-4'
                    onClick={() => {
                        document.getElementById('inputMessage').value = '';
                    }}
                >
                    send
                </span>
            </div>
        </div>
    );
}
