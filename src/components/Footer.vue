<template>
    <footer id="footer">
        <div class="part1">
         
        </div>
        <div class="part2">
            <p>Copyright &copy; Amauri Santos</p>
            <p>&mdash;</p>
            <p>Art Illustration by Sibbil</p>
        </div>
    </footer>
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

    .part1{
        background-color: rgb(175, 232, 215);
        height: 4rem;
    }

    .part2{
        background-color: rgba(0,0,0,.8);
        height: 11rem;  
        display: flex;
        justify-content: center;
        align-items: center;

        & p {
            color: rgb(255,255,255);
            font-size: 1rem;
            margin: 1rem;

            @include respond(phone){
                font-size: .75rem;
                
            }
        }

    }

</style>