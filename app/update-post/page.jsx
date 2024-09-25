"use client";

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

import Form from '@components/Form';

const EditWork = () => {
  const router = useRouter();
  const {data: session} = useSession();
  const searchParams = useSearchParams();
  const workId = searchParams.get('id');

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    worktitle:'',
    workurl: '',
    workimg: '',
    tag: '',
  })

  useEffect(() => {
    const getWorkDetails = async () => {
        const response = await fetch(`/api/works/${workId}`)
        const data = await response.json();

        setPost({
            worktitle: data.worktitle,
            workurl: data.worktitle,
            workimg: data.workimg,
            tag: data.tag,
        })
    }
    if(workId) getWorkDetails();
  }, [workId])

  const updatePrompt = async (e)=> {
      e.preventDefault();
      setSubmitting(true);

      if(!workId) return alert('Prompt ID not found')

      try{
        const response = await fetch(`/api/works/${workId}`,
          {
            method: 'PATCH',
            body: JSON.stringify({
              prompt: post.prompt,
              tag: post.tag
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
      }
  }

  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Form 
      type="Update"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  )
}

export default EditWork