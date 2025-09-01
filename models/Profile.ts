import { Schema, models, model } from "mongoose";

const ProfileSchema = new Schema(
	{
		authUserId: { type: String, required: true, index: true, unique: true },
		name: { type: String, required: true },
		email: { type: String, required: true, index: true },
		image: { type: String },
		// Future-ready fields
		bio: { type: String, default: "" },
		streakDays: { type: Number, default: 0 },
	},
	{ timestamps: true }
);

export type ProfileDoc = {
	_id: string;
	authUserId: string;
	name: string;
	email: string;
	image?: string;
	bio?: string;
	streakDays?: number;
};

export default models.Profile || model("Profile", ProfileSchema);


