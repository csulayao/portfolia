"use client";

import { useState } from 'react';
import { useSession} from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';

const CreateWork = () => {
  const router = useRouter();
  const {data: session} = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState(false);

  const putValue = () => {

  }

  const [post, setPost] = useState({
    worktitle:'',
    workurl:'',
    workimg:'',
    tag: '',
    status: value,
  })

  const createWork = async (e)=> {
      e.preventDefault();
      setSubmitting(true);

      try{
        const response = await fetch('/api/works/new',
          {
            method: 'POST',
            body: JSON.stringify({
              userId: session?.user.id,
              worktitle: post.worktitle,
              workurl: post.workurl,
              workimg: post.workimg,
              tag: post.tag,
              status: post.status,
            })
          }
        )
        if(response.ok){
          router.push('/');
        }
      }
      catch (error) {
        console.log(error);
      }
      finally {
        setSubmitting(false);
        setValue(post.status);
      }
  }

  return (
    <Form 
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createWork}
    />
  )
}

export default CreateWork