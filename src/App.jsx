import React, { useState, useEffect } from "react";
import "./App.css";

const API_URL = "https://smarthire-backend-50ut.onrender.com";

const globalStyles = `
  * { box-sizing: border-box; }

  html {
    scroll-behavior: smooth;
    width: 100%;
    max-width: none;
    margin: 0;
    padding: 0;
  }

  body {
    width: 100%;
    min-width: 100%;
    max-width: none;
    margin: 0;
    padding: 0;
    background: #f5f7fb !important;
    color: #172033;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    max-width: none;
    margin: 0;
    padding: 0;
  }

  #root > div {
    width: 100%;
    min-height: 100vh;
    max-width: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button, input, textarea, select { font: inherit; }

  button { transition: transform .16s ease, filter .16s ease, box-shadow .16s ease; }

  button:hover:not(:disabled) {
    filter: brightness(.97);
    transform: translateY(-1px);
  }

  button:active:not(:disabled) {
    transform: translateY(0);
  }

  button:disabled {
    opacity: .65;
    cursor: not-allowed !important;
  }

  input:focus, textarea:focus, select:focus {
    outline: none;
    border-color: #4f46e5 !important;
    box-shadow: 0 0 0 3px rgba(79,70,229,.12);
  }

  a { transition: opacity .16s ease; }

  a:hover { opacity: .82; }

  @media (max-width: 760px) {

    /* =========================
      MOBILE HEADER
      ========================= */

    .sh-header {
      width: 100% !important;
      max-width: 100% !important;
      box-sizing: border-box !important;

      padding: 16px 18px !important;

      display: flex !important;
      flex-direction: column !important;
      align-items: stretch !important;

      gap: 12px !important;
      overflow: hidden !important;
    }


    /* =========================
      MOBILE MAIN
      ========================= */

    .sh-main {
      width: 100% !important;
      max-width: 100% !important;
      box-sizing: border-box !important;

      padding: 20px 14px !important;
    }


    /* =========================
      EMAIL + ROLE + LOGOUT
      ========================= */

    .sh-user-section {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;

      box-sizing: border-box !important;

      display: grid !important;
      grid-template-columns: minmax(0, 1fr) auto !important;

      align-items: center !important;

      gap: 8px !important;
    }


    /* Email */

    .sh-user-section > span:first-child {
      min-width: 0 !important;
      max-width: 100% !important;

      overflow: hidden !important;
      text-overflow: ellipsis !important;
      white-space: nowrap !important;
    }


    /* Student / Recruiter badge */

    .sh-user-section > span:nth-child(2) {
      flex-shrink: 0 !important;
      white-space: nowrap !important;
    }


    /* Logout */

    .sh-user-section > button {
      grid-column: 1 / -1 !important;

      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;

      box-sizing: border-box !important;

      margin: 0 !important;

      flex-shrink: 1 !important;
    }


    /* =========================
      TWO COLUMN SECTIONS
      ========================= */

    .sh-two-columns {
      width: 100% !important;
      max-width: 100% !important;

      grid-template-columns: 1fr !important;
    }


    /* =========================
      AVAILABLE JOBS
      ========================= */

    .sh-jobs-grid {
        display: grid !important;
        grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        width: 100% !important;
        max-width: 100% !important;
        gap: 16px !important;
    }


    /* Job card */

    .sh-job-card {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;

      box-sizing: border-box !important;
    }


    /* Prevent content from making cards wider */

    .sh-job-card * {
      max-width: 100% !important;
      box-sizing: border-box !important;
    }


    /* =========================
      SECTION HEADER
      ========================= */

    .sh-section-header {
      width: 100% !important;
      max-width: 100% !important;

      display: flex !important;
      flex-direction: row !important;

      align-items: center !important;
      justify-content: space-between !important;

      gap: 10px !important;

      margin-top: 8px !important;
      margin-bottom: 12px !important;
    }


    .sh-section-header h2 {
      min-width: 0 !important;
      margin: 0 !important;
    }


    .sh-section-header button {
      flex-shrink: 0 !important;
    }


    /* =========================
      APPLICATION CARDS
      ========================= */

    .sh-application-card {
      width: 100% !important;
      max-width: 100% !important;

      box-sizing: border-box !important;

      align-items: flex-start !important;
    }


    .sh-application-actions {
      width: 100% !important;
    }


    .sh-application-actions button {
      flex: 1 !important;
      min-width: 130px !important;

      box-sizing: border-box !important;
    }


    /* =========================
      LOGIN CARD
      ========================= */

    .sh-login-card {
      width: calc(100vw - 28px) !important;
      max-width: calc(100vw - 28px) !important;

      box-sizing: border-box !important;

      padding: 28px 22px !important;
    }

    /* =========================
      FULL SCREEN DASHBOARD
      ========================= */

    html,
    body,
    #root {
      width: 100% !important;
      max-width: none !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    #root > div {
      width: 100% !important;
      max-width: none !important;
      margin: 0 !important;
      padding: 0 !important;
      box-sizing: border-box !important;
    }

    .sh-header,
    .sh-main {
        width: 100% !important;
        max-width: none !important;
        min-width: 0 !important;
        box-sizing: border-box !important;
        margin: 0 !important;
    }

    .sh-main {
      padding: 24px !important;
    }

    /* ================================
      MOBILE JOB CARDS FIX
      ================================ */

    .sh-jobs-grid {
      display: grid !important;
      grid-template-columns: 1fr !important;
      width: 100% !important;
      gap: 16px !important;
    }

    .sh-jobs-grid > * {
      width: 100% !important;
      min-width: 0 !important;
      box-sizing: border-box !important;
    }

    .sh-two-columns {
      grid-template-columns: 1fr !important;
      width: 100% !important;
    }

    .sh-main {
      width: 100% !important;
      max-width: 100% !important;
      padding-left: 16px !important;
      padding-right: 16px !important;
      box-sizing: border-box !important;
    }

    /* Job card content */
    .sh-jobs-grid * {
      max-width: 100%;
      box-sizing: border-box;
    }

    /* Prevent job information from becoming extremely narrow */
    .sh-jobs-grid [style*="grid"] {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    }

    /* Allow text to wrap normally */
    .sh-jobs-grid span,
    .sh-jobs-grid div {
      overflow-wrap: anywhere;
      word-break: normal;
    }

  }

`;


