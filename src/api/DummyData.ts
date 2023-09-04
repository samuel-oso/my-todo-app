import React, { useEffect } from "react";
import axios from "axios";

interface DummyDataProps {
  onDataFetched: (data: Task[]) => void;
}

interface Task {
  id: number;
  task: string;
  time: string;
  date: string;
  completed: boolean;
}

const DummyData: React.FC<DummyDataProps> = ({ onDataFetched }) => {
  // Fetch Tasks
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const responseData = response.data.map((item: any) => ({
        id: item.id,
        task: item.title,
        time: "8:00am - 10:00am",
        date: "3, sept, 2023",
        completed: item.completed,
      }));
      onDataFetched(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Add Task

  useEffect(() => {
    fetchData();
  }, []);

  return null;
};

export default DummyData;
