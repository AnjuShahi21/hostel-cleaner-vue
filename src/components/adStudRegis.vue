<template>
  <div>
    <title>Register Student - HostelCleaner Admin Dashboard</title>

  <!-- side navigation -->
  <Sidebar/>
 
  <!-- Main content -->
  <div class="main-content">
    <!-- Header -->
    <div class="header bg-background pb-6 pt-5 pt-md-6">
      <div class="container-fluid">

<b-alert show variant="success"><span class="alert-link"><strong>  Welcome to online Hostel Cleaner admin portal.</strong></span></b-alert>
<Header />
</div>
    </div>
    <!-- Page content -->
    <div class="container-fluid mt--5 pb-6">
      <div class="row mt-2">
        <div class="col-xl-12 order-xl-1">
          <div class="card bg-light shadow">
            <div class="card-header bg-white border-0">
              <h5 class="mb-0">Register New Student</h5>
            </div>
            <div class="card-body pb-5">
              <form method="POST" autocomplete="off" action=" ">
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-md-3">
                      <div class="form-group">
                        <label class="form-control-label" for="input-id">Roll Number <span
                            class="text-danger">*</span></label>
                        <input type="number" name="regRoll" id="input-id" class="form-control" required
                          placeholder="Enter numeric value">
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label class="form-control-label" for="input-room">Room Number <span
                            class="text-danger">*</span></label>
                        <input type="text" name="regRoom" id="input-room" class="form-control" required
                          placeholder="Ex : C202">
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label class="form-control-label" for="input-time">Floor <span
                            class="text-danger">*</span></label>
                        <input type="number" name="regFloor" id="input-time" class="form-control" required
                          placeholder="Enter single digit no.">
                      </div>
                    </div>
                  </div>
                  <button name="regSubmit" class="btn btn-icon btn-3 btn-primary" type="submit">
                    <span class="btn-inner--text">Register</span>
                  </button>
                </div>
              </form>

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
export default {
  name: 'AdminStudRegis',
  components:{
  Sidebar,
  Header

  },
  mounted() {
    localStorage.setItem('userType', JSON.stringify({ type: 'admin' }));
  
  }

}

</script>
<style>

</style>
