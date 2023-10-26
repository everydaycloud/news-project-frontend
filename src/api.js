import axios from "axios"

const FetchAllArticles = () =>{
    return axios
    .get(`https://newsapp-api-project.onrender.com/api/articles`)
    .then((response)=>response.data)
}

const GetArticleById = (article_id) => {
    return axios
    .get(`https://newsapp-api-project.onrender.com/api/articles/${article_id}`)
    .then((response)=>response.data)
}

const GetCommentsByArticleId = (article_id) => {
    return axios 
    .get(`https://newsapp-api-project.onrender.com/api/articles/${article_id}/comments`)
    .then((response)=>response.data)
}

const GetVotesByArticleId = (article_id) => {
    return axios 
    .get(`https://newsapp-api-project.onrender.com/api/articles/${article_id}`)
    .then((response)=> response.data)
}
const GetUpdatedVotesByArticleId = (article_id, requestOptions) => {
    return axios 
    .patch(`https://newsapp-api-project.onrender.com/api/articles/${article_id}`, 
    requestOptions)
    .then((response)=> response.data)
}

const GetAllTopics = () =>{
    return axios 
    .get(`https://newsapp-api-project.onrender.com/api/topics`)
    .then((response)=> response.data)
}

const PostNewComment = (article_id, requestOptions) => {
    return axios 
    .post(`https://newsapp-api-project.onrender.com/api/articles/${article_id}/comments`, 
    requestOptions)
    .then((response)=> response.data)
}

const FetchArticlesByTopic = (chosenTopic) => {
    return axios
    .get(`https://newsapp-api-project.onrender.com/api/articles?topic=${chosenTopic}`)
    .then((response)=> response.data)
}

export {GetArticleById, GetCommentsByArticleId, GetVotesByArticleId, GetUpdatedVotesByArticleId,
    FetchAllArticles, GetAllTopics, PostNewComment, FetchArticlesByTopic }