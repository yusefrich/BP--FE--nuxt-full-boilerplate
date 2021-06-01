<template>
  <div class="bg-dark main-content container-fluid px-0 mx-0 w-100 d-flex">
    <div class="sidebar">
      <sidebar />
    </div>
    <div class="content w-100 mx-0">
      <user-navbar />
      <navbar />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import UserNavbar from '@/components/molecules/UserNavbar'
import Navbar from '@/components/molecules/Navbar'
import Sidebar from '@/components/atoms/Sidebar'
export default {
  components: { UserNavbar, Navbar, Sidebar }
}
</script>
<style lang="scss">
.sidebar{
  width: 200px;
}
.main-content{
  min-height: 100vh;
  width: 100% !important;
}
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
