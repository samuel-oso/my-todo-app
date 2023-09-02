import React, { useEffect } from "react";
import axios from "axios";

interface DummyDataProps {
  onDataFetched: (data: Task[]) => void;
}

interface Task {
  id: number;
  task: string;
  time: string;
  completed: boolean;
}

const DummyData: React.FC<DummyDataProps> = ({ onDataFetched }) => {
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const responseData = response.data.map((item: any) => ({
        id: item.id,
        task: item.title,
        time: "",
        completed: item.completed,
      }));
      onDataFetched(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return null;
};

export default DummyData;
