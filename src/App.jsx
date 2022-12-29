import Home from './pages/Home';
import './App.css';

function App() {
  const YOUR_APP_ID = '32094c0f'
  const YOUR_APP_KEY = '7bdff98b8099c04bc7aa83cccbc70f04'
  

  async function getRecipes () {
    let result = await fetch('https://api.edamam.com/api/recipes/v2/recipe-finder?type=public&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY';
     );
    console.log(result.data)
  }

  return (
    <div className="app">
      <section id="menu-bar">
        <header id="logo">On Hand Eats</header>
          <Home  />
          <p>Hello world</p>
        </section> 
      </div>
  )
}

export default App
