import './App.scss';
import Products from './components/Products/Products'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'/images/logo-name.png'} alt="polo" />
        <h6>Hace amigos</h6>
      </header>
      <div>
        <div className='symbol-container'>
        <i className="pi pi-minus" style={{'fontSize': '1em'}}></i>
        <i className="pi pi-plus" style={{'fontSize': '1em'}}></i>
        </div>
        <div className='input-container'>
          <span className="p-input-icon-left">
            <i className="pi pi-search"></i>
            <input type="text" placeholder="Buscar" className="p-inputtext p-component" />
          </span>
        </div>
        <Products/>
      </div>
    </div>
  );
}

export default App;
