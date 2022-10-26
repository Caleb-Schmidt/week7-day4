import { apiClientNoAuth, apiClientTokenAuth } from "./client.js"
const endpoint = '/api/category'

const get = async (cancelToken) =>
{
    let error
    let categories

    const response = await apiClientNoAuth(cancelToken).get(endpoint)
    if (response.ok)
    {
        categories = response.data.categories   
    }
    else
    {
        error ="An unexpected error occured. Please try again later"
    }

    return
    {
        error,
        categories
    }
}

const post = async (token, catName, cancelToken) =>
{
    let error

    const response = await apiClientTokenAuth(token, cancelToken).post(endpoint, 
        {name: catName})
    if (!response.ok)
    {
        error ="An unexpected error occured. Please try again later"
    }

    return {error}
}

const put = async (token, catName, cancelToken) =>
{
    let error

    const response = await apiClientTokenAuth(token, cancelToken).post(endpoint+"/"+id, 
        {name: catName})
    if (!response.ok)
    {
        error ="An unexpected error occured. Please try again later"
    }

    return {error}
}

const del = async (token, id, cancelToken) =>
{
    let error

    const response = await apiClientTokenAuth(token, cancelToken).post(endpoint+"/"+id, )
    if (!response.ok)
    {
        error ="An unexpected error occured. Please try again later"
    }

    return {error}
}

const apiCategory = 
{
    get,
    post,
    put
}

export default apiCategory