import React from 'react';
import { FLOWERS } from '../shared/data/flowers';
import { VEGGIES } from '../shared/data/veggies';
import { HERBS } from '../shared/data/herbs';
import { TREES } from '../shared/data/trees';
import RenderPlant from './RenderPlant';

export const Flowers = () => {
    return (  
        <RenderPlant plantsData={FLOWERS} />
    );
}

export const Veggies = () => {
    return (  
        <RenderPlant plantsData={VEGGIES} />
    );
}

export const Herbs = () => {
    return (  
        <RenderPlant plantsData={HERBS} />
    );
}

export const Trees = () => {
    return (  
        <RenderPlant plantsData={TREES} />
    );
}
