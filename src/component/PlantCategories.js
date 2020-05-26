import React from 'react';
import { FLOWERS } from '../shared/data/flowers';
import { VEGGIES } from '../shared/data/veggies';
import { HERBS } from '../shared/data/herbs';
import { TREES } from '../shared/data/trees';
import PlantCard from './PlantCard';

// Display all plants in a specific category
export const Flowers = () => {
    return (  
        <PlantCard plantsData={FLOWERS} />
    );
}

export const Veggies = () => {
    return (  
        <PlantCard plantsData={VEGGIES} />
    );
}

export const Herbs = () => {
    return (  
        <PlantCard plantsData={HERBS} />
    );
}

export const Trees = () => {
    return (  
        <PlantCard plantsData={TREES} />
    );
}
