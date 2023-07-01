'use client'

import React, {useEffect, useState} from 'react';
import {Dropdown, Layout, Space, Table, theme} from 'antd';
import {DownOutlined} from "@ant-design/icons";
import {Congregation, Floor, Office} from "@/app/interfaces";


const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [offices, setOffices] = useState<Office[]>([]);
  const [floors, setFloors] = useState<Floor[]>([]);
  const [congregations, setCongregations] = useState<Congregation[]>([]);
  const [selectedOfficeId, setSelectedOfficeId] = useState<number | null>(null);
  const [selectedFloorId, setSelectedFloorId] = useState<number | null>(null);
  const [isFloorSelectionEnabled, setIsFloorSelectionEnabled] = useState(false);

  useEffect(() => {
    // Fetch the offices from the API
    fetch('http://localhost:8000/org/offices/')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data)
          setOffices(data);
        })
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
        });

    const savedOfficeId = Number(localStorage.getItem('selectedOffice'));
    const savedFloorId = Number(localStorage.getItem('selectedFloor'));

    if (savedOfficeId) {
      setSelectedOfficeId(savedOfficeId)
      fetchAndSetFloors(savedOfficeId);
    }

    if (savedFloorId && savedOfficeId) {
      setSelectedFloorId(savedFloorId);
      setIsFloorSelectionEnabled(true)
      fetchAndSetCongregations(savedFloorId);
    }
  }, []);


  const fetchAndSetFloors = (officeId: number) => {
    fetch(`http://localhost:8000/org/offices/${officeId}/floors/`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setFloors(data);
        })
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
        });
  }

  const fetchAndSetCongregations = (floorId: number) => {
    fetch(`http://localhost:8000/prayer/${floorId}/congregations/`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data)
          setCongregations(data);
        })
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
        });
  }

  const handleOfficeSelect = (officeId: number) => {
    setSelectedOfficeId(officeId);
    setIsFloorSelectionEnabled(true);
    localStorage.setItem('selectedOffice', String(officeId)); // Save the ID to localStorage
    fetchAndSetFloors(officeId)
  };

  const handleFloorSelect =  (floorId: number) => {
    setSelectedFloorId(floorId);
    localStorage.setItem('selectedFloor', String(floorId));
    fetchAndSetCongregations(floorId);
  };

  const officeItems = offices.map(office => ({
    label: office.name,
    key: office.id,
    onClick: () => handleOfficeSelect(office.id)
  }));

  const officeMenuProps = {
    items: officeItems,
  };

  const floorItems = floors.map(floor => ({
    label: floor.number + 'th',
    key: floor.id,
    onClick: () => handleFloorSelect(floor.id)
  }));

  const floorMenuProps = {
    items: floorItems,
  };

  const dataSource = congregations.map(congregation => ({
    key: congregation.id,
    prayer: congregation.prayer,
    time: congregation.time,
  }))

  const columns = [
    {
      title: 'Prayer',
      dataIndex: 'prayer',
      key: 'prayer',
    },
    {
      title: 'Congregation',
      dataIndex: 'time',
      key: 'time',
      align: 'right' as 'right'
    },
  ];

  return (
      <Layout>
        <Header
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 1,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: "space-between"
            }}
        >
          <div className="logo"><h2 className="text-2xl font-bold text-blue-500">PRAYER TIMES</h2></div>
          <div className="menu text-white">
            <span>I am at </span>
            <Dropdown menu={officeMenuProps} trigger={['click']} className="text-blue-500" placement="bottomRight">
                <Space>
                  {selectedOfficeId ? offices.find(office => office.id === selectedOfficeId)?.name : 'Select an office'}
                  <DownOutlined />
                </Space>
            </Dropdown>
            <span> on the </span>
            <Dropdown menu={floorMenuProps} trigger={['click']} className="text-blue-500" placement="bottomRight" disabled={!isFloorSelectionEnabled}>
                <Space>
                  {selectedOfficeId && selectedFloorId ? floors.find(floor => floor.id === selectedFloorId)?.number + 'th': 'Select a floor'}
                  <DownOutlined />
                </Space>
            </Dropdown>
            <span> Floor</span>
          </div>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px' }}>
          <div style={{ padding: 24, minHeight: "75vh", maxWidth: "600px", margin: "20px auto", background: colorBgContainer }}>
            <Table dataSource={dataSource} columns={columns} pagination={false} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Developed by <a href="https://linkedin.com/in/maahad767/" target="_blank">Mohammad Abdul Ahad</a></Footer>
      </Layout>
  );
};

export default App;