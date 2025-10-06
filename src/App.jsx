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
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Inserisci un prodotto' value={listProducts}
          onChange={(e) => setListProducts(e.target.value)}></input>
        <button type='submit'>Add to List</button>
      </form>
      <ul>
        {newListProducts.map((product, i) =>
          <li key={i}>
            {product}
          </li>
        )}
      </ul>
    </>
  )
}

export default App
