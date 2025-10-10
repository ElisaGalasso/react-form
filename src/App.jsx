import { useState } from 'react'

const listProduct = []

const initialFormTasks = {
  title: '',
  author: '',
  description: '',
  category: 'FrontEnd',
  pubblicato: false
}

function App() {

  const [newListProducts, setNewListProduct] = useState(listProduct)
  const [FormTasks, setFormTasks] = useState(initialFormTasks)

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Clicked Submit');
    const Task = {
      id: Date.now(),
      ...FormTasks,
    }

    console.log(Task);
    setNewListProduct([Task, ...newListProducts])



    //setNewProducts('')
  }

  function handleClick(i) {
    const filteredList = (newListProducts.filter((_, index) => index != i))
    console.log(filteredList);
    setNewListProduct(filteredList)
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-8">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3>List Task</h3>
                <ul className='list-group'>
                  {newListProducts.map((task, i) =>
                    <li className='list-group-item mb-3 d-flex justify-content-between my-2' key={i}>
                      <h5 className='card-title mb-1'>
                        {task.title}
                      </h5>
                      <small>
                        {task.author}
                      </small>
                      <p>
                        {task.description}
                      </p>
                      <span>
                        {task.category}
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
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <h3>Add Task</h3>
                <form onSubmit={handleSubmit}>
                  <input className='me-2 mb-3 form-control'
                    type='text' name='title' id='title'
                    placeholder='Inserisci un prodotto'
                    required
                    value={FormTasks.title}
                    onChange={(e) => setFormTasks({ ...FormTasks, title: e.target.value })}>
                  </input>
                  <input className='me-2 mb-3 form-control'
                    type='text' name='author' id='author'
                    placeholder='Inserisci autore'
                    required
                    value={FormTasks.author}
                    onChange={(e) => setFormTasks({ ...FormTasks, author: e.target.value })}>
                  </input>
                  <textarea className='form-control mb-3'
                    type='text' name='description' id='description' rows={6}
                    placeholder='Inserisci la tua descrizione' required
                    value={FormTasks.description}
                    onChange={(e) => setFormTasks({ ...FormTasks, description: e.target.value })}>
                  </textarea>
                  <select className='mb-3 form-select' id='category' name='category'
                    value={FormTasks.category}
                    onChange={(e) => setFormTasks({ ...FormTasks, category: e.target.value })}>
                    <option value="FrontEnd">FrontEnd</option>
                    <option value="BackEnd">BackEnd</option>
                    <option value="UI/UX">UI/UX</option>
                  </select>
                  <div className='form-check mb-3'>
                    <input type="checkbox" id='pubblicato' name="pubblicato" className='form-check-input'
                      checked={FormTasks.pubblicato}
                      onChange={(e) => setFormTasks({ ...FormTasks, pubblicato: e.target.checked })} />
                    <label className='form-check-label'>Pubblicato</label>
                  </div>
                  <button className='btn btn-dark' type='submit'>Add to List</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
