import { useParams } from 'react-router-dom';

export default function BlogPost() {
 const { slug } = useParams();

 // You can fetch your blog post data here using the postId
 // For example, using useEffect and fetch or any data fetching library
 // For demonstration, let's assume you have a function to get a post by ID

 // const [post, setPost] = React.useState(null);

 // React.useEffect(() => {
 //   fetchPostById(postId).then(data => setPost(data));
 // }, [postId]);


 return (
  <>
   <div className="flex items-center justify-center w-full h-full px-8">
      <span className="text-2xl font-light">Blog Post with slug: {slug}</span>
     </div>
  </>
 )
}

