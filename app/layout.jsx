import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Footer from '@components/Footer';

export const metadata = {
    title: "Portfolia",
    descriptiion: "Discover the wonderful world of NextJS"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <head>
            <link rel="icon" href="/icon/?<generated>" type="image/<generated>" sizes="<generated>"/>
            <link rel="apple-touch-icon" href="/apple-icon.png?<generated>" type="image/<generated>" sizes="<generated>"/>
        </head>
        <body>
            <Provider>
                <div className="main">
                    <div className="gradient" />
                </div>
                <main className="app">
                    <Nav/>
                    {children}
                </main>
            </Provider>
            <Footer />
        </body>
    </html>
)
}

export default RootLayout;