import { createContext, useState } from "react";
import shrimpImage from '../assets/fried-shrimp_1f364.png';
import meatImage from '../assets/cut-of-meat_1f969.png';
import chickenImage from '../assets/poultry-leg_1f357.png';
import porkImage from '../assets/bacon_1f953.png';
import vegImage from '../assets/leafy-green_1f96c.png';

export const PizzaContext = createContext();

function PizzaProvider({ children }) {
    const [isPizza, setIsPizzas] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [select, setSelect] = useState({});
    const [userCart, setUserCart] = useState([]);

    const filters = [
        {
            name: 'Tất cả',
        },
        {
            name: 'Hải sản',
            icon: shrimpImage
        },
        {
            name: 'Bò',
            icon: meatImage
        },
        {
            name: 'Gà',
            icon: chickenImage
        },
        {
            name: 'Heo',
            icon: porkImage
        },
        {
            name: 'Chay',
            icon: vegImage
        }
    ]

    const handleOpenModal = () => {
        setOpenModal(true);
    }
    
    const handleCloseModal = () => {
        setOpenModal(false);
    }

    return (
        <PizzaContext.Provider 
            value={{ 
                isPizza, 
                setIsPizzas, 
                filters,
                openModal, 
                setOpenModal,
                handleOpenModal,
                handleCloseModal,
                select,
                setSelect,
                userCart,
                setUserCart,
            }}
        >
            {children}
        </PizzaContext.Provider>
    )
}

export default PizzaProvider
