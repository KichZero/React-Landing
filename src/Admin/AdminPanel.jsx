import React from 'react';
import { Admin, Resource, ShowGuesser, Layout } from 'react-admin';
import fakeDataProvider from 'ra-data-fakerest';
import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList  } from './users';
import { Dashboard } from "./Dashboard";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import authProvider from './AuthProvider';


import { MyAppBar } from './MyAppBar';

const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} />;


const dataProvider = fakeDataProvider({
    posts: [
        { id: 0, title: 'Hello, world!' },
        { id: 1, title: 'FooBar' },
    ],
    users: [
        { id: 0, name: 'Artiom', username: 'scriptopit', email:'itdealgroup@gmail.com'},
        
    ],
})



function AdminPanel() {
  return (
   <Admin basename='/admin' authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard} layout={MyLayout} 
   darkTheme={{ palette: { mode: 'dark' } }} >
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" icon={UserIcon} />
   </Admin>
  )  
}

export default AdminPanel