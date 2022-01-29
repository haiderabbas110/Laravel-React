import React,{useState, useEffect} from "react"
import { useNavigate } from 'react-router';
import UserService from "../../../../services/user.service";

function Users(){
    const [data, setData] = useState("");

      useEffect(() => {
        document.title = "Genetech Team";
        allUsers();
      },[]);

      

      

      const allUsers = () => {
        UserService.getUserBoard().then(
          (response) => {
            setData(response.data.users);
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
          <div className="Users">
              {document.title}
              <ul>
                { 
                  Object.keys(data).map((anObjectMapped, index) => {
                    const val = data[anObjectMapped];

                    return <li>
                              <h3>{val.name}</h3>
                              <span>{val.email}</span>
                            </li>
                })

                  }
              </ul>

          <div>
          
        
          </div>
              
          </div>
    );
    }
export default Users;