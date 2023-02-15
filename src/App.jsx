

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3>React sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        
          <ul className="d-flex ">
            <li className="mr-30 d-flex align-center ">
              <img width={18} height={18} src='/img/cart.png' alt="cart"/>
              <span>1205 руб.</span>
            </li>
            <li>
              <img width={18} height={18} src='/img/id.png' alt="id"/>
            </li>
          </ul>
        
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="sneakers">
        <div className="card">
          <img width={133} height={112} src="/img/kros.png" alt="Kros" />
          <h5>Башмак</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена:</span>
              <b>12 888 руб.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/btn.png" alt="btn" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/kros.png" alt="Kros" />
          <h5>Башмак</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена:</span>
              <b>12 888 руб.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/btn.png" alt="btn" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/kros.png" alt="Kros" />
          <h5>Башмак</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена:</span>
              <b>12 888 руб.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/btn.png" alt="btn" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/kros.png" alt="Kros" />
          <h5>Башмак</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена:</span>
              <b>12 888 руб.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/btn.png" alt="btn" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/kros.png" alt="Kros" />
          <h5>Башмак</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена:</span>
              <b>12 888 руб.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/btn.png" alt="btn" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/kros.png" alt="Kros" />
          <h5>Башмак</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена:</span>
              <b>12 888 руб.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/btn.png" alt="btn" />
            </button>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
