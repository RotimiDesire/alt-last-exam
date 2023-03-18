<template>
 <div class="products">
  <!-- <h1>This is the product page</h1> -->
  <div class="product" v-for="product in products" :key="product">
   <img :src="product.product" />
   <h2>{{ product.name }}</h2>
  </div>
 </div>
</template>

<script>
  import banana from "../assets/images/banana.jpeg"
  import papple from "../assets/images/papple.jpeg"
  import apple from "../assets/images/apple.jpeg"
  import cabbage from "../assets/images/cabbage.jpeg"
  import carrot from "../assets/images/carrot.jpeg"
  import yam from "../assets/images/yam.jpeg"
  import pepper from "../assets/images/pepper.jpeg"
  import pawpaw from "../assets/images/pawpaw.jpeg"
  import onions from "../assets/images/onions.jpeg"
  import cashew from "../assets/images/cashew.jpeg"
  import cucumber from "../assets/images/cucumber.jpeg"
  import eggplant from "../assets/images/eggplant.jpeg"
  import garlic from "../assets/images/garlic.jpeg"
  import grapes from "../assets/images/grapes.jpeg"
  import groundnut from "../assets/images/groundnut.jpeg"
  import maize from "../assets/images/maize.jpeg"
  import mango from "../assets/images/mango.jpeg"
  import palmfruit from "../assets/images/palmfruit.jpeg"
  import peas from "../assets/images/peas.jpeg"
  import strawberry from "../assets/images/strawberry.jpeg"
  import sugarcane from "../assets/images/sugarcane.jpeg"
  import tangerines from "../assets/images/tangerines.jpeg"
  import watermelon from "../assets/images/watermelon.jpeg"
  import cassava from "../assets/images/cassava.jpeg"
  import potato from "../assets/images/potato.jpeg"
  import guava from "../assets/images/guava.jpeg"

export default {
 data() {
  return{
    products:[
     {product: banana, name: "Banana" },
     {product: papple, name: "Pineapple" },
     {product: apple, name: "Apple" },
     { product: cabbage, name: "Cabbage" },
     { product: carrot, name: "Carrot" },
     { product: yam, name: "Yam" },
     { product: pepper, name: "Pepper" },
     { product: pawpaw, name: "Pawpaw" },
     { product: onions, name: "Onions" },
     { product: cashew, name: "Cashew" },
     { product: cucumber, name: "Cucumber" },
     { product: eggplant, name: "Eggplant" },
     { product: garlic, name: "Garlic" },
     { product: grapes, name: "Grapes" },
     { product: groundnut, name: "Groundnut" },
     { product: mango, name: "Mango" },
     { product: maize, name: "Maize" },
     { product: palmfruit, name: "Palm-Fruit" },
     { product: peas, name: "Peas" },
     { product: strawberry, name: "Strawberry" },
     { product: sugarcane, name: "Sugarcane" },
     { product: tangerines, name: "Tangerines" },
     { product: watermelon, name: "Watermelon" },
     { product: cassava, name: "Cassava" },
     { product: potato, name: "Potato" },
     { product: guava, name: "Guava" },
    ]
  }
 }
}
</script>

<style scoped>
.products{
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 margin: 70px 0;
}
img{
 height: 20rem;
}

@media only screen and (max-width: 925px) {
  img {
    height: 17rem;
  }
}

@media only screen and (max-width: 850px) {
  img {
    height: 15rem;
  }

  @media only screen and (max-width: 600px) {
  img {
    height: 10rem;
  }
}

@media only screen and (max-width: 500px) {
  .products{
 display: grid;
 grid-template-columns: 1fr;
 margin: 70px 0;
}
  img {
    height: 10rem;
  }
}
}
</style>

