import { Button } from "@mui/material"
import AddCircle from '@mui/icons-material/AddCircleOutline';
import { NavBar } from "../NavBar/NavBar";
export const DashBoard = () => {

    return (
        <>
            <NavBar />
            <div className="w-full  flex-row absolute mt-52 ">
                <Button variant="contained"
                    startIcon={<AddCircle />}
                    className="!bg-regal-blue !mr-4 !rounded-sm !float-right !text-white !p-2 "
                >
                    Adicionar Rompimento
                </Button>
            </div>

        </>
    )
}