function App() {

  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.setAttribute("data-smarthire-styles", "true");
    styleElement.textContent = globalStyles;
    document.head.appendChild(styleElement);

    return () => {
      styleElement.remove();
    };
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ==========================================
  // AUTHENTICATION PAGE
  // ==========================================

  const [authPage, setAuthPage] = useState("login");

  // Signup
  const [signupFullName, setSignupFullName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupRole, setSignupRole] = useState("STUDENT");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");

  // Forgot / Reset password
  const [resetEmail, setResetEmail] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // ==========================================
  // REGISTER / SIGN UP
  // ==========================================

  const handleSignup = async (e) => {

    e.preventDefault();

    setMessage("");

    if (signupPassword !== signupConfirmPassword) {

      setMessage("Passwords do not match");
      setMessageType("error");

      return;
    }

    if (signupPassword.length < 6) {

      setMessage("Password must be at least 6 characters");
      setMessageType("error");

      return;
    }

    try {

      const response = await fetch(
          API_URL + "/api/users/register",
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json"
            },

            body: JSON.stringify({
              fullName: signupFullName,
              email: signupEmail,
              password: signupPassword,
              role: signupRole
            })
          }
      );

      const data = await response.json();

      if (!response.ok) {

        throw new Error(
            data.message ||
            "Registration failed"
        );

      }

      console.log(
          "Registered user:",
          data
      );

      // Clear signup fields

      setSignupFullName("");
      setSignupEmail("");
      setSignupPassword("");
      setSignupConfirmPassword("");
      setSignupRole("STUDENT");

      setMessage(
          "Account created successfully. Please login."
      );

      setMessageType("success");

      setEmail(data.email || "");

      setPassword("");

      setAuthPage("login");

    } catch (error) {

      console.error(
          "Signup error:",
          error
      );

      setMessage(
          error.message ||
          "Registration failed"
      );

      setMessageType("error");

    }

  };

  // ==========================================
  // FORGOT PASSWORD
  // ==========================================

  const handleForgotPassword = async (e) => {

    e.preventDefault();

    setMessage("");

    try {

      const response = await fetch(
          API_URL + "/api/users/forgot-password",
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json"
            },

            body: JSON.stringify({
              email: resetEmail
            })
          }
      );

      const data = await response.text();

      if (!response.ok) {

        let errorMessage = data;

        try {

          const errorJson =
              JSON.parse(data);

          errorMessage =
              errorJson.message ||
              errorMessage;

        } catch {
          // Response was plain text
        }

        throw new Error(
            errorMessage ||
            "Unable to generate reset token"
        );

      }

      console.log(
          "Password reset token:",
          data
      );

      // Your backend currently RETURNS
      // the reset token directly.

      setResetToken(data);

      setMessage(
          "Reset token generated. Enter the token below."
      );

      setMessageType("success");

    } catch (error) {

      console.error(
          "Forgot password error:",
          error
      );

      setMessage(
          error.message ||
          "Unable to process forgot password"
      );

      setMessageType("error");

    }

  };

  // ==========================================
  // RESET PASSWORD
  // ==========================================

  const handleResetPassword = async (e) => {

    e.preventDefault();

    setMessage("");

    try {

      const response = await fetch(
          API_URL + "/api/users/reset-password",
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json"
            },

            body: JSON.stringify({
              token: resetToken,
              newPassword: newPassword
            })
          }
      );

      const data = await response.text();

      if (!response.ok) {

        let errorMessage = data;

        try {

          const errorJson =
              JSON.parse(data);

          errorMessage =
              errorJson.message ||
              errorMessage;

        } catch {
          // Response was plain text
        }

        throw new Error(
            errorMessage ||
            "Password reset failed"
        );

      }

      setMessage(
          data ||
          "Password reset successfully. Please login."
      );

      setMessageType("success");

      setNewPassword("");

      setResetToken("");

      setResetEmail("");

      // Go back to login after successful reset

      setTimeout(() => {

        setAuthPage("login");

      }, 1200);

    } catch (error) {

      console.error(
          "Reset password error:",
          error
      );

      setMessage(
          error.message ||
          "Password reset failed"
      );

      setMessageType("error");

    }

  };



  const [role, setRole] = useState("");
  const [userId, setUserId] = useState("");

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  // Student data
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [studentProfile, setStudentProfile] = useState(null);
  const [studentProfileLoading, setStudentProfileLoading] = useState(false);
  const [studentProfileEditing, setStudentProfileEditing] = useState(false);
  const [studentProfileForm, setStudentProfileForm] = useState({
    phone: "",
    branch: "",
    college: "",
    graduationYear: "",
    cgpa: "",
    skills: "",
    resumeUrl: ""
  });

  // Recruiter data
  const [recruiter, setRecruiter] = useState(null);
  const [recruiterJobs, setRecruiterJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobApplications, setJobApplications] = useState([]);

  // Student profile viewed by recruiter
  const [selectedStudentProfile, setSelectedStudentProfile] = useState(null);
  const [studentProfileViewLoading, setStudentProfileViewLoading] =
      useState(false);

  const [loading, setLoading] = useState(false);

  const [processingJobId, setProcessingJobId] =
      useState(null);

  const [processingApplicationId, setProcessingApplicationId] =
      useState(null);

  // ==========================================
  // JOB FORM
  // ==========================================

  const [jobForm, setJobForm] = useState({
    companyName: "",
    jobTitle: "",
    description: "",
    location: "",
    employmentType: "Full Time",
    minimumCgpa: "",
    eligibleBranches: "",
    requiredSkills: "",
    salary: ""
  });

  // ==========================================
  // CHECK LOGIN ON START
  // ==========================================

  useEffect(() => {

    const savedToken =
        localStorage.getItem("token");

    const savedRole =
        localStorage.getItem("role");

    const savedUserId =
        localStorage.getItem("userId");

    if (
        savedToken &&
        savedRole &&
        savedUserId
    ) {

      setIsLoggedIn(true);

      setRole(savedRole);

      setUserId(savedUserId);

      const savedEmail =
          localStorage.getItem("email");

      setEmail(savedEmail || "");

      if (savedRole === "STUDENT") {

        loadStudentData();

      }

      if (savedRole === "RECRUITER") {

        loadRecruiterData(
            Number(savedUserId)
        );

      }

    }

  }, []);

  // Keep the company name filled automatically for new jobs.
  useEffect(() => {
    if (recruiter && !selectedJob) {
      setJobForm(previous => ({
        ...previous,
        companyName:
          previous.companyName || recruiter.companyName || ""
      }));
    }
  }, [recruiter, selectedJob]);

  // ==========================================
  // LOGIN
  // ==========================================

  const handleLogin = async (e) => {

    e.preventDefault();

    setMessage("");

    try {

      const response = await fetch(
          API_URL + "/api/users/login",
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json"
            },

            body: JSON.stringify({
              email: email,
              password: password
            })
          }
      );

      const data =
          await response.json();

      if (!response.ok) {

        throw new Error(
            data.message ||
            "Login failed"
        );

      }

      // Save token
      localStorage.setItem(
          "token",
          data.token
      );

      // Save user ID
      localStorage.setItem(
          "userId",
          data.userId
      );

      // Save email
      localStorage.setItem(
          "email",
          data.email
      );

      // Read JWT
      const payload =
          JSON.parse(
              atob(
                  data.token.split(".")[1]
              )
          );

      const userRole =
          payload.role;

      localStorage.setItem(
          "role",
          userRole
      );

      setRole(userRole);

      setUserId(
          String(data.userId)
      );

      setIsLoggedIn(true);

      setMessage(
          "Login successful! Role: " + userRole
      );

      setMessageType("success");

      // ========================================
      // LOAD DASHBOARD
      // ========================================

      if (userRole === "STUDENT") {

        loadStudentData();

      }

      if (userRole === "RECRUITER") {

        loadRecruiterData(
            Number(data.userId)
        );

      }

    } catch (error) {

      console.error(
          "Login error:",
          error
      );

      setMessage(
          error.message ||
          "Failed to fetch"
      );

      setMessageType("error");

    }

  };

  // ==========================================
  // LOAD STUDENT DATA
  // ==========================================

  const loadStudentData = async () => {

    await loadJobs();

    await loadApplications();

    await loadStudentProfile();

  };

  // ==========================================
  // LOAD STUDENT PROFILE
  // ==========================================

  const loadStudentProfile = async () => {

    const savedToken =
        localStorage.getItem("token");

    const savedUserId =
        localStorage.getItem("userId");

    if (!savedToken || !savedUserId) {
      return;
    }

    setStudentProfileLoading(true);

    try {

      const response =
          await fetch(
              API_URL + "/api/students/user/" + savedUserId,
              {
                headers: {
                  Authorization:
                      "Bearer " + savedToken
                }
              }
          );

      const data =
          await response.json();

      if (!response.ok) {

        throw new Error(
            data.message ||
            "Student profile not found"
        );

      }

      setStudentProfile(data);

      setStudentProfileForm({
        phone: data.phone || "",
        branch: data.branch || "",
        college: data.college || "",
        graduationYear:
            data.graduationYear ?? "",
        cgpa: data.cgpa ?? "",
        skills: data.skills || "",
        resumeUrl: data.resumeUrl || ""
      });

    } catch (error) {

      console.error(
          "Student profile error:",
          error
      );

      setStudentProfile(null);

    } finally {

      setStudentProfileLoading(false);

    }

  };

  // ==========================================
  // STUDENT PROFILE FORM
  // ==========================================

  const handleStudentProfileChange =
      (e) => {

        const {
          name,
          value
        } = e.target;

        setStudentProfileForm(
            previous => ({
              ...previous,
              [name]: value
            })
        );

      };

  const saveStudentProfile = async (e) => {

    e.preventDefault();

    const savedToken =
        localStorage.getItem("token");

    if (!savedToken || !studentProfile) {
      showMessage(
          "Student profile is not loaded",
          "error"
      );
      return;
    }

    try {

      const response =
          await fetch(
              API_URL + "/api/students/" + studentProfile.id,
              {
                method: "PUT",

                headers: {
                  "Content-Type":
                      "application/json",

                  Authorization:
                      "Bearer " + savedToken
                },

                body: JSON.stringify({
                  phone:
                      studentProfileForm.phone,

                  branch:
                      studentProfileForm.branch,

                  college:
                      studentProfileForm.college,

                  graduationYear:
                      studentProfileForm.graduationYear
                          ? Number(
                              studentProfileForm.graduationYear
                            )
                          : null,

                  cgpa:
                      studentProfileForm.cgpa
                          ? Number(
                              studentProfileForm.cgpa
                            )
                          : null,

                  skills:
                      studentProfileForm.skills,

                  resumeUrl:
                      studentProfileForm.resumeUrl
                })
              }
          );

      const data =
          await response.json();

      if (!response.ok) {

        throw new Error(
            data.message ||
            "Failed to update student profile"
        );

      }

      setStudentProfile(data);

      setStudentProfileEditing(false);

      showMessage(
          "Student profile updated successfully"
      );

    } catch (error) {

      console.error(
          "Update student profile error:",
          error
      );

      showMessage(
          error.message ||
          "Failed to update student profile",
          "error"
      );

    }

  };

  // ==========================================
  // LOAD ALL JOBS
  // ==========================================

  const loadJobs = async () => {

    const savedToken =
        localStorage.getItem("token");

    try {

        const response =
            await fetch(
                API_URL + "/api/jobs",
                {
                    method: "GET",
                    headers: {
                        Authorization:
                            `Bearer ${savedToken}`
                    }
                }
            );

        if (!response.ok) {

            throw new Error(
                `Failed to load jobs (${response.status})`
            );

        }

        const data =
            await response.json();

        setJobs(
            Array.isArray(data)
                ? data
                : []
        );

    } catch (error) {

        console.error(
            "Jobs error:",
            error
        );

        setJobs([]);

        showMessage(
            "Unable to load jobs",
            "error"
        );
    }
};

  // ==========================================
  // LOAD STUDENT APPLICATIONS
  // ==========================================

  const loadApplications = async () => {

    const savedToken =
        localStorage.getItem("token");

    const savedUserId =
        localStorage.getItem("userId");

    if (
        !savedToken ||
        !savedUserId
    ) {
      return;
    }

    try {

      const response =
          await fetch(
              API_URL + "/api/applications/user/" + savedUserId,
              {
                headers: {
                  Authorization:
                      "Bearer " + savedToken
                }
              }
          );

      if (!response.ok) {

        throw new Error(
            "Failed to load applications"
        );

      }

      const data =
          await response.json();

      setApplications(data);

    } catch (error) {

      console.error(
          "Applications error:",
          error
      );

    }

  };

  // ==========================================
  // LOAD RECRUITER DATA
  // ==========================================

  const loadRecruiterData =
      async (currentUserId) => {

        const savedToken =
            localStorage.getItem("token");

        if (!savedToken) {
          return;
        }

        try {

          // --------------------------------------
          // Get recruiter profile
          // --------------------------------------

          const recruiterResponse =
              await fetch(
                  API_URL + "/api/recruiters/user/" + currentUserId,
                  {
                    headers: {
                      Authorization:
                          "Bearer " + savedToken
                    }
                  }
              );

          if (!recruiterResponse.ok) {

            throw new Error(
                "Recruiter profile not found"
            );

          }

          const recruiterData =
              await recruiterResponse.json();

          setRecruiter(
              recruiterData
          );

          // --------------------------------------
          // Get recruiter jobs
          // --------------------------------------

          await loadRecruiterJobs(
              recruiterData.id
          );

        } catch (error) {

          console.error(
              "Recruiter loading error:",
              error
          );

          showMessage(
              error.message ||
              "Unable to load recruiter data",
              "error"
          );

        }

      };

  // ==========================================
  // LOAD RECRUITER JOBS
  // ==========================================

  const loadRecruiterJobs =
      async (recruiterId) => {

        const savedToken =
            localStorage.getItem("token");

        try {

          const response =
              await fetch(
                  API_URL + "/api/jobs/recruiter/" + recruiterId,
                  {
                    headers: {
                      Authorization:
                          "Bearer " + savedToken
                    }
                  }
              );

          if (!response.ok) {

            throw new Error(
                "Failed to load recruiter jobs"
            );

          }

          const data =
              await response.json();

          setRecruiterJobs(data);

        } catch (error) {

          console.error(
              "Recruiter jobs error:",
              error
          );

          showMessage(
              "Unable to load your jobs",
              "error"
          );

        }

      };

  // ==========================================
  // SHOW MESSAGE
  // ==========================================

  const showMessage =
      (text, type = "success") => {

        setMessage(text);

        setMessageType(type);

      };

  // ==========================================
  // CREATE / UPDATE JOB
  // ==========================================

  const handleJobFormChange =
      (e) => {

        const {
          name,
          value
        } = e.target;

        setJobForm(
            previous => ({
              ...previous,
              [name]: value
            })
        );

      };

  const resetJobForm = () => {

    setJobForm({
      companyName:
          recruiter?.companyName || "",

      jobTitle: "",

      description: "",

      location: "",

      employmentType:
          "Full Time",

      minimumCgpa: "",

      eligibleBranches: "",

      requiredSkills: "",

      salary: ""
    });

    setSelectedJob(null);

  };

  const saveJob = async (e) => {

    e.preventDefault();

    const savedToken =
        localStorage.getItem("token");

    if (!recruiter) {

      showMessage(
          "Recruiter profile not loaded",
          "error"
      );

      return;

    }

    setLoading(true);

    try {

      const body = {

        recruiterId:
        recruiter.id,

        companyName:
        jobForm.companyName,

        jobTitle:
        jobForm.jobTitle,

        description:
        jobForm.description,

        location:
        jobForm.location,

        employmentType:
        jobForm.employmentType,

        minimumCgpa:
            jobForm.minimumCgpa
                ? Number(jobForm.minimumCgpa)
                : null,

        eligibleBranches:
        jobForm.eligibleBranches,

        requiredSkills:
        jobForm.requiredSkills,

        salary:
        jobForm.salary

      };

      let url =
          API_URL + "/api/jobs";

      let method = "POST";

      if (selectedJob) {

        url =
            API_URL + "/api/jobs/" + selectedJob.id;

        method = "PUT";

      }

      const response =
          await fetch(
              url,
              {
                method,

                headers: {
                  "Content-Type":
                      "application/json",

                  Authorization:
                      "Bearer " + savedToken
                },

                body:
                    JSON.stringify(body)
              }
          );

      const data =
          await response.json();

      if (!response.ok) {

        throw new Error(
            data.message ||
            "Failed to save job"
        );

      }

      showMessage(
          selectedJob
              ? "Job updated successfully"
              : "Job created successfully"
      );

      resetJobForm();

      await loadRecruiterJobs(
          recruiter.id
      );

    } catch (error) {

      console.error(
          "Save job error:",
          error
      );

      showMessage(
          error.message ||
          "Failed to save job",
          "error"
      );

    } finally {

      setLoading(false);

    }

  };

  // ==========================================
  // EDIT JOB
  // ==========================================

  const editJob = (job) => {

    setSelectedJob(job);

    setJobForm({

      companyName:
          job.companyName || "",

      jobTitle:
          job.jobTitle || "",

      description:
          job.description || "",

      location:
          job.location || "",

      employmentType:
          job.employmentType ||
          "Full Time",

      minimumCgpa:
          job.minimumCgpa ?? "",

      eligibleBranches:
          job.eligibleBranches || "",

      requiredSkills:
          job.requiredSkills || "",

      salary:
          job.salary || ""

    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };

  // ==========================================
  // DELETE JOB
  // ==========================================

  const deleteJob = async (jobId) => {

    const confirmed =
        window.confirm(
            "Are you sure you want to delete this job?"
        );

    if (!confirmed) {
      return;
    }

    const savedToken =
        localStorage.getItem("token");

    setProcessingJobId(jobId);

    try {

      const response =
          await fetch(
              API_URL + "/api/jobs/" + jobId,
              {
                method: "DELETE",

                headers: {
                  Authorization:
                      "Bearer " + savedToken
                }
              }
          );

      if (!response.ok) {

        const text =
            await response.text();

        throw new Error(
            text ||
            "Failed to delete job"
        );

      }

      showMessage(
          "Job deleted successfully"
      );

      await loadRecruiterJobs(
          recruiter.id
      );

    } catch (error) {

      console.error(
          "Delete job error:",
          error
      );

      showMessage(
          error.message ||
          "Failed to delete job",
          "error"
      );

    } finally {

      setProcessingJobId(null);

    }

  };

  // ==========================================
  // VIEW APPLICATIONS
  // ==========================================

  const viewApplications =
      async (job) => {

        const savedToken =
            localStorage.getItem("token");

        setSelectedJob(job);

        try {

          const response =
              await fetch(
                  API_URL + "/api/applications/job/" + job.id,
                  {
                    headers: {
                      Authorization:
                          "Bearer " + savedToken
                    }
                  }
              );

          if (!response.ok) {

            throw new Error(
                "Failed to load applications"
            );

          }

          const data =
              await response.json();

          setJobApplications(data);

          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });

        } catch (error) {

          console.error(
              "View applications error:",
              error
          );

          showMessage(
              "Unable to load applications",
              "error"
          );

        }

      };

  // ==========================================
