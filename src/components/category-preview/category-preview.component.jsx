import ProductCard from '../product-card/product-card.component';

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles';

const CategoryPreview = ({ title, toys }) => (
  <CategoryPreviewContainer>
    <h2>
      <Title className="title" to={title}>
        {title.toUpperCase()}
      </Title>
    </h2>
    <Preview>
      {toys
        .filter((_, idx) => idx < 4)
        .map((toy) => (
          <ProductCard key={toy.id} toy={toy} />
        ))}
    </Preview>
  </CategoryPreviewContainer>
);

export default CategoryPreview;
