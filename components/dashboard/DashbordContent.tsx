'use client'
import React, { useEffect, useState } from 'react';
import './Dashboard.css'

interface MetricCardProps {
  value: number;
  label: string;
  color: string;
  icon: React.ReactNode;
}

const MetricCard = ({ value, label, color, icon }: MetricCardProps) => {
  return (
    <div className="dashboard-card" style={{ backgroundColor: color }}>
      <div className="dashboard-icon">{icon}</div>
      <h2 className="dashboard-value">{value}</h2>
      <p className="dashboard-label">{label}</p>
    </div>
  );
};

const DashboardMetrics = () => {
  const [metrics, setMetrics] = useState({
    enrolledCourses: 30,
    activeCourses: 10,
    completedCourses: 7,
    totalStudents: 160,
    totalCourses: 20,
    totalEarnings: 25000,
  });

  const initialValues = {
    enrolledCourses: 0,
    activeCourses: 0,
    completedCourses: 0,
    totalStudents: 0,
    totalCourses: 0,
    totalEarnings: 0,
  };

  useEffect(() => {
    // Start the animation once on component mount
    setMetrics(initialValues); // Reset to 0 for animation effect
    const timer = setTimeout(() => {
      setMetrics({
        enrolledCourses: 30,
        activeCourses: 10,
        completedCourses: 7,
        totalStudents: 160,
        totalCourses: 20,
        totalEarnings: 25000,
      });
    }, 500); // Set final values after reset
  
    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="dashboard-grid">
        
      <MetricCard
        value={metrics.enrolledCourses}
        label="Enrolled Courses"
        color="#e0f7fa"
        icon="📘"
      />
      <MetricCard
        value={metrics.activeCourses}
        label="Active Courses"
        color="#f3e5f5"
        icon="💻"
      />
      <MetricCard
        value={metrics.completedCourses}
        label="Completed Courses"
        color="#ede7f6"
        icon="🏆"
      />
      <MetricCard
        value={metrics.totalStudents}
        label="Total Students"
        color="#fbe9e7"
        icon="👥"
      />
      <MetricCard
        value={metrics.totalCourses}
        label="Total Courses"
        color="#fff3e0"
        icon="🎁"
      />
      <MetricCard
        value={metrics.totalEarnings}
        label="Total Earnings"
        color="#fff8e1"
        icon="💰"
      />
    </div>
  );
};

export default DashboardMetrics;
