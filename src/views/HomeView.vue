<template>
  <div class="home">
    <div class="line1">
      <h4>PLANTING, GROWING & REARING</h4>
    </div>
    <div class="line2">
      <h3>Growing more than just crops, cultivating a sustainable future.</h3>
    </div>
    <div class="line3">
      <p>From seed to harvest, we cultivate success and excellence while growing prosperity from ground up. Growing with nature and harvesting abundance right after sowing for a better future. Nurturing nature's bounty for bountiful harvests.</p>
    </div>
    <div class="line4">
      <a href="#">More about us.</a>
    </div>
    <div class="footer">
        <img src="../assets/images/apple.jpeg">
        <img src="../assets/images/banana.jpeg">
        <img src="../assets/images/pawpaw.jpeg">
        <img src="../assets/images/papple.jpeg">
        <img src="../assets/images/cabbage.jpeg">
        <img src="../assets/images/potato.jpeg">
        <img src="../assets/images/carrot.jpeg">
    </div>
  </div>
</template>

<script>
  // import apple from "./images/apple.jpeg"

export default {
  name: 'HomeView',
  components: {},
  // data: function
}
</script>

<style scoped>
  .home{
    width: 80%;
    margin: 0 auto;
    margin-top: 80px;
  }
  .line2{
    font-size: 3rem;
    font-weight: 900;
    width: 60%;
    margin: 0 auto;
    line-height: 1.2;
  } 

  img{
    height: 50px;
    margin-top: 2rem;
    padding: 0 30px;
  }
</style>
