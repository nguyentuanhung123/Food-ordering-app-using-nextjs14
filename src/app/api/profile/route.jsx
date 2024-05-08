import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { User } from "@/models/User";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export async function PUT(req) {
    mongoose.connect(process.env.MONGO_URL);
    const data = await req.json() // data: { user: 'Hung Nguyen Tuan' }
    const session = await getServerSession(authOptions); // lấy thông tin user đang đăng nhập
    const email = session.user.email;
    console.log({session, data});
    if('name' in data) {
        // update user name
        await User.updateOne({email}, {name: data.name})
    }

    return Response.json(true);
}

// {
//     session: {
//       user: {
//         name: 'Hung Nguyen Tuan',
//         email: 'nguyentuanhung4529871036@gmail.com',
//         image: 'https://lh3.googleusercontent.com/a/ACg8ocKZdV_Q4YIDsJ5YWCvxuebHfgLaBJxoTRr-QLjAtzlUiVFaLQ=s96-c'
//       }
//     },
//     data: { user: 'Hung Nguyen Tuan' }
// }