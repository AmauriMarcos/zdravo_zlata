<template>
    <section id="elements">
       <div class="elements">
            <div class="elements__square">

            </div>
            <div class="elements__phrase">
                <h3>Tell me and I forget. Teach me and I remember. Involve me and I learn.</h3>
                <p>&#8212; Benjamin Franklin</p>
            </div>

            <div class="elements__photo">
                <img src="https://scontent.fbeg7-1.fna.fbcdn.net/v/t1.15752-9/105519888_1049727992088147_1053918515766314422_n.jpg?_nc_cat=110&_nc_sid=b96e70&_nc_ohc=G-NWGe4jX4sAX8LL6VD&_nc_ht=scontent.fbeg7-1.fna&oh=b74d145269a2cb257618029434d435dc&oe=5F1A22E3" alt="">
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

    #elements{
        padding: 5% 0;

        @include respond(phone){
            padding: 20% 0;
        }
    }
    .elements{
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(2,1fr);
        padding: 3% 0 0 0;

        &__square{
            grid-column: 5/9;
            grid-row: 1/-1;
            width: 33rem;
            height: 33rem;
            border: 2rem solid #ccc;
            opacity: 0.2;
            z-index: 5;
            position: relative;

            @include respond(phone){
                width: 21.9rem;
                height: 25rem;
                grid-column: 2/-1;
            }
            
        }

        &__phrase{
            grid-column: 3/6;
            grid-row: 1/-1;
            padding: 1rem;
            height: 50%;

            @include respond(phone){
                grid-column: 2/-1;
                margin-top: 3rem;
            }


            & h3{
                width: 100%;
                font-size: 3rem;
                font-weight: 200;
                line-height: 1.3;
                margin-bottom: 2rem;

                 @include respond(phone){
                    font-size: 1.7rem;
                }
            }

            & p{
                font-size: 1.4rem;

                @include respond(phone){
                    font-size: 1rem;
                }
            }
        }

        &__photo{
            grid-column: 7/9;
            grid-row: 2/3;
            width: 17rem;
            height: 17rem;
            transform: translateX(3rem) translateY(10);

            @include respond(phone){
                width: 10rem;
                height: 10rem;
                transform: translateX(.5rem) translateY(5rem);
                z-index: 55;
                position: relative;
            }

            & img{
                object-fit: cover;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                z-index: 10;
                position: relative;
            }
        }
    }
</style>