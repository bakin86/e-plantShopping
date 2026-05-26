import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

function ProductList({ onCartClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        { name: 'Snake Plant', image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg', description: 'Produces oxygen at night, improving indoor air quality.', cost: '$15' },
        { name: 'Spider Plant', image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg', description: 'Filters formaldehyde and xylene from the air.', cost: '$12' },
        { name: 'Peace Lily', image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg', description: 'Removes mold spores and purifies the air.', cost: '$18' },
        { name: 'Boston Fern', image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg', description: 'Adds humidity and removes toxins from the air.', cost: '$20' },
        { name: 'Rubber Plant', image: 'https://cdn.pixabay.com/photo/2020/02/01/05/03/rubber-702165_1280.jpg', description: 'Easy to care for and effective at removing toxins.', cost: '$17' },
        { name: 'Aloe Vera', image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283174_1280.jpg', description: 'Purifies air and has healing properties for skin.', cost: '$14' },
      ],
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        { name: 'Lavender', image: 'https://cdn.pixabay.com/photo/2019/10/03/12/12/lavender-4523681_1280.jpg', description: 'Calming scent, great for relaxation and sleep.', cost: '$20' },
        { name: 'Jasmine', image: 'https://cdn.pixabay.com/photo/2019/07/22/09/26/jasmine-4354285_1280.jpg', description: 'Sweet fragrance, promotes relaxation and reduces stress.', cost: '$18' },
        { name: 'Rosemary', image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg', description: 'Aromatic herb, great for cooking and aromatherapy.', cost: '$15' },
        { name: 'Mint', image: 'https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg', description: 'Refreshing scent, used in teas and cooking.', cost: '$12' },
        { name: 'Lemon Balm', image: 'https://cdn.pixabay.com/photo/2019/09/16/07/41/lemon-balm-4480134_1280.jpg', description: 'Citrusy scent, calming and mood-enhancing.', cost: '$14' },
        { name: 'Hyacinth', image: 'https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg', description: 'Intense fragrance, perfect for spring gardens.', cost: '$22' },
      ],
    },
    {
      category: 'Insect Repellent Plants',
      plants: [
        { name: 'Oregano', image: 'https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg', description: 'Contains compounds that repel insects naturally.', cost: '$10' },
        { name: 'Marigold', image: 'https://cdn.pixabay.com/photo/2022/02/01/06/23/flower-6985216_1280.jpg', description: 'Natural insect repellent, also adds color to the garden.', cost: '$8' },
        { name: 'Geraniums', image: 'https://cdn.pixabay.com/photo/2012/04/26/21/51/flower-43340_1280.jpg', description: 'Known for their mosquito-repelling properties.', cost: '$14' },
        { name: 'Basil', image: 'https://cdn.pixabay.com/photo/2016/01/13/08/48/basil-1137236_1280.jpg', description: 'Repels flies and mosquitoes, great for kitchens.', cost: '$9' },
        { name: 'Catnip', image: 'https://cdn.pixabay.com/photo/2015/07/02/21/16/cat-829681_1280.jpg', description: 'Repels mosquitoes and attracts cats.', cost: '$13' },
        { name: 'Citronella', image: 'https://cdn.pixabay.com/photo/2019/02/28/06/55/citronella-4025814_1280.jpg', description: 'Well-known for its mosquito-repelling properties.', cost: '$11' },
      ],
    },
  ];

  const isItemInCart = (name) => {
    return cartItems.some(item => item.name === name);
  };

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h1 className="product-list-title">Paradise Nursery</h1>
        <p className="product-list-subtitle">Where Green Meets Serenity</p>
        <div className="cart-icon" onClick={onCartClick}>
          <span className="cart-icon-text">🛒</span>
          <span className="cart-badge">{totalCartItems}</span>
        </div>
      </div>

      <div className="product-categories">
        {plantsArray.map((category, index) => (
          <div key={index} className="category-section">
            <h2 className="category-title">{category.category}</h2>
            <div className="plants-grid">
              {category.plants.map((plant, plantIndex) => (
                <div key={plantIndex} className="plant-card">
                  <img src={plant.image} alt={plant.name} className="plant-image" />
                  <div className="plant-info">
                    <h3 className="plant-name">{plant.name}</h3>
                    <p className="plant-cost">{plant.cost}</p>
                    <p className="plant-description">{plant.description}</p>
                    <button
                      className={`add-to-cart-btn ${isItemInCart(plant.name) ? 'added' : ''}`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={isItemInCart(plant.name)}
                    >
                      {isItemInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
