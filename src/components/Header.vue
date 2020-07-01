<template>
    <header class="header">
        <!-- <div class="header__square"></div> -->
        <div class="header__icons">
            <div class="header__icons--social-medias">
                <img src="../../public/img/facebook.svg" alt="facebook icon">
                <img src="../../public/img/instagram2.svg" alt="instagram icon">
            </div>        
        </div>
        <div class="header__title" v-scrollanimation>
            <p>Online Course</p>
            <h1>Zravo.</h1>
            <h2>Ja sam Zlata</h2>
        </div>
        <div class="header__image"></div>
        <div class="header__textura"></div>
        <div class="header__box">Explore the new look</div>
    </header>
</template>
<style lang="scss" scoped>
    .before-enter{
        opacity: 0;
        transform: translateX(100px);
        transition: all 1s cubic-bezier(.41,.01,.57,1.61);
    }

    .enter{
        opacity: 1;
        transform: translateX(0);
    }

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

.header{
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(3, 1fr);
        align-items: center;
        border-right: 1px solid #ccc;

         &__textura{
            grid-column: 10/11;
            grid-row: 1/4;
            background-image: url(https://www.toptal.com/designers/subtlepatterns/patterns/bush.png);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            height: 95vh;
            width: 50%;
            justify-self: flex-end;
            z-index: 55;
            position: relative;

            @include respond(phone){
                visibility: none;
                opacity: 0;

            }

        }

      /*   &__square{
            display: none;


            @include respond(phone){
                display: flex;
                border: 7px solid rgba(0,0,0,.5);
                width: 80%;
                height: 32rem;
                z-index: 2000;
                position: absolute;
                transform: translateY(8rem) translateX(3.2rem);
            }
        } */

        &__box{
            grid-column: 8/10;
            grid-row: 3/4;
            width: 11rem;
            height: 11rem;
            transform: translateX(-4rem) translateY(-4rem);
            background-color: rgb(16, 148, 153);
            color: #fff;
            font-weight: 600;
            text-transform: uppercase;    
            padding: 1rem;   
            z-index: 55;
            position: relative;
            

            @include respond(tab-land){                    
                width: 10rem;
                height: 10rem;    
                font-size: 1rem;   
                transform: translateX(-8rem) translateY(-2rem);             
            }

            @include respond(tab-port){                    
                width: 9rem;
                height: 9rem;  
                font-size: .7rem; 
                padding: 1rem;                 
            }

            @include respond(phone){                    
                visibility: none;
                opacity: 0;                
            }

        }

        &__icons{
            grid-column: 1/2; 
            grid-row: 1/4;
            justify-self: center; 

            @include respond(tab-land){
                visibility: none;
                opacity: 0;
            }
            

            &--social-medias{
                display: flex;
                flex-direction: column;

                 & img{
                    justify-self: center;
                    width: 1.5rem;
                    height: 1.5rem;
                    margin: 1.3rem .5rem;
                 } 
            }
           
        }

        &__title{
            grid-column: 3/6;
            grid-row: 1/4;

             

             @include respond(phone){
                grid-column: 1/-1;
                z-index: 15;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }


            & p{
                font-size: 1.3rem;
                font-weight: 700;

                @include respond(tab-land){
                  font-size: 1rem;
                }

                @include respond(phone){                    
                    font-size: .9rem;       
                    color: rgb(68, 68, 68);       
                }
            }
            
            & h1{
                font-size: 6.25rem;
                font-weight: 400;
                color: #06070f;
                line-height: 100px;
                margin-top: 3rem;
                font-family: 'Montserrat', sans-serif;

                @include respond(big-desktop){
                    font-size: 7rem;
                }

                @include respond(tab-land){
                    font-size: 5.5rem;
                    line-height: 1.2;
                }

                @include respond(tab-port){
                    font-size: 4.5rem;
                }

                 @include respond(phone){
                    grid-column: 1/5;
                    font-size: 3rem;
                    line-height: 1.2;
                    font-weight: 300;
                  /*   text-transform: uppercase; */
                    color: rgb(49, 49, 49);
                    
                }
            }

            & h2{
                font-size: 6.25rem;
                font-weight: 100;
                color: #0e9794;
                line-height: 100px;
                font-family: 'Montserrat', sans-serif;

                 @include respond(big-desktop){
                    font-size: 7rem;
                }

                @include respond(tab-land){
                    font-size: 5rem;
                    line-height: 1.2;
                 }

                @include respond(tab-port){                    
                    font-size: 3rem;
                    line-height: 1.2;                
                }

                 @include respond(phone){
                    grid-column: 1/5;
                    font-size: 2.3rem;
                    font-weight: 400;
                    line-height: 1.2;
                    color: rgb(250, 250, 250);
                    background-color: rgba(23, 144, 155,.678);;
                    margin-top: 2rem;
                    padding: 1rem 1.4rem;
                }
            }
        }

        &__image{
            grid-column: 8/10;
            grid-row: 1/4;
            background-image: url(https://i.pinimg.com/originals/99/71/fb/9971fbbf212f28e6b062b8861a90ff24.jpg);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            height: 95vh;
            width: 130%;

             @include respond(tab-port){
               /*  grid-column: 1/-1;
                background-image: linear-gradient(to right bottom, rgba(219, 216, 216, 0.8), rgba(255, 255, 255, 0.8)), url(https://i.pinimg.com/originals/99/71/fb/9971fbbf212f28e6b062b8861a90ff24.jpg);
                z-index: 5;
                position: relative; */
                grid-column: 7/10;
                z-index: 5;
                position: relative;
            }

             @include respond(phone){
                 grid-column: 1/12;
                  background-image: linear-gradient(to right bottom, rgba(255, 255, 255, 0.9), rgba(175, 232, 215,.7)), url(https://i.pinimg.com/originals/99/71/fb/9971fbbf212f28e6b062b8861a90ff24.jpg);
                /* z-index: 5;
                position: relative; */
                width: 100%;
             }  

       

        
    }

}
 /* @include respond(tab-port){
            top: 50%;
            left: 50%;
        } */
</style>