import { useDispatch } from "react-redux";
import PropTypes from 'prop-types'

import { Categories, PizzaItem, SortMenu } from "../components";
import { addCartItem } from "../store/action-creators";

const Home = ({ items }) => {
    const dispatch = useDispatch();

    return (
        <div className="container">
            <div className="content__top">
                <Categories items={ [
                    'Мясные',
                    'Вегетарианская',
                    'Гриль',
                    'Острые',
                    'Закрытые'] }/>
                <SortMenu items={ ['популярности', 'цене', 'алфавиту'] }/>
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


