import{n as e}from"./numbers.c7cb4085.js";import{o as a,c as u,t as o}from"./vue.runtime.esm-bundler.c7867100.js";import{_ as m}from"./_plugin-vue_export-helper.8da217d5.js";const s={props:{number:Number,fromNumber:{type:Number,default(){return 0}},formatNumber:{type:Boolean,default(){return!0}}},data(){return{animatedNumber:0}},watch:{number(){this.animateNumber()}},computed:{formattedNumber(){return this.formatNumber?e.numberFormat(this.animatedNumber):this.animatedNumber}},methods:{animateNumber(){const t=e.animateNumbers(this.fromNumber,this.number,r=>this.animatedNumber=r);window.addEventListener("blur",()=>{t.cancel(),this.animatedNumber=this.number})}},mounted(){this.animateNumber()}};function i(t,r,c,l,p,n){return a(),u("span",null,o(n.formattedNumber),1)}const d=m(s,[["render",i]]);export{d as U};
