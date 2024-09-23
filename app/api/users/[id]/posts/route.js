//This is the Prompt GET API

import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
import Work from "@models/works";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const works = await Work.find({
      creator: params.id,
    }).populate("creator");

    return new Response(JSON.stringify(works), { status: 200 });
  } catch (error) {
    return new Response("Failed to get all portfolio", { status: 500 });
  }
};
