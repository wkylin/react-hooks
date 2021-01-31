


// useEffect(() => {
//   let ignore = false;
//   const fetchUserData = async () => {
//     const response = await API.getUserData(userId);
//     if (!ignore) {
//       setUserData(response.userData);
//     }
//   };
//   fetchUserData();
//   return () => {
//     ignore = true;
//   };
// }, [userId]);