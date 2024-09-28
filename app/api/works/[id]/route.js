//GET Work for Editing
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
    return new Response("Failed to get all works", { status: 500 });
  }
};

//PATCH
export const PATCH = async (request, { params }) => {
  const { worktitle, workurl, workimg, tag } = await request.json();

  try {
    await connectToDB();

    const existingWork = await Work.findById(params.id);

    if (!existingWork) return new Response("Work not found", { status: 404 });

    existingWork.worktitle = worktitle;
    existingWork.workurl = workurl;
    existingWork.workimg = workimg;
    existingWork.tag = tag;

    await existingWork.save();

    return new Response(JSON.stringify(existingWork), { status: 200 });
  } catch (error) {
    return new Response("Failed to update work.", { status: 500 });
  }
};

//DELETE
export const DELETE = async (request, { params }) => {
  try {
    await connectToDB;

    await Work.findByIdAndDelete(params.id);

    return new Response("Entry deleted successfully.", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete work.", { status: 500 });
  }
};
