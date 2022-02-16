import React, { useState } from 'react';

export default function Modal(props) {
    const [ data, setData ] = useState({ nameChannel: '', description: '' });
    console.log(data, 'data');
    function onSubmit(params) {
        params.preventDefault();
    }
    function handle(params) {
        params.preventDefault();
    }
    return (
        <form
            id='formModal'
            onSubmit={onSubmit}
            className={`bg-secondary-light w-2/5 flex flex-col items-center transition ease-in-out delay-75 ${props.modal
                ? 'visible scale-100'
                : 'invisible scale-0'} p-10 absolute mx-auto drop-shadow-sp z-20`}
        >
            <h1 className='w-full mb-10 text-center font-bold text-2xl'>Nuevo Canal</h1>
            <input
                type='text'
                className='w-5/6 bg-primary-light outline-none rounded-lg invalid:border-2 invalid:border-red-500 p-2 mb-4 '
                placeholder='Nombre del nuevo canal'
                onChange={(e) => setData({ ...data, nameChannel: e.target.value })}
                required
            />
            <textarea
                placeholder='Descripción del canal'
                onChange={(e) => setData({ ...data, description: e.target.value })}
                className='w-5/6 bg-primary-light outline-none rounded-lg invalid:border-2 invalid:border-red-500 p-2 mb-4 '
                cols='20'
                rows='8'
                required
            />
            <div className='flex w-full justify-end'>
                <div
                    className='bg-red-500 rounded-lg mr-4 cursor-pointer p-2'
                    onClick={() => {
                        props.setModal(!props.modal);
                        document.getElementById('formModal').reset();
                        setData({});
                    }}
                >
                    Cancelar
                </div>
                <button
                    type='submit'
                    onClick={() => {
                        props.setModal(!props.modal);
                        document.getElementById('formModal').reset();
                        setData({});
                    }}
                    className='bg-blue-500 rounded-lg mr-12 p-2'
                >
                    Crear Canal
                </button>
            </div>
        </form>
    );
}
