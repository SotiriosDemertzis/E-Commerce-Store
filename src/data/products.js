/**
 * @fileoverview Product data for the e-commerce application
 * Contains the complete product catalog with details like pricing, categories, ratings, and stock
 * Data source: DummyJSON API, transformed to match application requirements
 * Total products available: 69
 */

/**
 * Complete product catalog array
 * Each product contains essential e-commerce information
 * @type {Array<Object>}
 * @property {number} id - Unique product identifier
 * @property {string} name - Product name/title
 * @property {number} price - Product price in USD
 * @property {string} category - Product category
 * @property {string} image - Product image URL
 * @property {number} rating - Product rating (0-5)
 * @property {number} stock - Available stock quantity
 */
const PRODUCTS = [
  {
    id: 1,
    name: "Essence Mascara Lash Princess",
    price: 9.99,
    category: "beauty",
    image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    rating: 2.56,
    stock: 99
  },
  {
    id: 2,
    name: "Eyeshadow Palette with Mirror",
    price: 19.99,
    category: "beauty",
    image: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    rating: 2.86,
    stock: 34
  },
  {
    id: 3,
    name: "Powder Canister",
    price: 14.99,
    category: "beauty",
    image: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
    rating: 4.64,
    stock: 89
  },
  {
    id: 4,
    name: "Red Lipstick",
    price: 12.99,
    category: "beauty",
    image: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
    rating: 4.36,
    stock: 91
  },
  {
    id: 5,
    name: "Red Nail Polish",
    price: 8.99,
    category: "beauty",
    image: "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp",
    rating: 4.32,
    stock: 79
  },
  {
    id: 6,
    name: "Calvin Klein CK One",
    price: 49.99,
    category: "fragrances",
    image: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
    rating: 4.37,
    stock: 29
  },
  {
    id: 7,
    name: "Chanel Coco Noir Eau De",
    price: 129.99,
    category: "fragrances",
    image: "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp",
    rating: 4.26,
    stock: 58
  },
  {
    id: 8,
    name: "Dior J'adore",
    price: 89.99,
    category: "fragrances",
    image: "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp",
    rating: 3.8,
    stock: 98
  },
  {
    id: 9,
    name: "Dolce Shine Eau de",
    price: 69.99,
    category: "fragrances",
    image: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp",
    rating: 3.96,
    stock: 4
  },
  {
    id: 10,
    name: "Gucci Bloom Eau de",
    price: 79.99,
    category: "fragrances",
    image: "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp",
    rating: 2.74,
    stock: 91
  },
  {
    id: 11,
    name: "Annibale Colombo Bed",
    price: 1899.99,
    category: "furniture",
    image: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp",
    rating: 4.77,
    stock: 88
  },
  {
    id: 12,
    name: "Annibale Colombo Sofa",
    price: 2499.99,
    category: "furniture",
    image: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp",
    rating: 3.92,
    stock: 60
  },
  {
    id: 13,
    name: "Bedside Table African Cherry",
    price: 299.99,
    category: "furniture",
    image: "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp",
    rating: 2.87,
    stock: 64
  },
  {
    id: 14,
    name: "Knoll Saarinen Executive Conference Chair",
    price: 499.99,
    category: "furniture",
    image: "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp",
    rating: 4.88,
    stock: 26
  },
  {
    id: 15,
    name: "Wooden Bathroom Sink With Mirror",
    price: 799.99,
    category: "furniture",
    image: "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp",
    rating: 3.59,
    stock: 7
  },
  {
    id: 16,
    name: "Apple",
    price: 1.99,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp",
    rating: 4.19,
    stock: 8
  },
  {
    id: 17,
    name: "Beef Steak",
    price: 12.99,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp",
    rating: 4.47,
    stock: 86
  },
  {
    id: 18,
    name: "Cat Food",
    price: 8.99,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp",
    rating: 3.13,
    stock: 46
  },
  {
    id: 19,
    name: "Chicken Meat",
    price: 9.99,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/thumbnail.webp",
    rating: 3.19,
    stock: 97
  },
  {
    id: 20,
    name: "Cooking Oil",
    price: 4.99,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp",
    rating: 4.8,
    stock: 10
  },
  {
    id: 21,
    name: "Cucumber",
    price: 1.49,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/cucumber/thumbnail.webp",
    rating: 3.31,
    stock: 29
  },
  {
    id: 22,
    name: "Dog Food",
    price: 10.99,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/dog-food/thumbnail.webp",
    rating: 4.79,
    stock: 40
  },
  {
    id: 23,
    name: "Eggs",
    price: 2.99,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp",
    rating: 4.23,
    stock: 37
  },
  {
    id: 24,
    name: "Fish Steak",
    price: 14.99,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/fish-steak/thumbnail.webp",
    rating: 3.83,
    stock: 99
  },
  {
    id: 25,
    name: "Green Bell Pepper",
    price: 1.29,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/thumbnail.webp",
    rating: 4.28,
    stock: 89
  },
  {
    id: 26,
    name: "Green Chili Pepper",
    price: 0.99,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp",
    rating: 4.43,
    stock: 8
  },
  {
    id: 27,
    name: "Honey Jar",
    price: 6.99,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp",
    rating: 3.5,
    stock: 25
  },
  {
    id: 28,
    name: "Ice Cream",
    price: 5.49,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp",
    rating: 3.77,
    stock: 76
  },
  {
    id: 29,
    name: "Juice",
    price: 3.99,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/juice/thumbnail.webp",
    rating: 3.41,
    stock: 99
  },
  {
    id: 30,
    name: "Kiwi",
    price: 2.49,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp",
    rating: 4.37,
    stock: 1
  },
  {
    id: 31,
    name: "Lemon",
    price: 0.79,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/lemon/thumbnail.webp",
    rating: 4.68,
    stock: 0
  },
  {
    id: 32,
    name: "Milk",
    price: 3.49,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/milk/thumbnail.webp",
    rating: 3.97,
    stock: 57
  },
  {
    id: 33,
    name: "Mulberry",
    price: 4.99,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/mulberry/thumbnail.webp",
    rating: 3.19,
    stock: 79
  },
  {
    id: 34,
    name: "Nescafe Coffee",
    price: 7.99,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/nescafe-coffee/thumbnail.webp",
    rating: 2.54,
    stock: 22
  },
  {
    id: 35,
    name: "Potatoes",
    price: 2.29,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/potatoes/thumbnail.webp",
    rating: 4.22,
    stock: 8
  },
  {
    id: 36,
    name: "Protein Powder",
    price: 19.99,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/protein-powder/thumbnail.webp",
    rating: 3.91,
    stock: 65
  },
  {
    id: 37,
    name: "Red Onions",
    price: 1.99,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/red-onions/thumbnail.webp",
    rating: 4.08,
    stock: 86
  },
  {
    id: 38,
    name: "Rice",
    price: 5.99,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/rice/thumbnail.webp",
    rating: 3.94,
    stock: 49
  },
  {
    id: 39,
    name: "Soft Drinks",
    price: 1.99,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/soft-drinks/thumbnail.webp",
    rating: 4.59,
    stock: 78
  },
  {
    id: 40,
    name: "Strawberry",
    price: 3.99,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/strawberry/thumbnail.webp",
    rating: 4.5,
    stock: 9
  },
  {
    id: 41,
    name: "Tissue Paper Box",
    price: 2.49,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/thumbnail.webp",
    rating: 4.55,
    stock: 97
  },
  {
    id: 42,
    name: "Water",
    price: 0.99,
    category: "groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/water/thumbnail.webp",
    rating: 2.93,
    stock: 95
  },
  {
    id: 43,
    name: "Decoration Swing",
    price: 59.99,
    category: "home-decoration",
    image: "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/thumbnail.webp",
    rating: 4.74,
    stock: 62
  },
  {
    id: 44,
    name: "Family Tree Photo Frame",
    price: 29.99,
    category: "home-decoration",
    image: "https://cdn.dummyjson.com/product-images/home-decoration/family-tree-photo-frame/thumbnail.webp",
    rating: 4.72,
    stock: 54
  },
  {
    id: 45,
    name: "House Showpiece Plant",
    price: 39.99,
    category: "home-decoration",
    image: "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/thumbnail.webp",
    rating: 4.29,
    stock: 89
  },
  {
    id: 46,
    name: "Plant Pot",
    price: 14.99,
    category: "home-decoration",
    image: "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/thumbnail.webp",
    rating: 3.33,
    stock: 47
  },
  {
    id: 47,
    name: "Table Lamp with Wooden Base",
    price: 24.99,
    category: "home-decoration",
    image: "https://cdn.dummyjson.com/product-images/home-decoration/table-lamp-with-wooden-base/thumbnail.webp",
    rating: 4.82,
    stock: 84
  },
  {
    id: 48,
    name: "Bamboo Spatula",
    price: 7.99,
    category: "kitchen-accessories",
    image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/thumbnail.webp",
    rating: 4.4,
    stock: 0
  },
  {
    id: 49,
    name: "Black Aluminium Cup",
    price: 5.99,
    category: "kitchen-accessories",
    image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/thumbnail.webp",
    rating: 3.62,
    stock: 42
  },
  {
    id: 50,
    name: "Black Whisk",
    price: 9.99,
    category: "kitchen-accessories",
    image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-whisk/thumbnail.webp",
    rating: 2.88,
    stock: 17
  },
  {
    id: 51,
    name: "Boxed Blender",
    price: 39.99,
    category: "kitchen-accessories",
    image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/thumbnail.webp",
    rating: 2.73,
    stock: 81
  },
  {
    id: 52,
    name: "Carbon Steel Wok",
    price: 29.99,
    category: "kitchen-accessories",
    image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/carbon-steel-wok/thumbnail.webp",
    rating: 4.32,
    stock: 2
  },
  {
    id: 53,
    name: "Chopping Board",
    price: 12.99,
    category: "kitchen-accessories",
    image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/chopping-board/thumbnail.webp",
    rating: 4.55,
    stock: 83
  },
  {
    id: 54,
    name: "Citrus Squeezer Yellow",
    price: 8.99,
    category: "kitchen-accessories",
    image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/citrus-squeezer-yellow/thumbnail.webp",
    rating: 4.18,
    stock: 26
  },
  {
    id: 55,
    name: "Egg Slicer",
    price: 6.99,
    category: "kitchen-accessories",
    image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/egg-slicer/thumbnail.webp",
    rating: 2.91,
    stock: 50
  },
  {
    id: 56,
    name: "Electric Stove",
    price: 49.99,
    category: "kitchen-accessories",
    image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/thumbnail.webp",
    rating: 4.25,
    stock: 41
  },
  {
    id: 57,
    name: "Fine Mesh Strainer",
    price: 9.99,
    category: "kitchen-accessories",
    image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/fine-mesh-strainer/thumbnail.webp",
    rating: 3.7,
    stock: 13
  },
  {
    id: 58,
    name: "Fork",
    price: 3.99,
    category: "kitchen-accessories",
    image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/fork/thumbnail.webp",
    rating: 4.57,
    stock: 10
  },
  {
    id: 59,
    name: "Glass",
    price: 4.99,
    category: "kitchen-accessories",
    image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/glass/thumbnail.webp",
    rating: 3.06,
    stock: 6
  },
  {
    id: 60,
    name: "Grater Black",
    price: 10.99,
    category: "kitchen-accessories",
    image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/grater-black/thumbnail.webp",
    rating: 2.87,
    stock: 80
  },
  {
    id: 61,
    name: "Hand Blender",
    price: 19.99,
    category: "kitchen-accessories",
    image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/hand-blender/thumbnail.webp",
    rating: 4.71,
    stock: 7
  },
  {
    id: 62,
    name: "Ice Cube Tray",
    price: 5.99,
    category: "kitchen-accessories",
    image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/ice-cube-tray/thumbnail.webp",
    rating: 3.27,
    stock: 81
  },
  {
    id: 63,
    name: "Kitchen Sieve",
    price: 7.99,
    category: "kitchen-accessories",
    image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/kitchen-sieve/thumbnail.webp",
    rating: 3.54,
    stock: 46
  },
  {
    id: 64,
    name: "Knife",
    price: 14.99,
    category: "kitchen-accessories",
    image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/knife/thumbnail.webp",
    rating: 4.31,
    stock: 58
  },
  {
    id: 65,
    name: "Lunch Box",
    price: 12.99,
    category: "kitchen-accessories",
    image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/lunch-box/thumbnail.webp",
    rating: 4.05,
    stock: 26
  },
  {
    id: 66,
    name: "Microwave Oven",
    price: 89.99,
    category: "kitchen-accessories",
    image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/thumbnail.webp",
    rating: 3.71,
    stock: 29
  },
  {
    id: 67,
    name: "Mixing Bowl",
    price: 11.99,
    category: "kitchen-accessories",
    image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/mixing-bowl/thumbnail.webp",
    rating: 4.8,
    stock: 38
  },
  {
    id: 68,
    name: "Mug Tree Stand",
    price: 15.99,
    category: "kitchen-accessories",
    image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/mug-tree-stand/thumbnail.webp",
    rating: 4.34,
    stock: 16
  },
  {
    id: 69,
    name: "Pan",
    price: 24.99,
    category: "kitchen-accessories",
    image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/pan/thumbnail.webp",
    rating: 3.58,
    stock: 22
  }
];

/**
 * Export the complete product catalog for use throughout the application
 */
export { PRODUCTS };