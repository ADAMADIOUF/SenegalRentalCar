import React from 'react'
import { Link } from 'react-router-dom'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'
import Loading from '../components/Loading'
import Error from '../components/Error'
import {
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
} from '../slices/productsApiSlice'
import { Container, Row, Col, Table, Button } from 'react-bootstrap' // Import React Bootstrap components

const ProductList = () => {
  const { data: products, isLoading, error, refetch } = useGetProductsQuery()
  const [createProduct, { isLoading: loadingCreate }] =
    useCreateProductMutation()
  const [deleteProduct, { isLoading: loadingDelete }] =
    useDeleteProductMutation()

  const deleteHandler = async (id) => {
    if (window.confirm('Are you sure?')) {
      try {
        await deleteProduct(id)
        refetch()
        toast.success('Product deleted')
      } catch (error) {
        const errorMessage =
          error && error.message
            ? error.message
            : 'An error occurred while deleting the product.'
        toast.error(errorMessage)
      }
    }
  }

  const createProductHandler = async () => {
    if (window.confirm('Are you sure you want to create a new product?')) {
      try {
        await createProduct()
        refetch()
        toast.success('Product created successfully')
      } catch (error) {
        const errorMessage =
          error && error.message
            ? error.message
            : 'An error occurred while creating the product.'
        toast.error(errorMessage)
      }
    }
  }

  return (
    <Container>
      <Row className='justify-content-between align-items-center mb-3'>
        <Col>
          <h1 className='mb-0'>Products</h1>
        </Col>
        <Col xs='auto'>
          <Button variant='primary' size='sm' onClick={createProductHandler}>
            <FaEdit /> Create a Product
          </Button>
        </Col>
      </Row>

      {loadingCreate || loadingDelete || isLoading ? (
        <Loading />
      ) : error ? (
        <Error variant='danger'>{error}</Error>
      ) : (
        <Table responsive striped hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>CateGories</th>
              <th>Price</th>
              <th>Is Favorite</th>
              {/* Add more table headers as needed */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.category}</td>
                <td>{product.pricePerDay}</td>
                <td>{product.isFavorite ? 'Yes' : 'No'}</td>
                {/* Add more table cells as needed */}
                <td>
                  <Link to={`/admin/product/${product._id}/edit`}>
                    <Button variant='light' size='sm' className='mx-2'>
                      <FaEdit />
                    </Button>
                  </Link>
                  <Button
                    variant='danger'
                    size='sm'
                    onClick={() => deleteHandler(product._id)}
                  >
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  )
}

export default ProductList
