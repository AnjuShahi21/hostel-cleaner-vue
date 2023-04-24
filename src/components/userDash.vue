<template>
  <div>
    <title>HostelCleaner Student Dashboard</title>
    
    <LoadingOverlay :active="loading" />
    <AlertComp :error="error" />

    <!-- side navigation -->
    <Sidebar />


    <!-- Main content -->
    <div class="main-content">
      <!-- Header -->
      <div class="header bg-background pb-5 pt-5 pt-md-6">
        <div class="container-fluid">

          <b-alert show variant="success"><span class="alert-link"><strong>Welcome to HostelCleaner's Student
                  portal.</strong></span></b-alert>
          <Header />
          </div>
      </div>
      <!-- Page content -->
      <div class="container-fluid mt-5" v-if="userData">
        <div class="row mt-2 pb-5">
          <div class="col-xl-12 mb-5 mb-xl-0">
            <div class="card shadow">
              <div class="card-header border-0">
                <div class="row align-items-center">
                  <div class="col">
                    <h3 class="mb-0 fs-5 ">HostelCleaning</h3>
                  </div>
                </div>
              </div>
              <div class="table-responsive">
                <!-- Projects table -->
                <table class="table align-items-center table-flush">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">HostelCleaner</th>

                      <th scope="col">Date</th>
                      <th scope="col">Time Requested</th>
                      <th scope="col">Time In</th>
                      <th scope="col">Time Out</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in userData" :key="item.id">                    
                      <td>{{ item.cleaner_name}}
                      </td>
                      <td>
                        {{ item.date}}
                      </td>
                      <td>
                        {{ item.cleaning_time}}
                      </td>
                      <td>
                        {{ item.timein }}
                      </td>
                      <td>
                        {{ item.timeout }}
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="h4 mt-5 text-center">No data found</div>
    </div>

  </div>
</template>
<script>
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
import { getSuggestion } from "@/services/api";
import LoadingOverlay from './LoadingOverlay.vue';
import AlertComp from './AlertComp.vue';

export default {
  name: "userDashVue",
  components: {
    Sidebar,
    Header,
    LoadingOverlay,
    AlertComp
},
  data() {
    return {
      userData: null,
      loading: false,
      error: false
    };
   
  },

  async mounted() {
    this.loading = true;
    try {
      const data = await getSuggestion();
      this.userData = data;
    } catch (e) {
      this.error = true;
      console.log(e.message);
    }
    this.loading = false;
  },
};
 
</script>

