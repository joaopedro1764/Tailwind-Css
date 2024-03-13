import { Button, Chip, IconButton, Tooltip } from "@mui/material"
import MoreTimeIcon from '@mui/icons-material/MoreTime';

import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { CheckCircleOutlineOutlined } from "@mui/icons-material";
export const Card = () => {

    return (

        <div className="flex w-full">

            <div className="w-[30vw] flex flex-col rounded-lg text-center items-start mx-auto my-36 !h-auto !bg-blue-300">
                <Chip className="!text-white !bg-blue-900 !w-[120px] !font-bold !mt-4 !mx-4"
                    label="ID: 2304 - PON"></Chip>
                <div className="flex flex-col ml-4 mt-2 items-start">
                    <Tooltip title="Alterar previsão">
                        <IconButton
                            className="!text-blue-800"
                            onClick={() => { alert("OI"); }}
                            aria-label="Enviar Sms"
                        >
                            <MoreTimeIcon fontSize="large" />
                        </IconButton>
                    </Tooltip>
                    <h4 className="font-bold flex-wrap text-center">Previsão: 12/03/2024 08:00</h4>
                    <Chip className="!text-white !bg-blue-950 !w-[120px] !font-bold !mt-4" label="OLT_COTIA_01" />
                    <div className="flex flex-row flex-wrap columns-6 w-full h-auto">
                        <li className="list-none mr-4 mt-2 font-bold col-span-1">0/3/4</li>
                        <li className="list-none mr-4 mt-2 font-bold col-span-1">0/3/4</li>
                        <li className="list-none mr-4 mt-2 font-bold col-span-1">0/3/4</li>
                        <li className="list-none mr-4 mt-2 font-bold col-span-1">0/3/4</li>
                        <li className="list-none mt-2 mr-4 font-bold col-span-1">0/3/4</li>
                        <li className="list-none mt-2 mr-4 font-bold col-span-1">0/3/4</li>

                    </div>
                    <Chip className="!text-white !bg-green-700 !w-[120px] !font-bold !mt-4" label="SMS ENVIADO" />
                
                    <Tooltip
                        placement="bottom-start"
                        title="Enviar Sms"
                    >
                        <IconButton
                            className="!text-blue-800 !mt-4"
                            aria-label="Enviar Sms"
                        >
                            <PhoneIphoneIcon className="icon-sms" fontSize="large" />
                        </IconButton>
                    </Tooltip> 
                    <Button
                        variant="contained"
                        startIcon={<CheckCircleOutlineOutlined />}
                        className="!bg-blue-800 !mt-4 !rounded-lg !font-bold !mb-4 !text-white !p-2 "
                    >
                        Finalizar
                    </Button>
                </div>

            </div>
        </div>

    )
}