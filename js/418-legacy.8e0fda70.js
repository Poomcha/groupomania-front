"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[418],{6307:function(t,e,i){i.d(e,{Z:function(){return N}});i(2526),i(1817);var a=i(6252),o=i(3577),n=i(9963),r={id:"picture-ctn",class:"card-profile__img-ctn"},s=["src"],l={class:"card-profile__infos-ctn ctn--column"},d={class:"ctn ctn--flex-start"},p={class:"text--bold-w text--normal-f text--red-underline"},m={id:"firstName"},u={id:"lastName"},c={key:0,id:"email-ctn",class:"text--normal-w text--normal-f"},f={id:"position-ctn",class:"text--light text--normal-f text--bold-w"},w={id:"position"},g={id:"description-ctn",class:"text--black text--small-f"},h={id:"description"};function v(t,e,i,v,x,b){var _=this;return(0,a.wg)(),(0,a.iD)("figure",{id:"cardprofile",class:(0,o.C_)(["card-profile",{cardProfilesView:b.isProfilesView}])},[(0,a._)("a",{href:"",class:"link text--normal-w text--normal-f ctn ctn--flex-start",onClick:e[1]||(e[1]=(0,n.iM)((function(e){return t.$emit("sendid",_.userId)}),["prevent"]))},[(0,a._)("div",r,[(0,a._)("img",{src:i.profilePicURL,alt:"Profile Picture",onError:e[0]||(e[0]=function(){return b.imgUrlAlt&&b.imgUrlAlt.apply(b,arguments)})},null,40,s)]),(0,a._)("div",l,[(0,a._)("div",d,[(0,a._)("div",p,[(0,a._)("span",m,(0,o.zw)(i.firstName+" "),1),(0,a._)("span",u,(0,o.zw)(i.lastName),1)])]),i.email?((0,a.wg)(),(0,a.iD)("div",c,(0,o.zw)(i.email),1)):(0,a.kq)("",!0),(0,a._)("div",f,[(0,a._)("p",w,(0,o.zw)(i.position),1)]),(0,a._)("div",g,[(0,a._)("p",h,(0,o.zw)(i.description),1)])])])],2)}i(8309);var x={name:"CardProfile",el:"#cardprofile",props:{userId:{type:String,required:!0},profilePicURL:{type:String,default:"https://polar-escarpment-64317.herokuapp.com/images_default/profile_pic_placeholder.svg"},firstName:{type:String,required:!0},lastName:{type:String,required:!0},position:{type:String,default:"Travaille chez Groupomania"},description:{type:String,default:"✌️"},email:{type:String},computed:{}},data:function(){return{}},computed:{isProfilesView:function(){return"profiles"===this.$route.name}},methods:{imgUrlAlt:function(t){t.target.src="https://polar-escarpment-64317.herokuapp.com/images_default/profile_pic_placeholder.svg"}}},b=i(3744);const _=(0,b.Z)(x,[["render",v]]);var N=_},1930:function(t,e,i){i.d(e,{Z:function(){return q}});i(2526),i(1817);var a=i(6252),o=i(9963),n=i(3577),r={id:"formProfile",class:"form-profile ctn ctn--column"},s={class:"ctn ctn--column"},l={key:0,for:"upload-file",class:"btn text--btn text--center text--normal-w text--normal-f"},d={key:1,for:"upload-file",class:"btn text--btn text--center text--normal-w text--normal-f"},p=["src"],m={key:0,class:"text--error text--center text--normal-f text--bold-w"},u={class:"text--normal-f text--normal-w text--label ctn--column input-wrap"},c={for:"firstName"},f={key:0},w={class:"text--normal-f text--normal-w text--label ctn--column input-wrap"},g={for:"lastName"},h={key:0},v={class:"text--normal-f text--normal-w text--label ctn--column input-wrap"},x={for:"position"},b={key:0},_={class:"text--normal-f text--normal-w text--label ctn--column input-wrap textarea-wrap"},N={for:"description"},y={key:0};function P(t,e,i,P,k,V){var C=(0,a.up)("SubmitButton");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("form",{class:"ctn ctn--column ctn--space-between",enctype:"multipart/form-data",onSubmit:e[10]||(e[10]=(0,o.iM)((function(t){return V.updateProfile()}),["prevent"])),onInput:e[11]||(e[11]=function(t){return V.submitValidation()})},[(0,a._)("div",s,[k.imagePreview||i.oldImg?((0,a.wg)(),(0,a.iD)("label",d,"Changer l'image")):((0,a.wg)(),(0,a.iD)("label",l,"Ajouter une image")),(0,a._)("input",{class:"input-file",id:"upload-file",type:"file",accept:".jpg, .jpeg, .png",onChange:e[0]||(e[0]=function(t){return V.handleFileUpload(t)})},null,32),(0,a._)("img",{src:k.imagePreview?k.imagePreview:i.oldImg,class:"img-preview-profile",onError:e[1]||(e[1]=function(){return V.imgUrlAlt&&V.imgUrlAlt.apply(V,arguments)})},null,40,p)]),k.validator.file?((0,a.wg)(),(0,a.iD)("p",m," Fichiers autorisés : .jpg, .jpeg, .png, 5Mo maximum. ")):(0,a.kq)("",!0),(0,a._)("div",u,[(0,a._)("label",c,(0,n.zw)(k.label.firstName),1),(0,a.wy)((0,a._)("input",{class:"input text--normal-f text--light-w",id:"firstName",name:"firstName",type:"text",placeholder:"Jacques","onUpdate:modelValue":e[2]||(e[2]=function(t){return k.form.firstName=t}),onInput:e[3]||(e[3]=function(t){return V.firstNameValidation()})},null,544),[[o.nr,k.form.firstName]]),k.validator.fistName?((0,a.wg)(),(0,a.iD)("span",f,"Prénom invalide.")):(0,a.kq)("",!0)]),(0,a._)("div",w,[(0,a._)("label",g,(0,n.zw)(k.label.lastName),1),(0,a.wy)((0,a._)("input",{class:"input text--normal-f text--light-w",id:"lastName",name:"lastname",type:"text",placeholder:"Dupont","onUpdate:modelValue":e[4]||(e[4]=function(t){return k.form.lastName=t}),onInput:e[5]||(e[5]=function(t){return V.lastNameValidation()})},null,544),[[o.nr,k.form.lastName]]),k.validator.lastName?((0,a.wg)(),(0,a.iD)("span",h,"Nom invalide.")):(0,a.kq)("",!0)]),(0,a._)("div",v,[(0,a._)("label",x,(0,n.zw)(k.label.position),1),(0,a.wy)((0,a._)("input",{class:"input text--normal-f text--light-w",id:"position",name:"position",type:"text",placeholder:"Comptable","onUpdate:modelValue":e[6]||(e[6]=function(t){return k.form.position=t}),onInput:e[7]||(e[7]=function(t){return V.positionValidation()})},null,544),[[o.nr,k.form.position]]),k.validator.position?((0,a.wg)(),(0,a.iD)("span",b,"Nom de poste invalide.")):(0,a.kq)("",!0)]),(0,a._)("div",_,[(0,a._)("label",N,(0,n.zw)(k.label.description),1),(0,a.wy)((0,a._)("textarea",{class:"textarea text--normal-f text--light-w",id:"description",name:"description",type:"text",placeholder:"J'aime bien compter.","onUpdate:modelValue":e[8]||(e[8]=function(t){return k.form.description=t}),onInput:e[9]||(e[9]=function(t){return V.descriptionValidation()})},null,544),[[o.nr,k.form.description]]),k.validator.description?((0,a.wg)(),(0,a.iD)("span",y,"50 caractères maximum autorisés.")):(0,a.kq)("",!0)]),(0,a.Wm)(C,{class:"ctn",label:k.label.submit,disabled:k.disableSubmit},null,8,["label","disabled"])],32)])}var k=i(4648),V=(i(1539),i(8783),i(3948),i(285),i(1637),i(3403)),C=i(8637),S=i(5844),D={name:"FormProfile",el:"#formProfile",components:{SubmitButton:V.Z},data:function(){return{label:{submit:"Mettre à jour",firstName:"Prénom",lastName:"Nom",position:"Poste",description:"Description"},form:{image:this.oldImg,firstName:this.oldFirstName,lastName:this.oldLastName,position:this.oldPosition,description:this.oldDescription},validator:{file:!1,firstName:!1,lastName:!1,position:!1,description:!1},disableSubmit:!0,imagePreview:void 0}},computed:{},methods:(0,k.Z)((0,k.Z)({firstNameValidation:function(){this.validator.firstName=(0,S.validateName)(this.form.firstName)},lastNameValidation:function(){this.validator.lastName=(0,S.validateName)(this.form.lastName)},positionValidation:function(){this.validator.position=(0,S.validateName)(this.form.position)},descriptionValidation:function(){this.validator.description=(0,S.validateDescription)(this.form.description)},submitValidation:function(){this.disableSubmit=(0,S.validateProfileForm)(this.validator,this.form,this.get_profile_status)},handleFileUpload:function(t){this.form.image=t.target.files[0],this.validator.file=(0,S.validateImage)(this.form.image),this.imagePreview=URL.createObjectURL(this.form.image)}},(0,C.nv)(["update_profile","get_profile_status"])),{},{updateProfile:function(){var t=this;this.update_profile({form:this.form,userId:this.$route.params.userId}).then((function(){t.$emit("profileupdated")})).catch((function(t){console.log(t)}))},imgUrlAlt:function(t){t.target.src="https://polar-escarpment-64317.herokuapp.com/images_default/profile_pic_placeholder.svg"}}),props:{oldFirstName:{type:String,default:""},oldLastName:{type:String,default:""},oldPosition:{type:String,default:""},oldDescription:{type:String,default:""},oldImg:{type:String,default:void 0}}},U=i(3744);const I=(0,U.Z)(D,[["render",P]]);var q=I},4716:function(t,e,i){i.d(e,{Z:function(){return y}});var a=i(6252),o=i(9963),n={id:"form-pwd"},r={key:0,class:"text--normal-f text--normal-w text--label ctn--column input-wrap"},s=(0,a._)("label",{for:"oldPassword"},"Ancien mot de passe",-1),l={class:"text--normal-f text--normal-w text--label ctn--column input-wrap"},d=(0,a._)("label",{for:"password"},"Nouveau mot de passe",-1),p={key:1,class:"text--center text--error text--small-f text--bold-w"},m={class:"text--normal-f text--normal-w text--label ctn--column input-wrap"},u=(0,a._)("label",{for:"passwordConf"},"Confirmez votre mot de passe",-1),c={key:2,class:"text--center text--error text--small-f text--bold-w"},f={key:1,class:"text--center text--normal-f text--bold-w"};function w(t,e,i,w,g,h){var v=(0,a.up)("SubmitButton");return(0,a.wg)(),(0,a.iD)("div",n,[g.success?((0,a.wg)(),(0,a.iD)("p",f," Mot de passe modifié avec succès ! ")):((0,a.wg)(),(0,a.iD)("form",{key:0,class:"ctn ctn--column ctn--space-between",onSubmit:e[5]||(e[5]=(0,o.iM)((function(t){return h.changePwd()}),["prevent"])),onInput:e[6]||(e[6]=function(t){return h.submitValidation()})},[h.isAdminRoute?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",r,[s,(0,a.wy)((0,a._)("input",{class:"input text--normal-f text--light-w",type:"password",id:"oldPassword",name:"oldPassword",autocomplete:"password",required:"","onUpdate:modelValue":e[0]||(e[0]=function(t){return g.form.oldPassword=t})},null,512),[[o.nr,g.form.oldPassword]])])),(0,a._)("div",l,[d,(0,a.wy)((0,a._)("input",{class:"input text--normal-f text--light-w",type:"password",id:"password",name:"password",autocomplete:"new-password",required:"","onUpdate:modelValue":e[1]||(e[1]=function(t){return g.form.password=t}),onInput:e[2]||(e[2]=function(t){return h.passwordValidation()})},null,544),[[o.nr,g.form.password]])]),g.validator.password?((0,a.wg)(),(0,a.iD)("p",p," Mot de passe invalide, doit contenir au moins 1 lettre majuscule, une miniscule, un chiffre, un caractère spécial et entre 8 et 16 caractères. ")):(0,a.kq)("",!0),(0,a._)("div",m,[u,(0,a.wy)((0,a._)("input",{class:"input text--normal-f text--light-w",type:"password",id:"passwordConf",name:"passwordConf",autocomplete:"new-password",required:"","onUpdate:modelValue":e[3]||(e[3]=function(t){return g.form.passwordConf=t}),onInput:e[4]||(e[4]=function(t){return h.passwordConfValidation()})},null,544),[[o.nr,g.form.passwordConf]])]),g.validator.passwordConf?((0,a.wg)(),(0,a.iD)("p",c," Mots de passe différents. ")):(0,a.kq)("",!0),(0,a.Wm)(v,{label:g.label.submit,disabled:g.disableSubmit},null,8,["label","disabled"])],32))])}var g=i(4648),h=(i(8309),i(5844)),v=i(3403),x=i(8637),b={name:"FormPwd",el:"#form-pwd",components:{SubmitButton:v.Z},data:function(){return{label:{submit:"Changer le mot de passe"},form:{oldPassword:"",password:"",passwordConf:""},validator:{password:!1,passwordConf:!1},disableSubmit:!0,success:!1}},computed:{isAdminRoute:function(){return"moderate-profile"===this.$route.name}},methods:(0,g.Z)((0,g.Z)({passwordValidation:function(){this.validator.password=(0,h.validatePassword)(this.form.password)},passwordConfValidation:function(){this.validator.passwordConf=(0,h.validatePasswordConf)(this.form.password,this.form.passwordConf)},submitValidation:function(){this.$store.getters.is_moderator?this.disableSubmit=(0,h.validateForm)(this.validator,{password:this.password,passwordConf:this.passwordConf}):this.disableSubmit=(0,h.validateForm)(this.validator,this.form)}},(0,x.nv)(["change_pwd"])),{},{changePwd:function(){var t=this;this.change_pwd(this.form).then((function(){t.success=!0})).catch((function(){t.success=!1}))}})},_=i(3744);const N=(0,_.Z)(b,[["render",w]]);var y=N}}]);
//# sourceMappingURL=418-legacy.8e0fda70.js.map