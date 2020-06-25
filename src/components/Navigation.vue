<template>
    <div class="navigation">
        <div class="brand">
            <img src="../../public/img/serbjia.svg" alt="Serbia flag">
            <p>Učim sa Zlatom</p> 
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
    .navigation{
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        background-color: #06070f;
        height: 4rem;
        padding: 1.5rem;
        justify-content: center;
        align-content: center;
    }

    .list{
        grid-column: 3/-1;
        grid-row: 1/2;
        list-style: none;
        display: flex;
        margin-left: 5rem;
        
    }

    .list li{
        color: #ccc;
        font-weight: 700;
        margin: 1rem;
    }

    .brand{
        grid-column: 1/3;
        grid-row: 1/2;
        color: #ccc;
        align-self: center;
        letter-spacing: .1rem;
        font-size: 1.1rem;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .brand img{
       height: 2.5rem;
       width: 2.5rem;
       margin: 0 1.5rem;
    }
</style>
