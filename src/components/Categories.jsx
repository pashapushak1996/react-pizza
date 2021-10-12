import { useState } from "react";

const Categories = ({ items }) => {
    const [activeCategory, setActiveCategory] = useState(null);

    return (
        <div className="categories">
            <ul>
                <li className={ activeCategory === null ? 'active' : '' }
                    onClick={ () => setActiveCategory(null) }>Все
                </li>

                { items.map((category, index) => <li
                    key={ `${ category }_${ index }` }
                    className={ activeCategory === index ? 'active' : '' }
                    onClick={ () => setActiveCategory(index) }>{ category }</li>) }
            </ul>
        </div>
    );
};

export default Categories;


