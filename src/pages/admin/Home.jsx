import Table from "../../components/Table";
import { Card } from "../../components/Card";
import LinesChart from "./LinesChart";

export const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-10">
        {/* Card */}
        <Card ticket="sold" totalTicket="123456" text="Ventas" />
        <Card ticket="return" totalTicket="123456" text="Devoluciones" />
        <Card ticket="pending" totalTicket="123456" text="Pendientes" />
        <Card ticket="cancel" totalTicket="123456" text="Canceladas" />
      </div>
      <div className="grid justify-between grid-cols-1 md:grid-cols-2 bg-secondary-100 rounded-xl lg:grid-cols-4 gap-x-16 px-8">

        <div className="h-[400px] col-span-2">
          <LinesChart />
        </div>
        <div className="h-[400px] col-span-2 flex-col flex xl:items-start items-center pt-8">
          <Table/>
        </div>
      </div>
    </div>
  );
};

