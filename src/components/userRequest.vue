<template>
  <div>

    <title>Clean Request - HostelCleaner's Student Dashboard</title>

    <body>
      <Sidebar />

      <div class="main-content">
        <!-- Header -->
        <div class="header bg-background pb-6 pt-5 pt-md-6">
          <div class="container-fluid">

            <b-alert show variant="success"><span class="alert-link"><strong> Welcome to HostelCleaner's Student
                  portal.</strong></span></b-alert>
            <Header />
          </div>
        </div>
        <!-- Page content -->
        <div class="container-fluid mt--5 pb-5">
          <div class="row mt-2">
            <div class="col-xl-12 order-xl-1">
              <div class="card bg-light shadow">
                <div class="card-header bg-white border-0">
                  <h5 class="mb-0">Send Clean Request</h5>
                </div>
                <div class="card-body pb-5">
                  <form  action="submit" @submit.prevent="sendClnReq">
                    <div class="pl-lg-4">
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="form-group">
                            <label class="form-control-label" for="dateInput">Date <span
                                class="text-danger">*</span></label>
                            <div class="input-group input-group-alternative">
                              <div class="input-group-prepend">
                                <span class="input-group-text"><i class="ni ni-calendar-grid-58"></i></span>
                              </div>
                              <input name="reqDate" id="dateInput" v-model="formData.date" class="form-control datepicker"
                                placeholder="Select date" type="text" required>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group">
                            <label class="form-control-label" for="input-timein">Available Time <span
                                class="text-danger">*</span></label>
                            <input name="reqTime" type="time" v-model="formData.cleaningTime" id="input-timein"
                              class="form-control form-control-alternative" required>
                          </div>
                        </div>
                      </div>
                      <button name="reqSubmit"  class="btn btn-icon btn-3 btn-primary"  type="submit">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';

import Header from './Header.vue';
import { sendRequest } from '@/services/api';

export default {
  name: 'userRequest',
  data(){
    return{
      formData:{
        cleaner_id: '',
        rollNo:'',
        data: '',
        cleaningTime:''
      }
    }
  },
  components: {
    Sidebar,
    Header
  },
  methods:{
  async sendClnReq() {
    try {
      const data = await sendRequest(this.formData);
      console.log(data);

      localStorage.setItem("token", JSON.stringify({ token: data.token }));
      localStorage.setItem("userType", JSON.stringify({ "type": "student" }));
      // localStorage.setItem("userData", JSON.stringify(data));
   
    } catch (e) {
      console.log(e.message);
    }

    // localStorage.setItem('userType', JSON.stringify({ type: 'student' }));

  }


}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
