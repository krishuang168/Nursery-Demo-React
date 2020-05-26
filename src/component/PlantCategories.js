import React from 'react';
import { FLOWERS } from '../shared/data/flowers';
import { VEGGIES } from '../shared/data/veggies';
import { HERBS } from '../shared/data/herbs';
import { TREES } from '../shared/data/trees';
import PlantCard from './PlantCards';

// Display all plants in a specific category
export const Flowers = () => {
    return (
        <React.Fragment>
            <div className="container">
                <h3>Flowers</h3>
                <PlantCard plantsData={FLOWERS} />
            </div>
        </React.Fragment>
    );
}

export const Veggies = () => {
    return (
        <React.Fragment>
            <div className="container">
                <h3>Vegetables</h3>
                <PlantCard plantsData={VEGGIES} />
            </div>
        </React.Fragment>
    );
}

export const Herbs = () => {
    return (
        <React.Fragment>
            <div className="container">
                <h3>Herbs</h3>
                <PlantCard plantsData={HERBS} />
            </div>
        </React.Fragment>
    );
}

export const Trees = () => {
    return (
        <React.Fragment>
            <div className="container">
                <h3>Trees & Bushes</h3>
                <PlantCard plantsData={TREES} />
            </div>
        </React.Fragment>
    );
}
