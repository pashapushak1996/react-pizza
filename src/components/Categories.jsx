import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/";

const Categories = ({ items }) => {
    const { activeCategory } = useSelector(({ filters }) => filters);

    const dispatch = useDispatch();

    const toggleCategory = (category) => {
        dispatch(setCategory(category));
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
};

export default Categories;


