const SHOP_DATA = [
  {
    title: 'Games & Puzzles',
    imageUrl:
      'ttps://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80',
    toys: [
      {
        id: 1,
        name: 'Monopoly',
        description: 'Play as a banker, a player or a computer',
        price: 10,
        imageUrl:
          'https://images.unsplash.com/photo-1640461470346-c8b56497850a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
      },
      {
        id: 2,
        name: 'Jigsaw Puzzle',
        description: 'Solve a puzzle to win',
        price: 12,
        imageUrl:
          'https://images.unsplash.com/photo-1612385763901-68857dd4c43c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
      },
      {
        id: 3,
        name: 'Tic Tac Toe',
        description: '3 in a row to win',
        price: 15,
        imageUrl:
          'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80',
      },
      {
        id: 4,
        name: 'Connect 4',
        description: '4 in a row to win',
        price: 20,
        imageUrl:
          'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80',
      },
      {
        id: 5,
        name: 'Chess',
        description: 'Play as a white or black piece',
        price: 25,
        imageUrl:
          'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80',
      },
    ],
  },
  {
    title: 'Trains & Miniatures',
    imageUrl:
      'ttps://images.unsplash.com/photo-1647941603148-2702c5049acb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    toys: [
      {
        id: 6,
        name: 'Yellow Train',
        description: 'Street Car',
        price: 24,
        imageUrl:
          'https://images.unsplash.com/photo-1464552052518-7e7443ec1768?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
      },
      {
        id: 7,
        name: 'Mythical Miniatures',
        description: 'Orcs and Dwarves',
        price: 15,
        imageUrl:
          'https://images.unsplash.com/photo-1549056630-ee2626bb5ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJvYXJkJTIwZ2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      },
      {
        id: 8,
        name: 'Train Station',
        description: 'Train Station',
        price: 35,
        imageUrl:
          'https://images.unsplash.com/photo-1549056630-ee2626bb5ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJvYXJkJTIwZ2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      },
      {
        id: 9,
        name: 'Mini Town',
        description: 'Mini Town',
        price: 25,
        imageUrl:
          'https://images.unsplash.com/photo-1549056630-ee2626bb5ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJvYXJkJTIwZ2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      },
      {
        id: 10,
        name: 'Battle Minis',
        description: 'Battle Minis',
        price: 25,
        imageUrl:
          'https://images.unsplash.com/photo-1549056630-ee2626bb5ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJvYXJkJTIwZ2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      },
    ],
  },
  {
    title: 'Dolls & Action Figures',
    imageUrl:
      'ttps://images.unsplash.com/photo-1619768470847-f7db55f5d72e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
    toys: [
      {
        id: 11,
        name: 'Doll',
        description: 'Knit Doll',
        price: 10,
        imageUrl:
          'https://images.unsplash.com/photo-1569839365736-a80d9fb5d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      },
      {
        id: 12,
        name: 'Action Figure',
        description: "Super Watchu Sayin'?",
        price: 12,
        imageUrl:
          'https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      },
      {
        id: 13,
        name: 'Hero Figure',
        description: 'Super Hero Figure',
        price: 15,
        imageUrl:
          'https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      },
      {
        id: 14,
        name: 'Teddy Bear',
        description: 'Teddy Bear',
        price: 10,
        imageUrl:
          'https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      },
      {
        id: 15,
        name: 'Dinosaur',
        description: 'Dinosaur',
        price: 10,
        imageUrl:
          'https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      },
    ],
  },
  {
    title: 'Building Sets & Blocks',
    imageUrl:
      'ttps://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    toys: [
      {
        id: 16,
        name: 'Building Set',
        description: 'Build a house',
        price: 20,
        imageUrl:
          'https://images.unsplash.com/photo-1577113398331-d843d3341a63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
      },
      {
        id: 17,
        name: 'Blocks',
        description: 'Build something',
        price: 12,
        imageUrl:
          'https://images.unsplash.com/photo-1541692641319-981cc79ee10a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvY2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        id: 18,
        name: 'Castle',
        description: 'Build a castle',
        price: 20,
        imageUrl:
          'https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvY2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
      },
      {
        id: 19,
        name: 'Model Car',
        description: 'Build a model car',
        price: 20,
        imageUrl:
          'https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvY2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
      },
      {
        id: 20,
        name: 'Block Building',
        description: 'Build a block',
        price: 20,
        imageUrl:
          'https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvY2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
      },
    ],
  },
  {
    title: 'RC Toys',
    imageUrl:
      'ttps://images.unsplash.com/photo-1627822607472-5bb8cd7812dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    toys: [
      {
        id: 21,
        name: 'RC Boat',
        description: 'Cruise',
        price: 10,
        imageUrl:
          'https://images.unsplash.com/photo-1624902106166-5e8170eeaa2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      },
      {
        id: 22,
        name: 'RC Car',
        description: 'Drive',
        price: 40,
        imageUrl:
          'https://images.unsplash.com/photo-1579271723124-a758848c2753?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80',
      },
      {
        id: 23,
        name: 'RC Plane',
        description: 'Fly',
        price: 50,
        imageUrl:
          'https://images.unsplash.com/photo-1579271723124-a758848c2753?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80',
      },
      {
        id: 24,
        name: 'RC Helicopter',
        description: 'Fly',
        price: 50,
        imageUrl:
          'https://images.unsplash.com/photo-1579271723124-a758848c2753?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80',
      },
      {
        id: 25,
        name: 'RC Train',
        description: 'Drive',
        price: 40,
        imageUrl:
          'https://images.unsplash.com/photo-1579271723124-a758848c2753?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80',
      },
    ],
  },
];

export default SHOP_DATA;