// VIEW STUDENT PROFILE
// ==========================================

  const viewStudentProfile = async (studentUserId) => {

    const savedToken =
        localStorage.getItem("token");

    if (!savedToken) {

      showMessage(
          "Please login again",
          "error"
      );

      return;
    }

    setStudentProfileViewLoading(true);

    try {

      const response =
          await fetch(
              API_URL + "/api/students/user/" + studentUserId,
              {
                method: "GET",

                headers: {
                  "Authorization":
                      "Bearer " + savedToken,
                  "Accept":
                      "application/json"
                }
              }
          );

      // Read response safely as text first.
      const responseText =
          await response.text();

      console.log(
          "Student profile status:",
          response.status
      );

      console.log(
          "Student profile response:",
          responseText
      );

      // Empty response
      if (!responseText.trim()) {

        throw new Error(
            "Server returned an empty response (HTTP " + response.status + ")"
        );

      }

      // Convert text to JSON safely
      let data;

      try {

        data =
            JSON.parse(responseText);

      } catch (jsonError) {

        console.error(
            "Invalid JSON from student profile API:",
            responseText
        );

        throw new Error(
            "Server returned invalid JSON (HTTP " + response.status + ")"
        );

      }

      // Handle HTTP errors
      if (!response.ok) {

        throw new Error(
            data.message ||
            "Failed to load student profile (HTTP " + response.status + ")"
        );

      }

      // Successful response
      setSelectedStudentProfile(data);

    } catch (error) {

      console.error(
          "View student profile error:",
          error
      );

      showMessage(
          error.message ||
          "Unable to load student profile",
          "error"
      );

    } finally {

      setStudentProfileViewLoading(false);

    }
  };

  const updateApplicationStatus =
      async (
          applicationId,
          status
      ) => {

        const savedToken =
            localStorage.getItem("token");

        setProcessingApplicationId(
            applicationId
        );

        try {

          const response =
              await fetch(
                  API_URL + "/api/applications/" + applicationId + "/status?status=" + status,
                  {
                    method: "PUT",

                    headers: {
                      Authorization:
                          "Bearer " + savedToken
                    }
                  }
              );

          const data =
              await response.json();

          if (!response.ok) {

            throw new Error(
                data.message ||
                "Failed to update status"
            );

          }

          setJobApplications(
              previous =>
                  previous.map(
                      application =>
                          application.id ===
                          applicationId
                              ? data
                              : application
                  )
          );

          showMessage(
              "Application " + status.toLowerCase() + " successfully"
          );

        } catch (error) {

          console.error(
              "Status update error:",
              error
          );

          showMessage(
              error.message ||
              "Failed to update status",
              "error"
          );

        } finally {

          setProcessingApplicationId(
              null
          );

        }

      };

  // ==========================================
  // LOGOUT
  // ==========================================

  const handleLogout = () => {

    localStorage.removeItem(
        "token"
    );

    localStorage.removeItem(
        "userId"
    );

    localStorage.removeItem(
        "email"
    );

    localStorage.removeItem(
        "role"
    );

    setIsLoggedIn(false);

    setRole("");

    setUserId("");

    setRecruiter(null);

    setSelectedStudentProfile(null);
    setStudentProfileViewLoading(false);

    setJobs([]);

    setApplications([]);

    setStudentProfile(null);

    setStudentProfileEditing(false);

    setStudentProfileForm({
      phone: "",
      branch: "",
      college: "",
      graduationYear: "",
      cgpa: "",
      skills: "",
      resumeUrl: ""
    });

    setRecruiterJobs([]);

    setJobApplications([]);

    setMessage("");

  };

  // ==========================================
  // AUTHENTICATION PAGE
  // ==========================================

  if (!isLoggedIn) {

    return (

      <div
          style={styles.page}
          className="sh-page"
      >

        <div
            style={styles.card}
            className="sh-login-card"
        >

          {/* ==================================
              LOGIN
          ================================== */}

          {authPage === "login" && (

            <>

              <h1 style={styles.title}>
                SmartHire
              </h1>

              <p style={styles.subtitle}>
                Student & Recruiter Job Portal
              </p>

              <form onSubmit={handleLogin}>

                <div style={styles.formGroup}>

                  <label style={styles.label}>
                    Email
                  </label>

                  <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={
                        e =>
                            setEmail(
                                e.target.value
                            )
                      }
                      required
                      style={styles.input}
                  />

                </div>

                <div style={styles.formGroup}>

                  <label style={styles.label}>
                    Password
                  </label>

                  <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={
                        e =>
                            setPassword(
                                e.target.value
                            )
                      }
                      required
                      style={styles.input}
                  />

                </div>

                <button
                    type="submit"
                    style={styles.button}
                >
                  Login
                </button>

              </form>

              <div style={styles.authLinks}>

                <button
                    type="button"
                    onClick={() => {

                      setMessage("");

                      setResetEmail(email);

                      setAuthPage("forgot");

                    }}
                    style={styles.linkButton}
                >
                  Forgot Password?
                </button>

                <div style={styles.signupPrompt}>

                  <span>
                    Don't have an account?
                  </span>

                  <button
                      type="button"
                      onClick={() => {

                        setMessage("");

                        setAuthPage("signup");

                      }}
                      style={styles.linkButton}
                  >
                    Sign Up
                  </button>

                </div>

              </div>

            </>

          )}

          {/* ==================================
              SIGN UP
          ================================== */}

          {authPage === "signup" && (

            <>

              <h1 style={styles.title}>
                Create Account
              </h1>

              <p style={styles.subtitle}>
                Join SmartHire
              </p>

              <form onSubmit={handleSignup}>

                <div style={styles.formGroup}>

                  <label style={styles.label}>
                    Full Name
                  </label>

                  <input
                      type="text"
                      placeholder="Enter your full name"
                      value={signupFullName}
                      onChange={
                        e =>
                            setSignupFullName(
                                e.target.value
                            )
                      }
                      required
                      style={styles.input}
                  />

                </div>

                <div style={styles.formGroup}>

                  <label style={styles.label}>
                    Email
                  </label>

                  <input
                      type="email"
                      placeholder="Enter your email"
                      value={signupEmail}
                      onChange={
                        e =>
                            setSignupEmail(
                                e.target.value
                            )
                      }
                      required
                      style={styles.input}
                  />

                </div>

                <div style={styles.formGroup}>

                  <label style={styles.label}>
                    Password
                  </label>

                  <input
                      type="password"
                      placeholder="Minimum 6 characters"
                      value={signupPassword}
                      onChange={
                        e =>
                            setSignupPassword(
                                e.target.value
                            )
                      }
                      required
                      minLength={6}
                      style={styles.input}
                  />

                </div>

                <div style={styles.formGroup}>

                  <label style={styles.label}>
                    Confirm Password
                  </label>

                  <input
                      type="password"
                      placeholder="Confirm your password"
                      value={signupConfirmPassword}
                      onChange={
                        e =>
                            setSignupConfirmPassword(
                                e.target.value
                            )
                      }
                      required
                      minLength={6}
                      style={styles.input}
                  />

                </div>

                <div style={styles.formGroup}>

                  <label style={styles.label}>
                    Account Type
                  </label>

                  <select
                      value={signupRole}
                      onChange={
                        e =>
                            setSignupRole(
                                e.target.value
                            )
                      }
                      style={styles.input}
                  >

                    <option value="STUDENT">
                      Student
                    </option>

                    <option value="RECRUITER">
                      Recruiter
                    </option>

                  </select>

                </div>

                <button
                    type="submit"
                    style={styles.button}
                >
                  Create Account
                </button>

              </form>

              <div style={styles.authLinks}>

                <button
                    type="button"
                    onClick={() => {

                      setMessage("");

                      setAuthPage("login");

                    }}
                    style={styles.linkButton}
                >
                  ← Back to Login
                </button>

              </div>

            </>

          )}

          {/* ==================================
              FORGOT PASSWORD
          ================================== */}

          {authPage === "forgot" && (

            <>

              <h1 style={styles.title}>
                Forgot Password
              </h1>

              <p style={styles.subtitle}>
                Enter your registered email
              </p>

              <form onSubmit={handleForgotPassword}>

                <div style={styles.formGroup}>

                  <label style={styles.label}>
                    Email
                  </label>

                  <input
                      type="email"
                      placeholder="Enter your registered email"
                      value={resetEmail}
                      onChange={
                        e =>
                            setResetEmail(
                                e.target.value
                            )
                      }
                      required
                      style={styles.input}
                  />

                </div>

                <button
                    type="submit"
                    style={styles.button}
                >
                  Generate Reset Token
                </button>

              </form>

              {resetToken && (

                <div style={styles.resetTokenBox}>

                  <p style={styles.resetTokenTitle}>
                    Reset Token
                  </p>

                  <input
                      type="text"
                      value={resetToken}
                      onChange={
                        e =>
                            setResetToken(
                                e.target.value
                            )
                      }
                      style={styles.input}
                  />

                  <p style={styles.resetTokenHint}>
                    This token is valid for 15 minutes.
                  </p>

                </div>

              )}

              {resetToken && (

                <form
                    onSubmit={handleResetPassword}
                    style={{
                      marginTop: "18px"
                    }}
                >

                  <div style={styles.formGroup}>

                    <label style={styles.label}>
                      New Password
                    </label>

                    <input
                        type="password"
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={
                          e =>
                              setNewPassword(
                                  e.target.value
                              )
                        }
                        required
                        minLength={6}
                        style={styles.input}
                    />

                  </div>

                  <button
                      type="submit"
                      style={styles.button}
                  >
                    Reset Password
                  </button>

                </form>

              )}

              <div style={styles.authLinks}>

                <button
                    type="button"
                    onClick={() => {

                      setMessage("");

                      setAuthPage("login");

                    }}
                    style={styles.linkButton}
                >
                  ← Back to Login
                </button>

              </div>

            </>

          )}

          {/* ==================================
              MESSAGE
          ================================== */}

          {message && (

            <p
                style={{
                  ...styles.message,

                  color:
                      messageType === "error"
                          ? "#dc2626"
                          : "#16a34a"
                }}
            >
              {message}
            </p>

          )}

        </div>

      </div>

    );

  }

  // ==========================================
  // RECRUITER DASHBOARD
  // ==========================================

  if (role === "RECRUITER") {

    return (

        <div style={styles.dashboard}>

          <header style={styles.header} className="sh-header">

            <div>

              <h1 style={styles.logo}>
                SmartHire
              </h1>

              <p style={styles.headerSubtitle}>
                Recruiter Dashboard
              </p>

            </div>

            <div style={styles.userSection} className="sh-user-section">

            <span>
              {email}
            </span>

              <span
                  style={styles.roleBadge}
              >
              RECRUITER
            </span>

              <button
                  onClick={handleLogout}
                  style={styles.logoutButton}
              >
                Logout
              </button>

            </div>

          </header>

          <main style={styles.main} className="sh-main">

            {/* MESSAGE */}

            {message && (

                <div
                    style={{
                      ...styles.alert,

                      background:
                          messageType === "error"
                              ? "#fee2e2"
                              : "#dcfce7",

                      color:
                          messageType === "error"
                              ? "#991b1b"
                              : "#166534"
                    }}
                >
                  {message}
                </div>

            )}

            {/* RECRUITER INFO */}

            {recruiter && (

                <div
                    style={styles.welcomeCard}
                >

                  <h2>
                    Welcome, {email} 👋
                  </h2>

                  <p>
                    Company:
                    {" "}
                    <strong>
                      {recruiter.companyName}
                    </strong>
                  </p>

                  <p>
                    Recruiter ID:
                    {" "}
                    <strong>
                      {recruiter.id}
                    </strong>
                  </p>

                </div>

            )}

            {/* CREATE / EDIT JOB */}

            <section
                style={
                  styles.formSection
                }
            >

              <div
                  style={
                    styles.sectionHeader
                  }
              >

                <h2
                    style={styles.sectionTitle}
                >
                  {selectedJob &&
                  selectedJob.id
                      ? "Edit Job"
                      : "Create New Job"}
                </h2>

                {selectedJob &&
                    selectedJob.id && (

                        <button
                            onClick={
                              resetJobForm
                            }
                            style={
                              styles.secondaryButton
                            }
                        >
                          Cancel Edit
                        </button>

                    )}

              </div>

              <form
                  onSubmit={saveJob}
                  style={styles.jobForm}
              >

                <div style={styles.twoColumns} className="sh-two-columns">

                  <div>

                    <label style={styles.label}>
                      Company Name
                    </label>

                    <input
                        name="companyName"
                        value={
                          jobForm.companyName
                        }
                        onChange={
                          handleJobFormChange
                        }
                        required
                        style={styles.input}
                    />

                  </div>

                  <div>

                    <label style={styles.label}>
                      Job Title
                    </label>

                    <input
                        name="jobTitle"
                        value={
                          jobForm.jobTitle
                        }
                        onChange={
                          handleJobFormChange
                        }
                        placeholder="Java Backend Developer"
                        required
                        style={styles.input}
                    />

                  </div>

                </div>

                <label style={styles.label}>
                  Description
                </label>

                <textarea
                    name="description"
                    value={
                      jobForm.description
                    }
                    onChange={
                      handleJobFormChange
                    }
                    required
                    rows="4"
                    style={
                      styles.textarea
                    }
                />

                <div style={styles.twoColumns} className="sh-two-columns">

                  <div>

                    <label style={styles.label}>
                      Location
                    </label>

                    <input
                        name="location"
                        value={
                          jobForm.location
                        }
                        onChange={
                          handleJobFormChange
                        }
                        placeholder="Hyderabad"
                        required
                        style={styles.input}
                    />

                  </div>

                  <div>

                    <label style={styles.label}>
                      Employment Type
                    </label>

                    <select
                        name="employmentType"
                        value={
                          jobForm.employmentType
                        }
                        onChange={
                          handleJobFormChange
                        }
                        style={
                          styles.input
                        }
                    >

                      <option>
                        Full Time
                      </option>

                      <option>
                        Part Time
                      </option>

                      <option>
                        Internship
                      </option>

                    </select>

                  </div>

                </div>

                <div style={styles.twoColumns} className="sh-two-columns">

                  <div>

                    <label style={styles.label}>
                      Minimum CGPA
                    </label>

                    <input
                        type="number"
                        step="0.1"
                        name="minimumCgpa"
                        value={
                          jobForm.minimumCgpa
                        }
                        onChange={
                          handleJobFormChange
                        }
                        placeholder="7.5"
                        style={
                          styles.input
                        }
                    />

                  </div>

                  <div>

                    <label style={styles.label}>
                      Salary
                    </label>

                    <input
                        name="salary"
                        value={
                          jobForm.salary
                        }
                        onChange={
                          handleJobFormChange
                        }
                        placeholder="8 LPA"
                        style={
                          styles.input
                        }
                    />

                  </div>

                </div>

                <label style={styles.label}>
                  Eligible Branches
                </label>

                <input
                    name="eligibleBranches"
                    value={
                      jobForm.eligibleBranches
                    }
                    onChange={
                      handleJobFormChange
                    }
                    placeholder="CSE, IT"
                    style={
                      styles.input
                    }
                />

                <label style={styles.label}>
                  Required Skills
                </label>

                <input
                    name="requiredSkills"
                    value={
                      jobForm.requiredSkills
                    }
                    onChange={
                      handleJobFormChange
                    }
                    placeholder="Java, Spring Boot, MySQL"
                    style={
                      styles.input
                    }
                />

                <button
                    type="submit"
                    disabled={loading}
                    style={
                      styles.primaryButton
                    }
                >

                  {loading
                      ? "Saving..."
                      : selectedJob
                          ? "Update Job"
                          : "Create Job"}

                </button>

              </form>

            </section>

            {/* MY JOBS */}

            <section
                style={
                  styles.jobsSection
                }
            >

              <div
                  style={
                    styles.sectionHeader
                  }
              >

                <h2
                    style={styles.sectionTitle}
                >
                  My Jobs
                </h2>

                <button
                    onClick={async () => {
                      if (!recruiter) {
                        showMessage(
                            "Recruiter profile not loaded",
                            "error"
                        );
                        return;
                      }

                      await loadRecruiterJobs(
                          recruiter.id
                      );
                    }}
                    style={
                      styles.refreshButton
                    }
                    type="button"
                >
                  Refresh
                </button>

              </div>

              {recruiterJobs.length === 0 ? (

                  <div
                      style={
                        styles.emptyCard
                      }
                  >
                    You haven't created
                    any jobs yet.
                  </div>

              ) : (

                  <div
                      className="sh-jobs-grid"
                      style={styles.jobsGrid}
                  >

                    {recruiterJobs.map(
                        job => (

                            <div
                                key={job.id}
                                style={styles.jobCard}
                            >

                              <div
                                  style={styles.jobCardHeader}
                              >
                                <div>
                                  <h3
                                      style={styles.jobTitle}
                                  >
                                    {job.jobTitle || "Untitled Job"}
                                  </h3>

                                  <p
                                      style={styles.company}
                                  >
                                    {job.companyName || "Company not specified"}
                                  </p>
                                </div>
                              </div>

                              <div
                                  style={styles.jobMetaGrid}
                              >
                                <div style={styles.jobMetaItem}>
                                  <span style={styles.jobMetaLabel}>
                                    Location
                                  </span>
                                  <span style={styles.jobMetaValue}>
                                    📍 {job.location || "Not specified"}
                                  </span>
                                </div>

                                <div style={styles.jobMetaItem}>
                                  <span style={styles.jobMetaLabel}>
                                    Employment
                                  </span>
                                  <span style={styles.jobMetaValue}>
                                    💼 {job.employmentType || "Not specified"}
                                  </span>
                                </div>

                                <div style={styles.jobMetaItem}>
                                  <span style={styles.jobMetaLabel}>
                                    Salary
                                  </span>
                                  <span style={styles.jobMetaValue}>
                                      💰 {job.salary
                                        ? (String(job.salary).toLowerCase().includes("lpa")
                                            ? job.salary
                                            : `₹${(Number(job.salary) / 100000).toFixed(1).replace(".0", "")} LPA`)
                                        : "Not specified"}
                                  </span>
                                </div>

                                {job.minimumCgpa && (
                                  <div style={styles.jobMetaItem}>
                                    <span style={styles.jobMetaLabel}>
                                      Minimum CGPA
                                    </span>
                                    <span style={styles.jobMetaValue}>
                                      🎓 {job.minimumCgpa}
                                    </span>
                                  </div>
                                )}

                                {job.eligibleBranches && (
                                  <div style={styles.jobMetaItem}>
                                    <span style={styles.jobMetaLabel}>
                                      Eligible Branches
                                    </span>
                                    <span style={styles.jobMetaValue}>
                                      📚 {job.eligibleBranches}
                                    </span>
                                  </div>
                                )}

                                {job.requiredSkills && (
                                  <div style={styles.jobMetaItem}>
                                    <span style={styles.jobMetaLabel}>
                                      Required Skills
                                    </span>
                                    <span style={styles.jobMetaValue}>
                                      🛠 {job.requiredSkills}
                                    </span>
                                  </div>
                                )}
                              </div>

                              {job.description && (
                                <div
                                    style={styles.descriptionBox}
                                >
                                  <span style={styles.descriptionLabel}>
                                    Job Description
                                  </span>

                                  <p
                                      style={styles.description}
                                  >
                                    {job.description}
                                  </p>
                                </div>
                              )}

                              <div
                                  style={styles.buttonRow}
                              >
                                <button
                                    type="button"
                                    onClick={() =>
                                        editJob(job)
                                    }
                                    style={styles.editButton}
                                >
                                  Edit Job
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        deleteJob(job.id)
                                    }
                                    disabled={
                                        processingJobId === job.id
                                    }
                                    style={styles.deleteButton}
                                >
                                  {processingJobId === job.id
                                      ? "Deleting..."
                                      : "Delete Job"}
                                </button>
                              </div>

                              <button
                                  type="button"
                                  onClick={() =>
                                      viewApplications(job)
                                  }
                                  style={styles.viewApplicationsButton}
                              >
                                View Applications
                              </button>

                            </div>

                        )
                    )}

                  </div>

              )}

            </section>

            {/* APPLICATIONS */}

            {selectedJob &&
                jobApplications && (

                    <section
                        style={
                          styles.applicationsSection
                        }
                    >

                      <div
                          style={
                            styles.sectionHeader
                          }
                      >

                        <h2>
                          Applications for{" "}
                          {selectedJob.jobTitle}
                        </h2>

                        <button
                            onClick={() => {
                              setJobApplications(
                                  []
                              );
                              setSelectedJob(
                                  null
                              );
                            }}
                            style={
                              styles.secondaryButton
                            }
                        >
                          Close
                        </button>

                      </div>

                      {jobApplications.length ===
                      0 ? (

                          <div
                              style={
                                styles.emptyCard
                              }
                          >
                            No applications
                            for this job yet.
                          </div>

                      ) : (

                          <div
                              style={
                                styles.applicationList
                              }
                          >

                            {jobApplications.map(application => (
                                <div
                                    key={application.id}
                                    style={styles.applicationCard}
                                >

                                  <div style={styles.applicationInfo}>

                                    <h3 style={styles.applicationTitle}>
                                      Application #{application.id}
                                    </h3>

                                    <div style={styles.applicationDetail}>
                                      <span style={styles.applicationLabel}>
                                        Student User ID
                                      </span>

                                      <strong>
                                        {application.userId}
                                      </strong>
                                    </div>

                                    <div style={styles.applicationDetail}>
                                      <span style={styles.applicationLabel}>
                                        Status
                                      </span>

                                      <span
                                          style={{
                                            ...styles.statusBadge,
                                            ...(application.status === "Accepted"
                                                ? styles.acceptedStatus
                                                : application.status === "Rejected"
                                                    ? styles.rejectedStatus
                                                    : styles.appliedStatus)
                                          }}
                                      >
                                        {application.status}
                                      </span>
                                    </div>

                                  </div>

                                  <div style={styles.applicationActions} className="sh-application-actions">

                                    <button
                                        onClick={() =>
                                            viewStudentProfile(
                                                application.userId
                                            )
                                        }
                                        disabled={
                                            studentProfileViewLoading
                                        }
                                        style={
                                          styles.viewStudentProfileButton
                                        }
                                    >
                                      {studentProfileViewLoading
                                          ? "Loading..."
                                          : "View Student Profile"}
                                    </button>

                                    <button
                                        onClick={() =>
                                            updateApplicationStatus(
                                                application.id,
                                                "Accepted"
                                            )
                                        }
                                        disabled={
                                            processingApplicationId ===
                                            application.id
                                        }
                                        style={
                                          styles.acceptButton
                                        }
                                    >
                                      {processingApplicationId ===
                                      application.id
                                          ? "Updating..."
                                          : "Accept"}
                                    </button>

                                    <button
                                        onClick={() =>
                                            updateApplicationStatus(
                                                application.id,
                                                "Rejected"
                                            )
                                        }
                                        disabled={
                                            processingApplicationId ===
                                            application.id
                                        }
                                        style={
                                          styles.rejectButton
                                        }
                                    >
                                      {processingApplicationId ===
                                      application.id
                                          ? "Updating..."
                                          : "Reject"}
                                    </button>

                                  </div>

                                </div>
                            ))}

                          </div>

                      )}

                    </section>

                )}

            {/* ==========================================
                STUDENT PROFILE POPUP
            ========================================== */}

            {selectedStudentProfile && (

                <div
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "rgba(0,0,0,0.5)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      zIndex: 1000,
                      padding: "20px"
                    }}
                >

                  <div
                      style={{
                        background: "white",
                        width: "100%",
                        maxWidth: "650px",
                        maxHeight: "90vh",
                        overflowY: "auto",
                        borderRadius: "12px",
                        padding: "30px",
                        boxShadow:
                            "0 10px 30px rgba(0,0,0,0.2)"
                      }}
                  >

                    <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "25px"
                        }}
                    >

                      <h2>
                        Student Profile
                      </h2>

                      <button
                          onClick={() =>
                              setSelectedStudentProfile(null)
                          }
                          style={
                            styles.secondaryButton
                          }
                      >
                        Close
                      </button>

                    </div>

                    <div
                        style={
                          styles.profileGrid
                        }
                    >

                      <div
                          style={
                            styles.profileItem
                          }
                      >
                        <span
                            style={
                              styles.profileLabel
                            }
                        >
                          Student ID
                        </span>

                        <strong>
                          {selectedStudentProfile.userId}
                        </strong>
                      </div>

                      <div
                          style={
                            styles.profileItem
                          }
                      >
                        <span
                            style={
                              styles.profileLabel
                            }
                        >
                          Phone
                        </span>

                        <strong>
                          {selectedStudentProfile.phone ||
                              "Not provided"}
                        </strong>
                      </div>

                      <div
                          style={
                            styles.profileItem
                          }
                      >
                        <span
                            style={
                              styles.profileLabel
                            }
                        >
                          Branch
                        </span>

                        <strong>
                          {selectedStudentProfile.branch ||
                              "Not provided"}
                        </strong>
                      </div>

                      <div
                          style={
                            styles.profileItem
                          }
                      >
                        <span
                            style={
                              styles.profileLabel
                            }
                        >
                          College
                        </span>

                        <strong>
                          {selectedStudentProfile.college ||
                              "Not provided"}
                        </strong>
                      </div>

                      <div
                          style={
                            styles.profileItem
                          }
                      >
                        <span
                            style={
                              styles.profileLabel
                            }
                        >
                          Graduation Year
                        </span>

                        <strong>
                          {selectedStudentProfile.graduationYear ||
                              "Not provided"}
                        </strong>
                      </div>

                      <div
                          style={
                            styles.profileItem
                          }
                      >
                        <span
                            style={
                              styles.profileLabel
                            }
                        >
                          CGPA
                        </span>

                        <strong>
                          {selectedStudentProfile.cgpa ??
                              "Not provided"}
                        </strong>
                      </div>

                      <div
                          style={{
                            ...styles.profileItem,
                            gridColumn: "1 / -1"
                          }}
                      >
                        <span
                            style={
                              styles.profileLabel
                            }
                        >
                          Skills
                        </span>

                        <strong>
                          {selectedStudentProfile.skills ||
                              "Not provided"}
                        </strong>
                      </div>

                      <div
                          style={{
                            ...styles.profileItem,
                            gridColumn: "1 / -1"
                          }}
                      >
                        <span
                            style={
                              styles.profileLabel
                            }
                        >
                          Resume
                        </span>

                        {selectedStudentProfile.resumeUrl ? (

                            <a
                                href={
                                  selectedStudentProfile.resumeUrl
                                }
                                target="_blank"
                                rel="noreferrer"
                                style={
                                  styles.resumeLink
                                }
                            >
                              Open Resume
                            </a>

                        ) : (

                            <strong>
                              Not provided
                            </strong>

                        )}

                      </div>

                    </div>

                  </div>

                </div>

            )}

          </main>

        </div>

    );

  }

  // ==========================================
  // STUDENT DASHBOARD
  // ==========================================

  return (

      <StudentDashboard
          email={email}
          userId={userId}
          role={role}
          jobs={jobs}
          applications={applications}
          loadJobs={loadJobs}
          loadApplications={loadApplications}
          studentProfile={studentProfile}
          studentProfileLoading={studentProfileLoading}
          studentProfileEditing={studentProfileEditing}
          setStudentProfileEditing={setStudentProfileEditing}
          studentProfileForm={studentProfileForm}
          handleStudentProfileChange={handleStudentProfileChange}
          saveStudentProfile={saveStudentProfile}
          loadStudentProfile={loadStudentProfile}
          handleLogout={handleLogout}
          showMessage={showMessage}
          message={message}
          messageType={messageType}
      />

  );

}

