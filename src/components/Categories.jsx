import PropTypes from 'prop-types';
import React, { useState } from "react";

export const Categories = React.memo(({ items, onSelectCategory }) => {
    const [activeCategory, setActiveCategory] = useState(0);

    const toggleCategory = (categoryIndex) => {
        setActiveCategory(categoryIndex);
        onSelectCategory(categoryIndex);
    };

    return (
        <div className="categories">
            <ul>
                { items.map((category, index) => <li
                    key={ `${ category }_${ index }` }
                    className={ activeCategory === index ? 'active' : '' }
                    onClick={ () => toggleCategory(index) }>{ category }</li>) }
            </ul>
        </div>
    );
});

Categories.propTypes = {
    items: PropTypes.array
};


