import './index.scss';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoaderOverlay from "../../components/LoaderOverlay/LoaderOverlay";
import UsersList from "../../components/UsersList/UsersList";
import { User } from "../../models/User";
import Api from "../../services/Api";
import Pagination from '../../components/Pagination/Pagination';

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(0);
  const navigate = useNavigate();
  const INITIAL_PAGE = 1;
  const ITEMS_PER_PAGE = 6;

  const getUsersApi = async (pageNumber: number = INITIAL_PAGE) => {
    try {
      const { data } = await Api.get(`users?page=${pageNumber}&per_page=${ITEMS_PER_PAGE}`);
      if (data?.data) {
        setUsers(data.data);
        setTotalPages(data?.total_pages);
      }else{
        setUsers([]);
      }
    } catch (error) {
      console.log(error);
      alert('API is not responding');
    } finally {
      setLoading(false);
    }
  };

  const handleClickUser = async (id: number) => {
    navigate(`/users/${id}`);
  };

  const handleClickPage = async (pageNumber: number) => {
    getUsersApi(pageNumber);
  };

  useEffect(() => {
    getUsersApi();
  }, []);

  return (
    <>
      <LoaderOverlay active={loading} />
      <h2>Users</h2>
      {users && (
        <UsersList data-testid="users-list-Component" users={users} handleClick={handleClickUser} />
      )}

      {totalPages > 1 && (
        <Pagination data-testid="pagination-component" totalPages={totalPages} onClickPage={handleClickPage} />
      )}
    </>
  )
}

export default Users