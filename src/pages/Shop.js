import React from 'react';
import {Link} from 'react-router-dom';

const Shop = ()=>{
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
<span>Shop</span>
</div>
</div>
</div>
</div>
</div>


<section class="shop spad">
<div class="container"> 
<div class="row">
<div class="col-lg-3 col-md-3">
<div class="shop__sidebar">
<div class="sidebar__categories">
<div class="section-title">
<h4>Categories</h4>
</div>
<div class="categories__accordion">
<div class="accordion" id="accordionExample">
<div class="card">
<div class="card-heading active">
<a data-toggle="collapse" data-target="#collapseOne">Women</a>
</div>
<div id="collapseOne" class="collapse show" data-parent="#accordionExample">
<div class="card-body">
<ul>
<li><a href="#">Coats</a></li>
<li><a href="#">Jackets</a></li>
<li><a href="#">Dresses</a></li>
<li><a href="#">Shirts</a></li>
<li><a href="#">T-shirts</a></li>
<li><a href="#">Jeans</a></li>
</ul>
</div>
</div>
</div>
<div class="card">
<div class="card-heading">
<a data-toggle="collapse" data-target="#collapseTwo">Men</a>
</div>
<div id="collapseTwo" class="collapse" data-parent="#accordionExample">
<div class="card-body">
<ul>
<li><a href="#">Coats</a></li>
<li><a href="#">Jackets</a></li>
<li><a href="#">Dresses</a></li>
<li><a href="#">Shirts</a></li>
<li><a href="#">T-shirts</a></li>
<li><a href="#">Jeans</a></li>
 </ul>
</div>
</div>
</div>
<div class="card">
<div class="card-heading">
<a data-toggle="collapse" data-target="#collapseThree">Kids</a>
</div>
<div id="collapseThree" class="collapse" data-parent="#accordionExample">
<div class="card-body">
<ul>
<li><a href="#">Coats</a></li>
<li><a href="#">Jackets</a></li>
<li><a href="#">Dresses</a></li>
<li><a href="#">Shirts</a></li>
<li><a href="#">T-shirts</a></li>
<li><a href="#">Jeans</a></li>
</ul>
</div>
</div>
</div>
<div class="card">
<div class="card-heading">
<a data-toggle="collapse" data-target="#collapseFour">Accessories</a>
</div>
<div id="collapseFour" class="collapse" data-parent="#accordionExample">
<div class="card-body">
<ul>
<li><a href="#">Coats</a></li>
<li><a href="#">Jackets</a></li>
<li><a href="#">Dresses</a></li>
<li><a href="#">Shirts</a></li>
<li><a href="#">T-shirts</a></li>
<li><a href="#">Jeans</a></li>
</ul>
</div>
</div>
</div>
<div class="card">
 <div class="card-heading">
<a data-toggle="collapse" data-target="#collapseFive">Cosmetic</a>
</div>
<div id="collapseFive" class="collapse" data-parent="#accordionExample">
<div class="card-body">
<ul>
<li><a href="#">Coats</a></li>
<li><a href="#">Jackets</a></li>
<li><a href="#">Dresses</a></li>
<li><a href="#">Shirts</a></li>
<li><a href="#">T-shirts</a></li>
<li><a href="#">Jeans</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="sidebar__filter">
<div class="section-title">
<h4>Shop by price</h4>
</div>
<div class="filter-range-wrap">
<div class="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-min="33" data-max="99"></div>
<div class="range-slider">
<div class="price-input">
<p>Price:</p>
<input type="text" id="minamount"/>
<input type="text" id="maxamount"/>
</div>
</div>
</div>
<a href="#">Filter</a>
</div>
<div class="sidebar__sizes">
<div class="section-title">
<h4>Shop by size</h4>
</div>
<div class="size__list">
<label for="xxs">
xxs
<input type="checkbox" id="xxs"/>
<span class="checkmark"></span>
</label>
<label for="xs">
xs
<input type="checkbox" id="xs"/>
<span class="checkmark"></span>
</label>
<label for="xss">
xs-s
<input type="checkbox" id="xss"/>
<span class="checkmark"></span>
</label>
<label for="s">
s
<input type="checkbox" id="s"/>
<span class="checkmark"></span>
</label>
<label for="m">
m
<input type="checkbox" id="m"/>
<span class="checkmark"></span>
</label>
<label for="ml">
m-l
<input type="checkbox" id="ml"/>
<span class="checkmark"></span>
</label>
<label for="l">
l
<input type="checkbox" id="l"/>
<span class="checkmark"></span>
</label>
<label for="xl">
xl
<input type="checkbox" id="xl"/>
<span class="checkmark"></span>
</label>
</div>
</div>
<div class="sidebar__color">
<div class="section-title">
<h4>Shop by size</h4>
</div>
<div class="size__list color__list">
<label for="black">
Blacks
<input type="checkbox" id="black"/>
<span class="checkmark"></span>
</label>
<label for="whites">
Whites
<input type="checkbox" id="whites"/>
 <span class="checkmark"></span>
</label>
<label for="reds">
Reds
<input type="checkbox" id="reds"/>
<span class="checkmark"></span>
</label>
<label for="greys">
Greys
<input type="checkbox" id="greys"/>
<span class="checkmark"></span>
</label>
<label for="blues">
Blues
<input type="checkbox" id="blues"/>
<span class="checkmark"></span>
</label>
<label for="beige">
Beige Tones
<input type="checkbox" id="beige"/>
<span class="checkmark"></span>
</label>
<label for="greens">
Greens
<input type="checkbox" id="greens"/>
<span class="checkmark"></span>
</label>
<label for="yellows">
Yellows
<input type="checkbox" id="yellows"/>
<span class="checkmark"></span>
</label>
</div>
</div>
</div>
</div>
<div class="col-lg-9 col-md-9">
<div class="row">
<div class="col-lg-4 col-md-6">
<div class="product__item">
<div class="product__item__pic set-bg" style={{backgroundImage:'url(img/shop/shop-1.jpg)'}}>
<div class="label new">New</div>
<ul class="product__hover">
<li><a href="img/shop/shop-1.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
<li><a href="#"><span class="icon_heart_alt"></span></a></li>
<li><a href="#"><span class="icon_bag_alt"></span></a></li>
</ul>
</div>
<div class="product__item__text">
<h6><a href="#">Furry hooded parka</a></h6>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
</div>
<div class="product__price">$ 59.0</div>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="product__item">
<div class="product__item__pic set-bg" style={{backgroundImage:'url(img/shop/shop-2.jpg)'}}>
<ul class="product__hover">
<li><a href="img/shop/shop-2.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
<li><a href="#"><span class="icon_heart_alt"></span></a></li>
<li><a href="#"><span class="icon_bag_alt"></span></a></li>
</ul>
</div>
<div class="product__item__text">
<h6><a href="#">Flowy striped skirt</a></h6>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
</div>
<div class="product__price">$ 49.0</div>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="product__item">
<div class="product__item__pic set-bg" style={{backgroundImage:'url(img/shop/shop-3.jpg)'}}>
<ul class="product__hover">
<li><a href="img/shop/shop-3.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
 <li><a href="#"><span class="icon_heart_alt"></span></a></li>
<li><a href="#"><span class="icon_bag_alt"></span></a></li>
</ul>
</div>
<div class="product__item__text">
<h6><a href="#">Croc-effect bag</a></h6>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
</div>
<div class="product__price">$ 59.0</div>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="product__item">
<div class="product__item__pic set-bg" style={{backgroundImage:'url(img/shop/shop-4.jpg)'}}>
<ul class="product__hover">
<li><a href="img/shop/shop-4.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
<li><a href="#"><span class="icon_heart_alt"></span></a></li>
<li><a href="#"><span class="icon_bag_alt"></span></a></li>
</ul>
</div>
<div class="product__item__text">
<h6><a href="#">Dark wash Xavi jeans</a></h6>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
</div>
<div class="product__price">$ 59.0</div>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="product__item sale">
<div class="product__item__pic set-bg" style={{backgroundImage:'url(img/shop/shop-5.jpg)'}}>
<div class="label">Sale</div>
<ul class="product__hover">
<li><a href="img/shop/shop-5.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
<li><a href="#"><span class="icon_heart_alt"></span></a></li>
<li><a href="#"><span class="icon_bag_alt"></span></a></li>
</ul>
</div>
<div class="product__item__text">
<h6><a href="#">Ankle-cuff sandals</a></h6>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
</div>
<div class="product__price">$ 49.0 <span>$ 59.0</span></div>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="product__item">
<div class="product__item__pic set-bg" style={{backgroundImage:'url(img/shop/shop-6.jpg)'}}>
<ul class="product__hover">
<li><a href="img/shop/shop-6.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
<li><a href="#"><span class="icon_heart_alt"></span></a></li>
<li><a href="#"><span class="icon_bag_alt"></span></a></li>
</ul>
</div>
<div class="product__item__text">
<h6><a href="#">Contrasting sunglasses</a></h6>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
</div>
<div class="product__price">$ 59.0</div>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="product__item">
<div class="product__item__pic set-bg" style={{backgroundImage:'url(img/shop/shop-7.jpg)'}}>
<ul class="product__hover">
<li><a href="img/shop/shop-7.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
<li><a href="#"><span class="icon_heart_alt"></span></a></li>
<li><a href="#"><span class="icon_bag_alt"></span></a></li>
</ul>
</div>
<div class="product__item__text">
<h6><a href="#">Circular pendant earrings</a></h6>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
</div>
<div class="product__price">$ 59.0</div>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="product__item">
<div class="product__item__pic set-bg" style={{backgroundImage:'url(img/shop/shop-8.jpg)'}}>
<div class="label stockout stockblue">Out Of Stock</div>
<ul class="product__hover">
<li><a href="img/shop/shop-8.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
<li><a href="#"><span class="icon_heart_alt"></span></a></li>
<li><a href="#"><span class="icon_bag_alt"></span></a></li>
</ul>
</div>
<div class="product__item__text">
<h6><a href="#">Cotton T-Shirt</a></h6>
<div class="rating">
<i class="fa fa-star"></i>
 <i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
</div>
<div class="product__price">$ 59.0</div>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="product__item sale">
<div class="product__item__pic set-bg" style={{backgroundImage:'url(img/shop/shop-9.jpg)'}}>
<div class="label">Sale</div>
<ul class="product__hover">
<li><a href="img/shop/shop-9.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
<li><a href="#"><span class="icon_heart_alt"></span></a></li>
<li><a href="#"><span class="icon_bag_alt"></span></a></li>
</ul>
</div>
<div class="product__item__text">
<h6><a href="#">Water resistant zips backpack</a></h6>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
</div>
<div class="product__price">$ 49.0 <span>$ 59.0</span></div>
</div>
</div>
</div>
<div class="col-lg-12 text-center">
<div class="pagination__option">
<a href="#">1</a>
<a href="#">2</a>
<a href="#">3</a>
<a href="#"><i class="fa fa-angle-right"></i></a>
</div>
</div>
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

export default Shop;