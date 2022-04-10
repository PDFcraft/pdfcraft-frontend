import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {useRecoilValue, useSetRecoilState } from "recoil";
import DropzoneComponent from "../Components/DropzoneComponent";
import { buttonTextState, filesState, flagProcessedState, retypePasswordState, targetUrlState,passwordState} from "../state";
import UploadButton from "../Components/UploadButton"
import DownloadButton from "../Components/DownloadButton"
import ProcessedComponent from "../Components/ProcessedFile";
import UploadedComponent from "../Components/UploadedFile";
import logoSvg from "../svg/logo.svg";
import Featbackground from "../Components/Featbackground";
import Featshortcuts from "../Components/Featshortcuts";

const Protect = () => {
    const files = useRecoilValue(filesState);
    const flagProcessed = useRecoilValue(flagProcessedState);
    const setTargetUrl = useSetRecoilState(targetUrlState);
    const setButtonText = useSetRecoilState(buttonTextState);
    const setRetypePassword = useSetRecoilState(retypePasswordState)
    const setPassword = useSetRecoilState(passwordState)
    useEffect(() => {
        setTargetUrl(process.env.REACT_APP_PROTECT_API_LINK)
        setButtonText("Protect")
        setPassword("")
    })

    const onPasswordChange = (e)=>{
        setPassword(e.target.value)
    }

    const onRetypePasswordChange =(e)=>{
        setRetypePassword(e.target.value)
    }
    return (
        <div>
        <Featbackground />
        <section className="home-main-wrap">
        <section className="home-main-2">
            <Link to="/home">
            <div className="home-main-top">
                <img src={logoSvg} alt="pdf-file" />
            </div>
            </Link>
            <div className="home-main-features">
                <div className="features-zone">
                {
                files.length < 1 &&
                <DropzoneComponent/>
                }
                {
                (files.length>0 && flagProcessed===false)&& 
                <div>
                    <UploadedComponent/>
                    <input className="protect-input__left" type="password" name="password" onChange={onPasswordChange} />
                    <input className="protect-input__right" type="password" name="re-type-password" onChange={onRetypePasswordChange} />
                </div>
                }
                {
                flagProcessed===true&&
                <ProcessedComponent/>
                }
                </div>
                <div className="features-btns">
                    <UploadButton />
                    <DownloadButton />
                </div>
            </div>
        </section>
        <Featshortcuts />
            <div className="box-selected-6"></div>
        </section>
    </div>
    );

};

export default Protect;