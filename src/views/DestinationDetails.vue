<template>
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>

<script>
import store from "@/store.js";
export default {
  data() {
    return {
      destinationId: this.$route.params.id
    };
  },
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.id === this.destinationId
      );
    }
  }
};
</script>

<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.experiences {
  padding: 40px 0;
}
.destination-details {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
.cards {
  display: flex;
  justify-content: space-between;
}
.cards img {
  max-height: 200px;
}
.card {
  padding: 0 20px;
  position: relative;
}
.card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}
</style>
