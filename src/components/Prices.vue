<template>
    <div>
        <h2 class="title">Princing Options</h2>
        <div class="prices">
            <div class="card card-1">
                <h4>Student</h4>               
                <h3>$ 9.99</h3>
                <p>Some Amazing feature</p>
                <p>Some Student Exclusive Feat.</p>
                <p>Another Option</p>
                <p class="final">Final One</p>
            </div>

            <div class="card card-2">
                <div class="ribbon"><span>BEST</span></div>
                <h4>Professional</h4>               
                <h3>$ 19.99</h3>
                <p>Some Amazing feature</p>
                <p>Some Professional Exclusive Feat.</p>
                <p>Another Option</p>
                <p class="final">Final One</p>
            </div>

            <div class="card card-3">
                <h4>Master</h4>                
                <h3>$ 49.99</h3>
                <p>Some Amazing feature</p>
                <p>Some Master Exclusive Feat.</p>
                <p>Another Option</p>
                <p class="final">Final One</p>
            </div>

        </div>
    </div>
    
</template>

<style lang="scss" scoped>
    .prices{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 2rem;
        padding: 3% 7%;
    }
    .title{

        text-align: center;
        font-size: 4rem;
        font-weight: 100;
        margin-bottom: 1.8rem;
    
    }   
    .card{
   
            padding: 3.5rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            text-align: center;
            box-shadow: 3px 3px 10px rgba(0,0,0,.2);

            &-1{
                /* grid-column: 2/5; */
                
            }

            &-2{
               /*  grid-column: 5/8; */
                background-color: #06070f;
                color: rgb(235, 232, 232);
                position: relative;
            }

            &-3{
               /*  grid-column: 8/11; */
            }

            & h3{
                font-weight: 700;
                font-size: 3rem;
                 margin: 2.5rem;          
            }

            & h4{
                text-transform: uppercase;             
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
            }

            & .final:after{
                content: "";
                height: 5px;
                width: 45%;
                margin: 2rem auto;
                display: block;
                background-color: #06070f;
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