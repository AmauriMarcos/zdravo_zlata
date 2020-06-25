<template>
    <div class="prices">
        <div class="prices__header">

        </div>
    </div>
</template>

<style lang="scss" scoped>
    .prices{
        display: grid;
        grid-template-columns: repeat(12, 1fr);

        &__header{
            grid-column: 1/-1;
            grid-row: 1/2;
            height: 10rem;
            background-color: rgb(228, 228, 228);
        }
    }
</style>