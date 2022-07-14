import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import { selectCategoriesMap } from '../../store/categories/category.selector';

import { CategoryContainer, Title } from './category.styles';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [toys, setToys] = useState(categoriesMap[category]);

  useEffect(() => {
    setToys(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer className="category-container">
        {toys && toys.map((toy) => <ProductCard key={toy.id} toy={toy} />)}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
