Vue.component("character",{
    data: function(){
        return {
            cName: false,
            nameText: this.name
        };
    },
    props:["name","code","reveal"],
    methods:{
        revealCodename: function(){
            if(this.cName){
                this.nameText=this.name;
            }else {
                this.nameText=this.code;
            }
            this.cName = !this.cName;
            this.reveal = !this.reveal;
        }
    },
    template: '<button v-on:click="revealCodename">{{nameText}}</button>'
});

var app = new Vue({
    el: "#app",
    data:{
        name:"",
        email:"",
        nameCheck: false,
        emailCheck: false,

        list:[
            {name:"Protagonist",codename:"Joker", reveal: false},
            {name:"Anne",codename:"Panther", reveal: false},
            {name:"Ryuji",codename:"Skull", reveal: false}
        ]
    },
    watch:{
        name: function (){
            if (this.name.length > 2){
                this.nameCheck = true;
            }else {
                this.nameCheck = false;
            }
        },
        //found this email verification check online
        email: function(){
            let validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let userEmail = validEmail.test(this.email);

            if (userEmail) {
                this.emailCheck = true;
            }else {
                this.emailCheck = false;
            }
        }
    },
    computed: {
        submit:function(){
            if (this.nameCheck && this.emailCheck) {
                return "Submitted"
            }else {
                return "Checking for Validation, will submit when requirements met."
            }
        },

    }
})