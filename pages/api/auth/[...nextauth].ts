import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";
import { connectMongoose } from "../../../lib/mongoose";
import Profile from "../../../models/Profile";

export const authOptions = {
	adapter: MongoDBAdapter(clientPromise),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
		}),
	],
	session: { strategy: "jwt" as const },
	pages: {
		signIn: "/signin",
	},
	callbacks: {
		async session({ session, token }: any) {
			if (token) {
				session.user = {
					...session.user,
					id: token.sub,
				};
			}
			return session;
		},
	},
	events: {
		// After a user signs in, ensure a Profile exists
		async signIn({ user }: any) {
			try {
				await connectMongoose();
				await Profile.findOneAndUpdate(
					{ authUserId: user.id },
					{ $setOnInsert: { name: user.name, email: user.email, image: user.image } },
					{ upsert: true, new: true }
				);
			} catch (err) {
				console.error("Profile upsert failed", err);
			}
		},
	},
};

export default NextAuth(authOptions as any);


