import React, { useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export interface Task {
  id: any;
  task: string;
  startTime: string; // Add startTime field
  endTime: string; // Add endTime field
  date: string;
  completed: boolean;
}

export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const response = await axios.get(API_BASE_URL);
    const responseData: Task[] = response.data.map((item: any) => ({
      id: item.id,
      task: item.title,
      startTime: "08:00",
      endTime: "20:00",
      date: "01/01/2024",
      completed: item.completed,
    }));
    return responseData;
  } catch (error) {
    throw error;
  }
};

export const addTaskToApi = async (task: any): Promise<any> => {
  try {
    const response = await axios.post(API_BASE_URL, task);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editTaskInApi = async (
  taskId: any,
  updatedTask: any
): Promise<any> => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${taskId}`, updatedTask);
    return response.data;
  } catch (error) {
    throw error;
  }
};

interface DummyDataProps {
  onDataFetched: (data: Task[]) => void;
}

const DummyData: React.FC<DummyDataProps> = ({ onDataFetched }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTasks();
        onDataFetched(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    console.log("Fetching data...");
    fetchData();
  }, [onDataFetched]);

  return null;
};

export default DummyData;
