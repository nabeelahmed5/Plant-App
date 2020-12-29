const categories = [
    {
        id: 'Plant',
        name: 'Plant',
        tags: [ 'Products', 'inspiration' ],
        count: 147,
        image: requir('../assets/images/plant.png')
    },
    {
        id: 'seeds',
        name: 'Seeds',
        tags: ['Products', 'shop'],
        count: 16,
        image: requir('../assets/images/seed.png'),
    },
    {
        id: 'Flowers',
        name: 'Flowers',
        tags: ['Products', 'inspiration'],
        count: 68,
        image: requir('../assets/images/flowers.png'),
    },
    {
        id: 'Sprayyers',
        name: 'Sprayyers',
        tags: ['Products', 'shop'],
        count: 12,
        image: requir('../assets/images/sprayyers.png'),
    },
    {
        id: 'Poats',
        name: 'Poats',
        tags: ['Products', 'inspiration'],
        count: 147,
        image: requir('../assets/images/poat.png'),
    },
    {
        id: 'Fertilizers',
        name: 'Fertilizers',
        tags: ['Products', 'shop'],
        count: 147,
        image: requir('../assets/images/fertilizer.png'),
    },
];

const  products = [
    {
        id: 1,
        name: 'Name',
        description: 'Lorium prism',
        tags: ['Interior', '27m', 'Ideas'],
        gallery: [
            requir('../assets/images/plant_1.png'),
            requir('../assets/images/plant_2.png'),
            requir('../assets/images/plant_3.png'),
            // showing only 3 img, show +3 fro the rest
            requir('../assets/images/plant_4.png'),
            requir('../assets/images/plant_5.png'),
            requir('../assets/images/plant_6.png'),
        ]

    }
];

const  explore = [
    //images
    requir('../assets/images/explore_1.png'),
    requir('../assets/images/explore_2.png'),
    requir('../assets/images/explore_3.png'),
    requir('../assets/images/explore_4.png'),
    requir('../assets/images/explore_5.png'),
    requir('../assets/images/explore_6.png'),
];

const profile = {

};

export {
    categories,
    explore,
    products,
    explore,
    profile,
}