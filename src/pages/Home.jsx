import { useDispatch } from "react-redux";
import PropTypes from 'prop-types'

import { Categories, PizzaItem, SortMenu } from "../components";
import { addCartItem } from "../redux";

const Home = ({ items }) => {
    const dispatch = useDispatch();

    return (
        <div className="container">
            <div className="content__top">
                <Categories items={ [
                    'Все',
                    'Мясные',
                    'Вегетарианская',
                    'Гриль',
                    'Острые',
                    'Закрытые'] }/>
                <SortMenu items={ [
                    { name: 'популярности', type: 'popular' },
                    { name: 'цене', type: 'price' },
                    { name: 'алфавиту', type: 'alphabet' }
                ] }/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                { items.map((obj) => <PizzaItem
                    onSelectItem={ (item) => dispatch(addCartItem(item)) }
                    key={ obj.id } { ...obj }/>) }
            </div>
        </div>
    );
};

Home.propTypes = {
    items: PropTypes.array.isRequired
}

export default Home;


