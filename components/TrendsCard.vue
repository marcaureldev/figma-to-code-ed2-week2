<template>
    <div class="font-Archivo-Semibold uppercase md:text-xl text-start lg:mx-auto rounded-24 space-y-4">
        <div v-if="products"
            class="grid grid-cols-2 lg:grid-cols-3 place-items-center gap-8 md:max-w-45 lg:max-w-70 md:mx-auto product">
            <div v-for="(product, index) in products.products.edges.slice(0, 6)" :key="index" class="space-y-2">
                <div class="h-50 rounded-24 bg-cover bg-center w-72"
                    :style="{ backgroundImage: `url(${product.node.featuredImage?.url || ''})` }">
                </div>
                <p>{{ product.node.title }}</p>
                <p class="text-dark-gray">
                    {{ product.node.variants.edges[0]?.node.price.amount || 'N/A' }}
                    {{ product.node.variants.edges[0]?.node.price.currencyCode || '' }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data: products } = await useFetch('https://mock.shop/api?query=%7B%20products(first%3A%2020)%20%7B%20edges%20%7B%20node%20%7B%20id%20title%20description%20featuredImage%20%7B%20id%20url%20%7D%20variants(first%3A%203)%20%7B%20edges%20%7B%20node%20%7B%20price%20%7B%20amount%20currencyCode%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D', {
    transform: (_products) => _products.data
})
</script>

<style></style>