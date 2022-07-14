import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'Games & Puzzles',
    imageUrl:
      'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80',
    route: 'shop/games-and-puzzles',
  },
  {
    id: 2,
    title: 'Trains & Miniatures',
    imageUrl:
      'https://images.unsplash.com/photo-1647941603148-2702c5049acb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    route: 'shop/trains-and-miniatures',
  },
  {
    id: 3,
    title: 'RC Toys',
    imageUrl:
      'https://images.unsplash.com/photo-1627822607472-5bb8cd7812dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    route: 'shop/rc-toys',
  },
  {
    id: 4,
    title: 'Dolls & Action Figures',
    imageUrl:
      'https://images.unsplash.com/photo-1619768470847-f7db55f5d72e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
    route: 'shop/dolls-and-action-figures',
  },

  {
    id: 5,
    title: 'Building Sets & Blocks',
    imageUrl:
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    route: 'shop/building-sets-and-blocks',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
