import{u as N,a as g,j as e,G as u,b as m,i as x,c as O,d as k,e as v,r as A,E as F}from"./index-b772602b.js";const h=()=>N(),j=g;function b(l){const{fieldArg:t,keysArr:s}=l,c=h(),n=(t==null?void 0:t.type)||null,r=!!n&&"ofType"in n,a=()=>{const i=[...s,"args"];r&&i.push("ofType"),c(m(i))};return e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"fields__arg-name",children:t.name}),e.jsx("span",{className:"fields__devider",children:":"}),e.jsx("button",{className:"fields__arg-types schema-btn primary",type:"button",onClick:a,children:r?`${n.ofType.name}`:n==null?void 0:n.name}),n instanceof u&&e.jsx("span",{children:"!"}),!r&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:" = "}),e.jsx("span",{className:"fields__arg-default",children:"{}"})]})]})}function _(l){const{fieldObj:t,keysArr:s}=l,c=h(),n=t.type,r="name"in n,a="ofType"in n;let i=null;r?i=n:"ofType"in n.ofType?"ofType"in n.ofType.ofType?i=n.ofType.ofType.ofType:i=n.ofType.ofType:i=n.ofType;const o=i.name,p=()=>{const d=[...s,"type"];r||(d.push("ofType"),"ofType"in n.ofType&&(d.push("ofType"),"ofType"in n.ofType.ofType&&d.push("ofType"))),c(m(d))};return e.jsxs(e.Fragment,{children:[a&&e.jsx("span",{children:"ofType"in n.ofType&&"["}),e.jsx("button",{className:"fields__return schema-btn primary",type:"button",onClick:p,children:o}),!r&&e.jsx("span",{children:n.ofType.ofType instanceof u&&e.jsx("span",{children:"!"})}),a&&e.jsx("span",{children:"ofType"in n.ofType&&"]"})]})}function S(l){const{fieldName:t,fieldObj:s}=l,c=h(),n=s.type,r=(s==null?void 0:s.args)||[],a=r.length?r[0]:null,i=["_fields",t],o=()=>{c(m(i))};return e.jsxs("div",{className:"fields__item",children:[e.jsx("button",{className:"fields__name schema-btn secondary",type:"button",onClick:o,children:`${t}`}),a&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"left-indent",children:"("}),e.jsx(b,{fieldArg:a,keysArr:i}),e.jsx("span",{children:")"})]}),e.jsx("span",{className:"fields__devider",children:":"}),e.jsx(_,{fieldObj:s,keysArr:i}),n instanceof u&&e.jsx("span",{children:"!"})]})}function T(l){const{fieldObj:t}=l,s=(t==null?void 0:t.args)||[];return e.jsxs("div",{children:[e.jsx("p",{className:"schema-title",children:"Type:"}),e.jsx("div",{className:"left-indent",children:e.jsx(_,{fieldObj:t,keysArr:[]})}),!!s.length&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"schema-title",children:"Arguments:"}),s.map(c=>e.jsx("div",{className:"left-indent",children:e.jsx(b,{fieldArg:c,keysArr:[]})},c.name))]})]})}function y(l,t){let s=l;const c=[...t];if(!s)return s;const[n,...r]=c,[a,...i]=n;if(a[0]==="_"){if(a==="_queries"&&(s=s.getQueryType()||null),a==="_fields"){const o=s.getFields(),[p,...d]=i;s=o[p],d.length&&(s=y(s,[d]))}}else if(a==="args"){const{args:o}=s;let p=o[0].type;const[d]=i;d==="ofType"&&(p=p.ofType),s=p}else if(a==="type"){let o=s.type;i.every(d=>d==="ofType")&&i.forEach(()=>{o=o.ofType}),s=o}return r.length&&(s=y(s,r)),s}function C(l){const{schema:t}=l,{nestedObjsArr:s}=j(o=>o.workspace),c=y(t,s);if(!c)return e.jsx("div",{});if(x(c))return e.jsx("div",{children:c.description});if("args"in c)return e.jsx(T,{fieldObj:c});if("getFields"in c){const o=c.getFields(),p=Object.entries(o);return e.jsxs("div",{className:"schema__fields fields",children:[e.jsx("p",{className:"fields__title schema-title",children:"Fields"}),e.jsx("div",{className:"fields__block",children:(p??[]).map(([d,f])=>e.jsx(S,{fieldName:d,fieldObj:f},d))})]})}if(O(c))return e.jsx("div",{});const n=c.type,r=k(n),a=x(n),i=v(n);return r||a||i?e.jsx(T,{fieldObj:c}):e.jsx("div",{})}function R(l){const{schema:t}=l,s=h(),{nestedObjsArr:c}=j(i=>i.workspace),n=y(t,c),r=n==null?void 0:n.name,a=()=>{s(A())};return e.jsxs("button",{type:"button",onClick:a,className:"schema__back-btn",children:[e.jsx("span",{className:"schema__back-btn-arrow",children:"❮"}),r]})}function q(l){const{schema:t}=l,{nestedObjsArr:s}=j(i=>i.workspace),c=t.getQueryType(),n=h(),r=i=>{n(m(i))},a=()=>{r(["_queries"])};return e.jsx(F,{children:e.jsxs("div",{className:"schema__container",children:[s.length?e.jsx(R,{schema:t}):e.jsx("h4",{className:"schema__docs-title",children:"Docs"}),c&&!s.length&&e.jsxs("div",{className:"schema__query left-indent",children:[e.jsx("span",{className:"schema__query-title",children:"query"}),e.jsx("span",{className:"fields__devider",children:":"}),e.jsx("button",{className:"schema-btn primary",type:"button",onClick:a,children:"Query"})]}),!!s.length&&t&&e.jsx(C,{schema:t})]})})}function Q(l){const{schema:t,maxHeight:s}=l;return e.jsx("div",{className:"schema",style:{maxHeight:s},children:t?e.jsx(q,{schema:t}):e.jsx("div",{className:"schema__container",children:"Schema not received"})})}export{Q as default};
