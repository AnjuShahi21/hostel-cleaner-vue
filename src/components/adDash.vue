<template>
    <div>
        <title>Housekeeper Admin Dashboard</title>
        <body>
          <!-- side navigation -->
          
   <!-- Main content -->
    <div class="main-content">
      <!-- Header -->
      <div class="header bg-background pb-6 pt-5 pt-md-6">
      <div class="container-fluid">
        <!-- notification message -->
        <!-- <?php if (isset($_SESSION['admin_logged'])) : ?> -->
          <div class="alert bg-success bg-gradient alert-success alert-dismissible fade show" role="alert">
            <span class="alert-inner--icon"><i class="ni ni-like-2"></i></span>
            <span class="alert-inner--text"><strong>Welcome to online Hostel Cleaner admin portal.</strong>
            <!-- <?php echo $_SESSION['admin_logged']; unset($_SESSION['admin_logged']); ?> -->
          </span>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        <!-- <?php endif ?> -->

         <!-- notification message 
        <?php if (isset($_SESSION['worker_alloted'])) : ?> 
          <div class="alert alert-success alert-dismissible fade show" role="alert">
            <span class="alert-inner--icon"><i class="ni ni-like-2"></i></span>
            <span class="alert-inner--text"><strong><?php echo $_SESSION['worker_alloted']; ?></strong> 
           <?php unset($_SESSION['worker_alloted']); ?> 
          
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>  -->
        <!-- <?php endif ?> -->


        <!-- <?php require("allotheader.php"); ?> -->
      
     
     
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
                  <h5 class="mb-0 ">Hostel Cleaner</h5>
                </div>
              </div>
            </div>
            <div class="table-responsive">
              <!-- Projects table -->
              <table class="table align-items-center table-flush">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">HostelCleaner</th>
                    <th scope="col">Date</th>
                    <th scope="col">Room</th>
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
  </body>
  </div>




</template>
<script>


export default{
    name: "AdminDashboard",
    components: {
     
      }
}


</script>
<style>



</style>