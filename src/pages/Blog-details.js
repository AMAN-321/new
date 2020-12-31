import React from 'react';
import {Link} from 'react-router-dom';


const BlogDetails = ()=>{


    return(<>
    



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
<a href="blog.html">Blog</a>
<span>Being seen: how is age diversity effecting change in fashion and beauty?</span>
</div>
</div>
</div>
</div>
</div>


<section class="blog-details spad">
<div class="container">
<div class="row">
<div class="col-lg-8 col-md-8">
<div class="blog__details__content">
<div class="blog__details__item">
<img src="img/blog/details/blog-details.jpg" alt=""/>
<div class="blog__details__item__title">
<span class="tip">Street style</span>
<h4>Being seen: how is age diversity effecting change in fashion and beauty?</h4>
<ul>
<li>by <span>Ema Timahe</span></li>
<li>Seb 17, 2019</li>
<li>39 Comments</li>
</ul>
</div>
</div>
<div class="blog__details__desc">
<p>Afashion season can be defined as much by the people on the catwalk as it can by the
clothes they are wearing. This time around, a key moment came at the end of Marc Jacobs’
New York show, when an almost makeup-free Christy Turlington made a rare return to the
catwalk, aged 50 (she also stars, with the designer himself, in the label’s AW ad
campaign), where the average catwalk model is around 18.</p>
<p>A few days later, Simone Rocha arguably upped the ante. The 32-year-old’s show – in part
inspired by Louise Bourgeois, who lived until she was 98 – featured models in their 30s
and 40s, including cult favourite Jeny Howorth and actor Chloë Sevigny.</p>
</div>
<div class="blog__details__quote">
<div class="icon"><i class="fa fa-quote-left"></i></div>
<p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna
aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.</p>
</div>
<div class="blog__details__desc">
<p>Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
dolor in reprehenderit in voluptate.</p>
</div>
<div class="blog__details__tags">
<a href="#">Fashion</a>
<a href="#">Street style</a>
<a href="#">Diversity</a>
<a href="#">Beauty</a>
</div>
<div class="blog__details__btns">
<div class="row">
<div class="col-lg-6 col-md-6 col-sm-6">
<div class="blog__details__btn__item">
<h6><a href="#"><i class="fa fa-angle-left"></i> Previous posts</a></h6>
</div>
</div>
<div class="col-lg-6 col-md-6 col-sm-6">
<div class="blog__details__btn__item blog__details__btn__item--next">
<h6><a href="#">Next posts <i class="fa fa-angle-right"></i></a></h6>
</div>
</div>
</div>
</div>
<div class="blog__details__comment">
<h5>3 Comment</h5>
<a href="#" class="leave-btn">Leave a comment</a>
<div class="blog__comment__item">
<div class="blog__comment__item__pic">
<img src="img/blog/details/comment-1.jpg" alt=""/>
</div>
<div class="blog__comment__item__text">
<h6>Brandon Kelley</h6>
<p>Duis voluptatum. Id vis consequat consetetur dissentiet, ceteros commune perpetua
mei et. Simul viderer facilisis egimus tractatos splendi.</p>
<ul>
<li><i class="fa fa-clock-o"></i> Seb 17, 2019</li>
<li><i class="fa fa-heart-o"></i> 12</li>
<li><i class="fa fa-share"></i> 1</li>
</ul>
</div>
</div>
<div class="blog__comment__item blog__comment__item--reply">
<div class="blog__comment__item__pic">
<img src="img/blog/details/comment-2.jpg" alt=""/>
</div>
<div class="blog__comment__item__text">
<h6>Brandon Kelley</h6>
<p>Consequat consetetur dissentiet, ceteros commune perpetua mei et. Simul viderer
facilisis egimus ulla mcorper.</p>
<ul>
<li><i class="fa fa-clock-o"></i> Seb 17, 2019</li>
<li><i class="fa fa-heart-o"></i> 12</li>
<li><i class="fa fa-share"></i> 1</li>
</ul>
</div>
</div>
<div class="blog__comment__item">
<div class="blog__comment__item__pic">
<img src="img/blog/details/comment-3.jpg" alt=""/>
</div>
<div class="blog__comment__item__text">
<h6>Brandon Kelley</h6>
<p>Duis voluptatum. Id vis consequat consetetur dissentiet, ceteros commune perpetua
mei et. Simul viderer facilisis egimus tractatos splendi.</p>
<ul>
<li><i class="fa fa-clock-o"></i> Seb 17, 2019</li>
<li><i class="fa fa-heart-o"></i> 12</li>
<li><i class="fa fa-share"></i> 1</li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-4 col-md-4">
<div class="blog__sidebar">
<div class="blog__sidebar__item">
<div class="section-title">
<h4>Categories</h4>
</div>
<ul>
<li><a href="#">All <span>(250)</span></a></li>
<li><a href="#">Fashion week <span>(80)</span></a></li>
<li><a href="#">Street style <span>(75)</span></a></li>
<li><a href="#">Lifestyle <span>(35)</span></a></li>
<li><a href="#">Beauty <span>(60)</span></a></li>
</ul>
</div>
<div class="blog__sidebar__item">
<div class="section-title">
<h4>Feature posts</h4>
</div>
<a href="#" class="blog__feature__item">
<div class="blog__feature__item__pic">
<img src="img/blog/sidebar/fp-1.jpg" alt=""/>
</div>
<div class="blog__feature__item__text">
<h6>Amf Cannes Red Carpet Celebrities Kend...</h6>
<span>Seb 17, 2019</span>
</div>
</a>
<a href="#" class="blog__feature__item">
<div class="blog__feature__item__pic">
<img src="img/blog/sidebar/fp-2.jpg" alt=""/>
</div>
<div class="blog__feature__item__text">
<h6>Amf Cannes Red Carpet Celebrities Kend...</h6>
<span>Seb 17, 2019</span>
</div>
</a>
<a href="#" class="blog__feature__item">
<div class="blog__feature__item__pic">
<img src="img/blog/sidebar/fp-3.jpg" alt=""/>
</div>
<div class="blog__feature__item__text">
<h6>Amf Cannes Red Carpet Celebrities Kend...</h6>
<span>Seb 17, 2019</span>
</div>
</a>
</div>
<div class="blog__sidebar__item">
<div class="section-title">
<h4>Tags cloud</h4>
</div>
<div class="blog__sidebar__tags">
<a href="#">Fashion</a>
<a href="#">Street style</a>
<a href="#">Diversity</a>
<a href="#">Beauty</a>
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
<div class="col-lg-2 col-md-4 col-sm-4 col-md-6 col-sm-6 p-0">
<div class="instagram__item set-bg" style={{backgroundImage:'url(img/instagram/insta-1.jpg)'}}>
<div class="instagram__text">
<i class="fa fa-instagram"></i>
<a href="#">@ ashion_shop</a>
</div>
</div>
</div>
<div class="col-lg-2 col-md-4 col-sm-4 col-md-6 col-sm-6 p-0">
<div class="instagram__item set-bg" style={{backgroundImage:'url(img/instagram/insta-2.jpg)'}}>
<div class="instagram__text">
<i class="fa fa-instagram"></i>
<a href="#">@ ashion_shop</a>
</div>
</div>
</div>
<div class="col-lg-2 col-md-4 col-sm-4 col-md-6 col-sm-6 p-0">
<div class="instagram__item set-bg" style={{backgroundImage:'url(img/instagram/insta-3.jpg)'}}>
<div class="instagram__text">
<i class="fa fa-instagram"></i>
<a href="#">@ ashion_shop</a>
</div>
</div>
</div>
<div class="col-lg-2 col-md-4 col-sm-4 col-md-6 col-sm-6 p-0">
<div class="instagram__item set-bg" style={{backgroundImage:'url(img/instagram/insta-4.jpg)'}}>
<div class="instagram__text">
<i class="fa fa-instagram"></i>
<a href="#">@ ashion_shop</a>
</div>
</div>
</div>
<div class="col-lg-2 col-md-4 col-sm-4 col-md-6 col-sm-6 p-0">
<div class="instagram__item set-bg" style={{backgroundImage:'url(img/instagram/insta-5.jpg)'}}>
<div class="instagram__text">
<i class="fa fa-instagram"></i>
<a href="#">@ ashion_shop</a>
</div>
</div>
</div>
<div class="col-lg-2 col-md-4 col-sm-4 col-md-6 col-sm-6 p-0">
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

export default BlogDetails;