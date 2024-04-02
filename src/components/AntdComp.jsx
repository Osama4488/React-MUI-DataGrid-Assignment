import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Space, Table } from 'antd';
import Draggable from "react-draggable";
const items = [
  {
    key: '1',
    label: 'Action 1',
  },
  {
    key: '2',
    label: 'Action 2',
  },
];


const ThirdChildTable= () => {
    const columns = [
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Status',
          key: 'state',
          render: () => <Badge status="success" text="Finished" />,
        },
        {
          title: 'Upgrade Status',
          dataIndex: 'upgradeNum',
          key: 'upgradeNum',
        },
        {
          title: 'Action',
          dataIndex: 'operation',
          key: 'operation',
          render: () => (
            <Space size="middle">
              <a>Pause</a>
              <a>Stop</a>
              <Dropdown
                menu={{
                  items,
                }}
              >
                <a>
                  More <DownOutlined />
                </a>
              </Dropdown>
            </Space>
          ),
        },
      ];
      const data = [];
      for (let i = 0; i < 3; ++i) {
        data.push({
          key: i.toString(),
          date: '2014-12-24 23:12:00',
          name: 'This is production name',
          upgradeNum: 'Upgraded: 56',
        });
      }
    return (
<Table columns={columns} dataSource={data} pagination={false} />
    )
}




const App = () => {
  const expandedRowRender = () => {
    const columns = [
        {
          title: 'Account',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Unrealized PnL',
          dataIndex: 'platform',
          key: 'platform',
        },
        {
          title: 'Realized PnL',
          dataIndex: 'version',
          key: 'version',
        },
        {
          title: 'Total PnL',
          dataIndex: 'upgradeNum',
          key: 'upgradeNum',
        },
        {
          title: 'Total Cost',
          dataIndex: 'creator',
          key: 'creator',
        },
        {
          title: 'Qty Bought',
          dataIndex: 'createdAt',
          key: 'createdAt',
        },
        {
          title: 'Qty Sold',
          dataIndex: 'createdAt',
          key: 'createdAt',
        },
        {
            title: 'Qty Shorted',
            dataIndex: 'createdAt',
            key: 'createdAt',
          },
      ];
    const data = [];
    for (let i = 0; i < 1; ++i) {
        data.push({
          key: i.toString(),
          name: 'Screen',
          platform: 'iOS',
          version: '10.3.4.5654',
          upgradeNum: 500,
          creator: 'Jack',
          createdAt: '2014-12-24 23:12:00',
        });
      }
    return <Table
    style={{marginLeft:"0px !important"}}
    columns={columns} dataSource={data} pagination={false}
    showHeader={false}
    expandable={{
        
        expandedRowRender: (record) => (
       
        <ThirdChildTable/>
        ),
        rowExpandable: (record) => record.name !== 'Not Expandable',
      }}
    />;
  };



  const columns = [
    {
      title: 'Account',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Unrealized PnL',
      dataIndex: 'platform',
      key: 'platform',
    },
    {
      title: 'Realized PnL',
      dataIndex: 'version',
      key: 'version',
    },
    {
      title: 'Total PnL',
      dataIndex: 'upgradeNum',
      key: 'upgradeNum',
    },
    {
      title: 'Total Cost',
      dataIndex: 'creator',
      key: 'creator',
    },
    {
      title: 'Qty Bought',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Qty Sold',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
        title: 'Qty Shorted',
        dataIndex: 'createdAt',
        key: 'createdAt',
      },
  ];
  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i.toString(),
      name: 'Screen',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00',
    });
  }
  return (
    <Draggable>
   
        <div 
        style={{cursor:"move",margin:"auto"}}
        >
        <Table
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ['0'],
        }}

         
        dataSource={data}
        size="small"
      />
        </div>
    </Draggable>
  );
};
export default App;