import React, { useState } from 'react';
import { Button } from 'reactstrap';

export default ()=> {
    const [state, setState]=useState({
        pokemons:[],
        sprites:[]
    })
    const clickHandler = event => {
        event.preventDefault();
        fetch("https://pokeapi.co/api/v2/pokemon?&limit=1000")
                  .then(response => {
                    return response.json();
                }).then(response => {
                    // console.log(response);
                    state.pokemons=response.results
                    setState({
                        ...state
                    })
                }).catch(err=>{
                    console.log(err);
                });
        // state.pokemons.forEach((pokemon, index) => {
        //     fetch(pokemon.url)
        //     .then(response =>{
        //         return response.json();
        //     }).then(response=>{
        //         state.pokemons[index].sprites=response.sprites.front_default;
        //         setState({
        //             ...state
        //         })
        //     }).catch(err=>{
        //         console.log(err)
        //     });
        // });
    }
    const imgLink = (index) => `raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${index}.png`
    // console.log(state.pokemons[0].url)

    return (
        <div>
            <Button color='danger' onClick={clickHandler}>Catch em!</Button>
            <ul>
                {state.pokemons.map((pokemon, index)=>
                    <li key={index} style={{listStyle:'none'}}> #{index+1} {pokemon.name}</li>
                )}
            </ul>
            <ul>

            </ul>
        </div>
    )
}
