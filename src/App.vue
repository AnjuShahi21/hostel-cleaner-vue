<template>
  <div id="app">
    <!-- <div class="d-flex gap-3"> -->
    <div class="container">
      <div class="row gap-3">
        <div class="col-3">
          <sidebar />
          <div class="col-9">
            <!-- <Header /> -->
            <router-view></router-view>
          </div>
        </div>
      </div>
      <sidebar />
      <userSideBar />
      <div>
      </div>
      </div>



    </div>


</template>
<script src="assets/vendor/jquery/dist/jquery.min.js"></script>
  <script src="assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/bootstrap/dist/js/bootstrap-datepicker.min.js"></script>
  <script src="assets/js/argon.min.js"></script>

<script>
import Sidebar from './components/Sidebar.vue';
import userSideBar from './components/userSideBar.vue';
import Header from'./components/Header.vue'


export default {
  name: 'App',
  components: {
    Sidebar,
    userSideBar,
    Header
 
   

  }
}
</script>


<style>
.card {
  box-shadow: 10px 10px 5px #3835315e;
}
</style>
