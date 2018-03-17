import axios from 'axios';
let axiosToken;

export const SEARCH_DATA = 'SEARCH_DATA';

export function searchData(data) {
  return dispatch =>{
    var CancelToken = axios.CancelToken;
    if(axiosToken){
      axiosToken.cancel();
    }
    axiosToken = CancelToken.source();
    let result = [];
    if(data != ''){
      axios.get('https://api.github.com/search/users?q='+data,{
        cancelToken: axiosToken.token
      })
      .then((res) =>{
        if(res && res.data){
          result = res.data.items;
          if(result.length > 5){
            result.length = 2;
          }
          let pro = [];
          for(let i = 0; i<result.length; i++){
            let kk = axios.get(result[i].repos_url+'?per_page=5&client_id=e89bb43ba3e8d1dc2055&client_secret=a370f390d0278301e69c19bfb65b0f3b57203293')
            pro.push(kk)
            // .then((resp)=>{
            //   if(resp && resp.data){
            //     result[i].repositories = resp.data;
            //   }
            // }).catch((err)=>{
            // });
          }
          Promise.all(pro).then((data)=>{
            console.log(data,'datatt')
          })
          console.log(pro,'>>>>')
          dispatch({ type: SEARCH_DATA, result});
        }else{
          dispatch({ type: SEARCH_DATA, result});
        }
      }).catch((err)=>{
      });
    }else{
      dispatch({ type: SEARCH_DATA, result});
    }
  }
}
