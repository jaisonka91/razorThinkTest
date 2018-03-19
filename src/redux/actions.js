import axios from 'axios';
let axiosToken;

export const SEARCH_DATA_DONE = 'SEARCH_DATA_DONE';
export const SEARCH_DATA_LOADING = 'SEARCH_DATA_LOADING';
export const SEARCH_REPO_DONE = 'SEARCH_REPO_DONE';
export const SEARCH_REPO_LOADING = 'SEARCH_REPO_LOADING';
export const NETWORK_ERROR = 'NETWORK_ERROR';

export function searchData(data) {
  return dispatch =>{
    dispatch({ type: SEARCH_DATA_LOADING, result: []});
    var CancelToken = axios.CancelToken;
    if(axiosToken){
      axiosToken.cancel();
    }
    axiosToken = CancelToken.source();
    let result = [];
    if(data != ''){
      axios.get('https://api.github.com/search/users?q='+data+'&per_page=5&client_id=e89bb43ba3e8d1dc2055&client_secret=a370f390d0278301e69c19bfb65b0f3b57203293',{
        cancelToken: axiosToken.token
      })
      .then((res) =>{
        if(res && res.data){
          result = res.data.items;
          let pro = [];
          for(let i = 0; i<result.length; i++){
            let kk= axios.get(result[i].repos_url+'?per_page=5&client_id=e89bb43ba3e8d1dc2055&client_secret=a370f390d0278301e69c19bfb65b0f3b57203293')
            .then((resp)=>{
              if(resp && resp.data){
                result[i].repositories = resp.data;
              }
              return result[i];
            }).catch((err)=>{
            });
            pro.push(kk);
          }
          Promise.all(pro).then((data)=>{
            dispatch({ type: SEARCH_DATA_DONE, result: data});
          })
        }else{
          dispatch({ type: SEARCH_DATA_DONE, result});
        }
      }).catch((err)=>{
        if(axios.isCancel(err)) {
        }else{
          dispatch({ type: NETWORK_ERROR});
        }
      });
    }else{
      dispatch({ type: SEARCH_DATA_DONE, result});
    }
  }
}

export function searchReposLang(fullName) {
  return dispatch =>{
    dispatch({ type: SEARCH_REPO_LOADING, payload: {
      repos: [],
      fullName
    }});
    let result = {};
    if(fullName != ''){
      axios.get('https://api.github.com/repos/'+fullName+'/languages?client_id=e89bb43ba3e8d1dc2055&client_secret=a370f390d0278301e69c19bfb65b0f3b57203293')
      .then((res) =>{
        if(res && res.data){
          result = res.data;
          dispatch({ type: SEARCH_REPO_DONE, payload: {
            repos: result,
            fullName
          }});
        }else{
          dispatch({ type: SEARCH_REPO_DONE, result});
        }
      }).catch((err)=>{
      });
    }else{
      dispatch({ type: SEARCH_REPO_DONE, result});
    }
  }
}
