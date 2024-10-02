// import NextAuth from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"
// import { User } from "../../../models/User.js";
// import bcrypt from "bcrypt";
// import * as mongoose from "mongoose";
// import GoogleProvider from "next-auth/providers/google";
// const handler = NextAuth({
//   secret:"hkjacha",
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET
//     }),
//     CredentialsProvider({
    
//       name: 'Credentials',
//       id:'credentials',
//       credentials: {

//         username: { label: "email", type: "email" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials, req) {
//         const {email,password}=credentials;
//         mongoose.connect("mongodb://localhost:27017/food-ordering")
//        const user=await User.findOne({email})
//        console.log(user.name)
//        const passwordOk=(user && bcrypt.compareSync(password,user.password))
//       //  console.log({passwordOk})
//        if(passwordOk)
//        {
//         return   {
//           id: user._id,
//           name: user.name,
//           email: user.email,
//           contact: user.contact,
//           image: user.image,         };
//        }
//         return null
//       }
//     })
//   ]
// })

// export { handler as GET, handler as POST }




// // import NextAuth from "next-auth";
// // import CredentialsProvider from "next-auth/providers/credentials";
// // import { User } from "../../../models/User.js";
// // import bcrypt from "bcrypt";
// // import mongoose from "mongoose";

// // // Helper function for mongoose connection
// // async function dbConnect() {
// //   if (mongoose.connection.readyState >= 1) {
// //     console.log("Already connected to MongoDB");
// //     return;
// //   }
// //   try {
// //     await mongoose.connect("mongodb://localhost:27017/food-ordering", {
// //       useNewUrlParser: true,
// //       useUnifiedTopology: true,
// //     });
// //     console.log("Connected to MongoDB");
// //   } catch (error) {
// //     console.error("Failed to connect to MongoDB", error);
// //     throw new Error("Database connection error");
// //   }
// // }

// // const handler = NextAuth({
// //   secret: "hkjacha",
// //   providers: [
// //     CredentialsProvider({
// //       name: 'Credentials',
// //       id: 'Credentials',
// //       credentials: {
// //         username: { label: "email", type: "email", placeholder: "abc@example.com" },
// //         password: { label: "Password", type: "password" }
// //       },
// //       async authorize(credentials, req) {
// //         try {
// //           const { email, password } = credentials;
// //           console.log("Credentials received:", { email, password });

// //           // Connect to the database
// //           await dbConnect();

// //           // Find the user by email
// //           const user = await User.findOne({ email });
// //           console.log("User found:", user);

// //           if (!user) {
// //             console.log("No user found with this email");
// //             return null;
// //           }

// //           // Compare password
// //           const passwordOk = bcrypt.compareSync(password, user.password);
// //           console.log("Password check:", passwordOk);

// //           if (passwordOk) {
// //             // If valid, return the user object
// //             console.log("User authenticated:", user);
// //             return { ...user.toObject(), password: undefined }; // Remove sensitive data
// //           } else {
// //             console.log("Password mismatch");
// //             return null;
// //           }
// //         } catch (error) {
// //           console.error("Error in authorize function", error);
// //           return null;
// //         }
// //       }
// //     })
// //   ]
// // });

// // export { handler as GET, handler as POST };


import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "../../../models/User.js";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  secret: "hkjacha",
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        username: { label: "email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;

        // Connect to the database
        await mongoose.connect("mongodb://localhost:27017/food-ordering");

        const user = await User.findOne({ email });

        // Check if the user exists and compare the password
        const passwordOk = user && bcrypt.compareSync(password, user.password);
        
        if (passwordOk) {
          // Return the user object with the necessary fields
          return {
            id: user._id,
            name: user.name,
            email: user.email,
            contact: user.contact, // Include contact field
            image: user.image, // Include image if available
            admin:user.admin,
          };
        }

        return null; // Return null if authentication fails
      }
    })
  ]
  ,
  callbacks: {
    async jwt({ token, user }) {
      // If user is authenticated, add custom fields to token
      if (user) {
        token.id = user.id;
        token.contact = user.contact; // Add the contact field to the token
        token.image = user.image; // Add image field
        token.admin=user.admin;
      }
      return token;
    },
    async session({ session, token }) {
      // Add the custom fields from token to the session
      session.user.id = token.id;
      session.user.contact = token.contact; // Add contact to session
      session.user.image = token.image; // Add image to session if available
      session.user.admin=token.admin;
      return session;
    }
  }
});

export { handler as GET, handler as POST };
