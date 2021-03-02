import React, { Component } from 'react';
import Pokecard from './Pokecard';
import Pockecard from './Pokecard';

class Pokedex extends Component {
    static defualtProps = {
        pokemon: [
            {id: 1,name: 'Charmander',type: 'Fire', base_experience:62},
            {id: 7,name: 'Squirtle',type: 'Water', base_experience:63},
            {id: 1,name: 'MetaPod',type: 'Bug', base_experience:72},
            {id: 1,name: 'Butterfree',type: 'flying', base_experience:178},
            {id: 1,name: 'Pikachu',type: 'electric', base_experience:112},
            {id: 1,name: 'JIgglyPuff',type: 'normal', base_experience:95},
            {id: 1,name: 'Gengar',type: 'poison', base_experience:225},
            {id: 1,name: 'Eevee',type: 'normal', base_experience:65}
        ]
    }
    render(){
    return(
        <div className='Pokedex'>
            <h1>Pokodex!</h1>
            {this.props.pokemon.map((p)=>(
                <Pokecard id={p.id} name= {p.name} type= {p.type} exp= {p.base_experience}>
                    
                </Pokecard>
            ))}
        </div>
    )
    }
}
export default Pokedex;