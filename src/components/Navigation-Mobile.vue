<template>
    <div>
        <div class="navigation">
        <PushRotate ScaleDown right
               :closeOnNavigation="true" 
        >
            <router-link tag='a' to='#header' >Home</router-link>
            <router-link tag='a' to='#about' >About</router-link>
            <router-link tag='a' to='#prices' >Plans</router-link>
            <router-link tag='a' to='#contact' >Contact</router-link>
        </PushRotate>
        </div>  
    </div>  
</template>
<script>
import { PushRotate } from 'vue-burger-menu';
export default {
    components: {
        PushRotate
    }
}
</script>
<style scoped lang="scss" >

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
    height: 5.8rem;
    
    width: 100%;
    /* background-color: rgba(255,255,255,.9); */
 /*    box-shadow: 0 .625rem 1.25rem rgba(#000, .1); */
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
      
}

.bm-burger-bars {
      background-color: #17909b !important;
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