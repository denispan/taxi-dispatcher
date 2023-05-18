import './App.css';
import Header from './components/Header/Header';
import Car from './components/Car/Car';
import Map from './components/Map/Map';

const CARS = [
  {
    number: 'e461yk799',
    status: 'занят'
  },
  {
    number: 'e423yk799',
    status: 'занят'
  },
  {
    number: 'e347yk799',
    status: 'свободен'
  },
  {
    number: 'p769yt199',
    status: 'занят'
  },
  {
    number: 'c051ak777',
    status: 'занят'
  },
  {
    number: 'x111xx777',
    status: 'свободен'
  },
]

function App() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <div className="cars">
          {
            CARS.map((car, index) => {
              return <Car key={index} number={car.number} status={car.status} />
            })
          }
        </div>
        <Map />
      </main>
    </div>
  );
}

export default App;
