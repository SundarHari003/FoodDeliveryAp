import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import AppLoayout from './Components/Layout/AppLoayout';
import AdminDashboard from './Components/Home/admin/AdminDashboard';
import CustomerDashBoard from './Components/Home/customer/CustomerDashBoard';
import SellerDashBoard from './Components/Home/seller/SellerDashBoard';
import OrderHistory from './Components/Order/OrderHistory';
import ViewOrder from './Components/Order/ViewOrder';
import FoodAdd from './Components/Add Food/AddFood';
import FoodListTable from './Components/Add Food/ListFood';
import UpdateFood from './Components/Add Food/EditFood';
import FoodCart from './Components/Cart/FoodCart';
import CustomerProfile from './Components/Home/customer/CustomerProfile';
import RestaurantProfile from './Components/Home/seller/RestaurantProfile ';
import CreateUser from './Components/Home/admin/CreateUser';
import CreateSeller from './Components/Home/admin/CreateSeller';
import FoodMenu from './Components/Home/customer/FoodMenu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<AppLoayout/>}>
              <Route index path='' element={<Navigate replace to='/AdminDashboard'/>}/>
              <Route  path='/AdminDashboard' element={<AdminDashboard/>}/>
              <Route  path='/CustomerDashBoard' element={<CustomerDashBoard/>}/>
              <Route  path='/SellerDashboard' element={<SellerDashBoard/>}/>
              <Route path='/OrderHistory' element={<OrderHistory/>}/>
              <Route path='/ViewOrder' element={<ViewOrder/>}/>
              <Route path='/FoodList' element={<FoodListTable/>}/>
              <Route path='/AddFood' element={<FoodAdd/>}/>
              <Route path="/UpdateFood" element={<UpdateFood/>}/>
              <Route path ="/FoodCart" element={<FoodCart/>}/>
              <Route path='/CustomerProfile' element={<CustomerProfile/>}/>
              <Route path='/RestaurantProfile' element={<RestaurantProfile/>}/>
              <Route path='/CreateUser' element={<CreateUser/>}/>
              <Route path='/CreateSeller' element={<CreateSeller/>}/>
              <Route path='/FoodMenu' element={<FoodMenu/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
