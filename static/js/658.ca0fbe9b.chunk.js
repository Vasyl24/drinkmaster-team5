"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[658],{2860:function(n,A,e){e.d(A,{Z:function(){return U}});var i,t,r,o,a,d,p,c,x,s,h=e(9434),g=e(168),l=e(6487),m=l.ZP.li(i||(i=(0,g.Z)(["\n  width: 335px;\n  margin-left: auto;\n  margin-right: auto;\n\n  @media screen and (min-width: 768px) {\n    width: 342px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 400px;\n  }\n"]))),u=l.ZP.img(t||(t=(0,g.Z)(["\n  width: 335px;\n  height: 360px;\n  border-radius: 8px;\n  background: linear-gradient(\n      180deg,\n      rgba(10, 10, 17, 0.02) 51.18%,\n      rgba(10, 10, 17, 0.77) 97.66%\n    ),\n    url(<path-to-image>), lightgray 50% / cover no-repeat;\n\n  @media screen and (min-width: 768px) {\n    width: 342px;\n    height: 360px;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 400px;\n    height: 400px;\n  }\n"]))),f=l.ZP.div(r||(r=(0,g.Z)(["\n  display: flex;\n  margin-top: 18px;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 24px;\n  }\n"]))),w=l.ZP.h2(o||(o=(0,g.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.33;\n  margin-top: 18px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 24px;\n    margin-top: 24px;\n  }\n"]))),v=l.ZP.h3(a||(a=(0,g.Z)(["\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.28;\n  margin-top: 4px;\n  color: var(--text-btn-color);\n  opacity: 0.5;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    line-height: 1.13;\n  }\n"]))),B=l.ZP.p(d||(d=(0,g.Z)(["\n  height: 74px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.28;\n  margin-top: 18px;\n\n  @media screen and (min-width: 768px) {\n    height: 110px;\n    font-size: 16px;\n    line-height: 1.38;\n    margin-top: 24px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    height: 90px;\n  }\n"]))),Q=e(4315),E=l.zo.button(p||(p=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 46px;\n  height: 46px;\n  border-radius: 40px;\n  border: none;\n  background-color: var(--accent-color);\n  transition: background-color 0.3s ease;\n  margin-left: 8px;\n\n  @media (min-width: 768px) {\n    width: 54px;\n    height: 54px;\n  }\n\n  &:hover,\n  &:active {\n    background-color: var(--text-btn-color);\n  }\n\n  &:hover svg,\n  &:active svg {\n    stroke: var(--accent-color);\n    fill: var(--text-btn-color);\n  }\n"]))),b=l.zo.svg(c||(c=(0,g.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: var(--text-btn-color);\n  fill: var(--accent-color);\n"]))),j=e(5561),Z=e(3329),k=function(n){var A=n.onDelete,e=n.id;return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(E,{onClick:function(){return A(e)},children:(0,Z.jsx)(b,{children:(0,Z.jsx)("use",{href:j.Z+"#icon-trash"})})})})},I=e(1087),C=(0,l.zo)(I.OL)(x||(x=(0,g.Z)(["\n  border-radius: 42px;\n  background-color: var(--accent-color);\n  color: var(--text-btn-color);\n  font-size: 14px;\n  font-weight: 600;\n  line-height: calc(18 / 14);\n  text-align: center;\n  padding: 14px 40px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n  border: 1px solid transparent;\n  transition: background-color 400ms ease, border-color 400ms ease,\n    color 400ms ease;\n\n  &:hover {\n    background-color: var(--text-btn-color);\n    color: var(--accent-color);\n  }\n\n  @media (min-width: 768px) {\n    padding: 18px 44px;\n    font-size: 16px;\n    line-height: calc(18 / 16);\n  }\n"]))),D=function(n){var A=n.id;return(0,Z.jsx)(C,{to:"/drinks/".concat(A),children:"See more"})},P=function(n){var A=n.drink,e=A._id,i=A.drink,t=A.alcoholic,r=A.description,o=A.drinkThumb,a=n.onDelete;return(0,Z.jsxs)(m,{children:[(0,Z.jsx)(u,{src:o||Q,alt:i}),(0,Z.jsx)(w,{children:i}),(0,Z.jsx)(v,{children:t}),(0,Z.jsx)(B,{children:r}),(0,Z.jsxs)(f,{children:[(0,Z.jsx)(D,{id:e}),(0,Z.jsx)(k,{type:"button",onDelete:a,id:e})]})]},e)},M=l.ZP.ul(s||(s=(0,g.Z)(["\n  display: grid;\n  grid-row-gap: 40px;\n  list-style: none;\n  margin-top: 40px;\n\n  @media screen and (min-width: 768px) {\n    grid-template-columns: repeat(2, 1fr);\n    grid-column-gap: 20px;\n    grid-row-gap: 80px;\n    margin-top: 60px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    grid-template-columns: repeat(3, 1fr);\n    margin-top: 62px;\n  }\n"]))),z=e(9067),U=function(n){var A=(0,h.v9)(z.ms);console.log(A);var e=n.handleDel;return(0,Z.jsx)(M,{children:A.map((function(n){return(0,Z.jsx)(P,{drink:n,onDelete:e})}))})}},3757:function(n,A,e){e.d(A,{V:function(){return a}});var i,t=e(168),r=e(6487).ZP.h1(i||(i=(0,t.Z)(["\n  margin-bottom: 8px;\n  font-size: 32px;\n  font-weight: 600;\n  line-height: 1.2;\n  @media screen and (min-width: 768px) {\n    font-size: 56px;\n    line-height: 1.1;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 715px;\n    font-size: 64px;\n  }\n"]))),o=e(3329);function a(n){var A=n.title;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(r,{children:A})})}},9658:function(n,A,e){e.r(A),e.d(A,{default:function(){return Q}});var i,t,r,o,a=e(2860),d=e(9434),p=e(2791),c=e(7189),x=e(9067),s=e(168),h=e(6487),g=h.ZP.div(i||(i=(0,s.Z)(["\n  width: 100%;\n  margin: 0;\n  padding-top: 80px;\n  padding-bottom: 80px;\n\n  @media screen and (min-width: 768px) {\n    padding-top: 140px;\n    padding-bottom: 140px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    padding-top: 158px;\n    padding-bottom: 140px;\n  }\n"]))),l=h.ZP.div(t||(t=(0,s.Z)(["\n  margin: 0 auto;\n  padding-top: 91px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n\n  @media screen and (min-width: 768px) {\n    padding-top: 100px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    padding-top: 67px;\n  }\n"]))),m=h.ZP.img(r||(r=(0,s.Z)(["\n  width: 198px;\n  height: 247px;\n\n  @media screen and (min-width: 768px) {\n    width: 261px;\n    height: 326px;\n  }\n"]))),u=h.ZP.p(o||(o=(0,s.Z)(["\n  width: 205px;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.28;\n  margin-top: 32px;\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    width: 236px;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 1.38;\n  }\n"]))),f=e(9085),w=e(1752),v=e(3757),B=e(3329),Q=function(){var n=(0,d.I0)(),A=(0,d.v9)(x.ms),e=(0,d.v9)(x.zh);(0,p.useEffect)((function(){n((0,c.or)())}),[n]);return(0,B.jsxs)(g,{children:[(0,B.jsx)(v.V,{title:"Favorites"}),e&&function(){return f.Am.error("Something went wrong please try later.",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})},0!==A.length?(0,B.jsx)(a.Z,{handleDel:function(A){n((0,c.md)(A))}}):(0,B.jsxs)(l,{children:[(0,B.jsx)(m,{src:"".concat(w),alt:"blue-iced-tea"}),(0,B.jsx)(u,{children:"You haven't added any favorite cocktails yet"})]})]})}},9067:function(n,A,e){e.d(A,{ms:function(){return i},zh:function(){return t}});var i=function(n){return n.drinks.items},t=function(n){return n.drinks.error}},1752:function(n,A,e){n.exports=e.p+"static/media/blue-iced-tea.1c7629b2a72364b7bf50.png"},4315:function(n){n.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIANwA3AMBIgACEQEDEQH/xAAcAAEBAAMBAQEBAAAAAAAAAAAAAwECBAcFBgj/2gAIAQEAAAAA9N/HAAAAV938DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABm+ZyFspagADp0b8+C8AAAOjTORs1zzgABbaVptL6bR1AABTOlY5pjEwAABRvPeIAAALaV5wAAAHVzYAAAAWiAAAAWiAAAAWiAAABTbOMSAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsgAAAH2fY/AwAAAPr/ANe//8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/2gAIAQIQAAAA9tABnQAAAAAAAipQCBQAhQASgAAAAAAAAAAADOgAc//EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAIAQMQAAAA4gAWAAAAAAAAAAAAAAAAAAAAAAAAAAAAsABr/8QAMBAAAgECAwYDCAMBAAAAAAAAAQIDABEEEjEFEyFAQVEGIzIiM1JhYnGRoQcgcCT/2gAIAQEAAT8A8XeLdoeI9o4n/pkXZySMuHgVrIEB4FgNWPNQzzYaVZsPM8Uqm6vGxVgfkRXhf+VooNlJB4gZ5sZG7KJerp0LfP8A00AsQBrQjjUgO12PQUwgDFCCKeLKMynMvf8ArCAC0h0UVvlPqjBryG+JacKD7LXHIxZUUu3U2FOhXzFbML60Sskl72B71vlByhfLtaja5tp/R/YjVOp4nlMrPCgUXIY08eQC7C/aokRyVYm/SiIASDnryO7V5Hdq8ju1IsLNwzd+NO0LsWJavI+qpEjRQRe50B5KJwt1Y2BpYmEovxGt6ZruWHeiN8uYesaitxJ2rcSdqZGQ2ao0bdMVHFq3Enalj3d3k6aCmYuSx5NZXTQ8KaVnFiBSsUIIqQXG8Qmx1HY1c96UFmA71M3tBV0UWqNSxuTZRqakfOfpGg5eN8h+k6ipEyEEG6nQ1FZQ8h6DhSqXa1SMLCNPSP2eZjcWMb+k/qmRlbJbj0piIlyKfaPqPNq53RbUrwBo3JJ5tfcSfcc4vuJPuOcX3En3HNJIUvYA/cVv2+FfxW/f4V/Fb9vhX8U0rMCLL/mk0MmHmmgmUrJE7I69mU2I5vZ3h/a21YHxGAwkksSuULKpIDAA24D51/KfhjZMcMniGBHjxcsuWQI3lucvqI781sLAQ7U2phMFOzrHK1mKEBv2DWx9j4HYuAh2fs+LdYaO5AvcsTqxPUmv/8QAGxEAAgMAAwAAAAAAAAAAAAAAAQIREjAAMXD/2gAIAQIBAT8AAAEDVlDd+UqbCdXekc//xAAYEQEAAwEAAAAAAAAAAAAAAAABABEwcP/aAAgBAwEBPwDUa5Slahc//9k="}}]);
//# sourceMappingURL=658.ca0fbe9b.chunk.js.map