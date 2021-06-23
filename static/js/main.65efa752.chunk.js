(this["webpackJsonpfinancial-management-israel"]=this["webpackJsonpfinancial-management-israel"]||[]).push([[0],{30:function(e){e.exports=JSON.parse('[{"taxYear":2019,"creditPointValue":218,"incomeTax":{"band1":{"rate":10,"min":0,"max":75720},"band2":{"rate":14,"min":75721,"max":108600},"band3":{"rate":20,"min":108601,"max":174360},"band4":{"rate":31,"min":174361,"max":242400},"band5":{"rate":35,"min":242401,"max":504360},"band6":{"rate":47,"min":504361,"max":649560},"band7":{"rate":50,"min":649560}},"bituachLeumi":{"nationalAverageSalary":10273,"prisaLimitPercent":25,"selfEmployedNationalInsuranceDiscountPercent":52,"nationalInsurance":{"band1":{"rate":{"salaried":0.4,"selfEmployed":2.87},"min":0,"max":6164},"band2":{"rate":{"salaried":7,"selfEmployed":12.83},"min":6165,"max":43890}},"healthInsurance":{"band1":{"rate":{"salaried":3.1,"selfEmployed":3.1},"min":0,"max":6164},"band2":{"rate":{"salaried":5,"selfEmployed":5},"min":6165,"max":43890}}},"pension":{"taxRelief":{"salaried":{"maxPercent":7,"maxShekel":616,"taxCredit":35},"selfEmployed":{"taxDeductablePercent":11,"taxCreditPercent":5.5,"taxCredit":35,"salaryCeiling":211200}},"legalMinPerecent":{"salaried":6,"selfEmployed":{"reducedRate":4.45,"fullRate":12.55}}},"educationFund":{"salaried":{"salaryPercent":2.5,"salaryCeiling":188544},"selfEmployed":{"salaryPercent":4.5,"salaryCeiling":264000}}},{"taxYear":2020,"creditPointValue":219,"incomeTax":{"band1":{"rate":10,"min":0,"max":75960},"band2":{"rate":14,"min":75960,"max":108960},"band3":{"rate":20,"min":108961,"max":174960},"band4":{"rate":31,"min":174961,"max":243120},"band5":{"rate":35,"min":243121,"max":505920},"band6":{"rate":47,"min":505921,"max":651600},"band7":{"rate":50,"min":651600}},"bituachLeumi":{"nationalAverageSalary":10551,"prisaLimitPercent":25,"selfEmployedNationalInsuranceDiscountPercent":52,"nationalInsurance":{"band1":{"rate":{"salaried":0.4,"selfEmployed":2.87},"min":0,"max":6331},"band2":{"rate":{"salaried":7,"selfEmployed":12.83},"min":6332,"max":44020}},"healthInsurance":{"band1":{"rate":{"salaried":3.1,"selfEmployed":3.1},"min":0,"max":6331},"band2":{"rate":{"salaried":5,"selfEmployed":5},"min":6332,"max":44020}}},"pension":{"taxRelief":{"salaried":{"maxPercent":7,"maxShekel":616,"taxCredit":35},"selfEmployed":{"taxDeductablePercent":11,"taxCreditPercent":5.5,"taxCredit":35,"salaryCeiling":211200}},"legalMinPerecent":{"salaried":6,"selfEmployed":{"reducedRate":4.45,"fullRate":12.55}}},"educationFund":{"salaried":{"salaryPercent":2.5,"salaryCeiling":188544},"selfEmployed":{"salaryPercent":4.5,"salaryCeiling":265000}}}]')},35:function(e,a,t){e.exports=t(50)},40:function(e,a,t){},41:function(e,a,t){},47:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(22),i=t.n(r),c=t(12),m=t(6),o=(t(40),t(51)),u=t(52),d=t(24);t(41);var s=function(){return l.a.createElement(o.a,{fluid:!0},l.a.createElement(u.a,null,l.a.createElement(d.a,{xs:12,className:"hero"},l.a.createElement("h1",null,"Israel Tax Calculators"))))};var p=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null),l.a.createElement("ul",null,l.a.createElement("p",null,"23:10"),l.a.createElement(c.b,{to:"/calculators/salaried/net-pay"},l.a.createElement("li",null,"Salaried")),l.a.createElement(c.b,{to:"/calculators/self-employed/net-pay"},l.a.createElement("li",null,"Self employed"))))},E=t(18),h=t(26),b=t(27),y=t(34),x=t(29),f=t(33),v=t(30),C=(t(47),t(2)),g=(C.array.isRequired,Object(C.oneOfType)([C.string,C.number]).isRequired,Object(C.oneOfType)([C.string,C.number]).isRequired,Object(C.oneOfType)([C.string,C.number]).isRequired,C.string.isRequired,C.string.isRequired,Object(C.oneOfType)([C.string,C.number]).isRequired,Object(C.oneOfType)([C.string,C.number]).isRequired,Object(C.oneOfType)([C.string,C.number]).isRequired,Object(C.oneOfType)([C.string,C.number]).isRequired,Object(C.oneOfType)([C.string,C.number]).isRequired,Object(C.oneOfType)([C.string,C.number]).isRequired,Object(C.oneOfType)([C.string,C.number]).isRequired,C.bool.isRequired,C.bool.isRequired,t(55)),k=t(54),T=t(53),F=t(31);function P(e){return 0===e||e>0}function O(e,a,t,n){var l,r=e[a].bituachLeumi.nationalAverageSalary,i=r/2,c=e[a].pension.legalMinPerecent.selfEmployed,m=c.reducedRate,o=c.fullRate,u=e[a].pension.legalMinPerecent.salaried;return"salaried"===n?l=t*(u/100):"selfEmployed"===n&&(l=t>=i?t>=r?i*(m/100)+i*(o/100):i*(m/100)+o/100*(t-i):t*(m/100)),l}var I=function(e){var a=e.stateData,t=a.employmentType,n=a.taxData,r=a.taxYearIndex,i=a.baseIncome,c=a.creditPoints,m=a.pensionOption,o=a.pensionType,s=a.pensionAmount,p=a.educationFund,E=a.travelAllowance,h=a.lunchAllowance,b=a.annualBonus,y=a.commission,x=a.overtime,f=a.keypad,v=a.validated,C=e.handleChange,I=e.handleClick,L="Enter a valid number (2 decimal places).",R=O(n,r,i,t).toFixed(2),A=(R/i*100).toFixed(2);return console.log("keypad",f),l.a.createElement("section",null,l.a.createElement(g.a,{variant:"danger",onClick:I},"Press if you're Mark and/or use decimal commas instead of points!"),l.a.createElement("h2",null,"Net pay calculator"),l.a.createElement(k.a,{id:"netpay-form-".concat(t),noValidate:!0,validated:v,onSubmit:e.handleSubmit},l.a.createElement(k.a.Group,{as:u.a},l.a.createElement(k.a.Label,{htmlFor:"taxYear",column:!0,xs:7,md:6},"Tax year"),l.a.createElement(d.a,{xs:5,md:6},l.a.createElement(k.a.Control,{as:"select",id:"taxYear",name:"taxYearIndex",defaultValue:"",required:!0,onChange:C},l.a.createElement("option",{disabled:!0,value:""},"Select"),n.map((function(e,a){return l.a.createElement("option",{key:a,value:a},e.taxYear)}))),l.a.createElement(k.a.Control.Feedback,{type:"invalid"},"Select a tax year."))),l.a.createElement(k.a.Group,{as:u.a},l.a.createElement(k.a.Label,{htmlFor:"income",column:!0,xs:7,md:6},"salaried"===t?"Base salary":"Profit"),l.a.createElement(d.a,{xs:5,md:6},l.a.createElement(k.a.Control,{as:"input",id:"income",lang:"en-GB",name:"baseIncome",type:"number",inputMode:"gb"===f?"decimal":"text",pattern:"[0-9]*",step:"0.01",min:"0",required:!0,value:i,onChange:C}),l.a.createElement(k.a.Control.Feedback,{type:"invalid"},L))),l.a.createElement(k.a.Group,{as:u.a},l.a.createElement(k.a.Label,{htmlFor:"creditPoints",column:!0,xs:7,md:6},"Tax credit points"),l.a.createElement(d.a,{xs:5,md:6},l.a.createElement(k.a.Control,{as:"input",id:"creditPoints",name:"creditPoints",type:"number",lang:"en",inputMode:"gb"===f?"decimal":"text",pattern:"[0-9]*",step:"0.25",min:"0",required:P(c),value:c,onChange:C}),l.a.createElement(k.a.Control.Feedback,{type:"invalid"},"Must be in quater increments."))),l.a.createElement("fieldset",null,l.a.createElement(k.a.Label,{as:"legend"},"Contributions"),l.a.createElement("fieldset",null,l.a.createElement(k.a.Group,{as:u.a},l.a.createElement(k.a.Label,{as:"legend",column:!0,xs:7,md:6},"Pension"),l.a.createElement(d.a,{xs:5,md:6},l.a.createElement(k.a.Check,{inline:!0},l.a.createElement(k.a.Check.Input,{type:"radio",id:"pensionlMin",name:"pensionOption",value:"legalMin",checked:"legalMin"===m,onChange:C}),l.a.createElement(k.a.Check.Label,{htmlFor:"pensionlMin"},"Legal minium")),l.a.createElement(k.a.Check,{inline:!0},l.a.createElement(k.a.Check.Input,{type:"radio",id:"pensionlExtra",name:"pensionOption",value:"additional",checked:"additional"===m,disabled:!(i>=1),onChange:C}),l.a.createElement(k.a.Check.Label,{htmlFor:"pensionlExtra"},"Additional")),l.a.createElement(k.a.Check,{inline:!0,className:"add1"},l.a.createElement(k.a.Check.Input,{type:"radio",id:"pensionlExtra",name:"pensionOption",value:"additional",checked:"additional"===m,disabled:!(i>=1),onChange:C}),l.a.createElement(k.a.Check.Label,{htmlFor:"pensionlExtra"},"Additional")),l.a.createElement(k.a.Check,{inline:!0,className:"add2"},l.a.createElement(k.a.Check.Input,{type:"radio",id:"pensionlExtra",name:"pensionOption",value:"additional",checked:"additional"===m,disabled:!(i>=1),onChange:C}),l.a.createElement(k.a.Check.Label,{htmlFor:"pensionlExtra"},"Additional")),l.a.createElement(k.a.Check,{inline:!0,className:"add3"},l.a.createElement(k.a.Check.Input,{type:"radio",id:"pensionlExtra",name:"pensionOption",value:"additional",checked:"additional"===m,disabled:!(i>=1),onChange:C}),l.a.createElement(k.a.Check.Label,{htmlFor:"pensionlExtra"},"Additional")),i<1&&l.a.createElement("div",{className:"small"},"salaried"===t?"Enter a base salary to select additional.":"Enter profit to select additional."))),"additional"===m&&l.a.createElement(l.a.Fragment,null,"selfEmployed"===t&&l.a.createElement(k.a.Group,{as:u.a},l.a.createElement(k.a.Label,{column:!0,xs:7,md:6},"Contribution type"),l.a.createElement(d.a,{xs:5,md:6},l.a.createElement(k.a.Check,{inline:!0},l.a.createElement(k.a.Check.Input,{type:"radio",id:"pensionPercent",name:"pensionType",value:"percent",checked:"percent"===o,onChange:C}),l.a.createElement(k.a.Check.Label,{htmlFor:"pensionPercent"},"Percent")),l.a.createElement(k.a.Check,{inline:!0},l.a.createElement(k.a.Check.Input,{type:"radio",id:"pensionlShekel",name:"pensionType",value:"shekel",checked:"shekel"===o,onChange:C}),l.a.createElement(k.a.Check.Label,{htmlFor:"pensionlShekel"},"Shekel")))),l.a.createElement(k.a.Group,{as:u.a},l.a.createElement(k.a.Label,{htmlFor:"pensionAmount",column:!0,xs:7,md:6},"Total contribution"),l.a.createElement(d.a,{xs:5,md:6},l.a.createElement(T.a,null,l.a.createElement(F.a,{as:"input",id:"pensionAmount",name:"pensionAmount",type:"number",inputMode:"gb"===f?"decimal":"text",pattern:"[0-9]*",step:"0.01",min:"percent"===o?A:R,max:"percent"===o?100:void 0,value:s,onChange:C,required:!0}),l.a.createElement(T.a.Append,null,l.a.createElement(T.a.Text,null,"percent"===o?"%":"\u20aa")),l.a.createElement(k.a.Control.Feedback,{type:"invalid"},"percent"===o?"Enter a valid percentage. The legal minimum is ".concat(A,"%."):"".concat(L," The legal minimum is ").concat(R,"\u20aa."))))))),l.a.createElement(k.a.Group,{as:u.a},l.a.createElement(k.a.Label,{htmlFor:"educationFund",column:!0,xs:7,md:6},"Education fund"),l.a.createElement(d.a,{xs:5,md:6},l.a.createElement(T.a,null,l.a.createElement(F.a,{as:"input",id:"educationFund",name:"educationFund",type:"number",inputMode:"za"===f?"none":"decimal",pattern:"[0-9]",step:"0.01",min:"1",max:"100",value:p,onChange:C,required:P(p)}),l.a.createElement(T.a.Append,null,l.a.createElement(T.a.Text,null,"%")),l.a.createElement(k.a.Control.Feedback,{type:"invalid"},"Enter a valid percentage."))))),"salaried"===t&&l.a.createElement(l.a.Fragment,null,l.a.createElement("fieldset",null,l.a.createElement(k.a.Label,{as:"legend"},"Allowances"),l.a.createElement(k.a.Group,{as:u.a},l.a.createElement(k.a.Label,{htmlFor:"travelAllowance",column:!0,xs:7,md:6},"Travel"),l.a.createElement(d.a,{xs:5,md:6},l.a.createElement(k.a.Control,{as:"input",id:"travelAllowance",name:"travelAllowance",type:"number",inputMode:"za"===f?"none":"decimal",pattern:"[0-9]*",step:"0.01",min:"0",value:E,onChange:C,required:P(E)}),l.a.createElement(k.a.Control.Feedback,{type:"invalid"},L))),l.a.createElement(k.a.Group,{as:u.a},l.a.createElement(k.a.Label,{htmlFor:"lunchAllowance",column:!0,xs:7,md:6},"Lunch"),l.a.createElement(d.a,{xs:5,md:6},l.a.createElement(k.a.Control,{as:"input",id:"lunchAllowance",name:"lunchAllowance",type:"number",pattern:"[0-9]",step:"0.01",min:"0",value:h,onChange:C,required:P(h)}),l.a.createElement(k.a.Control.Feedback,{type:"invalid"},L)))),l.a.createElement("fieldset",null,l.a.createElement(k.a.Label,{as:"legend"},"Incentives"),l.a.createElement(k.a.Group,{as:u.a},l.a.createElement(k.a.Label,{htmlFor:"annualBonus",column:!0,xs:7,md:6},"One-time bonus or gift"),l.a.createElement(d.a,{xs:5,md:6},l.a.createElement(k.a.Control,{as:"input",id:"annualBonus",name:"annualBonus",type:"number",pattern:"[0-9]*",step:"0.01",min:"0",value:b,onChange:C,required:P(b)}),l.a.createElement(k.a.Control.Feedback,{type:"invalid"},L))),l.a.createElement(k.a.Group,{as:u.a},l.a.createElement(k.a.Label,{htmlFor:"commission",column:!0,xs:7,md:6},"Commission"),l.a.createElement(d.a,{xs:5,md:6},l.a.createElement(k.a.Control,{as:"input",id:"commission",name:"commission",type:"number",pattern:"[0-9]",inputMode:"za"===f?"":"decimal",step:"0.01",min:"0",value:y,onChange:C,required:P(y)}),l.a.createElement(k.a.Control.Feedback,{type:"invalid"},L))),l.a.createElement(k.a.Group,{as:u.a},l.a.createElement(k.a.Label,{htmlFor:"overtime",column:!0,xs:7,md:6},"Overtime"),l.a.createElement(d.a,{xs:5,md:6},l.a.createElement(k.a.Control,{as:"input",id:"overtime",name:"overtime",type:"number",inputMode:"za"===f?"":"decimal",pattern:"[0-9]*",step:"0.01",min:"0",value:x,onChange:C,required:P(x)}),l.a.createElement(k.a.Control.Feedback,{type:"invalid"},L))))),l.a.createElement(g.a,{type:"submit",variant:"primary"},"Calculate")))},L=t(32);function R(e,a,t,n,l,r,i){var c=[n-r,n];l&&c.push((12*(n-r)+r)/12);var m=[];c.forEach((function(n){var l=0;Object.keys(e[a].bituachLeumi[i]).forEach((function(r){var c,m=e[a].bituachLeumi[i][r],o=m.min,u=m.max,d=e[a].bituachLeumi[i][r].rate[t];c=0===o?0:1,n>=o&&(l+=n>=u?(u-o+c)*(d/100):(n-o+c)*(d/100))})),m.push(l)}));var o=m[0],u=m[1]-m[0],d=m[2];return l?{month:o+12*(d-o),annual:12*d}:{month:o+u,annual:12*o+u}}function A(e,a,t,n,l){return"legalMin"===t?a:"additional"===t&&"shekel"===l?n:e*(n/100)}function w(e,a,t,n,l){var r=t*(l/100);if("selfEmployed"===n){var i=e[a].educationFund[n],c=i.salaryPercent,m=i.salaryCeiling*(c/100)/12;return{educationFundContribution:r,educationFundTaxDeductible:r<=m?r:m}}return r}function S(e,a,t,n,l,r){var i=[];[12*(t-n),12*(t-n)+n].forEach((function(t){var n=0;Object.keys(e[a].incomeTax).forEach((function(l){var r,i=e[a].incomeTax[l],c=i.rate,m=i.min,o=i.max;r=0===m?0:1,t>=m&&(n+=void 0===o?c/100*(t-m):t>=o?(o-m+r)*(c/100):(t-m+r)*(c/100))})),i.push(n)}));var c=i[0],m=i[1]-i[0],o=c/12+m-(l+r),u=c+m-12*(l+r);return{incomeTax:o>0?o:0,annualIncomeTax:u>0?u:0}}function q(e,a){if("il"===e)var t="he-IL",n="ILS";return new Intl.NumberFormat(t,{style:"currency",currency:n}).format(a)}var M=function(e){var a=e.stateData,t=a.employmentType,n=a.taxData,r=a.taxYearIndex,i=a.baseIncome,c=a.creditPoints,m=a.pensionOption,o=a.pensionAmount,u=a.educationFund,d=a.travelAllowance,s=a.lunchAllowance,p=a.overtime,E=a.annualBonus,h=a.commission,b=a.showResultsTable,y=w(n,r,i,t,u),x=0;[i,d,s,E,p,h].forEach((function(e){x+="number"===typeof e&&e}));var f=x-d-s,v=E>(i+p+h)*(n[r].bituachLeumi.prisaLimitPercent/100),C=R(n,r,t,x,v,E,"nationalInsurance"),g=C.month,k=C.annual,T=R(n,r,t,x,v,E,"healthInsurance"),F=T.month,P=T.annual,I=c*n[r].creditPointValue,M=A(i,O(n,r,i,t),m,o),j=function(e,a,t){var n=e[a].pension.taxRelief.salaried,l=n.maxShekel,r=n.taxCredit;return t>=l?l*(r/100):t*(r/100)}(n,r,M),D=S(n,r,x,E,I,j),N=D.incomeTax,G=D.annualIncomeTax;return l.a.createElement("section",{style:{display:!0===b?"block":"none"},ref:e.refProp},l.a.createElement("h2",null,"Net pay results"),l.a.createElement(L.a,{striped:!0,bordered:!0,className:"table__3 table__header--blue"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"Month"),l.a.createElement("th",null,"Year"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Basic salary"),l.a.createElement("td",null,q("il",i)),l.a.createElement("td",null,q("il",12*i))),l.a.createElement("tr",null,l.a.createElement("td",null,"Taxable income"),l.a.createElement("td",null,q("il",x)),l.a.createElement("td",null,q("il",12*(x-E)+E))),l.a.createElement("tr",null,l.a.createElement("td",null,"Income tax"),l.a.createElement("td",null,q("il",N)),l.a.createElement("td",null,q("il",G))),l.a.createElement("tr",null,l.a.createElement("td",null,"National insurance"),l.a.createElement("td",null,q("il",g)),l.a.createElement("td",null,q("il",k))),l.a.createElement("tr",null,l.a.createElement("td",null,"Health insurance"),l.a.createElement("td",null,q("il",F)),l.a.createElement("td",null,q("il",P))),l.a.createElement("tr",null,l.a.createElement("td",null,"Pension"),l.a.createElement("td",null,q("il",M)),l.a.createElement("td",null,q("il",12*M))),y>0&&l.a.createElement("tr",null,l.a.createElement("td",null,"Educational fund"),l.a.createElement("td",null,q("il",y)),l.a.createElement("td",null,q("il",12*y))),E>0&&l.a.createElement("tr",null,l.a.createElement("td",null,"Bonus"),l.a.createElement("td",null,q("il",E)),l.a.createElement("td",null,q("il",E))),l.a.createElement("tr",null,l.a.createElement("td",null,"Net"),l.a.createElement("td",null,q("il",f-N-g-F-M-y)),l.a.createElement("td",null,q("il",12*(f-E)+E-G-k-P-12*(M+y)))))))};var j=function(e){var a=e.stateData,t=a.employmentType,n=a.taxData,r=a.taxYearIndex,i=a.baseIncome,c=a.creditPoints,m=a.pensionOption,o=a.pensionType,u=a.pensionAmount,d=a.educationFund,s=a.showResultsTable,p=w(n,r,i,t,d),E=p.educationFundContribution,h=p.educationFundTaxDeductible,b=A(i,O(n,r,i,t),m,u,o),y=function(e,a,t,n){var l,r=e[a].pension.taxRelief.selfEmployed,i=r.taxDeductablePercent,c=r.taxCreditPercent,m=r.taxCredit,o=r.salaryCeiling,u=o/12*(i/100),d=o/12*(c/100),s=t*(i/100),p=t*(c/100),E=0;return n>s?(!function(){var e=n-s;E=e>p?p>d?d*(m/100):p*(m/100):e>d?d*(m/100):e*(m/100)}(),l=s>u?u:s):l=n>u?u:n,{pensionTaxDeductible:l,pensionTaxCredit:E}}(n,r,i,b),x=y.pensionTaxDeductible,f=y.pensionTaxCredit,v=i-h-x,C=function(e,a,t){var n=e[a].bituachLeumi,l=n.nationalAverageSalary,r=n.selfEmployedNationalInsuranceDiscountPercent,i=n.nationalInsurance,c=i.band1.rate.selfEmployed,m=i.band2,o=m.rate.selfEmployed,u=m.min,d=m.max,s=c/100,p=o/100,E=r/100;return(t=t>d?d:t)-(t<u?t/(1+E*s):(t+u/l*l*(p-s)*E)/(1+E*p))}(n,r,v),g=R(n,r,t,v-C,!1,0,"nationalInsurance"),k=g.month,T=g.annual,F=R(n,r,t,v-C,!1,0,"healthInsurance"),P=F.month,I=F.annual,M=S(n,r,v,0,c*n[r].creditPointValue,f),j=M.incomeTax,D=M.annualIncomeTax;return l.a.createElement("section",{style:{display:!0===s?"block":"none"},ref:e.refProp},l.a.createElement("h2",null,"Net pay results"),l.a.createElement(L.a,{striped:!0,bordered:!0,className:"table__3 table__header--blue"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"Month"),l.a.createElement("th",null,"Year"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Profit"),l.a.createElement("td",null,q("il",i)),l.a.createElement("td",null,q("il",12*i))),l.a.createElement("tr",null,l.a.createElement("td",null,"Taxable income"),l.a.createElement("td",null,q("il",v)),l.a.createElement("td",null,q("il",12*v))),l.a.createElement("tr",null,l.a.createElement("td",null,"Income tax"),l.a.createElement("td",null,q("il",j)),l.a.createElement("td",null,q("il",D))),l.a.createElement("tr",null,l.a.createElement("td",null,"National insurance"),l.a.createElement("td",null,q("il",k)),l.a.createElement("td",null,q("il",T))),l.a.createElement("tr",null,l.a.createElement("td",null,"Health insurance"),l.a.createElement("td",null,q("il",P)),l.a.createElement("td",null,q("il",I))),l.a.createElement("tr",null,l.a.createElement("td",null,"Pension"),l.a.createElement("td",null,q("il",b)),l.a.createElement("td",null,q("il",12*b))),E>0&&l.a.createElement("tr",null,l.a.createElement("td",null,"Educational fund"),l.a.createElement("td",null,q("il",E)),l.a.createElement("td",null,q("il",12*E))),l.a.createElement("tr",null,l.a.createElement("td",null,"Net"),l.a.createElement("td",null,q("il",i-j-k-P-b-E)),l.a.createElement("td",null,q("il",12*i+D-T-I-12*b-12*E))))))},D=function(e){function a(e){var t;return Object(h.a)(this,a),(t=Object(y.a)(this,Object(x.a)(a).call(this,e))).handleChange=function(e){var a,n=e.target,l=n.name,r=n.value,i=n.type;t.setState((a={},Object(E.a)(a,l,"number"===i?parseFloat(r)||"":r),Object(E.a)(a,"showResultsTable",!1),a)),"pensionOption"===l&&"legalMin"===r&&t.setState({pensionAmount:""}),"baseIncome"===l&&""===r&&t.setState({pensionOption:"legalMin"})},t.handleClick=function(){t.setState({keypad:"za"})},t.scrollToMyRef=function(){setTimeout((function(){t.resultsTable.current.scrollIntoView({behavior:"smooth",block:"start"})}),150)},t.handleSubmit=function(e){var a=e.currentTarget;!0===a.checkValidity()?(t.setState({showResultsTable:!0,validated:!1}),t.scrollToMyRef()):t.setState({validated:!0}),a.checkValidity(),e.preventDefault(),e.stopPropagation()},t.state={employmentType:e.employmentType,taxData:v,taxYearIndex:0,baseIncome:"",creditPoints:"",pensionOption:"legalMin",pensionType:"percent",pensionAmount:"",educationFund:"",travelAllowance:"",lunchAllowance:"",annualBonus:"",commission:"",overtime:"",keypad:"gb",validated:!1,showResultsTable:!1},t.resultsTable=l.a.createRef(),t}return Object(f.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(I,{stateData:this.state,handleChange:this.handleChange,handleSubmit:this.handleSubmit,handleClick:this.handleClick}),"salaried"===this.state.employmentType&&l.a.createElement(M,{stateData:this.state,refProp:this.resultsTable}),"selfEmployed"===this.state.employmentType&&l.a.createElement(j,{stateData:this.state,refProp:this.resultsTable}))}}]),a}(n.Component);var N=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null),l.a.createElement(o.a,null,l.a.createElement(u.a,{className:"justify-content-center"},l.a.createElement(d.a,{xs:12,sm:10,md:8},l.a.createElement(D,{employmentType:e.employmentType})))))};var G=function(){return l.a.createElement(c.a,{basename:"/financial-management"},l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",exact:!0,component:p}),l.a.createElement(m.a,{path:"/calculators/salaried/net-pay",render:function(e){return l.a.createElement(N,Object.assign({},e,{employmentType:"salaried"}))}}),l.a.createElement(m.a,{path:"/calculators/self-employed/net-pay",render:function(e){return l.a.createElement(N,Object.assign({},e,{employmentType:"selfEmployed"}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.65efa752.chunk.js.map