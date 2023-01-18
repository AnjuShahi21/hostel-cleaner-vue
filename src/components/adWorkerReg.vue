<template>
    <div>
        <title>Register HostelCleaner - HostelCleaner Admin Dashboard</title>
        <Sidebar />

        <div class="main-content">
            <!-- Header -->
            <div class="header bg-background pb-6 pt-5 pt-md-6">
                <div class="container-fluid">

                    <b-alert show variant="success"><span class="alert-link"><strong> Welcome to online Hostel Cleaner
                                admin portal.</strong></span></b-alert>
                    <Header />
                </div>
            </div>
            <!-- Page content -->
            <div class="container-fluid mt--5 pb-6">
                <div class="row mt-2">
                    <div class="col-xl-12 order-xl-1">
                        <div class="card bg-light shadow">
                            <div class="card-header bg-white border-0">
                                <h5 class="mb-0">Register New HostelCleaner</h5>
                            </div>
                            <div class="card-body pb-5">
                                <form method="POST" autocomplete="off" action="">
                                    <div class="pl-lg-4">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label class="form-control-label" for="input-id">Name <span
                                                            class="text-danger">*</span></label>
                                                    <input type="text" name="regName" id="input-id" class="form-control"
                                                        required placeholder="Hostelcleaner Name">
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label class="form-control-label" for="input-room">Floor <span
                                                            class="text-danger">*</span></label>
                                                    <input type="number" name="regFloor" id="input-room"
                                                        class="form-control" required placeholder="Enter numeric value">
                                                </div>
                                            </div>
                                        </div>
                                        <button name="regKeeperSubmit" class="btn btn-icon btn-3 btn-primary"
                                            type="submit">
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
    name: 'AdminWorkReg',
    components: {
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
