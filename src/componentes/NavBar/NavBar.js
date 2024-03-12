import IconButton from "@mui/material/IconButton";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Tooltip } from "@mui/material";
export const NavBar = () => {

    return (
        <div className='p-5 top-0 bg-regal-blue fixed w-full justify-between items-center grow-1 flex flex-row'>
            <img
                className="w-60 mt-2"
                alt="Imagem Navbar"
                src={require("./logonm.png")}
            />
            <h1 class="mr-24 text-3xl text-center text-white uppercase font-bold mr-122">
                Monitoramento NMT
            </h1>
            <Tooltip title="Sair">
                <IconButton
                    onClick={() => { alert("oi") }}
                    className="!text-white"
                    aria-label="Sair"
                >
                    <ExitToAppIcon fontSize="large" />
                </IconButton>
            </Tooltip>
        </div>
    )
}