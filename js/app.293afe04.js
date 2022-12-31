(function(){"use strict";var t={3704:function(t,a,s){var e=s(6369),i=s(3822),r=s(2631),l=s(6681),o=s(9425);s(7024);e["default"].use(i.ZP),e["default"].use(l.XG7),e["default"].use(o.A7),e["default"].use(r.ZP);var n=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row gap-3"},[a("div",{staticClass:"col-3"},[a("sidebar"),a("div",{staticClass:"col-9"},[a("router-view")],1)],1)]),a("div")])])},c=[],d=function(){var t=this,a=t._self._c;return a("nav",{staticClass:"navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white",attrs:{id:"sidenav-main"}},[a("div",{staticClass:"container-fluid"},[t._m(0),t._m(1),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"sidenav-collapse-main"}},[t._m(2),a("ul",{staticClass:"navbar-nav"},[a("li",[a("b-nav-item",{attrs:{to:"/addashboard"}},[a("i",{staticClass:"ni ni-tv-2"}),t._v("Dashboard ")])],1),a("li",[a("b-nav-item",{attrs:{to:"/adallot"}},[a("i",{staticClass:"ni ni-send"}),t._v("Allot ")])],1),a("li",[a("b-nav-item",{attrs:{to:"/adcomplain"}},[a("i",{staticClass:"ni ni-archive-2"}),t._v("Complaints ")])],1),a("li",[a("b-nav-item",{attrs:{to:"/adsuggest"}},[a("i",{staticClass:"ni ni-bulb-61"}),t._v("Suggestions ")])],1),a("li",[a("b-nav-item",{attrs:{to:"/adstudregis"}},[a("i",{staticClass:"ni ni-single-02"}),t._v("Register Student ")])],1),a("li",[a("b-nav-item",{attrs:{to:"/adworkreg"}},[a("i",{staticClass:"ni ni-badge"}),t._v("Register Housekeeper ")])],1),a("li",[a("b-nav-item",{attrs:{to:"/logout"},on:{click:t.userLogout}},[a("i",{staticClass:"ni ni-user-run"}),t._v(" Logout ")])],1)])])])])},m=[function(){var t=this,a=t._self._c;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#sidenav-collapse-main","aria-controls":"sidenav-main","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t._self._c;return a("ul",{staticClass:"nav align-items-center d-md-none"},[a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link",attrs:{href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("div",{staticClass:"media align-items-center"},[a("span",{staticClass:"avatar avatar-sm rounded-circle"},[t._v(" M ")])])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"navbar-collapse-header d-md-none"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 collapse-brand"},[a("a",{attrs:{href:"index.php"}},[a("h3",[t._v("Housekeeper")])])]),a("div",{staticClass:"col-6 collapse-close"},[a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#sidenav-collapse-main","aria-controls":"sidenav-main","aria-expanded":"false","aria-label":"Toggle sidenav"}},[a("span"),a("span")])])])])}],u=(s(7658),{name:"SidebarVue",methods:{userLogout(){localStorage.clear(),this.$router.push("/login")}}}),p=u,v=s(1001),b=(0,v.Z)(p,d,m,!1,null,"4b1aecb8",null),C=b.exports,f=function(){var t=this,a=t._self._c;return a("nav",{staticClass:"navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white",attrs:{id:"sidenav-main"}},[a("div",{staticClass:"container-fluid"},[t._m(0),t._m(1),t._m(2),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"sidenav-collapse-main"}},[t._m(3),a("ul",{staticClass:"navbar-nav"},[a("li",[a("b-nav-item",{attrs:{to:"/usdash"}},[a("i",{staticClass:"ni ni-tv-2"}),t._v("Dashboard ")])],1),a("li",[a("b-nav-item",{attrs:{to:"/usrequest"}},[a("i",{staticClass:"ni ni-send"}),t._v("Requests ")])],1),a("li",[a("b-nav-item",{attrs:{to:"/usfeedback"}},[a("i",{staticClass:"ni ni-archive-2"}),t._v("Feedback ")])],1),a("li",[a("b-nav-item",{attrs:{to:"/usprofile"}},[a("i",{staticClass:"ni ni-single-02"}),t._v("Profile ")])],1),a("li",[a("b-nav-item",{attrs:{to:"/logout"}},[a("i",{staticClass:"ni ni-user-run"}),t._v(" Logout ")])],1)])])])])},h=[function(){var t=this,a=t._self._c;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#sidenav-collapse-main","aria-controls":"sidenav-main","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t._self._c;return a("a",{staticClass:"navbar-brand pt-4",attrs:{href:"index.php"}},[a("h2")])},function(){var t=this,a=t._self._c;return a("ul",{staticClass:"nav align-items-center d-md-none"},[a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link",attrs:{href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("div",{staticClass:"media align-items-center"},[a("span",{staticClass:"avatar avatar-sm rounded-circle"},[t._v(" M ")])])]),a("div",{staticClass:"dropdown-menu dropdown-menu-arrow dropdown-menu-right"},[a("div",{staticClass:"dropdown-header noti-title"},[a("h6",{staticClass:"text-overflow m-0"},[t._v("Housekeeper service")])]),a("a",{staticClass:"dropdown-item",attrs:{href:"index.php?logout='1'"}},[a("i",{staticClass:"ni ni-user-run"}),a("span",[t._v("Logout")])])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"navbar-collapse-header d-md-none"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 collapse-brand"},[a("a",{attrs:{href:"index.php"}},[a("h3",[t._v("Housekeeper")])])]),a("div",{staticClass:"col-6 collapse-close"},[a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#sidenav-collapse-main","aria-controls":"sidenav-main","aria-expanded":"false","aria-label":"Toggle sidenav"}},[a("span"),a("span")])])])])}],g={name:"UsersidenavApp"},_=g,x=(0,v.Z)(_,f,h,!1,null,"2adec3d1",null),w=x.exports,y=function(){var t=this;t._self._c;return t._m(0)},k=[function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"header-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4 col-md-6"},[a("div",{staticClass:"card card-stats mb-4 mb-xl-0"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h5",{staticClass:"card-title text-uppercase text-muted mb-0"},[t._v("Clean Requests")]),a("span",{staticClass:"h2 font-weight-bold mb-0"})]),a("div",{staticClass:"col-auto"},[a("div",{staticClass:"icon icon-shape bg-primary text-white rounded-circle shadow"},[a("i",{staticClass:"fas fa-chart-bar"})])])]),a("p",{staticClass:"mt-3 mb-0 text-muted text-sm"},[a("span",{staticClass:"text-success mr-2"},[a("i",{staticClass:"fa fa-arrow-up"})]),a("span",{staticClass:"text-nowrap"},[t._v("Since last week")])])])])]),a("div",{staticClass:"col-lg-4 col-md-6"},[a("div",{staticClass:"card card-stats mb-4 mb-xl-0"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h5",{staticClass:"card-title text-uppercase text-muted mb-0"},[t._v("Suggestions")]),a("span",{staticClass:"h2 font-weight-bold mb-0"})]),a("div",{staticClass:"col-auto"},[a("div",{staticClass:"icon icon-shape bg-primary text-white rounded-circle shadow"},[a("i",{staticClass:"far fa-file-alt"})])])]),a("p",{staticClass:"mt-3 mb-0 text-muted text-sm"},[a("span",{staticClass:"text-success mr-2"},[a("i",{staticClass:"fa fa-arrow-up"})]),a("span",{staticClass:"text-nowrap"},[t._v("Since last week")])])])])]),a("div",{staticClass:"col-lg-4 col-md-6"},[a("div",{staticClass:"card card-stats mb-4 mb-xl-0"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h5",{staticClass:"card-title text-uppercase text-muted mb-0"},[t._v("Complaints")]),a("span",{staticClass:"h2 font-weight-bold mb-0"})]),a("div",{staticClass:"col-auto"},[a("div",{staticClass:"icon icon-shape bg-primary text-white rounded-circle shadow"},[a("i",{staticClass:"fas fa-chart-pie"})])])]),a("p",{staticClass:"mt-3 mb-0 text-muted text-sm"},[a("span",{staticClass:"text-danger mr-2"},[a("i",{staticClass:"fas fa-arrow-up"})]),a("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])])])])])])])}],S={name:"HeaderApp"},D=S,A=(0,v.Z)(D,y,k,!1,null,null,null),R=A.exports,q={name:"App",components:{Sidebar:C,userSideBar:w,Header:R}},H=q,O=(0,v.Z)(H,n,c,!1,null,null,null),T=O.exports,P=function(){var t=this;t._self._c;return t._m(0)},N=[function(){var t=this,a=t._self._c;return a("div",[a("title",[t._v("Housekeeper Admin Dashboard")]),a("body",[a("div",{staticClass:"main-content"},[a("div",{staticClass:"header bg-background pb-6 pt-5 pt-md-6"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"alert bg-success bg-gradient alert-success alert-dismissible fade show",attrs:{role:"alert"}},[a("span",{staticClass:"alert-inner--icon"},[a("i",{staticClass:"ni ni-like-2"})]),a("span",{staticClass:"alert-inner--text"},[a("strong",[t._v("Welcome to online Hostel Cleaner admin portal.")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])])]),a("div",{staticClass:"container-fluid mt--5"},[a("div",{staticClass:"row mt-2 pb-5"},[a("div",{staticClass:"col-xl-12 mb-5 mb-xl-0"},[a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-header border-0"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col"},[a("h5",{staticClass:"mb-0"},[t._v("Hostel Cleaner")])])])]),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table align-items-center table-flush"},[a("thead",{staticClass:"thead-light"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("HostelCleaner")]),a("th",{attrs:{scope:"col"}},[t._v("Date")]),a("th",{attrs:{scope:"col"}},[t._v("Room")]),a("th",{attrs:{scope:"col"}},[t._v("Time Requested")]),a("th",{attrs:{scope:"col"}},[t._v("Time In")]),a("th",{attrs:{scope:"col"}},[t._v("Time Out")])])]),a("tbody")])])])])])])])])])}],E={name:"AdminDashboard",components:{}},Z=E,I=(0,v.Z)(Z,P,N,!1,null,null,null),L=I.exports,$=function(){var t=this;t._self._c;return t._m(0)},F=[function(){var t=this,a=t._self._c;return a("div",[a("title",[t._v("Complaints - Housekeeper Admin Dashboard")]),a("div",{staticClass:"main-content"},[a("div",{staticClass:"header bg-background pb-6 pt-5 pt-md-6"},[a("div",{staticClass:"container-fluid"})]),a("div",{staticClass:"container-fluid mt--5"},[a("div",{staticClass:"row mt-2 pb-5"},[a("div",{staticClass:"col-xl-12 mb-5 mb-xl-0"},[a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-header border-0"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col"},[a("h5",{staticClass:"mb-0"},[t._v("Complaints Record")])])])]),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table align-items-center table-flush"},[a("thead",{staticClass:"thead-light"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("HostelCleaner")]),a("th",{attrs:{scope:"col"}},[t._v("Room")]),a("th",{attrs:{scope:"col"}},[t._v("Date")]),a("th",{attrs:{colspan:"3"}},[t._v("Complaint")])])]),a("tbody")])])])])])])])])}],j={name:"AdminComplain",components:{}},U=j,B=(0,v.Z)(U,$,F,!1,null,null,null),M=B.exports,W=function(){var t=this;t._self._c;return t._m(0)},z=[function(){var t=this,a=t._self._c;return a("div",[a("title",[t._v("Suggestions - Housekeeper Admin Dashboard")]),a("body",[a("div",{staticClass:"main-content"},[a("div",{staticClass:"header bg-background pb-6 pt-5 pt-md-6"},[a("div",{staticClass:"container-fluid"})]),a("div",{staticClass:"container-fluid mt--5"},[a("div",{staticClass:"row mt-2 pb-5"},[a("div",{staticClass:"col-xl-12 mb-5 mb-xl-0"},[a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-header border-0"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col"},[a("h5",{staticClass:"mb-0"},[t._v("Suggestions Record")])])])]),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table align-items-center table-flush"},[a("thead",{staticClass:"thead-light"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Hostel Cleaner")]),a("th",{attrs:{scope:"col"}},[t._v("Room")]),a("th",{attrs:{scope:"col"}},[t._v("Date")]),a("th",{attrs:{colspan:"3"}},[t._v("Suggestions")])])]),a("tbody")])])])])])])])])])}],J={name:"AdminSuggest",components:{}},G=J,K=(0,v.Z)(G,W,z,!1,null,null,null),V=K.exports,X=function(){var t=this;t._self._c;return t._m(0)},Y=[function(){var t=this,a=t._self._c;return a("div",[a("title",[t._v("Register Student - Housekeeper Admin Dashboard")]),a("div",{staticClass:"main-content"},[a("div",{staticClass:"header bg-background pb-6 pt-5 pt-md-6"},[a("div",{staticClass:"container-fluid"})]),a("div",{staticClass:"container-fluid mt--5 pb-6"},[a("div",{staticClass:"row mt-2"},[a("div",{staticClass:"col-xl-12 order-xl-1"},[a("div",{staticClass:"card bg-light shadow"},[a("div",{staticClass:"card-header bg-white border-0"},[a("h5",{staticClass:"mb-0"},[t._v("Register New Student")])]),a("div",{staticClass:"card-body pb-5"},[a("form",{attrs:{method:"POST",autocomplete:"off",action:"allothandler.php"}},[a("div",{staticClass:"pl-lg-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label",attrs:{for:"input-id"}},[t._v("Roll Number "),a("span",{staticClass:"text-danger"},[t._v("*")])]),a("input",{staticClass:"form-control",attrs:{type:"number",name:"regRoll",id:"input-id",required:"",placeholder:"Enter numeric value"}})])]),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label",attrs:{for:"input-room"}},[t._v("Room Number "),a("span",{staticClass:"text-danger"},[t._v("*")])]),a("input",{staticClass:"form-control",attrs:{type:"text",name:"regRoom",id:"input-room",required:"",placeholder:"Ex : C202"}})])]),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label",attrs:{for:"input-time"}},[t._v("Floor "),a("span",{staticClass:"text-danger"},[t._v("*")])]),a("input",{staticClass:"form-control",attrs:{type:"number",name:"regFloor",id:"input-time",required:"",placeholder:"Enter single digit no."}})])])]),a("button",{staticClass:"btn btn-icon btn-3 btn-primary",attrs:{name:"regSubmit",type:"submit"}},[a("span",{staticClass:"btn-inner--text"},[t._v("Register")])])])])])])])])])])])}],Q={name:"AdminStudRegis",components:{}},tt=Q,at=(0,v.Z)(tt,X,Y,!1,null,null,null),st=at.exports,et=function(){var t=this;t._self._c;return t._m(0)},it=[function(){var t=this,a=t._self._c;return a("div",[a("title",[t._v("Register HouseKeeper - Housekeeper Admin Dashboard")]),a("div",{staticClass:"main-content"},[a("div",{staticClass:"header bg-background pb-6 pt-5 pt-md-6"},[a("div",{staticClass:"container-fluid"})]),a("div",{staticClass:"container-fluid mt--5 pb-6"},[a("div",{staticClass:"row mt-2"},[a("div",{staticClass:"col-xl-12 order-xl-1"},[a("div",{staticClass:"card bg-light shadow"},[a("div",{staticClass:"card-header bg-white border-0"},[a("h5",{staticClass:"mb-0"},[t._v("Register New HostelCleaner")])]),a("div",{staticClass:"card-body pb-5"},[a("form",{attrs:{method:"POST",autocomplete:"off",action:"allothandler.php"}},[a("div",{staticClass:"pl-lg-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label",attrs:{for:"input-id"}},[t._v("Name "),a("span",{staticClass:"text-danger"},[t._v("*")])]),a("input",{staticClass:"form-control",attrs:{type:"text",name:"regName",id:"input-id",required:"",placeholder:"Hostelcleaner Name"}})])]),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label",attrs:{for:"input-room"}},[t._v("Floor "),a("span",{staticClass:"text-danger"},[t._v("*")])]),a("input",{staticClass:"form-control",attrs:{type:"number",name:"regFloor",id:"input-room",required:"",placeholder:"Enter numeric value"}})])])]),a("button",{staticClass:"btn btn-icon btn-3 btn-primary",attrs:{name:"regKeeperSubmit",type:"submit"}},[a("span",{staticClass:"btn-inner--text"},[t._v("Register")])])])])])])])])])])])}],rt={name:"AdminWorkReg",components:{}},lt=rt,ot=(0,v.Z)(lt,et,it,!1,null,null,null),nt=ot.exports,ct=function(){var t=this;t._self._c;return t._m(0)},dt=[function(){var t=this,a=t._self._c;return a("div",[a("title",[t._v("Allot Housekeeper - Housekeeper Admin Dashboard")]),a("body",[a("div",{staticClass:"main-content"},[a("div",{staticClass:"header bg-background pb-6 pt-5 pt-md-6"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"alert bg-success bg-gradient alert-success alert-dismissible fade show",attrs:{role:"alert"}},[a("span",{staticClass:"alert-inner--icon"},[a("i",{staticClass:"ni ni-like-2"})]),a("span",{staticClass:"alert-inner--text"},[a("strong",[t._v("Welcome to online Hostel Cleaner admin portal.")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])])]),a("div",{staticClass:"container-fluid mt--5 pb-6"},[a("div",{staticClass:"row mt-2"},[a("div",{staticClass:"col-xl-12 order-xl-1"},[a("div",{staticClass:"card bg-light shadow"},[a("div",{staticClass:"card-header bg-white border-0"},[a("h5",{staticClass:"mb-0"},[t._v("Allot Housekeeper")])]),a("div",{staticClass:"card-body pb-5"},[a("form",{attrs:{method:"POST",autocomplete:"off",action:"allothandler.php"}},[a("div",{staticClass:"pl-lg-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label",attrs:{for:"input-id"}},[t._v("Request Id")]),a("input",{staticClass:"form-control",attrs:{type:"text",name:"allotId",id:"input-id",readonly:"",value:""}})])]),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label",attrs:{for:"input-room"}},[t._v("Room Number")]),a("input",{staticClass:"form-control",attrs:{type:"text",name:"allotRoom",id:"input-room",disabled:"",value:" "}})])]),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label",attrs:{for:"input-time"}},[t._v("Time Requested")]),a("input",{staticClass:"form-control",attrs:{type:"text",name:"allotTime",id:"input-time",disabled:"",value:""}})])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label",attrs:{for:"input-requestid"}},[t._v("Housekeeper"),a("span",{staticClass:"text-danger"},[t._v("*")])]),a("select",{staticClass:"form-control",attrs:{name:"workerId",id:"input-requestid",required:""}},[a("option",{attrs:{selected:"true",value:"",disabled:"disabled"}},[t._v("Select Option")])])])])]),a("button",{staticClass:"btn btn-icon btn-3 btn-primary",attrs:{name:"allotSubmit",type:"submit"}},[a("span",{staticClass:"btn-inner--text"},[t._v("Submit")])])])])])])])])])])])])}],mt={name:"AllotworkerApp",components:{}},ut=mt,pt=(0,v.Z)(ut,ct,dt,!1,null,null,null),vt=pt.exports,bt=function(){var t=this;t._self._c;return t._m(0)},Ct=[function(){var t=this,a=t._self._c;return a("div",[a("title",[t._v("Student Profile - Housekeeper Student Dashboard")]),a("body",[a("div",{staticClass:"main-content"},[a("div",{staticClass:"header bg-background pb-6 pt-5 pt-md-6"},[a("div",{staticClass:"container-fluid"})]),a("div",{staticClass:"container-fluid mt--5"},[a("div",{staticClass:"row mt-2"},[a("div",{staticClass:"col-xl-12 mb-5 mb-xl-0"},[a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-header border-0"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col"},[a("h5",{staticClass:"mb-0"},[t._v("Your Profile")])]),a("div",{staticClass:"col text-right"},[a("a",{staticClass:"btn btn-sm btn-primary",attrs:{href:"mailto:anjushahi2002@gmail.com",target:"_blank"}},[t._v("Request Change")])])])]),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table align-items-center table-flush"},[a("thead",{staticClass:"thead-light"},[a("tr",[a("th",{staticStyle:{"font-size":"12px"},attrs:{scope:"col"}},[t._v("Roll Number")]),a("th",{staticStyle:{"font-size":"13px"},attrs:{scope:"col"}})])]),a("tbody",[a("tr",[a("th",{attrs:{scope:"row"}},[t._v("Hostel Name")])]),a("tr",[a("th",{attrs:{scope:"row"}},[t._v("Floor")])]),a("tr",[a("th",{attrs:{scope:"row"}},[t._v("Room No.")])])])])])])])])])])])])}],ft={name:"userProfile"},ht=ft,gt=(0,v.Z)(ht,bt,Ct,!1,null,null,null),_t=gt.exports,xt=function(){var t=this;t._self._c;return t._m(0)},wt=[function(){var t=this,a=t._self._c;return a("div",[a("title",[t._v("Clean Request - Housekeeper Student Dashboard")]),a("body",[a("div",{staticClass:"main-content"},[a("div",{staticClass:"header bg-background pb-6 pt-5 pt-md-6"},[a("div",{staticClass:"container-fluid"})]),a("div",{staticClass:"container-fluid mt--5 pb-5"},[a("div",{staticClass:"row mt-2"},[a("div",{staticClass:"col-xl-12 order-xl-1"},[a("div",{staticClass:"card bg-light shadow"},[a("div",{staticClass:"card-header bg-white border-0"},[a("h5",{staticClass:"mb-0"},[t._v("Send Clean Request")])]),a("div",{staticClass:"card-body pb-5"},[a("form",{attrs:{autocomplete:"off",method:"POST",action:"studenthandler.php"}},[a("div",{staticClass:"pl-lg-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label",attrs:{for:"dateInput"}},[t._v("Date "),a("span",{staticClass:"text-danger"},[t._v("*")])]),a("div",{staticClass:"input-group input-group-alternative"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"ni ni-calendar-grid-58"})])]),a("input",{staticClass:"form-control datepicker",attrs:{name:"reqDate",id:"dateInput",placeholder:"Select date",type:"text",required:""}})])])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label",attrs:{for:"input-timein"}},[t._v("Available Time "),a("span",{staticClass:"text-danger"},[t._v("*")])]),a("input",{staticClass:"form-control form-control-alternative",attrs:{name:"reqTime",type:"time",id:"input-timein",required:""}})])])]),a("button",{staticClass:"btn btn-icon btn-3 btn-primary",attrs:{name:"reqSubmit",type:"submit"}},[t._v("Submit")])])])])])])])])])])])}],yt={name:"userRequest"},kt=yt,St=(0,v.Z)(kt,xt,wt,!1,null,null,null),Dt=St.exports,At=function(){var t=this;t._self._c;return t._m(0)},Rt=[function(){var t=this,a=t._self._c;return a("div",[a("title",[t._v("Feedback Form - Housekeeper Student Dashboard")]),a("body",[a("div",{staticClass:"main-content"},[a("div",{staticClass:"header bg-background pb-6 pt-5 pt-md-6"},[a("div",{staticClass:"container-fluid"})]),a("div",{staticClass:"container-fluid mt--5 pb-6"},[a("div",{staticClass:"row mt-2"},[a("div",{staticClass:"col-xl-12 order-xl-1"},[a("div",{staticClass:"card bg-light shadow"},[a("div",{staticClass:"card-header bg-white border-0"},[a("h5",{staticClass:"mb-0"},[t._v("HostelCleaner Feedback")])]),a("div",{staticClass:"card-body pb-5"},[a("form",{attrs:{method:"POST",autocomplete:"off",action:"studenthandler.php"}},[a("div",{staticClass:"pl-lg-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label",attrs:{for:"input-requestid"}},[t._v("Request Id "),a("span",{staticClass:"text-danger"},[t._v("*")])]),a("select",{staticClass:"form-control",attrs:{name:"feedReqid",id:"input-requestid",required:""}},[a("option",{attrs:{selected:"true",value:"",disabled:"disabled"}},[t._v("Select Option")])])])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label",attrs:{for:"input-rating"}},[t._v("Rate Service "),a("span",{staticClass:"text-danger"},[t._v("*")])]),a("select",{staticClass:"form-control",attrs:{name:"feedRating",id:"input-rating",required:""}},[a("option",{attrs:{selected:"true",value:"",disabled:"disabled"}},[t._v("Select Option")]),a("option",{attrs:{value:"1"}},[t._v("1 Poor Cleaning")]),a("option",{attrs:{value:"2"}},[t._v("2 Not Satisfied")]),a("option",{attrs:{value:"3"}},[t._v("3 Satisfactory")]),a("option",{attrs:{value:"4"}},[t._v("4 Good Cleaning")]),a("option",{attrs:{value:"5"}},[t._v("5 Excellent Work")])])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label",attrs:{for:"input-timein"}},[t._v("Time In "),a("span",{staticClass:"text-danger"},[t._v("*")])]),a("input",{staticClass:"form-control form-control-alternative",attrs:{name:"feedTimein",type:"time",id:"input-timein",required:""}})])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label",attrs:{for:"input-timeout"}},[t._v("Time Out "),a("span",{staticClass:"text-danger"},[t._v("*")])]),a("input",{staticClass:"form-control form-control-alternative",attrs:{name:"feedTimeout",type:"time",id:"input-timeout",required:""}})])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label",attrs:{for:"input-suggestions"}},[t._v("Suggestions")]),a("textarea",{staticClass:"form-control form-control-alternative",attrs:{name:"feedSuggestion",id:"input-suggestions",rows:"3",placeholder:"We'd love to here some suggestions.."}})])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label",attrs:{for:"input-complaints"}},[t._v("Complaints")]),a("textarea",{staticClass:"form-control form-control-alternative",attrs:{name:"feedComplaints",id:"input-complaints",rows:"3",placeholder:"Got complaints for housekeeping service?"}})])])]),a("button",{staticClass:"btn btn-icon btn-3 btn-primary",attrs:{name:"feedSubmit",type:"submit"}},[a("span",{staticClass:"btn-inner--text"},[t._v("Submit")])])])])])])])])])])])])}],qt={name:"userFeedback",components:{}},Ht=qt,Ot=(0,v.Z)(Ht,At,Rt,!1,null,null,null),Tt=Ot.exports,Pt=function(){var t=this;t._self._c;return t._m(0)},Nt=[function(){var t=this,a=t._self._c;return a("div",[a("title",[t._v("Housekeeper Admin Dashboard")]),a("body",[a("div",{staticClass:"main-content"},[a("div",{staticClass:"header bg-background pb-6 pt-5 pt-md-6"},[a("div",{staticClass:"container-fluid"})]),a("div",{staticClass:"container-fluid mt--5"},[a("div",{staticClass:"row mt-2 pb-5"},[a("div",{staticClass:"col-xl-12 mb-5 mb-xl-0"},[a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-header border-0"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col"},[a("h3",{staticClass:"mb-0"},[t._v("Housekeeping")])])])]),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table align-items-center table-flush"},[a("thead",{staticClass:"thead-light"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Housekeeper")]),a("th",{attrs:{scope:"col"}},[t._v("Date")]),a("th",{attrs:{scope:"col"}},[t._v("Time Requested")]),a("th",{attrs:{scope:"col"}},[t._v("Time In")]),a("th",{attrs:{scope:"col"}},[t._v("Time Out")])])]),a("tbody")])])])])])])])])])}],Et={name:"userDashVue",components:{}},Zt=Et,It=(0,v.Z)(Zt,Pt,Nt,!1,null,null,null),Lt=It.exports,$t=function(){var t=this,a=t._self._c;return a("div",[a("LoadingOverlay",{attrs:{active:t.isLoading}}),a("AlertComp",{attrs:{error:t.error,hideAlert:t.hideAlert}}),a("form",{staticClass:"bg bg-white mx-auto my-4 rounded border",staticStyle:{"max-width":"22rem"},on:{submit:function(a){return a.preventDefault(),t.loginUser.apply(null,arguments)}}},[a("h3",{staticClass:"bg bg-primary w-100 px-3 py-2 text text-white"},[t._v("Sign In")]),a("div",{staticClass:"p-3"},[t._l(t.formDatas,(function(s){return a("div",{key:s.id,staticClass:"mb-3"},[a("label",{staticClass:"form-label",attrs:{for:s.id}},[t._v(t._s(s.label))]),"checkbox"===s.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData[s.model],expression:"formData[e.model]"}],staticClass:"form-control",attrs:{id:s.id,placeholder:s.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.formData[s.model])?t._i(t.formData[s.model],null)>-1:t.formData[s.model]},on:{change:function(a){var e=t.formData[s.model],i=a.target,r=!!i.checked;if(Array.isArray(e)){var l=null,o=t._i(e,l);i.checked?o<0&&t.$set(t.formData,s.model,e.concat([l])):o>-1&&t.$set(t.formData,s.model,e.slice(0,o).concat(e.slice(o+1)))}else t.$set(t.formData,s.model,r)}}}):"radio"===s.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData[s.model],expression:"formData[e.model]"}],staticClass:"form-control",attrs:{id:s.id,placeholder:s.placeholder,type:"radio"},domProps:{checked:t._q(t.formData[s.model],null)},on:{change:function(a){return t.$set(t.formData,s.model,null)}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData[s.model],expression:"formData[e.model]"}],staticClass:"form-control",attrs:{id:s.id,placeholder:s.placeholder,type:s.type},domProps:{value:t.formData[s.model]},on:{input:function(a){a.target.composing||t.$set(t.formData,s.model,a.target.value)}}})])})),a("div",{staticClass:"mb-2"},[t._m(0),a("div",{staticClass:"form-text small"},[a("router-link",{attrs:{to:"/register"}},[t._v("Not a member | Sign Up")])],1)]),t._m(1),a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Sign In")])],2)])],1)},Ft=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"form-text small"},[a("a",{attrs:{href:"/sessions/forgot_password"}},[t._v("forgot password")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"mb-3 form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"}}),a("label",{staticClass:"form-text",attrs:{for:"exampleCheck1"}},[t._v("Check me out")])])}],jt=function(){var t=this,a=t._self._c;return a("div",[t.error?a("div",{staticClass:"alert alert-danger alert-dismissible show m-auto fade w-75",staticStyle:{top:"10px"},attrs:{role:"alert"}},[a("strong",[t._v("Sorry!")]),t._v(" Some error occurred, please try again "),a("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:t.hideAlert}})]):t._e(),t.success?a("div",{staticClass:"alert alert-success alert-dismissible show m-auto fade w-75",staticStyle:{top:"10px"},attrs:{role:"alert"}},[a("strong",[t._v("Hey!")]),t._v(" Action Performed Successfully "),a("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:t.hideAlert}})]):t._e()])},Ut=[],Bt={name:"AlertComp",props:{error:Boolean,success:Boolean,hideAlert:Function}},Mt=Bt,Wt=(0,v.Z)(Mt,jt,Ut,!1,null,null,null),zt=Wt.exports,Jt=function(){var t=this,a=t._self._c;return a("div",[a("div",{class:`loading-overlay ${t.active&&"is-active"}`},[a("span",{staticClass:"fas fa-spinner fa-3x fa-spin"})])])},Gt=[],Kt={name:"LoadingOverlay",props:{active:Boolean}},Vt=Kt,Xt=(0,v.Z)(Vt,Jt,Gt,!1,null,"57575c16",null),Yt=Xt.exports,Qt=s(4311);const ta="https://hostel-cleaner-backend.onrender.com\n",aa=async t=>{const a=localStorage.getItem("isUserExist"),s=await Qt.Z.post(`${ta}/auth/register`,t,{headers:{Authorization:"Bearer "+a}}),e=s.data;return e},sa=async t=>{const a=localStorage.getItem("isUserExist"),s=await Qt.Z.post(`${ta}/auth/login`,t,{headers:{Authorization:"Bearer "+a}});return s};var ea={name:"LoginComp",data(){return{formDatas:[{label:"Email",type:"text",placeholder:"Enter Email",isRequired:!0,id:"email",model:"email"},{label:"Password",type:"password",placeholder:"Enter Password",isRequired:!0,id:"pass",model:"password"}],formData:{email:"",password:""},isLoading:!1,error:!1}},methods:{async loginUser(){this.isLoading=!0;try{const t=await sa(this.formData),a=t.data;if(!t)throw new Error("No user found");console.log(a),localStorage.setItem("isUserExist",a.token),localStorage.setItem("userData",JSON.stringify(a)),this.$router.push("/adDash")}catch(t){this.error=!0,console.log("Error:",t.message)}this.isLoading=!1},hideAlert(){this.error=!1}},components:{LoadingOverlay:Yt,AlertComp:zt}},ia=ea,ra=(0,v.Z)(ia,$t,Ft,!1,null,null,null),la=ra.exports,oa=function(){var t=this,a=t._self._c;return a("div",[a("div",[a("LoadingOverlay",{attrs:{active:t.isLoading}}),a("AlertComp",{attrs:{error:t.error,success:t.success,hideAlert:t.hideAlert}}),a("form",{staticClass:"bg bg-white mx-auto my-4 rounded border w-75",on:{submit:function(a){return a.preventDefault(),t.register.apply(null,arguments)}}},[a("h3",{staticClass:"bg bg-primary w-100 px-3 py-2 text text-white"},[t._v("Registration Form")]),a("div",{staticClass:"p-3"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6 form-group mb-3"},[a("label",[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Name Here.."},domProps:{value:t.formData.name},on:{input:function(a){a.target.composing||t.$set(t.formData,"name",a.target.value)}}})]),a("div",{staticClass:"col-sm-6 form-group mb-3"},[a("label",[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Enter Email Here.."},domProps:{value:t.formData.email},on:{input:function(a){a.target.composing||t.$set(t.formData,"email",a.target.value)}}})])]),a("div",{staticClass:"col-sm-6 form-group mb-3"},[a("label",[t._v("User Type")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.userType,expression:"formData.userType"}],staticClass:"form-control",on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.formData,"userType",a.target.multiple?s:s[0])}}},[a("option",{attrs:{value:"student"}},[t._v("Student")]),a("option",{attrs:{value:"admin"}},[t._v("Admin")])])]),a("div",{staticClass:"form-group mb-3"},[a("label",[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Enter Password Here.."},domProps:{value:t.formData.password},on:{input:function(a){a.target.composing||t.$set(t.formData,"password",a.target.value)}}})])]),a("div",{staticClass:"my-2"},[a("div",{staticClass:"form-text small"},[a("router-link",{attrs:{to:"/login"}},[t._v("Already a member | Sign In")])],1)]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Register")])])])],1)])},na=[],ca={name:"RegistrationComp",data(){return{formData:{name:"",email:"",userType:""},isLoading:!1,error:!1,success:!1}},methods:{async register(){console.log(this.formData),this.hideAlert(),this.isLoading=!0;try{await aa(this.formData),this.success=!0,console.log("Registered")}catch(t){this.error=!0,console.log("Error:",t.message)}this.isLoading=!1},hideAlert(){this.error=!1,this.success=!1}},components:{LoadingOverlay:Yt,AlertComp:zt}},da=ca,ma=(0,v.Z)(da,oa,na,!1,null,"5aaeff63",null),ua=ma.exports;function pa(t,a,s){let e=JSON.parse(localStorage.getItem("token"));if(!e)return s("/login");s()}function va(t,a,s){let e=JSON.parse(localStorage.getItem("token"));if(e)return s("/dashboard");s()}function ba(t,a,s){let e=JSON.parse(localStorage.getItem("token"));if(e)return s("/dashboard");s()}const Ca=new r.ZP({routes:[{name:"login",path:"/login",component:la,beforeEnter:ba},{name:"register",path:"/register",component:ua,beforeEnter:va},{name:"addashboard",path:"/addashboard",component:L,beforeEnter:pa},{name:"adallot",path:"/adallot",component:vt},{name:"adcomplain",path:"/adcomplain",component:M},{name:"adsuggest",path:"/adsuggest",component:V},{name:"adstudregis",path:"/adstudregis",component:st},{name:"adworkreg",path:"/adworkreg",component:nt},{name:"usprofile",path:"/usprofile",component:_t},{name:"usrequest",path:"/usrequest",component:Dt},{name:"usfeedback",path:"/usfeedback",component:Tt},{name:"usdash",path:"/usdash",component:Lt}]});var fa=Ca;e["default"].config.productionTip=!1,new e["default"]({router:fa,render:t=>t(T)}).$mount("#app")}},a={};function s(e){var i=a[e];if(void 0!==i)return i.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(a,e,i,r){if(!e){var l=1/0;for(d=0;d<t.length;d++){e=t[d][0],i=t[d][1],r=t[d][2];for(var o=!0,n=0;n<e.length;n++)(!1&r||l>=r)&&Object.keys(s.O).every((function(t){return s.O[t](e[n])}))?e.splice(n--,1):(o=!1,r<l&&(l=r));if(o){t.splice(d--,1);var c=i();void 0!==c&&(a=c)}}return a}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[e,i,r]}}(),function(){s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,{a:a}),a}}(),function(){s.d=function(t,a){for(var e in a)s.o(a,e)&&!s.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:a[e]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};s.O.j=function(a){return 0===t[a]};var a=function(a,e){var i,r,l=e[0],o=e[1],n=e[2],c=0;if(l.some((function(a){return 0!==t[a]}))){for(i in o)s.o(o,i)&&(s.m[i]=o[i]);if(n)var d=n(s)}for(a&&a(e);c<l.length;c++)r=l[c],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(d)},e=self["webpackChunkhostelcleaner"]=self["webpackChunkhostelcleaner"]||[];e.forEach(a.bind(null,0)),e.push=a.bind(null,e.push.bind(e))}();var e=s.O(void 0,[998],(function(){return s(3704)}));e=s.O(e)})();
//# sourceMappingURL=app.293afe04.js.map