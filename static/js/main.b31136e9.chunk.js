(this["webpackJsonpfinancial-management-israel"]=this["webpackJsonpfinancial-management-israel"]||[]).push([[0],{30:function(e){e.exports=JSON.parse('[{"taxYear":2019,"creditPointValue":218,"incomeTax":{"band1":{"rate":10,"min":0,"max":75720},"band2":{"rate":14,"min":75721,"max":108600},"band3":{"rate":20,"min":108601,"max":174360},"band4":{"rate":31,"min":174361,"max":242400},"band5":{"rate":35,"min":242401,"max":504360},"band6":{"rate":47,"min":504361,"max":649560},"band7":{"rate":50,"min":649560}},"bituachLeumi":{"nationalAverageSalary":10273,"prisaLimitPercent":25,"selfEmployedTaxDeductiblePercent":52,"nationalInsurance":{"band1":{"rate":{"salaried":0.4,"selfEmployed":2.87},"min":0,"max":6164},"band2":{"rate":{"salaried":7,"selfEmployed":12.83},"min":6165,"max":43890}},"healthInsurance":{"band1":{"rate":{"salaried":3.1,"selfEmployed":3.1},"min":0,"max":6164},"band2":{"rate":{"salaried":5,"selfEmployed":5},"min":6165,"max":43890}}},"pension":{"taxRelief":{"salaried":{"maxPercent":7,"maxShekel":616,"taxCredit":35},"selfEmployed":{"taxDeductablePercent":11,"taxCreditPercent":5.5,"taxCredit":35,"salaryCeiling":211200}},"legalMinPerecent":{"salaried":6,"selfEmployed":{"low":4.45,"high":12.55}}},"educationFund":{"salaried":{"salaryPercent":2.5,"salaryCeiling":188544},"selfEmployed":{"salaryPercent":4.5,"salaryCeiling":264000}}},{"taxYear":2020,"creditPointValue":219,"incomeTax":{"band1":{"rate":10,"min":0,"max":75960},"band2":{"rate":14,"min":75960,"max":108960},"band3":{"rate":20,"min":108961,"max":174960},"band4":{"rate":31,"min":174961,"max":243120},"band5":{"rate":35,"min":243121,"max":505920},"band6":{"rate":47,"min":505921,"max":651600},"band7":{"rate":50,"min":651600}},"bituachLeumi":{"nationalAverageSalary":10551,"prisaLimitPercent":25,"selfEmployedTaxDeductiblePercent":52,"nationalInsurance":{"band1":{"rate":{"salaried":0.4,"selfEmployed":2.87},"min":0,"max":6331},"band2":{"rate":{"salaried":7,"selfEmployed":12.83},"min":6332,"max":44020}},"healthInsurance":{"band1":{"rate":{"salaried":3.1,"selfEmployed":3.1},"min":0,"max":6331},"band2":{"rate":{"salaried":5,"selfEmployed":5},"min":6332,"max":44020}}},"pension":{"taxRelief":{"salaried":{"maxPercent":7,"maxShekel":616,"taxCredit":35},"selfEmployed":{"taxDeductablePercent":11,"taxCreditPercent":5.5,"taxCredit":35,"salaryCeiling":211200}},"legalMinPerecent":{"salaried":6,"selfEmployed":{"low":4.45,"high":12.55}}},"educationFund":{"salaried":{"salaryPercent":2.5,"salaryCeiling":188544},"selfEmployed":{"salaryPercent":4.5,"salaryCeiling":265000}}}]')},35:function(e,a,t){e.exports=t(50)},40:function(e,a,t){},41:function(e,a,t){},47:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(22),m=t.n(r),c=t(11),i=t(6),o=(t(40),t(51)),u=t(52),s=t(24);t(41);var d=function(){return l.a.createElement(o.a,{fluid:!0},l.a.createElement(u.a,null,l.a.createElement(s.a,{xs:12,className:"hero"},l.a.createElement("h1",null,"Israel Tax Calculators"))))};var E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement("ul",null,l.a.createElement(c.b,{to:"/calculators/salaried/net-pay"},l.a.createElement("li",null,"Salaried")),l.a.createElement(c.b,{to:"/calculators/self-employed/net-pay"},l.a.createElement("li",null,"Self employed"))))},p=t(18),b=t(26),y=t(27),x=t(34),h=t(29),f=t(33),C=t(30),v=(t(47),t(3)),g=(v.array.isRequired,v.number.isRequired,Object(v.oneOfType)([v.string,v.number]).isRequired,Object(v.oneOfType)([v.string,v.number]).isRequired,v.string.isRequired,Object(v.oneOfType)([v.string,v.number]).isRequired,Object(v.oneOfType)([v.string,v.number]).isRequired,Object(v.oneOfType)([v.string,v.number]).isRequired,Object(v.oneOfType)([v.string,v.number]).isRequired,Object(v.oneOfType)([v.string,v.number]).isRequired,Object(v.oneOfType)([v.string,v.number]).isRequired,Object(v.oneOfType)([v.string,v.number]).isRequired,v.bool.isRequired,v.bool.isRequired,t(54)),F=t(53),T=t(31),k=t(55);var L=function(e){var a=e.stateData,t=a.employmentType,n=a.taxData,r=a.baseIncome,m=a.creditPoints,c=a.pensionOption,i=a.pensionPercent,o=a.educationFund,d=a.travelAllowance,E=a.lunchAllowance,p=a.annualBonus,b=a.commission,y=a.overtime,x=a.validated,h=e.handleChange,f="Enter a valid number.";return l.a.createElement("section",null,l.a.createElement("h2",null,"Net pay calculator"),l.a.createElement(g.a,{id:"netpay-form-".concat(t),noValidate:!0,validated:x,onSubmit:e.handleSubmit},l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{column:!0,xs:5,md:6},"1"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",type:"number",pattern:"[0-9]*",step:"any"}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},"Error"))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{column:!0,xs:5,md:6},"2"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",type:"number",pattern:"[0-9]*",step:"0.1"}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},"Error"))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{column:!0,xs:5,md:6},"3"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",type:"number",step:"0.1"}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},"Error"))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{column:!0,xs:5,md:6},"4"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",inputmode:"numeric",step:"0.1"}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},"Error"))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{column:!0,xs:5,md:6},"5"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",inputmode:"numeric",pattern:"[0-9]*",step:"0.1"}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},"Error"))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{column:!0,xs:5,md:6},"6"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",inputmode:"numeric",pattern:"[0-9]*"}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},"Error"))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{column:!0,xs:5,md:6},"7"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",type:"number",inputmode:"numeric",pattern:"[0-9]*",step:"0.1"}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},"Error"))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{column:!0,xs:5,md:6},"8"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",type:"number",inputmode:"numeric"}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},"Error"))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{column:!0,xs:5,md:6},"9"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",type:"number",inputmode:"numeric",step:"0.1"}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},"Error"))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{column:!0,xs:5,md:6},"10"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",type:"number",inputmode:"decimal",step:"0.1"}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},"Error"))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{column:!0,xs:5,md:6},"11"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",type:"number",inputmode:"decimal",step:"0.25"}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},"Error"))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{column:!0,xs:5,md:6},"12"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",inputmode:"decimal"}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},"Error"))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{column:!0,xs:5,md:6},"13"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",type:"number",inputmode:"decimal"}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},"Error"))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{column:!0,xs:5,md:6},"14"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",type:"number",inputmode:"decimal",pattern:"[0-9]*"}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},"Error"))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{column:!0,xs:5,md:6},"15"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",type:"number",inputmode:"decimal",pattern:"[0-9]*",step:"0.25"}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},"Error"))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{column:!0,xs:5,md:6},"16"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",inputmode:"decimal",pattern:"[0-9]*",step:"0.25"}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},"Error"))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{column:!0,xs:5,md:6},"17"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",inputmode:"decimal",pattern:"[0-9]*"}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},"Error"))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{column:!0,xs:5,md:6},"18"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",inputmode:"decimal",step:"0.25"}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},"Error"))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{column:!0,xs:5,md:6},"19"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",type:"number",inputmode:"decimal",pattern:"[0-9]*",step:"0.01",min:"0"}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},"Error"))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{column:!0,xs:5,md:6},"19"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",type:"number",inputmode:"decimal",pattern:"[0-9]*",step:"0.01",min:"1"}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},"Error"))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{column:!0,xs:5,md:6},"20"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",type:"number",inputmode:"decimal",pattern:"[1-9]*",step:"0.25"}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},"Error"))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{column:!0,xs:5,md:6},"20"),l.a.createElement(s.a,{xs:7,md:6,className:"test-req"},l.a.createElement(g.a.Control,{as:"input",type:"number",inputmode:"decimal",pattern:"[0-9]*",step:"0.01",required:0===m||m>0}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},"Error"))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{htmlFor:"taxYear",column:!0,xs:5,md:6},"Tax year"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"select",id:"taxYear",name:"taxYearIndex",defaultValue:"",required:!0,onChange:h},l.a.createElement("option",{disabled:!0,value:""},"Select"),n.map((function(e,a){return l.a.createElement("option",{key:a,value:a},e.taxYear)}))),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},"Select a tax year."))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{htmlFor:"income",column:!0,xs:5,md:6},"salaried"===t?"Base salary":"Profit"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",id:"income",name:"baseIncome",type:"number",pattern:"[0-9]*",step:"any",required:!0,value:r,onChange:h}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},f))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{htmlFor:"creditPoints",column:!0,xs:5,md:6},"Tax credit points"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",id:"creditPoints",name:"creditPoints",type:"number",pattern:"[0-9]*",step:"0.25",className:"not-required",value:m,onChange:h}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},"Credit points must be in quater increments."))),l.a.createElement("fieldset",null,l.a.createElement(g.a.Label,{as:"legend"},"Contributions"),l.a.createElement("fieldset",null,l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{as:"legend",column:!0,xs:5,md:6},"Pension"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Check,{inline:!0},l.a.createElement(g.a.Check.Input,{defaultChecked:!0,type:"radio",id:"pensionlMin",name:"pensionOption",value:"legalMin",onChange:h}),l.a.createElement(g.a.Check.Label,{htmlFor:"pensionlMin"},"Legal minium")),l.a.createElement(g.a.Check,{inline:!0},l.a.createElement(g.a.Check.Input,{type:"radio",id:"pensionlExtra",name:"pensionOption",value:"additional",onChange:h}),l.a.createElement(g.a.Check.Label,{htmlFor:"pensionlExtra"},"Additional")))),"additional"===c&&l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{htmlFor:"pensionPercent",column:!0,xs:5,md:6},"Total contribution"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(F.a,null,l.a.createElement(T.a,{as:"input",id:"pensionPercent",name:"pensionPercent",type:"number",pattern:"[0-9]*",step:"0.1",min:"1",max:"100",value:i,onChange:h,required:!0}),l.a.createElement(F.a.Append,null,l.a.createElement(F.a.Text,null,"%")),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},f))))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{htmlFor:"educationFund",column:!0,xs:5,md:6},"Education fund"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(F.a,null,l.a.createElement(T.a,{as:"input",id:"educationFund",name:"educationFund",type:"number",pattern:"[0-9]*",step:"0.1",min:"1",max:"100",value:o,onChange:h,className:"not-required"}),l.a.createElement(F.a.Append,null,l.a.createElement(F.a.Text,null,"%")),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},f))))),"salaried"===t&&l.a.createElement(l.a.Fragment,null,l.a.createElement("fieldset",null,l.a.createElement(g.a.Label,{as:"legend"},"Allowances"),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{htmlFor:"travelAllowance",column:!0,xs:5,md:6},"Travel"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",id:"travelAllowance",name:"travelAllowance",type:"number",pattern:"[0-9]*",step:"any",value:d,onChange:h,className:"not-required"}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},f))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{htmlFor:"lunchAllowance",column:!0,xs:5,md:6},"Lunch"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",id:"lunchAllowance",name:"lunchAllowance",type:"number",pattern:"[0-9]*",step:"any",value:E,onChange:h,className:"not-required"}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},f)))),l.a.createElement("fieldset",null,l.a.createElement(g.a.Label,{as:"legend"},"Incentives"),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{htmlFor:"annualBonus",column:!0,xs:5,md:6},"One-time bonus or gift"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",id:"annualBonus",name:"annualBonus",type:"number",pattern:"[0-9]*",step:"any",value:p,onChange:h,className:"not-required"}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},f))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{htmlFor:"commission",column:!0,xs:5,md:6},"Commission"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",id:"commission",name:"commission",type:"number",pattern:"[0-9]*",step:"any",value:b,onChange:h,className:"not-required"}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},f))),l.a.createElement(g.a.Group,{as:u.a},l.a.createElement(g.a.Label,{htmlFor:"overtime",column:!0,xs:5,md:6},"Overtime"),l.a.createElement(s.a,{xs:7,md:6},l.a.createElement(g.a.Control,{as:"input",id:"overtime",name:"overtime",type:"number",pattern:"[0-9]*",step:"any",value:y,onChange:h,className:"not-required"}),l.a.createElement(g.a.Control.Feedback,{type:"invalid"},f))))),l.a.createElement(k.a,{type:"submit",variant:"primary"},"Calculate")))},P=t(32);function O(e,a,t,n,l,r,m){var c=[n-r,n];l&&c.push((12*(n-r)+r)/12);var i=[];c.forEach((function(n){var l=0;Object.keys(e[a].bituachLeumi[m]).forEach((function(r){var c,i=e[a].bituachLeumi[m][r],o=i.min,u=i.max,s=e[a].bituachLeumi[m][r].rate[t];c=0===o?0:1,n>=o&&(l+=n>=u?(u-o+c)*(s/100):(n-o+c)*(s/100))})),i.push(l)}));var o=i[0],u=i[1]-i[0],s=i[2];return l?{month:o+12*(s-o),annual:12*s}:{month:o+u,annual:12*o+u}}function G(e,a,t,n){var l,r=e[a].bituachLeumi.nationalAverageSalary,m=r/2,c=e[a].pension.legalMinPerecent.selfEmployed,i=c.low,o=c.high,u=e[a].pension.legalMinPerecent.salaried;return"salaried"===n?l=t*(u/100):"selfEmployed"===n&&(l=t>=m?t>=r?m*(i/100)+m*(o/100):m*(i/100)+o/100*(t-m):t*(i/100)),l}function I(e,a,t,n){return"legalMin"===e?t:a*(n/100)}function w(e,a,t,n,l){var r=t*(l/100);if("selfEmployed"===n){var m=e[a].educationFund[n],c=m.salaryPercent,i=m.salaryCeiling*(c/100)/12;return{educationFundContribution:r,educationFundTaxDeductible:r<=i?r:i}}return r}function q(e,a,t,n,l,r){var m=[];[12*(t-n),12*(t-n)+n].forEach((function(t){var n=0;Object.keys(e[a].incomeTax).forEach((function(l){var r,m=e[a].incomeTax[l],c=m.rate,i=m.min,o=m.max;r=0===i?0:1,t>=i&&(n+=void 0===o?c/100*(t-i):t>=o?(o-i+r)*(c/100):(t-i+r)*(c/100))})),m.push(n)}));var c=m[0],i=m[1]-m[0],o=c/12+i-(l+r),u=c+i-12*(l+r);return{incomeTax:o>0?o:0,annualIncomeTax:u>0?u:0}}function R(e,a){if("il"===e)var t="he-IL",n="ILS";return new Intl.NumberFormat(t,{style:"currency",currency:n}).format(a)}var S=function(e){var a=e.stateData,t=a.employmentType,n=a.taxData,r=a.taxYearIndex,m=a.baseIncome,c=a.creditPoints,i=a.pensionOption,o=a.pensionPercent,u=a.educationFund,s=a.travelAllowance,d=a.lunchAllowance,E=a.overtime,p=a.annualBonus,b=a.commission,y=a.showResultsTable,x=w(n,r,m,t,u),h=0;[m,s,d,p,E,b].forEach((function(e){h+="number"===typeof e&&e}));var f=h-s-d,C=p>(m+E+b)*(n[r].bituachLeumi.prisaLimitPercent/100),v=O(n,r,t,h,C,p,"nationalInsurance"),g=v.month,F=v.annual,T=O(n,r,t,h,C,p,"healthInsurance"),k=T.month,L=T.annual,S=c*n[r].creditPointValue,j=I(i,m,G(n,r,m,t),o),D=function(e,a,t){var n=e[a].pension.taxRelief.salaried,l=n.maxShekel,r=n.taxCredit;return t>=l?l*(r/100):t*(r/100)}(n,r,j),N=q(n,r,h,p,S,D),A=N.incomeTax,M=N.annualIncomeTax;return l.a.createElement("section",{style:{display:!0===y?"block":"none"},ref:e.refProp},l.a.createElement("h2",null,"Net pay results"),l.a.createElement(P.a,{striped:!0,bordered:!0,className:"table__3 table__header--blue"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"Month"),l.a.createElement("th",null,"Year"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Basic salary"),l.a.createElement("td",null,R("il",m)),l.a.createElement("td",null,R("il",12*m))),l.a.createElement("tr",null,l.a.createElement("td",null,"Taxable income"),l.a.createElement("td",null,R("il",h)),l.a.createElement("td",null,R("il",12*(h-p)+p))),l.a.createElement("tr",null,l.a.createElement("td",null,"Income tax"),l.a.createElement("td",null,R("il",A)),l.a.createElement("td",null,R("il",M))),l.a.createElement("tr",null,l.a.createElement("td",null,"National insurance"),l.a.createElement("td",null,R("il",g)),l.a.createElement("td",null,R("il",F))),l.a.createElement("tr",null,l.a.createElement("td",null,"Health insurance"),l.a.createElement("td",null,R("il",k)),l.a.createElement("td",null,R("il",L))),l.a.createElement("tr",null,l.a.createElement("td",null,"Pension"),l.a.createElement("td",null,R("il",j)),l.a.createElement("td",null,R("il",12*j))),x>0&&l.a.createElement("tr",null,l.a.createElement("td",null,"Educational fund"),l.a.createElement("td",null,R("il",x)),l.a.createElement("td",null,R("il",12*x))),p>0&&l.a.createElement("tr",null,l.a.createElement("td",null,"Bonus"),l.a.createElement("td",null,R("il",p)),l.a.createElement("td",null,R("il",p))),l.a.createElement("tr",null,l.a.createElement("td",null,"Net"),l.a.createElement("td",null,R("il",f-A-g-k-j-x)),l.a.createElement("td",null,R("il",12*(f-p)+p-M-F-L-12*(j+x)))))))};var j=function(e){var a=e.stateData,t=a.employmentType,n=a.taxData,r=a.taxYearIndex,m=a.baseIncome,c=a.creditPoints,i=a.pensionOption,o=a.pensionPercent,u=a.educationFund,s=a.showResultsTable,d=w(n,r,m,t,u),E=d.educationFundContribution,p=d.educationFundTaxDeductible,b=I(i,m,G(n,r,m,t),o),y=function(e,a,t,n){var l,r=e[a].pension.taxRelief.selfEmployed,m=r.taxDeductablePercent,c=r.taxCreditPercent,i=r.taxCredit,o=r.salaryCeiling,u=o/12*(m/100),s=o/12*(c/100),d=t*(m/100),E=t*(c/100),p=0;return n>d?(!function(){var e=n-d;p=e>E?E>s?s*(i/100):E*(i/100):e>s?s*(i/100):e*(i/100)}(),l=d>u?u:d):l=n>u?u:n,{pensionTaxDeductible:l,pensionTaxCredit:p}}(n,r,m,b),x=y.pensionTaxDeductible,h=y.pensionTaxCredit,f=m-p-x,C=function(e,a,t){var n=e[a].bituachLeumi,l=n.nationalAverageSalary,r=n.selfEmployedTaxDeductiblePercent,m=n.nationalInsurance,c=m.band1.rate.selfEmployed,i=m.band2,o=i.rate.selfEmployed/100,u=r/100;return t-(t+i.min/l*l*((o-c/100)*u))/(1+u*o)}(n,r,f),v=O(n,r,t,f-C,!1,0,"nationalInsurance"),g=v.month,F=v.annual,T=O(n,r,t,f-C,!1,0,"healthInsurance"),k=T.month,L=T.annual,S=q(n,r,f,0,c*n[r].creditPointValue,h),j=S.incomeTax,D=S.annualIncomeTax;return l.a.createElement("section",{style:{display:!0===s?"block":"none"},ref:e.refProp},l.a.createElement("h2",null,"Net pay results"),l.a.createElement(P.a,{striped:!0,bordered:!0,className:"table__3 table__header--blue"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"Month"),l.a.createElement("th",null,"Year"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Profit"),l.a.createElement("td",null,R("il",m)),l.a.createElement("td",null,R("il",12*m))),l.a.createElement("tr",null,l.a.createElement("td",null,"Taxable income"),l.a.createElement("td",null,R("il",f)),l.a.createElement("td",null,R("il",12*f))),l.a.createElement("tr",null,l.a.createElement("td",null,"Income tax"),l.a.createElement("td",null,R("il",j)),l.a.createElement("td",null,R("il",D))),l.a.createElement("tr",null,l.a.createElement("td",null,"National insurance"),l.a.createElement("td",null,R("il",g)),l.a.createElement("td",null,R("il",F))),l.a.createElement("tr",null,l.a.createElement("td",null,"Health insurance"),l.a.createElement("td",null,R("il",k)),l.a.createElement("td",null,R("il",L))),l.a.createElement("tr",null,l.a.createElement("td",null,"Pension"),l.a.createElement("td",null,R("il",b)),l.a.createElement("td",null,R("il",12*b))),E>0&&l.a.createElement("tr",null,l.a.createElement("td",null,"Educational fund"),l.a.createElement("td",null,R("il",E)),l.a.createElement("td",null,R("il",12*E))),l.a.createElement("tr",null,l.a.createElement("td",null,"Net"),l.a.createElement("td",null,R("il",m-j-g-k-b-E)),l.a.createElement("td",null,R("il",12*m+D-F-L-12*b-12*E))))))},D=function(e){function a(e){var t;return Object(b.a)(this,a),(t=Object(x.a)(this,Object(h.a)(a).call(this,e))).handleChange=function(e){var a,n=e.target,l=n.name,r=n.value,m=n.type;t.setState((a={},Object(p.a)(a,l,"number"===m?parseFloat(r)||"":r),Object(p.a)(a,"showResultsTable",!1),a)),"pensionOption"===l&&"legalMin"===r&&t.setState({pensionPercent:""})},t.scrollToMyRef=function(){setTimeout((function(){t.resultsTable.current.scrollIntoView({behavior:"smooth",block:"start"})}),150)},t.handleSubmit=function(e){var a=e.currentTarget;!0===a.checkValidity()&&(t.setState({showResultsTable:!0}),t.scrollToMyRef()),a.checkValidity(),e.preventDefault(),e.stopPropagation(),t.setState({validated:!0})},t.state={employmentType:e.employmentType,taxData:C,taxYearIndex:0,baseIncome:"",creditPoints:"",pensionOption:"legalMin",pensionPercent:"",educationFund:"",travelAllowance:"",lunchAllowance:"",annualBonus:"",commission:"",overtime:"",validated:!1,showResultsTable:!1},t.resultsTable=l.a.createRef(),t}return Object(f.a)(a,e),Object(y.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(L,{stateData:this.state,handleChange:this.handleChange,handleSubmit:this.handleSubmit}),"salaried"===this.state.employmentType&&l.a.createElement(S,{stateData:this.state,refProp:this.resultsTable}),"selfEmployed"===this.state.employmentType&&l.a.createElement(j,{stateData:this.state,refProp:this.resultsTable}))}}]),a}(n.Component);var N=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement(o.a,null,l.a.createElement(u.a,{className:"justify-content-center"},l.a.createElement(s.a,{xs:12,sm:10,md:8},l.a.createElement(c.b,{to:"/"},"home"),l.a.createElement(D,{employmentType:e.employmentType})))))};var A=function(){return l.a.createElement(c.a,{basename:"/financial-management"},l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",exact:!0,component:E}),l.a.createElement(i.a,{path:"/calculators/salaried/net-pay",render:function(e){return l.a.createElement(N,Object.assign({},e,{employmentType:"salaried"}))}}),l.a.createElement(i.a,{path:"/calculators/self-employed/net-pay",render:function(e){return l.a.createElement(N,Object.assign({},e,{employmentType:"selfEmployed"}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(l.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.b31136e9.chunk.js.map