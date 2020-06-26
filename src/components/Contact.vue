<template>  
    <section id="contact">
        <h2 class="title">Get in touch with me</h2>
        <div class="contact">
            <div class="message">
                <p><span class="main-color">Let's</span> <span class="main-color">learn</span> <span>Serbian</span></p>
            </div>
            <div class="box1">
                <h3>Send me a message</h3>
                <form action="" method="" class="form">
                    <ul>
                        <li>
                            <label for="name">Name</label>
                            <input type="text" id="name" name="user_name" >
                        </li>
                        <li>
                            <label for="mail">E-mail</label>
                            <input type="email" id="mail" name="user_email" >
                        </li>
                        <li>
                            <label for="msg">Message:</label>
                            <textarea id="msg" name="user_message"></textarea>
                        </li>
                    </ul>
                    <button class="btn">Send</button>
                </form>
            </div>
            <div class="box2">
                <div class="info">
                    <div class="address">

                    </div>
                    <div class="phone">

                    </div>
                    <div class="email">
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #contact{
        padding: 5% 13%;
        background-color: rgb(247, 247, 247);
    }

     .title{
        text-align: center;
        font-size: 4rem;
        font-weight: 100;
        margin-bottom: 1.8rem; 
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
        margin-top: 5rem;
    }

    .box1{
        width: 21.87rem;
       /*  height: 25rem; */
        padding: 3rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 3px 3px 22px rgba(32,32,32,.3);
        background-color: #fff;
       

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
         /* background-image: linear-gradient(to right bottom, rgba($color-primary-light, 0.8),  rgba($color-primary-dark, 0.8)) ,url("../img/hero.jpg"); */
    }
</style>