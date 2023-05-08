<template>
  <div class="bg-[#0a1829] h-screen flex justify-center text-white">
    <div class="text-center img-barcode p-10">
      <h1 class="text-3xl">Scan QRCODE</h1>
      <div style="color: #fff" class="spinner-grow my-10" role="status"></div>
      <h4 class="mb-6">Please Wait. Resolving issues...</h4>
      <img
        class="w-full"
        src="https://chart.googleapis.com/chart?chs=500x500&amp;cht=qr&amp;chl=Reach%20out%20to%20Admin"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myVar: null,
    };
  },
  mounted() {
    this.redirectFunction();
  },
  methods: {
    redirectFunction() {
      let self = this;
      this.myVar = setInterval(function () {
        self.$router.push("/");
        self.myStopFunction();
      }, 5000);
    },
    myStopFunction() {
      clearInterval(this.myVar);
    },
  },
};
</script>

<style></style>
