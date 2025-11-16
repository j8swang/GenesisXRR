import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import {
  getDiscoveredCombinations,
  getCombinationDescription,
  BASIC_ELEMENTS,
  type DiscoveredCombination,
} from "./App";

function Library() {
  const navigate = useNavigate();
  const [combinations, setCombinations] = useState<DiscoveredCombination[]>([]);

  useEffect(() => {
    const discovered = getDiscoveredCombinations();
    // Sort chronologically by timestamp (oldest first)
    const sorted = discovered.sort((a, b) => a.timestamp - b.timestamp);
    setCombinations(sorted);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#ffffff",
        padding: "2rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
          Library
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            marginBottom: "3rem",
            opacity: 0.9,
            lineHeight: "1.6",
          }}
        >
          Browse your collection of discovered combinations
        </p>

        {combinations.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "3rem",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              marginBottom: "2rem",
            }}
          >
            <p style={{ fontSize: "1.2rem", opacity: 0.8 }}>
              No combinations discovered yet. Start combining elements to build
              your library!
            </p>
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              marginBottom: "2rem",
            }}
          >
            {combinations.map((combination, index) => {
              const element1 = BASIC_ELEMENTS.find(
                (e) => e.id === combination.element1
              );
              const element2 = BASIC_ELEMENTS.find(
                (e) => e.id === combination.element2
              );
              const result = BASIC_ELEMENTS.find(
                (e) => e.id === combination.result
              );
              const description = getCombinationDescription(
                combination.element1,
                combination.element2
              );

              return (
                <div
                  key={`${combination.timestamp}-${index}`}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    borderRadius: "12px",
                    padding: "2rem",
                    color: "#333",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.5rem",
                      alignItems: "center",
                    }}
                  >
                    {/* Recipe Display */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          padding: "1rem 1.5rem",
                          backgroundColor: "#f5f5f5",
                          borderRadius: "8px",
                          width: "100%",
                          justifyContent: "center",
                        }}
                      >
                        <span style={{ fontSize: "2rem" }}>
                          {element1?.emoji}
                        </span>
                        <span
                          style={{
                            fontSize: "1.2rem",
                            fontWeight: "500",
                            color: "#000000",
                          }}
                        >
                          {element1?.name}
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "bold",
                          color: "#000000",
                        }}
                      >
                        +
                      </span>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          padding: "1rem 1.5rem",
                          backgroundColor: "#f5f5f5",
                          borderRadius: "8px",
                          width: "100%",
                          justifyContent: "center",
                        }}
                      >
                        <span style={{ fontSize: "2rem" }}>
                          {element2?.emoji}
                        </span>
                        <span
                          style={{
                            fontSize: "1.2rem",
                            fontWeight: "500",
                            color: "#000000",
                          }}
                        >
                          {element2?.name}
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "bold",
                          color: "#000000",
                        }}
                      >
                        =
                      </span>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          padding: "1rem 1.5rem",
                          backgroundColor: "#646cff",
                          borderRadius: "8px",
                          width: "100%",
                          justifyContent: "center",
                        }}
                      >
                        <span style={{ fontSize: "2rem" }}>
                          {result?.emoji}
                        </span>
                        <span
                          style={{
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            color: "#ffffff",
                          }}
                        >
                          {result?.name}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    {description && (
                      <div
                        style={{
                          width: "100%",
                          padding: "1rem 1.5rem",
                          backgroundColor: "#f5f5f5",
                          borderRadius: "8px",
                          marginTop: "0.5rem",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "1rem",
                            color: "#333",
                            lineHeight: "1.6",
                            margin: 0,
                            textAlign: "left",
                          }}
                        >
                          {description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <button
          onClick={() => navigate("/play")}
          style={{
            padding: "1rem 2rem",
            fontSize: "1.2rem",
            fontWeight: "bold",
            backgroundColor: "#ffffff",
            color: "#667eea",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
          }}
        >
          ← Back to Play
        </button>
      </div>
    </div>
  );
}

export default Library;
