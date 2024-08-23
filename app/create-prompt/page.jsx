"use client"

import React from 'react';
import { useState } from 'next-auth/react';
import { useSession } from 'react/navigation';

import Form from '@components/Form';

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState(false);
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
      handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt