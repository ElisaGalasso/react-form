import { useState } from 'react'

const listProduct = [
  'Tablet',
  'Computer',
  'Smartwatch'
]

function App() {

  const [newProducts, setNewProducts] = useState('')
  const [newListProducts, setNewListProduct] = useState(listProduct)

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Clicked Submit');
    setNewListProduct([newProducts, ...newListProducts])
    setNewProducts('')
  }

  function handleClick(i) {
    const filteredList = (newListProducts.filter((_, index) => index != i))
    console.log(filteredList);
    setNewListProduct(filteredList)
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
                value={newProducts}
                onChange={(e) => setNewProducts(e.target.value)} required>
              </input>
              <button className='btn btn-primary' type='submit'>Add to List</button>
            </form>
            <ul className='list-group'>
              {newListProducts.map((product, i) =>
                <li className='list-group-item d-flex justify-content-between' key={i}>
                  <span>
                    {product}
                  </span>
                  <button className='btn btn-danger p-1' onClick={() => handleClick(i)}>
                    <i className="bi bi-trash3"></i>
                  </button>
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
