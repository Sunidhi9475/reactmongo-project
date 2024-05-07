// // import React, { useState } from 'react';
// // import './DoctorManagement.css'; // Import CSS file

// // function DoctorManagement() {
// //   // State to manage doctors
// //   const [doctors, setDoctors] = useState([]);
// //   // State to track the index of the doctor being edited
// //   const [editIndex, setEditIndex] = useState(null);
// //   // State to track doctor details for editing
// //   const [editedDoctor, setEditedDoctor] = useState({
// //     name: '',
// //     qualification: '',
// //     dob: '',
// //     specialization: '',
// //     email: '',
// //     phone: ''
// //   });

// //   // Function to add a new doctor
// //   const addDoctor = (doctor) => {
// //     setDoctors([...doctors, doctor]);
// //   };

// //   // Function to delete a doctor
// //   const deleteDoctor = (index) => {
// //     const updatedDoctors = [...doctors];
// //     updatedDoctors.splice(index, 1);
// //     setDoctors(updatedDoctors);
// //   };

// //   // Function to edit a doctor
// //   const editDoctor = (index) => {
// //     setEditIndex(index);
// //     setEditedDoctor(doctors[index]);
// //   };

// //   // Function to update a doctor
// //   const updateDoctor = (index, updatedDoctor) => {
// //     const updatedDoctors = [...doctors];
// //     updatedDoctors[index] = updatedDoctor;
// //     setDoctors(updatedDoctors);
// //     setEditIndex(null);
// //     setEditedDoctor({
// //       name: '',
// //       qualification: '',
// //       dob: '',
// //       specialization: '',
// //       email: '',
// //       phone: ''
// //     });
// //   };

// //   return (
// //     <div className="doctor-management">
// //       <h2>Doctor Management</h2>
// //       {/* Form to add or edit doctor */}
// //       <form onSubmit={(e) => {
// //         e.preventDefault();
// //         if (editIndex !== null) {
// //           updateDoctor(editIndex, editedDoctor);
// //         } else {
// //           addDoctor(editedDoctor);
// //         }
// //       }}>
// //         <input type="text" name="name" placeholder="Name" required value={editedDoctor.name} onChange={(e) => setEditedDoctor({...editedDoctor, name: e.target.value})} />
// //         <input type="text" name="qualification" placeholder="Qualification" required value={editedDoctor.qualification} onChange={(e) => setEditedDoctor({...editedDoctor, qualification: e.target.value})} />
// //         <input type="date" name="dob" placeholder="Date of Birth" required value={editedDoctor.dob} onChange={(e) => setEditedDoctor({...editedDoctor, dob: e.target.value})} />
// //         <input type="text" name="specialization" placeholder="Specialization" required value={editedDoctor.specialization} onChange={(e) => setEditedDoctor({...editedDoctor, specialization: e.target.value})} />
// //         <input type="email" name="email" placeholder="Email" required value={editedDoctor.email} onChange={(e) => setEditedDoctor({...editedDoctor, email: e.target.value})} />
// //         <input type="tel" name="phone" placeholder="Phone" required value={editedDoctor.phone} onChange={(e) => setEditedDoctor({...editedDoctor, phone: e.target.value})} />
// //         <button type="submit">{editIndex !== null ? 'Update' : 'Add'} Doctor</button>
// //       </form>
// //       {/* List of doctors */}
// //       <table>
// //         <thead>
// //           <tr>
// //             <th>Name</th>
// //             <th>Qualification</th>
// //             <th>DOB</th>
// //             <th>Specialization</th>
// //             <th>Email</th>
// //             <th>Phone</th>
// //             <th>Action</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {doctors.map((doctor, index) => (
// //             <tr key={index}>
// //               <td>{doctor.name}</td>
// //               <td>{doctor.qualification}</td>
// //               <td>{doctor.dob}</td>
// //               <td>{doctor.specialization}</td>
// //               <td>{doctor.email}</td>
// //               <td>{doctor.phone}</td>
// //               <td>
// //                 <button onClick={() => deleteDoctor(index)}>Delete</button>
// //                 <button onClick={() => editDoctor(index)}>Edit</button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }

// // export default DoctorManagement;
// import React, { useState, useEffect } from 'react';
// import './DoctorManagement.css';
// import axios from 'axios';

// function DoctorManagement() {
//   const [doctors, setDoctors] = useState([]);
//   const [editedDoctor, setEditedDoctor] = useState({
//     name: '',
//     qualification: '',
//     dob: '',
//     specialization: '',
//     email: '',
//     phone: ''
//   });

