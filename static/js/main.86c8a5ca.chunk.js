(this["webpackJsonpfinancial-management-israel"]=this["webpackJsonpfinancial-management-israel"]||[]).push([[0],{30:function(e){e.exports=JSON.parse('[{"taxYear":2019,"creditPointValue":218,"incomeTax":{"band1":{"rate":10,"min":0,"max":75720},"band2":{"rate":14,"min":75721,"max":108600},"band3":{"rate":20,"min":108601,"max":174360},"band4":{"rate":31,"min":174361,"max":242400},"band5":{"rate":35,"min":242401,"max":504360},"band6":{"rate":47,"min":504361,"max":649560},"band7":{"rate":50,"min":649560}},"bituachLeumi":{"nationalAverageSalary":10273,"prisaLimitPercent":25,"selfEmployedNationalInsuranceDiscountPercent":52,"nationalInsurance":{"band1":{"rate":{"salaried":0.4,"selfEmployed":2.87},"min":0,"max":6164},"band2":{"rate":{"salaried":7,"selfEmployed":12.83},"min":6165,"max":43890}},"healthInsurance":{"band1":{"rate":{"salaried":3.1,"selfEmployed":3.1},"min":0,"max":6164},"band2":{"rate":{"salaried":5,"selfEmployed":5},"min":6165,"max":43890}}},"pension":{"taxRelief":{"salaried":{"maxPercent":7,"maxShekel":616,"taxCredit":35},"selfEmployed":{"taxDeductablePercent":11,"taxCreditPercent":5.5,"taxCredit":35,"salaryCeiling":211200}},"legalMinPerecent":{"salaried":6,"selfEmployed":{"reducedRate":4.45,"fullRate":12.55}}},"educationFund":{"salaried":{"salaryPercent":2.5,"salaryCeiling":188544},"selfEmployed":{"salaryPercent":4.5,"salaryCeiling":264000}}},{"taxYear":2020,"creditPointValue":219,"incomeTax":{"band1":{"rate":10,"min":0,"max":75960},"band2":{"rate":14,"min":75960,"max":108960},"band3":{"rate":20,"min":108961,"max":174960},"band4":{"rate":31,"min":174961,"max":243120},"band5":{"rate":35,"min":243121,"max":505920},"band6":{"rate":47,"min":505921,"max":651600},"band7":{"rate":50,"min":651600}},"bituachLeumi":{"nationalAverageSalary":10551,"prisaLimitPercent":25,"selfEmployedNationalInsuranceDiscountPercent":52,"nationalInsurance":{"band1":{"rate":{"salaried":0.4,"selfEmployed":2.87},"min":0,"max":6331},"band2":{"rate":{"salaried":7,"selfEmployed":12.83},"min":6332,"max":44020}},"healthInsurance":{"band1":{"rate":{"salaried":3.1,"selfEmployed":3.1},"min":0,"max":6331},"band2":{"rate":{"salaried":5,"selfEmployed":5},"min":6332,"max":44020}}},"pension":{"taxRelief":{"salaried":{"maxPercent":7,"maxShekel":616,"taxCredit":35},"selfEmployed":{"taxDeductablePercent":11,"taxCreditPercent":5.5,"taxCredit":35,"salaryCeiling":211200}},"legalMinPerecent":{"salaried":6,"selfEmployed":{"reducedRate":4.45,"fullRate":12.55}}},"educationFund":{"salaried":{"salaryPercent":2.5,"salaryCeiling":188544},"selfEmployed":{"salaryPercent":4.5,"salaryCeiling":265000}}}]')},35:function(e,a,n){e.exports=n(50)},40:function(e,a,n){},41:function(e,a,n){},47:function(e,a,n){},50:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(22),i=n.n(r),c=n(12),o=n(6),m=(n(40),n(51)),u=n(52),d=n(24);n(41);var s=function(){return l.a.createElement(m.a,{fluid:!0},l.a.createElement(u.a,null,l.a.createElement(d.a,{xs:12,className:"hero"},l.a.createElement("h1",null,"Israel Tax Calculators"))))};var p=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null),l.a.createElement("ul",null,l.a.createElement("p",null,"23:10"),l.a.createElement(c.b,{to:"/calculators/salaried/net-pay"},l.a.createElement("li",null,"Salaried")),l.a.createElement(c.b,{to:"/calculators/self-employed/net-pay"},l.a.createElement("li",null,"Self employed"))))},E=n(18),h=n(26),b=n(27),y=n(34),x=n(29),g=n(33),f=n(30),v=(n(47),n(2)),C=(v.array.isRequired,Object(v.oneOfType)([v.string,v.number]).isRequired,Object(v.oneOfType)([v.string,v.number]).isRequired,Object(v.oneOfType)([v.string,v.number]).isRequired,v.string.isRequired,v.string.isRequired,Object(v.oneOfType)([v.string,v.number]).isRequired,Object(v.oneOfType)([v.string,v.number]).isRequired,Object(v.oneOfType)([v.string,v.number]).isRequired,Object(v.oneOfType)([v.string,v.number]).isRequired,Object(v.oneOfType)([v.string,v.number]).isRequired,Object(v.oneOfType)([v.string,v.number]).isRequired,Object(v.oneOfType)([v.string,v.number]).isRequired,v.bool.isRequired,v.bool.isRequired,n(54)),T=n(53),k=n(31),w=n(55);function F(e){return 0===e||e>0}function P(e,a,n,t){var l,r=e[a].bituachLeumi.nationalAverageSalary,i=r/2,c=e[a].pension.legalMinPerecent.selfEmployed,o=c.reducedRate,m=c.fullRate,u=e[a].pension.legalMinPerecent.salaried;return"salaried"===t?l=n*(u/100):"selfEmployed"===t&&(l=n>=i?n>=r?i*(o/100)+i*(m/100):i*(o/100)+m/100*(n-i):n*(o/100)),l}var O=function(e){var a=e.stateData,n=a.employmentType,t=a.taxData,r=a.taxYearIndex,i=a.baseIncome,c=a.creditPoints,o=a.pensionOption,m=a.pensionType,s=a.pensionAmount,p=a.educationFund,E=a.travelAllowance,h=a.lunchAllowance,b=a.annualBonus,y=a.commission,x=a.overtime,g=a.validated,f=e.handleChange,v="Enter a valid number (2 decimal places).",O=P(t,r,i,n).toFixed(2),I=(O/i*100).toFixed(2);return console.log("navigator.language",window.navigator.language),console.log("window.navigator.userLanguage",window.navigator.userLanguage),console.log("window.navigator.userAgent",window.navigator.userAgent),console.log("en",window.navigator.userAgent),"en-GB"==window.navigator.language&&console.log("== en-GB",!0),"en-GB"===window.navigator.language&&console.log("=== en-GB",!0),"en"==window.navigator.language&&console.log("== en",!0),"en"===window.navigator.language&&console.log("=== en",!0),"en-ZA"==window.navigator.language&&console.log("== en-GB",!0),"en-ZA"===window.navigator.language&&console.log("=== en-ZA",!0),l.a.createElement("section",null,l.a.createElement("h2",null,"Net pay calculator"),l.a.createElement(C.a,{id:"netpay-form-".concat(n),noValidate:!0,validated:g,onSubmit:e.handleSubmit},l.a.createElement(C.a.Group,{as:u.a},l.a.createElement(C.a.Label,{htmlFor:"taxYear",column:!0,xs:7,md:6},"Tax year"),l.a.createElement(d.a,{xs:5,md:6},l.a.createElement(C.a.Control,{as:"select",id:"taxYear",name:"taxYearIndex",defaultValue:"",required:!0,onChange:f},l.a.createElement("option",{disabled:!0,value:""},"Select"),t.map((function(e,a){return l.a.createElement("option",{key:a,value:a},e.taxYear)}))),l.a.createElement(C.a.Control.Feedback,{type:"invalid"},"Select a tax year."))),l.a.createElement(C.a.Group,{as:u.a},l.a.createElement(C.a.Label,{htmlFor:"income",column:!0,xs:7,md:6},"salaried"===n?"Base salary":"Profit"),l.a.createElement(d.a,{xs:5,md:6},l.a.createElement(C.a.Control,{as:"input",id:"income",lang:"en-GB",name:"baseIncome",type:"number",inputMode:"decimal",pattern:"[0-9]*",step:"0.01",min:"0",required:!0,value:i,onChange:f}),l.a.createElement(C.a.Control.Feedback,{type:"invalid"},v))),l.a.createElement(C.a.Group,{as:u.a},l.a.createElement(C.a.Label,{htmlFor:"creditPoints",column:!0,xs:7,md:6},"Tax credit points"),l.a.createElement(d.a,{xs:5,md:6},l.a.createElement(C.a.Control,{as:"input",id:"creditPoints",name:"creditPoints",type:"number",lang:"en",inputMode:"decimal",pattern:"[0-9]*",step:"0.25",min:"0",required:F(c),value:c,onChange:f}),l.a.createElement(C.a.Control.Feedback,{type:"invalid"},"Must be in quater increments."))),l.a.createElement("fieldset",null,l.a.createElement(C.a.Label,{as:"legend"},"Contributions"),l.a.createElement("fieldset",null,l.a.createElement(C.a.Group,{as:u.a},l.a.createElement(C.a.Label,{as:"legend",column:!0,xs:7,md:6},"Pension"),l.a.createElement(d.a,{xs:5,md:6},l.a.createElement(C.a.Check,{inline:!0},l.a.createElement(C.a.Check.Input,{type:"radio",id:"pensionlMin",name:"pensionOption",value:"legalMin",checked:"legalMin"===o,onChange:f}),l.a.createElement(C.a.Check.Label,{htmlFor:"pensionlMin"},"Legal minium")),l.a.createElement(C.a.Check,{inline:!0},l.a.createElement(C.a.Check.Input,{type:"radio",id:"pensionlExtra",name:"pensionOption",value:"additional",checked:"additional"===o,disabled:!(i>=1),onChange:f}),l.a.createElement(C.a.Check.Label,{htmlFor:"pensionlExtra"},"Additional")),l.a.createElement(C.a.Check,{inline:!0,className:"add1"},l.a.createElement(C.a.Check.Input,{type:"radio",id:"pensionlExtra",name:"pensionOption",value:"additional",checked:"additional"===o,disabled:!(i>=1),onChange:f}),l.a.createElement(C.a.Check.Label,{htmlFor:"pensionlExtra"},"Additional")),l.a.createElement(C.a.Check,{inline:!0,className:"add2"},l.a.createElement(C.a.Check.Input,{type:"radio",id:"pensionlExtra",name:"pensionOption",value:"additional",checked:"additional"===o,disabled:!(i>=1),onChange:f}),l.a.createElement(C.a.Check.Label,{htmlFor:"pensionlExtra"},"Additional")),l.a.createElement(C.a.Check,{inline:!0,className:"add3"},l.a.createElement(C.a.Check.Input,{type:"radio",id:"pensionlExtra",name:"pensionOption",value:"additional",checked:"additional"===o,disabled:!(i>=1),onChange:f}),l.a.createElement(C.a.Check.Label,{htmlFor:"pensionlExtra"},"Additional")),i<1&&l.a.createElement("div",{className:"small"},"salaried"===n?"Enter a base salary to select additional.":"Enter profit to select additional."))),"additional"===o&&l.a.createElement(l.a.Fragment,null,"selfEmployed"===n&&l.a.createElement(C.a.Group,{as:u.a},l.a.createElement(C.a.Label,{column:!0,xs:7,md:6},"Contribution type"),l.a.createElement(d.a,{xs:5,md:6},l.a.createElement(C.a.Check,{inline:!0},l.a.createElement(C.a.Check.Input,{type:"radio",id:"pensionPercent",name:"pensionType",value:"percent",checked:"percent"===m,onChange:f}),l.a.createElement(C.a.Check.Label,{htmlFor:"pensionPercent"},"Percent")),l.a.createElement(C.a.Check,{inline:!0},l.a.createElement(C.a.Check.Input,{type:"radio",id:"pensionlShekel",name:"pensionType",value:"shekel",checked:"shekel"===m,onChange:f}),l.a.createElement(C.a.Check.Label,{htmlFor:"pensionlShekel"},"Shekel")))),l.a.createElement(C.a.Group,{as:u.a},l.a.createElement(C.a.Label,{htmlFor:"pensionAmount",column:!0,xs:7,md:6},"Total contribution"),l.a.createElement(d.a,{xs:5,md:6},l.a.createElement(T.a,null,l.a.createElement(k.a,{as:"input",id:"pensionAmount",name:"pensionAmount",type:"number",inputMode:"decimal",pattern:"[0-9]*",step:"0.01",min:"percent"===m?I:O,max:"percent"===m?100:void 0,value:s,onChange:f,required:!0}),l.a.createElement(T.a.Append,null,l.a.createElement(T.a.Text,null,"percent"===m?"%":"\u20aa")),l.a.createElement(C.a.Control.Feedback,{type:"invalid"},"percent"===m?"Enter a valid percentage. The legal minimum is ".concat(I,"%."):"".concat(v," The legal minimum is ").concat(O,"\u20aa."))))))),l.a.createElement(C.a.Group,{as:u.a},l.a.createElement(C.a.Label,{htmlFor:"educationFund",column:!0,xs:7,md:6},"Education fund"),l.a.createElement(d.a,{xs:5,md:6},l.a.createElement(T.a,null,l.a.createElement(k.a,{as:"input",id:"educationFund",name:"educationFund",type:"number",inputMode:"decimal",pattern:"[0-9]*",step:"0.01",min:"1",max:"100",value:p,onChange:f,required:F(p)}),l.a.createElement(T.a.Append,null,l.a.createElement(T.a.Text,null,"%")),l.a.createElement(C.a.Control.Feedback,{type:"invalid"},"Enter a valid percentage."))))),"salaried"===n&&l.a.createElement(l.a.Fragment,null,l.a.createElement("fieldset",null,l.a.createElement(C.a.Label,{as:"legend"},"Allowances"),l.a.createElement(C.a.Group,{as:u.a},l.a.createElement(C.a.Label,{htmlFor:"travelAllowance",column:!0,xs:7,md:6},"Travel"),l.a.createElement(d.a,{xs:5,md:6},l.a.createElement(C.a.Control,{as:"input",id:"travelAllowance",name:"travelAllowance",type:"text",inputMode:"numeric",step:"0.01",min:"0",value:E,onChange:f,required:F(E)}),l.a.createElement(C.a.Control.Feedback,{type:"invalid"},v))),l.a.createElement(C.a.Group,{as:u.a},l.a.createElement(C.a.Label,{htmlFor:"lunchAllowance",column:!0,xs:7,md:6},"Lunch"),l.a.createElement(d.a,{xs:5,md:6},l.a.createElement(C.a.Control,{as:"input",id:"lunchAllowance",name:"lunchAllowance",type:"number",inputMode:"numeric",step:"0.01",min:"0",value:h,onChange:f,required:F(h)}),l.a.createElement(C.a.Control.Feedback,{type:"invalid"},v)))),l.a.createElement("fieldset",null,l.a.createElement(C.a.Label,{as:"legend"},"Incentives"),l.a.createElement(C.a.Group,{as:u.a},l.a.createElement(C.a.Label,{htmlFor:"annualBonus",column:!0,xs:7,md:6},"One-time bonus or gift"),l.a.createElement(d.a,{xs:5,md:6},l.a.createElement(C.a.Control,{as:"input",id:"annualBonus",name:"annualBonus",type:"text",inputMode:"numeric",pattern:"[0-9]*",step:"0.01",min:"0",value:b,onChange:f,required:F(b)}),l.a.createElement(C.a.Control.Feedback,{type:"invalid"},v))),l.a.createElement(C.a.Group,{as:u.a},l.a.createElement(C.a.Label,{htmlFor:"commission",column:!0,xs:7,md:6},"Commission"),l.a.createElement(d.a,{xs:5,md:6},l.a.createElement(C.a.Control,{as:"input",id:"commission",name:"commission",type:"number",step:"0.01",min:"0",value:y,onChange:f,required:F(y)}),l.a.createElement(C.a.Control.Feedback,{type:"invalid"},v))),l.a.createElement(C.a.Group,{as:u.a},l.a.createElement(C.a.Label,{htmlFor:"overtime",column:!0,xs:7,md:6},"Overtime"),l.a.createElement(d.a,{xs:5,md:6},l.a.createElement(C.a.Control,{as:"input",id:"overtime",name:"overtime",type:"number",inputMode:"decimal",pattern:"[0-9]*",step:"0.01",min:"0",value:x,onChange:f,required:F(x)}),l.a.createElement(C.a.Control.Feedback,{type:"invalid"},v))))),l.a.createElement(w.a,{type:"submit",variant:"primary"},"Calculate")))},I=n(32);function L(e,a,n,t,l,r,i){var c=[t-r,t];l&&c.push((12*(t-r)+r)/12);var o=[];c.forEach((function(t){var l=0;Object.keys(e[a].bituachLeumi[i]).forEach((function(r){var c,o=e[a].bituachLeumi[i][r],m=o.min,u=o.max,d=e[a].bituachLeumi[i][r].rate[n];c=0===m?0:1,t>=m&&(l+=t>=u?(u-m+c)*(d/100):(t-m+c)*(d/100))})),o.push(l)}));var m=o[0],u=o[1]-o[0],d=o[2];return l?{month:m+12*(d-m),annual:12*d}:{month:m+u,annual:12*m+u}}function A(e,a,n,t,l){return"legalMin"===n?a:"additional"===n&&"shekel"===l?t:e*(t/100)}function R(e,a,n,t,l){var r=n*(l/100);if("selfEmployed"===t){var i=e[a].educationFund[t],c=i.salaryPercent,o=i.salaryCeiling*(c/100)/12;return{educationFundContribution:r,educationFundTaxDeductible:r<=o?r:o}}return r}function q(e,a,n,t,l,r){var i=[];[12*(n-t),12*(n-t)+t].forEach((function(n){var t=0;Object.keys(e[a].incomeTax).forEach((function(l){var r,i=e[a].incomeTax[l],c=i.rate,o=i.min,m=i.max;r=0===o?0:1,n>=o&&(t+=void 0===m?c/100*(n-o):n>=m?(m-o+r)*(c/100):(n-o+r)*(c/100))})),i.push(t)}));var c=i[0],o=i[1]-i[0],m=c/12+o-(l+r),u=c+o-12*(l+r);return{incomeTax:m>0?m:0,annualIncomeTax:u>0?u:0}}function S(e,a){if("il"===e)var n="he-IL",t="ILS";return new Intl.NumberFormat(n,{style:"currency",currency:t}).format(a)}var M=function(e){var a=e.stateData,n=a.employmentType,t=a.taxData,r=a.taxYearIndex,i=a.baseIncome,c=a.creditPoints,o=a.pensionOption,m=a.pensionAmount,u=a.educationFund,d=a.travelAllowance,s=a.lunchAllowance,p=a.overtime,E=a.annualBonus,h=a.commission,b=a.showResultsTable,y=R(t,r,i,n,u),x=0;[i,d,s,E,p,h].forEach((function(e){x+="number"===typeof e&&e}));var g=x-d-s,f=E>(i+p+h)*(t[r].bituachLeumi.prisaLimitPercent/100),v=L(t,r,n,x,f,E,"nationalInsurance"),C=v.month,T=v.annual,k=L(t,r,n,x,f,E,"healthInsurance"),w=k.month,F=k.annual,O=c*t[r].creditPointValue,M=A(i,P(t,r,i,n),o,m),j=function(e,a,n){var t=e[a].pension.taxRelief.salaried,l=t.maxShekel,r=t.taxCredit;return n>=l?l*(r/100):n*(r/100)}(t,r,M),D=q(t,r,x,E,O,j),N=D.incomeTax,G=D.annualIncomeTax;return l.a.createElement("section",{style:{display:!0===b?"block":"none"},ref:e.refProp},l.a.createElement("h2",null,"Net pay results"),l.a.createElement(I.a,{striped:!0,bordered:!0,className:"table__3 table__header--blue"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"Month"),l.a.createElement("th",null,"Year"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Basic salary"),l.a.createElement("td",null,S("il",i)),l.a.createElement("td",null,S("il",12*i))),l.a.createElement("tr",null,l.a.createElement("td",null,"Taxable income"),l.a.createElement("td",null,S("il",x)),l.a.createElement("td",null,S("il",12*(x-E)+E))),l.a.createElement("tr",null,l.a.createElement("td",null,"Income tax"),l.a.createElement("td",null,S("il",N)),l.a.createElement("td",null,S("il",G))),l.a.createElement("tr",null,l.a.createElement("td",null,"National insurance"),l.a.createElement("td",null,S("il",C)),l.a.createElement("td",null,S("il",T))),l.a.createElement("tr",null,l.a.createElement("td",null,"Health insurance"),l.a.createElement("td",null,S("il",w)),l.a.createElement("td",null,S("il",F))),l.a.createElement("tr",null,l.a.createElement("td",null,"Pension"),l.a.createElement("td",null,S("il",M)),l.a.createElement("td",null,S("il",12*M))),y>0&&l.a.createElement("tr",null,l.a.createElement("td",null,"Educational fund"),l.a.createElement("td",null,S("il",y)),l.a.createElement("td",null,S("il",12*y))),E>0&&l.a.createElement("tr",null,l.a.createElement("td",null,"Bonus"),l.a.createElement("td",null,S("il",E)),l.a.createElement("td",null,S("il",E))),l.a.createElement("tr",null,l.a.createElement("td",null,"Net"),l.a.createElement("td",null,S("il",g-N-C-w-M-y)),l.a.createElement("td",null,S("il",12*(g-E)+E-G-T-F-12*(M+y)))))))};var j=function(e){var a=e.stateData,n=a.employmentType,t=a.taxData,r=a.taxYearIndex,i=a.baseIncome,c=a.creditPoints,o=a.pensionOption,m=a.pensionType,u=a.pensionAmount,d=a.educationFund,s=a.showResultsTable,p=R(t,r,i,n,d),E=p.educationFundContribution,h=p.educationFundTaxDeductible,b=A(i,P(t,r,i,n),o,u,m),y=function(e,a,n,t){var l,r=e[a].pension.taxRelief.selfEmployed,i=r.taxDeductablePercent,c=r.taxCreditPercent,o=r.taxCredit,m=r.salaryCeiling,u=m/12*(i/100),d=m/12*(c/100),s=n*(i/100),p=n*(c/100),E=0;return t>s?(!function(){var e=t-s;E=e>p?p>d?d*(o/100):p*(o/100):e>d?d*(o/100):e*(o/100)}(),l=s>u?u:s):l=t>u?u:t,{pensionTaxDeductible:l,pensionTaxCredit:E}}(t,r,i,b),x=y.pensionTaxDeductible,g=y.pensionTaxCredit,f=i-h-x,v=function(e,a,n){var t=e[a].bituachLeumi,l=t.nationalAverageSalary,r=t.selfEmployedNationalInsuranceDiscountPercent,i=t.nationalInsurance,c=i.band1.rate.selfEmployed,o=i.band2,m=o.rate.selfEmployed,u=o.min,d=o.max,s=c/100,p=m/100,E=r/100;return(n=n>d?d:n)-(n<u?n/(1+E*s):(n+u/l*l*(p-s)*E)/(1+E*p))}(t,r,f),C=L(t,r,n,f-v,!1,0,"nationalInsurance"),T=C.month,k=C.annual,w=L(t,r,n,f-v,!1,0,"healthInsurance"),F=w.month,O=w.annual,M=q(t,r,f,0,c*t[r].creditPointValue,g),j=M.incomeTax,D=M.annualIncomeTax;return l.a.createElement("section",{style:{display:!0===s?"block":"none"},ref:e.refProp},l.a.createElement("h2",null,"Net pay results"),l.a.createElement(I.a,{striped:!0,bordered:!0,className:"table__3 table__header--blue"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"Month"),l.a.createElement("th",null,"Year"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Profit"),l.a.createElement("td",null,S("il",i)),l.a.createElement("td",null,S("il",12*i))),l.a.createElement("tr",null,l.a.createElement("td",null,"Taxable income"),l.a.createElement("td",null,S("il",f)),l.a.createElement("td",null,S("il",12*f))),l.a.createElement("tr",null,l.a.createElement("td",null,"Income tax"),l.a.createElement("td",null,S("il",j)),l.a.createElement("td",null,S("il",D))),l.a.createElement("tr",null,l.a.createElement("td",null,"National insurance"),l.a.createElement("td",null,S("il",T)),l.a.createElement("td",null,S("il",k))),l.a.createElement("tr",null,l.a.createElement("td",null,"Health insurance"),l.a.createElement("td",null,S("il",F)),l.a.createElement("td",null,S("il",O))),l.a.createElement("tr",null,l.a.createElement("td",null,"Pension"),l.a.createElement("td",null,S("il",b)),l.a.createElement("td",null,S("il",12*b))),E>0&&l.a.createElement("tr",null,l.a.createElement("td",null,"Educational fund"),l.a.createElement("td",null,S("il",E)),l.a.createElement("td",null,S("il",12*E))),l.a.createElement("tr",null,l.a.createElement("td",null,"Net"),l.a.createElement("td",null,S("il",i-j-T-F-b-E)),l.a.createElement("td",null,S("il",12*i+D-k-O-12*b-12*E))))))},D=function(e){function a(e){var n;return Object(h.a)(this,a),(n=Object(y.a)(this,Object(x.a)(a).call(this,e))).handleChange=function(e){var a,t=e.target,l=t.name,r=t.value;t.type;n.setState((a={},Object(E.a)(a,l,r),Object(E.a)(a,"showResultsTable",!1),a)),"pensionOption"===l&&"legalMin"===r&&n.setState({pensionAmount:""}),"baseIncome"===l&&""===r&&n.setState({pensionOption:"legalMin"})},n.scrollToMyRef=function(){setTimeout((function(){n.resultsTable.current.scrollIntoView({behavior:"smooth",block:"start"})}),150)},n.handleSubmit=function(e){var a=e.currentTarget;!0===a.checkValidity()?(n.setState({showResultsTable:!0,validated:!1}),n.scrollToMyRef()):n.setState({validated:!0}),a.checkValidity(),e.preventDefault(),e.stopPropagation()},n.state={employmentType:e.employmentType,taxData:f,taxYearIndex:0,baseIncome:"",creditPoints:"",pensionOption:"legalMin",pensionType:"percent",pensionAmount:"",educationFund:"",travelAllowance:"",lunchAllowance:"",annualBonus:"",commission:"",overtime:"",validated:!1,showResultsTable:!1},n.resultsTable=l.a.createRef(),n}return Object(g.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(O,{stateData:this.state,handleChange:this.handleChange,handleSubmit:this.handleSubmit}),"salaried"===this.state.employmentType&&l.a.createElement(M,{stateData:this.state,refProp:this.resultsTable}),"selfEmployed"===this.state.employmentType&&l.a.createElement(j,{stateData:this.state,refProp:this.resultsTable}))}}]),a}(t.Component);var N=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null),l.a.createElement(m.a,null,l.a.createElement(u.a,{className:"justify-content-center"},l.a.createElement(d.a,{xs:12,sm:10,md:8},l.a.createElement(D,{employmentType:e.employmentType})))))};var G=function(){return l.a.createElement(c.a,{basename:"/financial-management"},l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",exact:!0,component:p}),l.a.createElement(o.a,{path:"/calculators/salaried/net-pay",render:function(e){return l.a.createElement(N,Object.assign({},e,{employmentType:"salaried"}))}}),l.a.createElement(o.a,{path:"/calculators/self-employed/net-pay",render:function(e){return l.a.createElement(N,Object.assign({},e,{employmentType:"selfEmployed"}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.86c8a5ca.chunk.js.map