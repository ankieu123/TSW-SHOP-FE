import Homepage from "../pages/Homepage/Homepage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import Productpage from "../pages/Productpage/Productpage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";

export const routes =[
    {
        path:'/',
        page: Homepage,
        isShowHeader: true,
    },
    {
        path:'/order',
        page: OrderPage,
        isShowHeader: true,
    },
    {
        path:'/product',
        page:Productpage,
        isShowHeader: true,
    },
    {
        path:'/:type',
        page:TypeProductPage,
        isShowHeader: true,
    },
    {
        path:'/sign-in',
        page:SignInPage,
        isShowHeader: false,
    },
    {
        path:'/sign-up',
        page:SignUpPage,
        isShowHeader: false,
    },
    {
        path:'/product-details',
        page:ProductDetailsPage,
        isShowHeader: true,
    },
    {
        path:'*',
        page:NotFoundPage
    }
]