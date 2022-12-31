<template>
    <div>
        <title>Housekeeper Admin Dashboard</title>
       
          <!-- side navigation -->
        <userSideBar/>

       
   <!-- Main content -->
    <div class="main-content">
      <!-- Header -->
      <div class="header bg-background pb-6 pt-5 pt-md-6">
      <div class="container-fluid">
       
      
      <Header/>
     
      </div>
    </div>
    <!-- Page content -->
    <div class="container-fluid mt--5">
      <div class="row mt-2 pb-5">
        <div class="col-xl-12 mb-5 mb-xl-0">
          <div class="card shadow">
            <div class="card-header border-0">
              <div class="row align-items-center">
                <div class="col">
                  <h3 class="mb-0">Housekeeping</h3>
                </div>
              </div>
            </div>
            <div class="table-responsive">
              <!-- Projects table -->
              <table class="table align-items-center table-flush">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">Housekeeper</th>
                   
                    <th scope="col">Date</th>
                    <th scope="col">Time Requested</th>
                    <th scope="col">Time In</th>
                    <th scope="col">Time Out</th>
                  </tr>
                </thead>
                <tbody>
                    </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>




</template>
<script>
import userSideBar from './userSideBar.vue'
import Header from './Header.vue'

export default{
    name: "userDashVue",
    components: {
      userSideBar,
      Header

      
      }
}


</script>
<style>



</style>