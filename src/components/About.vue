<template>
   <section id="about">
        <div class="about">
            <div class="about__content">
                <div class="about__content--left ">
                    <img src="../../public/img/mygirl.png" alt="" >
                </div>  
                <div class="about__content--right" v-scrollanimation>
                    <h2>About me</h2>
                    <p>Hello, my name is Izza, I live in the city of Nis in Serbia and I have a degree in Serbian literature. I love teaching and I also like cakes and pizza. It will be a pleasure to help you to learn the Serbian language. <span>Ready to start?</span></p>
                    <router-link tag='button' to='#contact' exact-active-class="active">Send a message <span>&rarr;</span></router-link>
                    <!-- <button>Send a message <span>&rarr;</span> </button> -->
                </div>
            </div>
        </div>
   </section>
</template>

<style lang="scss" scoped>

.before-enter {
  opacity: 0;
  transform: translateY(15rem);
  transition: all 1s cubic-bezier(0,-0.1,0,1.28);
}

.enter{
    opacity: 1;
    transform: translateY(0rem);

}

    @mixin respond($breakpoint){
        @if $breakpoint == phone {
            @media only screen and (max-width: 37.5em){ @content }; //600px
        }

        @if $breakpoint == pre-phone {
            @media only screen and (max-width: 40em){ @content }; //640px
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

            @include respond(tab-port){
                display: flex;
                align-items: center;
                justify-content: space-evenly;
            }

            @include respond(tab-land){
                grid-column: 1/-1;
                /* display: flex; */
                align-items: center;
            }

             

             @include respond(phone){
                 grid-column: 1/-1;
                 display: grid;
            } 
            &--left{

                @include respond(tab-land){
                    display: flex;
                    justify-content: center;
                }
                
                 @include respond(phone){
                         display: flex;
                         justify-content: center;
                         align-items: center;
                         padding-top: 2rem;
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

                 @include respond(pre-phone){
                     padding: 0;
                } 

                @include respond(phone){
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                      padding-bottom: 2rem;
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
                       /*  display: none; */
                       z-index: 5000;
                       position: relative;
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