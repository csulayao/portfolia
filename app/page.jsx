import Feed from '@components/Feed';


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Explore and Wonder
            <br className="max-md:hidden"/>
            <br />

        </h1>
        <h2 className="head2_text text-center indigo_gradient">Javascript-Powered Portoflio</h2>
        <p className="desc text-center">Portfolia is an open-source project to share the portfolio of Carlo Sulayao of D-Kolektiv, Inc.</p>
            <Feed/>
    </section>
)
}

export default Home
/* 
//TODO:
- Create footer
- Create page for owners only
    - Create a login page for main user
    - Move create post to editor module
- Create backend
    - Create db for portfolio
    - Create new env variables
- Update cards to display:
    - Project Name
    - URL
    - Description
    - technology
*/