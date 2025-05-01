"use client";
import { useEffect, useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState<Position | null>(null);
  const [dotPosition, setDotPosition] = useState<Position | null>(null);
  const [isMouseInside, setIsMouseInside] = useState(true); // Track mouse inside window

  const positionHistoryRef = useRef<Position[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isMouseInside) setIsMouseInside(true); // If mouse moves inside, show again
    };

    const handleMouseOut = () => {
      setIsMouseInside(false); // When mouse leaves the window
    };

    const updateTrail = () => {
      const history = positionHistoryRef.current;

      // Add current mouse position to history
      history.push({ ...mousePosition });

      // Keep only last 16 positions
      if (history.length > 16) {
        history.shift();
      }

      // Ring follows 3 positions behind mouse
      if (history.length > 8) {
        setRingPosition(history[history.length - 10]);
      }

      // Dot follows 6 positions behind ring
      if (history.length > 6) {
        setDotPosition(history[history.length - 16]);
      }

      // Continue animation
      animationFrameRef.current = requestAnimationFrame(updateTrail);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut); // Detect when mouse leaves
    animationFrameRef.current = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition, isMouseInside]);

  return (
    <>
      {isMouseInside && ringPosition && (
        <div
          className="custom-cursor-ring"
          style={{
            left: `${ringPosition.x}px`,
            top: `${ringPosition.y}px`,
            transition: "none",
          }}
        />
      )}
      {isMouseInside && dotPosition && (
        <div
          className="custom-cursor"
          style={{
            left: `${dotPosition.x}px`,
            top: `${dotPosition.y}px`,
            transition: "none",
          }}
        />
      )}
    </>
  );
}
