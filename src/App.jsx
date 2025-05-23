import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [graduationYear, setGraduationYear] = useState(0);
  const [program, setProgram] = useState("");
  const [graduated, setGraduated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudents = [
      ...students,
      {
        email,
        fullName,
        image,
        phone,
        graduationYear,
        graduated,
        program,
      },
    ];
    setStudents(newStudents);
    setEmail("");
    setPhone("");
    setFullName("");
    setGraduationYear(0);
    setImage("");
    setProgram("");
    setGraduated(false);
  };

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleProgram = (e) => {
    setProgram(e.target.value);
  };

  const handleGraduationYear = (e) => {
    setGraduationYear(e.target.value);
  };

  const handleGraduated = (e) => {
    setGraduated(e.target.checked);
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              onChange={handleFullName}
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={fullName}
            />
          </label>

          <label>
            Profile Image
            <input
              onChange={handleImage}
              name="image"
              type="url"
              placeholder="Profile Image"
              value={image}
            />
          </label>

          <label>
            Phone
            <input
              onChange={handlePhone}
              name="phone"
              type="tel"
              placeholder="Phone"
              value={phone}
            />
          </label>

          <label>
            Email
            <input
              onChange={handleEmail}
              name="email"
              type="email"
              value={email}
              placeholder="Email"
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={handleProgram} value={program}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              onChange={handleGraduationYear}
              value={graduationYear}
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input
              value={graduated}
              name="graduated"
              type="checkbox"
              onChange={handleGraduated}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
      {/* FORM END */}

      {/* TABLE/LIST HEADER */}
      <TableHeader />

      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
