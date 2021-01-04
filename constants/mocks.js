const categories = [
    {
        id: 'plants',
        name: 'Plant',
        tags: [ 'Products', 'inspiration' ],
        count: 147,
        image: require('../assets/icons/plant.png')
    },
    {
        id: 'seeds',
        name: 'Seeds',
        tags: ['Products', 'shop'],
        count: 16,
        image: require('../assets/icons/seeds.png'),
    },
    {
        id: 'flowers',
        name: 'Flowers',
        tags: ['Products', 'inspiration'],
        count: 68,
        image: require('../assets/icons/flowers.png'),
    },
    {
        id: 'sprayyers',
        name: 'Sprayyers',
        tags: ['Products', 'shop'],
        count: 12,
        image: require('../assets/icons/sprayers.png'),
    },
    {
        id: 'poats',
        name: 'Poats',
        tags: ['Products', 'inspiration'],
        count: 147,
        image: require('../assets/icons/pots.png'),
    },
    {
        id: 'fertilizers',
        name: 'Fertilizers',
        tags: ['Products', 'shop'],
        count: 147,
        image: require('../assets/icons/fertilizers.png'),
    },
];

const  products = [
    {
        id: 1,
        name: 'Name',
        description: 'Lorium prism',
        tags: ['Interior', '27m', 'Ideas'],
        gallery: [
            require('../assets/images/plant_1.jpg'),
            require('../assets/images/plant_2.jpg'),
            require('../assets/images/plant_3.png'),
            // showing only 3 img, show +3 fro the rest
            require('../assets/images/plant_1.jpg'),
            require('../assets/images/plant_2.jpg'),
            require('../assets/images/plant_3.png'),
        ]

    }
];

const  explore = [
    //images
    require('../assets/images/explore_1.jpg'),
    require('../assets/images/explore_2.jpg'),
    require('../assets/images/explore_3.jpg'),
    require('../assets/images/explore_4.jpg'),
    require('../assets/images/explore_5.jpg'),
    require('../assets/images/explore_6.jpg'),
];

const profile = {
    username: 'react-ui--kit',
    location: 'Europe',
    email: 'contact@react-ui-kit.com',
    avater: require('../assets/images/avatar.jpg'),
    budget: 2500,
    monthly_cap: 5000,
    notifications: true,
    newsletter: false,
};

export {
    categories,
    explore,
    products,
    profile,
}