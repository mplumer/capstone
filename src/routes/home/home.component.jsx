import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Games & Puzzles',
      imageUrl:
        'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80',
    },
    {
      id: 2,
      title: 'Trains & Miniatures',
      imageUrl:
        'https://images.unsplash.com/photo-1647941603148-2702c5049acb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    {
      id: 3,
      title: 'RC Toys',
      imageUrl:
        'https://images.unsplash.com/photo-1627822607472-5bb8cd7812dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    {
      id: 4,
      title: 'Building Sets & Blocks',
      imageUrl:
        'https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    },
    {
      id: 5,
      title: 'Dolls & Action Figures',
      imageUrl:
        'https://images.unsplash.com/photo-1619768470847-f7db55f5d72e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
    },
  ];

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
