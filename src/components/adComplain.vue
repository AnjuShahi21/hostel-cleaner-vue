<template>
<div>
    <title>Complaints - Housekeeper Admin Dashboard</title>
    <!-- sidebar -->
    <Sidebar/>
   
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
                  <h5 class="mb-0">Complaints Record</h5>
                </div>
              </div>
            </div>
            <div class="table-responsive">
              <!-- Projects table -->
              <table class="table align-items-center table-flush">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">HostelCleaner</th>
                    <th scope="col">Room</th>
                    <th scope="col">Date</th>
                    <th colspan="3">Complaint</th>
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
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'

export default{
    name:'AdminComplain',
    components:{
      Sidebar,
      Header
    
    }
}

</script>

<style>

</style>