// ==========================================
// STUDENT DASHBOARD COMPONENT
// ==========================================

function StudentDashboard({
                            email,
                            userId,
                            role,
                            jobs,
                            applications,
                            loadJobs,
                            loadApplications,
                            studentProfile,
                            studentProfileLoading,
                            studentProfileEditing,
                            setStudentProfileEditing,
                            studentProfileForm,
                            handleStudentProfileChange,
                            saveStudentProfile,
                            loadStudentProfile,
                            handleLogout,
                            showMessage,
                            message,
                            messageType
                          }) {

  const [processingJobId, setProcessingJobId] =
      useState(null);

  const getApplicationForJob =
      (jobId) => {

        return applications.find(
            application =>
                Number(application.jobId) ===
                Number(jobId)
        );

      };

    const checkEligibility = async (jobId) => {

        const token =
            localStorage.getItem("token");

        const savedUserId =
            localStorage.getItem("userId");

        if (!token || !savedUserId) {

          throw new Error(
              "Please login again."
          );

        }

        const response =
            await fetch(
                API_URL +
                "/api/eligibility/user/" +
                savedUserId +
                "/job/" +
                jobId,
                {
                  method: "GET",

                  headers: {
                    Authorization:
                        "Bearer " + token,

                    Accept:
                        "application/json"
                  }
                }
            );

        const responseText =
            await response.text();

        console.log(
            "Eligibility API status:",
            response.status
        );

        console.log(
            "Eligibility API response:",
            responseText
        );

        if (!response.ok) {

          let errorMessage =
              "Eligibility check failed";

          try {

            const errorData =
                JSON.parse(responseText);

            errorMessage =
                errorData.message ||
                errorData.error ||
                errorMessage;

          } catch {
            if (responseText.trim()) {
              errorMessage = responseText;
            }
          }

          throw new Error(
              errorMessage
          );

        }

        if (!responseText.trim()) {

          throw new Error(
              "Eligibility API returned an empty response."
          );

        }

        let data;

        try {

          data =
              JSON.parse(responseText);

        } catch (error) {

          console.error(
              "Invalid eligibility JSON:",
              responseText
          );

          throw new Error(
              "Eligibility API returned invalid JSON."
          );

        }

        console.log(
            "Parsed eligibility:",
            data
        );

        /*
        * Backend may return:
        *
        * true
        *
        * OR
        *
        * false
        *
        * OR
        *
        * {
        *   eligible: true,
        *   message: "..."
        * }
        *
        * Normalize all formats into:
        *
        * {
        *   eligible: true/false,
        *   message: "..."
        * }
        */

        if (typeof data === "boolean") {

          return {
            eligible: data,

            message:
                data
                    ? "You are eligible for this job."
                    : "You are not eligible for this job."
          };

        }

        return {
          eligible:
              Boolean(data.eligible),

          message:
              data.message ||
              (
                  data.eligible
                      ? "You are eligible for this job."
                      : "You are not eligible for this job."
              )
        };

      };

  const applyForJob =
      async (job) => {

        const existing =
            getApplicationForJob(
                job.id
            );

        if (existing) {

          showMessage(
              "You have already applied for this job.",
              "error"
          );

          return;

        }

        setProcessingJobId(
            job.id
        );

        try {

          const eligibility =
              await checkEligibility(
                  job.id
              );

          if (!eligibility.eligible) {

            showMessage(
                eligibility.message ||
                "You are not eligible for this job.",
                "error"
            );

            return;

          }

          const token =
              localStorage.getItem(
                  "token"
              );

          const savedUserId =
              localStorage.getItem(
                  "userId"
              );

          const response =
              await fetch(
                  API_URL + "/api/applications",
                  {
                    method: "POST",

                    headers: {
                      "Content-Type":
                          "application/json",

                      Authorization:
                          "Bearer " + token
                    },

                    body:
                        JSON.stringify({
                          userId:
                              Number(
                                  savedUserId
                              ),

                          jobId:
                              Number(
                                  job.id
                              ),

                          status:
                              "Applied"
                        })
                  }
              );

          const data =
              await response.json();

          if (!response.ok) {

            throw new Error(
                data.message ||
                "Application failed"
            );

          }

          showMessage(
              "Application submitted successfully"
          );

          await loadApplications();

        } catch (error) {

          console.error(
              error
          );

          showMessage(
              error.message ||
              "Failed to apply",
              "error"
          );

        } finally {

          setProcessingJobId(
              null
          );

        }

      };

  return (

      <div
          style={
            styles.dashboard
          }
      >

        <header
            style={styles.header}
            className="sh-header"
        >
            <div>
                <h1
                    style={styles.logo}
                >
                    SmartHire
                </h1>

                <p
                    style={styles.headerSubtitle}
                >
                    Student Dashboard
                </p>
            </div>

            <div
                style={styles.userSection}
                className="sh-user-section"
            >
                <span>
                    {email}
                </span>

                <span
                    style={styles.roleBadge}
                >
                    {role}
                </span>

                <button
                    onClick={handleLogout}
                    style={styles.logoutButton}
                >
                    Logout
                </button>
            </div>
        </header>

        <main
            style={
              styles.main
            }
        >

          <div
              style={
                styles.welcomeCard
              }
          >

            <h2>
              Welcome to SmartHire 👋
            </h2>

            <p>
              Find the right job and
              build your career.
            </p>

            <p>
              User ID:
              {" "}
              <strong>
                {userId}
              </strong>
            </p>

          </div>

          {message && (
              <div
                  style={{
                      ...styles.alert,
                      background:
                          messageType === "error"
                              ? "#fee2e2"
                              : "#dcfce7",
                      color:
                          messageType === "error"
                              ? "#991b1b"
                              : "#166534"
                  }}
              >
                  {message}
              </div>
          )}

          {/* STUDENT PROFILE */}

          <section
              style={styles.profileSection}
          >

                      <div style={styles.sectionHeader}>

            <h2 style={styles.sectionTitle}>
                My Profile
            </h2>

            <div
                style={{
                    display: "flex",
                    gap: "10px"
                }}
            >

                <button
                    type="button"
                    onClick={loadStudentProfile}
                    style={styles.refreshButton}
                >
                    Refresh
                </button>

                <button
                    type="button"
                    onClick={() => setStudentProfileEditing(true)}
                    style={styles.primaryButton}
                >
                    Edit Profile
                </button>

            </div>

          </div>

          {studentProfileLoading ? (

              <div style={styles.emptyCard}>
                Loading student profile...
              </div>

            ) : !studentProfile ? (

              <div style={styles.emptyCard}>
                Student profile not found. Please create your
                profile first using the backend API.
              </div>

            ) : studentProfileEditing ? (

              <form
                  onSubmit={saveStudentProfile}
                  style={styles.profileForm}
              >

                <div style={styles.twoColumns} className="sh-two-columns">

                  <div>
                    <label style={styles.label}>
                      Phone
                    </label>

                    <input
                        name="phone"
                        value={studentProfileForm.phone}
                        onChange={handleStudentProfileChange}
                        style={styles.input}
                    />
                  </div>

                  <div>
                    <label style={styles.label}>
                      Branch
                    </label>

                    <input
                        name="branch"
                        value={studentProfileForm.branch}
                        onChange={handleStudentProfileChange}
                        placeholder="CSE"
                        style={styles.input}
                    />
                  </div>

                </div>

                <label style={styles.label}>
                  College
                </label>

                <input
                    name="college"
                    value={studentProfileForm.college}
                    onChange={handleStudentProfileChange}
                    style={styles.input}
                />

                <div style={styles.twoColumns} className="sh-two-columns">

                  <div>
                    <label style={styles.label}>
                      Graduation Year
                    </label>

                    <input
                        type="number"
                        name="graduationYear"
                        value={studentProfileForm.graduationYear}
                        onChange={handleStudentProfileChange}
                        style={styles.input}
                    />
                  </div>

                  <div>
                    <label style={styles.label}>
                      CGPA
                    </label>

                    <input
                        type="number"
                        step="0.1"
                        min="0"
                        max="10"
                        name="cgpa"
                        value={studentProfileForm.cgpa}
                        onChange={handleStudentProfileChange}
                        style={styles.input}
                    />
                  </div>

                </div>

                <label style={styles.label}>
                  Skills
                </label>

                <input
                    name="skills"
                    value={studentProfileForm.skills}
                    onChange={handleStudentProfileChange}
                    placeholder="Java, Spring Boot, MySQL, React"
                    style={styles.input}
                />

                <label style={styles.label}>
                  Resume URL
                </label>

                <input
                    type="url"
                    name="resumeUrl"
                    value={studentProfileForm.resumeUrl}
                    onChange={handleStudentProfileChange}
                    placeholder="https://example.com/resume.pdf"
                    style={styles.input}
                />

                <button
                    type="submit"
                    style={styles.primaryButton}
                >
                  Save Profile
                </button>

              </form>

            ) : (

              <div style={styles.profileGrid}>

                <div style={styles.profileItem}>
                  <span style={styles.profileLabel}>
                    Phone
                  </span>
                  <strong>
                    {studentProfile.phone || "Not provided"}
                  </strong>
                </div>

                <div style={styles.profileItem}>
                  <span style={styles.profileLabel}>
                    Branch
                  </span>
                  <strong>
                    {studentProfile.branch || "Not provided"}
                  </strong>
                </div>

                <div style={styles.profileItem}>
                  <span style={styles.profileLabel}>
                    College
                  </span>
                  <strong>
                    {studentProfile.college || "Not provided"}
                  </strong>
                </div>

                <div style={styles.profileItem}>
                  <span style={styles.profileLabel}>
                    Graduation Year
                  </span>
                  <strong>
                    {studentProfile.graduationYear || "Not provided"}
                  </strong>
                </div>

                <div style={styles.profileItem}>
                  <span style={styles.profileLabel}>
                    CGPA
                  </span>
                  <strong>
                    {studentProfile.cgpa ?? "Not provided"}
                  </strong>
                </div>

                <div style={styles.profileItem}>
                  <span style={styles.profileLabel}>
                    Skills
                  </span>
                  <strong>
                    {studentProfile.skills || "Not provided"}
                  </strong>
                </div>

                <div
                    style={{
                      ...styles.profileItem,
                      gridColumn: "1 / -1"
                    }}
                >
                  <span style={styles.profileLabel}>
                    Resume
                  </span>

                  {studentProfile.resumeUrl ? (

                    <a
                        href={studentProfile.resumeUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={styles.resumeLink}
                    >
                      Open Resume
                    </a>

                  ) : (
                    <strong>
                      Not provided
                    </strong>
                  )}

                </div>

              </div>

            )}

          </section>

          <section>

            <div style={styles.sectionHeader}>

                <h2 style={styles.sectionTitle}>
                    Available Jobs
                </h2>

                <button
                    type="button"
                    onClick={loadJobs}
                    style={styles.refreshButton}
                >
                    Refresh
                </button>

            </div>

            <div
                className="sh-jobs-grid"
                style={styles.jobsGrid}
            >

                            {jobs.length === 0 ? (

                                <div
                                    style={{
                                        gridColumn: "1 / -1",
                                        background: "#ffffff",
                                        border: "1px solid #e2e8f0",
                                        borderRadius: "14px",
                                        padding: "32px",
                                        textAlign: "center",
                                        color: "#64748b",
                                        fontSize: "15px"
                                    }}
                                >
                                    No jobs are currently available.
                                </div>

                            ) : (

                                <>
                                    {jobs.map(job => {

                                        const application =
                                            getApplicationForJob(job.id);

                                        return (
                                            <div
                                                key={job.id}
                                                style={styles.jobCard}
                                            >

                                                {/* JOB TITLE */}
                                                <h3
                                                    style={{
                                                        margin: "0 0 8px",
                                                        color: "#0f172a",
                                                        fontSize: "22px",
                                                        fontWeight: "700"
                                                    }}
                                                >
                                                    {job.jobTitle || "Job Title Not Specified"}
                                                </h3>

                                                {/* COMPANY */}
                                                <p
                                                    style={{
                                                        margin: "0 0 16px",
                                                        color: "#2563eb",
                                                        fontSize: "16px",
                                                        fontWeight: "600"
                                                    }}
                                                >
                                                    {job.companyName || "Company Not Specified"}
                                                </p>

                                                {/* JOB META GRID */}
                                                <div style={styles.jobMetaGrid}>

                                                    {/* LOCATION */}
                                                    <div style={styles.jobMetaItem}>
                                                        <span style={styles.jobMetaLabel}>
                                                            LOCATION
                                                        </span>

                                                        <span style={styles.jobMetaValue}>
                                                            📍 {job.location || "Not specified"}
                                                        </span>
                                                    </div>

                                                    {/* EMPLOYMENT */}
                                                    <div style={styles.jobMetaItem}>
                                                        <span style={styles.jobMetaLabel}>
                                                            EMPLOYMENT
                                                        </span>

                                                        <span style={styles.jobMetaValue}>
                                                            💼 {job.employmentType || "Not specified"}
                                                        </span>
                                                    </div>

                                                    {/* SALARY */}
                                                    <div style={styles.jobMetaItem}>
                                                        <span style={styles.jobMetaLabel}>
                                                            SALARY
                                                        </span>

                                                        <span style={styles.jobMetaValue}>
                                                            💰 {job.salary
                                                              ? (String(job.salary).toLowerCase().includes("lpa")
                                                                  ? job.salary
                                                                  : `₹${(Number(job.salary) / 100000).toFixed(1).replace(".0", "")} LPA`)
                                                              : "Not specified"}
                                                        </span>
                                                    </div>

                                                    {/* MINIMUM CGPA */}
                                                    <div style={styles.jobMetaItem}>
                                                        <span style={styles.jobMetaLabel}>
                                                            MINIMUM CGPA
                                                        </span>

                                                        <span style={styles.jobMetaValue}>
                                                            🎓 {job.minimumCgpa ?? "Not specified"}
                                                        </span>
                                                    </div>

                                                </div>

                                                {/* ELIGIBLE BRANCHES */}
                                                <div style={styles.jobMetaGrid}>

                                                    <div style={styles.jobMetaItem}>
                                                        <span style={styles.jobMetaLabel}>
                                                            ELIGIBLE BRANCHES
                                                        </span>

                                                        <span style={styles.jobMetaValue}>
                                                            📚 {job.eligibleBranches || "Not specified"}
                                                        </span>
                                                    </div>

                                                    {/* REQUIRED SKILLS */}
                                                    <div style={styles.jobMetaItem}>
                                                        <span style={styles.jobMetaLabel}>
                                                            REQUIRED SKILLS
                                                        </span>

                                                        <span style={styles.jobMetaValue}>
                                                            🛠 {job.requiredSkills || "Not specified"}
                                                        </span>
                                                    </div>

                                                </div>

                                                {/* JOB DESCRIPTION */}
                                                <div style={styles.jobFullDetailBox}>
                                                    <span style={styles.jobDetailLabel}>
                                                        JOB DESCRIPTION
                                                    </span>

                                                    <p
                                                        style={{
                                                            margin: "6px 0 0",
                                                            color: "#334155",
                                                            fontSize: "14px",
                                                            lineHeight: "1.6"
                                                        }}
                                                    >
                                                        {job.description ||
                                                            "No description provided."}
                                                    </p>
                                                </div>

                                                {/* APPLICATION / APPLY */}
                                                {application ? (

                                                    <div
                                                        style={{
                                                            marginTop: "12px",
                                                            padding: "12px",
                                                            background: "#f8fafc",
                                                            border: "1px solid #e2e8f0",
                                                            borderRadius: "10px",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center"
                                                        }}
                                                    >
                                                        <strong
                                                            style={{
                                                                color: "#0f172a"
                                                            }}
                                                        >
                                                            Application Status
                                                        </strong>

                                                        <span
                                                            style={{
                                                                padding: "8px 12px",
                                                                borderRadius: "20px",
                                                                fontSize: "12px",
                                                                fontWeight: "700",
                                                                border: "1px solid",
                                                                color:
                                                                    (application.status || "Applied").toLowerCase() === "accepted"
                                                                        ? "#047857"
                                                                        : (application.status || "Applied").toLowerCase() === "rejected"
                                                                        ? "#dc2626"
                                                                        : "#4338ca",
                                                                background:
                                                                    (application.status || "Applied").toLowerCase() === "accepted"
                                                                        ? "#ecfdf5"
                                                                        : (application.status || "Applied").toLowerCase() === "rejected"
                                                                        ? "#fef2f2"
                                                                        : "#eef2ff",
                                                                borderColor:
                                                                    (application.status || "Applied").toLowerCase() === "accepted"
                                                                        ? "#a7f3d0"
                                                                        : (application.status || "Applied").toLowerCase() === "rejected"
                                                                        ? "#fecaca"
                                                                        : "#c7d2fe"
                                                            }}
                                                        >
                                                            {application.status || "Applied"}
                                                        </span>
                                                    </div>

                                                ) : (

                                                    <button
                                                        type="button"
                                                        onClick={() => applyForJob(job)}
                                                        disabled={processingJobId === job.id}
                                                        style={{
                                                            width: "100%",
                                                            marginTop: "12px",
                                                            padding: "12px",
                                                            border: "none",
                                                            borderRadius: "8px",
                                                            background: "#4f46e5",
                                                            color: "#ffffff",
                                                            fontSize: "14px",
                                                            fontWeight: "700",
                                                            cursor:
                                                                processingJobId === job.id
                                                                    ? "not-allowed"
                                                                    : "pointer",
                                                            opacity:
                                                                processingJobId === job.id
                                                                    ? 0.7
                                                                    : 1
                                                        }}
                                                    >
                                                        {processingJobId === job.id
                                                            ? "Checking..."
                                                            : "Check Eligibility & Apply"}
                                                    </button>

                                                )}

                                            </div>
                                        );

                                    })}
                                </>

                            )}

          </div>

          </section>

          <section
              style={{
                  marginTop: "34px",
                  marginBottom: "30px"
              }}
          >

              {/* SECTION HEADER */}
              <div style={styles.sectionHeader}>

                  <h2 style={styles.sectionTitle}>
                      My Applications
                  </h2>

                  <button
                      type="button"
                      onClick={loadApplications}
                      style={styles.refreshButton}
                  >
                      Refresh
                  </button>

              </div>


              {/* NO APPLICATIONS */}
              {applications.length === 0 ? (

                  <div
                      style={{
                          background: "#ffffff",
                          border: "1px solid #e2e8f0",
                          borderRadius: "14px",
                          padding: "32px",
                          textAlign: "center",
                          color: "#64748b",
                          fontSize: "15px",
                          boxShadow:
                              "0 6px 18px rgba(15,23,42,0.04)"
                      }}
                  >
                      You have not applied for any jobs yet.
                  </div>

              ) : (

                  <div
                      style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "12px"
                      }}
                  >

                      {applications.map((application) => {

                        const appliedJob =
                            jobs.find(
                                (job) =>
                                    Number(job.id) ===
                                    Number(application.jobId)
                            );

                        return (

                            <div
                                key={application.id}
                                style={{
                                  background: "#ffffff",
                                  border: "1px solid #e2e8f0",
                                  borderRadius: "14px",
                                  padding: "16px 20px",
                                  boxShadow: "0 4px 14px rgba(15,23,42,0.04)",
                                  minHeight: "120px",
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center"
                              }}
                            >

                                {/* TOP ROW */}
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "flex-start",
                                        gap: "20px"
                                    }}
                                >

                                    {/* JOB INFORMATION */}
                                    <div
                                        style={{
                                            flex: 1,
                                            minWidth: 0
                                        }}
                                    >

                                        <h3
                                            style={{
                                                margin: "0 0 6px",
                                                color: "#0f172a",
                                                fontSize: "18px",
                                                fontWeight: "700"
                                            }}
                                        >
                                            {appliedJob?.jobTitle ||
                                                "Job Title Not Available"}
                                        </h3>

                                        <p
                                            style={{
                                                margin: "0",
                                                color: "#2563eb",
                                                fontSize: "15px",
                                                fontWeight: "600"
                                            }}
                                        >
                                            {appliedJob?.companyName ||
                                                "Company Not Available"}
                                        </p>

                                    </div>


                                    {/* STATUS */}
                                    <span
                                      style={{
                                          flexShrink: 0,
                                          display: "inline-flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          minWidth: "90px",
                                          padding: "9px 14px",
                                          borderRadius: "999px",
                                          fontSize: "13px",
                                          fontWeight: "700",

                                          background:
                                              String(application.status || "Applied").toLowerCase() === "accepted"
                                                  ? "#dcfce7"
                                                  : String(application.status || "Applied").toLowerCase() === "rejected"
                                                      ? "#fee2e2"
                                                      : "#dbeafe",

                                          color:
                                              String(application.status || "Applied").toLowerCase() === "accepted"
                                                  ? "#166534"
                                                  : String(application.status || "Applied").toLowerCase() === "rejected"
                                                      ? "#b91c1c"
                                                      : "#1d4ed8",

                                          border:
                                              String(application.status || "Applied").toLowerCase() === "accepted"
                                                  ? "1px solid #86efac"
                                                  : String(application.status || "Applied").toLowerCase() === "rejected"
                                                      ? "1px solid #fca5a5"
                                                      : "1px solid #93c5fd"
                                      }}
                                  >
                                      {application.status || "Applied"}
                                  </span>

                                </div>


                                {/* JOB DETAILS */}
                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "8px 24px",
                                        marginTop: "14px",
                                        paddingTop: "12px",
                                        borderTop: "1px solid #e2e8f0",
                                        color: "#64748b",
                                        fontSize: "13px"
                                    }}
                                >

                                    <span>
                                        Job ID:{" "}
                                        <strong
                                            style={{
                                                color: "#0f172a"
                                            }}
                                        >
                                            {application.jobId}
                                        </strong>
                                    </span>


                                    <span>
                                        📍{" "}
                                        {appliedJob?.location ||
                                            "Location Not Available"}
                                    </span>

                                </div>

                            </div>

                        );

                    })}

                  </div>

              )}

          </section>

        </main>

      </div>

  );

}

