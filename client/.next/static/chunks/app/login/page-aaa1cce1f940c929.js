(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[520,974],{2985:(e,s,t)=>{Promise.resolve().then(t.bind(t,2575))},2575:(e,s,t)=>{"use strict";t.d(s,{default:()=>n});var a=t(5155),r=t(2115),l=t(6046);let n=()=>{let[e,s]=(0,r.useState)(""),[t,n]=(0,r.useState)(""),[o,i]=(0,r.useState)(""),[u,d]=(0,r.useState)(!1),c=(0,l.useRouter)(),m=async s=>{if(s.preventDefault(),i(""),d(!0),!e||!t){i("Both email and password are required!"),d(!1);return}try{let s=await fetch("http://localhost:7005/api/user/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}),a=await s.json();s.ok?(localStorage.setItem("authToken",a.token),c.push("/dashboard")):i(a.message||"Invalid email or password")}catch(e){i("An error occurred, please try again later")}finally{d(!1)}};return(0,a.jsx)("div",{className:"flex items-center justify-center min-h-screen bg-gray-100",children:(0,a.jsxs)("div",{className:"bg-white p-8 rounded-lg shadow-lg max-w-sm w-full",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold text-center text-gray-800 mb-4",children:"Login"}),o&&(0,a.jsx)("div",{className:"bg-red-500 text-white p-2 rounded mb-4",children:o}),(0,a.jsxs)("form",{onSubmit:m,children:[(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"email",className:"block text-gray-700",children:"Email"}),(0,a.jsx)("input",{type:"email",id:"email",value:e,onChange:e=>s(e.target.value),className:"w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"password",className:"block text-gray-700",children:"Password"}),(0,a.jsx)("input",{type:"password",id:"password",value:t,onChange:e=>n(e.target.value),className:"w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),(0,a.jsx)("button",{type:"submit",disabled:u,className:"w-full py-3 mt-4 rounded-lg focus:outline-none ".concat(u?"bg-gray-400":"bg-blue-600 hover:bg-blue-700"," text-white"),children:u?"Logging in...":"Login"})]})]})})}},6046:(e,s,t)=>{"use strict";var a=t(6658);t.o(a,"useRouter")&&t.d(s,{useRouter:function(){return a.useRouter}})}},e=>{var s=s=>e(e.s=s);e.O(0,[441,517,358],()=>s(2985)),_N_E=e.O()}]);