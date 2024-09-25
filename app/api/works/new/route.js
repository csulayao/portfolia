//This is how an API Route in NextJS looks like

import { connectToDB } from "@utils/database";
import Work from "@models/works";

export const POST = async (req) => {
  const { userId, worktitle, workurl, workimg, tag } = await req.json();

  try {
    await connectToDB();
    const newWork = new Work({
      creator: userId,
      worktitle,
      workurl,
      workimg,
      tag,
    });
    await newWork.save();

    return new Response(JSON.stringify(newWork), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new work entry", { status: 500 });
  }
};
