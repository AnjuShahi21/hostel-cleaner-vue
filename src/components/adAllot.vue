<template>
  <div>
    <title>Allot HostelCleaner - HostelCleaner Admin Dashboard</title>
    <LoadingOverlay :active="isLoading" />
    <AlertComp :error="error" :success="success" :hideAlert="hideAlert" />

    <!-- sidebar -->
    <Sidebar />
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
                <h5 class="mb-0">Allot HostelCleaner</h5>
              </div>
              <div class="card-body pb-5">
                <form @submit.prevent="cleanerAllocation" action="submit">
                  <div class="pl-lg-4">
                    <div class="row">
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="form-control-label" for="input-id"
                            >Roll No</label
                          >
                          <input
                            type="text"
                            name="rollno"
                            v-model="formData.rollno"
                            id="input-id"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="form-control-label" for="input-room"
                            >Room Number</label
                          >
                          <input
                            type="text"
                            name="allotRoom"
                            v-model="formData.room"
                            id="input-room"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label
                            class="form-control-label"
                            for="input-cleaning_time"
                            >Time Requested
                            <span class="text-danger">*</span></label
                          >
                          <input
                            name="feedcleaning_time"
                            type="time"
                            v-model="formData.cleaning_time"
                            id="input-cleaning_time"
                            class="form-control form-control-alternative"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label
                            class="form-control-label"
                            for="input-cleaner_id"
                            >Cleaner_name
                            <span class="text-danger">*</span></label
                          >
                          <select
                            name="feedCleanerid"
                            class="form-control"
                            v-model="formData.cleaner_id"
                            id="input-cleaner_id"
                            required
                          >
                            <option
                              selected="true"
                              value=""
                              disabled="disabled"
                            >
                              Select Option
                            </option>
                            <option value="1">1-Rani</option>
                            <option value="2">2-Geeta</option>
                            <option value="3">3-Shyam</option>
                            <option value="4">4-Mohan</option>
                            <option value="5">5-Ram</option>
                            <option value="6">6-Sohan</option>
                            <option value="7">7-Mala</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <button
                      name="allotSubmit"
                      class="btn btn-icon btn-3 btn-primary"
                      type="submit"
                    >
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
import AlertComp from "./AlertComp.vue";
import LoadingOverlay from "./LoadingOverlay.vue";
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
import { allotCleaner } from "../services/api";

export default {
  name: "AllotworkerApp",
  data() {
    return {
      formData: {
        req_id: "",
        room: "",
        cleaningTime: "",
        cleaner_id: "",
      },
      isLoading: false,
      error: false,
      success: false,
    };
  },
  components: {
    Sidebar,
    Header,
    LoadingOverlay,
    AlertComp,
  },
  methods: {
    async cleanerAllocation() {
      this.isLoading = true;
      try {
        const res = await allotCleaner(this.formData);
        const data = res.data;
        if (!res) {
          throw new Error("Not save");
        }
        console.log(data);

        this.formData.req_id = "";
        this.formData.room = "";
        this.formData.cleaningTime = "";
        this.formData.cleaner_id = "";
      } catch (e) {
        this.error = true;
        console.log("Error:", e.message);
      }
      this.isLoading = false;
    },
    hideAlert() {
      this.error = false;
      this.success = false;
    },
  },
};
</script>

