import { createEffect, createSignal, onMount } from "solid-js";

type Props = {
    id: number
}

export default function Pokemon(props: Props) {
    const [name, setName] = createSignal('')
    const [image, setImage] = createSignal('')
    createEffect(async () => {
        const response = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}`)).json()
        
        setName(response.name)
        setImage(response.sprites.front_default)
    })
  return (
    <div>
        <h2>{name()}</h2>
        <p>{props.id}</p>
        <img src={image()}/>
    </div>
  );
}