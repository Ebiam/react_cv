import React from "react";
import Chip from "@material-ui/core/Chip";
import styled, {keyframes} from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import {bounce} from "react-animations";
import {useDencrypt} from "use-dencrypt-effect";
import Topbar from '../../components/Topbar/Topbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Home.css';


const MyChipStatus = styled(Chip)({
    background: 'white',
    color: 'black',
});

const MyAvatarStatus = styled(Avatar)({
    background: '#ff9100',
    color: 'orange',
});

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

const values = ["En développment", "Avaliable soon", "Bientôt disponible", "Work in progress", "En construction"];

function Home() {

    const { result, dencrypt } = useDencrypt();


    React.useEffect(() => {
        let i = 0;

        const action = setInterval(() => {
            dencrypt(values[i]);

            i = i === values.length - 1 ? 0 : i + 1;
        }, 3000);

        return () => clearInterval(action);
    }, []);

    return (
        <>
            <Topbar title={"Enzo Biamonti"}/>
            <div className="App-header">
                <div style={{ textAlign: 'center'}}>
                    <h1>Enzo Biamonti</h1>
                    <h5>Développeur</h5>
                    <div style={{marginBlock: '10vh'}}>
                        <MyChipStatus avatar={<MyAvatarStatus> </MyAvatarStatus>} label="En recherche d'alternance/stage" />
                    </div>
                </div>

                <div style={{textAlign: 'center'}}>
                    <BouncyDiv>
                        <div style={{marginBottom: '2vh'}}>
                            <strong>enzo.biamonti@epitech.eu</strong>
                        </div>
                    </BouncyDiv>

                    <div style={{display: 'flex', direction: 'raw', justifyContent: 'space-between'}}>
                            <Chip avatar={<LinkedInIcon/>} label="Mon LinkedIn" color="primary" style={{marginLeft: '10px', marginRight: '10px'}} onClick={() => {window.open("https://fr.linkedin.com/in/enzo-biamonti-b3109a155", "_blank")}} />
                            <Chip avatar={<GitHubIcon/>} label="Mon Github" style={{marginLeft: '10px', marginRight: '10px'}} onClick={() => {window.open("https://github.com/Ebiam", "_blank")}} />
                    </div>
                    <div style={{marginBlock: '4vh'}}><p>{result}</p></div>
                </div>

                <div >
                    <svg style={{marginBlock: '7vh'}} className="arrows">
                        <path className="a1" d="M0 0 L30 32 L60 0"></path>
                        <path className="a2" d="M0 20 L30 52 L60 20"></path>
                        <path className="a3" d="M0 40 L30 72 L60 40"></path>
                    </svg>
                </div>

            </div>
        </>
    )
}

export default Home;
