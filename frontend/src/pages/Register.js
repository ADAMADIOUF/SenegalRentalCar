import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useRegisterMutation } from '../slices/usersApiSlice'
import { setCredentials } from '../slices/authSlice'
import { toast } from 'react-toastify'
import Loading from '../components/Loading'

const Register = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [register, { isLoading }] = useRegisterMutation()
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
    if (password !== confirmPassword) {
      toast.error('Les mots de passe ne correspondent pas')
      return
    } else {
      try {
        const res = await register({ name, email, password }).unwrap()
        dispatch(setCredentials({ ...res }))
        navigate(redirect)
      } catch (error) {
        toast.error(error?.data?.message || error.error)
      }
    }
  }

  return (
    <div className='login-container'>
      <h1>S'inscrire</h1>
      <form onSubmit={submitHandler}>
        <div className='form-group'>
          <label htmlFor='name'>Nom</label>
          <input
            type='text'
            id='name'
            placeholder='Entrer le nom'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Adresse e-mail</label>
          <input
            type='email'
            id='email'
            placeholder="Entrer l\'adresse e-mail"
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
            placeholder='Entrer le mot de passe'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='confirmPassword'>Confirmer le mot de passe</label>
          <input
            type='password'
            id='confirmPassword'
            className='input-control'
            placeholder='Confirmer le mot de passe'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          type='submit'
          variant='primary'
          className='btn-primary mt-2'
          disabled={isLoading}
        >
          S'inscrire
        </button>
        {isLoading && <Loading />}
      </form>
      <div className='py-3'>
        <div>
          Déjà un compte?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Se connecter
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
