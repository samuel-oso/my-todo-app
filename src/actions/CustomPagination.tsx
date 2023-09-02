import React from "react";
import { Pagination } from "@mantine/core";

interface CustomPaginationProps {
  total: number;
  value: number;
  onChange: (page: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  total,
  value,
  onChange,
}) => {
  return (
    <Pagination
      className="!gap-2 justify-center relative h-60 items-end mt-32"
      total={total}
      value={value}
      onChange={onChange}
      style={{ borderTop: "1px solid #EAECF0" }}
    />
  );
};

export default CustomPagination;
