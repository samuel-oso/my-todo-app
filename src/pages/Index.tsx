import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TasksDetails from "../components/TasksDetails";

const Index = () => {
  return (
    <main>
      <Navbar />
      <div className="max-w-[1340px] m-auto">
        <Header />
        <TasksDetails />
      </div>
    </main>
  );
};

export default Index;
