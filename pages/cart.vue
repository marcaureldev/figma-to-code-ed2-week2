<template>
    <div class="font-Archivo-Regular ">
        <div>
            <Navbar />
        </div>

        <div class="lg:flex justify-between items-center max-w-70 mx-auto space-y-5 lg:space-y-0 ">
            <div class="lg:w-[55em]">
                <div class="flex justify-between items-center p-2 mb-5">
                    <h1 class="text-3xl font-bold font-Chillax-Semibold">Cart({{ number }})</h1>
                    <div class="flex gap-3 items-center bg-gray-200 p-3 max-w-9 rounded-24">
                        <img src="/icons/trash-icon.svg" alt="Trash icon">
                        <p class="text-sm">Clear Cart</p>
                    </div>
                </div>

                <div class="px-4 py-3 space-y-4">
                    <div class="flex justify-between items-center">
                        <p>Products</p>
                        <p>Quantity</p>
                        <p>Price</p>
                    </div>
                    <hr>
                </div>

                <div class="px-4">
                    <div class="flex justify-between items-center">
                        <div class="flex gap-2 items-center">
                            <img src="/images/cart-picture.svg" alt="Picture Cart" class="w-12 sm:w-24 lg:w-24">
                            <div class="text-sm sm:text-lg">
                                <p>T-Shirt</p>
                                <p>Green-Large</p>
                                <p>$87</p>
                            </div>
                        </div>

                        <div class="bg-gray-200 p-3 max-w-[8em] sm:max-w-9 rounded-24">
                            <div class="flex gap-2 sm:gap-10 items-center">
                                <div class="flex gap-4 items-center">
                                    <img src="/icons/remove-icon.svg" alt="Remove icon" class="w-4">
                                    <p>{{ quantity }}</p>
                                    <img src="/icons/add-icon.svg" alt="Add icon" class="w-4">
                                </div>
                                <div>
                                    <img src="/icons/trash-icon.svg" alt="Trash Icon" class="w-4">
                                </div>
                            </div>
                        </div>
                        <p>${{ price }}</p>
                    </div>

                </div>
                <hr class="mt-5">
            </div>

            <div class="space-y-3 p-5 border max-w-15 mx-auto rounded-24">
                <h1 class="text-2xl font-bold">Order Summary</h1>
                <p class="flex justify-between items-center">Subtotal: <span>${{ subtotal }}</span></p>
                <p class="flex justify-between items-center">Discount: <span>${{ discount }}</span></p>
                <hr>
                <p class="flex justify-between items-center">
                    Order total:
                    <span class="font-bold">
                        ${{ total }}
                    </span>
                </p>
                <NuxtLink to="/checkout">
                    <Button :button="checkout" style="background-color: black; color: white;" class="mt-4 py-2" />
                </NuxtLink>
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
            checkout: 'Checkout Now',
            number: 0,
            quantity: 2,
            price: 174
        }
    }

}
</script>

<style></style>