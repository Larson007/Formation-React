import './App.css';

function Header() {
  return (
    <header>
      <h1>Mon application React</h1>
    </header>
  )
}

function Main() {
  return (
    <header>
      <p>création d'un élément</p>
    </header>
  )
}

function Footer() {
  return (
    <header>
      <p>Copyright &copy; 2022</p>
    </header>
  )
}


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
