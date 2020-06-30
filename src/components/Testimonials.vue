<template>
    <section id="testimonials">
        <h2 class="title">What they say about me</h2>
        <div class="customers">
            <div class="testimonial" v-scrollanimation>
                <q class='testimonial__text'>Excellent teacher. Patient and dedicated to the student. Zlata encourages students but always respecting their limits.</q>
                <div class="testimonial__photo">
                    <img src="https://i.ytimg.com/vi/cYNlJYQI3Uw/maxresdefault.jpg" alt="">
                </div>
                 <p class="testimonial__name">Amauri Santos</p>
            </div>
            <div class="testimonial" v-scrollanimation>
                <q class='testimonial__text'>What can I say? Zlata is one of those people you want to be around. Intelligent and charismatic, she manages to make learning Serbian much simpler.</q>
                <div class="testimonial__photo">
                    <img src="https://besthqwallpapers.com/img/original/64294/berger-blanc-suisse-little-white-puppy-portrait-cute-dog-pets.jpg" alt="">
                </div>
                <p class="testimonial__name">Igor Rodriguez</p>
            </div>
            <div class="testimonial" v-scrollanimation>
                <q class='testimonial__text'>Zlata is able to balance topics in a practical and intuitive way. You realize that she has the gift to teach.</q>
                <div class="testimonial__photo">
                    <img src="https://www.sheknows.com/wp-content/uploads/2018/08/snxsheng092loz5ecje8.jpeg" alt="">
                </div>
                <p class="testimonial__name">Marija Consuelo</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

    .before-enter{
        opacity: 0;
        transform: scale(.5) rotateY(-25deg);
        transition: all 1s ease-out;
    }

    .enter{
        opacity: 1;
        transform: scale(1) rotateY(0);
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

    #testimonials{
        padding: 5% 7%;
        background-color: rgb(175, 232, 215);

        @include respond(phone){
            padding: 5% 10%;    
        }
    }

    .customers{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
        padding: 3% 0;

         
         @include respond(tab-land){
             grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); 
             padding: 2% 15%;      
             display: flex;
             flex-direction: column;         
        }

        @include respond(phone){
            padding: 2% 6%;
            
        }
    }

    .title{
        text-align: center;
        font-size: 4rem;
        font-weight: 100;

        
         @include respond(tab-land){
             font-size: 3rem;
             margin-bottom: 2rem;
           
        }

        @include respond(phone){
            font-size: 2rem;
            margin: 2rem 0;
        }
    }

    .testimonial{
        padding: 3rem 2rem 1.5rem 2rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 2px 7px 25px rgba(0,0,0,.2);
        background-color: rgb(255, 250, 250);

        @include respond(tab-land){
             margin-bottom: 2rem;
           
        }

        @include respond(phone){
            padding: 2rem 1rem 1rem 1rem;    
        }
        
        &__text{
            line-height: 1.5rem;
            font-size: .9rem;
            font-weight: 300;
            text-align: center;

            @include respond(phone){
                font-size: .85rem;   
            }

            &::before{
                content: "\201C";
                display: block;
                font-size: 5rem;
                color: #17909b;

                @include respond(phone){
                    font-size: 4rem;
                }       
            }

             &::after{
                content: "";
                display: block;
                height: 2px;
                width: 10%;
                background-color: #ccc;
                margin: 1rem auto;
            
            }
        }

        &__photo{
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background-color: chocolate;
            margin: 1rem auto;   

            @include respond(phone){
                 width: 55px;
                 height: 55px;  
             }

            & img{
                border-radius: 50%;
                width: 100%;
                height: 100%;
            }
        }

        &__name{
            text-align: center;
            font-size: .8rem;
            color: rgb(131, 131, 131);
        }

    }
</style>