"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[26],{5485:function(e,t,i){i.d(t,{Z:function(){return m}});var s=i(6252),o=i(3577);const r={id:"date",class:"date text--small-f text--normal-w"};function l(e,t,i,l,n,a){return(0,s.wg)(),(0,s.iD)("p",r,(0,o.zw)(this.date),1)}var n=i(8637),a={name:"Date",el:"#date",props:{id:{type:String,required:!0},type:{type:String,required:!0}},computed:{...(0,n.Se)(["get_local_com_date","get_local_post_date"]),date(){return"POST"===this.type?this.get_local_post_date(this.id):"COM"===this.type?this.get_local_com_date(this.id):void 0}}},c=i(3744);const d=(0,c.Z)(a,[["render",l]]);var m=d},898:function(e,t,i){i.d(t,{Z:function(){return D}});var s=i(6252),o=i(9963),r=i(3577);const l={id:"card-post",class:"card-post ctn--column"},n={class:"ctn ctn--space-between"},a={class:"card-post__creator-infos"},c=["src"],d={class:"text--normal-w"},m={key:0,id:"controllers",class:"ctn ctn--flex-end card-post__controllers"},p={class:"card-post__post-infos"},_={key:0,id:"post-img-ctn",class:"card-post__post-infos__post-img-ctn"},u=["src"],f={id:"title-post-ctn",class:"text--large-f text--normal-w"},h={id:"content-post-ctn",class:"text--normal-f"},g={class:"text--black"},y={key:0,class:"text--normal-w text--label"},b={id:"comments-post-ctn",class:"text--normal-f text--normal-w"};function k(e,t,i,k,v,P){const w=(0,s.up)("ModifyButton"),A=(0,s.up)("DeleteButton"),I=(0,s.up)("Date");return(0,s.wg)(),(0,s.iD)("figure",l,[(0,s._)("div",n,[(0,s._)("div",a,[(0,s._)("a",{href:"",onClick:t[1]||(t[1]=(0,o.iM)((e=>P.goToProfile()),["prevent"])),class:"ctn ctn--flex-start link"},[(0,s._)("div",null,[(0,s._)("img",{src:null===i.creatorImgUrl?void 0:i.creatorImgUrl,alt:"Profil Picture",class:"img img--card_post_profile",onError:t[0]||(t[0]=(...e)=>P.imgUrlAlt&&P.imgUrlAlt(...e))},null,40,c)]),(0,s._)("div",null,[(0,s._)("span",d,(0,r.zw)(i.creatorFirstName+" "+i.creatorLastName),1)])])]),i.creatorId===e.get_user_id||e.is_moderator?((0,s.wg)(),(0,s.iD)("div",m,[(0,s.Wm)(w,{modifyThis:P.modifyPost},null,8,["modifyThis"]),(0,s.Wm)(A,{deleteThis:P.deletePost},null,8,["deleteThis"])])):(0,s.kq)("",!0)]),(0,s.Wm)(I,{type:this.type,id:this.postId,class:"date-ctn"},null,8,["type","id"]),(0,s._)("div",p,[(0,s._)("a",{href:"",onClick:t[2]||(t[2]=(0,o.iM)((e=>P.goToPost()),["prevent"])),class:"link"},[this.imgUrl?((0,s.wg)(),(0,s.iD)("div",_,[(0,s._)("img",{src:i.imgUrl,alt:""},null,8,u)])):(0,s.kq)("",!0),(0,s._)("div",null,[(0,s._)("div",f,[(0,s._)("span",null,(0,r.zw)(i.title),1)]),(0,s._)("div",h,[(0,s._)("p",g,[(0,s.Uk)((0,r.zw)(P.shortContent),1),P.readMore?((0,s.wg)(),(0,s.iD)("span",y,"...lire plus")):(0,s.kq)("",!0)])]),(0,s._)("div",b,[(0,s._)("span",null,(0,r.zw)(i.nbOfCom)+" commentaires",1)])])])])])}var v=i(1513),P=i(3417),w=i(5485),A=i(8637),I={name:"CardPost",el:"#card-post",components:{DeleteButton:v.Z,ModifyButton:P.Z,Date:w.Z},props:{id:{type:String,required:!0},creatorId:{type:String,required:!0},creatorFirstName:{type:String,required:!0},creatorLastName:{type:String,required:!0},creatorImgUrl:{type:String,default:"https://polar-escarpment-64317.herokuapp.com/images_default/profile_pic_placeholder.svg"},title:{type:String,default:"Publication sans titre",required:!0},content:{type:String,default:"Contenu de la publication"},imgUrl:{type:String,default:void 0},nbOfCom:{type:Number,default:0}},data(){return{postId:this.id,type:"POST"}},computed:{...(0,A.Se)(["get_profile_id","get_user_id","is_moderator","get_com_number_for_post"]),shortContent(){return this.content.length>50?`${this.content.slice(0,200)}`:this.content},readMore(){return this.content.length>50}},methods:{goToPost(){this.$router.push({name:"post",params:{postId:this.postId}})},goToProfile(){this.$store.dispatch("go_to_profile",{local_profile_id:this.get_profile_id,local_user_id:this.get_user_id,target_user_id:this.creatorId})},deletePost(){this.$store.dispatch("delete_my_post",this.postId),"post"===this.$route.name&&this.$router.push({name:"home"}),this.deleted=!0},modifyPost(){this.$router.push({name:"modify-post",params:{postId:this.postId}})},imgUrlAlt(e){e.target.src="https://polar-escarpment-64317.herokuapp.com/images_default/profile_pic_placeholder.svg"}}},U=i(3744);const C=(0,U.Z)(I,[["render",k]]);var D=C},142:function(e,t,i){i.r(t),i.d(t,{default:function(){return te}});var s=i(6252),o=i(3577),r=i(9963);const l={id:"my-profile",class:"my-profile"},n={class:"ctn--profile-view"},a={key:0,class:"my-profile__change-profile ctn ctn--column",id:"change-profile"},c=(0,s._)("h1",null,"Modification du profil",-1),d={key:1,id:"mes-infos",class:"my-profile__my-infos"},m=(0,s._)("h1",null,"Mes informations",-1),p={class:"text--normal-f text--bold-w text--label"},_=(0,s.Uk)(" Email : "),u={class:"text--normal-w"},f={key:2,id:"change-pwd"},h=(0,s._)("h1",null,"Modification du mot de passe",-1),g={key:3,id:"my-posts",class:"my-profile__my-posts"},y=(0,s._)("h1",null,"Mes publications",-1),b={key:4,id:"my-coms",class:"my-profile__my-coms"},k=(0,s._)("h1",null,"Mes commentaires",-1),v={key:5,id:"delete-my-account"},P=(0,s._)("h1",null,"Supprimer mon compte",-1),w={key:6,id:"profile",class:"my-profile__profile ctn ctn--column"},A=(0,s._)("h1",null,"Mon profil",-1),I={key:7,class:"btn my-profile__backlink",id:"back-link-ctn"},U={class:"text--btn text--normal-w text--normal-f"};function C(e,t,i,C,D,M){const N=(0,s.up)("Sidebar"),x=(0,s.up)("FormProfile"),O=(0,s.up)("FormPwd"),S=(0,s.up)("MyPosts"),T=(0,s.up)("CardPost"),j=(0,s.up)("DeleteAccount"),L=(0,s.up)("CardProfile");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s.Wm)(N,{sidebar_items:this.sidebar_items,class:"my-profile__sidebar"},null,8,["sidebar_items"]),(0,s._)("div",n,[D.links.changeProfile||!e.get_profile_status?((0,s.wg)(),(0,s.iD)("section",a,[c,(0,s.Wm)(x,{onProfileupdated:t[0]||(t[0]=e=>M.goToProfil()),oldFirstName:e.get_user_profile.firstName,oldLastName:e.get_user_profile.lastName,oldPosition:e.get_user_profile.position,oldDescription:e.get_user_profile.description,oldImg:e.get_user_profile.profilPictureURL},null,8,["oldFirstName","oldLastName","oldPosition","oldDescription","oldImg"])])):D.links.myInfos?((0,s.wg)(),(0,s.iD)("section",d,[m,(0,s._)("ul",p,[(0,s._)("li",null,[_,(0,s._)("span",u,(0,o.zw)(e.get_user_email),1)])])])):D.links.changePwd?((0,s.wg)(),(0,s.iD)("section",f,[h,(0,s.Wm)(O)])):D.links.myPosts?((0,s.wg)(),(0,s.iD)("section",g,[y,(0,s.Wm)(S)])):D.links.myComs?((0,s.wg)(),(0,s.iD)("section",b,[k,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.get_com_post_from_user(e.get_profile_id),(t=>((0,s.wg)(),(0,s.j4)(T,{key:t.id,id:t.id,creatorFirstName:t.Profile.firstName,creatorLastName:t.Profile.lastName,creatorImgUrl:t.Profile.profilPictureURL,creatorId:t.Profile.userId,title:t.title,content:t.text,imgUrl:t.postPictureURL,nbOfCom:e.get_com_number_for_post(t.id)},null,8,["id","creatorFirstName","creatorLastName","creatorImgUrl","creatorId","title","content","imgUrl","nbOfCom"])))),128))])):D.links.deleteAccount?((0,s.wg)(),(0,s.iD)("section",v,[P,(0,s.Wm)(j,{userId:e.get_user_id},null,8,["userId"])])):((0,s.wg)(),(0,s.iD)("section",w,[A,(0,s.Wm)(L,{userId:e.get_user_profile.userId,profilePicURL:e.get_user_profile.profilPictureURL?e.get_user_profile.profilPictureURL:void 0,firstName:e.get_user_profile.firstName,lastName:e.get_user_profile.lastName,position:e.get_user_profile.position?e.get_user_profile.position:void 0,description:e.get_user_profile.description?e.get_user_profile.description:void 0},null,8,["userId","profilePicURL","firstName","lastName","position","description"])])),M.seeBackLink&&!this.links.myProfile&&e.get_profile_status?((0,s.wg)(),(0,s.iD)("div",I,[(0,s._)("a",{class:"link",href:"",onClick:t[1]||(t[1]=(0,r.iM)((e=>M.back()),["prevent"]))},[(0,s._)("span",U,(0,o.zw)(D.backlink),1)])])):(0,s.kq)("",!0)])])}var D=i(1930),M=i(6307);const N={id:"sidebar",class:"sidebar"},x={class:"ctn--column"},O=["onClick"];function S(e,t,i,l,n,a){return(0,s.wg)(),(0,s.iD)("aside",N,[(0,s._)("ul",x,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.sidebar_items,(e=>((0,s.wg)(),(0,s.iD)("li",{key:e},[(0,s._)("a",{class:(0,o.C_)([{activeProfileLink:e.isActive},"link text--normal-w text--normal-f"]),href:"",onClick:(0,r.iM)(e.method,["prevent"])},(0,o.zw)(e.label),11,O)])))),128))])])}var T={name:"Sidebar",el:"#sidebar",data(){return{}},computed:{},props:{sidebar_items:{type:Object,required:!0}},methods:{getActiveLink(){return Object.values(this.links_status).findIndex((e=>e))}}},j=i(3744);const L=(0,j.Z)(T,[["render",S]]);var E=L,Z=i(4716);const q={id:"my-posts"};function F(e,t,i,o,r,l){const n=(0,s.up)("CardPost");return(0,s.wg)(),(0,s.iD)("section",q,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.get_my_posts,(t=>((0,s.wg)(),(0,s.j4)(n,{key:t.id,id:t.id,title:t.title,content:t.text,imgUrl:t.postPictureURL,creatorId:e.get_user_profile.userId,creatorFirstName:e.get_user_profile.firstName,creatorLastName:e.get_user_profile.lastName,creatorImgUrl:e.get_user_profile.profilPictureURL,nbOfCom:e.get_com_number_for_post(t.id)},null,8,["id","title","content","imgUrl","creatorId","creatorFirstName","creatorLastName","creatorImgUrl","nbOfCom"])))),128))])}var R=i(8637),W=i(898),$={name:"MyPosts",el:"#my-posts",components:{CardPost:W.Z},beforeCreate(){this.$store.dispatch("commit_my_posts",this.$store.getters.get_profile_id)},computed:{...(0,R.Se)(["get_my_posts","get_user_profile","get_com_number_for_post"])},watch:{}};const z=(0,j.Z)($,[["render",F]]);var B=z;const H={id:"delete-account",class:"ctn ctn--column ctn--space-between"},K=(0,s._)("p",{class:"text--normal-w text--warning ctn--column input-wrap text--center"},[(0,s.Uk)(" Êtes-vous sûr de vouloir supprimer votre compte ?"),(0,s._)("br"),(0,s.Uk)(" Attention cette action est irréversible ! ")],-1);function Y(e,t,i,o,r,l){const n=(0,s.up)("SubmitButton");return(0,s.wg)(),(0,s.iD)("div",H,[K,(0,s._)("form",{onSubmit:t[0]||(t[0]=e=>l.deleteAccount())},[(0,s.Wm)(n,{label:this.label.delete},null,8,["label"])],32)])}var G=i(3403),J={name:"DeleteAccount",el:"#delete-account",components:{SubmitButton:G.Z},props:{userId:{type:String,required:!0}},data(){return{label:{delete:"Supprimer"}}},methods:{deleteAccount(){this.$store.dispatch("delete_user",this.userId)}}};const Q=(0,j.Z)(J,[["render",Y]]);var V=Q,X={name:"MyProfile",el:"#my-profile",data(){return{sidebar_items:{myProfile:{label:"Mon profil",method:this.goToProfil,isActive:!0},myInfos:{label:"Mes informations",method:this.goToInfos,isActive:!1},myPosts:{label:"Mes publications",method:this.goToMyPosts,isActive:!1},myComs:{label:"Mes publications commentées",method:this.goToMyComs,isActive:!1},updateProfile:{label:"Modifier mon profil",method:this.goToUpdateProfile,isActive:!1},updatePwd:{label:"Modifier mon mot de passe",method:this.goToUpdatePwd,isActive:!1},deleteAccount:{label:"Supprimer mon compte",method:this.goToDeleteAccount,isActive:!1}},backlink:"Retour",links:{myProfile:!0,changePwd:!1,changeProfile:!1,myInfos:!1,myPosts:!1,myComs:!1,deleteAccount:!1}}},components:{Sidebar:E,CardProfile:M.Z,FormProfile:D.Z,FormPwd:Z.Z,MyPosts:B,CardPost:W.Z,DeleteAccount:V},computed:{...(0,R.Se)(["get_update_status","get_user_profile","get_profile_status","get_user_email","get_user_id","get_com_post_from_user","get_profile_id","get_com_number_for_post"]),seeBackLink(){return Object.values(this.links).find((e=>e))}},methods:{...(0,R.nv)(["commit_update_status"]),goToProfil(){Object.keys(this.links).forEach((e=>this.links[e]=!1)),this.links.myProfile=!0,Object.keys(this.sidebar_items).forEach((e=>this.sidebar_items[e].isActive=!1)),this.sidebar_items.myProfile.isActive=!0},goToInfos(){Object.keys(this.links).forEach((e=>this.links[e]=!1)),this.links.myInfos=!0,Object.keys(this.sidebar_items).forEach((e=>this.sidebar_items[e].isActive=!1)),this.sidebar_items.myInfos.isActive=!0},goToUpdateProfile(){Object.keys(this.links).forEach((e=>this.links[e]=!1)),this.links.changeProfile=!0,Object.keys(this.sidebar_items).forEach((e=>this.sidebar_items[e].isActive=!1)),this.sidebar_items.updateProfile.isActive=!0},goToUpdatePwd(){Object.keys(this.links).forEach((e=>this.links[e]=!1)),this.links.changePwd=!0,Object.keys(this.sidebar_items).forEach((e=>this.sidebar_items[e].isActive=!1)),this.sidebar_items.updatePwd.isActive=!0},goToMyPosts(){Object.keys(this.links).forEach((e=>this.links[e]=!1)),this.links.myPosts=!0,Object.keys(this.sidebar_items).forEach((e=>this.sidebar_items[e].isActive=!1)),this.sidebar_items.myPosts.isActive=!0},back(){Object.keys(this.links).forEach((e=>this.links[e]=!1)),Object.keys(this.sidebar_items).forEach((e=>this.sidebar_items[e].isActive=!1)),this.sidebar_items.myProfile.isActive=!0},goToMyComs(){Object.keys(this.links).forEach((e=>this.links[e]=!1)),this.links.myComs=!0,Object.keys(this.sidebar_items).forEach((e=>this.sidebar_items[e].isActive=!1)),this.sidebar_items.myComs.isActive=!0},goToDeleteAccount(){Object.keys(this.links).forEach((e=>this.links[e]=!1)),this.links.deleteAccount=!0,Object.keys(this.sidebar_items).forEach((e=>this.sidebar_items[e].isActive=!1)),this.sidebar_items.deleteAccount.isActive=!0}}};const ee=(0,j.Z)(X,[["render",C]]);var te=ee}}]);
//# sourceMappingURL=26.6918d73b.js.map