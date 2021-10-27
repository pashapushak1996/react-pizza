import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Categories, PizzaItem, SortMenu, ItemLoader } from "../components";
import { addCartItem, fetchPizzas, setCategory, setSortBy } from "../redux";

const categoriesList = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
];

const sortList = [
    { name: 'популярности', type: 'rating', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавиту', type: 'name', order: 'asc' }
];

export const Home = () => {
    const dispatch = useDispatch();

    const { isLoading, items } = useSelector(({ pizzas }) => pizzas);
    const { category, sortBy } = useSelector(({ filters }) => filters);


    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category));
    }, [sortBy, category]);

    const onSelectSortType = React.useCallback((sortBy) => {
        dispatch(setSortBy(sortBy));
    }, []);

    const onSelectCategory = React.useCallback((categoryIndex) => {
        dispatch(setCategory(categoryIndex));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={ category }
                    onSelectCategory={ onSelectCategory }
                    items={ categoriesList }/>
                <SortMenu
                    activeSortType={ sortBy }
                    onSelectSortType={ onSelectSortType }
                    items={ sortList }/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                { isLoading
                    ? Array(9)
                        .fill(0)
                        .map((_, index) => <ItemLoader key={ index }/>)
                    : items.map((obj) =>
                        <PizzaItem
                            onAddCartItem={ (item) => dispatch(addCartItem(item)) }
                            key={ obj.id }
                            { ...obj }/>) }
            </div>
        </div>
    );
};



