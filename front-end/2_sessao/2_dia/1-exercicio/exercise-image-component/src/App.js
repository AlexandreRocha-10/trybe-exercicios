import './App.css';
import Image from './components/Image'
import staringCat from './staringCat.jpg';

function App() {
  return (
    <main>
      <Image source={ staringCat } alternativeText="Cute cat staring" />
    </main>
  );
}

export default App;