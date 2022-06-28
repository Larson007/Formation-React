import './App.css';
import img from './images/formations.jpg'

function Header(props) {

  return (
    <header className='header-styles'>
      <h1>{props.name}</h1>
    </header>
  )
}

function Main(props) {
  return (
    <header>
      <p>Création d'un élément{props.adjectives}</p>
      <img src={img} alt={'formation'} height={200} />
      <img src={'https://avatars.githubusercontent.com/u/39912616?v=4'} alt={'github_photo'} height={200} />
      <ul>
        {props.formations.map((formation) => (<li key={formation.id}>{formation.title}</li>))}
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

const formationsObjects = formations.map((formation, formation_id) => (
  {
    id: formation_id,
    title: formation
  }
))

console.log(formationsObjects);

function App() {
  return (
    <div className="App">
      <Header name='Mon application React' />
      <Main adjectives=' - Cours : ' formations={formationsObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
