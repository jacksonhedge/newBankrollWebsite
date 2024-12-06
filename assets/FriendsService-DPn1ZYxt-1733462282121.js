import{d as p,A as i,D as s,E as d,F as h,k as f,G as l}from"./index-BRL3oD8D-1733462282121.js";class w{constructor(){this.db=p}async sendFriendRequest(t,e){try{const r=await i(s(this.db,"users",t)),n=await i(s(this.db,"users",e));if(!r.exists()||!n.exists())throw new Error("User not found");const o=r.data(),a=n.data();return await d(s(this.db,"users",e),{pendingFriendRequests:h(t)}),await f.sendNotification(e,{type:"FRIEND_REQUEST",title:"New Friend Request",body:`${o.displayName||"A user"} sent you a friend request`,data:{senderUid:t,senderName:o.displayName||"A user",senderProfilePic:o.photoURL||""}}),!0}catch(r){throw console.error("Error sending friend request:",r),r}}async acceptFriendRequest(t,e){try{const r=await i(s(this.db,"users",t)),n=await i(s(this.db,"users",e));if(!r.exists()||!n.exists())throw new Error("User not found");const o=r.data(),a=n.data();return await d(s(this.db,"users",t),{pendingFriendRequests:l(e),friends:h(e)}),await d(s(this.db,"users",e),{friends:h(t)}),await f.sendNotification(e,{type:"FRIEND_REQUEST_ACCEPTED",title:"Friend Request Accepted",body:`${o.displayName||"A user"} accepted your friend request`,data:{accepterUid:t,accepterName:o.displayName||"A user",accepterProfilePic:o.photoURL||""}}),!0}catch(r){throw console.error("Error accepting friend request:",r),r}}async rejectFriendRequest(t,e){try{return await d(s(this.db,"users",t),{pendingFriendRequests:l(e)}),!0}catch(r){throw console.error("Error rejecting friend request:",r),r}}async removeFriend(t,e){try{return await d(s(this.db,"users",t),{friends:l(e)}),await d(s(this.db,"users",e),{friends:l(t)}),!0}catch(r){throw console.error("Error removing friend:",r),r}}async getFriendsList(t){try{const e=await i(s(this.db,"users",t));if(!e.exists())throw new Error("User not found");const n=e.data().friends||[];return(await Promise.all(n.map(async a=>{const u=await i(s(this.db,"users",a));if(u.exists()){const c=u.data();return{uid:a,displayName:c.displayName,photoURL:c.photoURL,email:c.email}}return null}))).filter(a=>a!==null)}catch(e){throw console.error("Error getting friends list:",e),e}}async getPendingRequests(t){try{const e=await i(s(this.db,"users",t));if(!e.exists())throw new Error("User not found");const n=e.data().pendingFriendRequests||[];return(await Promise.all(n.map(async a=>{const u=await i(s(this.db,"users",a));if(u.exists()){const c=u.data();return{uid:a,displayName:c.displayName,photoURL:c.photoURL,email:c.email}}return null}))).filter(a=>a!==null)}catch(e){throw console.error("Error getting pending requests:",e),e}}}const m=new w;export{m as f};
