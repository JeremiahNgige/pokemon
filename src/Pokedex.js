import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    
    render(){
        let title;
        if (this.props.isWinner){
            title = <h1 className = "Pokedex-winner">WINNING HAND</h1>;
        }
        else {
            title = <h1 className="Pokedex-loser">LOSING HAND</h1>;
        }

        return(
            <div className='Pokedex'>
             <h1>Pokedex!</h1>
            <p>TOTAL EXPERIENCE: {this.props.exp}</p>
            {title}
            <div className= 'Pokedex-cards'>
            {this.props.pokemon.map((p) => (
                <Pokecard id={p.id} name= {p.name} type= {p.type} exp= {p.base_experience}>
                    
                </Pokecard>
            ))}
            </div>
        </div>
    )
    }
}
export default Pokedex;