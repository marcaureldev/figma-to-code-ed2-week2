<template>
  <div class="bg-white rounded-100 p-3 text-center rounded-full flex gap-2 items-center justify-center">
    {{ button }}
    <img :src="picture" alt=""> 
  </div>
</template>

<script>
export default {
    props: {
        button: String,
        picture: String,
    }

}
</script>

<style>

</style>