import Head from 'next/head';

export default function Home() {
    return (
        <>
        <Head>
            <title>My Awesome Next JS App</title>
            <meta name="description" content="This is an awesome website built with Next JS"/>
            <meta name="keywords" content="Next.js, SEO, React, Web Development"/>
            <meta name="author" content="Your Name"/>
            <meta name="og:title" content="My Awesome Next.js App"/>
            <meta name="og:description" content="This is an awesome site built with Next.js"/>
            <meta name="og:url" content="https://my-awesome-nextjs-app.com"/>
            <meta name="og:type" content="website"/>
            <meta name="og:image" content="https://my-awesome-nextjs-app.com/og-image.jpg"/>
        </Head>
        <div>
            <h1>Welcome to My Next.js App</h1>
            <p>This is a sample page with SEO implemented</p>
        </div>
        </>
    )
}