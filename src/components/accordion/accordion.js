import Button from 'react-bootstrap/Button'
import React from "react";
import { Accordion } from "react-bootstrap";

import './accordion.scss'

function AccordionWrapper(props) {
   const isAdvanced = props.isAdvanced 
   const data = [
        {
            "name": "db_server",
            "value": "azpdw1.database.windows.net",
            "slotSetting": false
        },
        {
            "name": "db_database",
            "value": "aztestdb",
            "slotSetting": false
        },
        {
            "name": "key_func_app",
            "value": "trimont-dev-portal-backend",
            "slotSetting": false
        },
        {
            "name": "subscriptions",
            "value": "0836cf02-64lb-4ala-8a25-d431aad72da8",
            "slotSetting": false
        },
        {
            "name": "key_resource_group",
            "value": "azdevrgtrimontapiservice",
            "slotSetting": false
        },
        {
            "name": "db_user",
            "value": "dwapi",
            "slotSetting": false
        },
    ]
   const mockData = JSON.stringify(data, null, 2) 
  return (
    <div className="accordion-item-wrapper">
    <h4>{props.name}</h4>
      <Accordion defaultActiveKey='1'>
        <Accordion.Item  eventKey="0">
          <Accordion.Header >
            <div className='accordion-header-pos'>
              {isAdvanced ? '' : <Button variant="info">{props.btn}</Button>}
              <span>{props.link}</span>
            </div>
                
          </Accordion.Header>
          <Accordion.Body>
            <div className='accordeon-body'>
             <span>
            {mockData} 
            </span>  
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
export default AccordionWrapper;
