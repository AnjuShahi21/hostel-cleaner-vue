<template>
    <div>
        <title>Student Profile - Housekeeper Student Dashboard</title>
        <body>

       
        <div class="main-content">
      <!-- Header -->
      <div class="header bg-background pb-6 pt-5 pt-md-6">
      <div class="container-fluid">
       
          <!-- require("headerstats.php"); 
          $student = getStudent($_SESSION['rollnumber'], $db); 
        ?> -->
      
      </div>
    </div>
    <!-- Page content -->
    <div class="container-fluid mt--5">
      <div class="row mt-2">
        <div class="col-xl-12 mb-5 mb-xl-0">
          <div class="card shadow">
            <div class="card-header border-0">
              <div class="row align-items-center">
                <div class="col">
                  <h5 class="mb-0">Your Profile</h5>
                </div>
                <div class="col text-right">
                  <a href="mailto:anjushahi2002@gmail.com" target="_blank" class="btn btn-sm btn-primary">Request Change</a>
                </div>
              </div>
            </div>
            <div class="table-responsive">
              <!-- Projects table -->
              <table class="table align-items-center table-flush">
                <thead class="thead-light">
                  <tr>
                    <th scope="col" style="font-size: 12px;">Roll Number</th>
                    <th scope="col" style="font-size: 13px;"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Hostel Name</th>
                    <!-- <td></td> -->
                  </tr>
                  <tr>
                    <th scope="row">Floor</th>
                    <!-- <td><?php echo $student['floor']; ?></td> -->
                  </tr>
                  <tr>
                    <th scope="row">Room No.</th>
                    <!-- <td><?php echo strtoupper($student['room']); ?></td> -->
                  </tr>
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
    name:'userProfile',
    
}


</script>
<style>


</style>