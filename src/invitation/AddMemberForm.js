// AddMemberForm.js
import React, { useState } from 'react';

const AddMemberForm = ({ taskId, onAddMember }) => {
  const [username, setUsername] = useState('');

  const handleAddMember = () => {
    // Kirim permintaan penambahan anggota ke backend
    // Gunakan fungsi onAddMember untuk menangani respons dari penambahan anggota
    onAddMember({ taskId, username });
    // Atur ulang formulir setelah menambahkan anggota
    setUsername('');
  };

  return (
    <div>
      <label htmlFor="username">Member Username :</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleAddMember}>Add Member</button>
    </div>
  );
};

export default AddMemberForm;
