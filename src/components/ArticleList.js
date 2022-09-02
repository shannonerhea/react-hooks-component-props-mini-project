import Article from "./Article"

function ArticleList({ posts }) {
    const articleArr = posts.map((post) => {
        return <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
        />
    })
    return <main>{articleArr}</main> 
    
};
export default ArticleList;
