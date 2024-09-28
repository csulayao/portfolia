"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const WorkCard = ({post, handleTagClick, handleEdit, handleDelete}) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  const handleProfileClick = () =>{
    if(post.creator._id === session?.user.id) return router.push("/profile");

      //router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);

  }

  const handleCopy = () => {
    setCopied(post.workurl);
    navigator.clipboard.writeText(post.workurl);
    setTimeout(() => setCopied(""), 3000);
  }

  return (
    <div className="work_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer" 
          onClick={handleProfileClick}
          >
            <div className="flex flex-col">
              <h3 className="font-satoshi font-semibold text-indigo-950">
                {post.worktitle}
              </h3>
              <p className="font-inter text-sm text-gray-500">
                {post.workurl}
              </p>
              {/* <p className="font-inter text-sm text-gray-500">
                {post.workimg}
              </p> */}
              <Image 
                src="https://placehold.co/400x400.svg"
                width={400}
                height={400}
                alt="placeholder_image"
                className="pt-5"
              />
            </div>
        </div>
      </div>
      <p className="font-inter text-sm tag_gradient pt-3"
        onClick={() => handleTagClick && handleTagClick(post.tag)}>
        {post.tag}
      </p>
      {session?.user.id === post.creator._id && pathName === '/profile' &&
        (
          <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
            <p 
              className="font-inter text-sm orange_gradient cursor-pointer"
              onClick={handleEdit}>
              Edit
            </p>
            <p 
              className="font-inter text-sm text-gray-500 cursor-pointer"
              onClick={handleDelete}>
              Delete
            </p>
          </div>
        )
      }
    </div>
  )
}

export default WorkCard