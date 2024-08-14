<template>
    <section>
        <div>
            <Navbar />
        </div>

        <div
            class="mt-9 max-w-70 mx-5 lg:mx-auto hero-section bg-hero-section bg-center bg-cover h-25 sm:h-30 rounded-52 font-Archivo-Regular">
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

        <div class="max-w-70 mx-5 lg:mx-auto hero-section text-center mt-16">
            <h1 class="font-Chillax-Semibold font-bold text-2xl mx-auto mt-16">
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
            <div class="mt-9  product">
                <TrendsCard />
            </div>

            <div class="flex justify-center items-center">
                <Button :button="more" style="background-color: transparent; color: black;"
                    class="w-32 py-2 border border-black" />
            </div>
        </div>

        <div class="mt-16 max-w-70 mx-auto hero-section text-center">
            <h1 class="uppercase text-2xl md:text-4xl font-Chillax-Semibold">Our Collection</h1>
            <p class="font-Archivo-Regular text-dark-gray mx-5 ">
                Our latest collection, where classic and contemporary styles
                converge in perfect harmony.
            </p>
            <div class="flex flex-row justify-center gap-5 items-center mt-9 collection">
                <div class="bg-tech-mens bg-center bg-cover w-20 sm:w-25 sm:ml-5 rounded-24 h-30 relative">
                    <Button :button="learn" picture="/icons/arrow.svg" style="background-color: white; color: black;"
                        class="w-44 py-2 absolute bottom-2 right-20" />
                </div>
                <div
                    class="bg-abraham-george bg-center bg-cover w-20 sm:w-40 sm:mr-5 rounded-24 h-30 flex justify-center items-center">
                    <div class="space-y-2">
                        <h1 class="uppercase font-Chillax-Bold text-4xl sm:text-5xl classic-text">Classic Men</h1>
                        <p class="text-white font-Archivo-Regular font-medium sm:text-xl">
                            We’re changing the way things get
                            made
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-24 p-10 bg-black">
            <Footer></Footer>
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
            more: 'View More',
            learn: 'LEARN MORE',
        }
    }

}
</script>

<style>
@media (max-width: 600px) {
    .product {
        display: grid;
        grid-template-columns: 1fr;
    }
}

@media (max-width: 540px) {
    .collection {
        display: flex;
        flex-direction: column-reverse;
    }
}

@media (min-width: 1024px) and (max-width: 1124px) {
    .hero-section {
        margin: 0px 10px;
    }
}

.classic-text {
    color: transparent;
    -webkit-text-stroke: 2px white;
}
</style>