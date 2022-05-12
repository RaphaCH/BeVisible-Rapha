import SideBar from "../../components/SideBar";
import AppForm from "../../components/AppForm";



export default function Dashboard() {
  return (
    <section className="flex flex-row w-screen h-screen " >
      <SideBar />
      <AppForm />
    </section>
  )
}