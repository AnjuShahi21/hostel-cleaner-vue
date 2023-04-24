<template>
    <div>
    <div class="header-body ">
  <!-- Card stats -->
  <div class="row">
    <div class="col-lg-4 col-md-6">
      <div class="card card-stats mb-4 mb-xl-0">
        <div class="card-body">
          <div class="row">
            <div class="col">
              <h5 class="card-title text-uppercase text-muted mb-0">Clean Requests</h5>
            <span class="h2 font-weight-bold mb-0"></span> 
            </div>
            <div class="col-auto">
              <div class="icon icon-shape bg-primary text-white rounded-circle shadow">
                <i class="fas fa-chart-bar"></i>
              </div>
               <span class="ml-2 h5">{{requestsCount || "__" }}</span>
            </div>
          </div>
          <p class="mt-3 mb-0 text-muted text-sm">
            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> </span>
            <span class="text-nowrap">Since last week</span>
          </p>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6">
      <div class="card card-stats mb-4 mb-xl-0">
        <div class="card-body">
          <div class="row">
            <div class="col">
              <h5 class="card-title text-uppercase text-muted mb-0">Suggestions</h5>
              <span class="h2 font-weight-bold mb-0"></span>
            </div>
            <div class="col-auto">
              <div class="icon icon-shape bg-primary text-white rounded-circle shadow">
                <i class="far fa-file-alt"></i>
              </div>
              <span class="ml-2 h5">{{suggestionsCount || "__" }}</span>
            


            </div>
          </div>
          <p class="mt-3 mb-0 text-muted text-sm">
            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> </span>
            <span class="text-nowrap">Since last week</span>
          </p>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6">
      <div class="card card-stats mb-4 mb-xl-0">
        <div class="card-body">
          <div class="row">
            <div class="col">
              <h5 class="card-title text-uppercase text-muted mb-0">Complaints</h5>
              <span class="h2 font-weight-bold mb-0"> </span>
            </div>
            <div class="col-auto">
              <div class="icon icon-shape bg-primary text-white rounded-circle shadow">
                <i class="fas fa-chart-pie"></i>
              </div>
               <span class="ml-2 h5">{{complaintsCount || "__" }}</span>
            </div>
          </div>
          <p class="mt-3 mb-0 text-muted text-sm">
            <span class="text-danger mr-2"><i class="fas fa-arrow-up"></i> </span>
            <span class="text-nowrap">Since last month</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>
<script>
import {getRequests, getComplaint, getSuggestion } from '@/services/api';
export default{
    name:'HeaderApp',
    data()
    {
      return {
         suggestionsCount:null,
         requestsCount:null,
         complaintsCount:null
        
      }
    },
    async mounted() {
    try {
      let data = await getSuggestion();
      this.suggestionsCount = data.length;
       data = await getComplaint();
      this.complaintsCount = data.length;
      data = await getRequests();
      this.requestsCount = data.length;
     
    } catch (e) {
      console.log(e.message);
    }
  },

}





</script>
<style>
.card-title{
  font-size: large;
  font-weight: bold;
}
.header{
  /* border-radius: 10px; */
  margin-top:20px;
  margin-right:20px;
  margin-left: 20px;
}
</style>