<template>
    <div class="navigation">
        <div class="brand">
            <img src="../../public/img/ser.svg" alt="Serbia flag">
            <p>Uči </p>
            <p>Srpski</p>
        </div>
        <ul class="list">
            <li>Home</li>
            <li>About me</li>
            <li>Plans</li>
            <li>Contact</li>
        </ul>
        
    </div>
</template>

<script>
export default {
 
};
</script>

<style scoped lang="scss">
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

    .navigation{
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        background-color: rgba(0,0,0,.8);
        height: 4rem;
        padding: 1.5rem;
        justify-content: center;
        align-content: center;

        
        @include respond(phone){
            
        } 
    }

    .list{
        grid-column: 3/-1;
        grid-row: 1/2;
        list-style: none;
        display: flex;
        margin-left: 5rem;

        @include respond(phone){
             display: none;
        } 
        
    }

    .list li{
        color: #ccc;
        font-weight: 400;
        margin: 1rem;       
    }

    .brand{
        grid-column: 1/4;
        grid-row: 1/2;
        color: #ccc;
        align-self: center;
        letter-spacing: .1rem;
        font-size: 1.1rem;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;

         @include respond(phone){
            
        } 

        & p {
            font-size: 1.2rem;
            font-weight: 600;
            margin: .15rem;

            @include respond(phone){
                font-size: .8rem;
                font-weight: 400;
                color: #fff;
            } 
        }
    }

    .brand img{
       height: 2.5rem;
       width: 2.5rem;
       margin: 0 1.5rem;

        @include respond(phone){
            height: 1.7rem;
            width: 1.7rem;
            margin-right: 1rem;
            font-weight: 300;
        } 
    }
</style>
