<template>
    <section id="testimonials">
        <h2 class="title">What they say about me</h2>
        <div class="customers">
            <bloquote class="testimonial">
                <q class='testimonial__text'>Excellent teacher. Patient and dedicated to the student. Zlata encourages students but always respecting their limits.</q>
                <div class="testimonial__photo">
                    <img src="https://i.ytimg.com/vi/cYNlJYQI3Uw/maxresdefault.jpg" alt="">
                </div>
                 <p class="testimonial__name">Amauri Santos</p>
            </bloquote>
            <bloquote class="testimonial">
                <q class='testimonial__text'>What can I say? Zlata is one of those people you want to be around. Intelligent and charismatic, she manages to make learning Serbian much simpler.</q>
                <div class="testimonial__photo">
                    <img src="https://besthqwallpapers.com/img/original/64294/berger-blanc-suisse-little-white-puppy-portrait-cute-dog-pets.jpg" alt="">
                </div>
                <p class="testimonial__name">Igor Rodriguez</p>
            </bloquote>
            <bloquote class="testimonial">
                <q class='testimonial__text'>Zlata is able to balance topics in a practical and intuitive way. You realize that she has the gift to teach.</q>
                <div class="testimonial__photo">
                    <img src="https://www.sheknows.com/wp-content/uploads/2018/08/snxsheng092loz5ecje8.jpeg" alt="">
                </div>
                <p class="testimonial__name">Marija Consuelo</p>
            </bloquote>
        </div>
    </section>
</template>

<style lang="scss" scoped>

    #testimonials{
        padding: 5% 7%;
        background-color: rgb(175, 232, 215);
    }

    .customers{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
        padding: 3% 0;
    }

    .title{
        text-align: center;
        font-size: 4rem;
        font-weight: 100;
    }

    .testimonial{
        padding: 3rem 2rem 1.5rem 2rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 2px 7px 25px rgba(0,0,0,.2);
        background-color: rgb(255, 250, 250);
        
        &__text{
            line-height: 1.5rem;
            font-size: .9rem;
            font-weight: 300;
            text-align: center;

            &::before{
                content: "\201C";
                display: block;
                font-size: 5rem;
                color: #17909b;
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