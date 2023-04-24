<template>
  <div>
    <title>Student Profile - HostelCleaner Student Dashboard</title>
    <Sidebar />
    <div class="main-content">
      <!-- Header -->
      <div class="header bg-background pb-5 pt-5 pt-md-6">
        <div class="container-fluid">

          <b-alert show variant="success"><span class="alert-link"><strong> Welcome to HostelCleaner's Student
                portal.</strong></span></b-alert>
          <Header />
        </div>
      </div>
      <!-- Page content -->
      <div class="container-fluid mt-5">
        <div class="row mt-2">
          <div class="col-xl-12 mb-5 mb-xl-0">
            <div class="card shadow">
              <div class="card-header border-0">
                <div class="row align-items-center">
                  <div class="col">
                    <h5 class="mb-0">Student Profile</h5>
                  </div>
                  <div class="col text-right">
                    <a href="mailto:admin@gmail.com" target="_blank" class="btn btn-sm btn-primary">Request
                      Change</a>
                  </div>
                </div>
              </div>
              <div class="table-responsive">
                <!-- Projects table -->
                <table class="table align-items-center table-flush">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col" style="font-size: 12px;">Roll Number</th>
                      <th scope="col" style="font-size: 13px;">{{ userData.roll_no ? userData.roll_no : 'null' }}</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr>
                      <th scope="row">Student Name</th>
                      <td>{{ userData.name ? userData.name : 'null' }}</td>
                    </tr>
                    <tr>
                      <th scope="row">Hostel Name</th>
                      <td>{{ userData.hostel ? userData.hostel : 'null' }}</td>
                    </tr>
                    <tr>
                      <th scope="row">Floor</th>
                      <td>{{ userData.floor ? userData.floor : 'null' }}</td>
                    </tr>
                    <tr>
                      <th scope="row">Room No.</th>
                      <td>
                        {{ userData.room ? userData.room : 'null' }}
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
import Sidebar from './Sidebar.vue';

import Header from './Header.vue'
import { getProfileData } from '@/services/api';

export default {
  name: 'userProfile',
  data() {
    return { userData: {} }
  },
  components: {
    Sidebar,
    Header
  },
  async mounted() {
    try {
      const data = await getProfileData();
      this.userData = data;
    } catch (e) {
      console.log(e.message);
    }

  }


}


</script>
<style>

</style>
