import Link from 'next/link'
import Layout from  '../components/layout'


const about = () => 

    <Layout title="About">
        <Link href="/">
        <a>
            Go to index page
        </a>
        </Link>
    Welcome to about page
    <img src="static/javascript-logo.jpg" alt="javascript" height="300px"/>
    </Layout>

export default about;