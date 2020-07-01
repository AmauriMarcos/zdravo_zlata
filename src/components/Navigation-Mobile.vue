<template>
    <div class="navigation">
        <Slide slide right
               :closeOnNavigation="true" 
        >
            <router-link tag='a' to='#header' >Home</router-link>
            <router-link tag='a' to='#about' >About</router-link>
            <router-link tag='a' to='#prices' >Plans</router-link>
            <router-link tag='a' to='#contact' >Contact</router-link>
        </Slide>
    </div>
    
    <!-- <div class="navigation">
        <nav class="navigation__nav">
            <ul class="navigation__list">
                <li class="navigation__item" >
                    <router-link class="navigation__link" tag='a' to='#header' exact-active-class="active">Home</router-link>
                </li>
                <li class="navigation__item">
                    <router-link class="navigation__link" tag='a' to='#about' exact-active-class="active">About</router-link>
                </li>
                <li class="navigation__item">
                    <router-link class="navigation__link" tag='a' to='#prices' exact-active-class="active">Plans</router-link>
                </li>
                <li class="navigation__item">
                    <router-link class="navigation__link" tag='a' to='#contact' exact-active-class="active">Contact</router-link>
                </li>
            </ul>
        </nav>
    </div> -->
     
     
</template>
<script>
import { Slide } from 'vue-burger-menu';
export default {
    components: {
        Slide
    },
    data(){
        return{
          
        }
    },
    watch: {

    },
    methods:{
 
    },
    mounted(){ 
       
    }
}
</script>
<style lang="scss" >

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


.navigation {
    position: fixed;
    z-index: 3000;
    top: 1.5rem;
    right: 2rem;
    height: 3.75rem;
    width: 3.75rem;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 .625rem 1.25rem rgba(#000, .1);
    display: none;


     @include respond(phone){
            display: block !important;
            opacity: 1;     
        }
   
    
    & a{
        font-style: none;
        color: white;

        &:hover{
            color: turquoise;
        }
    }
}
.bm-burger-button {
      position: fixed;
      width: 36px;
      height: 20px;
      top: 2.8rem;
      right: 2.7rem !important;
      cursor: pointer;

       @include respond(big-desktop){
            display: block;
            opacity: 0;   
        }

     @include respond(desktop){
            display: block;
            opacity: 0;      
        }

     @include respond(phone){
            display: block;
            opacity: 1;     
        }
}

.bm-burger-bars {
      background-color: #030303 !important;
    }
   
.bm-overlay {
    background: transparent;
    
}

.line-style {
      position: absolute;
      height: 10%;
      left: 0;
      right: 0;
    }

 
</style>