import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './LanguageChart.css';

const accent = '#6c3483';
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  name,
  index,
}) => {
  const RADIAN = Math.PI / 180;
  const baseOffset = 160; // Length of the longest line
  const decrement = 15; // Amount to decrement for each slice
  const offset = baseOffset - decrement * index; // Length of the line for this slice

  const x1 = cx + (outerRadius - 10) * Math.cos(-midAngle * RADIAN);
  const y1 = cy + (outerRadius - 0) * Math.sin(-midAngle * RADIAN);
  const x2 = x1 + offset * Math.cos(-midAngle * RADIAN);
  const y2 = y1 + offset * Math.sin(-midAngle * RADIAN);
  const x3 = x2 + 10; // Extend line for specific labels

  // Inside labels
  if (['CSS', 'JavaScript', 'Python', 'HTML'].includes(name)) {
    let xInside = cx + (outerRadius / 2) * Math.cos(-midAngle * RADIAN);
    let yInside = cy + (outerRadius / 2) * Math.sin(-midAngle * RADIAN);
    // Specific adjustments for labels can be added here
    return (
      <text
        x={xInside}
        y={yInside}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        className="fade-in-text inner-upper"
      >
        {name}
      </text>
    );
  }

  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#000"
        className="fade-in-text lines"
      />
      <line
        x1={x2}
        y1={y2}
        x2={x3}
        y2={y2}
        stroke="#000"
        className="fade-in-text lines"
      />
      <text
        x={x3}
        y={y2}
        fill={accent}
        textAnchor="start"
        dominantBaseline="central"
        className="fade-in-text outer-text"
      >
        {name}
      </text>
    </g>
  );
};

const LanguageChart = () => {
  const [languageStats, setLanguageStats] = useState([]);
  const [totalBytes, setTotalBytes] = useState(0);

  const languageColors = {
    HTML: '#E44D26',
    CSS: '#264DE4',
    JavaScript: '#DAA520',
    Python: '#3572A5',
    Ruby: '#701516',
    Shell: '#4EAA25',
    Batchfile: '#C1F12E',
    Java: '#6F4E37',
  };

  useEffect(() => {
    const fetchRepositories = async () => {
      const repos = await axios.get(
        'https://api.github.com/users/SymbioticLove/repos',
      );
      const stats = {};
      let bytesTotal = 0; // Hold the total bytes

      for (const repo of repos.data) {
        const languages = await axios.get(repo.languages_url);
        for (const [language, bytes] of Object.entries(languages.data)) {
          stats[language] = (stats[language] || 0) + bytes;
          bytesTotal += bytes; // Sum up the bytes
        }
      }

      // Filter languages that comprise more than 1% of the total bytes
      const threshold = 0.01 * bytesTotal;
      const filteredStats = Object.keys(stats)
        .filter(language => stats[language] > threshold)
        .map(language => ({
          name: language,
          value: stats[language],
          bytes: stats[language],
        }));

      setTotalBytes(bytesTotal); // Set total bytes
      setLanguageStats(filteredStats);
    };

    fetchRepositories();
  }, []);

  return (
    <div>
      <div className="fade-in-text total-div">
        Total Bytes: {totalBytes.toLocaleString()}
      </div>
      <ResponsiveContainer width="100%" height={325} className="r-container">
        <PieChart>
          <Pie
            data={languageStats}
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            label={props => renderCustomizedLabel(props, languageStats.length)}
            labelLine={false}
          >
            {languageStats.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={languageColors[entry.name] || '#000000'}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LanguageChart;
