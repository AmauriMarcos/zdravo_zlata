<template>  
    <section id="contact">
        <h2 class="title">Get in touch with me</h2>
        <div class="contact">
            <div class="message">
                <p><span class="main-color">Let's</span> <span class="main-color">learn</span> <span>Serbian</span></p>
            </div>
            <div v-if='isSubmit'  class="box1 box1-succesfull" v-scrollanimation>
                <div class="box1-succesfull__image"></div>
                <div class="box1-succesfull__icon">
                    <img src="../../public/img/success.svg" alt="success submit form">
                </div>
                <h2 class="box1-succesfull__title">Thanks for being awesome!</h2>
                <p class="box1-succesfull__text">Your message has been successfully sent. I will contact you very soon!</p>
            </div>
            <div v-if='!isSubmit'  class="box1" v-scrollanimation>
                <h3>Send me a message</h3>
                <form action="/" 
                      data-netlify="true"
                      netlify-honeypot="bot-field" 
                      class="form" 
                      method="post"  
                      name="contact" 
                      @submit.prevent="handleSubmit"
                >
            
                    <input type="hidden" name="form-name" value="contact" />
                   
                    <ul>
                        <li>
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" v-model="form.name">
                        </li>
                        <li>
                            <label for="email">E-mail</label>
                            <input type="email" id="email" name="email" v-model="form.email">
                        </li>
                        <li>
                            <label for="message">Message:</label>
                            <textarea id="message" name="message" v-model="form.message"></textarea>
                        </li>
                    </ul>
                    <button type="submit" class="btn">Send</button>
                </form>
            </div>
            <div class="box2">
                <div class="infos">
                    <div class="info info__address">
                        <img src="../../public/img/map.svg" alt="icon map">
                        <p>Bulevar Cara Konstantina, broj 7</p>
                    </div>
                    <div class="info info__phone">
                        <img src="../../public/img/phone.svg" alt="icon phone">
                        <p>+55 381 555 283</p>
                    </div>
                    <div class="info info__email">
                        <img src="../../public/img/mail.svg" alt="icon mail">
                        <p>zlata.learn.servio@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    data(){
        return{
            form: {
                name: '',
                email: '',
                message: ''
            },
            isSubmit: false
        }
    },
    methods: {
        encode(data){
            return Object.keys(data)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
            .join('&')
        },
        handleSubmit(){
            fetch('/', {
                method: 'post',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                },
                body: this.encode({
                    'form-name': 'contact',
                    ...this.form
                })
            })
            .then(() =>{
                this.isSubmit = true;
                console.log('Message sent!')
            })
            .catch((err) => console.log(`Error: ${err}`));
            
        }
  }
}
</script>

<style lang="scss" scoped>
    .box1-succesfull{
        color: rgb(8, 187, 8);
        height: 31.06rem;
        display: grid;
        padding: 0 !important;
        justify-items: center;
        align-items: center;

        &__image{
            grid-column: 1/2;
            grid-row: 1/2;
            z-index: 5;
            position: relative;
            background-image: linear-gradient(to right bottom, rgba(191, 245, 198, 0.8), rgba(155, 226, 176, 0.8)), url(https://ak.picdn.net/shutterstock/videos/8555707/thumb/9.jpg);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 100%;
            height: 100%;
        }

        &__icon{
            grid-column: 1/2;
            width: 5.5rem;
            height: 5.5rem;
            grid-row: 1/2;
            z-index: 500;
            position: relative;
        }

        &__title{
            grid-column: 1/2;
            grid-row:2/3;
            height: 5px;
            font-size: 1.7rem;
            padding: 0 2.5rem;
        }

        &__text{
             grid-column: 1/2;
            grid-row:3/4;
            padding:  0 2.5rem;
        }
    }
    .before-enter{
        opacity: 0;
        transform: translateY(-100px);
        transition: all 1s cubic-bezier(.41,.01,.57,1.89);
    }

    .enter{
        opacity: 1;
        transform: translateY(0);
    }

     textarea{
        resize: vertical;
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

    #contact{
        padding: 7% 0;
        background-color: rgb(247, 247, 247);    
    }

     .title{
        text-align: center;
        font-size: 4rem;
        font-weight: 100;
        margin-bottom: 1.8rem; 

        @include respond(tab-land){
             font-size: 3rem; 
        }

        @include respond(phone){
            font-size: 1.9rem;
            margin: 2rem 0;
        }
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

         @include respond(phone){
            visibility: none;
            opacity: 0;
        }
       

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
        margin-top: 5rem;

        @include respond(phone){
            display: grid;
            grid-template-columns: repeat(4,1fr);
            justify-items: center;
        }
    }

    .box1{
        width: 21.87rem;
       /*  height: 25rem; */
        padding: 3rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 3px 3px 22px rgba(32,32,32,.3);
        background-color: #fff;

        @include respond(tab-land){
             width: 28rem;
           
        }

         @include respond(phone){
              grid-column: 2/4 ;
              grid-row: 2/3; 
              transform: translateY(-3rem);
              width: 21.87rem;
        }
       

        & h3{
            margin: 1rem 0;
            color: rgba(32,32,32,.9);
        }

        & form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            & .btn{
                border: none;
                background-color: rgb(23, 144, 155);
                color: white;
                text-transform: uppercase;
                font-size: .9rem;
                padding: 1rem 2rem;
                font-weight: 600;
                outline: none;
                margin-top: 2rem;
                cursor: pointer;

                &:hover{
                    background-color: rgb(78, 139, 121);         
                }

            }
            
            & ul{
                list-style: none;
                margin-top: 3rem;
                & li{

                    & input{
                        border: none;
                        background-color: transparent;
                        border-bottom: 1px solid rgba(32,32,32,.8);
                        width: 100%;
                        outline: none;
                        margin: .5rem 0;
                        font-size: 1rem;
                        padding: .3rem 0;
                    }

                    & textarea{
                        width: 100%;
                        border:none;
                        border-bottom: 1px solid rgba(32,32,32,.8);
                        margin: 1rem 0;
                        outline: none;
                        
                    }

                    & label{
                        font-size: .9rem;
                        font-weight: 300;
                        font-style: italic;

                        &::last-child{
                            margin-bottom: .5rem;
                        }
                       
                    }
                }
            }
        }
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
        justify-content: flex-start;

        @include respond(phone){
            width: 100%;
            grid-column: 1/-1 ;
            grid-row: 1/2; 
        }
         
        & .infos{
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0 auto 0 auto;
    
            & .info{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin: .4rem;

                & img{
                    width: .95rem;
                    height: .95rem;
                    margin-right: 1rem;
                }

                & p{
                    color: rgb(250, 250, 250);

                    @include respond(tab-land){
                        font-size: .8rem;
                    }
                }
                
            }
        }
    }
</style>