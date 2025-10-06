import { useState } from 'react'

const products = [
  'Tablet',
  'Computer',
  'Smartwatch'
]

function App() {

  const [listProducts, setListProducts] = useState('')
  const [newListProducts, setNewListProduct] = useState(products)

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Clicked Submit');
    setNewListProduct([listProducts, ...newListProducts])
    setListProducts('')

  }

  return (
    <>
      <div className="container mt-5 d-flex flex-column align-items-center">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <input className='me-2 mb-3'
                type='text'
                placeholder='Inserisci un prodotto'
                value={listProducts}
                onChange={(e) => setListProducts(e.target.value)} required>
              </input>
              <button className='btn btn-primary' type='submit'>Add to List</button>
            </form>
            <ul className='list-group'>
              {newListProducts.map((product, i) =>
                <li key={i} className='list-group-item'>
                  {product}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
