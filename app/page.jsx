import Feed from '@components/Feed';


const Home = () => {
  return (
    <section className="w-full flex-center flex-col mt-10">
        <h1 className="head_text text-center border-t-slate-800">
            Explore and Wonder
            <br className="max-md:hidden"/>
            <br />

        </h1>
        <h2 className="head2_text text-center indigo_gradient">Javascript-Powered Portfolio</h2>
        <p className="desc text-center">Portfolia is a NextJS and Tailwind project to showcase the body of work by Carlo Sulayao of D-Kolektiv, Inc.</p>
            <Feed/>
    </section>
)
}

export default Home
/* 
//TODO:
- Create footer => DONE
- Create page for owners only
    - Create a login page for main user
    - Move create post to editor module

- Create backend
    - Create db for portfolio --> Done
    - Create new env variables --> Done
- Update cards to display: ==> DONE
    - Reuse form for creating posts
    - Project Name
    - URL
    - Description
    - technology

- Bugs
    - Prompt is still being passed on to db ==> FIXED
    - Update Profile page.jsx to remove all "prompt" references ==> FIXED
    - Fix card alignment on desktop ==> DOne

- IMprovements
    - Implement a hover effect
    - Implement modal window on click
    - Implement a hide/archive instead of delete
           - Fix Status of viewing
    - individual link for tags
    - clickable URL
 
*/