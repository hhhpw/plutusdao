(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{87731:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stake",function(){return t(45021)}])},9849:function(e,n,t){"use strict";t.d(n,{X:function(){return s}});var r=t(85893),a=t(68527),o=t(98130),s=function(e){var n=e.date;return(0,r.jsx)(o.ZP,{date:n,zeroPadTime:2,renderer:function(e){var n=e.days,t=e.hours,s=e.minutes,i=e.seconds;return e.completed?(0,r.jsx)(a.xv,{variant:"boxSubHeading",children:"Approx. closing soon"}):(0,r.jsxs)(a.xv,{variant:"boxSubHeading",children:["Approx. closed in ",(0,o.Bu)(n)," days ",(0,o.Bu)(t)," hrs"," ",(0,o.Bu)(s)," mins ",(0,o.Bu)(i)," seconds"]})}})}},45021:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return se}});var r=t(85893),a=t(20949),o=t(68527),s=t(67294),i=t(27572),c=t(73384),l=t(50433),u=t(30225),p=t(85036),d=t(10901),f=t(34051),x=t.n(f),h=t(72175),w=t(2593),v=t(21046),g=t(35946),b=t(37113),m=t(45084),j=t(75104),y=t(20895),S=t(83741),k=t(51505),C=t(15492),O=t(56371),D=t(88767);function E(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function A(e,n,t,r,a,o,s){try{var i=e[o](s),c=i.value}catch(l){return void t(l)}i.done?n(c):Promise.resolve(c).then(r,a)}function P(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function s(e){A(o,r,a,s,i,"next",e)}function i(e){A(o,r,a,s,i,"throw",e)}s(void 0)}))}}function R(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function W(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){R(e,n,t[n])}))}return e}function T(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],s=!0,i=!1;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);s=!0);}catch(c){i=!0,a=c}finally{try{s||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return E(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return E(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var I={id:"pls",displayName:"PLS",plsAssetContract:(0,l.kh)(),plutusChef:(0,l.wE)()[1].staking,allowance:w.O$.from("0"),balance:w.O$.from("0"),deposited:w.O$.from("0"),pendingRewards:[{name:"plsDPX",value:w.O$.from(0)},{name:"plsJONES",value:w.O$.from(0)}],apr:0,tvl:0},N=(0,g.M)({initialState:I,actions:{initStore:function(e){return function(){var e=P(x().mark((function e(n){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.getState,n.setState;case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}}),$=((0,b.Bi)(N),function(){var e=P(x().mark((function e(n){var t,r,a,o,s,i,c,u,p,d,f,h,w,v,g,b,k,C;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new j.CH((0,l.wE)()[1].staking.address,y),r=new j.CH((0,l.wE)()[1].rewards.address,S),e.t0=T,e.next=6,n.all([t.currentEpoch(),t.stakingWindowOpen(),t.currentTotalStaked()]);case 6:return e.t1=e.sent,a=(0,e.t0)(e.t1,3),o=a[0],s=a[1],i=a[2],e.t2=T,e.next=14,n.all([r.epochRewards(o-2),t.epochCheckpoints(o-2)]);case 14:return e.t3=e.sent,c=(0,e.t2)(e.t3,2),u=c[0],p=c[1],d=u.plsDpx,f=u.plsJones,h=p.totalStaked,w=["dopex","jones-dao"],e.next=23,(0,m.Y1)(n);case 23:return v=e.sent,e.next=26,(0,m.Xg)(w);case 26:return g=e.sent,b=d/1e18*g.dopex+g["jones-dao"]*f/1e18,k=v*h/1e18,C=v*i/1e18,e.abrupt("return",{apr:12*b/k,windowOpen:s,tvl:C,currentEpoch:o});case 33:return e.prev=33,e.t4=e.catch(0),console.error("Unable to fetchPublicData in useRssSingleStaking: "+e.t4),e.abrupt("return",{apr:0,windowOpen:!1,tvl:0});case 37:case"end":return e.stop()}}),e,null,[[0,33]])})));return function(n){return e.apply(this,arguments)}}()),_=function(){var e=P(x().mark((function e(n,t){var r,a,o,s,i,c,u,p,d,f;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new j.CH((0,l.kh)().address,k),a=new j.CH((0,l.wE)()[1].staking.address,y),o=new j.CH((0,l.wE)()[1].rewards.address,S),e.t0=T,e.next=7,n.all([r.allowance(t,(0,l.wE)()[1].staking.address),a.stakedDetails(t),r.balanceOf(t),o.pendingRewards(t)]);case 7:return e.t1=e.sent,s=(0,e.t0)(e.t1,4),i=s[0],c=T(s[1],1),u=c[0],p=s[2],d=s[3],f=[{name:"plsDPX",value:d._pendingPlsDpx},{name:"plsJONES",value:d._pendingPlsJones}],e.abrupt("return",{allowance:i,deposited:u,balance:p,pendingRewards:f});case 18:return e.prev=18,e.t2=e.catch(0),console.error("Unable to fetchConnectedData in useRssSingleStaking: "+e.t2),e.abrupt("return",{allowance:w.O$.from(0),balance:w.O$.from(0),deposited:w.O$.from(0),pendingRewards:[{name:"plsDPX",value:w.O$.from(0)},{name:"plsJONES",value:w.O$.from(0)}]});case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(n,t){return e.apply(this,arguments)}}(),H=function(e,n,t){var r=T((0,l.qD)(),1)[0],a=new Date("2023/01/28"),o=new Date("2023/01/30"),i=(0,s.useState)({id:e,displayName:n,allowance:w.O$.from(0),balance:w.O$.from(0),deposited:w.O$.from(0),pendingRewards:[{name:"plsDPX",value:w.O$.from(0)},{name:"plsJONES",value:w.O$.from(0)}],plutusChef:(0,l.wE)()[1].staking,apr:0,tvl:0,windowOpen:!1,currentEpoch:6,nextEpochReopenDate:a.toLocaleDateString(),reopenClosedDate:o.toLocaleTimeString()}),c=i[0],u=i[1],p=(0,C.dd)(),d=function(e){var n=(0,C.dd)();return(0,D.useQuery)(["epoch-staking",{tokenId:e}],(function(){return $(n)}))}(e);(0,s.useEffect)((function(){if("success"===d.status){var e=d.data,n=e.apr,t=e.tvl,r=e.windowOpen,a=e.currentEpoch;u((function(e){return W({},e,{apr:n,tvl:t,windowOpen:r,currentEpoch:a})}))}}),[d.status]);var f=(0,s.useCallback)(P(x().mark((function e(){var n,r,a,o,s;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=9;break}return e.next=3,_(p,t);case 3:n=e.sent,r=n.allowance,a=n.deposited,o=n.balance,s=n.pendingRewards,u((function(e){return W({},e,{allowance:r,deposited:a,balance:o,pendingRewards:s})}));case 9:case"end":return e.stop()}}),e)}))),[t]);(0,s.useEffect)((function(){r.provider&&t&&f()}),[r.provider,t]);var h=function(){var e=P(x().mark((function e(n,t){var r,a,o,s,i,u,p;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=(0,O.parseEther)(n),console.log("lockingAmt: ".concat((0,O.parseEther)(n))),a=(0,l.kh)().connect(t),o=(0,l.wE)()[1].staking.connect(t),i=c.allowance.eq(0)?"Successfully Approved":"Successfully STAKE",u=c.allowance.eq(0)?"Approval Success":"Staking PLS Successfully",!c.allowance.eq(0)){e.next=13;break}return e.next=10,a.approve(o.address,v.Bz);case 10:s=e.sent,e.next=16;break;case 13:return e.next=15,o.stake(r);case 15:s=e.sent;case 16:return e.next=18,s.wait(1);case 18:return p=e.sent,e.abrupt("return",{txDetails:p,toastMsg:i,toastTitle:u});case 20:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),g=function(){var e=P(x().mark((function e(t){var r,a,o,s,i;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,l.wE)()[1].staking.connect(t),a="Withdrawing ".concat(n," Successfully"),o="Successfully Withdraw",e.next=5,r.unstake();case 5:return s=e.sent,e.next=8,s.wait(1);case 8:return i=e.sent,e.abrupt("return",{txDetails:i,toastMsg:o,toastTitle:a});case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),b=function(){var e=P(x().mark((function e(n){var t,r,a,o,s,i;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="Claim Pending Rewards is successful",r="Successfully CLAIM REWARDS",a=(0,l.wE)()[1].rewards,o=a.connect(n),e.next=6,o["claimRewards()"]();case 6:return s=e.sent,e.next=9,s.wait(1);case 9:return i=e.sent,e.abrupt("return",{txDetails:i,toastMsg:r,toastTitle:t});case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return{data:c,handleClaim:b,handleWithdraw:g,handleDepositOrApprove:h,refreshData:f}},B=t(86541),L=t(60298),M=t(36310),z=t(85087),J=t(61509),K=t(23023),X=t(59876),U=t(27659),q=t(9849),G=function(e){var n=e.tokenName,t=e.tokenDisplay,a=e.pendingRewards,i=e.allowance,c=e.myStaked,l=e.userBalance,u=e.apr,p=e.tvl,d=e.currentEpoch,f=e.nextEpochReopenDate,x=(e.reopenClosedDate,e.handleDepositOrApproveWithSigner),h=e.handleWithdrawWithSigner,w=e.handleClaimRewardsWithPanel,v=e.windowOpen,g=n.split("-"),b=g[0],m=g[1],j=(0,s.useState)(!1),y=j[0],S=j[1];return(0,r.jsxs)(o.rj,{w:"100%",bgColor:"#121511",borderRadius:"16px",border:"1px solid rgba(96, 97, 96, 0.1);",children:[(0,r.jsxs)(o.kC,{"test-id":"card-header",w:"100%",gap:{base:6,lg:4},borderBottom:"1px solid rgba(250, 250, 250, 0.05)",padding:"32px 32px 24px",flexDirection:{base:"column",lg:"row"},justifyContent:"space-between",children:[(0,r.jsxs)(o.kC,{"test-id":"leftContent",gap:"16px",flexDirection:{base:"column",lg:"row"},alignItems:{lg:"center"},children:[(0,r.jsxs)(o.xv,{variant:"boxHeading",children:["Epoch ",d]}),!0===v?(0,r.jsx)(K.$Q,{title:"STAKING WINDOW OPENED",shouldResponsive:!1}):(0,r.jsx)(K.K2,{title:"STAKING WINDOW CLOSED",shouldResponsive:!1}),!0===v?(0,r.jsx)(q.X,{date:new Date("2023/02/06 00:00:00 UTC")}):(0,r.jsxs)(o.xv,{variant:"boxSubHeading",opacity:.5,children:["Approx. re-open: ",f]})]}),(0,r.jsxs)(o.gC,{"test-id":"rightContent",gap:1,alignItems:["flex-start","center"],children:[(0,r.jsxs)(o.kC,{alignItems:"center",children:[(0,r.jsxs)(o.xv,{variant:"colorDescription",backgroundClip:"text",children:[(0,U.u_)(u)," \xa0"]}),(0,r.jsx)(o.xv,{variant:"boxHeading",children:"EST. APR"}),(0,r.jsx)(B.u,{isOpen:y,hasArrow:!0,fontSize:"12px",placement:"top",alignSelf:"center",backgroundColor:"rgba(27, 30, 26, 1)",py:5,w:"260px",borderRadius:"12px",boxShadow:"0px 4px 20px rgba(0, 0, 0, 0.25);",label:(0,r.jsxs)(o.gC,{alignItems:"flex-start",w:"100%",gap:2,children:[(0,r.jsx)(o.xv,{variant:"boxSubHeading",children:"The displayed APR is indicative only and calculated based on the previous epochs."}),(0,r.jsx)(o.xv,{variant:"boxSubHeading",children:"The current epoch APR will not be able to calculate until it ends."})]}),children:(0,r.jsx)(o.kC,{ml:{base:3,lg:1},children:(0,r.jsx)(X.hQ,{onClick:function(){return S(!0)},onMouseEnter:function(){return S(!0)},onMouseLeave:function(){return S(!1)}})})})]}),(0,r.jsxs)(o.kC,{gap:2,children:[(0,r.jsx)(o.xv,{children:(0,U.J$)(p)}),(0,r.jsx)(o.xv,{variant:"boxHeading",children:"TVL"})]})]})]}),(0,r.jsx)(o.kC,{"test-id":"card-body",w:"100%",children:(0,r.jsxs)(L.mQ,{w:"100%",children:[(0,r.jsxs)(L.td,{borderColor:"transparent",pt:6,pb:4,px:8,children:[(0,r.jsx)(L.OK,{fontWeight:"700",px:[3,12],_selected:{borderColor:"brand.dark.primary",boxShadow:"none"},fontSize:"16px",children:"Deposit"}),(0,r.jsx)(L.OK,{fontWeight:"700",px:[3,12],_selected:{borderColor:"brand.dark.primary",boxShadow:"none"},fontSize:"16px",children:"Withdraw"}),(0,r.jsx)(L.OK,{fontWeight:"700",px:[3,12],_selected:{borderColor:"brand.dark.primary",boxShadow:"none"},fontSize:"16px",children:"Claim"})]}),(0,r.jsxs)(L.nP,{children:[(0,r.jsx)(L.x4,{px:8,paddingBottom:9,children:(0,r.jsx)(M.O,{tokenName:n,token0:b,token1:m,userBalance:l,tokenDisplay:t,allowance:i,handleDepositOrApproveWithSigner:x,renderSubHeader:function(e){return(0,r.jsxs)(o.kC,{pt:4,pb:6,justifyContent:"center",flexDirection:"column",gap:4,children:[(0,r.jsxs)(o.xv,{variant:"boxSubHeading",fontSize:"16px",children:["Stake your ",e," in the epoch system to earn rewards"]}),(0,r.jsxs)(o.xv,{variant:"boxSubHeading",fontSize:"12px",lineHeight:"18px",children:["Please read about"," ",(0,r.jsxs)(o.rU,{href:"https://plutusdao-1.gitbook.io/plutus-docs/tokenomics/pls",isExternal:!0,children:[(0,r.jsx)("u",{children:"the epoch system and future tokenomics plans. "})," ",(0,r.jsx)(X.h0,{})]})]})]})},renderFooter:function(){return null}})}),(0,r.jsx)(L.x4,{px:8,paddingBottom:9,children:(0,r.jsx)(z.p,{tokenName:n,token0:b,token1:m,tokenDisplay:t,myStaked:c,handleWithdrawWithSigner:h,needInput:!1,renderFooter:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.kC,{w:"100%",children:[(0,r.jsx)(o.xv,{children:"You have staked: "}),(0,r.jsx)(o.LZ,{}),(0,r.jsxs)(o.xv,{children:[(0,U.w1)(c)," "," ",t(n)]})]}),(0,r.jsxs)(o.kC,{w:"100%",children:[(0,r.jsx)(o.xv,{children:"You will be withdrawing: "}),(0,r.jsx)(o.LZ,{}),(0,r.jsxs)(o.xv,{children:[(0,U.w1)(c)," "," ",t(n)]})]})]})}})}),(0,r.jsx)(L.x4,{px:8,paddingBottom:9,children:(0,r.jsx)(J.E,{pendingRewards:a,handleClaimRewardsWithPanel:w})})]})]})})]})},F=t(28609),Q=t(41664),V=t.n(Q),Y=t(11510);function Z(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ee(e,n,t,r,a,o,s){try{var i=e[o](s),c=i.value}catch(l){return void t(l)}i.done?n(c):Promise.resolve(c).then(r,a)}function ne(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function s(e){ee(o,r,a,s,i,"next",e)}function i(e){ee(o,r,a,s,i,"throw",e)}s(void 0)}))}}function te(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],s=!0,i=!1;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);s=!0);}catch(c){i=!0,a=c}finally{try{s||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return Z(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Z(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var re=function(e){var n=e.tokenName,t=te((0,l.qD)(),1)[0],a=(0,h.G)().signerAddr,s=(0,F.pm)(),i=H("pls","PLS",a),c=i.data,u=c.apr,p=c.pendingRewards,d=c.tvl,f=c.allowance,w=c.balance,v=c.deposited,g=c.currentEpoch,b=c.nextEpochReopenDate,m=c.windowOpen,j=c.reopenClosedDate,y=i.handleDepositOrApprove,S=i.handleWithdraw,k=i.handleClaim,C=i.refreshData,O=function(e,n,t){s({title:n,description:(0,r.jsxs)(o.kC,{children:[t," PLS \xa0",(0,r.jsx)(V(),{href:"https://arbiscan.io/tx/".concat(e.transactionHash),passHref:!0,children:(0,r.jsx)(o.rU,{style:{textDecoration:"underline"},isExternal:!0,_hover:{underline:"none"},_focus:{boxShadow:"none"},children:"Arbiscan"})})]}),status:"success",position:"top",duration:9e3,isClosable:!0})},D=function(){var e=ne(x().mark((function e(n){var r,a,o,i,c,l,u;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(r=t.provider)){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,r.getSigner();case 6:return a=e.sent,e.next=9,y(n,a);case 9:o=e.sent,i=o.txDetails,c=o.toastTitle,l=o.toastMsg,O(i,c,l),e.next=21;break;case 16:e.prev=16,e.t0=e.catch(3),(u=(0,Y.S)(e.t0,"Deposit Token occurs error: ")).description.includes("!Open")&&(u.title="Staking Window Closed",u.description="Current epoch staking window is closed. To deposit/stake, please wait until next epoch re-opens on approx. ".concat(b)),s(u);case 21:return e.prev=21,e.next=24,C();case 24:return e.finish(21);case 25:case"end":return e.stop()}}),e,null,[[3,16,21,25]])})));return function(n){return e.apply(this,arguments)}}(),E=function(){var e=ne(x().mark((function e(){var n,r,a,o,i,c,l;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(n=t.provider)){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,n.getSigner();case 6:return r=e.sent,e.next=9,S(r);case 9:a=e.sent,o=a.txDetails,i=a.toastTitle,c=a.toastMsg,O(o,i,c),e.next=21;break;case 16:e.prev=16,e.t0=e.catch(3),(l=(0,Y.S)(e.t0,"Deposit Token occurs error: ")).description.includes("!Open")&&(l.title="Staking Window Closed",l.description="Current epoch staking window is closed. To withdraw, please wait until next epoch re-opens on approx. ".concat(b)),s(l);case 21:return e.prev=21,e.next=24,C();case 24:return e.finish(21);case 25:case"end":return e.stop()}}),e,null,[[3,16,21,25]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=ne(x().mark((function e(){var n,r,a,o,i,c,l;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(n=t.provider)){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,n.getSigner();case 6:return r=e.sent,e.next=9,k(r);case 9:a=e.sent,o=a.txDetails,i=a.toastTitle,c=a.toastMsg,O(o,i,c),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(3),l=(0,Y.S)(e.t0,"Claim Rewards has error: "),s(l);case 20:return e.prev=20,e.next=23,C();case 23:return e.finish(20);case 24:case"end":return e.stop()}}),e,null,[[3,16,20,24]])})));return function(){return e.apply(this,arguments)}}();return(0,r.jsx)(G,{tokenName:n,tokenDisplay:function(e){return e},userBalance:w,allowance:f,myStaked:v,apr:u,tvl:d,currentEpoch:g,nextEpochReopenDate:b,reopenClosedDate:j,pendingRewards:p,windowOpen:m,handleDepositOrApproveWithSigner:D,handleWithdrawWithSigner:E,handleClaimRewardsWithPanel:A})};function ae(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function oe(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],s=!0,i=!1;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);s=!0);}catch(c){i=!0,a=c}finally{try{s||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return ae(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ae(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var se=function(){var e=(0,a.ff)("#E0E4E0","#121511"),n=oe((0,l.qD)(),2),t=n[0],f=n[1];(0,s.useEffect)((function(){f.fetchForStakePage()}),[t.provider]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(d.A,{children:(0,r.jsxs)(o.gC,{maxW:"1480px",w:"100%",h:"calc(100%-76px)",pb:6,children:[(0,r.jsx)(o.kC,{justifyContent:"center",marginTop:{base:5,lg:20},children:(0,r.jsx)(o.xv,{fontSize:{base:"16px",lg:"2xl"},fontWeight:"bold",children:"STAKE"})}),(0,r.jsx)(o.kC,{pb:"1rem",w:"100%",justifyContent:"center",children:(0,r.jsx)(o.xv,{fontSize:"14px",textAlign:"center",children:"Stake or lock your tokens for maximum rewards."})}),(0,r.jsx)(c.S,{padding:"8px 16px"}),(0,r.jsxs)(o.gC,{pt:10,minW:{lg:"1100px",md:"900px",base:"95vw"},gap:10,children:[(0,r.jsx)(o.kC,{w:"100%",children:(0,r.jsxs)(i.m,{bgColor:e,w:"100%",borderRadius:"16px",border:"1px solid rgba(96, 97, 96, 0.1);",p:0,pt:8,pb:4,children:[(0,r.jsxs)(o.rj,{templateColumns:"repeat(17, 1fr)",fontWeight:"bold",w:"100%",py:2,px:8,pb:4,fontSize:"16px",borderBottom:"1px solid rgba(250, 250, 250, 0.05)",children:[(0,r.jsx)(o.P4,{colSpan:6,children:(0,r.jsx)(o.xv,{pl:[0,1],children:"ASSET"})}),(0,r.jsx)(o.P4,{colSpan:3,children:(0,r.jsx)(o.xv,{textAlign:"right",children:"APR"})}),(0,r.jsx)(o.P4,{colSpan:3,children:(0,r.jsx)(o.xv,{textAlign:"right",children:"My Stake"})}),(0,r.jsx)(o.P4,{colSpan:4,children:(0,r.jsx)(o.xv,{textAlign:"right",children:"TVL"})})]}),(0,r.jsxs)(o.Kq,{direction:{base:"column",lg:"column"},justifyContent:"center",spacing:0,children:[(0,r.jsx)(p.O,{farmId:"plsDpxV2",isExpanded:!0}),(0,r.jsx)(p.O,{farmId:"plsJones"}),(0,r.jsx)(p.O,{farmId:"plsSPA"}),(0,r.jsx)(u.G,{farmId:"dpx-plsDpx"}),(0,r.jsx)(u.G,{farmId:"jones-plsJones"}),(0,r.jsx)(u.G,{farmId:"plsSPA-SPA"}),(0,r.jsx)(u.G,{farmId:"pls-eth"}),(0,r.jsx)(p.O,{farmId:"plsDpxV1",isDeprecated:!0})]})]})}),(0,r.jsx)(o.kC,{w:"100%",children:(0,r.jsx)(re,{tokenName:"PLS"})})]})]})})})}}},function(e){e.O(0,[228,277,984,520,522,130,846,298,818,677,682,384,408,774,888,179],(function(){return n=87731,e(e.s=n);var n}));var n=e.O();_N_E=n}]);