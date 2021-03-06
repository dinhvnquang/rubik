var React = require('react');
var ReactDOM = require('react-dom');
import {Router, Route, IndexRoute} from 'react-router'
import store,{history} from './store'

import App from './components/app'
import {client} from './reducers/index'
import { Provider } from 'react-redux'
import Home from './components/home/Home.jsx';
import DetailProduct from './components/product/detailProduct.jsx';
import Cart from './components/product/cart.jsx';
import Checkout from './components/product/checkout.jsx';
import News from './components/news/News.jsx';
import './stylesheets/setting.scss'
import './stylesheets/custom.scss'
import './stylesheets/header.scss'
import './stylesheets/home.scss'
import './stylesheets/slider.scss'
import './stylesheets/product.scss'
import './stylesheets/footer.scss'
import './stylesheets/news.scss'
ReactDOM.render(
  <Provider store={store} >
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/chitiet" component={DetailProduct} />
        <Route path="/giohang" component={Cart} />
        <Route path="/thanhtoan" component={Checkout} />
        <Route path="/tintuc" component={News} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('root'));
