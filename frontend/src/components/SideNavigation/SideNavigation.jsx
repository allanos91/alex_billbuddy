import './SideNavigation.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { thunkGetFriends, thunkRequestFriend } from '../../redux/friends';

function SideNavigation() {
    const dispatch = useDispatch();
    const friends = useSelector((state) => state.friend.byId);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        dispatch(thunkGetFriends());
    }, [dispatch]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setUsername('');
        setError('');
        setSuccessMessage('');
    };

    const handleInvite = async () => {
        if (username.trim() === '') {
            setError('Username cannot be empty.');
            return;
        }

        const result = await dispatch(thunkRequestFriend(username));

        if (!result.success) {
            setError(result.message);
            setSuccessMessage('');
        } else {
            setError('');
            setSuccessMessage('Friend request sent successfully!');
            setTimeout(() => {
                closeModal();
            }, 1500);
        }
    };

    return (
        <>
            <nav className="sidebar">
                <ul>
                    <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>Dashboard</NavLink></li>
                    <li><NavLink to="/recent-activity" className={({ isActive }) => isActive ? "active" : ""}>Recent Activity</NavLink></li>
                    <li><NavLink to="/all-expenses" className={({ isActive }) => isActive ? "active" : ""}>All expenses</NavLink></li>
                    <div className='SideBar-friends'>Friends<button onClick={openModal}>+ Add</button></div>
                    <ul>
                        {Object.values(friends).map(friend => (
                            <li key={friend.id}>
                                <NavLink to={`/friends/${friend.id}`} className={({ isActive }) => isActive ? "active" : ""}>
                                    {friend.first_name} {friend.last_name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </ul>
            </nav>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-modal" onClick={closeModal}>×</button>
                        <h2>Invite friends</h2>
                        <div className="modal-body">
                            <label>To:
                                <input
                                    type="text"
                                    placeholder="Enter username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </label>
                            {error && <p className="error-message">{error}</p>}
                            {successMessage && <p className="success-message">{successMessage}</p>}
                        </div>
                        <div className="modal-footer">
                            <button className="send-invites" onClick={handleInvite}>Send invites and add friends</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SideNavigation;
