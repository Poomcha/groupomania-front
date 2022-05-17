"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[141],{1871:function(t,e,l){l.d(e,{Z:function(){return M}});var a=l(6252),i=l(9963),o=l(3577);const n={id:"form-post",class:"form-post"},r={class:"ctn ctn--column"},s={key:0,for:"upload-file",class:"btn text--btn text--center text--normal-w text--normal-f"},c={key:1,for:"upload-file",class:"btn text--btn text--center text--normal-w text--normal-f"},m=["src"],d={key:0,class:"text--error text--center text--normal-f text--bold-w"},u={class:"text--normal-f text--normal-w text--label ctn--column input-wrap"},p={for:"title"},f={key:1,class:"text--error text--center text--normal-f text--bold-w"},x={class:"text--normal-f text--normal-w text--label ctn ctn--space-between select-wrap"},b={for:"type"},y=["value"],g={class:"text--normal-f text--normal-w text--label ctn--column input-wrap textarea-wrap"},h={for:"text"},w={class:"ctn"};function v(t,e,l,v,P,_){const k=(0,a.up)("CancelButton"),C=(0,a.up)("SubmitButton");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("form",{class:"ctn ctn--column ctn--space-between",enctype:"multipart/form-data",onSubmit:e[7]||(e[7]=(0,i.iM)((t=>_.createOrModifyPost()),["prevent"])),onInput:e[8]||(e[8]=t=>_.submitValidation())},[(0,a._)("div",r,[P.imagePreview||l.oldPicture?((0,a.wg)(),(0,a.iD)("label",c,"Changer l'image")):((0,a.wg)(),(0,a.iD)("label",s,"Ajouter une image")),(0,a._)("input",{class:"input-file",id:"upload-file",type:"file",accept:".jpg, .jpeg, .png",onChange:e[0]||(e[0]=t=>_.handleFileUpload(t))},null,32),(0,a._)("img",{src:P.imagePreview?P.imagePreview:l.oldPicture,class:"img-preview"},null,8,m)]),P.validator.file?((0,a.wg)(),(0,a.iD)("p",d," Fichiers autorisés : .jpg, .jpeg, .png, 5Mo maximum. ")):(0,a.kq)("",!0),(0,a._)("div",u,[(0,a._)("label",p,(0,o.zw)(P.label.title),1),(0,a.wy)((0,a._)("input",{class:"input text--normal-f text--light-w",id:"title",name:"title",type:"text",placeholder:"La Menace Fantôme","onUpdate:modelValue":e[1]||(e[1]=t=>P.form.title=t),onChange:e[2]||(e[2]=t=>_.titleValidation())},null,544),[[i.nr,P.form.title]])]),P.validator.title?((0,a.wg)(),(0,a.iD)("p",f," Le titre ne doit pas faire plus de 50 caractères. ")):(0,a.kq)("",!0),(0,a._)("div",x,[(0,a._)("label",b,(0,o.zw)(P.label.type),1),(0,a.wy)((0,a._)("select",{name:"type",id:"type","onUpdate:modelValue":e[3]||(e[3]=t=>P.form.type=t),class:"select text--normal-f text--normal-w text--label"},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(P.types,(t=>((0,a.wg)(),(0,a.iD)("option",{key:t,value:t},(0,o.zw)(t),9,y)))),128))],512),[[i.bM,P.form.type]])]),(0,a._)("div",g,[(0,a._)("label",h,(0,o.zw)(P.label.text),1),(0,a.wy)((0,a._)("textarea",{class:"textarea text--normal-f text--light-w",id:"text",name:"text",type:"textarea",placeholder:"Écrivez ici ...","onUpdate:modelValue":e[4]||(e[4]=t=>P.form.text=t),onChange:e[5]||(e[5]=t=>_.textValidation())},"\r\n        ",544),[[i.nr,P.form.text]])]),(0,a._)("div",w,[(0,a.Wm)(k,{label:P.label.cancel,onCancel:e[6]||(e[6]=t=>_.cancel())},null,8,["label"]),"create-post"===this.$route.name?((0,a.wg)(),(0,a.j4)(C,{key:0,class:"ctn ctn--flex-end",label:P.label.submit,disabled:P.disableSubmit},null,8,["label","disabled"])):(0,a.kq)("",!0),"modify-post"===this.$route.name?((0,a.wg)(),(0,a.j4)(C,{key:1,class:"ctn ctn--flex-end",label:P.label.modify},null,8,["label"])):(0,a.kq)("",!0)])],32)])}var P=l(3403);const _={id:"cancel-button"};function k(t,e,l,i,n,r){return(0,a.wg)(),(0,a.iD)("div",_,[(0,a._)("button",{type:"button",onClick:e[0]||(e[0]=e=>t.$emit("cancel")),class:"btn text--btn text--center text--normal-w text--normal-f"},(0,o.zw)(l.label),1)])}var C={name:"CancelButton",el:"#cancel-button",props:{label:{type:String,required:!0}}},T=l(3744);const S=(0,T.Z)(C,[["render",k]]);var D=S,F=l(8637),V=l(5844),$={name:"FormPost",el:"#form-post",components:{SubmitButton:P.Z,CancelButton:D},data(){return{label:{title:"Titre",content:"Contenu",type:"Catégorie",submit:"Publier",modify:"Modifier",cancel:"Annuler"},form:{image:this.oldPicture,title:this.oldTitle,type:this.oldType,text:this.oldText,isImportant:!1},validator:{file:!1,title:!1,type:!1,text:!1},types:{default:"",general:"Général"},imagePreview:void 0,disableSubmit:!0}},computed:{},methods:{handleFileUpload(t){this.form.image=t.target.files[0],this.validator.file=(0,V.validateImage)(this.form.image),this.imagePreview=URL.createObjectURL(this.form.image)},titleValidation(){this.validator.title=(0,V.validateDescription)(this.form.title)},submitValidation(){this.disableSubmit=(0,V.validatePostForm)(this.validator,this.form)},textValidation(){this.validator.text=!1},...(0,F.nv)(["create_modify_post"]),createOrModifyPost(){this.create_modify_post({form:this.form,route:this.$route})},cancel(){"create-post"===this.$route.name?this.$router.push({name:"home"}):this.$router.push({name:"my-profile",params:{userId:this.$store.getters.get_user_id}})}},props:{oldTitle:{type:String,default:""},oldPicture:{type:File,default:null},oldText:{type:String,default:""},oldType:{type:String,default:""}}};const j=(0,T.Z)($,[["render",v]]);var M=j},3141:function(t,e,l){l.r(e),l.d(e,{default:function(){return d}});var a=l(6252);const i={id:"modify-post"};function o(t,e,l,o,n,r){const s=(0,a.up)("FormPost");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(s,{oldPicture:r.myPost.postPictureURL,oldTitle:r.myPost.title,oldText:r.myPost.text,oldType:r.myPost.type},null,8,["oldPicture","oldTitle","oldText","oldType"])])}var n=l(1871),r=l(8637),s={name:"ModifyPost",el:"#modify-post",components:{FormPost:n.Z},computed:{...(0,r.Se)(["get_local_posts"]),myPost(){return this.get_local_posts.find((t=>t.id===this.$route.params.postId))}}},c=l(3744);const m=(0,c.Z)(s,[["render",o]]);var d=m}}]);
//# sourceMappingURL=141.f24ecb3e.js.map