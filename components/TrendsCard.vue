<template>
    <div class="font-Archivo-Semibold uppercase md:text-xl text-start max-w-80 lg:mx-auto rounded-24 space-y-4">
        <div v-if="products" class="h-50 rounded-24 bg-cover bg-center w-72"
            :style="{ backgroundImage: `url(${products.product.featuredImage.url})` }">
        </div>
        <div>
            <p>{{ products.product.title }}</p>
            <p class="text-dark-gray">$99</p>
        </div>


    </div>
</template>

<script setup>
const { data: products } = await useFetch('https://mock.shop/api?query=%7B%20product(id%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F7982905098262%22)%20%7B%20id%20title%20description%20featuredImage%20%7B%20id%20url%20%7D%20%7D%7D', {
    transform: (_products) => _products.data
})

</script>

<style></style>