//GET Prompt for Editing
import { connectToDB } from "@utils/database";
import Work from "@models/works";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const work = await Work.findById(params.id).populate("creator");
    if (!work) {
      return new Response("Work not found", { status: 404 });
    }
    return new Response(JSON.stringify(work), { status: 200 });
  } catch (error) {
    return new Response("Failed to get all portfolio", { status: 500 });
  }
};

//PATCH
export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();

  try {
    await connectToDB();

    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt)
      return new Response("Prompt not found", { status: 404 });

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to update prompt.", { status: 500 });
  }
};

//DELETE
export const DELETE = async (request, { params }) => {
  try {
    await connectToDB;

    await Prompt.findByIdAndDelete(params.id);

    return new Response("Entry deleted successfully.", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete prompt.", { status: 500 });
  }
};
