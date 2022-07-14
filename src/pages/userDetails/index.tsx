import './index.scss';
import { useEffect, useState } from "react";
import LoaderOverlay from "../../components/LoaderOverlay/LoaderOverlay";
import { User } from "../../models/User";
import Api from "../../services/Api";
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [userDetails, setUserDetails] = useState<User>();

  const { id } = useParams();
  
  const getUserDetailsApi = async (userId: number) => {
    try {
      const { data } = await Api.get(`users/${userId}`);
      if (data?.data) {
        setUserDetails(data.data);
      }
    } catch (error) {
      console.log(error);
      alert('API is not responding');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if(id){
      let idParsed = parseInt(id);
      if(idParsed > 0){
        getUserDetailsApi(idParsed);
      }
    }
  }, [id]);
  
  return (
    <>
      <LoaderOverlay active={loading} />
      <h2>User Details</h2>
      {userDetails && (
        
        <div className='user-details-container' data-testid='user-details-component'>
          <img src={userDetails.avatar} alt="user profile avatar" />
          <p>
          <span className='introduction'>
            Welcome, my name is:
          </span>
          <span className='name' data-testid='user-details-component-name'>
            {userDetails.first_name} {userDetails.last_name}
          </span>
          </p>
          <span className='introduction'>
          You can reach me at this email address:
          </span>
          <a href={`mailto:${userDetails.email}`} className='email' data-testid='user-details-component-email'>
            {userDetails.email}
          </a>
        </div>

      )}

        {
          !userDetails && (
            <span className='empty' data-testid='user-details-component-empty'>There is not information to show. Please try again later!</span>
          )
        }

    </>
  )
}

export default UserDetails