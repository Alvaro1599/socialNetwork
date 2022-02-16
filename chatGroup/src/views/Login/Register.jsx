import React from 'react';
import Github from './Github';
import Google from './Google';
export default function Register() {
    function submit(evt) {
        evt.preventDefault();
    }
    return (
        <form onSubmit={submit} className='w-2/6 flex flex-wrap justify-center  bg-primary-light p-4'>
            <h1 className='w-full mb-4 text-3xl '>Chat Group app</h1>
            <p className='mb-6'> Unlugar donde puedes compartir tus pensamientos y conversaciones </p>
            <div className='w-full flex flex-wrap justify-center'>
                <input
                    placeholder='Su correo aquí'
                    className='w-4/5 text-primary-strong font-bold p-2 outline-none invalid:border-4 invalid:border-primary-strong peer   rounded-xl '
                    type='email'
                    required
                />
                <p className='invisible peer-invalid:visible mb-6'>Correo inválido</p>
            </div>
            <div className='w-full flex flex-wrap justify-center'>
                <input
                    placeholder='Su contraseña va aquí'
                    className=' text-primary-strong font-bold p-2 invalid:border-4 invalid:border-primary-strong outline-none invalidate:border invalidate:border-bg-primary-ligth rounded-xl w-4/5 peer'
                    type='password'
                    required
                />
                <p className='invisible peer-invalid:visible mb-6'>Debe escribir una contraseña</p>
            </div>

            <div className='w-full flex flex-wrap justify-center'>
                <input
                    placeholder='Su nombre aquí'
                    className='w-4/5 text-primary-strong font-bold p-2 outline-none invalid:border-4 invalid:border-primary-strong peer   rounded-xl '
                    type='text'
                    required
                />
                <p className='invisible peer-invalid:visible mb-6'>Debe escribir su nombre</p>
            </div>
            <div className='w-full flex flex-wrap justify-center'>
                <input
                    placeholder='Sus apellidos aquí'
                    className='w-4/5 text-primary-strong font-bold p-2 outline-none invalid:border-4 invalid:border-primary-strong peer   rounded-xl '
                    type='text'
                    required
                />
                <p className='invisible peer-invalid:visible mb-6'>Debe escribir sus apellidos</p>
            </div>
            <button type='submit' className='w-3/4  bg-primary-strong p-2 rounded-xl'>
                Registrarse
            </button>
            <h1 className='mt-6 text-sm'>O regístrate con google</h1>
            <div className='mb-2'>------------------------------------</div>
            <Google text='Regístrate con Google' />
            <Github />
        </form>
    );
}