// ==========================================
// PROFESSIONAL SMART HIRE STYLES
// ==========================================

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px",
    background: "linear-gradient(135deg, #eef2ff 0%, #f8fafc 52%, #eef6ff 100%)",
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
  },

  card: {
    width: "min(430px, 100%)",
    padding: "38px",
    background: "rgba(255,255,255,.96)",
    border: "1px solid #e5e7eb",
    borderRadius: "20px",
    boxShadow: "0 24px 60px rgba(15,23,42,.12)"
  },

  title: {
    textAlign: "center",
    margin: 0,
    fontSize: "34px",
    fontWeight: 800,
    letterSpacing: "-1px",
    color: "#312e81"
  },

  subtitle: {
    textAlign: "center",
    color: "#64748b",
    margin: "8px 0 30px",
    fontSize: "15px"
  },

  formGroup: {
    marginBottom: "18px"
  },

  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: 700,
    color: "#334155",
    fontSize: "14px"
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "12px 14px",
    border: "1px solid #d7dce5",
    borderRadius: "10px",
    fontSize: "15px",
    marginBottom: "10px",
    background: "#fff",
    color: "#172033"
  },

  textarea: {
    width: "100%",
    boxSizing: "border-box",
    padding: "12px 14px",
    border: "1px solid #d7dce5",
    borderRadius: "10px",
    fontSize: "15px",
    resize: "vertical",
    marginBottom: "14px",
    background: "#fff",
    color: "#172033",
    lineHeight: 1.55
  },

  button: {
    width: "100%",
    padding: "13px 16px",
    border: "none",
    borderRadius: "10px",
    background: "#4f46e5",
    color: "white",
    fontSize: "15px",
    fontWeight: 700,
    cursor: "pointer"
  },

  message: {
    marginTop: "18px",
    textAlign: "center",
    fontWeight: 700,
    fontSize: "14px"
  },

  dashboard: {
    width: "100%",
    minHeight: "100vh",
    maxWidth: "none",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    background: "#f5f7fb",
  },

  header: {
    width: "100%",
    background: "rgba(255,255,255,.96)",
    padding: "18px 42px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #e7eaf0",
    boxShadow: "0 2px 16px rgba(15,23,42,.05)",
    position: "sticky",
    top: 0,
    zIndex: 50,
    backdropFilter: "blur(12px)",
    boxSizing: "border-box",
  },

  logo: {
    margin: 0,
    color: "#3730a3",
    fontSize: "24px",
    fontWeight: 800,
    letterSpacing: "-.5px"
  },

  headerSubtitle: {
    margin: "3px 0 0",
    color: "#64748b",
    fontSize: "13px",
    fontWeight: 600
  },

  userSection: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#475569",
    fontSize: "14px"
  },

  roleBadge: {
    padding: "6px 10px",
    background: "#eef2ff",
    color: "#4338ca",
    border: "1px solid #c7d2fe",
    borderRadius: "999px",
    fontWeight: 800,
    fontSize: "11px",
    letterSpacing: ".4px"
  },

  logoutButton: {
    padding: "8px 13px",
    border: "1px solid #fecaca",
    borderRadius: "9px",
    background: "#fff1f2",
    color: "#be123c",
    cursor: "pointer",
    fontWeight: 700
  },

  main: {
    width: "100%",
    padding: "28px 24px 60px",
    boxSizing: "border-box",
  },

  welcomeCard: {
    background: "linear-gradient(135deg, #312e81 0%, #4f46e5 62%, #6366f1 100%)",
    color: "white",
    padding: "28px",
    borderRadius: "18px",
    marginBottom: "26px",
    boxShadow: "0 18px 40px rgba(79,70,229,.18)"
  },

  alert: {
    padding: "13px 16px",
    borderRadius: "10px",
    marginBottom: "20px",
    fontWeight: 700,
    border: "1px solid rgba(0,0,0,.04)"
  },

  formSection: {
    background: "white",
    padding: "26px",
    border: "1px solid #e7eaf0",
    borderRadius: "16px",
    marginBottom: "34px",
    boxShadow: "0 8px 28px rgba(15,23,42,.05)"
  },

  jobForm: {
    display: "flex",
    flexDirection: "column",
    gap: "4px"
  },

  twoColumns: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "18px"
  },

  sectionHeader: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "18px",
      boxSizing: "border-box",
  },

  primaryButton: {
    marginTop: "12px",
    padding: "12px 16px",
    border: "none",
    borderRadius: "10px",
    background: "#4f46e5",
    color: "white",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: 700
  },

  secondaryButton: {
    padding: "9px 14px",
    border: "1px solid #d7dce5",
    borderRadius: "9px",
    background: "#f8fafc",
    color: "#475569",
    cursor: "pointer",
    fontWeight: 700
  },

  refreshButton: {
    padding: "9px 14px",
    border: "1px solid #c7d2fe",
    borderRadius: "9px",
    background: "#eef2ff",
    color: "#4338ca",
    cursor: "pointer",
    fontWeight: 700
  },

  jobsSection: {
    marginBottom: "36px"
  },

  jobsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "18px",
    width: "100%",
    boxSizing: "border-box",
    alignItems: "stretch",
  },

  sectionTitle: {
    margin: 0,
    fontSize: "26px",
    fontWeight: "700",
    color: "#0f172a",
  },

  jobCardHeader: {
    marginBottom: "6px",
  },

  jobMetaGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "6px",
    marginBottom: "10px",
  },

  jobMetaItem: {
    padding: "6px 8px",
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "9px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "3px",
    minHeight: "42px",
    boxSizing: "border-box",
  },

  jobMetaLabel: {
    color: "#64748b",
    fontSize: "11px",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: ".45px"
  },

  jobMetaValue: {
    color: "#0f172a",
    fontSize: "13px",
    fontWeight: 500,
    lineHeight: "1.25",
    textAlign: "center",
    wordBreak: "break-word",
  },

  jobInfoBox: {
    padding: "11px 12px",
    marginBottom: "10px",
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "10px",
    color: "#334155",
    fontSize: "14px",
    lineHeight: 1.5
  },

  descriptionBox: {
    marginTop: "4px",
    padding: "10px 14px",
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "9px",
    minHeight: "64px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },

  descriptionLabel: {
    display: "block",
    marginBottom: "6px",
    color: "#475569",
    fontSize: "12px",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: ".45px"
  },

  jobCard: {
    width: "100%",
    minWidth: 0,
    boxSizing: "border-box",
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "14px",
    padding: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    boxShadow: "0 4px 12px rgba(15, 23, 42, 0.04)",
  },

  jobTitle: {
    marginTop: 0,
    marginBottom: "6px",
    color: "#172033",
    fontSize: "20px",
    fontWeight: 800,
    letterSpacing: "-.3px"
  },

  company: {
    fontWeight: 700,
    color: "#4f46e5",
    marginTop: 0
  },

  description: {
    color: "#64748b",
    lineHeight: 1.55
  },

  buttonRow: {
    display: "flex",
    gap: "10px",
    marginTop: "15px"
  },

  editButton: {
    flex: 1,
    padding: "10px 13px",
    border: "none",
    borderRadius: "9px",
    background: "#4f46e5",
    color: "white",
    cursor: "pointer",
    fontWeight: 700
  },

  deleteButton: {
    flex: 1,
    padding: "10px 13px",
    border: "none",
    borderRadius: "9px",
    background: "#fff1f2",
    color: "#be123c",
    borderColor: "#fecdd3",
    cursor: "pointer",
    fontWeight: 700
  },

  viewStudentProfileButton: {
    flex: 1,
    padding: "10px 13px",
    border: "none",
    borderRadius: "9px",
    background: "#0f766e",
    color: "white",
    cursor: "pointer",
    fontWeight: 700
  },

  viewApplicationsButton: {
    width: "100%",
    marginTop: "10px",
    padding: "10px 13px",
    border: "none",
    borderRadius: "9px",
    background: "#7c3aed",
    color: "white",
    cursor: "pointer",
    fontWeight: 700
  },

  applyButton: {
    width: "100%",
    padding: "11px 13px",
    marginTop: "10px",
    border: "none",
    borderRadius: "9px",
    background: "#059669",
    color: "white",
    cursor: "pointer",
    fontWeight: 700
  },

  applicationStatus: {
    marginTop: "8px",
    padding: "10px 13px",
    background: "#f8fafc",
    border: "1px solid #e7eafe",
    borderRadius: "9px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px"
  },

  applicationsSection: {
    marginTop: "34px",
    background: "transparent"
  },

  applicationList: {
    display: "grid",
    gap: "12px"
  },

  applicationCard: {
    background: "white",
    padding: "19px",
    border: "1px solid #e7eaf0",
    borderRadius: "14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "18px",
    flexWrap: "wrap",
    boxShadow: "0 6px 20px rgba(15,23,42,.04)"
  },

  applicationInfo: {
    flex: 1,
    minWidth: "250px"
  },

  applicationTitle: {
    marginTop: 0,
    marginBottom: "12px",
    color: "#172033",
    fontSize: "17px"
  },

  applicationDetail: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "8px",
    fontSize: "14px"
  },

  applicationLabel: {
    color: "#64748b",
    fontWeight: 700,
    minWidth: "120px"
  },

  applicationActions: {
    display: "flex",
    gap: "9px",
    flexWrap: "wrap",
    alignItems: "center"
  },

  statusBadge: {
    padding: "6px 10px",
    borderRadius: "999px",
    background: "#fff7ed",
    color: "#9a3412",
    fontWeight: 800,
    fontSize: "12px",
    border: "1px solid #fed7aa"
  },

  acceptedStatus: {
    background: "#ecfdf5",
    color: "#047857",
    borderColor: "#a7f3d0"
  },

  rejectedStatus: {
    background: "#fff1f2",
    color: "#be123c",
    borderColor: "#fecdd3"
  },

  appliedStatus: {
    background: "#eff6ff",
    color: "#1d4ed8",
    borderColor: "#bfdbfe"
  },

  acceptButton: {
    padding: "9px 13px",
    border: "none",
    borderRadius: "9px",
    background: "#059669",
    color: "white",
    cursor: "pointer",
    fontWeight: 700
  },

  rejectButton: {
    padding: "9px 13px",
    border: "none",
    borderRadius: "9px",
    background: "#e11d48",
    color: "white",
    cursor: "pointer",
    fontWeight: 700
  },

  profileSection: {
    background: "white",
    padding: "26px",
    border: "1px solid #e7eaf0",
    borderRadius: "16px",
    marginBottom: "34px",
    boxShadow: "0 8px 28px rgba(15,23,42,.05)"
  },

  profileForm: {
    display: "flex",
    flexDirection: "column",
    gap: "4px"
  },

  profileGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "14px"
  },

  profileItem: {
    background: "#f8fafc",
    border: "1px solid #e7eaf0",
    padding: "16px",
    borderRadius: "11px",
    display: "flex",
    flexDirection: "column",
    gap: "7px",
    minWidth: 0
  },

  profileLabel: {
    color: "#64748b",
    fontSize: "12px",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: ".5px"
  },

  resumeLink: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    padding: "8px 12px",
    borderRadius: "8px",
    background: "#eef2ff",
    color: "#4338ca",
    fontWeight: 800,
    textDecoration: "none"
  },

  emptyCard: {
    background: "white",
    border: "1px dashed #cbd5e1",
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
    color: "#64748b"
  },

  jobDetailBox: {
        padding: "10px 12px",
        marginBottom: "10px",
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "5px"
    },

    jobFullDetailBox: {
        padding: "10px 12px",
        marginBottom: "10px",
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "5px"
    },

    jobDetailLabel: {
        fontSize: "11px",
        fontWeight: "700",
        color: "#64748b",
        letterSpacing: "0.4px"
    },

    jobDetailValue: {
      fontSize: "14px",
      color: "#0f172a",
      fontWeight: "500",
      lineHeight: "1.4"
    },

    authLinks: {
      marginTop: "18px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px"
    },

    signupPrompt: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "5px",
      color: "#64748b",
      fontSize: "14px"
    },

    linkButton: {
      border: "none",
      background: "transparent",
      color: "#4f46e5",
      cursor: "pointer",
      fontWeight: 700,
      padding: "4px",
      fontSize: "14px"
    },

    resetTokenBox: {
      marginTop: "20px",
      padding: "14px",
      background: "#f8fafc",
      border: "1px solid #e2e8f0",
      borderRadius: "10px"
    },

    resetTokenTitle: {
      margin: "0 0 8px",
      color: "#334155",
      fontWeight: 700,
      fontSize: "14px"
    },

    resetTokenHint: {
      margin: "4px 0 0",
      color: "#64748b",
      fontSize: "12px",
      lineHeight: "1.4"
    }
    };


export default App;
