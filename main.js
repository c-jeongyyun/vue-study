const app = Vue.createApp({
  data() {
    return {
      brand: "Apple",
      product: "Socks",
      githubUrl: "https://github.com/c-jeongyyun",
      onSale: true,
      details: ["면 20%", "폴리에스터 70%", "울 10%"],
      selectedVariantIdx: 0,
      variants: [
        {
          id: "124",
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: "125",
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
      sizes: ["S", "M", "L"],
      cart: 0,
    };
  },
  methods: {
    removeFromCart() {
      if (this.cart > 0) this.cart -= 1;
    },
    updateVariant(idx) {
      this.selectedVariantIdx = idx;
    },
  },
  computed: {
    title() {
      const baseTitle = `${this.brand} ${this.product}`;
      if (this.onSale) return `${baseTitle} is on sale!`;
      return baseTitle;
    },
    selectedVariant() {
      return this.variants[this.selectedVariantIdx];
    },
    inventory() {
      return this.variants[this.selectedVariantIdx].quantity;
    },
    image() {
      return this.variants[this.selectedVariantIdx].image;
    },
  },
});
