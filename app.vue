<template>
  <Head>
    <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <Link rel="manifest" href="/site.webmanifest" />
    <Meta name="msapplication-TileColor" content="#da532c" />
    <Meta name="theme-color" content="#ffffff" />
    <Title>Perfect Codeist - ilovewine</Title>
  </Head>
  <Body>
    <the-header />
    <main>
      <NuxtPage />
    </main>
    <the-footer />
  </Body>
</template>

<script setup lang="ts">
  import TheHeader from "./components/header/TheHeader.vue";
  import TheFooter from "./components/footer/TheFooter.vue";
</script>
