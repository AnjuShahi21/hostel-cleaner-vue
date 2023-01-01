<template>
    <div>
        <title>Allot Housekeeper - Housekeeper Admin Dashboard</title>
        <body>
            <!-- sidebar -->
            <Sidebar/>

        <div class="main-content">
            <!-- Header -->
            <div class="header bg-background pb-6 pt-5 pt-md-6">
                <div class="container-fluid">
                    <!-- notification message -->

                    <div class="alert bg-success bg-gradient alert-success alert-dismissible fade show" role="alert">
                        <span class="alert-inner--icon"><i class="ni ni-like-2"></i></span>
                        <span class="alert-inner--text"><strong>Welcome to online Hostel Cleaner admin portal.</strong>

                        </span>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <Header/>
      </div>
          
            </div>
            <!-- Page content -->
            <div class="container-fluid mt--5 pb-6">
                <div class="row mt-2">
                    <div class="col-xl-12 order-xl-1">
                        <div class="card bg-light shadow">
                            <div class="card-header bg-white border-0">
                                <h5 class="mb-0">Allot Housekeeper</h5>
                            </div>
                            <div class="card-body pb-5">
                                <form method="POST" autocomplete="off" action="">
                                    <div class="pl-lg-4">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label class="form-control-label" for="input-id">Request Id</label>
                                                    <input type="text" name="allotId" id="input-id" class="form-control"
                                                        >
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label class="form-control-label" for="input-room">Room
                                                        Number</label>
                                                    <input type="text" name="allotRoom" id="input-room"
                                                        class="form-control" disabled value=" ">
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label class="form-control-label" for="input-time">Time
                                                        Requested</label>
                                                    <input type="text" name="allotTime" id="input-time"
                                                        class="form-control" disabled value="">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="form-control-label"
                                                        for="input-requestid">Housekeeper<span
                                                            class="text-danger">*</span></label>
                                                    <select name="workerId" class="form-control" id="input-requestid"
                                                        required>
                                                        <option selected="true" value="" disabled="disabled">Select
                                                            Option</option>


                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <button name="allotSubmit" class="btn btn-icon btn-3 btn-primary" type="submit">
                                            <span class="btn-inner--text">Submit</span>
                                        </button>
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
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'

export default {
    name: 'AllotworkerApp',
    components: {
        Sidebar,
        Header
     
      }

}

</script>
<style>

</style>