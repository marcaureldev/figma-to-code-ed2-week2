<template>
  <div class="space-y-8">
  <div class="lg:flex justify-between items-center font-Archivo-Regular max-w-70 mx-auto text-gray-400 space-y-6 lg:space-y-0">
    <div class="space-y-4 max-w-35">
      <h1 class="classic-text font-Chillax-Bold text-5xl">BALLAMAS</h1>
      <p class="">Subscribe to our newsletter for upcoming products and best discount for all items</p>
      <div class="flex flex-wrap gap-3 items-center">
        <input type="email" name="email" id="email" placeholder="Your email"
          class="p-2 max:w-20 rounded-24 border border-white bg-transparent">
        <Button :button="submit" style="background-color: white; color: black;" class="max-w-32 py-2" />
      </div>
    </div>
    <div class="flex gap-5 sm:gap-10 sm:max-w-30">
      <div>
        <p class="text-white text-sm sm:text-lg font-semibold">Product</p>
        <ul class="text-sm space-y-1">
          <li>Jacket</li>
          <li>T-shirt</li>
          <li>Jacket</li>
          <li>Shoes</li>
          <li>Sunglasses</li>
        </ul>
      </div>

      <div>
        <p class="text-white text-sm sm:text-lg font-semibold">Categories</p>
        <ul class="text-sm space-y-1">
          <li>Man</li>
          <li>Woman</li>
          <li>Kids</li>
          <li>Gift</li>
          <li>New arrival</li>
        </ul>
      </div>

      <div>
        <p class="text-white text-sm sm:text-lg font-semibold">Our Social Media</p>
        <ul class="text-sm space-y-1">
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Youtube</li>
          <li>X</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="text-center text-gray-400">
    <p class="text-sm">&copy; BALLAMAS 2024 by <a href="https://github.com/marcaureldev" target="_blank" class="hover:underline">Marc-Aurel</a></p>
  </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      submit: 'Subscribe'
    }
  }
}
</script>

<style></style>