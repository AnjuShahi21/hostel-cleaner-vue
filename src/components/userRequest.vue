<template>
  <div>
    <title>Clean Request - HostelCleaner's Student Dashboard</title>
    <LoadingOverlay :active="isLoading" />
    <AlertComp :error="error" :success="success" :errormessage="errormessage" :hideAlert="hideAlert" />
    <Sidebar />

    <div class="main-content">
      <!-- Header -->
      <div class="header bg-background pb-5 pt-5 pt-md-6">
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
      <div class="container-fluid mt-5 pb-5">
        <div class="row mt-2">
          <div class="col-xl-12 order-xl-1">
            <div class="card bg-light shadow">
              <div class="card-header bg-white border-0">
                <h5 class="mb-0">Send Clean Request</h5>
              </div>
              <div class="card-body pb-5">
                <form action="submit" @submit.prevent="sendClnReq">
                  <div class="pl-lg-4">
                    <div class="row">
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="form-control-label" for="input-id"
                            >roll_no</label
                          >
                          <input
                            type="text"
                            name="roll_no"
                            v-model="formData.roll_no"
                            id="input-id"
                            class="form-control"
                            disabled
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label class="form-control-label" for="dateInput"
                            >Date <span class="text-danger">*</span></label
                          >
                          <div class="input-group input-group-alternative">
                            <div class="input-group-prepend">
                              <span @click="$refs.datePicker.showPicker()" class="input-group-text"
                                ><i class="ni ni-calendar-grid-58"></i
                              ></span>
                            </div>
                            <input
                              name="reqDate"
                              id="dateInput"
                              v-model="formData.date"
                              class="form-control datepicker pl-2"
                              placeholder="Select date"
                              type="date"
                              ref="datePicker"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label class="form-control-label" for="input-timein"
                            >Available Time
                            <span class="text-danger">*</span></label
                          >
                          <input
                            name="reqTime"
                            type="time"
                            v-model="formData.cleaningTime"
                            id="input-timein"
                            class="form-control form-control-alternative"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      name="reqSubmit"
                      class="btn btn-icon btn-3 btn-primary"
                      type="submit"
                    >
                      Submit
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
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
import AlertComp from "./AlertComp.vue";
import LoadingOverlay from "./LoadingOverlay.vue";
import { sendRequest } from "@/services/api";

export default {
  name: "userRequest",
  data() {
    return {
      formData: {
        roll_no: "",
        date: "",
        cleaningTime: "",
        req_id: "",
      },
      errormessage:"",
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
    async sendClnReq() {
      this.isLoading = true;
      try {
        const res = await sendRequest(this.formData);
        if(!res.ok) {
          throw new Error(" Request is in processing ...");
        }
        const data = await res.json();
        console.log(data);
        this.success = true;
        this.formData.date = "",
        this.formData.cleaningTime = "";
      } catch (e) {
        this.error = true;
        console.log(this.errormessage=e.message);
      }
      this.isLoading = false;
    },
    hideAlert() {
      this.error = false;
      this.success = false;
    },
  },
  mounted() {
    this.formData.roll_no = JSON.parse(localStorage.getItem("userData"))[
          "_doc"
        ]["roll_no"];
  }
};
</script>

<style>
input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
}
</style>