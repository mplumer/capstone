import { CartItemContainer, ItemDetails } from './cart-item.styles';

// CartItem component
const CartItem = ({ cartItem }) => {
  // Get item name, image, price, quantity from cart item
  const { name, imageUrl, price, quantity } = cartItem;
  // Return cart item component
  // Insert cart item name, image, price, quantity values into the component
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
