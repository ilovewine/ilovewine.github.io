<template>
  <Head>
    <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <Link rel="manifest" href="/site.webmanifest" />
    <Link rel="preconnect" href="https://fonts.googleapis.com" />
    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <Link
      href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
      rel="stylesheet"
    />
    <Meta name="msapplication-TileColor" content="#da532c" />
    <Meta name="theme-color" content="#ffffff" />
    <Title>Perfect Codeist - ilovewine</Title>
  </Head>
  <Body>
    <!-- <TheHeader /> -->
    <main class="container">
      <NuxtPage />
    </main>
    <!-- <TheFooter /> -->
  </Body>
</template>

<script setup lang="ts">
  import TheHeader from "./components/header/TheHeader.vue";
  import TheFooter from "./components/footer/TheFooter.vue";
</script>

<style>
  * {
    box-sizing: border-box;
    font-family: "Josefin Sans", sans-serif;
    font-optical-sizing: auto;
  }

  body {
    background-color: #000;
    margin: 0;
  }
</style>

<style scoped>
  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
