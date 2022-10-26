// Testing Ground
import { getUser } from "./api/apiBasicAuth.js";
import { CancelToken } from "apisauce";
import apiCat from "./api/apiCategory.js";

const source = CancelToken.source()
// source.token return the cancel token

const login = async (cancelToken) =>
{
   const {user, error} = await getUser('kevinb@codingtemple.com', '1234', cancelToken)
   console.log(error?error: "It Works")
   console.log(user?user: "Bad Login")
}

// login(source.token)

const cat_get = async (cancelToken) =>
{
    const {error, categories} = await apiCat.get(cancelToken)
    console.log(error?error: "It Works")
    console.log(user?user: "Bad Login")
}

// cat_get(source.token)

const cat_post = async (cancelToken) =>
{
    const {error} = await apiCat.post(token, "Energy", source.token)
    console.log(error) 
}

// cat_post(source.token)

const cat_put = async (cancelToken) =>
{
    const {error} = await apiCat.post(token, "I WAS EDITED", source.token)
    console.log(error) 
}

// cat_put(source.token)

const cat_delete = async (canceltoken) =>
{
    const {error} = await apiCat.delete(token, source.token)
    console.log(error)
}