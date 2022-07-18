import { useDispatch, useSelector } from 'react-redux';

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

// CheckoutItem component
const CheckoutItem = ({ cartItem }) => {
  // Get item name, image, price, quantity from cart item
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  // Get cart items from redux store
  const cartItems = useSelector(selectCartItems);

  /*
  Clear item from cart handler function
  - dispatch clear item from cart action
  */
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  /*
  Add item to cart handler function
  - dispatch add item to cart action
  */
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));

  /*
  Remove item from cart handler function
  - dispatch remove item from cart action
  */
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  // Return checkout item component
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        {/* When back arrow is clicked, remove item from cart */}
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        {/* When forward arrow is clicked, add item to cart */}
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      {/* When remove button is clicked, clear item from cart */}
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
