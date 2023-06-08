import React from 'react'
import Sider from '../../components/sider/Sider'
import Userbar from '../../components/userbar/Userbar'
import Topnav from '../../components/topbar/Topnav'
import { useStudentsHook } from './useStudentsHook'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

function Home() {
    const { students } = useStudentsHook()

  return (
    <div className="main-wrapper">
      <Topnav />
      <div className="container">
          <div className="sider"><Sider /></div>
          <div className="section">
           <Userbar title="Students"/>
           <DataTable value={students}
             paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '10rem' }}>
                <Column field="name"  header="Name"></Column>
                <Column field="level" header="Level"></Column>
                <Column field="examId"  header="examId"></Column>
                <Column field="phone" header="Phone"></Column>
            </DataTable>
          </div>
    </div>
    </div>        
  )
}

export default Home
