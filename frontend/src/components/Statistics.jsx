import React, { useState, useEffect } from 'react';
import { Users, Building, Bed } from 'lucide-react';

const Statistics = () => {
  const [stats, setStats] = useState({
    totalStudents: 50,
    totalRooms: 17,
    totalBeds: 50
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
        const response = await fetch(`${BACKEND_URL}/api/stats`);
        const data = await response.json();
        
        if (response.ok) {
          setStats({
            totalStudents: data.totalStudents,
            totalRooms: data.totalRooms,
            totalBeds: data.totalBeds
          });
        }
      } catch (error) {
        console.error('Error fetching statistics:', error);
        // Keep default values on error
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statsData = [
    { icon: Users, value: `${stats.totalStudents}+`, label: 'Students', color: 'blue' },
    { icon: Building, value: stats.totalRooms.toString(), label: 'Rooms', color: 'green' },
    { icon: Bed, value: `${stats.totalBeds}+`, label: 'Beds', color: 'yellow' }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            BUILDING A HAPPY, WHOLESOME COMMUNITY
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <Icon className="mx-auto mb-4" size={48} />
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</div>
                <div className="text-xl font-semibold uppercase tracking-wider">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;