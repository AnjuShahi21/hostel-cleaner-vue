<template>
  <div>
    <LoadingOverlay :active="isLoading" />
    <AlertComp :error="error" :success="success" :hideAlert="hideAlert" />
    <title>Feedback Form - HostelCleaner Student Dashboard</title>
    <!-- Side Navigation -->
    <Sidebar />
    <!-- Main content -->
    <div class="main-content">
      <!-- Header -->
      <div class="header bg-background pb-6 pt-5 pt-md-6">
        <div class="container-fluid">
          <b-alert show variant="success"
            ><span class="alert-link"
              ><strong>
                Welcome to HostelCleaner's Student portal.</strong
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
                <h5 class="mb-0">HostelCleaner Feedback</h5>
              </div>
              <div class="card-body pb-5">
                <form @submit.prevent="userFeed" action="submit">
                  <div class="pl-lg-4">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label
                            class="form-control-label"
                            for="input-cleaner_name"
                            >Cleaner_name
                            <span class="text-danger">*</span></label
                          >
                          <select
                            name="feedCleanername"
                            class="form-control"
                            v-model="formData.cleaner_name"
                            id="input-cleaner_name"
                            required
                          >
                            <option
                              selected="true"
                              value=""
                              disabled="disabled"
                            >
                              Select Option
                            </option>
                            <option value="Rani">1-Rani</option>
                            <option value="Geeta">2-Geeta</option>
                            <option value="Shyam">3-Shyam</option>
                            <option value="Mohan">4-Mohan</option>
                            <option value="Ram">5-Ram</option>
                            <option value="sohan">6-Sohan</option>
                            <option value="Mala">7-Mala</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="form-control-label" for="input-rating"
                            >Rate Service
                            <span class="text-danger">*</span></label
                          >
                          <select
                            name="feedRating"
                            class="form-control"
                            v-model="formData.rating"
                            id="input-rating"
                            required
                          >
                            <option
                              selected="true"
                              value=""
                              disabled="disabled"
                            >
                              Select Option
                            </option>
                            <option value="1">1 Poor Cleaning</option>
                            <option value="2">2 Not Satisfied</option>
                            <option value="3">3 Satisfactory</option>
                            <option value="4">4 Good Cleaning</option>
                            <option value="5">5 Excellent Work</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-4">
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
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label class="form-control-label" for="input-timein"
                            >Time In <span class="text-danger">*</span></label
                          >
                          <input
                            name="feedTimein"
                            type="time"
                            v-model="formData.timein"
                            id="input-timein"
                            class="form-control form-control-alternative"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label class="form-control-label" for="input-timeout"
                            >Time Out <span class="text-danger">*</span></label
                          >
                          <input
                            name="feedTimeout"
                            type="time"
                            v-model="formData.timeout"
                            id="input-timeout"
                            class="form-control form-control-alternative"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label
                            class="form-control-label"
                            for="input-suggestions"
                            >Suggestions</label
                          >
                          <textarea
                            name="feedSuggestion"
                            v-model="formData.suggestion"
                            class="form-control form-control-alternative"
                            id="input-suggestions"
                            rows="3"
                            placeholder="We'd love to here some suggestions.."
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label
                            class="form-control-label"
                            for="input-complaints"
                            >Complaints</label
                          >
                          <textarea
                            name="feedComplaints"
                            v-model="formData.complaint"
                            class="form-control form-control-alternative"
                            id="input-complaints"
                            rows="3"
                            placeholder="Got complaints for hostelcleaning service?"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <button
                      name="feedSubmit"
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
import { sendFeedback } from "@/services/api";

export default {
  name: "userFeedback",
  data() {
    return {
      formData: {
        cleaner_name: "",
        rating: "",
        req_id: "",
        timein: "",
        timeout: "",
        suggestion: "",
        complaint: "",
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
    async userFeed() {
      try {
        this.isLoading = true;
        this.formData.room = JSON.parse(localStorage.getItem("userData"))[
          "_doc"
        ]["room"];
        console.log(JSON.parse(localStorage.getItem("userData")));
        console.log(this.formData);
        const data = await sendFeedback(this.formData);
        // const data = res.data;
        if (!data) {
          throw new Error("No user found");
        }
        console.log(data);
        (this.formData.cleaner_name = ""),
          (this.formData.rating = ""),
          (this.formData.req_id = ""),
          (this.formData.timein = ""),
          (this.formData.timeout = ""),
          (this.formData.suggestion = ""),
          (this.formData.complaint = ""),
          (this.success = true);
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
<style>
</style>

