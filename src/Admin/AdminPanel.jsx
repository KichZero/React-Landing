import React, { useEffect, useState } from 'react';
import { Admin, Resource, ShowGuesser, Layout } from 'react-admin';
import fakeDataProvider from 'ra-data-fakerest';
import simpleRestProvider from 'ra-data-simple-rest'
import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList  } from './users';
import { Dashboard } from "./Dashboard";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import authProvider from './AuthProvider';


import { MyAppBar } from './MyAppBar';

const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} />;



function AdminPanel() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/posts')
            .then(async (res) => {
                if (!res.ok) {
                    throw new Error(`Failed to fetch data: ${res.status} - ${res.statusText}`);
                }
                const json = await res.json();
                console.log({ json });
                setPosts(json);
            })
            .catch((error) => {
                console.error('Error fetching data:', error.message);
            });
    }, []);


// const dataProvider = fakeDataProvider({
//     posts: posts,
//     users: [
//         { id: 0, name: 'Artiom', username: 'scriptopit', email:'itdealgroup@gmail.com'},
        
//     ],
// })
const dataProvider = simpleRestProvider('http://localhost:3001');


  return (
//    <Admin basename='/admin' authProvider={authProvider} 
//    dataProvider={simpleRestProvider('http://localhost:3001')} dashboard={Dashboard} layout={MyLayout} 
//    darkTheme={{ palette: { mode: 'dark' } }} >
//     <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
//         <Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" icon={UserIcon} />
//    </Admin>
<Admin
basename="/admin"
authProvider={authProvider}
dataProvider={dataProvider}
dashboard={Dashboard}
layout={MyLayout}
darkTheme={{ palette: { mode: 'dark' } }}
>
<Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
<Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" icon={UserIcon} />
</Admin>
  )  
}

export default AdminPanel