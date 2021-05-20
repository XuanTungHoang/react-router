import React from 'react';
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';

const routes = [
    {
        path: '/',
        exact: true,
        component: () => <Home/>
    },
    {
        path: '/about',
        exact: false,
        component: () => <About/>
    },
    {
        path: '/products',
        exact: true,
        component: ({match})=> <Products match={match} />
    },
    {
        path: '/products/:slug',
        exact: false,
        component: ({match})=> <ProductDetail match={match} />
    },
    {
        path: '',
        exact: false,
        component: () => <NotFound/>
    }
    
]

export default routes;