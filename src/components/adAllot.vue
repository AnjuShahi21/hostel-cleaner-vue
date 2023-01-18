<template>
    <div>
        <title>Allot HostelCleaner - HostelCleaner Admin Dashboard</title>

        <!-- sidebar -->
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
                                <h5 class="mb-0">Allot HostelCleaner</h5>
                            </div>
                            <div class="card-body pb-5">
                                <form method="POST" autocomplete="off" action="">
                                    <div class="pl-lg-4">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label class="form-control-label" for="input-id">Request
                                                        Id</label>
                                                    <input type="text" name="allotId" v-model="formData.req_id"
                                                        id="input-id" class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label class="form-control-label" for="input-room">Room
                                                        Number</label>
                                                    <input type="text" name="allotRoom" v-model="formData.room"
                                                        id="input-room" class="form-control" disabled value=" ">
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label class="form-control-label" for="input-time">Time
                                                        Requested</label>
                                                    <input type="text" name="allotTime" v-model="formData.cleaningTime"
                                                        id="input-time" class="form-control" disabled value="">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="form-control-label"
                                                        for="input-requestid">HostelCleaner<span
                                                            class="text-danger">*</span></label>
                                                    <select name="workerId" v-model="formData.cleaner_id"
                                                        class="form-control" id="input-requestid" required>
                                                        <option selected="true" value="" disabled="disabled">Select
                                                            Option</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <button @submit="cleanerAllocation" name="allotSubmit"
                                            class="btn btn-icon btn-3 btn-primary" type="submit">
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
    </div>


</template>
<script>
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
import { allotCleaner } from '../services/api';

export default {
    name: 'AllotworkerApp',
    data() {
        return {

            formData: {
                req_id: "",
                room: "",
                cleaningTime: "",
                cleaner_id: "",

            },
            
        }
    },
    components: {
        Sidebar,
        Header, 
    },
    methods: {
        async cleanerAllocation() {
            try {
                const res = await allotCleaner(this.formData);
                const data = res.data;
                if (!res) {
                    throw new Error("Not save");

                }
                console.log(data)
                localStorage.setItem("isUserExist", data.token);
                localStorage.setItem("userData", JSON.stringify(data));

            }
            catch (e) {
                this.error = true;
                console.log("Error:", e.message);
            }
           
        },
        
    },
    mounted() {
        localStorage.setItem('userType', JSON.stringify({ type: 'admin' }));

    }
}
</script>
<style>

</style>
