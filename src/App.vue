<template>
    <div class="container">
        <app-navigation></app-navigation>
        <app-header></app-header>
        <app-about></app-about>
        <app-elements></app-elements>
        <app-prices></app-prices>
        <app-testimonials></app-testimonials>
        <app-contact></app-contact>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Header from './components/Header.vue';
import About from './components/About.vue';
import Elements from './components/Elements.vue';
import Prices from './components/Prices.vue';
import Testimonials from './components/Testimonials.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

export default {
    components: {
        appNavigation: Navigation,
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
    
</style>
