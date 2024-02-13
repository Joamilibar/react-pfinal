import { Index } from '../pages';
import { ItemDetailContainer } from "../pages/ItemDetailContainer";
import { Category } from '../pages/Category';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from '../components/NavBarComponent/NavBarComponent';
import CreateProduct from '../pages/CreateProduct';
import { Cart } from '../pages/Cart';
import { UpdateProduct } from '../pages/UpdateProduct';



export const MainRouter = () => {
    return (
        <BrowserRouter>
            <NavbarComponent />
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path='/category/:category' element={<Category />} />
                <Route path='/create-product' element={<CreateProduct />} />
                <Route path='/update-product/:id' element={<UpdateProduct />} />
                <Route path='/cart/' element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}

