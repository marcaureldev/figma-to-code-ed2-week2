<template>
    <div>
        <div>
            <Navbar />
        </div>

        <div v-if="product"
            class="max-w-70 mx-auto space-y-4 lg:space-y-0 font-Archivo-Regular lg:flex justify-center gap-10 p-5 items-center">
            <img :src="selectedVariantImage" :alt="product.title" class="lg:w-30 sm:mx-auto">
            <div class="space-y-4 max-w-35 mx-auto ">
                <h1 class="font-Chillax-Semibold text-2xl sm:text-4xl font-bold">{{ product.title }}</h1>
                <div class="space-y-2">
                    <p class="text-2xl sm:text-4xl font-medium">
                        {{ product.variants.edges[0]?.node.price.currencyCode }}
                        ${{ product.variants.edges[0]?.node.price.amount }}
                    </p>
                    <p class="text-2xl sm:text-4xl font-medium">Color: {{selectedColor}}</p>
                    <div class="flex gap-3 items-center">
                        <img @click="changeColor('Green')" src="/icons/ellipse-green.svg" alt="Ellipse green">
                        <img @click="changeColor('Purple')" src="/icons/ellipse-purple.svg" alt="Ellipse purple">
                        <img @click="changeColor('Ocean')" src="/icons/ellipse-ocean.svg" alt="Ellipse ocean">
                        <img @click="changeColor('Olive')" src="/icons/ellipse-olive.svg" alt="Ellipse olive">
                    </div>
                    <p class="text-2xl sm:text-4xl font-medium">Size</p>
                    <div class="flex gap-3 items-center">
                        <Button button="XS" style="background-color: black; color: white;" class="py-2 w-12" />
                        <Button button="S" style="background-color: transparent; color: black;"
                            class=" py-2 w-12 border border-black" />
                        <Button button="M" style="background-color: transparent; color: black;"
                            class=" py-2 w-12 border border-black" />
                        <Button button="L" style="background-color: transparent; color: black;"
                            class=" py-2 w-12 border border-black" />
                        <Button button="XL" style="background-color: transparent; color: black;"
                            class="py-2 w-12 border border-black" />
                    </div>
                    <div class="flex space-x-6 items-center">
                        <NuxtLink to="/checkout">
                            <Button button="BUY NOW" style="background-color: black; color: white;" class="py-2" />
                        </NuxtLink>
                        <NuxtLink to="/cart">
                            <Button button="ADD TO CART" style="background-color: transparent;"
                                class="py-2 border border-black" />
                        </NuxtLink>
                    </div>
                </div>
                <div class="">
                    <h1 class="text-2xl sm:text-4xl font-Chillax-Regular font-medium">Description</h1>
                    <p class="text-justify">
                        {{ product.description }}
                    </p>
                </div>
            </div>
        </div>

        <div class="max-w-70 mx-auto">
            <h1 class="text-4xl font-Chillax-Semibold font-bold">You may also like</h1>
            <div class="mt-9">
                <RecommandCard />
            </div>
        </div>

        <div class="mt-16 bg-black p-5">
            <Footer />
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const partialId = route.params.id
const productId = `gid://shopify/Product/${partialId}`

// Construisez la requête GraphQL pour un seul produit
const query = `
query($id: ID!) {
  product(id: $id) {
    id
    title
    description
    featuredImage {
      id
      url
    }
    variants(first: 4) {
      edges {
        cursor
        node {
          id
          title
          image {
            url
          }
          price {
            amount
            currencyCode
          }
        }
      }
    }
  }
}
`

// Utilisez useFetch pour récupérer les données du produit spécifique
const { data, error } = await useFetch('https://mock.shop/api', {
    method: 'POST',
    body: JSON.stringify({
        query: query,
        variables: { id: productId }
    }),
    headers: {
        'Content-Type': 'application/json'
    },
    transform: (response) => response.data.product,

})

// Utilisez un computed pour accéder facilement aux données du produit
const product = computed(() => data.value)

const selectedColor = ref('Green') // Couleur par défaut

// Fonction pour changer la couleur sélectionnée
const changeColor = (color) => {
  selectedColor.value = color
}


// Computed property pour obtenir l'image de la variante sélectionnée
const selectedVariantImage = computed(() => {
  if (!product.value) return null
  const variant = product.value.variants.edges.find(edge => 
    edge.node.title.includes(selectedColor.value)
  )
  return variant ? variant.node.image.url : product.value.featuredImage?.url
})
</script>