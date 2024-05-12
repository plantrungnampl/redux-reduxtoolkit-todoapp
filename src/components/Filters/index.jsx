import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";

const { Search } = Input;
import { filtersSlice } from "./FilterSlice";
export const Filters = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState("All");
  const [filterPriority, setFilterPriority] = useState("");

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
    dispatch(filtersSlice.actions.SEARCH_FILTER_CHANGER(event.target.value));
  };
  const handleStatusChandle = (event) => {
    setStatus(event.target.value);
    dispatch(filtersSlice.actions.STATUS_FILTER_CHANGER(event.target.value));
  };
  const handleFilterPriority = (value) => {
    setFilterPriority(value);
    dispatch(filtersSlice.actions.PRIORITY_FILTER_CHANGER(value));
  };
  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          value={searchText}
          onChange={handleSearchTextChange}
          placeholder="input search text"
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={handleStatusChandle}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          value={filterPriority}
          onChange={handleFilterPriority}
        >
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
};
