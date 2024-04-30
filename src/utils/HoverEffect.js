import React, { useState } from 'react';

const useHoverEffect = () => {
    const [hovered, setHovered] = useState(false);

    const handleMouseOver = () => {
        setHovered(true);
    };

    const handleMouseOut = () => {
        setHovered(false);
    };

    return {
        hovered,
        handleMouseOver,
        handleMouseOut,
    };
};

export default useHoverEffect;