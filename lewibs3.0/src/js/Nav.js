import '../css/nav.css';
import {Button as Butt} from './Button'
import {AiFillSmile, AiFillFrown} from "react-icons/ai";
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import UserTracker from "usability-tracker";
import { AxiosInst } from './AxiosInst';

const user = new UserTracker((log)=>{
    AxiosInst.post("/logger/log", log)
    //no point
    .then(()=>{})
    //no point
    .catch(()=>{});
});

function Nav() {
    const [input, setInput] = React.useState(undefined);
    
    function toggleInput(happy) {
        function closeInput() {
            setInput(undefined);
        }

        function saveInput(string) {
            AxiosInst.post("/logger/input", {
                userID: localStorage.getItem("lewibs-UserTracker-usrID"),
                input: string,
                time: new Date().getTime(),
                status: (happy) ? "good" : "bad",
            })
            .then(()=>{console.log("Thanks for the feedback!")})
            .catch(()=>{console.warn("that didn't work. I didn't get the feedback")});

            closeInput()
        }

        if (input) {
            setInput(undefined);
        } else {
            setInput(<GetInput happy={happy} close={closeInput} save={saveInput}/>)
        }
    }

    return (
        <>
            <nav id="nav" className='background1 color1'>
                <span id="navHome">
                    <Butt className='color1' text='lewibs' href='#home' />
                </span>
                <span className='allButtons'>
                    <span className='faces'>
                        <span className='face happy'><AiFillSmile onClick={()=>{toggleInput(true)}} /></span>
                        <span className='face unhappy'><AiFillFrown onClick={()=>{toggleInput(false)}} /></span>
                    </span>
                    <span id="navButtons">
                        <Butt className='color1' text='About Me' href='#aboutAnchor' />
                        <Butt className='color1' text='Skills' href='#skillsAnchor' />
                        <Butt className='color1' text='Projects' href='#projectsAnchor' />
                        <Butt className='color1' text='Contact' href='#contactAnchor' />
                    </span>
                </span>
            </nav>
            {input}
        </>
    );
}

function GetInput({happy, close, save}) {
    const [input, setInput] = React.useState("");

    return (
        <Dialog open={true} onClose={close}>
            <DialogTitle>{(happy)
                ?"Like What You See?"
                :"Having Trouble?"
            }</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    {(happy)
                        ?"I'm glad you're enjoying the website! I put a lot of work into what I do. Feel free to let me know what you think and reach out to me!"
                        :"I'm sorry you are having trouble. Leave some input below so I cam make things better next time you visit!"
                    }
                </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Leave some input :)"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={input}
                        onChange={(e)=>{setInput(e.target.value)}}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={close}>Cancel</Button>
                    <Button onClick={()=>{save(input)}}>Submit</Button>
                </DialogActions>
            </Dialog>
    );
}

export default Nav;