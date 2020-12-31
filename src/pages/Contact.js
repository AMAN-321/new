import React from 'react';
import {Link} from 'react-router-dom';

const Contact = ()=>{
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
<span>Contact</span>
</div>
</div>
</div>
</div>
</div>


<section class="contact spad">
<div class="container">
<div class="row">
<div class="col-lg-6 col-md-6">
<div class="contact__content">
<div class="contact__address">
<h5>Contact info</h5>
<ul>
<li>
<h6><i class="fa fa-map-marker"></i> Address</h6>
<p>160 Pennsylvania Ave NW, Washington, Castle, PA 16101-5161</p>
</li>
<li>
<h6><i class="fa fa-phone"></i> Phone</h6>
<p><span>125-711-811</span><span>125-668-886</span></p>
</li>
<li>
<h6><i class="fa fa-headphones"></i> Support</h6>
<p><a href="https://preview.colorlib.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="eebd9b9e9e819c9ac09e86819a81899c8f9e8697ae89838f8782c08d8183">[email&#160;protected]</a></p>
</li>
</ul>
</div>
<div class="contact__form">
<h5>SEND MESSAGE</h5>
<form action="#">
<input type="text" placeholder="Name"/>
<input type="text" placeholder="Email"/>
<input type="text" placeholder="Website"/>
<textarea placeholder="Message"></textarea>
<button type="submit" class="site-btn">Send Message</button>
</form>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6">
<div class="contact__map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48158.305462977965!2d-74.13283844036356!3d41.02757295168286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e440473470d7%3A0xcaf503ca2ee57958!2sSaddle%20River%2C%20NJ%2007458%2C%20USA!5e0!3m2!1sen!2sbd!4v1575917275626!5m2!1sen!2sbd" height="780" style={{border:0}} allowfullscreen="">
                    </iframe>
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

export default Contact;