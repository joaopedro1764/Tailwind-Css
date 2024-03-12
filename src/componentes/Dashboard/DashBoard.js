import { Button } from "@mui/material"
import AddCircle from '@mui/icons-material/AddCircleOutline';
import { NavBar } from "../NavBar/NavBar";
import { Card } from "../Card/Card";
export const DashBoard = () => {

    return (
        <div>
            <NavBar />
            <main className="mt-[125px]">
                <div className="w-full flex">
                    <Button
                        variant="contained"
                        startIcon={<AddCircle />}
                        className="!bg-regal-blue !mx-auto !float-right items-center !mr-16 !mt-8 fixed !rounded-sm  !text-white !p-2 "
                    >
                        Adicionar Rompimento
                    </Button>
                </div>
                <Card />

            </main>

        </div>
    )
}