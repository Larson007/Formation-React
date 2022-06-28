import './App.css';

function Header(props) {

  return (
    <header>
      <h1>{props.name}</h1>
    </header>
  )
}

function Main(props) {
  return (
    <header>
      <p>Création d'un élément{props.adjectives}</p>
      <ul>
        {props.formations.map((formation) => (<li>{formation}</li>))}
      </ul>
    </header>
  )
}

function Footer(props) {
  return (
    <header>
      <p>Copyright &copy; {props.year}</p>
    </header>
  )
}

const formations = [
  "Installation",
  "Components",
  "Dynamic Data",
  "React Create App"
]

function App() {
  return (
    <div className="App">
      <Header name='Mon application React'/>
      <Main adjectives=' - Cours : ' formations={formations}/>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
