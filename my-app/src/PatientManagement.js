// // import React, { useState } from 'react';
// // import './PatientManagement.css'; // Import CSS file

// // function PatientManagement() {
// //   // State to manage patients
// //   const [patients, setPatients] = useState([]);
// //   // State to track the index of the patient being edited
// //   const [editIndex, setEditIndex] = useState(null);
// //   // State to track patient details for editing
// //   const [editedPatient, setEditedPatient] = useState({
// //     name: '',
// //     age: '',
// //     gender: '',
// //     appointment: '',
// //     phone: '',
// //     disease: '',
// //     doctorName: '',
// //     address: '',
// //     status: ''
// //   });

// //   // Function to add a new patient
// //   const addPatient = (patient) => {
// //     setPatients([...patients, patient]);
// //   };

// //   // Function to delete a patient
// //   const deletePatient = (index) => {
// //     const updatedPatients = [...patients];
// //     updatedPatients.splice(index, 1);
// //     setPatients(updatedPatients);
// //   };

// //   // Function to edit a patient
// //   const editPatient = (index) => {
// //     setEditIndex(index);
// //     setEditedPatient(patients[index]);
// //   };

// //   // Function to update a patient
// //   const updatePatient = (index, updatedPatient) => {
// //     const updatedPatients = [...patients];
// //     updatedPatients[index] = updatedPatient;
// //     setPatients(updatedPatients);
// //     setEditIndex(null);
// //     setEditedPatient({
// //       name: '',
// //       age: '',
// //       gender: '',
// //       appointment: '',
// //       phone: '',
// //       disease: '',
// //       doctorName: '',
// //       address: '',
// //       status: ''
// //     });
// //   };

// //   return (
// //     <div className="patient-management">
// //       <h2>Patient Management</h2>
// //       {/* Form to add or edit patient */}
// //       <form onSubmit={(e) => {
// //         e.preventDefault();
// //         if (editIndex !== null) {
// //           updatePatient(editIndex, editedPatient);
// //         } else {
// //           addPatient(editedPatient);
// //         }
// //       }}>
// //         <input type="text" name="name" placeholder="Name" required value={editedPatient.name} onChange={(e) => setEditedPatient({...editedPatient, name: e.target.value})} />
// //         <input type="number" name="age" placeholder="Age" required value={editedPatient.age} onChange={(e) => setEditedPatient({...editedPatient, age: e.target.value})} />
// //         <select name="gender" required value={editedPatient.gender} onChange={(e) => setEditedPatient({...editedPatient, gender: e.target.value})}>
// //           <option value="">Select Gender</option>
// //           <option value="Male">Male</option>
// //           <option value="Female">Female</option>
// //           <option value="Other">Other</option>
// //         </select>
// //         <input type="date" name="appointment" placeholder="Appointment Date" required value={editedPatient.appointment} onChange={(e) => setEditedPatient({...editedPatient, appointment: e.target.value})} />
// //         <input type="tel" name="phone" placeholder="Phone" required value={editedPatient.phone} onChange={(e) => setEditedPatient({...editedPatient, phone: e.target.value})} />
// //         <input type="text" name="disease" placeholder="Disease" required value={editedPatient.disease} onChange={(e) => setEditedPatient({...editedPatient, disease: e.target.value})} />
// //         <input type="text" name="doctorName" placeholder="Doctor Name" required value={editedPatient.doctorName} onChange={(e) => setEditedPatient({...editedPatient, doctorName: e.target.value})} />
// //         <input type="text" name="address" placeholder="Address" required value={editedPatient.address} onChange={(e) => setEditedPatient({...editedPatient, address: e.target.value})} />
// //         <select name="status" required value={editedPatient.status} onChange={(e) => setEditedPatient({...editedPatient, status: e.target.value})}>
// //           <option value="">Select Status</option>
// //           <option value="Active">Active</option>
// //           <option value="Inactive">Inactive</option>
// //           <option value="Pending">Pending</option>
// //         </select>
// //         <button type="submit">{editIndex !== null ? 'Update' : 'Add'} Patient</button>
// //       </form>
// //       {/* List of patients */}
// //       <table>
// //         <thead>
// //           <tr>
// //             <th>Name</th>
// //             <th>Age</th>
// //             <th>Gender</th>
// //             <th>Appointment</th>
// //             <th>Phone</th>
// //             <th>Disease</th>
// //             <th>Doctor Name</th>
// //             <th>Address</th>
// //             <th>Status</th>
// //             <th>Action</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {patients.map((patient, index) => (
// //             <tr key={index}>
// //               <td>{patient.name}</td>
// //               <td>{patient.age}</td>
// //               <td>{patient.gender}</td>
// //               <td>{patient.appointment}</td>
// //               <td>{patient.phone}</td>
// //               <td>{patient.disease}</td>
// //               <td>{patient.doctorName}</td>
// //               <td>{patient.address}</td>
// //               <td>{patient.status}</td>
// //               <td>
// //                 <button onClick={() => deletePatient(index)}>Delete</button>
// //                 <button onClick={() => editPatient(index)}>Edit</button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }

