import { useState } from "react";

const Category = ({ category, setActiveCategory, index, activeCategoryIndex }) => {

    return <li className={ activeCategoryIndex === index ? 'active' : '' }
               onClick={ () => {
                   setActiveCategory(index);
               } }>{ category }</li>
};

const Categories = ({ items }) => {

    const [activeCategoryIndex, setActiveCategory] = useState(null);

    return (
        <div className="categories">
            <ul>
                <li className={ activeCategoryIndex === null ? 'active' : '' }
                    onClick={ () => setActiveCategory(null) }>Все
                </li>
                { items.map((category, index) => <Category
                    key={ `${ category }_${ index }` }
                    setActiveCategory={ setActiveCategory }
                    activeCategoryIndex={ activeCategoryIndex }
                    category={ category }
                    index={ index }/>) }
            </ul>
        </div>
    );
};

export default Categories;


