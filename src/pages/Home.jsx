import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import pink from '../assets/pink.png';
import blue from '../assets/blue.png';
import green from '../assets/green.png';
import chocolate from '../assets/chocolate.png';
import pink1 from '../assets/pink1.png';
import blue1 from '../assets/blue1.png';
import green1 from '../assets/green1.png';
import chocolate1 from '../assets/chocolate1.png';

const ice_cream = [
    {
        id: 1,
        title: 'Strawberry cone',
        image: pink,
        img: pink1,
    },
    {
        id: 2,
        title: 'Blueberry cone',
        image: blue,
        img: blue1,
    },
    {
        id: 3,
        title: 'Chocolate cone',
        image: chocolate,
        img: chocolate1,
    },
    {
        id: 4,
        title: 'Evergreen cone',
        image: green,
        img: green1,
    },
];

// Array of background gradients matching ice cream order
const bgGradients = [
    'linear-gradient(to left, #FF6CEE 50%, #BE128D 100%)',
    'linear-gradient(to left, #47C4F6 50%, #236CDA 100%)',
    'linear-gradient(to left, #E0BDB0 50%, #9C5C3F 100%)',
    'linear-gradient(to left, #47F66E 50%, #2A9949 100%)',
];

const Home = () => {
    const [selected, setSelected] = useState(ice_cream[0]);
    const selectedIndex = ice_cream.findIndex((item) => item.id === selected.id);
    const bgGradient = bgGradients[selectedIndex] || bgGradients[0];

    return (
        <div
            className="min-h-screen transition-all duration-500"
            style={{ background: bgGradient }}
        >
            <Header />
            <HeroSection
                ice_cream={ice_cream}
                selected={selected}
                setSelected={setSelected}
            />
        </div>
    );
};

export default Home;