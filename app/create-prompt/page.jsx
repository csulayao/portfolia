"use client"

import React from 'react';
import { useState } from 'next-auth/react';
import { useSession } from 'react/navigation';

import Form from '@components/Form';

const CreatePrompt = () => {
  const [submitting, SetSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt:'',
    tag: '',
  })

  const createPrompt = async (e)=> {

  }

  return (
    <Form 
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmmit={createPrompt}
    />
  )
}

export default CreatePrompt