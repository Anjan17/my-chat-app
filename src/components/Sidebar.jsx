import React, { Fragment } from "react";

const Sidebar = ({
  channelList = [
    { title: "Team1", id: "swef433" },
    { title: "Team2", id: "322fr2fw" },
  ],
  userList = [
    { name: "User1", id: "32r2wfe" },
    { name: "User2", id: "23rwfsf" },
    { name: "User3", id: "43ty4gf" },
  ],
  handleSelect,
}) => {
  return (
    <div className="sidebar" style={{ width: "40%" }}>
      This is the sidebar
      {channelList.length && <div>Channel List</div>}
      <div className="channel-list" style={{ padding: "10px 10px" }}>
        {channelList.map(({ title, id }) => (
          <div key={id}>{title}</div>
        ))}
      </div>
      {userList.length && <div>User List</div>}
      <div className="user-list" style={{ padding: "10px 10px" }}>
        {userList.map(({ name, id }) => (
          <div key={id} onClick={(e) => handleSelect(name)}>
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
