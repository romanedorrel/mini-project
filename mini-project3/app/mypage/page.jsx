import Link from "next/link"
import PostsLimit from "@/components/PostsLimit";

async function getPostsData(limit, page = 1) {

    const res = await fetch('https://jsonplaceholder.typicode.com/' + 'posts?_limit='+limit+'&_page='+page);
    
    if (!res.ok) { // Recommendation: handle errors
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch posts')
    }
    return res.json()
    }

    export default async function Posts({searchParams}) {
        
        const limit = searchParams.limit ? searchParams.limit : 5;
        const posts = await getPostsData(limit);

        const postList = posts.map(post => (
            <li key={post.id}><Link href={"/posts/" + post.id}>
                Option {post.id}: {post.title}</Link></li>
        ))

    return (
        <div className="Posts">
            <h1>Your Daily Workout and meal plan</h1>
            <h3><ul>{postList}</ul></h3>
            {/* <PostsLimit defaultLimit={limit}/> */}
        </div>
    )
}