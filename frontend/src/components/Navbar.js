import React, { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import {
  FaRegHeart,
  FaRegPaperPlane,
  FaUserCircle,
  FaUser,
  FaCar,
  FaMapMarkedAlt,
} from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'
import { GiTicket } from 'react-icons/gi'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { IoIosMail } from 'react-icons/io'
import { IoLogOutSharp } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../slices/authSlice'
import { useLogoutMutation } from '../slices/usersApiSlice'
import { useDispatch, useSelector } from 'react-redux'

import logo from '../assets/logo.png'

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const { userInfo } = useSelector((state) => state.auth)
  const [logoutApiCall] = useLogoutMutation()

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate(`/login`)
    } catch (error) {
      console.log(error)
    }
  }

  const adminMenu = userInfo && userInfo.isAdmin && (
    <div className='admin-menu'>
      <div className='nav-dropdown'>
        <div className='nav-dropdown-title'>Admin</div>
        <ul className='nav-dropdown-items'>
          <li>
            <Link to='/admin/productlist'>Produits</Link>
          </li>
          <li>
            <Link to='/admin/orderlist'>Commandes</Link>
          </li>
          <li>
            <Link to='/admin/userlist'>Utilisateurs</Link>
          </li>
        </ul>
      </div>
    </div>
  )

  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt='' className='logo' />
        </Link>
      </div>
      <div className='menu-icon' onClick={toggleMenu}>
        <MdMenu />
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link to='/seller' onClick={closeMenu}>
            <FaCar /> Vente de Voiture
          </Link>
        </li>
        <li>
          <Link to='/location' onClick={closeMenu}>
            <FaCar /> Location de Voiture
          </Link>
        </li>

        <li>
          <Link to='/howitswork' onClick={closeMenu}>
            <HiOutlineInformationCircle /> Comment fonctionne SenegalAutoMarket
          </Link>
        </li>

        <li>
          <Link to='/contact' onClick={closeMenu}>
            <IoIosMail /> Contact
          </Link>
        </li>
        <li>
          <Link to='/travel' onClick={closeMenu}>
            <FaMapMarkedAlt /> Récit de Voyage
          </Link>
        </li>
        <li className='dropdown'>
          <a href='#'>
            <FaUserCircle /> {/* Icône Personne */}
          </a>
          <ul className='dropdown-content '>
            {!userInfo ? ( // Si non connecté, afficher les options de connexion et d'inscription
              <>
                <li>
                  <Link to='/login'>Se connecter</Link>
                </li>
                {/* Ajoutez votre lien d'inscription ici */}
              </>
            ) : (
              // Si connecté, afficher le nom de l'utilisateur et l'option de déconnexion
              <>
                <li>
                  <span className='nav-username'>{userInfo.name}</span>
                </li>
                {userInfo && (
                  <li>
                    <Link to='/favorites' onClick={closeMenu}>
                      <FaRegHeart /> Favoris
                    </Link>
                  </li>
                )}
                <li>
                  <Link to='/login' onClick={logoutHandler}>
                    <IoLogOutSharp /> Déconnexion
                  </Link>
                </li>
              </>
            )}
            {adminMenu}
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
 