// // export default PatientManagement;
// import React, { useState, useEffect } from 'react';
// import './PatientManagement.css';
// import axios from 'axios';

// function PatientManagement() {
//   const [patients, setPatients] = useState([]);
//   const [editedPatient, setEditedPatient] = useState({
//     name: '',
//     age: '',
//     gender: '',
//     appointment: '',
//     phone: '',
//     disease: '',
//     doctorName: '',
//     address: '',
//     status: ''
//   });

//   useEffect(() => {
//     fetchPatients();
//   }, []);

//   const fetchPatients = async () => {
//     try {
//       const response = await axios.get('/api/patients');
//       setPatients(response.data);
//     } catch (error) {
//       console.error('Error fetching patients:', error);
//     }
//   };

//   const addPatient = async () => {
//     try {
//       const response = await axios.post('/api/patients', editedPatient);
//       setPatients([...patients, response.data]);
//       setEditedPatient({
//         name: '',
//         age: '',
//         gender: '',
//         appointment: '',
//         phone: '',
//         disease: '',
//         doctorName: '',
//         address: '',
//         status: ''
//       });
//     } catch (error) {
//       console.error('Error adding patient:', error);
//     }
//   };

//   const handleChange = (e) => {
//     setEditedPatient({ ...editedPatient, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="patient-management">
//       <h2>Patient Management</h2>
//       <form onSubmit={(e) => {
//         e.preventDefault();
//         addPatient();
//       }}>
//         {/* Input fields */}
//         <button type="submit">Add Patient</button>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             {/* Table headers */}
//           </tr>
//         </thead>
//         <tbody>
//           {patients.map((patient, index) => (
//             <tr key={index}>
//               {/* Table data */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default PatientManagement;
// import React, { useState, useEffect } from 'react';
// import './PatientManagement.css';
// import axios from 'axios';

// function PatientManagement() {
//   const [patients, setPatients] = useState([]);
//   const [editedPatient, setEditedPatient] = useState({
//     name: '',
//     age: '',
//     gender: '',
//     appointment: '',
//     phone: '',
//     disease: '',
//     doctorName: '',
//     address: '',
//     status: ''
//   });

//   const fetchPatients = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/patients');
//       setPatients(response.data);
//     } catch (error) {
//       console.error('Error fetching patients:', error);
//     }
//   };

//   useEffect(() => {
//     fetchPatients();
//   }, []); // Dependency array is empty because fetchPatients doesn't have any dependencies

//   const addPatient = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/patients', editedPatient);
//       setPatients([...patients, response.data]);
//       setEditedPatient({
//         name: '',
//         age: '',
//         gender: '',
//         appointment: '',
//         phone: '',
//         disease: '',
//         doctorName: '',
//         address: '',
//         status: ''
//       });
//     } catch (error) {
//       console.error('Error adding patient:', error);
//     }
//   };

