<template>  
    <section id="contact">
        <div class="contact">
            <div class="message">
                <p><span class="main-color">Let's</span> <span class="main-color">learn</span> <span>Serbian</span></p>
            </div>
            <div class="box1">

            </div>
            <div class="box2">

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #contact{
        padding: 5% 13%;
        background-color: rgb(247, 247, 247);
    }

    .message{
        height: 15.625rem;
        background-color: #000;
        width: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
         background-image: linear-gradient(to right bottom, rgba(32,32,32,.8), rgba(50,50,50,.8)), url("https://i.pinimg.com/originals/94/79/25/947925c67403a1645c42abdda3d8b22a.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: left;
       

        & p {
            writing-mode: tb-rl;
            display:flex;
            align-items:center;
            justify-content: flex-end;
            color: #fff;
            font-weight: 600;
            font-size: .8rem;
            letter-spacing: 1.2px;
            transform: rotate(180deg);
            line-height: 24px;
            margin: 1rem;
            text-transform: uppercase;

            span{
                margin: .5rem;
            }

            & .main-color{
                color: rgb(16, 148, 153);
            }

        }
    }

    .contact{
        display: flex;
        justify-content: center;
    }

    .box1{
        width: 21.87rem;
        height: 25rem;
        padding: 3rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 3px 3px 22px rgba(32,32,32,.3);
    }

    .box2{
        width: 31.25rem;
        height: 15.625rem;
        padding: 3rem;
        border: 1px solid black;
        background-image: linear-gradient(to right bottom, rgba(32,32,32,.8), rgba(50,50,50,.8)), url("https://i.pinimg.com/originals/94/79/25/947925c67403a1645c42abdda3d8b22a.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        display: flex;
        align-self: center;
         /* background-image: linear-gradient(to right bottom, rgba($color-primary-light, 0.8),  rgba($color-primary-dark, 0.8)) ,url("../img/hero.jpg"); */
    }
</style>