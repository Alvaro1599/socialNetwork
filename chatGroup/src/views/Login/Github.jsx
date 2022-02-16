import React from 'react'
import { LoginGithub } from 'react-login-github'

export default function Github() {
  function onSuccess(response) {
    console.log(response);
  }
  
  return (
    <div>
{/*       <LoginGithub
      clientId="Iv1.a4056a31f5dfc77b"
      onSuccess={onSuccess}
      /> */}
    </div>
  )
}
