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
                        className="!bg-regal-blue !z-auto !top-28 !right-0 !mx-auto items-center !mr-11 !mt-8 !sticky !rounded-sm !text-white !p-2 hover:!bg-blue-400"
                    >
                        Adicionar Rompimento
                    </Button>
                </div>
                <Card />

            </main>

        </div>
    )
}