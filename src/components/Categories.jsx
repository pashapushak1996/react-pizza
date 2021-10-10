import { useState } from "react";

const Category = ({ category, setActiveCategory, index, activeCategoryIndex, onClick }) => {

    return <li className={ activeCategoryIndex === index ? 'active' : '' }
               onClick={ () => {
                   setActiveCategory(index);
               } }>{ category }</li>
}

const Categories = ({ items }) => {

    const [activeCategoryIndex, setActiveCategory] = useState(null);

    return (
        <div className="categories">
            <ul>
                { items.map((category, index) => <Category
                    setActiveCategory={ setActiveCategory }
                    activeCategoryIndex={ activeCategoryIndex }
                    category={ category }
                    index={ index }/>) }
            </ul>
        </div>
    );
};

export default Categories;


