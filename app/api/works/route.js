//This is the Prompt GET API

import { connectToDB } from "@utils/database";
import Work from "@models/works";
export const dynamic = "force-dynamic";
export const GET = async (request) => {
  try {
    await connectToDB();

    const works = await Work.find({}).populate("creator");

    return new Response(JSON.stringify(works), { status: 200 });
  } catch (error) {
    return new Response("Failed to get all portfolio", { status: 500 });
  }
};
