// // import React, {useState} from 'react';
// //
// // const LoginForm = () => {
// //     const [username, setUsername] = useState('')
// //     const [password, setPassword] = useState('')
// //     const [message, setMessage] = useState('')
// //     const handleLogin = (e) => {
// //         setUsername(e.target.value)
// //     }
// //     const handlePassword = (e) => {
// //         setPassword(e.target.value)
// //     }
// //     const login = (e) => {
// //         e.preventDefault()
// //         if (username === 'admin' && password === 'admin') {
// //             setMessage ('Добро пожаловать')
// //         }
// //         else {
// //            setMessage ('Ошибка авторизации')
// //         }
// //         setUsername('')
// //         setPassword('')
// //     }
// //     return (
// //         <div>
// //             <form>
// //                 <label htmlFor="name">Login:</label>
// //                 <input type="text" id="name" value={username} onChange={handleLogin}/>
// //
// //                 <label htmlFor="password">Password:</label>
// //                 <input type="password" id="password" value={password} onChange={handlePassword}/>
// //
// //                 <input type="submit" value='login' onClick={login}/>
// //                 <div>{message}</div>
// //             </form>
// //         </div>
// //     );
// // };
// //
// // export default LoginForm;
// //
// //
// //
//
//
// import React, {useState} from 'react';
//
// const LoginForm = () => {
//     const [username, setUsername] = useState()
//     const [password, setPassword] = useState()
//     const [message, setMessage] = useState()
//     const handleLogin = (e) => {
//         setUsername(e.target.value)
//     }
//     const handlePassword = (e) => {
//         setPassword(e.target.value)
//     }
//     const login = (e) => {
//         e.preventDefault()
//         if (username==='admin' && password==='admin'){
//             setMessage('Welcome')
//         }
//         else {
//             setMessage('Ошибка авторизации')
//
//             setPassword('')
//             setUsername('')
//     }
//
//     return (
//         <div>
//             <form action="">
//                 <label htmlFor="name">Login:</label>
//                 <input type="text" id='name' value={username} onChange={handleLogin}/>
//                 <label htmlFor="password">Password:</label>
//                 <input type="password" id='password' value={password} onChange={handlePassword}/>
//                 <input type="text" value={login} onClick={login}/>
//                 <div>
//                     {message}
//                 </div>
//             </form>
//         </div>
//     );
// };
//
// export default LoginForm;
//
//
