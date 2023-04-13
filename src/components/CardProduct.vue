<template>
  <div class="card shadow animate__animated animate__fadeInLeft">
    <b-card
      :title="product.nama"
      :img-src="'/assets/images/' + product.gambar"
      img-alt="Image"
    >
      <b-card-text> Harga: Rp. {{ product.harga }} </b-card-text>

      <router-link class="btn btn-success" :to="'/foods/' + product.id"
        ><b-icon-cart></b-icon-cart> Pesan</router-link
      >
    </b-card>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>

<style>
</style>