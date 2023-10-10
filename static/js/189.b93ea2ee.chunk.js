"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[189],{3757:function(n,e,t){t.d(e,{V:function(){return A}});var r,i=t(168),a=t(6487).ZP.h1(r||(r=(0,i.Z)(["\n  margin-bottom: 40px;\n  font-size: 32px;\n  font-weight: 600;\n  line-height: 1.2;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 60px;\n    font-size: 56px;\n    line-height: 1.1;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 715px;\n    font-size: 64px;\n  }\n"]))),o=t(3329);function A(n){var e=n.title;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a,{children:e})})}},2256:function(n,e,t){t.d(e,{Z:function(){return g}});var r,i,a,o,A=t(168),c=t(6487),s=t(1087),p=c.ZP.img(r||(r=(0,A.Z)(["\n  width: 335px;\n  height: 360px;\n  border-radius: 8px;\n  @media screen and (min-width: 768px) {\n    width: 342px;\n    height: 360px;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 400px;\n    height: 400px;\n  }\n"]))),u=c.ZP.div(i||(i=(0,A.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-top: 14px;\n"]))),l=c.ZP.p(a||(a=(0,A.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.13;\n\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n    line-height: 1.33;\n  }\n"]))),d=(0,c.ZP)(s.rU)(o||(o=(0,A.Z)(["\n  border: none;\n  background-color: inherit;\n  color: var(--text-color);\n  opacity: 0.5;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.28;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    line-height: 1.13;\n  }\n  &:hover,\n  &:focus {\n    transform: scale(1.1);\n  }\n"]))),h=t(4315),x=t(3329),g=function(n){var e=n.drinkItem,t=e._id,r=e.drink,i=e.drinkThumb||h,a=r.length>=25?r.slice(0,23)+"...":r;return(0,x.jsxs)("li",{children:[(0,x.jsx)(p,{src:i,alt:r}),(0,x.jsxs)(u,{children:[(0,x.jsx)(l,{children:a}),(0,x.jsx)(d,{to:"/drinks/".concat(t),children:"See more"})]})]},t)}},1009:function(n,e,t){t.d(e,{L:function(){return a}});var r=t(9439),i=t(2791);function a(){var n=(0,i.useState)(window.innerWidth),e=(0,r.Z)(n,2),t=e[0],a=e[1];return(0,i.useLayoutEffect)((function(){function n(){a(window.innerWidth)}return window.addEventListener("resize",n),n(),function(){return window.removeEventListener("resize",n)}}),[]),t}},3189:function(n,e,t){t.r(e),t.d(e,{DrinksPage:function(){return R},default:function(){return q}});var r,i,a,o,A=t(4165),c=t(5861),s=t(9439),p=t(2791),u=t(5218),l=t(168),d=t(6487),h=d.ZP.ul(r||(r=(0,l.Z)(["\n  margin-top: 40px;\n  margin-bottom: 40px;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n\n  & > *:not(:last-child) {\n    margin-bottom: 28px;\n  }\n\n  @media (min-width: 768px) {\n    margin-bottom: 80px;\n    & > *:not(:last-child) {\n      margin-bottom: 0;\n    }\n    & {\n      gap: 40px 20px;\n    }\n  }\n\n  @media screen and (min-width: 1440px) {\n    & {\n      gap: 80px 20px;\n    }\n    margin-bottom: 80px;\n  }\n"]))),x=t(2256),g=t(3329),f=function(n){var e=n.drinks;return(0,g.jsx)(h,{children:e.map((function(n){return(0,g.jsx)(x.Z,{drinkItem:n},n._id)}))})},m=t(4078),w=d.ZP.div(i||(i=(0,l.Z)(["\n  margin-top: 40px;\n  margin-bottom: 40px;\n  @media screen and (min-width: 768px) {\n    margin-top: 60px;\n    display: flex;\n    & > *:not(:last-child) {\n      margin-right: 8px;\n    }\n  }\n  @media screen and (min-width: 1440px) {\n    margin-top: 80px;\n  }\n\n  & > *:not(:last-child) {\n    margin-bottom: 14px;\n    @media screen and (min-width: 768px) {\n      margin-bottom: 0;\n    }\n  }\n"]))),b=d.ZP.input(a||(a=(0,l.Z)(["\n  color: var(--text-color);\n  font-size: 17px;\n  font-weight: 400;\n  line-height: 2.6;\n\n  width: 100%;\n  height: 54px;\n\n  border-radius: 200px;\n  border: 1px solid var(--text-color);\n  opacity: 0.8;\n  background-color: inherit;\n\n  padding: 14px 24px;\n\n  &::placeholder {\n    color: var(--text-color);\n    text-align: left;\n\n    font-size: 17px;\n\n    font-weight: 400;\n    line-height: 2.6;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 264px;\n    height: 56px;\n  }\n"]))),v=(0,d.ZP)(m.ZP)(o||(o=(0,l.Z)(["\n  .Select__control {\n    width: 100%;\n    height: 54px;\n    background-color: var(--image-wrapper-color);\n    border: none;\n    border-radius: 40px;\n    box-shadow: none;\n    cursor: pointer;\n    padding: 0 18px;\n    font-size: 17px;\n    color: var(--hover-txt-color);\n    font-weight: 400;\n    line-height: 2.6;\n\n    @media screen and (min-width: 768px) {\n      width: 199px;\n      height: 56px;\n    }\n  }\n\n  svg {\n    transform: rotate(0deg);\n    transition: transform 500ms cubic-bezier(0.46, 0.03, 0.52, 0.96);\n  }\n  .Select__placeholder {\n    color: var(--hover-txt-color);\n  }\n  .Select__control--menu-is-open {\n    svg {\n      transform: rotate(-180deg);\n    }\n  }\n\n  .Select__indicator-separator {\n    display: none;\n  }\n\n  .Select__menu {\n    background-color: var(--list-color);\n    border-radius: 20px;\n    padding-right: 8px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n  }\n  .Select__option {\n    color: var(--text-color);\n    opacity: 0.4;\n    background-color: transparent;\n  }\n  .Select__option:hover {\n    background-color: transparent;\n    opacity: 1;\n  }\n  .Select__single-value {\n    color: var(--hover-txt-color);\n  }\n\n  .Select__menu-list::-webkit-scrollbar {\n    width: 8px;\n    height: 300px;\n  }\n  .Select__menu-list::-webkit-scrollbar-track {\n    background: transparent;\n  }\n  .Select__menu-list::-webkit-scrollbar-thumb {\n    background: var(--scrollbar-thumb-color);\n    border-radius: 20px;\n    height: 110px;\n  }\n  /* .Select__menu-list::-webkit-scrollbar-thumb:hover {\n    background: #434d67;\n  } */\n"]))),Z=t(1243),k="https://mixmasters.onrender.com/api";function E(){return y.apply(this,arguments)}function y(){return(y=(0,c.Z)((0,A.Z)().mark((function n(){var e;return(0,A.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Z.Z.get("".concat(k,"/filters/categories"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Q(){return B.apply(this,arguments)}function B(){return(B=(0,c.Z)((0,A.Z)().mark((function n(){var e;return(0,A.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Z.Z.get("".concat(k,"/filters/ingredients"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function j(n){return S.apply(this,arguments)}function S(){return(S=(0,c.Z)((0,A.Z)().mark((function n(e){var t,r;return(0,A.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.params,n.next=3,Z.Z.get("".concat(k,"/drinks/search"),{params:t});case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var P,C,I,M=function(n){n.query;var e=n.setQuery,t=n.category,r=n.setCategory,i=n.ingredient,a=n.setIngredient,o=(0,p.useState)([]),l=(0,s.Z)(o,2),d=l[0],h=l[1],x=d.map((function(n){return{value:n,label:n}})),f=(0,p.useState)([]),m=(0,s.Z)(f,2),Z=m[0],k=m[1],y=Z.map((function(n){return{value:n.title,label:n.title}}));return(0,p.useEffect)((function(){function n(){return(n=(0,c.Z)((0,A.Z)().mark((function n(){var e;return(0,A.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E();case 3:e=n.sent,h(e),n.next=11;break;case 7:if(n.prev=7,n.t0=n.catch(0),!n.t0.code){n.next=11;break}return n.abrupt("return",u.ZP.error("Oops, something went wrong."));case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function e(){return(e=(0,c.Z)((0,A.Z)().mark((function n(){var e;return(0,A.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Q();case 3:e=n.sent,k(e),n.next=11;break;case 7:if(n.prev=7,n.t0=n.catch(0),!n.t0.code){n.next=11;break}return n.abrupt("return",u.ZP.error("Oops, something went wrong."));case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}(),function(){e.apply(this,arguments)}()}),[]),(0,g.jsx)("label",{htmlFor:"categorySelect",children:(0,g.jsxs)(w,{children:[(0,g.jsx)(b,{type:"text",placeholder:"Enter the text",name:"query",onChange:function(n){e(n.target.value)}}),(0,g.jsx)(v,{classNamePrefix:"Select",onChange:function(n){r(n?n.value:"")},placeholder:"All categories",name:"category",defaultValue:t,isClearable:!0,options:x}),(0,g.jsx)(v,{onChange:function(n){a(n?n.value:"")},classNamePrefix:"Select",name:"ingredient",placeholder:"Ingredients",defaultValue:i,isClearable:!0,options:y})]})})},_=t(3757),U=d.ZP.div(P||(P=(0,l.Z)(["\n  padding: 14px 0;\n  @media screen and (min-width: 768px) {\n    padding: 14px 24px;\n  }\n\n  ul {\n    list-style: none;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  li {\n  }\n\n  button {\n    width: 27px;\n    height: 27px;\n    border-radius: 50%;\n    color: var(--text-color);\n    transition: background-color 0.5s;\n    font-size: 12px;\n    font-weight: 500;\n    background-color: transparent;\n    border: none;\n    font-style: normal;\n    margin: 0 10px;\n  }\n\n  button.active {\n    color: var(--hover-txt-color);\n    background-color: var(--pagination-color);\n  }\n"]))),D=d.ZP.button(C||(C=(0,l.Z)(["\n  width: 27px;\n  height: 27px;\n  stroke: var(--text-color);\n  opacity: 0.7;\n  background-color: transparent;\n  border: none;\n  margin: 0 10px;\n"]))),V=t(5561),z=t(1009),F=function(n){var e=n.page,t=n.setPage,r=n.restPages,i=n.totalPages,a=(0,p.useState)(5),o=(0,s.Z)(a,2),A=o[0],c=o[1],u=(0,z.L)(),l=function(n){n>=1&&n<=r&&t(n)};(0,p.useEffect)((function(){u>0&&u<768&&5!==A?c(5):u>=768&&8!==A&&c(8)}),[u,A]);return(0,g.jsx)(U,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)(D,{type:"button",onClick:function(){return l(e-1)},disabled:1===e,children:(0,g.jsx)("svg",{style:{width:14,height:20,marginRight:30},children:(0,g.jsx)("use",{href:V.Z+"#icon-arrow-left"})})}),(0,g.jsx)("ul",{children:function(){var n=e>A?e-A+1:1,t=e<i?n+A:i+1;return console.log(n,t),Array.from({length:t-n},(function(e,t){return t+n}))}().map((function(n,t){return(0,g.jsx)("button",{onClick:function(){return l(n)},className:n===e?"active":"",children:(0,g.jsx)("li",{onClick:function(){return l(n)},children:n},t)},t)}))}),(0,g.jsx)(D,{type:"button",onClick:function(){return l(e+1)},disabled:e===i,children:(0,g.jsx)("svg",{style:{width:14,height:20},children:(0,g.jsx)("use",{href:V.Z+"#icon-arrow-right"})})})]})})},L=d.ZP.div(I||(I=(0,l.Z)(["\n  padding-bottom: 80px;\n  padding-top: 80px;\n\n  @media screen and (min-width: 768px) {\n    padding-bottom: 140px;\n    padding-top: 140px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    padding-top: 160px;\n  }\n"]))),R=function(){var n=(0,p.useState)(""),e=(0,s.Z)(n,2),t=e[0],r=e[1],i=(0,p.useState)(""),a=(0,s.Z)(i,2),o=a[0],l=a[1],d=(0,p.useState)(""),h=(0,s.Z)(d,2),x=h[0],m=h[1],w=(0,p.useState)(1),b=(0,s.Z)(w,2),v=b[0],Z=b[1],k=(0,p.useState)(10),E=(0,s.Z)(k,2),y=E[0],Q=E[1],B=(0,p.useState)(0),S=(0,s.Z)(B,2),P=S[0],C=S[1],I=(0,p.useState)(0),U=(0,s.Z)(I,2),D=U[0],V=U[1],R=(0,p.useState)([]),q=(0,s.Z)(R,2),H=q[0],Y=q[1],G=Math.ceil(P/y),J=(0,z.L)();return(0,p.useEffect)((function(){J>0&&J<1440&&10!==y?Q(10):J>=1440&&9!==y&&Q(9)}),[J,y]),(0,p.useEffect)((function(){function n(){return(n=(0,c.Z)((0,A.Z)().mark((function n(){var e;return(0,A.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,j({params:{q:t,category:o,ingredient:x,page:v,limit:y}});case 3:if((e=n.sent).result.length){n.next=6;break}return n.abrupt("return",u.ZP.error("Sorry, there are no drinks matching your search query. Please try again."));case 6:Y(e.result),C(e.count),V(e.restPages),n.next=15;break;case 11:if(n.prev=11,n.t0=n.catch(0),!n.t0.code){n.next=15;break}return n.abrupt("return",u.ZP.error("Oops, something went wrong."));case 15:case"end":return n.stop()}}),n,null,[[0,11]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t,o,x,v,y]),(0,g.jsxs)(L,{children:[(0,g.jsx)(_.V,{title:"Drinks"}),(0,g.jsx)(M,{query:t,setQuery:r,category:o,setCategory:l,ingredient:x,setIngredient:m}),(0,g.jsx)(f,{drinks:H}),G>1&&(0,g.jsx)(F,{page:v,setPage:Z,totalPages:G,restPages:D})]})},q=R},4315:function(n){n.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIANwA3AMBIgACEQEDEQH/xAAcAAEBAAMBAQEBAAAAAAAAAAAAAwECBAcFBgj/2gAIAQEAAAAA9N/HAAAAV938DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABm+ZyFspagADp0b8+C8AAAOjTORs1zzgABbaVptL6bR1AABTOlY5pjEwAABRvPeIAAALaV5wAAAHVzYAAAAWiAAAAWiAAAAWiAAABTbOMSAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsgAAAH2fY/AwAAAPr/ANe//8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/2gAIAQIQAAAA9tABnQAAAAAAAipQCBQAhQASgAAAAAAAAAAADOgAc//EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAIAQMQAAAA4gAWAAAAAAAAAAAAAAAAAAAAAAAAAAAAsABr/8QAMBAAAgECAwYDCAMBAAAAAAAAAQIDABEEEjEFEyFAQVEGIzIiM1JhYnGRoQcgcCT/2gAIAQEAAT8A8XeLdoeI9o4n/pkXZySMuHgVrIEB4FgNWPNQzzYaVZsPM8Uqm6vGxVgfkRXhf+VooNlJB4gZ5sZG7KJerp0LfP8A00AsQBrQjjUgO12PQUwgDFCCKeLKMynMvf8ArCAC0h0UVvlPqjBryG+JacKD7LXHIxZUUu3U2FOhXzFbML60Sskl72B71vlByhfLtaja5tp/R/YjVOp4nlMrPCgUXIY08eQC7C/aokRyVYm/SiIASDnryO7V5Hdq8ju1IsLNwzd+NO0LsWJavI+qpEjRQRe50B5KJwt1Y2BpYmEovxGt6ZruWHeiN8uYesaitxJ2rcSdqZGQ2ao0bdMVHFq3Enalj3d3k6aCmYuSx5NZXTQ8KaVnFiBSsUIIqQXG8Qmx1HY1c96UFmA71M3tBV0UWqNSxuTZRqakfOfpGg5eN8h+k6ipEyEEG6nQ1FZQ8h6DhSqXa1SMLCNPSP2eZjcWMb+k/qmRlbJbj0piIlyKfaPqPNq53RbUrwBo3JJ5tfcSfcc4vuJPuOcX3En3HNJIUvYA/cVv2+FfxW/f4V/Fb9vhX8U0rMCLL/mk0MmHmmgmUrJE7I69mU2I5vZ3h/a21YHxGAwkksSuULKpIDAA24D51/KfhjZMcMniGBHjxcsuWQI3lucvqI781sLAQ7U2phMFOzrHK1mKEBv2DWx9j4HYuAh2fs+LdYaO5AvcsTqxPUmv/8QAGxEAAgMAAwAAAAAAAAAAAAAAAQIREjAAMXD/2gAIAQIBAT8AAAEDVlDd+UqbCdXekc//xAAYEQEAAwEAAAAAAAAAAAAAAAABABEwcP/aAAgBAwEBPwDUa5Slahc//9k="}}]);
//# sourceMappingURL=189.b93ea2ee.chunk.js.map