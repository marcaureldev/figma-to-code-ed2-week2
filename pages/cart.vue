<template>
    <div>
        <div>
            <Navbar />
        </div>

        <div>
            <h1 class>Cart({{number}})</h1>
        </div>

        <div class="mt-16 bg-black p-5">
            <Footer />
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            number: 0,
        }
    }

}
</script>

<style></style>