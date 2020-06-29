<template>
    <div class="container">
        <div class="navigation">
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
         </div>
        
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
    }
    
</style>
