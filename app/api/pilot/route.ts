import {NextRequest,NextResponse} from "next/server";
export async function POST(req:NextRequest){
if(req.headers.get("origin")!==new URL(req.url).origin)return NextResponse.json({error:"Invalid request"},{status:403});
let b;try{b=await req.json()}catch{return NextResponse.json({error:"Invalid request"},{status:400})}
if(b.website)return NextResponse.json({ok:true});
const fields=["name","company","email","phone","homes_per_year"];
if(fields.some(k=>typeof b[k]!=="string"||!b[k].trim()||b[k].length>250)||! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email))return NextResponse.json({error:"Please complete all fields with a valid email."},{status:400});
if(!process.env.RESEND_API_KEY||!process.env.PILOT_FROM_EMAIL)return NextResponse.json({error:"Online submission is not available yet. Please email johnny@usetudu.com. Your entries have been kept."},{status:503});
try{const r=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:"Bearer "+process.env.RESEND_API_KEY,"Content-Type":"application/json"},body:JSON.stringify({from:process.env.PILOT_FROM_EMAIL,to:["johnny@usetudu.com"],reply_to:b.email,subject:"Construction QA pilot request",text:fields.map(k=>k+": "+b[k]).join("\n")})});if(!r.ok)throw Error();return NextResponse.json({ok:true})}catch{return NextResponse.json({error:"We could not submit your request. Please try again or email johnny@usetudu.com."},{status:502})}
}