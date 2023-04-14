import React, { FC, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import '../../assets/css/CategoriesFilter.css';
import { useCategories } from '../../helper/hooks';
import { useFetchAllCategories } from '../../helper/UsefulFuntions';

interface props {
    selectCategory: (category: string) => void;
}

const CategoriesFilter: FC<props> = ({ selectCategory }) => {
    const [activeCategory, setActiveCategory] = useState("")
    const [search, setSearch] = useSearchParams()
    const getCategories = useCategories()
    const categories = getCategories.data ?? [];

    const categoryClicked = (categoryTitle: string, category_id: string) => {
        setActiveCategory(categoryTitle)
        selectCategory(categoryTitle)
        search.set("category_id", category_id)
        setSearch(search, {
            replace: true
        })
    }
    return (
        <div className="categories-filter ">
            <h3>Categories</h3>
            <div className="categories-list">
                <ListGroup className="cat-list">
                    {categories.map((category) => {
                        return <ListGroup.Item onClick={() => categoryClicked(category.title, `${category.id}`)} key={category.id} className={activeCategory === category.title ? "category-item active-cat" : "category-item"}>{category.title}</ListGroup.Item>
                    })}
                    <ListGroup.Item onClick={() => categoryClicked("any", "")} className={activeCategory === "any" ? "category-item active-cat" : "category-item"}>Any</ListGroup.Item>

                </ListGroup>
            </div>
        </div>
    );
};

export default CategoriesFilter;
