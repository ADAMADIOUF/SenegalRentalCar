import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import { removeFavorite } from '../slices/favoritesSlice'
import { FaHeart } from 'react-icons/fa'
import a from "../assets/fauto.png"
import { Link } from 'react-router-dom'
const Favorites = () => {
  const dispatch = useDispatch()
  const favoriteProductIds = useSelector((state) => state.favorites)
  const { data: products, isLoading, isError } = useGetProductsQuery()
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleRemoveFavorite = () => {
    if (selectedProduct) {
      dispatch(removeFavorite(selectedProduct._id))
      setSelectedProduct(null)
    }
  }
const { userInfo } = useSelector((state) => state.auth)
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: Failed to fetch products</div>
  }

  const favoriteProducts = products.filter((product) =>
    favoriteProductIds.includes(product._id)
  )

  const openRemoveConfirmation = (product) => {
    setSelectedProduct(product)
  }

  const closeRemoveConfirmation = () => {
    setSelectedProduct(null)
  }

  return (
    <div>
      <h2>{userInfo.name} Favorites</h2>
      {favoriteProducts.length === 0 ? (
        <div className='favorite-message'>
          <img src={a} alt='' className='favorite-img' />
          <p>No favorite products yet.</p>
        </div>
      ) : (
        <div className='favorites-list'>
          {favoriteProducts.map((product) => (
            <Link to={`/details/${product._id}`}>
              <div key={product._id} className='favorite-product'>
                <FaHeart
                  className='heart-icon'
                  onClick={(e) => {
                    e.preventDefault()
                    openRemoveConfirmation(product)
                  }}
                />
                <img src={product.images[0]} alt={product.model} />
                <p>{product.model}</p>
                <p>{product.pricePerDay} CFA/jour</p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Popup for confirmation */}
      {selectedProduct && (
        <div className='popup'>
          <div className='popup-content'>
            <p>Remove {selectedProduct.model} from Favorites?</p>
            <button onClick={handleRemoveFavorite}>Remove</button>
            <button onClick={closeRemoveConfirmation}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Favorites
