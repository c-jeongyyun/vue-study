const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
      reviews: [],
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeFromCart(id) {
      const idx = this.cart.findIndex((itemId) => itemId === id);
      this.cart.splice(idx, 1);
    },
    addReview(review) {
      this.reviews.push(review);
    },
  },
});
