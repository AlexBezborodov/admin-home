import Button from 'react-bootstrap/Button'
import React from "react";
import { useState } from "react";
import OpenedAccordion from '../../opened-accordion/opened-accordion';

import { Tabs, Tab } from "react-bootstrap";
import AccordionWrapper from "../../accordion/accordion";

import "./tabs.scss";

function CustomdTabs() {
  const [key, setKey] = useState("restApi");
  const tabText = 'Pharetra at ultricies condimentum hac dictumst netus lectus metus. Pharetra vitae bibendum sapien duis enim tristique nunc. Nullam mi quisque facilisis enim augue est, elit est scelerisque. Ac vel ornare sem lectus auctor nisl volutpat vestibulum. Enim eu habitasse turpis libero cursus vitae amet. Est pellentesque neque sit felis massa arcu condimentum. Nulla vitae vel euismod tempus orci. Et duis sagittis, tincidunt habitant proin turpis. Nulla ipsum cursus blandit purus vitae egestas. Turpis venenatis sit eget dictum. Interdum pulvinar libero non et enim nisl tempus enim ut.'
  const mockData = [
    {id: 0, link: 'Trimont_Borrowers', name: '/api/TrimontBorrowers', color: 'Info', btn: 'Get', isAdvanced: false},
    {id: 1, link: 'Trimont_Collaterals', name: '/api/TrimontCollaterals', color: 'Success', btn: 'Put', isAdvanced: false},
    {id: 2, link: 'Trimont_Borrowers', name: 'TrimontBorrowers', color: 'Warning', btn: 'Post', isAdvanced: false}
  ]

  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 custom-tabs"
      >
        <Tab className='custom-tab' eventKey="restApi" title="Trimont REST API">
        <div className='tabs-text'>  
            <p className='text-start'>{tabText}</p>         
        </div>
        <OpenedAccordion key={`${mockData[0].id}`} link={mockData[0].link}  name={mockData[0].name} btn={mockData[0].btn} isAdvanced={mockData[0].isAdvanced} show={true}/>
        {mockData.map( (item, id) => {
          
         return <AccordionWrapper key={`${item.id}`} link={item.link}  name={item.name} btn={item.btn} isAdvanced={item.isAdvanced} show={false}/> 
        })}
        <div className='tabs-text'>  
            <p className='text-start'>{tabText}</p>         
        </div>
        <div className='btns-block'>
            <Button >Download API JSON</Button>
            <Button >Swagger Page</Button>
        </div>
        </Tab>
        <Tab eventKey="advancedApi" title="Trimont Advances OData API">
        
        <OpenedAccordion key={'0'} link={'https://trimontoda.azurewebsites$metadata'}  name={'Trimont'} btn={'Get'} isAdvanced={true} show={true}/>
        <div className='btns-block'>
            <Button >Download Metadata</Button>
        </div>
        </Tab>
      </Tabs>
     
    </div>
  );
}
export default CustomdTabs;
