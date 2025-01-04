import axios from 'axios';

const BaseURL = "https://basic-blog.teamrabbil.com/api";

export async function posCategories(){
    // let res = await axios.get(`${BaseURL}/categories`)
    let res = await axios.get(BaseURL+"/post-categories") //Same thing

    if(res.status === 200){
        return res.data
    }else{
        return [];
    }
}