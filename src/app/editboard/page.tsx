import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import EditCar  from "@/components/EditCar";

const EditBoardPage = async ({ searchParams }: { searchParams: any }) => {

    const session = await getServerSession();
    console.log("dashboard (Serverside) Sesh:", session)
    if (!session) {
        redirect("/login");
    }
    
    const carId = JSON.stringify(searchParams.carId);
 
    console.log(carId)  

    return (
        <EditCar carId={carId} />
    );
};

export default EditBoardPage;
