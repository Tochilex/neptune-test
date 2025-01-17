import Dashboard from "../../components/Dashboard";
import RightSideBar from "../../components/RightSideBar";

export default function Home() {
  return (
    <main className="flex">
      <Dashboard />
      <RightSideBar />
    </main>
  );
}
