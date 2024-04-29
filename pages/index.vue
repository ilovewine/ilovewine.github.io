<template>
    <div class="container">
        <h1 class="gradient">This page is under construction</h1>
        <h2 class="gradient">Check again soon!</h2>
    </div>
</template>


<script lang="ts" setup>
</script>


<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.gradient {
    background-size: 100%;
    background-image: linear-gradient(to bottom right, #f7b733, #fc4a1a);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
h1 {
    font-size: 2rem;
    margin: 0 0 2rem;
}
h2 {
    margin: 0;
    font-size: 1.5rem;
}

@media (min-width: 480px) {
    h1 {
        font-size: 5rem;
    }
    h2 {
        font-size: 3rem;
    }
}

@media (min-width: 1024px) {
    h1 {
        font-size: 10rem;
    }
    h2 {
        font-size: 6rem;
    }
}
</style>