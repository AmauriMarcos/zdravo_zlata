<template>
   <section id="about">
        <div class="about">
            <div class="about__content">
                <div class="about__content--left">
                    <img src="../../public/img/mygirl.png" alt="" >
                </div>  
                <div class="about__content--right">
                    <h2>About me</h2>
                    <p>Hello, my name is Zlata, I live in the city of Nis in Serbia and I have a degree in Serbian literature. I love teaching and I also like all star, skate and good music. It will be a pleasure to help you to learn the Serbian language. <span>Ready to start?</span></p>
                    <button>Send a message <span>&rarr;</span> </button>
                </div>
            </div>
        </div>
   </section>
</template>

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
    
    #about{
        padding: 5% 0 0 0;
    }
    .about{
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        /* height: 30rem; */
        padding: 3% 0;

        &__content{
            background-color: rgb(175, 232, 215);
            grid-column: 1/10;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            padding: 3% 0;

            @include respond(tab-land){
                grid-column: 1/-1;
                display: flex;
                align-items: center;
            }

             @include respond(phone){
                 grid-column: 1/-1;
            } 
            &--left{
                
                 @include respond(phone){
                         display: flex;
                         justify-content: center;
                         align-items: center;
                     } 
                
                & img{
                    width: 30rem;
                    transform: translateX(3rem);

                    @include respond(tab-land){
                        width: 20rem;
                        transform: translateX(1rem);
                    }

                     @include respond(phone){
                         width: 15rem;
                         /* margin: 1rem auto;
                         transform: translateX(6rem); */
                         transform: translateX(0);
                     } 
                }
            }

            &--right{
                width: 400px;

                @include respond(tab-land){
                    padding: 2rem;
                        
                }

                    @include respond(phone){
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                        width: 100%;
                    }

                & p{
                    font-size: 1.4rem;
                    line-height: 1.7;
                    font-weight: 300;

                    @include respond(tab-land){
                        font-size: 1.2rem;
                    }

                    @include respond(phone){
                        font-size: 1rem;
                        padding: 0 3rem 1rem 3rem;
                    } 

                    & span{
                        font-weight: 400;
                    }
                }

                & h2{
                    font-size: 4rem;
                    font-weight: 100;
                    margin-bottom: 1.8rem;

                    @include respond(tab-land){
                        font-size: 3rem;                    
                    }

                    @include respond(phone){
                        font-size: 2.5rem;
                        margin: 2rem;
                        text-align: center;
                    } 
                }

                & button{
                    border: none;
                    background-color: rgb(23, 144, 155);
                    color: white;
                    text-transform: uppercase;
                    font-size: 1.1rem;
                    padding: 1.5rem 2.5rem;
                    font-weight: 600;
                    outline: none;
                    margin-top: 2rem;
                    cursor: pointer;

                    @include respond(tab-land){
                        padding: 1.2rem 2rem;
                        font-size: .85rem;
                    
                    }

                    @include respond(phone){
                        font-size: .8rem;
                        padding: .8rem 1.2rem;
                        margin: 2rem auto;
                    }

                    & span{
                        margin-left: .3rem;
                    }

                    &:hover{
                        background-color: rgb(78, 139, 121);         
                    }
                }
            }
            
        }
    }
</style>