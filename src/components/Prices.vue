<template>
    <section id="prices">
        <h2 class="title">Princing Options</h2>
        <div class="prices">
            <div class="card card-1" v-scrollanimation>
                <h4>Student</h4>               
                <h3>$ 9.99</h3>
                <p>Some Amazing feature</p>
                <p>Some Student Exclusive Feat.</p>
                <p>Another Option</p>
                <p class="final">Final One</p>
            </div>

            <div class="card card-2" v-scrollanimation>
                <div class="ribbon"><span>BEST</span></div>
                <h4>Professional</h4>               
                <h3>$ 19.99</h3>
                <p>Some Amazing feature</p>
                <p>Some Professional Exclusive Feat.</p>
                <p>Another Option</p>
                <p class="final">Final One</p>
            </div>

            <div class="card card-3" v-scrollanimation>
                <h4>Master</h4>                
                <h3>$ 49.99</h3>
                <p>Some Amazing feature</p>
                <p>Some Master Exclusive Feat.</p>
                <p>Another Option</p>
                <p class="final">Final One</p>
            </div>

        </div>
    </section>
    
</template>

<style lang="scss" scoped>

    .before-enter{
        opacity: 0;
        transition: all 1s ;
        transform: rotateX(90deg);
    }

    .enter{
        opacity: 1;
        transform: rotateX(0);
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

        @if $breakpoint == laptop {
            @media only screen and (max-width: 90em) {@content}; //1440px
        }

        @if $breakpoint == big-desktop {
            @media only screen and (min-width: 112.5em){ @content }; // + 1800px
        }
    }

    #prices{
        padding: 5% 3%;
        background-color: rgb(247, 247, 247);

        @include respond(laptop){
            padding: 5% 4%;
        }

         @include respond(phone){
            padding: 15% 7%;
        }
    }
    .prices{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
        padding: 2% 5%;
        
        @include respond(laptop){
            padding: 5% 0;
            margin: 0 auto;
        }

         @include respond(tab-land){
           /*   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));  */
             padding: 2% 0;      
             width: 32.5rem;
             margin: 0 auto;
             display: flex;
             flex-direction: column;
           
        }

         @include respond(tab-port){
            width: 31rem;
            padding: 2% 5%;
        }

        @include respond(phone){
            padding: 2% 6%;
            width: 100%;
        }
    }
    .title{

        text-align: center;
        font-size: 4rem;
        font-weight: 100;
        margin-bottom: 1.8rem;

        @include respond(tab-land){
             font-size: 3rem;
             margin: 2rem 0;
        }

        @include respond(phone){
            font-size: 2rem;
        }
    
    }   
    .card{
   
            padding: 3.5rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            text-align: center;
            box-shadow: 3px 3px 10px rgba(0,0,0,.2);

            @include respond(tab-land){
             margin-bottom: 3rem;
           
        }

            @include respond(phone){
                 padding:  2rem 1rem;
             }

            &-1{
                background-color: rgb(255,255, 255);
                
            }

            &-2{
               /*  grid-column: 5/8; */
                background-color: #06070f;
                color: rgb(235, 232, 232);
                position: relative;
            }

            &-3{
                background-color: rgb(255,255, 255);
            }

            & h3{
                font-weight: 700;
                font-size: 2.7rem;
                margin: 2.5rem; 

                @include respond(laptop){
                    font-size: 2.4rem;
                }

                @include respond(phone){
                    font-size: 2rem;
                }         
            }

            & h4{
                text-transform: uppercase;    
                @include respond(phone){
                    font-size: .9rem;
                }            
            }

            & h4:after{
                content: "";
                height: 1px;
                width: 45%;
                margin: 1rem auto;
                display: block;
                background-color: #ccc;
               
            }

            & p{
                margin: .5rem;

                @include respond(phone){
                    font-size: .9rem;
                }   
            }

            & .final:after{
                content: "";
                height: 5px;
                width: 45%;
                margin: 2rem auto;
                display: block;
                background-color: #06070f;

                @include respond(phone){
                    height: 3px;
                } 
            }   


        }

        .ribbon {
            position: absolute;
            left: -5px; top: -5px;
            z-index: 1;
            overflow: hidden;
            width: 75px; height: 75px;
            text-align: right;
        }
        .ribbon span {
            font-size: 10px;
            font-weight: bold;
            color: #FFF;
            text-transform: uppercase;
            text-align: center;
            line-height: 20px;
            letter-spacing: 1.2px;
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
            width: 100px;
            display: block;
            background: #79A70A;
            background: linear-gradient(#17909b 0%, #0a5258 100%);
            box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
            position: absolute;
            top: 19px; left: -21px;
        }
        .ribbon span::before {
            content: "";
            position: absolute; left: 0px; top: 100%;
            z-index: -1;
            border-left: 3px solid #17909b;
            border-right: 3px solid transparent;
            border-bottom: 3px solid transparent;
            border-top: 3px solid #17909b;
            }
            .ribbon span::after {
            content: "";
            position: absolute; right: 0px; top: 100%;
            z-index: -1;
            border-left: 3px solid transparent;
            border-right: 3px solid #17909b;
            border-bottom: 3px solid transparent;
            border-top: 3px solid #17909b;
        }


          
</style>