//   const handleChange = (e) => {
//     setEditedPatient({ ...editedPatient, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="patient-management">
//       <h2>Patient Management</h2>
//       <form onSubmit={(e) => {
//         e.preventDefault();
//         addPatient();
//       }}>
//         <input type="text" name="name" placeholder="Name" required value={editedPatient.name} onChange={handleChange} />
//         <input type="number" name="age" placeholder="Age" required value={editedPatient.age} onChange={handleChange} />
//         <select name="gender" required value={editedPatient.gender} onChange={handleChange}>
//           <option value="">Select Gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Other">Other</option>
//         </select>
//         <input type="date" name="appointment" placeholder="Appointment Date" required value={editedPatient.appointment} onChange={handleChange} />
//         <input type="tel" name="phone" placeholder="Phone" required value={editedPatient.phone} onChange={handleChange} />
//         <input type="text" name="disease" placeholder="Disease" required value={editedPatient.disease} onChange={handleChange} />
//         <input type="text" name="doctorName" placeholder="Doctor Name" required value={editedPatient.doctorName} onChange={handleChange} />
//         <input type="text" name="address" placeholder="Address" required value={editedPatient.address} onChange={handleChange} />
//         <select name="status" required value={editedPatient.status} onChange={handleChange}>
//           <option value="">Select Status</option>
//           <option value="Active">Active</option>
//           <option value="Inactive">Inactive</option>
//           <option value="Pending">Pending</option>
//         </select>
//         <button type="submit">Add Patient</button>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Gender</th>
//             <th>Appointment</th>
//             <th>Phone</th>
//             <th>Disease</th>
//             <th>Doctor Name</th>
//             <th>Address</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {patients.map((patient, index) => (
//             <tr key={index}>
//               <td>{patient.name}</td>
//               <td>{patient.age}</td>
//               <td>{patient.gender}</td>
//               <td>{patient.appointment}</td>
//               <td>{patient.phone}</td>
//               <td>{patient.disease}</td>
//               <td>{patient.doctorName}</td>
//               <td>{patient.address}</td>
//               <td>{patient.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default PatientManagement;
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import './PatientManagement.css';
import axios from 'axios';

function PatientManagement() {
  const [patients, setPatients] = useState([]);
  const [editedPatient, setEditedPatient] = useState({
    name: '',
    age: '',
    gender: '',
    appointment: '',
    phone: '',
    disease: '',
    doctorName: '',
    address: '',
    status: ''
  });

  useEffect(() => {
    fetchPatients();
  }, []); // Dependency array is empty because fetchPatients doesn't have any dependencies

  const fetchPatients = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/patients');
      setPatients(response.data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  const addPatient = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/patients', editedPatient);
      setPatients([...patients, response.data]);
      setEditedPatient({
        name: '',
        age: '',
        gender: '',
        appointment: '',
        phone: '',
        disease: '',
        doctorName: '',
        address: '',
        status: ''
      });
    } catch (error) {
      console.error('Error adding patient:', error);
    }
  };

  const deletePatient = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/patients/${id}`);
      const updatedPatients = patients.filter(patient => patient._id !== id);
      setPatients(updatedPatients);
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  const editPatient = (patient) => {
    setEditedPatient(patient);
  };

  const updatePatient = async () => {
    try {
      await axios.put(`http://localhost:5000/api/patients/${editedPatient._id}`, editedPatient);
      const updatedPatients = patients.map(patient => (patient._id === editedPatient._id ? editedPatient : patient));
      setPatients(updatedPatients);
      setEditedPatient({
        name: '',
        age: '',
        gender: '',
        appointment: '',
        phone: '',
        disease: '',
        doctorName: '',
        address: '',
        status: ''
      });
    } catch (error) {
      console.error('Error updating patient:', error);
    }
  };

  const handleChange = (e) => {
    setEditedPatient({ ...editedPatient, [e.target.name]: e.target.value });
  };

  return (
    <div className="patient-management">
      <h2>Patient Management</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        editedPatient._id ? updatePatient() : addPatient();
      }}>
        <input type="text" name="name" placeholder="Name" required value={editedPatient.name} onChange={handleChange} />
        <input type="number" name="age" placeholder="Age" required value={editedPatient.age} onChange={handleChange} />
        <select name="gender" required value={editedPatient.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input type="date" name="appointment" placeholder="Appointment Date" required value={editedPatient.appointment} onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone" required value={editedPatient.phone} onChange={handleChange} />
        <input type="text" name="disease" placeholder="Disease" required value={editedPatient.disease} onChange={handleChange} />
        <input type="text" name="doctorName" placeholder="Doctor Name" required value={editedPatient.doctorName} onChange={handleChange} />
        <input type="text" name="address" placeholder="Address" required value={editedPatient.address} onChange={handleChange} />
        <select name="status" required value={editedPatient.status} onChange={handleChange}>
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Pending">Pending</option>
        </select>
        <button type="submit">{editedPatient._id ? 'Update' : 'Add'} Patient</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Appointment</th>
            <th>Phone</th>
            <th>Disease</th>
            <th>Doctor Name</th>
            <th>Address</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.appointment}</td>
              <td>{patient.phone}</td>
              <td>{patient.disease}</td>
              <td>{patient.doctorName}</td>
              <td>{patient.address}</td>
              <td>{patient.status}</td>
              <td>
                <button onClick={() => deletePatient(patient._id)}>Delete</button>
                <button onClick={() => editPatient(patient)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientManagement;
