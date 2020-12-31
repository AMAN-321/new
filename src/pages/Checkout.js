import React from 'react';
import {Link} from 'react-router-dom';

const Checkout = ()=>{
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


<section class="checkout spad">
<div class="container">
<div class="row">
<div class="col-lg-12">
<h6 class="coupon__link"><span class="icon_tag_alt"></span> <a href="#">Have a coupon?</a> Click
here to enter your code.</h6>
</div>
</div>
<form action="#" class="checkout__form">
<div class="row">
<div class="col-lg-8">
<h5>Billing detail</h5>
<div class="row">
<div class="col-lg-6 col-md-6 col-sm-6">
<div class="checkout__form__input">
<p>First Name <span>*</span></p>
<input type="text"/>
</div>
</div>
<div class="col-lg-6 col-md-6 col-sm-6">
<div class="checkout__form__input">
<p>Last Name <span>*</span></p>
<input type="text"/>
</div>
</div>
<div class="col-lg-12">
<div class="checkout__form__input">
<p>Country <span>*</span></p>
<input type="text"/>
</div>
<div class="checkout__form__input">
<p>Address <span>*</span></p>
<input type="text" placeholder="Street Address"/>
<input type="text" placeholder="Apartment. suite, unite ect ( optinal )"/>
</div>
<div class="checkout__form__input">
<p>Town/City <span>*</span></p>
<input type="text"/>
</div>
<div class="checkout__form__input">
<p>Country/State <span>*</span></p>
<input type="text"/>
</div>
<div class="checkout__form__input">
<p>Postcode/Zip <span>*</span></p>
<input type="text"/>
</div>
</div>
<div class="col-lg-6 col-md-6 col-sm-6">
<div class="checkout__form__input">
<p>Phone <span>*</span></p>
<input type="text"/>
</div>
</div>
<div class="col-lg-6 col-md-6 col-sm-6">
<div class="checkout__form__input">
<p>Email <span>*</span></p>
<input type="text"/>
</div>
</div>
<div class="col-lg-12">
<div class="checkout__form__checkbox">
<label for="acc">
Create an acount?
<input type="checkbox" id="acc"/>
<span class="checkmark"></span>
</label>
<p>Create am acount by entering the information below. If you are a returing
customer login at the <br />top of the page</p>
</div>
<div class="checkout__form__input">
<p>Account Password <span>*</span></p>
<input type="text"/>
</div>
<div class="checkout__form__checkbox">
<label for="note">
Note about your order, e.g, special noe for delivery
<input type="checkbox" id="note"/>
<span class="checkmark"></span>
</label>
</div>
<div class="checkout__form__input">
<p>Oder notes <span>*</span></p>
<input type="text" placeholder="Note about your order, e.g, special noe for delivery"/>
</div>
</div>
</div>
</div>
<div class="col-lg-4">
<div class="checkout__order">
<h5>Your order</h5>
<div class="checkout__order__product">
<ul>
<li>
<span class="top__text">Product</span>
<span class="top__text__right">Total</span>
</li>
<li>01. Chain buck bag <span>$ 300.0</span></li>
<li>02. Zip-pockets pebbled<br /> tote briefcase <span>$ 170.0</span></li>
<li>03. Black jean <span>$ 170.0</span></li>
<li>04. Cotton shirt <span>$ 110.0</span></li>
</ul>
</div>
<div class="checkout__order__total">
<ul>
<li>Subtotal <span>$ 750.0</span></li>
<li>Total <span>$ 750.0</span></li>
</ul>
</div>
<div class="checkout__order__widget">
<label for="o-acc">
Create an acount?
<input type="checkbox" id="o-acc"/>
<span class="checkmark"></span>
</label>
<p>Create am acount by entering the information below. If you are a returing customer
login at the top of the page.</p>
<label for="check-payment">
Cheque payment
<input type="checkbox" id="check-payment"/>
<span class="checkmark"></span>
</label>
<label for="paypal">
PayPal
<input type="checkbox" id="paypal"/>
<span class="checkmark"></span>
</label>
</div>
<button type="submit" class="site-btn">Place oder</button>
</div>
</div>
</div>
</form>
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

export default Checkout;