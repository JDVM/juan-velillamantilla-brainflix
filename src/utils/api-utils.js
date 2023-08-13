// const API_URL = "https://project-2-api.herokuapp.com/"
export const API_URL = "http://localhost:8080/"
// const API_KEY = "/?api_key=4e28d6db-a65d-4b29-b496-cf71ca959662"

export const VidDetails = () =>API_URL +"videos";//+ API_KEY;
export const getVidDetailsById = (id) =>API_URL +"videos/"+ id //+ API_KEY;
