const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
      githubUrl: "https://github.com/c-jeongyyun",
      inventory: 8,
      onSale: true,
      details: ["면 20%", "폴리에스터 70%", "울 10%"],
      variants: [
        { id: "124", color: "green", image: "./assets/images/socks_green.jpg" },
        { id: "125", color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
      sizes: ["S", "M", "L"],
      cart: 0,
    };
  },
  methods: {
    removeFromCart() {
      if (this.cart > 0) this.cart -= 1;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});
