import { createSignal, JSX } from "solid-js";
import { Title } from "solid-start";
import Pokemon from "~/components/Pokemon/Pokemon";

export default function Home() {
  const pokemonsList = [3, 7, 10]
  const [filterValue, setFilterValue] = createSignal(NaN)

  const onInputChange: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {
    const value = event.currentTarget.value
    if(value === undefined) {
      return 
    }

    setFilterValue(parseInt(value))
  }

  return (
    <main>
      <Title>Pokedex</Title>
      <h1>Pokedex</h1>
      
      <input type="number" onInput={onInputChange} value={filterValue()} />

      {Number.isNaN(filterValue()) ? pokemonsList.map((pokemonId) => <Pokemon id={pokemonId} />) : <Pokemon id={filterValue()} />}
      
    </main>
  );
}