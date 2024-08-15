import Feed from '@components/Feed';


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover and Share
            <br className="max-md:hidden"/>
            <br />

        </h1>
        <h2 className="head2_text text-center orange_gradient">AI-Powered Portoflio</h2>
        <p className="desc text-center">Portfolia is an open-source AI prompting tool for modern world to discover, create, and share the portfolio of Carlo Sulayao of D-Kolektiv, Inc.</p>

        <Feed/>
    </section>
)
}

export default Home