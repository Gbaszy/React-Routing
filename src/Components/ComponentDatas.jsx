// import { useState, useEffect } from 'react';

// import React from 'react';

// const ComponentDatas = () => {
//     const [data, setData] = useState([]);

//     const [ error, setError] = useState(null);

//     useEffect(() =>{

//     function fetchData(){
//      fetch('https://hn.algolia.com/api/v1/search?query=redux')

//         .then(res => {
//             res.json()
//             console.log(res)
//         })

//         .then(res => setData(res.hits))


//         .catch(err => setError(err)); // if there is an error here whwat you have todo
//     }

// fetchData();

// }, []);

// return (
//     <div>
//     <ul>
//         {data.map(course =>(
//             <li>
//                 <a href={course.url}>{course.title}</a>
//             </li>
//         ))}
//     </ul>
//     </div>
// );
// };
// export default ComponentDatas
