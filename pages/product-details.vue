<template>
    <div>
        <div>
            <Navbar />
        </div>

        <div
            class="max-w-70 mx-auto space-y-4 lg:space-y-0 font-Archivo-Regular lg:flex justify-center gap-10 p-5 items-center">
            <img src="/images/badacore.svg" alt="Badacore T-shirt" class="lg:w-30 sm:mx-auto">
            <div class="space-y-4 max-w-35 mx-auto ">
                <h1 class="font-Chillax-Semibold text-2xl sm:text-4xl font-bold">Badacore T-shirt</h1>
                <div class="space-y-2">
                    <p class="text-2xl sm:text-4xl font-medium">CAD $80</p>
                    <p class="text-2xl sm:text-4xl font-medium">Color: Green</p>
                    <div class="flex gap-3 items-center">
                        <img src="/icons/ellipse-green.svg" alt="Ellipse green">
                        <img src="/icons/ellipse-purple.svg" alt="Ellipse purple">
                        <img src="/icons/ellipse-ocean.svg" alt="Ellipse ocean">
                        <img src="/icons/ellipse-olive.svg" alt="Ellipse olive">
                    </div>
                    <p class="text-2xl sm:text-4xl font-medium">Size</p>
                    <div class="flex gap-3 items-center">
                        <Button :button="xs" style="background-color: black; color: white;" class="py-2 w-12" />
                        <Button :button="s" style="background-color: transparent; color: black;"
                            class=" py-2 w-12 border border-black" />
                        <Button :button="m" style="background-color: transparent; color: black;"
                            class=" py-2 w-12 border border-black" />
                        <Button :button="l" style="background-color: transparent; color: black;"
                            class=" py-2 w-12 border border-black" />
                        <Button :button="xl" style="background-color: transparent; color: black;"
                            class="py-2 w-12 border border-black" />
                    </div>
                    <div class="flex gap-5 items-center mt-4">
                        <Button :button="buy" style="background-color: black; color: white;" class="py-2" />
                        <Button :button="add" style="background-color: transparent;" class="py-2 border border-black" />
                    </div>
                </div>
                <div class="">
                    <h1 class="text-2xl sm:text-4xl font-Chillax-Regular font-medium">Description</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                        interdum,
                        ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                        inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                    </p>
                </div>
            </div>
        </div>

        <div class="max-w-70 mx-auto">
            <h1 class="text-4xl font-Chillax-Semibold font-bold">You may also like</h1>
            <div
                class="mt-9">
                <TrendsCard />
            </div>
        </div>

        <div class="mt-16 bg-black p-5">
            <Footer />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            xs: 'XS',
            s: 'S',
            m: 'M',
            l: 'L',
            xl: 'XL',
            buy: 'BUY NOW',
            add: 'ADD TO CART',
        }
    }

}
</script>

<style>
.classic-text {
    color: transparent;
    -webkit-text-stroke: 2px white;
}

@media (max-width: 600px) {
    .product {
        display: grid;
        grid-template-columns: 1fr;
    }
}
</style>