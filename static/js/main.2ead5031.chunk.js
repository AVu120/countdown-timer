(this["webpackJsonpcountdown-timer"]=this["webpackJsonpcountdown-timer"]||[]).push([[0],{29:function(e,t,n){e.exports={inputs:"Inputs_inputs__3_wLU",input_item:"Inputs_input_item__KT_52",input_actionButton:"Inputs_input_actionButton__2vOGd Inputs_input_item__KT_52"}},30:function(e,t,n){e.exports={title:"Title_title__1zt3G",title__topRow:"Title_title__topRow__1Hngn",title__doneMessage:"Title_title__doneMessage__1UN3W",title__helpIcon:"Title_title__helpIcon__3i_u2"}},39:function(e,t,n){e.exports={app:"App_app__2P5NG",app__title:"App_app__title__1sS4S",app__title_timerDone:"App_app__title_timerDone__1MVbb App_app__title__1sS4S"}},43:function(e,t,n){e.exports={countdown__item:"Countdown-Item_countdown__item__47KLP",countdown__itemTitle:"Countdown-Item_countdown__itemTitle__1z5D2"}},49:function(e,t,n){e.exports={countdown:"Countdown_countdown__21zoI"}},64:function(e,t,n){e.exports=n(86)},69:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(7),l=n.n(i),s=(n(69),n(56)),c=n(40),r=n(16),u=n.n(r),m=n(43),d=n.n(m),_=function(e){var t=e.value,n=e.title;return o.a.createElement("div",null,(t||0===t)&&o.a.createElement("div",{className:d.a.countdown__item},t,o.a.createElement("span",{className:d.a.countdown__itemTitle},n)))},p=n(49),h=n.n(p),v=function(e){var t=e.timeLeft;return o.a.createElement("div",{className:h.a.countdown},t.years>0&&o.a.createElement(_,{value:t.years,title:"YEARS"}),t.months>0&&o.a.createElement(_,{value:t.months,title:"MONTHS"}),o.a.createElement(_,{value:t.days,title:"DAYS"}),o.a.createElement(_,{value:t.hours,title:"HOURS"}),o.a.createElement(_,{value:t.minutes,title:"MINUTES"}),o.a.createElement(_,{value:t.seconds,title:"SECONDS"}))},S=n(118),w=n(120),E=n(52),f=n.n(E),y=n(53),g=n.n(y),N=function(e){var t=e.iconStyle,n=e.color,a=e.actions,i=e.timerStatus;return o.a.createElement(S.a,{size:"small"},("idle"===i||"reset"===i||"done"===i)&&o.a.createElement(w.a,{title:"Start Countdown","aria-label":"add"},o.a.createElement(f.a,{style:t,color:n,onClick:function(){return a.startCountdown()}})),"running"===i&&o.a.createElement(w.a,{title:"Reset Timer to 0","aria-label":"add"},o.a.createElement(g.a,{style:t,color:n,onClick:function(){return a.resetCountdown()}})))},b=n(54),C=n.n(b),I=(n(85),function(e){var t=e.className,n=e.datetimeSelected,a=e.changeDatetimeSelected;return o.a.createElement("div",{className:t},o.a.createElement(C.a,{value:n,onChange:a,dateFormat:"DD/MM/YYYY"}))}),x=n(117),O=function(e){var t=e.label,n=e.onChange,a=e.className,i=e.inputStyle,l=e.labelStyle;return o.a.createElement("form",{className:a,noValidate:!0,autoComplete:"off"},o.a.createElement(x.a,{id:"outlined-basic",label:t,variant:"outlined",onChange:n,inputProps:{style:i},InputLabelProps:{style:l}}))},T={height:"15px",minWidth:"70px",width:"10vw",fontSize:"clamp(15px,1.5vh,100px)"},D={fontSize:"clamp(12px,2vh,100px)"},j={padding:"1vh",fontSize:"clamp(30px,4.5vh,100px)"},M=n(29),k=n.n(M),z=function(e){var t=e.changeEventName,n=e.datetimeSelected,a=e.changeDatetimeSelected,i=e.actions,l=e.timerStatus;return o.a.createElement("div",{className:k.a.inputs},o.a.createElement(O,{className:k.a.input_item,label:"Event Name",onChange:t,inputStyle:T,labelStyle:D}),o.a.createElement(I,{className:k.a.input_item,datetimeSelected:n,changeDatetimeSelected:a}),o.a.createElement("div",{className:k.a.input_actionButton},o.a.createElement(N,{iconStyle:j,actions:i,timerStatus:l,color:"primary"})))},L=n(39),A=n.n(L),R=n(55),Y=n.n(R),B=function(e){var t=e.title,n=e.iconStyle;return o.a.createElement(w.a,{title:t},o.a.createElement(Y.a,{style:n}))},P=n(30),W=n.n(P),U=function(e){var t=e.timeLeft,n=e.eventName,a=e.titleClassName;return o.a.createElement("div",{className:W.a.title},o.a.createElement("div",{className:W.a.title__topRow},o.a.createElement("h1",{className:a},"done"!==t.countdownStatus?"Countdown Timer":"".concat(n||"Event"," has started!")),o.a.createElement("div",{className:W.a.title__helpIcon},o.a.createElement(B,{title:o.a.createElement("div",null,o.a.createElement("h2",null,"Instructions:"),o.a.createElement("p",null,"1. Enter the name of the event you want to count down to using the 1st input."),o.a.createElement("p",null,"2. Select the date and time when this event starts using the 2nd input."),o.a.createElement("p",null,"3. Click the play button to start the countdown to the event."),o.a.createElement("p",null,"4. Click the reset button during the countdown to stop and reset the countdown to 0.")),iconStyle:{fontSize:"clamp(20px,3vh,100px)"}}))),"done"===t.countdownStatus&&o.a.createElement("h3",{id:"message",className:W.a.title__doneMessage},"Write another event name, select another date & time and press play button to start countdown again."))},G=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],i=t[1],l=Object(a.useState)(u()()),r=Object(c.a)(l,2),m=r[0],d=r[1],_=Object(a.useState)({years:"0",months:"0",days:"0",hours:"0",minutes:"0",seconds:"0",countdownStatus:"idle"}),p=Object(c.a)(_,2),h=p[0],S=p[1];Object(a.useEffect)((function(){var e=setInterval((function(){var t=u()(),n=u.a.duration(m.diff(t));n.asSeconds()>0?S(Object(s.a)({},h,{years:n.years(),months:n.months(),days:n.days(),hours:n.hours(),minutes:n.minutes(),seconds:n.seconds()})):(clearInterval(e),S({months:"0",days:"0",hours:"0",minutes:"0",seconds:"0",countdownStatus:"idle"===h.countdownStatus?"idle":"running"===h.countdownStatus||"done"===h.countdownStatus?"done":"reset"}))}),1e3);return function(){return clearInterval(e)}}),[h.countdownStatus]),Object(a.useEffect)((function(){h.countdownStatus}),[h.countdownStatus]);var w={startCountdown:function(){var e=u()();if(m-e>0){var t=u.a.duration(m.diff(e));S({years:t.years(),months:t.months(),days:t.days(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),countdownStatus:"running"})}else alert("Please select datetime in future.")},resetCountdown:function(){d(u()()),S({years:"0",months:"0",days:"0",hours:"0",minutes:"0",seconds:"0",countdownStatus:"reset"})}};return o.a.createElement("div",{className:A.a.app},o.a.createElement(U,{timeLeft:h,eventName:n,titleClassName:"done"!==h.countdownStatus?A.a.app__title:A.a.app__title_timerDone}),o.a.createElement(v,{timeLeft:h}),o.a.createElement(z,{eventName:n,changeEventName:function(e){return i(e.target.value)},datetimeSelected:m,changeDatetimeSelected:function(e){"string"!==typeof e&&d(e)},actions:w,timerStatus:h.countdownStatus}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.2ead5031.chunk.js.map