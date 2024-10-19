(function(){"use strict";var e={7232:function(e,a,t){var n=t(5130),l=JSON.parse('{"Введите номер телефона":"Enter phone number","Чтобы войти или зарегистрироваться":"To sign in or register","Страна":"Country","Поиск":"Search","Номер телефона":"Phone number","Продолжить":"Continue","Конфиденциальность":"Privacy policy","Условия":"Agreement","Введите код":"Enter the code","Отправлен по номеру":"Sent to","Назад":"Back","Способ получения кода":"Method of obtaining code","Отправить":"Send","Вы все еще не авторизованы в боте, пожалуйста, повторите попытку":"You are still not logged into the bot, please try again","Для использования данного канала связи вам необходимо авторизоваться в боте":"To use this communication channel, you need to log in to the bot","Авторизоваться в боте":"Authorize in the bot","Проверить статус":"Checks status"}'),o=(t(5524),t(7768)),s=t(3981),r=t(5741),u=t(6768);function i(e,a){const t=(0,u.g2)("router-view");return(0,u.uX)(),(0,u.Wv)(t)}var c=t(1241);const d={},v=(0,c.A)(d,[["render",i]]);var p=v,m=t(1387),f=t(4232);function g(e,a){return(0,u.uX)(),(0,u.CE)("div",null,a[0]||(a[0]=[(0,u.Lk)("p",null,"Логотип (Высота 40px, длина до 300px)",-1)]))}const b={},k=(0,c.A)(b,[["render",g],["__scopeId","data-v-2d90ddcc"]]);var h=k,_=t(144),y=t(7254),w=t(5931);const R={class:"d-flex align-center ga-2"};var V=(0,u.pM)({__name:"CountrySelect",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(e){const a=(0,u.fn)(e,"modelValue"),t=[{title:"Kazakhstan (Қазақстан)",flag:"🇰🇿",code:"+7",value:"kazakhstan"},{title:"Kyrgyzstan (Кыргызстан)",flag:"🇰🇬",code:"+998",value:"kyrgyzstan"},{title:"Russia (Россия)",flag:"🇷🇺",code:"+7",value:"russia"},{title:"Uzbekistan (O'zbekiston)",flag:"🇺🇿",code:"+996",value:"uzbekistan"},{title:"United States (United States)",flag:"🇺🇸",code:"+996",value:"usa"}],n=(0,_.KR)(t),{t:l}=(0,w.s9)(),o=e=>{n.value=t.filter((a=>a.title.toLowerCase().includes(e.toLowerCase())))};(0,u.sV)((()=>{a.value=t[2]}));const s=e=>{a.value=t.find((a=>a.value===e))};return(e,t)=>{const r=(0,u.g2)("v-text-field"),i=(0,u.g2)("v-select");return(0,u.uX)(),(0,u.Wv)(i,{items:n.value,"model-value":a.value,label:(0,_.R1)(l)("Страна"),variant:"outlined",class:"country-select","hide-details":"","onUpdate:modelValue":s},{selection:(0,u.k6)((({item:e})=>[(0,u.Lk)("p",null,(0,f.v_)(e.title.split("(")[1].replace(")","")),1)])),"prepend-item":(0,u.k6)((()=>[(0,u.bF)(r,{variant:"solo-filled",density:"compact",class:"px-4","prepend-inner-icon":"mdi-magnify",placeholder:(0,_.R1)(l)("Поиск"),"onUpdate:modelValue":o},null,8,["placeholder"])])),item:(0,u.k6)((({item:e,props:a})=>[(0,u.bF)((0,_.R1)(y.g),(0,u.v6)(a,{class:"px-4 d-flex align-center justify-space-between w-100",title:""}),{prepend:(0,u.k6)((()=>[(0,u.Lk)("div",R,[(0,u.Lk)("p",null,(0,f.v_)(e.raw.flag),1),(0,u.Lk)("p",null,(0,f.v_)(e.raw.title),1)])])),append:(0,u.k6)((()=>[(0,u.Lk)("p",null,(0,f.v_)(e.raw.code),1)])),_:2},1040)])),_:1},8,["items","model-value","label"])}}});const C=(0,c.A)(V,[["__scopeId","data-v-79b87898"]]);var F=C;const x={key:0};var T=(0,u.pM)({__name:"PhoneInput",props:(0,u.zz)({code:{},error:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=e,t=(0,u.fn)(e,"modelValue"),{t:n}=(0,w.s9)();return(e,l)=>{const o=(0,u.g2)("v-text-field");return(0,u.uX)(),(0,u.Wv)(o,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),type:"number",label:(0,_.R1)(n)("Номер телефона"),variant:"outlined",class:"phone-input","hide-details":!e.error,"error-messages":e.error},{"prepend-inner":(0,u.k6)((()=>[a.code?((0,u.uX)(),(0,u.CE)("p",x,(0,f.v_)(a.code),1)):(0,u.Q3)("",!0)])),_:1},8,["modelValue","label","hide-details","error-messages"])}}});const I=T;var L=I,M=t(1114),E=t(4373),K=t(8140);class S{serialize(e){return(0,K.dp)(e)}deserialize(e){return(0,K.Bw)(e)}}const z=new S,U=E.A.create({baseURL:"https://api.kod.mobi/api/v1/message",headers:{"x-api-key":"09459085-5327-4ae9-85a8-214b7755fc2a"}});U.interceptors.response.use((e=>z.serialize(e.data)));class A{constructor(){(0,M.A)(this,"axiosInstance",U)}async createCode(e){return this.axiosInstance.get("/create",{params:{phone:e}})}async sendCode(e,a){return this.axiosInstance.get("/send",{params:{session_id:e,type:a}})}async checkCode(e,a){return U.get("/check",{params:{session_id:e,code:a}})}}const O=new A;var W=t(657);const X=(0,W.nY)("signInStore",(()=>{const e=(0,_.KR)([]),a=(0,_.KR)(""),t=(0,_.KR)();return{availableChannels:e,sessionId:a,sentTo:t}})),B={class:"wrapper"},j={class:"title"},$={class:"subtitle"};var P=(0,u.pM)({__name:"SignIn",props:{country:{},countryModifiers:{},phone:{},phoneModifiers:{}},emits:(0,u.zz)(["onNext"],["update:country","update:phone"]),setup(e,{emit:a}){const t=(0,u.fn)(e,"country"),n=(0,u.fn)(e,"phone"),l=a,o=X(),{t:s}=(0,w.s9)(),r=(0,_.KR)(!1),i=(0,_.KR)(""),c={russia:/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,kazakhstan:/^(\+7|8)?[\s\-]?\(?7\d{2}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/,kyrgyzstan:/^(\+?996|0)?[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{3}$/,uzbekistan:/^(\+?998|0)?[\s\-]?\(?\d{2}\)?[\s\-]?\d{3}[\s\-]?\d{4}$/,usa:/^(\+?1)?[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{4}$/},d=async()=>{if(t.value){if(!c[t.value.value].test(t.value.code+n.value))return void(i.value="Неверный формат номера");i.value="";try{r.value=!0;const e=await O.createCode(t.value.code+n.value);e.success&&(o.availableChannels=e.data.clientChannels,o.sessionId=e.data.sessionId,o.sentTo=e.data.clientChannels.find((a=>a.type===e.data.sentTo)),l("onNext"))}catch(e){console.log(e)}finally{r.value=!1}}};return(0,u.wB)(n,(()=>{i.value=""})),(e,a)=>{const l=(0,u.g2)("v-btn");return(0,u.uX)(),(0,u.CE)("div",B,[(0,u.Lk)("h1",j,(0,f.v_)((0,_.R1)(s)("Введите номер телефона")),1),(0,u.Lk)("p",$,(0,f.v_)((0,_.R1)(s)("Чтобы войти или зарегистрироваться")),1),(0,u.bF)(F,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e)},null,8,["modelValue"]),(0,u.bF)(L,{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=e=>n.value=e),code:t.value?t.value.code:"",error:i.value},null,8,["modelValue","code","error"]),(0,u.bF)(l,{variant:"flat",color:"#007AFF",height:"55",class:"continue-btn",disabled:!n.value,onClick:d},{default:(0,u.k6)((()=>[(0,u.eW)((0,f.v_)((0,_.R1)(s)("Продолжить")),1)])),_:1},8,["disabled"])])}}});const N=(0,c.A)(P,[["__scopeId","data-v-6e0b170c"]]);var D=N;const G={class:"d-flex align-center justify-space-between w-100"},Y={class:"d-flex align-center ga-6"};var H=(0,u.pM)({__name:"ModalFooter",setup(e){const a=(0,_.KR)("Русский"),t=["Русский","English"],n=(0,w.s9)(),l=e=>{switch(e){case"Русский":n.locale.value="ru",localStorage.setItem("locale","ru");break;case"English":n.locale.value="en",localStorage.setItem("locale","en");break}};return(0,u.sV)((()=>{const e=localStorage.getItem("locale");e&&(a.value="ru"===e?"Русский":"English",n.locale.value=e)})),(e,o)=>{const s=(0,u.g2)("v-select"),r=(0,u.g2)("router-link");return(0,u.uX)(),(0,u.CE)("div",G,[(0,u.bF)(s,{modelValue:a.value,"onUpdate:modelValue":[o[0]||(o[0]=e=>a.value=e),l],items:t,variant:"plain",density:"compact","hide-details":"","max-width":"80"},{selection:(0,u.k6)((({item:e})=>[(0,u.Lk)("p",null,(0,f.v_)(e.value),1)])),_:1},8,["modelValue"]),(0,u.Lk)("div",Y,[(0,u.bF)(r,{to:""},{default:(0,u.k6)((()=>[(0,u.eW)((0,f.v_)((0,_.R1)(n).t("Условия")),1)])),_:1}),(0,u.bF)(r,{to:""},{default:(0,u.k6)((()=>[(0,u.eW)((0,f.v_)((0,_.R1)(n).t("Конфиденциальность")),1)])),_:1})])])}}});const J=(0,c.A)(H,[["__scopeId","data-v-aabf984c"]]);var Q=J;const q=["src"];var Z=(0,u.pM)({__name:"ChannelSelect",setup(e){const a=X(),{t:t}=(0,w.s9)(),n=e=>{a.sentTo=a.availableChannels.find((a=>a.name===e))};return(e,l)=>{const o=(0,u.g2)("v-list-item"),s=(0,u.g2)("v-select");return(0,u.uX)(),(0,u.Wv)(s,{"model-value":(0,_.R1)(a).sentTo,items:(0,_.R1)(a).availableChannels,variant:"outlined",label:(0,_.R1)(t)("Способ получения кода"),class:"channel-select","hide-details":"","item-title":"name","onUpdate:modelValue":n},{item:(0,u.k6)((({item:e,props:a})=>[(0,u.bF)(o,(0,u.v6)(a,{title:""}),{prepend:(0,u.k6)((()=>[(0,u.Lk)("img",{src:e.raw.imageUrl,class:"mr-2",alt:"social-icon",width:"24"},null,8,q)])),default:(0,u.k6)((()=>[(0,u.Lk)("p",null,(0,f.v_)(e.raw.name),1)])),_:2},1040)])),_:1},8,["model-value","items","label"])}}});const ee=(0,c.A)(Z,[["__scopeId","data-v-58fa20b4"]]);var ae=ee;const te={key:1,class:"timeout"};var ne=(0,u.pM)({__name:"CodeInput",props:(0,u.zz)({responseError:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=(0,u.fn)(e,"modelValue"),t=X(),{t:l}=(0,w.s9)(),o=(0,_.KR)(t.sentTo?t.sentTo.timeout:0),s=(0,_.KR)(!1),r=(0,_.KR)("");let i;(0,u.sV)((()=>{c()}));const c=()=>{i=setInterval((()=>{0!==o.value?o.value-=1:clearInterval(i)}),1e3)},d=(0,u.EW)((()=>{const e=""+Math.floor(o.value/60),a=""+(o.value-60*Math.floor(o.value/60));return`${+e<10?e.padStart(2,"0"):e}:${+a<10?a.padStart(2,"0"):a}`})),v=async()=>{try{s.value=!0;const e=await O.sendCode(t.sessionId,t.sentTo?t.sentTo.type:"");e.success?o.value=e.data.clientChannel.timeout:(o.value=e.errorParams.timeout,r.value=e.error),c()}catch(e){console.log(e)}finally{s.value=!1}};return(0,u.wB)((()=>t.sentTo),(e=>{o.value=e?e.timeout:0})),(e,t)=>{const i=(0,u.g2)("v-btn"),c=(0,u.g2)("v-text-field");return(0,u.uX)(),(0,u.Wv)(c,{modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=e=>a.value=e),variant:"outlined",label:(0,_.R1)(l)("Введите код"),class:"code-input",type:"number","hide-details":!r.value&&!e.responseError,"error-messages":r.value+e.responseError},{"append-inner":(0,u.k6)((()=>[0===o.value?((0,u.uX)(),(0,u.Wv)(i,{key:0,variant:"text",color:"#007AFF",loading:s.value,onMouseup:t[0]||(t[0]=(0,n.D$)((()=>{}),["stop"])),onMousedown:t[1]||(t[1]=(0,n.D$)((()=>{}),["stop"])),onClick:(0,n.D$)(v,["stop"])},{default:(0,u.k6)((()=>[(0,u.eW)((0,f.v_)((0,_.R1)(l)("Отправить")),1)])),_:1},8,["loading"])):((0,u.uX)(),(0,u.CE)("p",te,(0,f.v_)(d.value),1))])),_:1},8,["modelValue","label","hide-details","error-messages"])}}});const le=(0,c.A)(ne,[["__scopeId","data-v-c71d8706"]]);var oe=le;const se={primary:"#007AFF"},re={class:"wrapper"},ue={class:"title"},ie={class:"subtitle"},ce={class:"d-flex"};var de=(0,u.pM)({__name:"CodeVerification",props:{phone:{},country:{}},emits:["onTelegram","goBack"],setup(e,{emit:a}){const t=e,n=a,l=X(),{t:o}=(0,w.s9)(),s=(0,_.KR)(""),r=(0,_.KR)(!1),i=(0,_.KR)("");(0,u.wB)((()=>l.sentTo),(e=>{e&&"Telegram"===e.name&&(n("onTelegram"),l.sentTo=void 0)}));const c=async()=>{try{r.value=!0;const e=await O.checkCode(l.sessionId,s.value);e.success&&(console.log(e.data.verifyToken),alert(e.data.verifyToken),i.value="")}catch(e){i.value=e.response.data.error}finally{r.value=!1}},d=()=>{n("goBack"),s.value="",i.value=""};return(e,a)=>{const n=(0,u.g2)("v-btn");return(0,u.uX)(),(0,u.CE)("div",re,[(0,u.Lk)("h1",ue,(0,f.v_)((0,_.R1)(o)("Введите код")),1),(0,u.Lk)("p",ie,(0,f.v_)((0,_.R1)(o)("Отправлен по номеру"))+" "+(0,f.v_)(t.country.code)+(0,f.v_)(t.phone),1),(0,u.bF)(ae),(0,u.bF)(oe,{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=e=>s.value=e),"response-error":i.value},null,8,["modelValue","response-error"]),(0,u.Lk)("div",ce,[(0,u.bF)(n,{class:"action-button",variant:"text",color:(0,_.R1)(se).primary,width:"50%","prepend-icon":"mdi-arrow-left",onClick:d},{default:(0,u.k6)((()=>[(0,u.eW)((0,f.v_)((0,_.R1)(o)("Назад")),1)])),_:1},8,["color"]),(0,u.bF)(n,{class:"action-button",width:"50%",color:(0,_.R1)(se).primary,loading:r.value,disabled:!s.value,onClick:c},{default:(0,u.k6)((()=>[(0,u.eW)((0,f.v_)((0,_.R1)(o)("Введите код")),1)])),_:1},8,["color","loading","disabled"])])])}}});const ve=(0,c.A)(de,[["__scopeId","data-v-0724e654"]]);var pe=ve,me=t.p+"img/telegram_large.1c751f2b.svg";const fe={class:"w-100"},ge={class:"content"},be={class:"first-content"},ke={class:"w-100"};var he=(0,u.pM)({__name:"TelegramContent",emits:["goBack"],setup(e,{emit:a}){const t=a,{t:n}=(0,w.s9)(),l=(0,_.KR)(""),o=(0,_.KR)(!1),s=()=>{o.value=!0,setTimeout((()=>{o.value=!1,l.value=n("Вы все еще не авторизованы в боте, пожалуйста, повторите попытку")}),3e3)};return(e,a)=>{const r=(0,u.g2)("v-btn");return(0,u.uX)(),(0,u.CE)("div",fe,[(0,u.bF)(r,{icon:"mdi-arrow-left",variant:"plain",onClick:a[0]||(a[0]=()=>t("goBack"))}),(0,u.Lk)("div",ge,[(0,u.Lk)("div",be,[a[1]||(a[1]=(0,u.Lk)("img",{src:me,alt:"telegram icon"},null,-1)),a[2]||(a[2]=(0,u.Lk)("h1",{class:"title"},"Telegram",-1)),(0,u.Lk)("p",{class:(0,f.C4)(["subtitle",{error:l.value}])},(0,f.v_)(l.value?l.value:(0,_.R1)(n)("Для использования данного канала связи вам необходимо авторизоваться в боте")),3)]),(0,u.Lk)("div",ke,[(0,u.bF)(r,{class:"buttons",color:(0,_.R1)(se).primary,block:""},{default:(0,u.k6)((()=>[(0,u.eW)((0,f.v_)((0,_.R1)(n)("Авторизоваться в боте")),1)])),_:1},8,["color"]),(0,u.bF)(r,{class:"buttons",variant:"text",block:"",color:(0,_.R1)(se).primary,loading:o.value,onClick:s},{default:(0,u.k6)((()=>[(0,u.eW)((0,f.v_)((0,_.R1)(n)("Проверить статус")),1)])),_:1},8,["color","loading"])])])])}}});const _e=(0,c.A)(he,[["__scopeId","data-v-66b6e773"]]);var ye=_e;const we={class:"w-100 h-screen d-flex justify-center align-center"},Re={class:"content"};var Ve=(0,u.pM)({__name:"HomeView",setup(e){const a=(0,_.KR)("sign-in"),t=(0,_.KR)("main"),n=(0,_.KR)(),l=(0,_.KR)(""),o=()=>{a.value="code"},s=()=>{a.value="sign-in"},r=()=>{t.value="telegram"},i=()=>{t.value="main"};return(e,c)=>{const d=(0,u.g2)("v-tabs-window-item"),v=(0,u.g2)("v-tabs-window");return(0,u.uX)(),(0,u.CE)("div",we,[(0,u.Lk)("div",{class:"modal",style:(0,f.Tr)({paddingTop:("telegram"===t.value?27:50)+"px",paddingBottom:("telegram"===t.value?109:24)+"px"})},[(0,u.bF)(v,{modelValue:t.value,"onUpdate:modelValue":c[3]||(c[3]=e=>t.value=e),class:"w-100"},{default:(0,u.k6)((()=>[(0,u.bF)(d,{value:"main"},{default:(0,u.k6)((()=>[(0,u.Lk)("div",Re,[(0,u.bF)(h),(0,u.bF)(v,{modelValue:a.value,"onUpdate:modelValue":c[2]||(c[2]=e=>a.value=e),class:"windows"},{default:(0,u.k6)((()=>[(0,u.bF)(d,{value:"sign-in"},{default:(0,u.k6)((()=>[(0,u.bF)(D,{country:n.value,"onUpdate:country":c[0]||(c[0]=e=>n.value=e),phone:l.value,"onUpdate:phone":c[1]||(c[1]=e=>l.value=e),onOnNext:o},null,8,["country","phone"])])),_:1}),(0,u.bF)(d,{value:"code"},{default:(0,u.k6)((()=>[(0,u.bF)(pe,{country:n.value,phone:l.value,onOnTelegram:r,onGoBack:s},null,8,["country","phone"])])),_:1})])),_:1},8,["modelValue"]),(0,u.bF)(Q)])])),_:1}),(0,u.bF)(d,{value:"telegram"},{default:(0,u.k6)((()=>[(0,u.bF)(ye,{onGoBack:i})])),_:1})])),_:1},8,["modelValue"])],4)])}}});const Ce=(0,c.A)(Ve,[["__scopeId","data-v-a9b25e0c"]]);var Fe=Ce;const xe=[{path:"/",name:"home",component:Fe}],Te=(0,m.aE)({history:(0,m.Bt)(),routes:xe});var Ie=Te;const Le=(0,o.$N)({components:s,directives:r,icons:{defaultSet:"mdi"}}),Me=(0,W.Ey)(),Ee=(0,w.hU)({locale:"ru",messages:{en:l}});(0,n.Ef)(p).use(Me).use(Ee).use(Ie).use(Le).mount("#app")}},a={};function t(n){var l=a[n];if(void 0!==l)return l.exports;var o=a[n]={exports:{}};return e[n].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(a,n,l,o){if(!n){var s=1/0;for(c=0;c<e.length;c++){n=e[c][0],l=e[c][1],o=e[c][2];for(var r=!0,u=0;u<n.length;u++)(!1&o||s>=o)&&Object.keys(t.O).every((function(e){return t.O[e](n[u])}))?n.splice(u--,1):(r=!1,o<s&&(s=o));if(r){e.splice(c--,1);var i=l();void 0!==i&&(a=i)}}return a}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,l,o]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/sign-in-app/"}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var l,o,s=n[0],r=n[1],u=n[2],i=0;if(s.some((function(a){return 0!==e[a]}))){for(l in r)t.o(r,l)&&(t.m[l]=r[l]);if(u)var c=u(t)}for(a&&a(n);i<s.length;i++)o=s[i],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(c)},n=self["webpackChunkarkanit"]=self["webpackChunkarkanit"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(7232)}));n=t.O(n)})();
//# sourceMappingURL=app.cfdbbdc0.js.map