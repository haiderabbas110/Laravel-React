import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import './single.scss';
import UserService from "../../../../../services/user.service";

function User() {
    const [data, setData] = useState("");
    const { id } = useParams();
    const userID = id;

    useEffect(() => {
        document.title = "Genetech Team";
        userDetail();
    }, [userID]);

    const userDetail = () => {
        UserService.getSignleUser(userID).then(
            (response) => {
                setData(response.data.user);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
                setData(_content);
            }
        );
    }

    return (
        <section className="userProfile">
            <div className="userProfileDetails">
                <h3><strong>{data.name}</strong></h3>
                <span>{data.designation}</span>
            </div>
            <div className="profileMeta">
                <ul>
                    <li>
                        <strong>Email:</strong> {data.email}
                    </li>
                    <li>
                        <strong>Cell Phone:</strong> {data.phone_number}
                    </li>
                    <li>
                        <strong>Emergency Contact:</strong> {data.emergency_number}
                    </li>
                    <li>
                        <strong>Skills:</strong> {data.skills}
                    </li>
                </ul>
            </div>
        </section>



    );
}
export default User;