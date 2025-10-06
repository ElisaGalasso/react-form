import { useState } from 'react'

const prodocts = [
  'Tablet',
  'Computer',
  'Smartwatch'
]

function App() {

  const [listProducts, setListProducts] = useState('Prodotto')

  return (
    <>
      <form>
        <input type='text' value={listProducts} onChange={(e) => setListProducts(e.target.value)}>
        </input>
      </form>
    </>
  )
}

export default App