//   useEffect(() => {
//     fetchDoctors();
//   }, []);

//   const fetchDoctors = async () => {
//     try {
//       const response = await axios.get('/api/doctors');
//       setDoctors(response.data);
//     } catch (error) {
//       console.error('Error fetching doctors:', error);
//     }
//   };

//   const addDoctor = async () => {
//     try {
//       const response = await axios.post('/api/doctors', editedDoctor);
//       setDoctors([...doctors, response.data]);
//       setEditedDoctor({
//         name: '',
//         qualification: '',
//         dob: '',
//         specialization: '',
//         email: '',
//         phone: ''
//       });
//     } catch (error) {
//       console.error('Error adding doctor:', error);
//     }
//   };

//   const handleChange = (e) => {
//     setEditedDoctor({ ...editedDoctor, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="doctor-management">
//       <h2>Doctor Management</h2>
//       <form onSubmit={(e) => {
//         e.preventDefault();
//         addDoctor();
//       }}>
//         <input type="text" name="name" placeholder="Name" required value={editedDoctor.name} onChange={handleChange} />
//         <input type="text" name="qualification" placeholder="Qualification" required value={editedDoctor.qualification} onChange={handleChange} />
//         <input type="date" name="dob" placeholder="Date of Birth" required value={editedDoctor.dob} onChange={handleChange} />
//         <input type="text" name="specialization" placeholder="Specialization" required value={editedDoctor.specialization} onChange={handleChange} />
//         <input type="email" name="email" placeholder="Email" required value={editedDoctor.email} onChange={handleChange} />
//         <input type="tel" name="phone" placeholder="Phone" required value={editedDoctor.phone} onChange={handleChange} />
//         <button type="submit">Add Doctor</button>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Qualification</th>
//             <th>DOB</th>
//             <th>Specialization</th>
//             <th>Email</th>
//             <th>Phone</th>
//           </tr>
//         </thead>
//         <tbody>
//           {doctors.map((doctor, index) => (
//             <tr key={index}>
//               <td>{doctor.name}</td>
//               <td>{doctor.qualification}</td>
//               <td>{doctor.dob}</td>
//               <td>{doctor.specialization}</td>
//               <td>{doctor.email}</td>
//               <td>{doctor.phone}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default DoctorManagement;
// import React, { useState, useEffect } from 'react';
// import './DoctorManagement.css';
// import axios from 'axios';

// function DoctorManagement() {
//   const [doctors, setDoctors] = useState([]);
//   const [editedDoctor, setEditedDoctor] = useState({
//     name: '',
//     qualification: '',
//     dob: '',
//     specialization: '',
//     email: '',
//     phone: ''
//   });

//   useEffect(() => {
//     fetchDoctors();
//   }, []);

//   const fetchDoctors = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/doctors');
//       setDoctors(response.data);
//     } catch (error) {
//       console.error('Error fetching doctors:', error);
//     }
//   };

//   const addDoctor = async (e) => {
//     try {
//       e.preventDefault(); // Prevent form submission
//       const response = await axios.post('http://localhost:5000/api/doctors', editedDoctor);
//       setDoctors([...doctors, response.data]);
//       setEditedDoctor({
//         name: '',
//         qualification: '',
//         dob: '',
//         specialization: '',
//         email: '',
//         phone: ''
//       });
//     } catch (error) {
//       console.error('Error adding doctor:', error);
//     }
//   };

//   const handleChange = (e) => {
//     setEditedDoctor({ ...editedDoctor, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="doctor-management">
//       <h2>Doctor Management</h2>
//       <form onSubmit={(e) => addDoctor(e)}>
//         <input type="text" name="name" placeholder="Name" required value={editedDoctor.name} onChange={handleChange} />
//         <input type="text" name="qualification" placeholder="Qualification" required value={editedDoctor.qualification} onChange={handleChange} />
//         <input type="date" name="dob" placeholder="Date of Birth" required value={editedDoctor.dob} onChange={handleChange} />
//         <input type="text" name="specialization" placeholder="Specialization" required value={editedDoctor.specialization} onChange={handleChange} />
//         <input type="email" name="email" placeholder="Email" required value={editedDoctor.email} onChange={handleChange} />
//         <input type="tel" name="phone" placeholder="Phone" required value={editedDoctor.phone} onChange={handleChange} />
//         <button type="submit">Add Doctor</button>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Qualification</th>
//             <th>DOB</th>
//             <th>Specialization</th>
//             <th>Email</th>
//             <th>Phone</th>
//           </tr>
//         </thead>
//         <tbody>
//           {doctors.map((doctor, index) => (
//             <tr key={index}>
//               <td>{doctor.name}</td>
//               <td>{doctor.qualification}</td>
//               <td>{doctor.dob}</td>
//               <td>{doctor.specialization}</td>
//               <td>{doctor.email}</td>
//               <td>{doctor.phone}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default DoctorManagement;
import React, { useState, useEffect } from 'react';
import './DoctorManagement.css';
import axios from 'axios';

