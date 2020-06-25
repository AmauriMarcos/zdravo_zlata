<template>
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
</template>

<style lang="scss" scoped>
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
            &--left{
                

                & img{
                    width: 30rem;
                    transform: translateX(3rem);
                }
            }

            &--right{
                width: 400px;

                & p{
                    font-size: 1.4rem;
                    line-height: 1.7;
                    font-weight: 300;

                    & span{
                        font-weight: 400;
                    }
                }

                & h2{
                    font-size: 4rem;
                    font-weight: 100;
                    margin-bottom: 1.8rem;
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