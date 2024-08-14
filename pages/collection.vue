<template>
  <section class="font-Archivo-Regular">
    <div>
      <Navbar></Navbar>
    </div>

    <div class="max-w-70 mx-auto space-y-8 mt-9">
      <h1 class="text-center text-5xl font-bold font-Chillax-Semibold">Our Collection</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mx-10 md:mx-5">
        <div v-for="collection in collections.collections.edges" :key="collection.node.id" class="text-center">
          <div :style="{ backgroundImage: `url(${collection.node.image?.url || ''})` }"
            class="h-50 bg-cover bg-center p-2">
          </div>
          <p class="text-start text-2xl font-bold capitalize">{{ collection.node.handle }}</p>
        </div>
      </div>
    </div>

    <div class="bg-black p-10 mt-36">
      <Footer></Footer>
    </div>
  </section>
</template>

<script setup>
const { data: collections } = await useFetch('https://mock.shop/api?query=%7B%20collections(first%3A%2010)%20%7B%20edges%20%7B%20cursor%20node%20%7B%20id%20handle%20title%20description%20image%20%7B%20id%20url%20%7D%20%7D%20%7D%20%7D%7D', {
  transform: (_collections) => _collections.data
})

console.log(toRaw(collections.value))
</script>

<style>
.classic-text {
  color: transparent;
  -webkit-text-stroke: 2px white;
}
</style>
