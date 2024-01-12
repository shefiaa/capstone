import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TaskModal from '../modals/TaskModal'
import axios from 'axios'

function Task({taskIndex , colIndex}) {
    const boards = useSelector(state => state.boards)
    const board = boards.find(board => board.isActive)
    const columns = board.columns
    const col = columns.find((col , i) => i === colIndex)
    const task = col.tasks.find((task , i) => i === taskIndex)

    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false)

    let completed = 0
    let subtasks = task.subtasks
    subtasks.forEach((subtasks) => {
        if(subtasks.isCompleted) {
            completed++
        }
    })

    const handleOnDrag = (e) => {
        e.dataTransfer.setData(
            "text",
            JSON.stringify({taskIndex , prevColIndex : colIndex})
        )
    }

    const handleSendDataToBackend = async () => {
        try {
          // Data yang akan dikirim ke backend
          const dataToSend = {
            taskIndex,
            colIndex,
            // tambahkan data lain sesuai kebutuhan
          };
    
          // Mengirim data ke backend melalui API endpoint
          const response = await axios.get('http://localhost:3000/createTask/', dataToSend);
    
          // Misalnya, perbarui state komponen atau lakukan tindakan berdasarkan respons
          if (response.data.success) {
            // Handle respons dari backend jika diperlukan
            console.log('Response from backend:', response.data);
            // Lakukan sesuatu jika respons menyatakan keberhasilan
            // Contoh: Perbarui state komponen, tampilkan pesan sukses, dll.
          }
        } catch (error) {
          // Handle error jika terjadi kesalahan
          console.error('Error sending data to backend:', error.message);
          // Misalnya, tampilkan pesan kesalahan kepada pengguna
        }
      };
    
      // Panggil fungsi handleSendDataToBackend() ketika komponen di-render
      handleSendDataToBackend();
    
  return (
    <div>
        <div
        onDragStart={handleOnDrag}
        draggable
        onClick={() => {
            setIsTaskModalOpen(true);
        }}
        className=' w-[280px] first:my-5 rounded-lg bg-white dark:bg-[#2b2c37] 
        shadow-[#364e7e1a] py-6 px-3 shadow-lg hover:text-[#635fc7] dark:text-white dark:hover:text-[#635fc7] cursor-pointer my-4'
    >
            <p
            className=' font-bold tracking-wide '
            >
            {task.title}
            </p>

            <p
            className=' font-bold text-xs tracking tracking-tighter mt-2 text-gray-500'
            >
            {completed} of {subtasks.length} completed tasks
            </p>
    </div>
    {
        isTaskModalOpen && (
            <TaskModal
            colIndex={colIndex}
            taskIndex={taskIndex}
            setisTaskModalOpen={setIsTaskModalOpen}
            />
        )
    }
    </div>
  )
}

export default Task