<template>
  <div>
    <title>Allot HostelCleaner - HostelCleaner Admin Dashboard</title>
    <LoadingOverlay :active="isLoading" />
    <AlertComp :error="error" :success="success" :hideAlert="hideAlert" />

    <!-- sidebar -->
    <Sidebar />
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
                          <select
                            class="form-control"
                            v-model="formData.roll_no"
                            @change="getRequestData()"
                            required
                          >
                            <option
                              selected="true"
                              value="Select Roll Number"
                              disabled="disabled"
                            >
                              Select Roll Number
                            </option>
                            <option v-for="(request, index) in requests" :key="index" :value="request.roll_no">
                              {{ request.roll_no }}
                            </option>
                          </select>
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
                            disabled
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
                            v-model="formData.cleaningTime"
                            id="input-cleaning_time"
                            class="form-control form-control-alternative"
                            required
                            disabled
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
                            <option v-for="(cleaner, index) in availableCleaners" :key="index" :value="cleaner.cleaner_id">
                              {{ cleaner.name }}
                            </option>
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
import { allotCleaner, getFreeCleaners, getPendingRequests } from "../services/api";
import { getRequest } from "../services/api";

export default {
  name: "AllotworkerApp",
  data() {
    return {
      formData: {
        req_id: "",
        room: "",
        cleaningTime: "",
        cleaner_id: "",
        roll_no: ""
      },
      isLoading: false,
      error: false,
      success: false,
      requests: [],
      availableCleaners: []
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
        if (!res) {
          throw new Error("Not save");
        }
        this.success = true;
        this.formData.req_id = "";
        this.formData.room = "";
        this.formData.cleaningTime = "";
        this.formData.cleaner_id = "";
      } catch (e) {
        this.error = true;
      }
      this.isLoading = false;
      await this.getDefaultData();
    },
    hideAlert() {
      this.error = false;
      this.success = false;
    },
    async getRequestData() {
      const request = await getRequest({roll_no: this.formData.roll_no});
      this.formData.cleaningTime = request["cleaningTime"];
      this.formData.room = request["room"];
    },
    async getDefaultData() {
      this.isLoading = true;
      try {
        this.requests = await getPendingRequests();
        this.availableCleaners = await getFreeCleaners();
      } catch(e) {
        this.error = true;
      }
      this.isLoading = false;
    }
  },
  async mounted() {
    await this.getDefaultData();
  }
};
</script>

