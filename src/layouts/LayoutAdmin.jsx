import { Outlet } from "react-router-dom"
import { Sidebar } from "../components/Sidebar"
import { Header } from "../components/Header"
import '../styles.css';

export const LayoutAdmin = () => {
  return (
    <div className="min-h-screen grid grid-col-1 xl:grid-cols-6">
      <Sidebar />
      <div className="xl:col-span-5 col-span-5 flex flex-col h-screen overflow-hidden p-8">
        <Header /> 
        <div className="flex-1 overflow-y-auto no-scrollbar py-4">
          <Outlet />
        </div>
      </div>  
    </div>
  )
}