"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[200],{3757:function(n,e,t){t.d(e,{V:function(){return a}});var i,r=t(168),A=t(6487).ZP.h1(i||(i=(0,r.Z)(["\n  margin-bottom: 8px;\n  font-size: 32px;\n  font-weight: 600;\n  line-height: 1.2;\n  @media screen and (min-width: 768px) {\n    font-size: 56px;\n    line-height: 1.1;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 715px;\n    font-size: 64px;\n  }\n"]))),o=t(3329);function a(n){var e=n.title;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(A,{children:e})})}},2256:function(n,e,t){t.d(e,{Z:function(){return f}});var i,r,A,o,a=t(168),c=t(6487),d=t(1087),s=c.ZP.img(i||(i=(0,a.Z)(["\n  width: 335px;\n  height: 360px;\n  border-radius: 8px;\n  @media screen and (min-width: 768px) {\n    width: 342px;\n    height: 360px;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 400px;\n    height: 400px;\n  }\n"]))),l=c.ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-top: 14px;\n"]))),u=c.ZP.p(A||(A=(0,a.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.13;\n\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n    line-height: 1.33;\n  }\n"]))),p=(0,c.ZP)(d.rU)(o||(o=(0,a.Z)(["\n  border: none;\n  background-color: inherit;\n  opacity: 0.5;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.28;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    line-height: 1.13;\n  }\n"]))),g=t(4315),h=t(3329),f=function(n){var e=n.drinkItem,t=e._id,i=e.drink,r=e.drinkThumb||g,A=i.length>=25?i.slice(0,23)+"...":i;return(0,h.jsxs)("li",{children:[(0,h.jsx)(s,{src:r,alt:i}),(0,h.jsxs)(l,{children:[(0,h.jsx)(u,{children:A}),(0,h.jsx)(p,{to:"/drinks/".concat(t),children:"See more"})]})]},t)}},8200:function(n,e,t){t.r(e),t.d(e,{DrinksPage:function(){return z},default:function(){return N}});var i,r,A,o,a,c,d,s=t(9439),l=t(2791),u=t(168),p=t(6487),g=p.ZP.ul(i||(i=(0,u.Z)(["\n  margin-top: 40px;\n  margin-bottom: 40px;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n\n  & > *:not(:last-child) {\n    margin-bottom: 28px;\n  }\n\n  @media (min-width: 768px) {\n    margin-bottom: 80px;\n    & > *:not(:last-child) {\n      margin-bottom: 0;\n    }\n    & {\n      gap: 40px 20px;\n    }\n  }\n\n  @media screen and (min-width: 1440px) {\n    & {\n      gap: 80px 20px;\n    }\n    margin-bottom: 80px;\n  }\n"]))),h=t(2256),f=t(3329),x=function(n){var e=n.drinks;return(0,f.jsx)(g,{children:e.map((function(n){return(0,f.jsx)(h.Z,{drinkItem:n},n._id)}))})},m=t(3433),w=t(9434),b=t(4078),v=p.ZP.div(r||(r=(0,u.Z)(["\n  margin-top: 40px;\n  margin-bottom: 40px;\n  @media screen and (min-width: 768px) {\n    margin-top: 60px;\n    display: flex;\n    & > *:not(:last-child) {\n      margin-right: 8px;\n    }\n  }\n  @media screen and (min-width: 1440px) {\n    margin-top: 80px;\n  }\n\n  & > *:not(:last-child) {\n    margin-bottom: 14px;\n    @media screen and (min-width: 768px) {\n      margin-bottom: 0;\n    }\n  }\n"]))),E=p.ZP.input(A||(A=(0,u.Z)(["\n  color: #f3f3f3;\n  font-size: 17px;\n  font-weight: 400;\n  line-height: 2.6;\n\n  width: 100%;\n  height: 54px;\n\n  border-radius: 200px;\n  border: 1px solid rgba(243, 243, 243, 0.2);\n  opacity: 0.8;\n  background-color: inherit;\n\n  padding: 14px 24px;\n\n  &::placeholder {\n    color: #f3f3f3;\n    text-align: left;\n\n    font-size: 17px;\n\n    font-weight: 400;\n    line-height: 2.6;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 264px;\n    height: 56px;\n  }\n"]))),Q=(0,p.ZP)(b.ZP)(o||(o=(0,u.Z)(["\n  .Select__control {\n    width: 100%;\n    height: 54px;\n    background-color: #161f37;\n    border: none;\n    border-radius: 40px;\n    box-shadow: none;\n    cursor: pointer;\n    padding: 0 18px;\n    font-size: 17px;\n    color: #f3f3f3;\n\n    font-weight: 400;\n    line-height: 2.6;\n\n    @media screen and (min-width: 768px) {\n      width: 199px;\n      height: 56px;\n    }\n  }\n  svg {\n    transform: rotate(0deg);\n    transition: transform 500ms cubic-bezier(0.46, 0.03, 0.52, 0.96);\n  }\n  .Select__placeholder {\n    color: #f3f3f3;\n  }\n  .Select__control--menu-is-open {\n    svg {\n      transform: rotate(-180deg);\n    }\n  }\n\n  .Select__indicator-separator {\n    display: none;\n  }\n\n  .Select__menu {\n    background-color: #161f37;\n    border-radius: 20px;\n    padding-right: 8px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n  }\n  .Select__option {\n    color: rgba(243, 243, 243, 0.4);\n    background-color: transparent;\n  }\n  .Select__option:hover {\n    background-color: transparent;\n    color: rgba(243, 243, 243, 1);\n  }\n\n  .Select__menu-list::-webkit-scrollbar {\n    width: 8px;\n    height: 300px;\n  }\n  .Select__menu-list::-webkit-scrollbar-track {\n    background: transparent;\n  }\n  .Select__menu-list::-webkit-scrollbar-thumb {\n    background: #434d67;\n    border-radius: 20px;\n    height: 110px;\n  }\n  .Select__menu-list::-webkit-scrollbar-thumb:hover {\n    background: #434d67;\n  }\n"]))),k=t(1116),B=t(5174),j=function(){var n=(0,w.I0)(),e=(0,w.v9)(k.us),t=(0,w.v9)(k.jq),i=(0,w.v9)(k.sh),r=[{value:"",label:"All categories"}].concat((0,m.Z)(e.map((function(n){return{value:n,label:n}})))),A=[{value:"",label:"Ingredients"}].concat((0,m.Z)(t.map((function(n,e){return{key:e,value:n.title,label:n.title}}))));return(0,l.useEffect)((function(){n((0,B.getCategories)()),n((0,B.getIngredients)())}),[n]),(0,f.jsx)("label",{htmlFor:"categorySelect",children:(0,f.jsxs)(v,{children:[(0,f.jsx)(E,{type:"text",placeholder:"Enter the text",value:i,onChange:function(e){n((0,B.setSearchQuery)(e.target.value))}}),(0,f.jsx)(Q,{classNamePrefix:"Select",onChange:function(e){n((0,B.setSelectedCategory)(e.value))},placeholder:"All categories",options:r}),(0,f.jsx)(Q,{onChange:function(e){n((0,B.setSelectedIngredient)(e.value))},classNamePrefix:"Select",placeholder:"Ingredients",options:A})]})})},Z=t(3757),I=p.ZP.div(a||(a=(0,u.Z)(["\n  padding: 14px 0;\n  @media screen and (min-width: 768px) {\n    padding: 14px 24px;\n  }\n\n  ul {\n    list-style: none;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  li {\n  }\n\n  button {\n    width: 27px;\n    height: 27px;\n    border-radius: 50%;\n    color: #f3f3f3;\n    transition: background-color 0.5s;\n    font-size: 12px;\n    font-weight: 500;\n    background-color: transparent;\n    border: none;\n    font-style: normal;\n    margin: 0 10px;\n  }\n\n  button.active {\n    background-color: rgba(64, 112, 205, 0.5);\n  }\n"]))),S=p.ZP.button(c||(c=(0,u.Z)(["\n  width: 27px;\n  height: 27px;\n  fill: rgba(243, 243, 243, 0.3);\n  background-color: transparent;\n  border: none;\n  margin: 0 10px;\n"]))),C=t(5561),y=t(7189),M=function(n){for(var e=n.page,t=n.limit,i=n.count,r=n.pageNumbersToShow,A=(0,w.I0)(),o=Math.ceil(i/t),a=[],c=1;c<=o;c++)a.push(c);var d=function(n){n>=1&&n<=o&&A((0,y.vB)(n))};return(0,f.jsx)(I,{children:(0,f.jsxs)("ul",{children:[(0,f.jsx)(S,{type:"button",onClick:function(){return d(e-1)},disabled:1===e,children:(0,f.jsx)("svg",{style:{width:14,height:20,marginRight:30},children:(0,f.jsx)("use",{href:C.Z+"#icon-arrow-left"})})}),(0,f.jsx)("ul",{children:function(){var n=Math.floor(r/2),t=a.indexOf(e),i=Math.max(0,t-n),A=Math.min(a.length-1,i+r-1);return a.slice(i,A+1)}().map((function(n,t){return(0,f.jsx)("button",{onClick:function(){return d(n)},className:n===e?"active":"",children:(0,f.jsx)("li",{onClick:function(){return d(n)},children:n},t)},t)}))}),(0,f.jsx)(S,{type:"button",onClick:function(){return d(e+1)},disabled:e===o,children:(0,f.jsx)("svg",{style:{width:14,height:20},children:(0,f.jsx)("use",{href:C.Z+"#icon-arrow-right"})})})]})})},P=p.ZP.div(d||(d=(0,u.Z)(["\n  padding-bottom: 80px;\n  padding-top: 80px;\n\n  @media screen and (min-width: 768px) {\n    padding-bottom: 140px;\n    padding-top: 140px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    padding-top: 160px;\n  }\n"]))),U=t(9067),_=t(686),D=t(1087),z=function(){var n=(0,w.I0)(),e=(0,w.v9)(U.ms),t=(0,w.v9)(U.Zp),i=(0,w.v9)(U.vU),r=e.result,A=e.count,o=(0,w.v9)(k.sh),a=(0,w.v9)((function(n){return n.filters.selectedCategory})),c=(0,w.v9)((function(n){return n.filters.selectedIngredient})),d=(0,l.useState)([]),u=(0,s.Z)(d,2),p=u[0],g=u[1],h=(0,D.lr)(),m=(0,s.Z)(h,2),b=m[0],v=m[1];(0,l.useEffect)((function(){v({page:t,limit:i})}),[t,i,v]);var E=(0,l.useState)(8),Q=(0,s.Z)(E,2),B=Q[0],I=Q[1];return(0,l.useEffect)((function(){var e=function(){window.innerWidth<768?(n((0,y.SE)(10)),I(5)):window.innerWidth>=768&&window.innerWidth<1440?(n((0,y.SE)(10)),I(8)):window.innerWidth>=1440&&(n((0,y.SE)(9)),I(8))};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[n]),(0,l.useEffect)((function(){n((0,_.T_)(a)),n((0,_.pH)(c)),n((0,y.jf)({page:Number(b.get("page")),limit:Number(b.get("limit")),filters:{searchQuery:o,selectedCategory:a||null,selectedIngredient:c||null}}))}),[n,i,t,b,o,a,c]),(0,l.useEffect)((function(){if(r){var n=r.filter((function(n){return n.drink.toLowerCase().includes(o.toLowerCase())&&(!a||n.category===a)&&(!c||n.ingredients.some((function(n){return n.title.includes(c)})))}));g(n)}}),[r,e,o,a,c]),(0,f.jsxs)(P,{children:[(0,f.jsx)(Z.V,{title:"Drinks"}),(0,f.jsx)(j,{}),(0,f.jsx)(x,{drinks:p}),p.length>0&&(0,f.jsx)(M,{page:t,limit:i,count:A,pageNumbersToShow:B})]})},N=z},9067:function(n,e,t){t.d(e,{Zp:function(){return o},ms:function(){return i},vU:function(){return a},xU:function(){return r},zh:function(){return A}});var i=function(n){return n.drinks.items},r=function(n){return n.drinks.isLoading},A=function(n){return n.drinks.error},o=function(n){return n.drinks.page},a=function(n){return n.drinks.limit}},1116:function(n,e,t){t.d(e,{IQ:function(){return o},jq:function(){return A},sh:function(){return i},us:function(){return r}});var i=function(n){return n.filters.searchQuery},r=function(n){return n.filters.categories},A=function(n){return n.filters.ingredients},o=function(n){return n.filters.glasses}},4315:function(n){n.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIANwA3AMBIgACEQEDEQH/xAAcAAEBAAMBAQEBAAAAAAAAAAAAAwECBAcFBgj/2gAIAQEAAAAA9N/HAAAAV938DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABm+ZyFspagADp0b8+C8AAAOjTORs1zzgABbaVptL6bR1AABTOlY5pjEwAABRvPeIAAALaV5wAAAHVzYAAAAWiAAAAWiAAAAWiAAABTbOMSAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsgAAAH2fY/AwAAAPr/ANe//8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/2gAIAQIQAAAA9tABnQAAAAAAAipQCBQAhQASgAAAAAAAAAAADOgAc//EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAIAQMQAAAA4gAWAAAAAAAAAAAAAAAAAAAAAAAAAAAAsABr/8QAMBAAAgECAwYDCAMBAAAAAAAAAQIDABEEEjEFEyFAQVEGIzIiM1JhYnGRoQcgcCT/2gAIAQEAAT8A8XeLdoeI9o4n/pkXZySMuHgVrIEB4FgNWPNQzzYaVZsPM8Uqm6vGxVgfkRXhf+VooNlJB4gZ5sZG7KJerp0LfP8A00AsQBrQjjUgO12PQUwgDFCCKeLKMynMvf8ArCAC0h0UVvlPqjBryG+JacKD7LXHIxZUUu3U2FOhXzFbML60Sskl72B71vlByhfLtaja5tp/R/YjVOp4nlMrPCgUXIY08eQC7C/aokRyVYm/SiIASDnryO7V5Hdq8ju1IsLNwzd+NO0LsWJavI+qpEjRQRe50B5KJwt1Y2BpYmEovxGt6ZruWHeiN8uYesaitxJ2rcSdqZGQ2ao0bdMVHFq3Enalj3d3k6aCmYuSx5NZXTQ8KaVnFiBSsUIIqQXG8Qmx1HY1c96UFmA71M3tBV0UWqNSxuTZRqakfOfpGg5eN8h+k6ipEyEEG6nQ1FZQ8h6DhSqXa1SMLCNPSP2eZjcWMb+k/qmRlbJbj0piIlyKfaPqPNq53RbUrwBo3JJ5tfcSfcc4vuJPuOcX3En3HNJIUvYA/cVv2+FfxW/f4V/Fb9vhX8U0rMCLL/mk0MmHmmgmUrJE7I69mU2I5vZ3h/a21YHxGAwkksSuULKpIDAA24D51/KfhjZMcMniGBHjxcsuWQI3lucvqI781sLAQ7U2phMFOzrHK1mKEBv2DWx9j4HYuAh2fs+LdYaO5AvcsTqxPUmv/8QAGxEAAgMAAwAAAAAAAAAAAAAAAQIREjAAMXD/2gAIAQIBAT8AAAEDVlDd+UqbCdXekc//xAAYEQEAAwEAAAAAAAAAAAAAAAABABEwcP/aAAgBAwEBPwDUa5Slahc//9k="}}]);
//# sourceMappingURL=200.e29510e0.chunk.js.map