import { useState, useContext, createContext } from "react"; //instead of just using useState use context to update dynamically
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(1);
  const [qty, setQty] = useState(1);

  const onAdd = (product, quantity) => {
    console.log("Adding product:", product); // Log the product object

    console.log("Adding quantity:", quantity); // Log the added quantity

    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );
    console.log("Existing product in cart:", checkProductInCart); // Log existing product details (if any)

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    ); //error begins
    console.log("Updated total price:", totalPrice); // Log the updated total price

    setTotalQty((prevTotalQty) => prevTotalQty + quantity);
    console.log("Updated total quantity:", totalQty); // Log the updated total quantity

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        return cartProduct;
      });
      setCartItems(updatedCartItems);
      console.log("Updated cart items:", updatedCartItems); // Log the updated cart items
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
      console.log("Updated cart items:", cartItems); // Log the updated cart items
    }

    toast.success(`${qty} ${product.name} added to the cart`);
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 > 1) return 1;
      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQty,
        incQty,
        decQty,
        qty,
        onAdd,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
