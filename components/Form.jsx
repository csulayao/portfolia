import Link from 'next/link';

const Form = ({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
}) => {
  return (
    <section className="w-full mx-w-full mx-h-full flex-start flex-col mb-5">
      <h1 className="head_text text-left">
        <span className="indigo_gradient">  
          {type} Post
        </span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing body of works with the world, and let the world be amazed with your portfolio.
      </p>
      <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism bg-slate-400">
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Work Title
          </span>
          <input
          value={post.worktitle} onChange={(e) => setPost({
            ...post, worktitle: e.target.value
          })} 
          placeholder="Write Your Work Title Here" 
          required 
          className="form_input border border-indigo-400"/>
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Work URL
          </span>
          <input 
          value={post.workurl} onChange={(e) => setPost({
            ...post, workurl: e.target.value
          })} 
          placeholder="Write Your Work URL Here" 
          required 
          className="form_input border border-indigo-400"/>
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Work Image URL
          </span>
          <input 
          value={post.workimg} onChange={(e) => setPost({
            ...post, workimg: e.target.value
          })} 
          placeholder="Write Your Work Image URL Here" 
          required 
          className="form_input border border-indigo-400"/>
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Skills Tag {` `}
            <span className="font-normal">
              (#product, #webdevelopment, #idea)
            </span>
          </span>
          <input 
          value={post.tag} onChange={(e) => setPost({
            ...post, tag: e.target.value
          })} placeholder="#skills #tag" 
          required 
          className="form_input border border-indigo-400"/>
        </label>
      <div className="flex-end mx-3 mb-5 gap-4">
        <Link href="/" className="text-gray-500">Cancel</Link>
        <button 
        type="submit" 
        disabled={submitting} 
        className="px-5 py-1.5 text-sm bg-primary-indigo rounded-full text-white">
        {submitting ? `${type}...` : type}
        </button>
      </div>
      </form>
    </section>
  )
}

export default Form