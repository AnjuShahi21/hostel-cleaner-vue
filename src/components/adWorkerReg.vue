<template>
  <div>
    <title>Register HostelCleaner - HostelCleaner Admin Dashboard</title>
    <!-- side navigation -->
    <Sidebar />
    <LoadingOverlay :active="isLoading" />
    <AlertComp :error="error" :success="success" :hideAlert="hideAlert" />
      <!-- Main content -->
    <div class="main-content">
      <!-- Header -->
      <div class="header bg-background pb-6 pt-5 pt-md-6">
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
      <div class="container-fluid mt--5 pb-6">
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
                          <label class="form-control-label" for="input-room"
                            >Hostel <span class="text-danger">*</span></label
                          >
                          <input
                            type="text"
                            name="reghostel"
                            id="input-hostel"
                            v-model="formData.hostel"
                            class="form-control"
                            required
                            placeholder="Enter hostel name"
                          />
                        </div>
                      </div>

                       <div class="col-md-3">
                        <div class="form-group">
                          <label class="form-control-label" for="input-cleaner_id"
                            >Mobile No<span class="text-danger">*</span></label
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
                          <input
                            type="text"
                            name="reg_gender"
                            id="input-gender"
                            v-model="formData.gender"
                            class="form-control"
                            required
                            placeholder="Enter gender"
                          />
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
        hostel: "",
        cleaner_id:"",
        gender:""
      },
      isLoading: false,
      error: false,
       success: false,
    };
  },
  methods: {
    async addCleaner() {
      this.isLoading = true;
      try {
        const data = await addNewCleaner(this.formData);
        if (!data) {
          throw new Error("No user found");
        }
        console.log(data);
         this.success=true
        this.formData.rollNo="";
        this.formData.name="";
        this.formData.floor=""
      } catch (e) {
        this.error = true;
        console.log(e.message);
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
