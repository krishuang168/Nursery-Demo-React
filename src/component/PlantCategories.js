import React from 'react';
import { Link } from 'react-router-dom';
import { FLOWERS } from '../shared/data/flowers';
import { VEGGIES } from '../shared/data/veggies';
import { HERBS } from '../shared/data/herbs';
import { TREES } from '../shared/data/trees';
import PlantCard from './PlantCards';
import * as ActionTypes from '../redux/ActionTypes';

// Display all plants in a specific category
export const Flowers = () => {
    return (
        <React.Fragment>
            <div className="container">
                <h3><Link to="/catalog" className="no-underline" style={{fontSize: "0.5em"}}>🔙</Link>{' '}Flowers</h3>
                <PlantCard plantsData={FLOWERS} />
            </div>
        </React.Fragment>
    );
}

export const Veggies = () => {
    return (
        <React.Fragment>
            <div className="container">
                <h3><Link to="/catalog" className="no-underline" style={{fontSize: "0.5em"}}>🔙</Link>{' '}Vegetables</h3>
                <PlantCard plantsData={VEGGIES} />
            </div>
        </React.Fragment>
    );
}

export const Herbs = () => {
    return (
        <React.Fragment>
            <div className="container">
                <h3><Link to="/catalog" className="no-underline" style={{fontSize: "0.5em"}}>🔙</Link>{' '}Herbs</h3>
                <PlantCard plantsData={HERBS} />
                <span style={{fontSize:"0.5em", color:"#000"}}>TCM: Traditional Chinese Medicine herbs</span>
            </div>
        </React.Fragment>
    );
}

export const Trees = () => {
    return (
        <React.Fragment>
            <div className="container">
                <h3><Link to="/catalog" className="no-underline" style={{fontSize: "0.5em"}}>🔙</Link>{' '}Trees & Bushes</h3>
                <PlantCard plantsData={TREES} />
            </div>
        </React.Fragment>
    );
}
