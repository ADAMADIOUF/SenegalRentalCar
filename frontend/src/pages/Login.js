import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation } from '../slices/usersApiSlice'
import { setCredentials } from '../slices/authSlice'
import { toast } from 'react-toastify'
import Loading from '../components/Loading'

const Login = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [login, { isLoading }] = useLoginMutation()
  const { userInfo } = useSelector((state) => state.auth)
  const { search } = useLocation()
  const sp = new URLSearchParams(search)
  const redirect = sp.get('redirect') || '/'

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [userInfo, redirect, navigate])

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await login({ email, password }).unwrap()
      dispatch(setCredentials({ ...res }))
      navigate(redirect)
    } catch (error) {
      toast.error(error?.data?.message || error.error)
    }
  }

  return (
    <div className='login-container section-center'>
      <h1>Connexion</h1>
      <form onSubmit={submitHandler}>
        <div className='form-group'>
          <label htmlFor='email'>Adresse e-mail</label>
          <input
            type='email'
            id='email'
            className='input-control'
            placeholder='Entrez votre adresse e-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Mot de passe</label>
          <input
            type='password'
            id='password'
            className='input-control'
            placeholder='Entrez votre mot de passe'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn-primary mt-2' disabled={isLoading}>
          Se connecter
        </button>
        {isLoading && <Loading />}
      </form>
      <div className='py-3'>
        Nouveau client ?{' '}
        <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
          S'inscrire
        </Link>
      </div>
    </div>
  )
}

export default Login
