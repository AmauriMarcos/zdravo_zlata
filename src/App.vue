<template>
    <div class="container">
        <app-navigation></app-navigation>
        <header class="header">
            <div class="header__icons">
                <div class="header__icons--social-medias">
                    <img src="../public/img/facebook.svg" alt="facebook icon">
                    <img src="../public/img/instagram.svg" alt="instagram icon">
                </div>        
            </div>
            <div class="header__title">
                <p>Online Course</p>
                <h1>Zdravo.</h1>
                <h2>Ja sam Zlata</h2>
            </div>
            <div class="header__image"></div>
            <div class="header__textura"></div>
            <div class="header__box">Explore the new look</div>
        </header>
        <div>
            SOME CONTENT
        </div>
    </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
export default {
    components: {
        appNavigation: Navigation
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
        font-family: 'Noto Sans JP', sans-serif;
    }
    .container{
        /* padding: 3% 7%; */
    }
    .header{
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(3, 1fr);
        align-items: center;

        &__icons{
            grid-column: 1/2; 
            grid-row: 1/4;
            justify-self: center;  

            &--social-medias{
                display: flex;
                flex-direction: column;

                 & img{
                    justify-self: center;
                    width: 1.2rem;
                    height: 1.2em;
                    margin: 1.3rem .5rem;
                 } 
            }
           
        }

        &__title{
            grid-column: 3/5;
            grid-row: 1/4;

            & p{
                font-size: 1.3rem;
                font-weight: 700;
            }
            
            & h1{
                font-size: 90px;
                font-weight: 400;
                color: #06070f;
                line-height: 100px;
            }

            & h2{
                font-size: 85px;
                font-weight: 100;
                color: #0e9794;
                line-height: 100px;
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
        }

        &__textura{
            grid-column: 10/11;
            grid-row: 1/4;
            background-image: url(https://www.toptal.com/designers/subtlepatterns/patterns/bush.png);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            height: 95vh;
            width: 50%;
        }

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

        }
    }
</style>
