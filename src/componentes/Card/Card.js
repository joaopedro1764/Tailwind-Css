import { Chip, IconButton, Tooltip } from "@mui/material"
import MoreTimeIcon from '@mui/icons-material/MoreTime';
export const Card = () => {

    return (

        <div className="w-[30vw] flex flex-col rounded-lg text-center items-start mx-auto my-20 !h-auto !bg-[#a3cef1]">
            <Chip className="!text-white !bg-blue-900 !w-[120px] !font-bold !mt-4 !mx-4"
                label="ID: 2304 - PON"></Chip>
            <div className="flex  ml-4 mt-2 flex-row">
                <Tooltip title="Alterar previsão">
                    <IconButton
                        className="!flex !flex-row"
                        onClick={() => {
                            alert("OI");
                        }}
                        aria-label="Enviar Sms"
                    >
                        <MoreTimeIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
                <h4 className="font-bold">Previsão: 12/03/2024 08:00</h4>
            </div>
          
        </div>
    )
}