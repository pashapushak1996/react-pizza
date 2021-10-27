import PropTypes from 'prop-types';
import React from "react";

export const Categories = React.memo(({ activeCategory, items, onSelectCategory }) => {
    return (
        <div className="categories">
            <ul>
                { items.map((category, index) => <li
                    key={ `${ category }_${ index }` }
                    className={ activeCategory === index ? 'active' : '' }
                    onClick={ () => onSelectCategory(index) }>{ category }</li>) }
            </ul>
        </div>
    );
});

Categories.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    activeCategory: PropTypes.number.isRequired,
    onSelectCategory: PropTypes.func.isRequired
};

Categories.defaultProps = {
    items: [],
    activeCategory: 0,
    onSelectCategory: () => {
        console.log('Here should be a function from props');
    }
};


