<template>
  <div class="flex flex-col" style="height: 100vh;">
    <!-- <TheHeader /> -->
    <Nuxt />
    <!-- <TheFooter /> -->
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap');
body {
    font-family: 'Plus Jakarta Sans', sans-serif;
}

section.hero {
    min-height: 95vh;
    background: linear-gradient(172deg,#2e4e72 40%,#c6dc94 140%);
    overflow: hidden;
}

section.hero a {
    margin-top: 1rem;
    font-weight: 700;
}

.button.is-large {
    font-size: 1.5rem;
}

.button.is-primary.is-outlined {
    background-color: transparent;
    border-color: #4ad9df;
    color: #4ad9df;
}

.button.is-success {
    background-color: #20bc44;
    border-color: transparent;
    color: #fff;
}

.section .button:hover {
    transform: translateY(-2px);
    box-shadow: 2px 2px 2px #364e6a;
}

button.is-primary.is-outlined:hover {
    background-color: #4ad9df;
    border-color: #4ad9df;
    color: rgba(0,0,0,.7);
}

.section .button:hover {
    transform: translateY(-2px);
    box-shadow: 2px 2px 2px #364e6a;
}

.button.is-success:hover {
    background-color: #1eb140;
    border-color: transparent;
    color: #fff;
}
.button {
    background-color: #fff;
    border-color: #dbdbdb;
    border-width: 1px;
    color: #363636;
    cursor: pointer;
    justify-content: center;
    padding: calc(0.5em - 1px) 1em;
    text-align: center;
    white-space: nowrap;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: none;
    display: inline-flex;
    font-size: 1rem;
    height: 2.5em;
    justify-content: flex-start;
    line-height: 1.5;
    padding: calc(0.5em - 1px) calc(0.75em - 1px);
    position: relative;
    vertical-align: top;
}

.button {}
</style>
