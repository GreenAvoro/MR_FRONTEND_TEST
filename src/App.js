import { useState } from 'react';
import Cart from './Cart';
import Image from './images/img.jpg'

function App() {

  const [sizeSelected, setSizeSelected] = useState(0)
  const [products, setProducts] = useState({s:0,m:0,l:0})
  const [error, setError] = useState("")

  function addProduct(){
    setError()
    if(sizeSelected === 0) {setError("No Size Selected"); return}
    if(sizeSelected === 1) setProducts((prev) => ({...prev, s: prev.s + 1}))
    if(sizeSelected === 2) setProducts((prev) => ({...prev, m: prev.m + 1}))
    if(sizeSelected === 3) setProducts((prev) => ({...prev, l: prev.l + 1}))
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="main-bar">
          <Cart products={products}/>
        </div>
      </header>
      <div className="content-container">
        <div className="content">
          <img src={Image}/>
          <div>
          <h1>Classic Tee</h1>
          <h3 className="price">$75.00</h3>
          <p className="product-desc">Dolor sit amet, consectetur adipiscing elit. Nunc quis malesuada ipsum. Vivamus arcu eros, egestas in iaculis eget, viverra interdum sapien. Vivamus at ipsum at lacus condimentum viverra id nec massa. Sed est ante, euismod in pretium sit amet, aliquam sit amet neque. Donec elit ex, lobortis non pulvinar in, tempor sit amet arcu. Aliquam et viverra augue, nec varius augue.</p>

          <h4>SIZE<span className="required-symbol">*</span></h4>

          <div className="selection-boxes">
            <div 
              className={`selection-box ${sizeSelected === 1 && "selected"}`}
              onClick={() => sizeSelected === 1 ? setSizeSelected(0) : setSizeSelected(1)}
            >S</div>
            <div 
              className={`selection-box ${sizeSelected === 2 && "selected"}`}
              onClick={() => sizeSelected === 2 ? setSizeSelected(0) : setSizeSelected(2)}
            >M</div>
            <div 
              className={`selection-box ${sizeSelected === 3 && "selected"}`}
              onClick={() => sizeSelected === 3 ? setSizeSelected(0) : setSizeSelected(3)}
            >L</div>
          </div>
          {error && <p>{error}</p>}
          <p className="add-to-cart-button"
            onClick={() => addProduct()}
          >ADD TO CART</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
