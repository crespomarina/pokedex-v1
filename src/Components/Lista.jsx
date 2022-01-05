import React, {useState} from 'react'

const Lista = () => {

  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('');
  const [lista, setLista] = useState([]);

  const addPoke = (e) => {
    e.preventDefault();

    setLista([
      ...lista,
      {nombre: nombre, tipo: tipo}
    ])

    e.target.reset();
    setNombre('');
    setTipo('');
  }

  return (
    <div className='containter lista-pok'>
      <form onSubmit = {addPoke}>
        <input 
          type="text" 
          placeholder='pokemon name'
          className='form-control mb-2 mt-3'
          required
          onChange={ e => setNombre(e.target.value)}
        />
        <input 
          type="text" 
          placeholder='tipo'
          className='form-control mb-2'
          required
          onChange={ e => setTipo(e.target.value)}
          />
          <button type="submit" className='btn btn-danger col-12'>Agregar Pokemon</button>
      </form>
      <hr />
            
      <ul>
      {
        lista.map((item, index) => (
          <li key={index}><i className="fas fa-heart"></i> {item.nombre} - {item.tipo}</li>
        ))
      }
      </ul>
    </div>
  )
}

export default Lista