function DoctorManagement() {
  const [doctors, setDoctors] = useState([]);
  const [editedDoctor, setEditedDoctor] = useState({
    name: '',
    qualification: '',
    dob: '',
    specialization: '',
    email: '',
    phone: ''
  });
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/doctors');
      setDoctors(response.data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const addDoctor = async (e) => {
    try {
      e.preventDefault(); // Prevent form submission
      const response = await axios.post('http://localhost:5000/api/doctors', editedDoctor);
      setDoctors([...doctors, response.data]);
      setEditedDoctor({
        name: '',
        qualification: '',
        dob: '',
        specialization: '',
        email: '',
        phone: ''
      });
    } catch (error) {
      console.error('Error adding doctor:', error);
    }
  };

  const editDoctor = async (index) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/doctors/${doctors[index]._id}`, editedDoctor);
      const updatedDoctors = [...doctors];
      updatedDoctors[index] = response.data;
      setDoctors(updatedDoctors);
      setEditingIndex(null);
      setEditedDoctor({
        name: '',
        qualification: '',
        dob: '',
        specialization: '',
        email: '',
        phone: ''
      });
    } catch (error) {
      console.error('Error editing doctor:', error);
    }
  };

  const deleteDoctor = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/doctors/${id}`);
      const filteredDoctors = doctors.filter((doctor) => doctor._id !== id);
      setDoctors(filteredDoctors);
    } catch (error) {
      console.error('Error deleting doctor:', error);
    }
  };

  const handleChange = (e) => {
    setEditedDoctor({ ...editedDoctor, [e.target.name]: e.target.value });
  };

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditedDoctor(doctors[index]);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditedDoctor({
      name: '',
      qualification: '',
      dob: '',
      specialization: '',
      email: '',
      phone: ''
    });
  };

  return (
    <div className="doctor-management">
      <h2>Doctor Management</h2>
      <form onSubmit={(e) => addDoctor(e)}>
        <input type="text" name="name" placeholder="Name" required value={editedDoctor.name} onChange={handleChange} />
        <input type="text" name="qualification" placeholder="Qualification" required value={editedDoctor.qualification} onChange={handleChange} />
        <input type="date" name="dob" placeholder="Date of Birth" required value={editedDoctor.dob} onChange={handleChange} />
        <input type="text" name="specialization" placeholder="Specialization" required value={editedDoctor.specialization} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required value={editedDoctor.email} onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone" required value={editedDoctor.phone} onChange={handleChange} />
        {editingIndex !== null ? (
          <>
            <button type="button" onClick={() => editDoctor(editingIndex)}>Save</button>
            <button type="button" onClick={handleCancelEdit}>Cancel</button>
          </>
        ) : (
          <button type="submit">Add Doctor</button>
        )}
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Qualification</th>
            <th>DOB</th>
            <th>Specialization</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={index}>
              <td>{editingIndex === index ? <input type="text" name="name" value={editedDoctor.name} onChange={handleChange} /> : doctor.name}</td>
              <td>{editingIndex === index ? <input type="text" name="qualification" value={editedDoctor.qualification} onChange={handleChange} /> : doctor.qualification}</td>
              <td>{editingIndex === index ? <input type="date" name="dob" value={editedDoctor.dob} onChange={handleChange} /> : doctor.dob}</td>
              <td>{editingIndex === index ? <input type="text" name="specialization" value={editedDoctor.specialization} onChange={handleChange} /> : doctor.specialization}</td>
              <td>{editingIndex === index ? <input type="email" name="email" value={editedDoctor.email} onChange={handleChange} /> : doctor.email}</td>
              <td>{editingIndex === index ? <input type="tel" name="phone" value={editedDoctor.phone} onChange={handleChange} /> : doctor.phone}</td>
              <td>
                {editingIndex === index ? (
                  <>
                    <button onClick={() => editDoctor(index)}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditClick(index)}>Edit</button>
                    <button onClick={() => deleteDoctor(doctor._id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DoctorManagement;
