app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    ` 
    <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img
          :src="image"
          :class="{'out-of-stock-img' : inventory===0}"
          alt="product-image"
        />
      </div>

      <div class="product-info">
        <h1>{{title}}</h1>
        <p>
          <span v-if="inventory > 10">재고 있음</span>
          <span v-else-if="inventory < 10 && inventory > 0">
            매진 임박!
          </span>
          <span v-else>매진</span>
        </p>
        <p>배송: {{shipping}}</p>
        <p v-show="!onSale">세일 중</p>

        <h4>세부정보</h4>
        <product-details :details="details"></product-details>
        <h4>색상</h4>
        <ul>
          <li
            class="color-circle"
            v-for="(variant, idx) in variants"
            :style="{backgroundColor: variant.color}"
            :key="variant.id"
            @mouseover="updateVariant(idx)"
          />
        </ul>

        <h4>사이즈</h4>
        <ul>
          <li v-for="size in sizes">{{size}}</li>
        </ul>
        <div class="button-container">
          <button
            class="button"
            v-on:click="addToCart"
            :class="{disabledButton: inventory===0 }"
          >
            장바구니에 담기
          </button>
          <button v-on:click="removeFromCart" class="button">
            장바구니에서 빼기
          </button>
        </div>
      </div>
    </div>
  </div>
  
  `,

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
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariantIdx].id);
    },
    removeFromCart() {
      this.$emit("remove-from-cart", this.variants[this.selectedVariantIdx].id);
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
    shipping() {
      if (this.premium) return "무료";
      return "$2.99";
    },
  },
});
