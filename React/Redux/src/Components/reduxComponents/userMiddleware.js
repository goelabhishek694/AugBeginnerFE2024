// useEffect(() => {
//     (async function(){
//       try {
//           setLoading(true);
//           const resp = await fetch("https://jsonplaceholder.typicode.com/users/1")
//           const user = await resp.json();
//           console.log("user",user);
//           setUser(user)
//       } 
//         catch(err){
//             console.log(err);
//             setError(true);
//         }
//         finally{
//             setLoading(false);
//         }
//     })()
// },[]);

import UserSlice from "../../redux/userSlice"
const actions = UserSlice.actions;

export const fetchUserMiddleware = (param) => {
    return async (dispatch) =>{
        try{
            dispatch(actions.userLoading());
            const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${param}`)
            const user = await resp.json();
            console.log("user",user);
            dispatch(actions.userData(user));
        }catch(err){
            console.log(err);
            dispatch(actions.userError());
        }
    }
}