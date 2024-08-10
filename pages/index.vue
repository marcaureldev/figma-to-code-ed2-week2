<template>
    <section>
        <div>
            <Navbar />
        </div>

        <div
            class="mt-9 max-w-70 mx-5 lg:mx-auto bg-hero-section bg-center bg-cover h-25 sm:h-30 rounded-52 font-Archivo-Regular">
            <div class="bg-black text-white bg-opacity-40 h-25 sm:h-30 rounded-52 flex justify-center items-center">
                <div class="text-center space-y-8">
                    <div class="flex justify-center items-center gap-5">
                        <div class="w-8 sm:w-24 ml-5 bg-white border"></div>
                        <div>
                            <p class="text-xs sm:text-sm">We bring new fashion to the world</p>
                        </div>
                        <div class="w-8 sm:w-24 mr-5 bg-white border"></div>
                    </div>
                    <div class=" space-y-3">
                        <h1 class="text-2xl sm:text-4xl lg:text-5xl mx-5 font-Chillax-Bold">DISCOVER THE LATEST FASHION
                            TRENDS HERE</h1>
                        <p class="max-w-35 sm:mx-auto mx-5 text-xs sm:text-sm">
                            Discover a world of fashion with our meticulously cirated outfits. Shop now to update your
                            wardrobe with chic and stylish outfits
                        </p>
                    </div>
                    <div class="flex justify-center items-center">
                        <Button :button="button" class="text-black" />
                        <div class="w-12 h-12 rounded-24 bg-white flex justify-center">
                            <img src="/icons/arrow.svg" alt="Arrow icon" class="w-8">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="max-w-70 mx-5 lg:mx-auto text-center mt-16">
            <h1 class="font-Chillax-Semibold font-bold text-2xl mx-auto">
                Discover the latest trends in summer fashion. Shop now and refresh your wardrobe with our our stylish
                summer shirts
            </h1>
            <div class="mt-16">
                <div class="flex flex-wrap justify-center gap-5 items-center">
                    <Button :button="all" style="background-color: black; color: white;" class=" py-2 w-24 mx-4" />
                    <Button :button="accessories" style="background-color: transparent; color: black;"
                        class=" py-2 border border-black" />
                    <Button :button="featured" style="background-color: transparent; color: black;"
                        class=" py-2 border border-black" />
                    <Button :button="unisex" style="background-color: transparent; color: black;"
                        class=" py-2 border border-black" />
                </div>
            </div>
            <div class="mt-9 grid grid-cols-2 lg:grid-cols-3 place-items-center gap-2 max-w-70 mx-auto product">
                <TrendsCard v-for="(product, index) in 6" :key="index" />
            </div>
        </div>

        <div class="flex justify-center items-center">
            <Button :button="more" style="background-color: transparent; color: black;"
                class="w-32 py-2 border border-black" />
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            button: 'Start shopping',
            all: 'All',
            accessories: 'Accessories',
            featured: 'Featured',
            unisex: 'Unisex',
            more: 'View More'
        }
    }

}
</script>

<style>
@media (max-width: 500px) {
    .product {
        display: grid;
        grid-template-columns: 1fr;
    }

}
</style>