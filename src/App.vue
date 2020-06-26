<template>
    <div class="container">
        <app-navigation></app-navigation>
        <app-header></app-header>
        <app-about></app-about>
        <app-elements></app-elements>
        <app-prices></app-prices>
        <app-testimonials></app-testimonials>
        <app-contact></app-contact>
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

export default {
    components: {
        appNavigation: Navigation,
        appHeader: Header,
        appAbout: About,
        appElements: Elements,
        appPrices: Prices,
        appTestimonials: Testimonials,
        appContact: Contact
    }
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
    
    
</style>
