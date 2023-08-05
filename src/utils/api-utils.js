const API_URL = "https://project-2-api.herokuapp.com/"
const API_KEY = "/?api_key=4e28d6db-a65d-4b29-b496-cf71ca959662"

export const getVidDetails = () =>API_URL +"videos"+ API_KEY;
export const getVidDetailsById = (id) =>API_URL +"comment/"+ id + API_KEY;