import SideBar from "../../components/SideBar";
import AppForm from "../../components/AppForm";
import CVDisplay from "../../components/CVDisplay";



export default function DashboardView() {
  return (
      <section className="">
        <SideBar />
        <CVDisplay />
      </section>
  )
}