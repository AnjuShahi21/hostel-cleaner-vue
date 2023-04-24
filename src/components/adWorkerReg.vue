<template>
  <div>
    <LoadingOverlay :active="isLoading" />
    <AlertComp :error="error" :success="success" :hideAlert="hideAlert" :errormessage="errormessage"/>
    <title>Register HostelCleaner - HostelCleaner Admin Dashboard</title>
    <!-- side navigation -->
    <Sidebar />
      <!-- Main content -->
    <div class="main-content">
      <!-- Header -->
      <div class="header bg-background pb-5 pt-5 pt-md-6">
        <div class="container-fluid">
          <b-alert show variant="success"
            ><span class="alert-link"
              ><strong>
                Welcome to online Hostel Cleaner admin portal.</strong
              ></span
            ></b-alert
          >
          <Header />
        </div>
      </div>

      <!-- Page content -->
      <div class="container-fluid mt-5 pb-6">
        <div class="row mt-2">
          <div class="col-xl-12 order-xl-1">
            <div class="card bg-light shadow">
              <div class="card-header bg-white border-0">
                <h5 class="mb-0">Register New HostelCleaner</h5>
              </div>
              <div class="card-body pb-5">
                <form @submit.prevent="addCleaner" action="submit">
                  <div class="pl-lg-4">
                    <div class="row">
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="form-control-label" for="input-id"
                            >Name <span class="text-danger">*</span></label>
                          <input
                            type="text"
                            name="regName"
                            id="input-id"
                            v-model="formData.name"
                            class="form-control"
                            required
                            placeholder="Hostelcleaner Name"
                          />
                        </div>
                      </div>
                        <div class="col-md-3">
                        <div class="form-group">
                          <label class="form-control-label" for="input-id"
                            >Mobile Number<span class="text-danger">*</span></label>
                          <input
                            type="text"
                            name="mobile_no"
                            id="input-id"
                            v-model="formData.mobile_no"
                            class="form-control"
                            required
                            placeholder="Enter mobile no"
                          />
                        </div>
                      </div>

                       <div class="col-md-3">
                        <div class="form-group">
                          <label class="form-control-label" for="input-cleaner_id"
                            >Cleaner Id<span class="text-danger">*</span></label
                          >
                          <input
                            type="number"
                            name="regcleaner_id"
                            id="input-cleaner_id"
                            v-model="formData.cleaner_id"
                            class="form-control"
                            required
                            placeholder="Enter cleaner Id"
                          />
                        </div>
                      </div>

                       <div class="col-md-3">
                        <div class="form-group">
                          <label class="form-control-label" for="input-gender"
                            >Gender <span class="text-danger">*</span></label
                          >
                          <select
                            class="form-control"
                            v-model="formData.gender"
                            required
                          >
                            <option
                              selected="true"
                              value=""
                              disabled="disabled"
                            >
                              Select Option
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <button
                      name="regKeeperSubmit"
                      class="btn btn-icon btn-3 btn-primary"
                      type="submit"
                    >
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
import AlertComp from "./AlertComp.vue";
import LoadingOverlay from "./LoadingOverlay.vue";
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
import { addNewCleaner } from "@/services/api";

export default {
  name: "AdminWorkReg",
  components: {
    Sidebar,
    Header,
    LoadingOverlay, AlertComp 
  },
  data() {
    return {
      formData: {
        name: "",
        mobile_no: "",
        cleaner_id:"",
        gender:""
      },
      errormessage:"",
      isLoading: false,
      error: false,
       success: false,
    };
  },
  methods: {
    async addCleaner() {
      this.isLoading = true;
      try {
        const res = await addNewCleaner(this.formData);
        if(!res.ok){
          throw new Error(" Request failed")
        }
        const data=await res.json();
        console.log(data);
         this.success=true
        this.formData.name="";
        this.formData.mobile_no="";
        this.formData.cleaner_id="";
        this.formData.gender=""
      } catch (e) {
        this.error = true;
        console.log(this.errormessage=e.message);
      }
      this.isLoading = false;
    },
     hideAlert() {
          this.error = false;
          this.success=false
        }
  }
};
</script>
<style>
</style>
