(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[977],{7862:(e,r,o)=>{Promise.resolve().then(o.bind(o,9510))},9510:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>L});var t=o(5155),n=o(2115),s=o(9552),a=o(8998),i=o(810),l=o(5417),c=o(4197),d=o(2282),x=o(8562),u=o(3463),h=o(2181),m=o(7157),g=o(7123),A=o(4577),b=o(4413),p=o(2611),f=o(5212),j=o(7365),v=o(5374);let k=(0,f.A)(),y=(0,A.A)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,r)=>r.root});function C(e){return(0,b.A)({props:e,name:"MuiStack",defaultTheme:k})}let E=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],F=({ownerState:e,theme:r})=>{let o={display:"flex",flexDirection:"column",...(0,j.NI)({theme:r},(0,j.kW)({values:e.direction,breakpoints:r.breakpoints.values}),e=>({flexDirection:e}))};if(e.spacing){let t=(0,v.LX)(r),n=Object.keys(r.breakpoints.values).reduce((r,o)=>(("object"==typeof e.spacing&&null!=e.spacing[o]||"object"==typeof e.direction&&null!=e.direction[o])&&(r[o]=!0),r),{}),s=(0,j.kW)({values:e.direction,base:n}),a=(0,j.kW)({values:e.spacing,base:n});"object"==typeof s&&Object.keys(s).forEach((e,r,o)=>{if(!s[e]){let t=r>0?s[o[r-1]]:"column";s[e]=t}}),o=(0,h.A)(o,(0,j.NI)({theme:r},a,(r,o)=>e.useFlexGap?{gap:(0,v._W)(t,r)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${E(o?s[o]:e.direction)}`]:(0,v._W)(t,r)}}))}return(0,j.iZ)(r.breakpoints,o)};var S=o(9142),R=o(314);let W=function(e={}){let{createStyledComponent:r=y,useThemeProps:o=C,componentName:s="MuiStack"}=e,a=()=>(0,g.A)({root:["root"]},e=>(0,m.Ay)(s,e),{}),i=r(F);return n.forwardRef(function(e,r){let s=o(e),{component:l="div",direction:c="column",spacing:d=0,divider:x,children:h,className:m,useFlexGap:g=!1,...A}=(0,p.A)(s),b=a();return(0,t.jsx)(i,{as:l,ownerState:{direction:c,spacing:d,useFlexGap:g},ref:r,className:(0,u.A)(b.root,m),...A,children:x?function(e,r){let o=n.Children.toArray(e).filter(Boolean);return o.reduce((e,t,s)=>(e.push(t),s<o.length-1&&e.push(n.cloneElement(r,{key:`separator-${s}`})),e),[])}(h,x):h})})}({createStyledComponent:(0,S.Ay)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,r)=>r.root}),useThemeProps:e=>(0,R.b)({props:e,name:"MuiStack"})});var w=o(894),M=o(4156),B=o(1953),z=o(2983);let I=(0,z.A)((0,t.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z"}),"Phone"),N=(0,z.A)((0,t.jsx)("path",{d:"m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5M15 19l-6-2.11V5l6 2.11z"}),"Map"),_=(0,z.A)((0,t.jsx)("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter");var O=o(5487),D=o(5355);let L=()=>{let[e,r]=(0,n.useState)({name:"",email:"",message:""}),o=o=>{let{name:t,value:n}=o.target;r({...e,[t]:n})};return(0,t.jsxs)(s.A,{maxWidth:"md",children:[(0,t.jsxs)(a.A,{sx:{textAlign:"center",mt:6,mb:6},children:[(0,t.jsx)(i.A,{variant:"h3",sx:{fontWeight:"bold",color:"#1A73E8",letterSpacing:"0.5px"},children:"Contact Us"}),(0,t.jsx)(i.A,{variant:"body1",sx:{color:"#444",mt:2},children:"We’d love to hear from you! Get in touch with us for inquiries, feedback, or more information."})]}),(0,t.jsxs)(a.A,{sx:{mb:6},children:[(0,t.jsx)(i.A,{variant:"h4",sx:{fontWeight:"500",mb:4,textAlign:"center",color:"#333"},children:"Send Us a Message"}),(0,t.jsx)("form",{onSubmit:r=>{r.preventDefault(),console.log(e)},children:(0,t.jsxs)(l.Ay,{container:!0,spacing:4,children:[(0,t.jsx)(l.Ay,{item:!0,xs:12,sm:6,children:(0,t.jsx)(c.A,{fullWidth:!0,label:"Full Name",variant:"outlined",name:"name",value:e.name,onChange:o,required:!0,sx:{"& .MuiOutlinedInput-root":{borderRadius:"6px"},"& label":{color:"#333"},"& .MuiInputBase-root":{backgroundColor:"#fafafa"}}})}),(0,t.jsx)(l.Ay,{item:!0,xs:12,sm:6,children:(0,t.jsx)(c.A,{fullWidth:!0,label:"Email Address",variant:"outlined",name:"email",value:e.email,onChange:o,required:!0,sx:{"& .MuiOutlinedInput-root":{borderRadius:"6px"},"& label":{color:"#333"},"& .MuiInputBase-root":{backgroundColor:"#fafafa"}}})}),(0,t.jsx)(l.Ay,{item:!0,xs:12,children:(0,t.jsx)(c.A,{fullWidth:!0,label:"Message",variant:"outlined",name:"message",value:e.message,onChange:o,multiline:!0,rows:4,required:!0,sx:{"& .MuiOutlinedInput-root":{borderRadius:"6px"},"& label":{color:"#333"},"& .MuiInputBase-root":{backgroundColor:"#fafafa"}}})}),(0,t.jsx)(l.Ay,{item:!0,xs:12,children:(0,t.jsx)(d.A,{type:"submit",variant:"contained",sx:{backgroundColor:"#1A73E8",color:"white",fontWeight:"bold",padding:"12px 24px","&:hover":{backgroundColor:"#0061A8"},borderRadius:"6px"},children:"Submit"})})]})})]}),(0,t.jsxs)(a.A,{sx:{mb:6},children:[(0,t.jsx)(i.A,{variant:"h4",sx:{fontWeight:"500",mb:4,textAlign:"center",color:"#333"},children:"Get In Touch"}),(0,t.jsxs)(l.Ay,{container:!0,spacing:4,sx:{display:"flex",alignItems:"stretch"},children:[(0,t.jsx)(l.Ay,{item:!0,xs:12,sm:4,children:(0,t.jsxs)(x.A,{sx:{padding:3,textAlign:"center",boxShadow:1,borderRadius:"8px",height:"100%",backgroundColor:"#E0F7FA","&:hover":{transform:"scale(1.05)",transition:"transform 0.3s"}},children:[(0,t.jsx)(B.A,{sx:{fontSize:40,color:"#1A73E8"}}),(0,t.jsx)(i.A,{variant:"h6",sx:{fontWeight:"600",color:"#1A73E8"},children:"Email"}),(0,t.jsx)(i.A,{variant:"body1",sx:{color:"#555",mt:2},children:"fulkokango@gmail.com"})]})}),(0,t.jsx)(l.Ay,{item:!0,xs:12,sm:4,children:(0,t.jsxs)(x.A,{sx:{padding:3,textAlign:"center",boxShadow:1,borderRadius:"8px",height:"100%",backgroundColor:"#FFEBEE","&:hover":{transform:"scale(1.05)",transition:"transform 0.3s"}},children:[(0,t.jsx)(I,{sx:{fontSize:40,color:"#1A73E8"}}),(0,t.jsx)(i.A,{variant:"h6",sx:{fontWeight:"600",color:"#1A73E8"},children:"Phone"}),(0,t.jsx)(i.A,{variant:"body1",sx:{color:"#555",mt:2},children:"+123-456-7890"})]})}),(0,t.jsx)(l.Ay,{item:!0,xs:12,sm:4,children:(0,t.jsxs)(x.A,{sx:{padding:3,textAlign:"center",boxShadow:1,borderRadius:"8px",height:"100%",backgroundColor:"#FFF3E0","&:hover":{transform:"scale(1.05)",transition:"transform 0.3s"}},children:[(0,t.jsx)(N,{sx:{fontSize:40,color:"#1A73E8"}}),(0,t.jsx)(i.A,{variant:"h6",sx:{fontWeight:"600",color:"#1A73E8"},children:"Address"}),(0,t.jsx)(i.A,{variant:"body1",sx:{color:"#555",mt:2},children:"Balbhadrapur, Navtol, Laheriasarai, Darbhanga, Bihar-846001"})]})})]})]}),(0,t.jsxs)(a.A,{sx:{mb:6,textAlign:"center",backgroundColor:"#F5F5F5",padding:4,borderRadius:"8px"},children:[(0,t.jsx)(i.A,{variant:"h5",sx:{fontWeight:"600",color:"#333",mb:4},children:"Stay Connected"}),(0,t.jsx)(i.A,{variant:"body1",sx:{color:"#777",mb:4},children:"Follow us on social media to stay updated with the latest news and updates."}),(0,t.jsxs)(W,{direction:"row",spacing:4,justifyContent:"center",children:[(0,t.jsx)(w.A,{color:"primary",sx:{backgroundColor:"#E1F5FE",borderRadius:"50%",padding:"12px","&:hover":{backgroundColor:"#B3E5FC",transform:"scale(1.05)",transition:"transform 0.2s ease"}},children:(0,t.jsx)(B.A,{fontSize:"large",sx:{color:"#4267B2"}})}),(0,t.jsx)(w.A,{color:"primary",sx:{backgroundColor:"#E1F5FE",borderRadius:"50%",padding:"12px","&:hover":{backgroundColor:"#B3E5FC",transform:"scale(1.05)",transition:"transform 0.2s ease"}},children:(0,t.jsx)(_,{fontSize:"large",sx:{color:"#1DA1F2"}})}),(0,t.jsx)(w.A,{color:"primary",sx:{backgroundColor:"#E1F5FE",borderRadius:"50%",padding:"12px","&:hover":{backgroundColor:"#B3E5FC",transform:"scale(1.05)",transition:"transform 0.2s ease"}},children:(0,t.jsx)(O.A,{fontSize:"large",sx:{color:"#0077B5"}})}),(0,t.jsx)(w.A,{color:"primary",sx:{backgroundColor:"#E1F5FE",borderRadius:"50%",padding:"12px","&:hover":{backgroundColor:"#B3E5FC",transform:"scale(1.05)",transition:"transform 0.2s ease"}},children:(0,t.jsx)(D.A,{fontSize:"large",sx:{color:"#C13584"}})})]})]}),(0,t.jsx)(M.A,{sx:{mb:6}})]})}}},e=>{var r=r=>e(e.s=r);e.O(0,[617,814,417,282,918,441,517,358],()=>r(7862)),_N_E=e.O()}]);