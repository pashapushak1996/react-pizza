import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Categories, PizzaItem, SortMenu } from "../components";
import { addCartItem, setCategory, setSortBy } from "../redux";

const categoriesList = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
];

const sortList = [
    { name: 'популярности', type: 'rating' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' }
];

export const Home = () => {
    const dispatch = useDispatch();

    const { items, activeCategory } = useSelector(({ pizzas, filters }) => (
        {
            items: pizzas.items,
            activeCategory: filters.activeCategory
        }
    ));

    const onSelectSortType = React.useCallback((index) => {
        const sortBy = sortList[index].type;

        dispatch(setSortBy(sortBy));
    }, []);

    const onSelectCategory = React.useCallback((categoryIndex) => {
        dispatch(setCategory(categoryIndex));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onSelectCategory={ onSelectCategory }
                    items={ categoriesList }/>
                <SortMenu
                    onSelectSortType={ onSelectSortType }
                    items={ sortList }/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                { items.filter((item) =>
                    !activeCategory
                        ? item
                        : item.category === activeCategory)
                    .map((obj) =>
                        <PizzaItem
                            onSelectItem={ (item) => dispatch(addCartItem(item)) }
                            key={ obj.id } { ...obj }/>) }
            </div>
        </div>
    );
};



