import React from 'react';
import {Link} from 'react-router-dom';

const Blog = ()=>{
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
<span>Blog</span>
</div>
</div>
</div>
</div>
</div>


<section class="blog spad">
<div class="container">
<div class="row">
<div class="col-lg-4 col-md-4 col-sm-6">
<div class="blog__item">
<div class="blog__item__pic large__item set-bg" style={{backgroundImage:'url(img/blog/blog-1.jpg)'}}></div>
<div class="blog__item__text">
<h6><a href="#">No Bad Blood! The Reason Why Tamr Judge Finally Made Up With...</a></h6>
<ul>
<li>by <span>Ema Timahe</span></li>
<li>Seb 17, 2019</li>
</ul>
</div>
</div>
<div class="blog__item">
<div class="blog__item__pic set-bg" style={{backgroundImage:'url(img/blog/blog-7.jpg)'}}></div>
<div class="blog__item__text">
<h6><a href="#">Pot Party! See Farrah Abraham Flaunt Smoking Body At...</a></h6>
<ul>
<li>by <span>Ema Timahe</span></li>
<li>Seb 17, 2019</li>
</ul>
</div>
</div>
<div class="blog__item">
<div class="blog__item__pic set-bg"style={{backgroundImage:'url(img/blog/blog-9.jpg)'}}></div>
<div class="blog__item__text">
<h6><a href="#">CMT Awards 2019 Red Carpet Arrivals Carrie Underwood, Sheryl...</a></h6>
<ul>
<li>by <span>Ema Timahe</span></li>
<li>Seb 17, 2019</li>
</ul>
</div>
</div>
</div>
<div class="col-lg-4 col-md-4 col-sm-6">
<div class="blog__item">
<div class="blog__item__pic set-bg" style={{backgroundImage:'url(img/blog/blog-2.jpg)'}}></div>
<div class="blog__item__text">
<h6><a href="#">Amf Cannes Red Carpet Celebrities Kendall Jenner, Pamela...</a></h6>
<ul>
<li>by <span>Ema Timahe</span></li>
<li>Seb 17, 2019</li>
</ul>
</div>
</div>
<div class="blog__item">
<div class="blog__item__pic set-bg" style={{backgroundImage:'url(img/blog/blog-4.jpg)'}}></div>
<div class="blog__item__text">
<h6><a href="#">Ireland Baldwin Shows Off Trendy Ilse Valfre Tattoo At Stagecoach...</a>
</h6>
<ul>
<li>by <span>Ema Timahe</span></li>
<li>Seb 17, 2019</li>
 </ul>
</div>
</div>
<div class="blog__item">
<div class="blog__item__pic set-bg" style={{backgroundImage:'url(img/blog/blog-8.jpg)'}}></div>
<div class="blog__item__text">
<h6><a href="#">Kim Kardashian Steps Out In Paris Wearing Shocking Sparkly...</a></h6>
<ul>
<li>by <span>Ema Timahe</span></li>
<li>Seb 17, 2019</li>
</ul>
</div>
</div>
<div class="blog__item">
<div class="blog__item__pic set-bg" style={{backgroundImage:'url(img/blog/blog-10.jpg)'}}></div>
<div class="blog__item__text">
<h6><a href="#">A-list Battle! Angelina Jolie & Lady Gaga Fighting Over Who...</a></h6>
<ul>
<li>by <span>Ema Timahe</span></li>
<li>Seb 17, 2019</li>
</ul>
</div>
</div>
</div>
<div class="col-lg-4 col-md-4 col-sm-6">
<div class="blog__item">
<div class="blog__item__pic set-bg" style={{backgroundImage:'url(img/blog/blog-3.jpg)'}}></div>
<div class="blog__item__text">
<h6><a href="#">Gigi Hadid, Rita Ora, Serena & Other Hot Celebs Stun At 2019...</a></h6>
<ul>
<li>by <span>Ema Timahe</span></li>
<li>Seb 17, 2019</li>
</ul>
</div>
</div>
<div class="blog__item">
<div class="blog__item__pic set-bg" style={{backgroundImage:'url(img/blog/blog-5.jpg)'}}></div>
<div class="blog__item__text">
<h6><a href="#">Billboard Music Awards: Best, Worst & Wackiest Dresses On The...</a></h6>
<ul>
<li>by <span>Ema Timahe</span></li>
<li>Seb 17, 2019</li>
</ul>
</div>
</div>
<div class="blog__item">
<div class="blog__item__pic large__item set-bg" style={{backgroundImage:'url(img/blog/blog-6.jpg)'}}></div>
<div class="blog__item__text">
<h6><a href="#">Stephanie Pratt Busts Out Of Teeny Black Bikini During Hawaii...</a></h6>
<ul>
<li>by <span>Ema Timahe</span></li>
<li>Seb 17, 2019</li>
</ul>
</div>
</div>
</div>
<div class="col-lg-12 text-center">
<a href="#" class="primary-btn load-btn">Load more posts</a>
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

export default Blog;