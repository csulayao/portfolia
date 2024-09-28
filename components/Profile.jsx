import WorkCard from "./WorkCard"

const Profile = ({name, desc, data, handleEdit, handleDelete}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="indigo_gradient">
            {name}{`'s Profile`}
        </span>
      </h1>
      <p className="desc text-left">
        {desc}
      </p>
      <div className="mt-10 work_layout">
        {data.map((post) => (
          <WorkCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  )
}

export default Profile