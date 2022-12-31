<template>

<!-- <nav :class="`navbar navbar-vertical ${isOpened ? 'navbar-expand-md' : ''} position-static navbar-light bg-white`" id="sidenav-main"> -->
  <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
  <div class="container-fluid">
    <!-- Toggler -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    
    <ul class="nav align-items-center d-md-none">
      <li class="nav-item dropdown">
        <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <div class="media align-items-center">
            <span class="avatar avatar-sm rounded-circle">
              M
            </span>
          </div>
        </a>
       
      </li>
    </ul>
    <!-- Collapse -->
    <div class="collapse navbar-collapse" id="sidenav-collapse-main">
      <!-- Collapse header -->
      <div class="navbar-collapse-header d-md-none">
        <div class="row">
          <div class="col-6 collapse-brand">
            <a href="">
              <h3>Housekeeper</h3>
            </a>
          </div>
          <div class="col-6 collapse-close">
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
      <!-- Navigation -->
      <ul class="navbar-nav">
        <li>
          <b-nav-item to="/addashboard">
            <i class="ni ni-tv-2"></i>Dashboard 
           </b-nav-item>
        </li>
        
       <li>
          <b-nav-item to="/adallot">
            <i class="ni ni-send"></i>Allot
          </b-nav-item>
        </li>
           
        <li>
          <b-nav-item  to="/adcomplain">
            <i class="ni ni-archive-2"></i>Complaints
          </b-nav-item>
          </li>

          <li>
          <b-nav-item to="/adsuggest">
            <i class="ni ni-bulb-61"></i>Suggestions
          </b-nav-item>
          </li>
          <li>
          <b-nav-item to="/adstudregis">
            <i class="ni ni-single-02"></i>Register Student
           </b-nav-item>
          </li>

          <li>
          <b-nav-item to="/adworkreg">
            <i class="ni ni-badge"></i>Register Housekeeper
          </b-nav-item>
          </li>
        
          <li>
          <b-nav-item @click="userLogout" to="/logout">
            <i class="ni ni-user-run"></i> Logout
          </b-nav-item>
          </li>
       
      </ul>
    </div>
  </div>
</nav>
  
</template>

<script>
export default({
  name:'SidebarVue',
  // data(){
  //   return {isOpened:false}
  // },
  
  
//methods:{
    // abc(){
    //   console.log('Hello');
    //   this.isOpened = !this.isOpened
    // }
    methods: {
        userLogout() {
            localStorage.clear();
            this.$router.push('/login');
        }

  }
})

</script>
<style  scoped>
.navbar-nav
{
  font-weight: bold;
}
</style>
