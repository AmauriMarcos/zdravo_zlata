<template>
    <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle">

            <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>

            <div class="navigation__background">&nbsp;</div>
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
        </div>
</template>
<script>
export default {
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
<style lang="scss" scoped>

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

 .background{
     background: radial-gradient(rgb(175, 232, 215), rgb(23, 144, 155));
     transform: scale(80);
} 

 .nav{
     opacity: 1;
     width: 100%; 
 }

.navigation {
    display: none;

    @include respond(desktop){
        display: none;
        opacity: 0;
    }

    @include respond(phone){
        display: block;
        opacity: 1;
    }
   

    &__checkbox{
        display: none;
    }

    &__button{
        background-color: rgb(250, 250, 250);
        height: 4.37rem;
        width: 4.37rem;
        border-radius: 50%;
        position: fixed;
        top: 3.75rem;
        right:3.75rem;
        z-index: 2000;
       /*  box-shadow: 0 .625rem 1.25rem rgba(#000, .1); */
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        

        @include respond(tab-port){
            position: fixed;
            top: 2.5rem;
            right: 2.5rem;
        }

        @include respond(phone){
            display: flex;
            opacity: 1;
        }
    }

    &__background{
        height: 3.75rem;
        width: 3.75rem;
        border-radius: 50%;
        background: transparent;
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
        background: radial-gradient(rgb(175, 232, 215), rgb(23, 144, 155));
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