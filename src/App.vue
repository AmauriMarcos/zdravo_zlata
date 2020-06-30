<template>
    <div class="container">
            <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle">

            <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>

            <div class="navigation__background">&nbsp;</div>
            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item"><a href="#" class="navigation__link">
                        <span>01</span>About Natous</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link">
                        <span>02</span>Your benfits</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link">
                        <span>03</span>Popular tours</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link">
                        <span>04</span>Stories</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link">
                        <span>05</span>Book now</a></li>
                </ul>
            </nav>
        </div>
       <!--  <div class="navigation">
            <div class="brand">
                <img src="../public/img/ser.svg" alt="Serbia flag">
                <p>Uči </p>
                <p>Srpski</p>
            </div>
            <ul class="list">
                <li>
                     <router-link tag='a' to='#header' exact-active-class="active">Home</router-link>
                </li>
                <li>
                    <router-link tag='a' to='#about' exact-active-class="active">About me</router-link>
                </li>
                <li>
                    <router-link tag='a' to='#prices' exact-active-class="active">Plans</router-link>
                </li>
                <li>
                    <router-link tag='a' to='#contact' exact-active-class="active">Contact</router-link>
                </li>       
            </ul>   
         </div> -->
        
        <app-header id="header"></app-header>    
        <app-about id="about" hash='about'></app-about>       
        <app-elements></app-elements>
        <app-prices id="prices"></app-prices>
        <app-testimonials></app-testimonials>
        <app-contact id="contact"></app-contact>
        <app-footer></app-footer>
    </div>
</template>

<script>
/* import Navigation from './components/Navigation.vue'; */
import Header from './components/Header.vue';
import About from './components/About.vue';
import Elements from './components/Elements.vue';
import Prices from './components/Prices.vue';
import Testimonials from './components/Testimonials.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

export default {
    components: {
      /*   appNavigation: Navigation, */
        appHeader: Header,
        appAbout: About,
        appElements: Elements,
        appPrices: Prices,
        appTestimonials: Testimonials,
        appContact: Contact,
        appFooter: Footer
    }
}
</script>

<style lang="scss">


    @mixin respond($breakpoint){
        @if $breakpoint == phone {
            @media only screen and (max-width: 37.5em){ @content }; //600px
        }

        @if $breakpoint == tab-port {
            @media only screen and (max-width: 62.5em){ @content }; //1000px
        }

        @if $breakpoint == tab-land {
            @media only screen and (max-width: 75em){ @content }; //1200px
        }

        @if $breakpoint == big-desktop {
            @media only screen and (min-width: 112.5em){ @content }; // + 1800px
        }
    }


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-family: 'Montserrat', sans-serif;

        @include respond(phone){
            width: 100%;      
        }
    }

    html, body {
          overflow-x:hidden;
    }

    .active::after{
        content: '';
        display: block;
        height: 3px;
        width: 100%;
        background-color: rgb(16, 148, 153);
        transform: translateY(.5rem);
    }
/* 
    .navigation{
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        background-color: rgba(0,0,0,.8);
        height: 4rem;
        padding: 1.5rem;
        justify-content: center;
        align-content: center;
        position: fixed;
        z-index: 100;
        width: 100%;
        
        @include respond(phone){
            
        } 
    }

    .list{
        grid-column: 3/-1;
        grid-row: 1/2;
        list-style: none;
        display: flex;
        margin-left: 5rem;

        @include respond(phone){
             display: none;
        } 
        
    }

    .list li{
       
        font-weight: 400;
        margin: 1rem;       
    }

    .list li a{
        text-decoration: none;
        outline: none;
         color: #ccc;

         &:hover{
             color: rgb(175, 232, 215);
         }
    }

    .brand{
        grid-column: 1/4;
        grid-row: 1/2;
        color: #ccc;
        align-self: center;
        letter-spacing: .1rem;
        font-size: 1.1rem;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;

         @include respond(phone){
            
        } 

        & p {
            font-size: 1.2rem;
            font-weight: 600;
            margin: .15rem;

            @include respond(phone){
                font-size: .8rem;
                font-weight: 400;
                color: #fff;
            } 
        }
    }

    .brand img{
       height: 2.5rem;
       width: 2.5rem;
       margin: 0 1.5rem;

        @include respond(phone){
            height: 1.7rem;
            width: 1.7rem;
            margin-right: 1rem;
            font-weight: 300;
        } 
    } */

    .navigation {

    &__checkbox{
        display: none;
    }

    &__button{
        background-color:white;
        height: 4.37rem;
        width: 4.37rem;
        border-radius: 50%;
        position: fixed;
        top: 3.75rem;
        right:3.75rem;
        z-index: 2000;
        box-shadow: 0 .625rem 1.25rem rgba(#000, .1);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        @include respond(tab-port){
            position: fixed;
            top: 2.5rem;
            right: 2.5rem;
        }
    }

    &__background{
        height: 3.75rem;
        width: 3.75rem;
        border-radius: 50%;
        background: radial-gradient(rgb(87, 87, 160), rgb(19, 19, 48));
        position: fixed;
        top: 4.06rem;
        right:4.06rem;
        z-index: 1000;

        @include respond(tab-port){
            position: fixed;
            top: 2.81rem;
            right: 2.81rem;
        }
        

        transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1);

        /* transform: scale(80); */
    }

    &__nav{
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1500;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        width: 0;
        transition: all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        ;
       
    }

    &__list{
        list-style: none;
        text-align: center;
        width: 100%;
    }

    &__item{
        margin: .625rem;
    }

    &__link{

        &:link,
        &:visited{
            display: inline-block;
            font-size: 1.88rem;
            font-weight: 300;
            text-decoration: none;
            color: white;
            padding: .625rem 1.25rem;
            text-transform: uppercase;
            background: linear-gradient(120deg, transparent 0%, transparent 50%, white 50%);
            background-size: 225%;
            transition: all .4s;         
        }

        &:hover,
        &:active {
            background-position: 100%;
            color: rgb(105, 173, 105);
            transform: translateX(.625rem);
        }

        &:link span,
        &:visited span {
            margin-right: .94rem;
            
        }
    }


    //FUNCTIONALITY

    &__checkbox:checked ~ &__background{
          transform: scale(80);

    }

    &__checkbox:checked ~ &__nav{
        opacity: 1;
        width: 100%;
        
    }

    //ICON

    &__icon{
        position: relative;

        &,
        &::before,
        &::after {
            width: 1.8rem;
            height: 1.78px;
            background: green;
            display: inline-block;                  
        }

        &::before,
        &::after {
            content: "";
            position: absolute;
            left: 0;
            transition: all .1s;
         }

        &::before{top: -.5rem; }
        &::after{bottom: -.5rem;}

    }

    &__button:hover &__icon::before{
       top: -.625rem;
    }

    &__button:hover &__icon::after{
       bottom: -.625rem;
    }

    &__button:hover &__icon {
        height: 1.8px;
    }

    &__checkbox:checked ~ &__button &__icon{
        background-color: transparent;
        
    }

    &__checkbox:checked ~ &__button &__icon::before{
        transform: rotate(135deg);
        top: 0;
       
    }

    &__checkbox:checked ~ &__button &__icon::after{
        transform: rotate(-135deg);
        top: 0;
        margin-bottom: 3px;
        
    }
}
    
</style>
