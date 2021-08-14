var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r;import{s,m as c,E as l,u as d,a as p,b as u,R as m,A as b,Q as f,c as x,d as g}from"./vendor.3e441825.js";const y=s.main`
  padding: 48px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
`,h=s.h3`
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 24px;
`,w=s.input`
  box-sizing: border-box;
  width: 400px;
  margin-bottom: 14px;
  height: 40px;
  font-size: 18px;
  padding: 0 12px;
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid #fff;
  color: #fff;
  outline: none;

  ::placeholder {
    color: #bcbcbc;
  }
`,E=s.button`
  box-sizing: border-box;
  width: 400px;
  height: 40px;
  border-radius: 8px;
  outline: none;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
  font-size: 18px;
`,O=s.ul`
  width: 400px;
  margin-top: 24px;
  list-style: circle;
`,j=s(c.li)`
  color: #fff;
  font-size: 18px;
  margin-bottom: 18px;

  :last-child {
    margin-bottom: 0;
  }
`,v="https://jsonplaceholder.typicode.com/todos",z=async()=>{const e=await fetch(`${v}?_start=0&_limit=5`);return await e.json()},S=async e=>{const t=await fetch(v,{method:"POST",body:JSON.stringify(e)});return await t.json()},I={List:O,Item:j},P=()=>{const[e,s]=l.exports.useState(""),c=d(),f=p("todos",z),x=u(S,{onMutate:async e=>{s(""),await c.cancelQueries("todos");const l=c.getQueryData("todos"),d=(p=((e,t)=>{for(var o in t||(t={}))n.call(t,o)&&i(e,o,t[o]);if(r)for(var o of r(t))a.call(t,o)&&i(e,o,t[o]);return e})({},e),t(p,o({isTemporary:!0})));var p;return c.setQueryData("todos",(e=>[...e,d])),l},onError:(e,t,o)=>c.setQueryData("todos",o),onSuccess:(e,t,o)=>c.setQueryData("todos",[...o,t])});return m.createElement(y,null,m.createElement(h,null,"Yet Another Todo List"),m.createElement(w,{value:e,type:"text",placeholder:"Type todo",onChange:e=>{s(e.target.value)}}),m.createElement(E,{onClick:()=>{const t={id:Math.random(),userId:1,title:e,completed:!1};x.mutate(t)}},"Add"),m.createElement(I.List,null,m.createElement(b,{initial:!1},f.isLoading&&m.createElement(I.Item,null,"Loading..."),f.isSuccess&&f.data.map((e=>m.createElement(I.Item,{initial:{opacity:0,x:-10},animate:{opacity:e.isTemporary?.4:1,x:0},exit:{opacity:0,x:-10,transition:{duration:.2}},key:e.id},e.title))))))},Q=()=>m.createElement(P,null),k=new f({defaultOptions:{queries:{refetchOnWindowFocus:!1}}});x.render(m.createElement(m.StrictMode,null,m.createElement(g,{client:k},m.createElement(Q,null))),document.getElementById("root"));
