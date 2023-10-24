import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import './Form.css'
const Form = () => {
  const {addOrder, handleOnChange, dataForm} = useCartContext()
  return (
    <div id='form'>
        <div>
            <h3 id='formText'>Deje sus datos para continuar</h3>    
        </div>
        <hr />
        <form>
            <input type="text" className='inputs'
              onChange={handleOnChange} 
              name='name' 
              placeholder='Ingrese su Nombre'
              value={dataForm.name}
              
            />
            <br />
            <input type="text" className='inputs'
              onChange={handleOnChange} 
              name='lastname' 
              placeholder='Ingrese su Apellido' 
              value={dataForm.lastname}
              
            />
            <br />
            <input type="number" className='inputs'
              onChange={handleOnChange} 
              name='phone' 
              placeholder='Ingrese su Telefono' 
              value={dataForm.phone}
              
            />
            <br />
            <input type="number" className='inputs'
              onChange={handleOnChange} 
              name='document' 
              placeholder='Ingrese su Documento' 
              value={dataForm.document}
              
            />
            <br />
            <input 
            type="email" className='inputs'
              onChange={handleOnChange} 
              name='email' 
              placeholder='Ingrese su E-mail' 
              value={dataForm.email}
              

            />
            <br />
            <input type="email" className='inputs'
              onChange={handleOnChange} 
              name='email2' 
              placeholder='Reingrese su E-mail' 
              required
              value={dataForm.email2}
              
              
            />
        </form>
        <div>
            <button className='btn btn-primary' id='btnCompra' onClick={addOrder}><Link to='/ordernumber'>Comprar</Link></button>
        </div>
        
        
    </div>
  )
}

export default Form