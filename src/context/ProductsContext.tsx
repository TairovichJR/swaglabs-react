import React, { createContext, useState, ReactNode, useContext } from 'react';
import { useMemo } from 'react';
import { IProduct } from '../model';

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsContextProps {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  filtered: IProduct[];
  setSelected: (value:string) => void;
  cartItems: IProduct[];
  addItemToCart: (value: IProduct) => void;
  removeItemFromCart: (id: Number) => void;
  burgerMenu: Boolean;
  openBurgerMenu: ()=> void;
  closeBurgerMenu: ()=> void;
  resetAppState: () => void;
}

const ProductsContext = createContext<ProductsContextProps | undefined>(undefined);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  
  const [products, setProducts] = useState<IProduct[]>([
    {
      id: 1,
      title: "Sauce Labs Backpack",
      description: "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
      price: 29.99,
      image: 'sauce-backpack-1200x1500.0a0b85a3.jpg'
    },
    {
      id: 2,
      title: "Sauce Labs Bike Light",
      description: "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
      price: 9.99,
      image: "bike-light-1200x1500.37c843b0.jpg"
    },
    {
      id: 3,
      title: "Sauce Labs Bolt T-Shirt",
      description: "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.",
      price: 15.99,
      image: "bolt-shirt-1200x1500.c2599ac5.jpg"
    },
    {
      id: 4,
      title: "Sauce Labs Fleece Jacket",
      description: "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.",
      price: 49.99,
      image: "sauce-pullover-1200x1500.51d7ffaf.jpg"
    },
    {
      id: 5,
      title: "Sauce Labs Onesie",
      description: "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.",
      price: 7.99,
      image: "red-onesie-1200x1500.2ec615b2.jpg"
    },
    {
      id: 6,
      title: "Test.allTheThings() T-Shirt (Red)",
      description: "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.",
      price: 15.99,
      image: "red-tatt-1200x1500.30dadef4.jpg"
    },
  ]);
  const [selected, setSelected] = useState("az");
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [burgerMenu, setBurgerMenu] = useState(false);

  const filtered = useMemo(() => {

    switch(selected){
        case "az":
            return products.sort((a,b) => {
                const titleA = a.title.toLowerCase();
                const titleB = b.title.toLowerCase();
                
                if (titleA < titleB) {
                return -1;
                }
                if (titleA > titleB) {
                return 1;
                }
                return 0;
            });
        case "za":
            return products.sort((a,b) => {
                const titleA = a.title.toLowerCase();
                const titleB = b.title.toLowerCase();
                
                if (titleA > titleB) {
                return -1;
                }
                if (titleA < titleB) {
                return 1;
                }
                return 0;
            });
        case "lohi":
            return products.sort((a,b) => {
                const titleA = a.price;
                const titleB = b.price;
                
                if (titleA < titleB) {
                return -1;
                }
                if (titleA > titleB) {
                return 1;
                }
                return 0;
            });
        case "hilo":
            return products.sort((a,b) => {
                const titleA = a.price;
                const titleB = b.price;
                
                if (titleA > titleB) {
                return -1;
                }
                if (titleA < titleB) {
                return 1;
                }
                return 0;
            });
        default:
            return products;
    }
    
}, [selected, products]);

  const addItemToCart = (value: IProduct) => {
      setCartItems((prev) => [...prev, value]);
  }
  const removeItemFromCart = (id: Number) => {
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }
  
  const openBurgerMenu = () => setBurgerMenu(true);
  const closeBurgerMenu = () => setBurgerMenu(false);

  const resetAppState = () => {
      setCartItems([]);
  }

  return (
    <ProductsContext.Provider value={{ products, setProducts, filtered, setSelected, addItemToCart, cartItems, removeItemFromCart, burgerMenu, openBurgerMenu, closeBurgerMenu, resetAppState }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = (): ProductsContextProps => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};
