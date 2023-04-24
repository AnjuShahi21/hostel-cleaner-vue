<template>
  <div>
    <title>Suggestions - HostelCleaner Admin Dashboard</title>
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
      <div class="container-fluid mt-5">
        <div class="row mt-2 pb-5">
          <div class="col-xl-12 mb-5 mb-xl-0">
            <div class="card shadow">
              <div class="card-header border-0">
                <div class="row align-items-center">
                  <div class="col">
                    <h5 class="mb-0">Suggestions Record</h5>
                  </div>
                </div>
              </div>
              <div class="table-responsive">
                <!-- Projects table -->
                <table v-if="userData" class="table align-items-center table-flush">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">Hostel Cleaner</th>
                      <th scope="col">Room</th>
                      <th scope="col">Date</th>
                      <th colspan="3">Suggestions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in userData" :key="item.id">                    
                      <td>{{ item.cleaner_name}}
                      </td>
                      <td>
                        {{ item.room}}
                      </td>
                      <td>
                        {{ item.date}}
                      </td>
                      <td>
                        {{ item.suggestion }}
                      </td>
                    </tr>

                  </tbody>
                </table>
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
import { getSuggestion } from "@/services/api";

export default {
  name: "AdminSuggest",
  components: {
    Sidebar,
    Header,
  },
  data() {
    return {
      userData: null
    };
   
  },

  async mounted() {
    try {
      const data = await getSuggestion();
      this.userData = data;
    } catch (e) {
      console.log(e.message);
    }
  },
};
</script>
<style>
</style>
