// MemberList.js
import React from 'react';

const MemberList = ({ members, onRemoveMember }) => {
  return (
    <div>
      <h3>Members</h3>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            {member.username}
            <button onClick={() => onRemoveMember(member.id)}>
            Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;
