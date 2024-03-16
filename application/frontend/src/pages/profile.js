import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import HeadCon from "../containers/header";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Profile, PopUp, Form, Header } from "../component";
import Buffer from "buffer";
import * as Icon from 'react-feather';
import { useEffect } from "react";
import { PostApi, GetApi } from "../hook/use-api";
import Loading from "../containers/loading";
import { FooterContainer } from "../containers/footer";
import * as ROUTES from '../config/router';
import Parser from 'html-react-parser';

window.Buffer = window.Buffer || require("buffer").Buffer; 


export default function ProfilePage() {
    const {userid} = useParams();
    const [isOpen, setIsOpen] = useState(false);

    const [selectedFile, setSelectedFile] = useState();
	const [isSelected , setIsSelected] = useState(false);

    const [user, SetUser] = useState({});
    const [loading, SetLoading] = useState(false);

    const history = useNavigate()
  

    const changeHandler = (event) => {
        
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	const handleSubmission = (e) => {
        e.preventDefault();
        SetLoading(true);
        const formData = new FormData();
        formData.append('avatar', selectedFile);

        let params = {};
        let header = {
            'Accept' : '*/*',
            'Content-Type' : 'multipart/form-data',
        }

        axios.post(`${process.env.REACT_APP_BACKEND_URI}/user/${userid}/update`, formData, {
            params,
            header
        })
        .then((res) => {
            if (res.data) {
                SetLoading(false);
                setIsOpen(false);
                return res.data;
            }
        })
        .catch((err) => {
            throw err;
        })
        .finally(() => {
            window.location.reload();
        })
	};
    
    useEffect(() => {
        console.log("running");
        let header = {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
        }
        let params = {}
        let payload =  async () => {
            let data = await GetApi(`user/${userid}`,params,header);
            console.log(data);
            return SetUser(data);
        }

        payload();
    },[]);



    return (
        <>
                <HeadCon/>
                { user?.username ?<>
                <Profile>
                 <><Profile.Column>
                        <Profile.ProfileUser>
                            <Profile.ImageCrop onClick={() => setIsOpen(!isOpen)} >
                                {user?.img ? <Profile.Image src={`data:${user.img.contentType};base64,${window.Buffer.from(user.img.data.data).toString('base64')}`}/> : <Icon.User size={43}/>}
                            </Profile.ImageCrop>
                        </Profile.ProfileUser>
                        <Profile.Text Bold='true' Margin='15px'>{user?.username ? user.username : "username"}</Profile.Text>
                        <Profile.Text FontSize='17px'>{user?.email ? user.email : "email@email.com"}</Profile.Text>
                    </Profile.Column>
                     <Profile.Column>
                        <Profile.Text Bold='true' Margin='0px 50px' FontSize='35px'></Profile.Text>
                        <Profile.Text FontSize='20px'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                        </Profile.Text>
                    </Profile.Column>
                    <Profile.Column Start="true" Width="300px">
                        <Profile.Text Bold='true' FontSize='20px' >Works</Profile.Text>
                        {user.work && user.work.map((id) => {
                            return <>
                            <Header.TextAccLink onClick={() => history(`${ROUTES.STORY}/${id.id}`)}>{id.name}</Header.TextAccLink>
                            <Profile.Text FontSize='13px'>{Parser(id.summary)}</Profile.Text>
                            </>
                        })}
                    </Profile.Column>
                    </> 
                </Profile>
                <FooterContainer Transform="translateY(320px)"/>
                </> : <Loading Height="100px" Margin="0px"/>}
                { isOpen && <PopUp>
                    <PopUp.Box>
                        <PopUp.Close onClick={() => setIsOpen(!isOpen)}>
                            <Icon.X />
                        </PopUp.Close>
                        
                        <Profile.ImageCrop  Margin='0px 0px 30px 0px'>
                            {(() => {
                                if (isSelected) {
                                    return <Profile.Image src={URL.createObjectURL(selectedFile)}/>
                                } else if(user?.img) {
                                    return <Profile.Image src={`data:${user.img.contentType};base64,${window.Buffer.from(user.img.data.data).toString('base64')}`}/>
                                } else {
                                    return <Icon.User size={43}/>
                                }
                            })()}
                        </Profile.ImageCrop>
                        <Form.Base onSubmit={handleSubmission} method="POST">
                            <Form.SingleInput
                                type="file"
                                size="10"
                                onChange={changeHandler}
                            />
                            <Form.Submit disabled={loading} type="submit">Upload Image</Form.Submit>
                        </Form.Base>
                    </PopUp.Box>
                </PopUp> }
        </>
    )
}