import { Offcanvas, Stack } from "react-bootstrap";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

type ShoppingCartProps = {
  isOpen: boolean;
};

export const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { cartItems, closeCart } = useContext(ShoppingCartContext);

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            {`Total ${formatCurrency(
              cartItems.reduce((acc, cartItem) => {
                const item = storeItems.find((item) => item.id === cartItem.id);
                return acc + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}`}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
