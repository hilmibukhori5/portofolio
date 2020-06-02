import Link from 'next/link'
import Layout from '../components/layout'
const Index = () =>  
<Layout title="Home">
    <Link href="/about">
    <a href="/about">
        Go to About page
    </a>
    </Link>
    Welcome to Index page
</Layout>
export default Index;