import React, { useState, useEffect } from 'react';
import {Table} from 'reactstrap';
import axios from 'axios';

export default () => {
    const [state, setState]=useState([])
    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?&limit=807")
        .then(response => setState(response.data.results))
        .catch( err => console.log(err))
    }, [])
    console.log(state.pokemons)
    return (
        <div style={{background:'black'}}>
            <h1 style={{color:'skyblue'}}>Andrew's Pokédex</h1>
            <span style={{color:'grey'}}>This Pokédex contains {state.length} Pokémons</span>
            <Table>
                    <tr style={{color:'grey'}}>
                        <th>#</th>
                        <th>Name</th>
                        <th>Normal Variant</th>
                        <th>Shiny Variant</th>
                    </tr>
                    {state.map((pokemon, index)=>
                    <tr style={{color:'grey'}}>
                        <td>{index+1}</td>
                        <td key={index}><a style={{color:'skyblue'}} href={pokemon.url}>{pokemon.name.toUpperCase()}</a></td>
                        <td><img alt={pokemon.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}></img></td>
                        <td><img alt={`shiny ${pokemon.name}`} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${index+1}.png`}></img></td>
                    </tr>
                    )}
            </Table>
        </div>
    )
}