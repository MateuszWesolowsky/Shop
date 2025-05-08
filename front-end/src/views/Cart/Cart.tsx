import { useSelector } from "react-redux";
import { CartProductsList } from "../../components/CartProductsList/CartProductsList";
import { CartSummary } from "../../components/CartSummary/CartSummary";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { RootState } from "../../store/store";

export const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  return (
    <FlexContainer>
      <CartProductsList products={cartItems} />
      <CartSummary products={cartItems} />
    </FlexContainer>
  );
};
