<template>
  <div id="app">
    <!-- <div class="d-flex gap-3"> -->
            <router-view></router-view>
         
      </div>
      
</template>
<script src="assets/vendor/jquery/dist/jquery.min.js"></script>
  <script src="assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/bootstrap/dist/js/bootstrap-datepicker.min.js"></script>
  <script src="assets/js/argon.min.js"></script>

<script>
export default {
  name: 'AppVue',
  components: {
   AppVue

  }
}
</script>


<style>
.card {
  box-shadow: 10px 10px 5px #3835315e;
}
</style>
