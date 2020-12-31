import React from 'react';
import {Link} from 'react-router-dom';
const ShopCart = ()=>{
    return(
        <>


<div class="offcanvas-menu-overlay"></div>
<div class="offcanvas-menu-wrapper">
<div class="offcanvas__close">+</div>
<ul class="offcanvas__widget">
<li><span class="icon_search search-switch"></span></li>
<li><a href="#"><span class="icon_heart_alt"></span>
<div class="tip">2</div>
</a></li>
<li><a href="#"><span class="icon_bag_alt"></span>
<div class="tip">2</div>
</a></li>
</ul>
<div class="offcanvas__logo">
<a href="index.html"><img src="img/logo.png" alt=""/></a>
</div>
<div id="mobile-menu-wrap"></div>
<div class="offcanvas__auth">
<a href="#">Login</a>
<a href="#">Register</a>
</div>
</div>


<header class="header">
<div class="container-fluid">
<div class="row">
<div class="col-xl-3 col-lg-2">
<div class="header__logo">
<a href="index.html"><img src="img/logo.png" alt=""/></a>
</div>
</div>
<div class="col-xl-6 col-lg-7">
<nav class="header__menu">
<ul>
<li class="active"><Link to='/'>Home</Link></li>
<li><a href="#">Women’s</a></li>
<li><a href="#">Men’s</a></li>
<li><Link to='/shop'>Shop</Link></li>
<li><a href="#">Pages</a>
<ul class="dropdown">
<li><Link to='/product-details' >Product Details</Link></li>
<li><Link to='/shopcart' >Shop Cart</Link></li>
<li><Link to='/checkout'>Checkout</Link></li>
<li><Link to='/blog-details' >Blog Details</Link></li>
</ul>
</li>
<li><Link to='/blog'>Blog</Link></li>
<li><Link to='/contact'>Contact</Link></li>
</ul>
</nav>
</div>
<div class="col-lg-3">
<div class="header__right">
<div class="header__right__auth">
<a href="#">Login</a>
<a href="#">Register</a>
</div>
<ul class="header__right__widget">
<li><span class="icon_search search-switch"></span></li>
<li><a href="#"><span class="icon_heart_alt"></span>
<div class="tip">2</div>
</a></li>
<li><a href="#"><span class="icon_bag_alt"></span>
<div class="tip">2</div>
</a></li>
</ul>
</div>
</div>
</div>
<div class="canvas__open">
<i class="fa fa-bars"></i>
</div>
</div>
</header>


<div class="breadcrumb-option">
<div class="container">
<div class="row">
<div class="col-lg-12">
<div class="breadcrumb__links">
<a href="index.html"><i class="fa fa-home"></i> Home</a>
<span>Shopping cart</span>
</div>
</div>
</div>
</div>
</div>


<section class="shop-cart spad">
<div class="container">
<div class="row">
<div class="col-lg-12">
<div class="shop__cart__table">
<table>
<thead>
<tr>
<th>Product</th>
<th>Price</th>
<th>Quantity</th>
<th>Total</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td class="cart__product__item">
<img src="img/shop-cart/cp-1.jpg" alt=""/>
<div class="cart__product__item__title">
<h6>Chain bucket bag</h6>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
</div>
</div>
</td>
<td class="cart__price">$ 150.0</td>
<td class="cart__quantity">
<div class="pro-qty">
<input type="text" value="1"/>
</div>
</td>
<td class="cart__total">$ 300.0</td>
<td class="cart__close"><span class="icon_close"></span></td>
</tr>
<tr>
<td class="cart__product__item">
<img src="img/shop-cart/cp-2.jpg" alt=""/>
<div class="cart__product__item__title">
<h6>Zip-pockets pebbled tote briefcase</h6>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
</div>
</div>
</td>
<td class="cart__price">$ 170.0</td>
<td class="cart__quantity">
<div class="pro-qty">
<input type="text" value="1"/>
</div>
</td>
<td class="cart__total">$ 170.0</td>
<td class="cart__close"><span class="icon_close"></span></td>
</tr>
<tr>
<td class="cart__product__item">
<img src="img/shop-cart/cp-3.jpg" alt=""/>
<div class="cart__product__item__title">
<h6>Black jean</h6>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
</div>
</div>
</td>
<td class="cart__price">$ 85.0</td>
<td class="cart__quantity">
<div class="pro-qty">
<input type="text" value="1"/>
</div>
</td>
<td class="cart__total">$ 170.0</td>
<td class="cart__close"><span class="icon_close"></span></td>
</tr>
<tr>
<td class="cart__product__item">
<img src="img/shop-cart/cp-4.jpg" alt=""/>
<div class="cart__product__item__title">
<h6>Cotton Shirt</h6>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
</div>
</div>
</td>
<td class="cart__price">$ 55.0</td>
<td class="cart__quantity">
<div class="pro-qty">
<input type="text" value="1"/>
</div>
</td>
<td class="cart__total">$ 110.0</td>
<td class="cart__close"><span class="icon_close"></span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div class="row">
<div class="col-lg-6 col-md-6 col-sm-6">
<div class="cart__btn">
<a href="#">Continue Shopping</a>
</div>
</div>
<div class="col-lg-6 col-md-6 col-sm-6">
<div class="cart__btn update__btn">
<a href="#"><span class="icon_loading"></span> Update cart</a>
</div>
</div>
</div>
<div class="row">
<div class="col-lg-6">
<div class="discount__content">
<h6>Discount codes</h6>
<form action="#">
<input type="text" placeholder="Enter your coupon code"/>
<button type="submit" class="site-btn">Apply</button>
</form>
</div>
</div>
<div class="col-lg-4 offset-lg-2">
<div class="cart__total__procced">
<h6>Cart total</h6>
<ul>
<li>Subtotal <span>$ 750.0</span></li>
<li>Total <span>$ 750.0</span></li>
</ul>
<a href="#" class="primary-btn">Proceed to checkout</a>
</div>
</div>
</div>
</div>
</section>


<div class="instagram">
<div class="container-fluid">
<div class="row">
<div class="col-lg-2 col-md-4 col-sm-4 p-0">
<div class="instagram__item set-bg" style={{backgroundImage:'url(img/instagram/insta-1.jpg)'}}>
<div class="instagram__text">
<i class="fa fa-instagram"></i>
<a href="#">@ ashion_shop</a>
</div>
</div>
</div>
<div class="col-lg-2 col-md-4 col-sm-4 p-0">
<div class="instagram__item set-bg" style={{backgroundImage:'url(img/instagram/insta-2.jpg)'}}>
<div class="instagram__text">
<i class="fa fa-instagram"></i>
<a href="#">@ ashion_shop</a>
</div>
</div>
</div>
<div class="col-lg-2 col-md-4 col-sm-4 p-0">
<div class="instagram__item set-bg" style={{backgroundImage:'url(img/instagram/insta-3.jpg)'}}>
<div class="instagram__text">
<i class="fa fa-instagram"></i>
<a href="#">@ ashion_shop</a>
</div>
</div>
</div>
<div class="col-lg-2 col-md-4 col-sm-4 p-0">
<div class="instagram__item set-bg" style={{backgroundImage:'url(img/instagram/insta-4.jpg)'}}>
<div class="instagram__text">
<i class="fa fa-instagram"></i>
<a href="#">@ ashion_shop</a>
</div>
</div>
</div>
<div class="col-lg-2 col-md-4 col-sm-4 p-0">
<div class="instagram__item set-bg" style={{backgroundImage:'url(img/instagram/insta-5.jpg)'}}>
<div class="instagram__text">
<i class="fa fa-instagram"></i>
<a href="#">@ ashion_shop</a>
</div>
</div>
</div>
<div class="col-lg-2 col-md-4 col-sm-4 p-0">
<div class="instagram__item set-bg" style={{backgroundImage:'url(img/instagram/insta-6.jpg)'}}>
<div class="instagram__text">
<i class="fa fa-instagram"></i>
<a href="#">@ ashion_shop</a>
</div>
</div>
</div>
</div>
</div>
</div>





        </>
    );
}

export default ShopCart;