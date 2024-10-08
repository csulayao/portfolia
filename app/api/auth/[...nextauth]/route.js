import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from "@models/user";
import { connectToDB } from "@utils/database";

// console.log({
//   clientId: process.env.GOOGLE_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// });

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID2,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET2,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session.user.email,
      });
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ profile }) {
      try {
        //serverless -> Lambda -> dynamodb
        await connectToDB();

        //Check if user already exists
        const userExists = await User.findOne({
          email: profile.email,
        });

        //If not, create a new user and save
        // if (!userExists) {
        //   await User.create({
        //     email: profile.email,
        //     username: profile.name.replace(" ", "_").toLowerCase(),
        //     image: profile.picture,
        //   });
        // }
        if (!userExists) {
          alert("You do not have access to this site. Contact the owner.");
        }

        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);

        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
