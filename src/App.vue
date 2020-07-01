<template>
    <div class="container">
        <app-navigation></app-navigation>
        <app-navMobile></app-navMobile>
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

import Navigation from './components/Navigation.vue';
import NavigationMobile from './components/Navigation-Mobile.vue';
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
        appNavMobile: NavigationMobile,
        appHeader: Header,
        appAbout: About,
        appElements: Elements,
        appPrices: Prices,
        appTestimonials: Testimonials,
        appContact: Contact,
        appFooter: Footer
    },
  
}
</script>

<style lang="scss">

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-family: 'Montserrat', sans-serif;
    }

    html, body {
          overflow-x:hidden;
    }
    
  
</style>
