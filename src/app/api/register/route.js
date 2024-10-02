// // import { User } from "@/app/models/User";
import { User } from "../../models/User";

import mongoose from "mongoose";
// export async function POST(req)
// {
//     const body = await req.json();  
//     mongoose.connect("mongodb://localhost:27017/food-ordering");
//     const newUser=await User.create(body);
//     return Response.json(newUser)
// }


export async function POST(req) {
    const body = await req.json();
    mongoose.connect("mongodb://localhost:27017/food-ordering");
    const newUser = await User.create(body);
    return Response.json(newUser);
}
