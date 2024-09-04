import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";
import { ways } from "./data";


export default function App() {
  function handleClick() {
    console.log("button clicked");
  }


  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Наш подход</h3>
          <ul>
            <WayToTeach title={ways[0].title} description= {ways[0].description} />
            <WayToTeach {...ways[1]}/>
            <WayToTeach {...ways[2]}/>
            <WayToTeach {...ways[3]}/>
  
          </ul>
        </section>
        <section>
          <h3>Чем мы отличаемся от других</h3>
          <Button onClick={handleClick}>Подход</Button>
          <Button onClick={handleClick}>Доступность</Button>
          <Button onClick={handleClick}>Концентрация</Button>
        </section>
      </main>
    </div>
  );
}
