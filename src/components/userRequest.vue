<template>
  <div>
 
  <title>Clean Request - Housekeeper Student Dashboard</title>
<body>

<div class="main-content">
      <!-- Header -->
      <div class="header bg-background pb-6 pt-5 pt-md-6">
      <div class="container-fluid">
        <!-- notification message -->
      
          <!-- <div class="alert alert-success alert-dismissible fade show" role="alert">
            <span class="alert-inner--icon"><i class="ni ni-like-2"></i></span>
            
         
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div> -->
       

        <!-- notification message -->
       
          <!-- <div class="alert alert-danger alert-dismissible fade show" role="alert">
            
         
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <Header/> -->

      </div>
    </div>
    <!-- Page content -->
    <div class="container-fluid mt--5 pb-5">
      <div class="row mt-2">
        <div class="col-xl-12 order-xl-1">
          <div class="card bg-light shadow">
            <div class="card-header bg-white border-0">
              <h5 class="mb-0">Send Clean Request</h5>
            </div>
            <div class="card-body pb-5">
              <form autocomplete="off" method="POST" action="studenthandler.php">
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="dateInput">Date <span class="text-danger">*</span></label>
                        <div class="input-group input-group-alternative">
                          <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-calendar-grid-58"></i></span>
                          </div>
                          <input name="reqDate" id="dateInput" class="form-control datepicker" placeholder="Select date" type="text" required>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-timein">Available Time <span class="text-danger">*</span></label>
                        <input name="reqTime" type="time" id="input-timein" class="form-control form-control-alternative" required>
                      </div>
                    </div>
                  </div>
                  <button name="reqSubmit" class="btn btn-icon btn-3 btn-primary" type="submit">Submit</button>
                </div>
              </form>
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

export default {
  name: 'userRequest',
 
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
