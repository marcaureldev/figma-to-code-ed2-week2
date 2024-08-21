<template>
    <div>
        <div>
            <Navbar />
        </div>

        <div class="container max-w-70 mx-auto p-6 sm:p-2">
            <div class="flex flex-col lg:flex-row lg:space-x-16">

                <!-- Section gauche : Votre commande -->
                <div class="lg:w-1/2 w-full">
                    <h2 class="text-2xl font-bold mb-6">Checkout</h2>

                    <div class="space-y-4">
                        <!-- Produit 1 -->
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-4">
                                <img src="/images/cart-picture.svg" alt="T-Shirt" class="w-16 h-16 rounded-24">
                                <div>
                                    <h3 class="font-semibold">T-Shirt</h3>
                                    <p class="text-sm text-gray-500">Color: Green - Size: Large</p>
                                </div>
                            </div>
                            <p class="font-bold">$174.00</p>
                        </div>

                        <!-- Produit 2 -->
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-4">
                                <img src="/images/cart-picture.svg" alt="Men's Dri-FIT Golf Jacket"
                                    class="w-16 h-16 rounded-24">
                                <div>
                                    <h3 class="font-semibold">Men's Dri-FIT Golf Jacket</h3>
                                    <p class="text-sm text-gray-500">Color: Ocean - Size: Large</p>
                                </div>
                            </div>
                            <p class="font-bold">$100.00</p>
                        </div>

                        <!-- Produit 3 -->
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-4">
                                <img src="/images/cart-picture.svg" alt="Tatum 2 'Red Cement'"
                                    class="w-16 h-16 rounded-24">
                                <div>
                                    <h3 class="font-semibold">Tatum 2 "Red Cement"</h3>
                                    <p class="text-sm text-gray-500">Size: 15</p>
                                </div>
                            </div>
                            <p class="font-bold">$250.00</p>
                        </div>
                    </div>

                    <!-- Code promo -->
                    <div class="mt-6">
                        <input type="text" placeholder="Add discount code"
                            class="w-2/3 p-2 border border-gray-300 rounded-l-md">
                        <button class="w-1/3 p-2 bg-black text-white rounded-r-md">Apply</button>
                    </div>

                    <!-- Sous-total et total -->
                    <div class="mt-6 space-y-2">
                        <div class="flex justify-between">
                            <p>Subtotal</p>
                            <p>$524.00</p>
                        </div>
                        <div class="flex justify-between">
                            <p>Discount</p>
                            <p>$0.00</p>
                        </div>
                        <div class="flex justify-between font-bold">
                            <p>Order total</p>
                            <p>$524.00</p>
                        </div>
                    </div>

                    <!-- Méthode de livraison -->
                    <div class="mt-6">
                        <h3 class="font-bold mb-2">Shipping method</h3>
                        <div class="space-y-4">
                            <div class="border border-black rounded-24 p-2 py-4 w-full">
                                <label class="flex items-center space-x-2">
                                    <input type="radio" name="shipping" class="form-radio" checked>
                                    <span>Free shipping</span>
                                    <span class="ml-auto">$0.00</span>
                                </label>
                            </div>
                            <div class="border border-black rounded-24 p-2 py-4 w-full">
                                <label class="flex items-center space-x-2">
                                    <input type="radio" name="shipping" class="form-radio">
                                    <span>Regular shipping</span>
                                    <span class="ml-auto">$7.50</span>
                                </label>
                            </div>
                            <div class="border border-black rounded-24 p-2 py-4 w-full">
                                <label class="flex items-center space-x-2">
                                    <input type="radio" name="shipping" class="form-radio">
                                    <span>Express shipping</span>
                                    <span class="ml-auto">$22.50</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Section droite : Détails de paiement -->
                <div class="lg:w-1/2 w-full mt-12 lg:mt-0">
                    <div class=" mb-5">
                        <h3 class="font-bold">Payment details</h3>
                        <p>Complete your purchase by providing your payment details.</p>
                    </div>

                    <!-- Adresse de livraison -->
                    <div class="space-y-4">
                        <div class="sm:flex sm:space-x-4 space-x-0 space-y-3 sm:space-y-0">
                            <input type="text" placeholder="First name"
                                class="w-full sm:w-1/2 p-2 border border-black rounded-24">
                            <input type="text" placeholder="Last name" class="w-full sm:w-1/2 p-2 border border-black rounded-24">
                        </div>

                        <div class="sm:flex sm:space-x-4 space-x-0 space-y-3 sm:space-y-0">
                            <input type="email" placeholder="Email address"
                                class="w-full p-2 border border-black rounded-24">
                            <input type="text" placeholder="Phone number"
                                class="w-full p-2 border border-black rounded-24">
                        </div>

                        <div class="sm:flex sm:space-x-4 space-x-0 space-y-3 sm:space-y-0">
                            <input type="text" placeholder="Address" class="w-full p-2 border border-black rounded-24">
                            <input type="text" placeholder="City" class="w-full p-2 border border-black rounded-24">
                        </div>


                        <div class="sm:flex sm:space-x-4 space-x-0 space-y-3 sm:space-y-0">
                            <select class="w-full p-2 border border-black rounded-24">
                                <option>Select region</option>
                            </select>
                            <input type="text" placeholder="Postal code"
                                class="w-full p-2 border border-black rounded-24">
                        </div>
                        <div class=" space-x-4">

                        </div>
                    </div>

                    <!-- Méthode de paiement -->
                    <div class="mt-6">
                        <h3 class="font-bold mb-2">Select payment method</h3>
                        <div class="sm:flex sm:space-x-4 space-x-0 space-y-3 sm:space-y-0 items-center">
                            <div class="border border-black p-2 w-full">
                                <img src="/icons/debit-card-icon.svg" alt="Debit Card">
                                <label class="flex items-center space-x-2">
                                    <input type="radio" name="payment" class="form-radio" checked>
                                    <span>Debit / Credit Card</span>
                                </label>
                            </div>
                            <div class="border border-black p-2 w-full">
                                <img src="/icons/virtual-account-icon.svg" alt="Virtual Account">
                                <label class="flex items-center space-x-2">
                                    <input type="radio" name="payment" class="form-radio">
                                    <span>Virtual account</span>
                                </label>
                            </div>
                        </div>
                        <div class="mt-8 space-y-4">
                            <input type="text" placeholder="Card number"
                                class="w-full p-2 border border-black rounded-24">
                            <div class="flex space-x-4 mt-6">
                                <input type="text" placeholder="Expiration date (MM/YY)"
                                    class="w-1/2 p-2 border border-black rounded-24">
                                <input type="text" placeholder="Security code"
                                    class="w-1/2 p-2 border border-black rounded-24">
                            </div>
                        </div>
                        <label class="flex items-center mt-4">
                            <input type="checkbox" class="form-checkbox">
                            <span class="ml-2">Use shipping address as billing address</span>
                        </label>
                    </div>

                    <!-- Bouton de paiement -->
                    <div class="mt-6">
                        <button class="w-full bg-black text-white p-4 rounded-24">
                            Pay $524.00
                        </button>
                    </div>
                </div>
            </div>
        </div>


        <div class="mt-16 bg-black p-5">
            <Footer />
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>