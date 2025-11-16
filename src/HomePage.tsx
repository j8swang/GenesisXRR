import { useNavigate } from "react-router-dom";
import "./App.css";

function HomePage() {
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate("/play");
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "600px",
          padding: "2rem",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          Genesis XR
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            marginBottom: "3rem",
            opacity: 0.9,
            lineHeight: "1.6",
          }}
        >
          Combine elements to discover new creations in this immersive 3D
          experience
        </p>
        <button
          onClick={handlePlay}
          style={{
            padding: "1.5rem 4rem",
            fontSize: "1.8rem",
            fontWeight: "bold",
            backgroundColor: "#646cff",
            color: "#ffffff",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#535bf2";
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#646cff";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
          }}
        >
          Play
        </button>
      </div>
    </div>
  );
}

export default HomePage;

