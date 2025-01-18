import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Notecard from "../../components/Cards/Notecard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import { useState } from "react";
import Modal from "react-modal";
import { getuser } from "../../services/apiService";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [userInfo , setUserInfo]= useState(null);
  const [openAddEditNote, setOpenAddEditNote] = useState({
    isshowen: false,
    type: "Add",
    note: null,
  });
  const navigate = useNavigate();
  const closeModal = () => {
    setOpenAddEditNote({
      isshowen: false,
      type: "Add", // Reset type if closing
      note: null, // Clear the note
    });
  };
  const fetchUserInfo = async () => {
    try {
      const response = await getuser();
      if (response.status === 200) {
        setUserInfo(response.data);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
      navigate("/login");
    }
  };

  useEffect(() => {
    
    fetchUserInfo();
  }, []);
  
  return (
    <>
      <Navbar
      userInfo= {userInfo} />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-3 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <Notecard
            title="Meeting on New Year"
            date="12/12/2025"
            content="Meeting with the team to discuss the new year plans."
            tags="#Meeting"
            ispinned={true}
            onEdit={() => {}}
            OnDelete={() => {}}
            onPin={() => {}}
          />
        </div>
      </div>
      <Modal
      isOpen ={openAddEditNote.isshowen}
      onRequestClose ={closeModal}
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.4)",
        },
      }}
      contentLabel=""
      className=" w-[80%] sm:w-[40%] max-h-3/4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5 mx-auto mt-14" 
      >
      <AddEditNotes 
      type={openAddEditNote.type}
      noteData={openAddEditNote.note}
      
      closeModal={closeModal}/>

      </Modal>

      <button
        className="w-16 h-16 flex  justify-center items-center  bg-primary absolute right-10 bottom-10 rounded-2xl hover:bg-blue-600"
        onClick={() => {setOpenAddEditNote({isshowen: true, type: "Add", note: null})}}
      >
        <MdAdd className="text-white text-[32px]" />
      </button>
    </>
  );
};

export default Home;
